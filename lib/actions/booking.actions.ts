'use server';

import Booking from '@/database/booking.model';
import Event from '@/database/event.model';
import connectDB from '@/lib/mongodb';
import mongoose from 'mongoose';

type CreateBookingResult = { success: boolean; error?: string };

export const createBooking = async ({ eventId, email }: { eventId: string; email: string; }): Promise<CreateBookingResult> => {
    // Basic input validation
    const trimmedEmail = (email || '').toString().trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
        return { success: false, error: 'Invalid email address' };
    }

    if (!eventId || !mongoose.Types.ObjectId.isValid(eventId)) {
        return { success: false, error: 'Invalid eventId' };
    }

    try {
        await connectDB();

        // Verify referenced event exists
        try {
            const eventExists = await Event.findById(eventId).lean();
            if (!eventExists) {
                return { success: false, error: 'Event not found' };
            }
        } catch (err) {
            console.error('Error checking event existence', err);
            return { success: false, error: 'Failed to verify event' };
        }

        // Prevent duplicate bookings for same email + event
        const existing = await Booking.findOne({ eventId, email: trimmedEmail }).lean();
        if (existing) {
            return { success: false, error: 'Booking already exists for this event and email' };
        }

        await Booking.create({ eventId, email: trimmedEmail });

        return { success: true };
    } catch (e) {
        // Log full error details for server-side debugging
        const message = e instanceof Error ? e.message : String(e);
        const stack = e instanceof Error ? e.stack : undefined;
        console.error('create booking failed', { message, stack });

        // Handle duplicate key errors (race condition where two requests insert simultaneously)
        // MongoServerError from the driver often contains code === 11000 and/or message with E11000
        const errObj = e as Record<string, unknown>;
        if (
            (typeof errObj['code'] === 'number' && errObj['code'] === 11000) ||
            (typeof errObj['message'] === 'string' && (errObj['message'] as string).includes('E11000'))
        ) {
            return { success: false, error: 'Booking already exists for this event and email' };
        }

        // Handle Mongoose validation errors explicitly
        // e may be a ValidationError with error.errors map
        // If this is a Mongoose ValidationError, extract messages
        if (typeof e === 'object' && e !== null) {
            const eObj = e as Record<string, unknown>;
            if (eObj.name === 'ValidationError' && 'errors' in eObj) {
                const errs = (eObj as { errors: Record<string, { message?: string }> }).errors;
                const messages = Object.values(errs).map((er) => er?.message || 'Validation error').join('; ');
                return { success: false, error: messages || 'Validation failed' };
            }
        }

        return { success: false, error: message || 'Failed to create booking' };
    }
};