import connectDB from '@/lib/mongodb';
import EventModel from '@/database/event.model';
import type { IEvent } from '@/database';

/**
 * Fetch events directly from the database.
 * Throws on errors so callers can decide on fallback behavior.
 */
export async function getEvents(): Promise<IEvent[]> {
  try {
    await connectDB();

    const events = await EventModel.find().sort({ createdAt: -1 }).lean().exec();

    // cast lean result to IEvent[] for caller convenience
    return events as unknown as IEvent[];
  } catch (err) {
    console.error('getEvents error:', err);
    throw err;
  }
}
