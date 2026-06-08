"use client";

import { useState, useRef } from "react";

export function Pre({ children, ...props }: any) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!preRef.current) return;
    
    // Grabs only the text content inside the pre/code block
    const text = preRef.current.innerText;
    await navigator.clipboard.writeText(text);
    
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative">
      <button
        onClick={handleCopy}
        className="top-3 right-3 z-10 absolute bg-gray-800 hover:bg-gray-700 opacity-0 group-hover:opacity-100 px-2 py-1 border border-gray-700 rounded font-medium text-gray-400 hover:text-white text-xs transition-opacity"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre ref={preRef} {...props}>
        {children}
      </pre>
    </div>
  );
}