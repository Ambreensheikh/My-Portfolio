import Header from "../components/Header";
import { BackgroundBeams } from "../components/ui/background-beams";
import { Spotlight } from "../components/ui/Spotlight";
import ProjectGrid from "../components/ProjectGrid";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ChatSidebar from "../components/ChatSidebar";
import { Cpu } from "lucide-react";


export default function Portfolio() {
  return (
    <main className="relative min-h-screen bg-slate-950 antialiased overflow-x-hidden">
      <Header />
      
      {/* 2. Hero Section */}
     <section className="relative z-0 h-[90vh] w-full flex items-center justify-center overflow-hidden pt-20">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="cyan" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-8xl font-extrabold text-white tracking-tighter mb-6 uppercase">
            TECH-<span className="text-cyan-400">SOLUTIONS</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            AI Automation & Full-Stack Engineer | Event-Driven Architecture | Next.js • Node.js • Python | OpenAI Agent SDK & n8n | DevOps (Docker, CI/CD) |  AWS | PostgreSQL & MongoDB
          </p>
          <div className="mt-10">
            <a href="#projects" className="px-8 py-4 rounded-full bg-cyan-400 text-black font-bold hover:scale-105 transition-transform inline-block shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              Explore My Work
            </a>
          </div>
        </div>
        <BackgroundBeams className="opacity-40" />
      </section>
{/* 3. Projects Section */}
<section id="projects" className="relative z-10 py-24 bg-slate-950">
  <div className="max-w-[1450px] mx-auto px-6">
    
    {/* --- STEP 1: Dono Headings ko Sidebar se upar rakhein taake wo Center ho sakein --- */}
    <div className="flex flex-col items-center text-center mb-16 w-full">
      {/* Featured Projects Main Title */}
      <h2 className="text-4xl md:text-7xl font-bold text-white italic uppercase tracking-tighter mb-10">
        Featured <span className="text-cyan-400/50">Projects</span>
      </h2>

      {/* Neural Architecture Portfolio Sub-Title */}
      <div className="space-y-4">
        <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3 justify-center">
          <Cpu className="text-cyan-400 w-6 h-6" />
          Neural Architecture Portfolio
        </h3>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Exploring the intersection of Event-Driven Architecture, Multi-Agent Systems, and 
          High-Performance AI Orchestration.
        </p>
      </div>
    </div>

    {/* --- STEP 2: Ab niche Cards aur Sidebar shuru honge --- */}
    <div className="flex flex-col xl:flex-row gap-12 items-start relative">
      
      {/* Left Side: Sirf Aapka Original ProjectGrid (Bina heading ke) */}
      <div className="flex-1 w-full pb-10"> 
        <ProjectGrid />
      </div>

      {/* Right Side: Sidebar - Jo theek pehle card se shuru hoga */}
      <aside className="hidden xl:block sticky top-32 w-[450px] shrink-0 self-start mt-4">
        <div className="rounded-[2.5rem] overflow-hidden border border-slate-800 bg-slate-900/40 backdrop-blur-xl shadow-2xl h-[750px]">
          <ChatSidebar />
        </div>
      </aside>
      
    </div>
  </div>
</section>

      {/* 4. Contact & Footer */}
      <section id="contact" className="bg-slate-950">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}