import { Cpu } from 'lucide-react';

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-[9999] bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-cyan-500/50 flex items-center justify-center bg-cyan-500/10 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            <Cpu className="text-cyan-400 w-5 h-5" />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-white font-extrabold text-xl tracking-tighter brightness-150">
              AMBREEN <span className="text-cyan-400 font-medium">SHEIKH</span>
            </span>
            <span className="text-[9px] text-slate-400 font-mono tracking-[0.2em] uppercase mt-0.5">
              Neural Systems Architect
            </span>
          </div>
        </div>

        {/* Navigation Links - FIXED GAP & SPACING */}
        <div className="flex items-center gap-10"> 
          <a 
            href="#projects" 
            className="text-sm font-bold text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] uppercase tracking-widest"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="text-sm font-bold text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] uppercase tracking-widest"
          >
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}