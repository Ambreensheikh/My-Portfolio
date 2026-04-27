'use client';

import { projects } from '../lib/projects';
import { motion } from 'framer-motion';
import { ExternalLink, Play, Code2 } from 'lucide-react';

export default function ProjectGrid() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* 6 Column Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[minmax(350px,auto)]">
        {projects.map((project, index) => {
          
          // --- NEW LOGIC: Row balance karne ke liye ---
          
          // 1. Pehli row ke bare cards (Management & Vault) = 3 columns each (3+3=6)
          // Ya agar aap unhe 4-2 rakhna chahen toh wo bhi ho sakta hai
          const isLarge = project.id === 'ai-management-system' || project.id === 'ai-employee-vault';
          
          // 2. Teeno chote projects (Inventory, Book, etc.) = 2 columns each (2+2+2=6)
          // Is se teeno ek hi line mein aa jayenge aur khali jagah bhar jayegi
          const isSmallRow = project.id === 'ai-inventory' || project.id === 'ai-explained-book' || project.category === 'Research';

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/40 backdrop-blur-xl p-8 hover:border-cyan-500/50 transition-all duration-700 flex flex-col ${
                isLarge 
                  ? 'lg:col-span-3' // Do bare projects 3-3 karke ek line mein
                  : 'lg:col-span-2'  // Baki teeno 2-2-2 karke ek line mein
              }`}
            >
              {/* Background Glow */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px] group-hover:bg-cyan-500/10 transition-colors duration-700" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-cyan-400 bg-cyan-400/10 px-3 py-1.5 rounded-full border border-cyan-400/20">
                    {project.category}
                  </span>
                  <Code2 size={16} className="text-slate-500" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-xs leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[9px] font-semibold text-cyan-200/70 bg-cyan-500/5 px-2 py-1 rounded border border-cyan-500/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  <a href={project.videoUrl} target="_blank" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-slate-950 text-xs font-bold hover:bg-cyan-400 transition-all">
                    <Play size={12} fill="currentColor" /> Demo
                  </a>
                  <a href={project.videoUrl} target="_blank" className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}