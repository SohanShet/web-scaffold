"use client";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <html>
            <body className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">
                        Something went wrong
                    </h1>

                    <button
                        onClick={() => reset()}
                        className="mt-4"
                    >
                        Try Again
                    </button>
                </div>
            </body>
        </html>
    );
}