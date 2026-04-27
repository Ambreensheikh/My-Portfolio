"use client";
import { useEffect, useRef } from "react";
// Do baar peeche jayen (..) phir lib mein jayen
import { cn } from "../../lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 z-0 h-full w-full bg-slate-950", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(0,0,0,1))]"></div>
      {/* Neural Lines Effect */}
      <div className="absolute inset-0 opacity-30 shadow-[inset_0_0_100px_rgba(0,255,255,0.1)]">
        <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>
    </div>
  );
};