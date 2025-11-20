'use client';

import {useState, useEffect, useRef} from "react";
import {createBooking} from "@/lib/actions/booking.actions";
import posthog from "posthog-js";
import Confetti from 'react-confetti';

const BookEvent = ({ eventId, slug }: { eventId: string, slug: string;}) => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [runConfetti, setRunConfetti] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);

    const confettiContainerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // clear previous errors
        setError(null);
        setEmailError(null);

        // Trim and validate email using a simple regex
        const trimmed = email.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!trimmed || !emailRegex.test(trimmed)) {
            setEmailError("Please enter a valid email address.");
            return;
        }

        setLoading(true);

        try {

            const result = await createBooking({ eventId, email: trimmed });

            if (result.success) {
                setSubmitted(true);
                setRunConfetti(true);
                posthog.capture("event_booked", { eventId, slug, email });
            } else {
                const err = new Error(result.error || "Booking creation failed");
                setError(err.message);
                posthog.captureException(err);
            }
        } catch (err) {
            const errObj = err instanceof Error ? err : new Error(String(err));
            setError(errObj.message);
            posthog.captureException(errObj);
        } finally {
            setLoading(false);
        }
    };

    // This effect will run the confetti for 5 seconds and then stop.
    useEffect(() => {
        if (runConfetti) {
            const timer = setTimeout(() => setRunConfetti(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [runConfetti]);

    // This effect measures the container and updates dimensions on resize
    useEffect(() => {
        const updateDimensions = () => {
            if (confettiContainerRef.current) {
                setDimensions({
                    width: confettiContainerRef.current.clientWidth,
                    height: confettiContainerRef.current.clientHeight,
                });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, [submitted]); // Re-measure when `submitted` changes, as height might change

    return (
        <div id="book-event" ref={confettiContainerRef} className="relative">
            {runConfetti && (
                <Confetti recycle={false} numberOfPieces={200} width={dimensions.width} height={dimensions.height} />
            )}
            {submitted ? (
                <div className="flex flex-col items-center justify-center text-center gap-3 py-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-bold">Event Booked!</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Thank you for signing up. We&apos;ve sent a confirmation to your email.</p>
                </div>
            ): (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); if (emailError) setEmailError(null); }}
                            id="email"
                            placeholder="Enter your email address"
                            disabled={loading || submitted}
                            aria-invalid={!!emailError}
                            className={emailError ? 'border-red-500' : ''}
                        />
                        {emailError && (
                            <p className="mt-2 text-sm text-red-500" role="alert">{emailError}</p>
                        )}
                        {error && (
                            <p className="mt-2 text-sm text-red-500" role="alert">{error}</p>
                        )}
                    </div>

                    <button type="submit" className="button-submit" disabled={loading || submitted}>
                        {loading ? 'Booking...' : 'Submit'}
                    </button>
                </form>
            )}
        </div>
    )
}
export default BookEvent