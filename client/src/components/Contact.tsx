// Sahi spelling aur names:
import { Mail, MessageSquare } from 'lucide-react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiVercel } from "react-icons/si";



export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative bg-slate-950/50">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to <span className="text-cyan-400">Collaborate?</span>
        </h2>
        <p className="text-slate-400 mb-12 text-lg max-w-2xl mx-auto">
         I am always open to new AI projects and professional opportunities. Feel free to reach out to me via the links provided below
        </p>
        
        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Email Card */}
          <a href="mailto:ambreensheikh900@gmail.com" className="group p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300">
            <Mail className="text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-white font-semibold mb-1">Email</h3>
            <p className="text-cyan-400 text-xs">ambreensheikh900@gmail.com</p>
          </a>

          {/* LinkedIn Card */}
          <a href="https://www.linkedin.com/in/ambreen-sheikh-1502172b5/" target="_blank" className="group p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300">
            < FaLinkedin className="text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-white font-semibold mb-1">LinkedIn</h3>
            <p className="text-cyan-400 text-xs">Professional Profile</p>
          </a>

          {/* Code & Demo Card */}
<div className="group p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300">
  <div className="flex justify-center gap-4 mb-4">
    <FaGithub className="text-cyan-400 group-hover:scale-110 transition-transform" size={32} />
    <SiVercel className="text-white group-hover:scale-110 transition-transform" size={28} />
  </div>
  <h3 className="text-white font-semibold mb-2">My Work</h3>
  <div className="flex flex-col gap-2">
    <a href="https://github.com/Ambreensheikh/" target="_blank" className="text-xs text-cyan-400 hover:underline">View Source Code</a>
    <a href="https://vercel.com/ambreen-sheikhs-projects" target="_blank" className="text-xs text-white hover:underline">View Live Demos</a>
  </div>
</div>

          {/* WhatsApp Card */}
          <a href="https://wa.me/923313375013" target="_blank" className="group p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-green-500/50 transition-all duration-300">
            <MessageSquare className="text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-white font-semibold mb-1">WhatsApp</h3>
            <p className="text-cyan-400 text-xs">Direct Chat</p>
          </a>

        </div>
      </div>
    </section>
  );
}