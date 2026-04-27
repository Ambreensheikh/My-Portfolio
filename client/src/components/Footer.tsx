import { Cpu } from 'lucide-react';
import { Sparkles } from "lucide-react";


export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side: Logo and Status */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Cpu className="text-cyan-400 w-5 h-5" />
            <span className="text-white font-bold tracking-tighter">AMBREEN<span className="text-cyan-400">.AI</span></span>
          </div>
          <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">
            // All Systems Operational
          </p>
        </div>

        {/* Center: Copyright */}
       <p className="text-slate-500 text-sm flex items-center justify-center gap-1.5">
  © {new Date().getFullYear()} | Powered by Next.js & AI | Crafted with 
  <Sparkles size={16} className="text-blue-500 fill-blue-500/20" />
</p>

        {/* Right side: Social Tags (Just for look) */}
        <div className="flex gap-4 text-slate-600 text-[10px] font-bold uppercase tracking-widest">
          <span className="px-2 py-1 border border-slate-800 rounded">Agentic-Workflows</span>
          <span className="px-2 py-1 border border-slate-800 rounded">Full-Stack</span>
        </div>
      </div>
    </footer>
  );
}
