"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div className="py-20 text-center">
            <h2>Failed to load blog.</h2>

            <button
                onClick={() => reset()}
                className="mt-4"
            >
                Retry
            </button>
        </div>
    );
}