"use client";

export default function DefaultDetail({ name }: { name: string }) {
  return (
    <div className="p-8 border-t border-green-800 bg-black/50 text-center text-xs font-mono">
      <p className="mb-4 opacity-70">
        CONNECTING TO SECURE SERVER FOR <span className="text-green-400 font-bold">[{name}]</span>...
      </p>
      <div className="w-1/2 mx-auto h-1 bg-green-900/50 overflow-hidden">
        <div className="h-full bg-green-500 w-1/3 animate-marquee"></div>
      </div>
      <p className="mt-4 text-red-500 border border-red-900/50 inline-block px-3 py-1">
        ERROR: ENCRYPTED DATA (Level 4 Clearance Required)
      </p>
    </div>
  );
}