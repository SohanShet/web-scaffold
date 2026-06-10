// "use client";

// import { useLoading } from "@/hooks/useLoading";

// export default function GlobalLoadingIndicator() {
//     const { isLoading } = useLoading();

//     if (!isLoading) return null;

//     return (
//         <div className="absolute bottom-0 left-0 w-full z-[50] h-1 bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 animate-pulse overflow-hidden">
//             <div
//                 className="h-full w-full bg-gradient-to-r from-slate-600 via-slate-400 to-slate-800 animate-shimmer"
//                 style={{ backgroundSize: '200% 100%' }}
//             />
//         </div>
//     );
// }


"use client";

import { useLoading } from "@/hooks/useLoading";

export default function GlobalLoadingIndicator() {
    const { isLoading } = useLoading();

    if (!isLoading) return null;

    return (
        <div className="absolute bottom-0 left-0 w-full z-[9999] h-[3px] w-full overflow-hidden bg-black/10">
            <div className="animate-youtube-loader h-full bg-black" />
        </div>
    );
}