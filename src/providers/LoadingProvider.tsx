"use client";

import React, {
    createContext,
    useContext,
    useState,
    useCallback,
    ReactNode,
} from "react";

export interface LoadingContextType {
    isLoading: boolean;
    startLoading: () => void;
    stopLoading: () => void;
    withLoading: <T>(fn: () => Promise<T>) => Promise<T>;
}

export const LoadingContext = createContext<
    LoadingContextType | undefined
>(undefined);

export function LoadingProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [loadingCount, setLoadingCount] = useState(0);

    const startLoading = useCallback(() => {
        setLoadingCount((prev) => prev + 1);
    }, []);

    const stopLoading = useCallback(() => {
        setLoadingCount((prev) => Math.max(0, prev - 1));
    }, []);

    const withLoading = useCallback(
        async <T,>(fn: () => Promise<T>): Promise<T> => {
            startLoading();

            try {
                return await fn();
            } finally {
                stopLoading();
            }
        },
        [startLoading, stopLoading]
    );

    return (
        <LoadingContext.Provider
            value={{
                isLoading: loadingCount > 0,
                startLoading,
                stopLoading,
                withLoading,
            }}
        >
            {children}
        </LoadingContext.Provider>
    );
}