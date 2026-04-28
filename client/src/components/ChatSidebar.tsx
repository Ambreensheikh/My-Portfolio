'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useChat, type UIMessage } from '@ai-sdk/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MessageSquare, Sparkles, Command } from 'lucide-react';
import { projects } from '../lib/projects';

export default function ChatSidebar() {
  // Local state for input as required by AI SDK v6
  const [input, setInput] = useState('');
  
  const { 
    messages, 
    status, 
    sendMessage 
  } = useChat();

  const isLoading = status === 'submitted' || status === 'streaming';

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;
    
    const text = input;
    setInput('');
    try {
      await sendMessage({ text });
    } catch (error) {
      console.error("Chat Error:", error);
    }
  };

  const suggestions = [
    "How does the EDA work in the Employee Vault?",
    "Explain the Node.js controllers in the Management System",
    "What is the tech stack for the AI Todo Engine?",
    "How do you handle multi-agent orchestration?"
  ];

  return (
    <div className="w-[450px] border-l border-slate-800 bg-slate-950 flex flex-col h-screen sticky top-0 shadow-2xl overflow-hidden">
      {/* Dynamic Header */}
      <div className="p-8 border-b border-slate-800/50 bg-slate-900/20 backdrop-blur-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
              <Command className="text-cyan-400 w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-sm tracking-tighter uppercase text-white italic">Neural-Core v2.0</h2>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">Kernel Active</span>
              </div>
            </div>
          </div>
          <div className="text-right">
             <span className="text-[10px] text-slate-500 font-mono block">UPTIME: 99.9%</span>
             <span className="text-[10px] text-cyan-500/50 font-mono block">TASKS: {projects.length} Loaded</span>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-8 py-6 space-y-8 scrollbar-hide">
        {messages.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center h-full text-center space-y-6 opacity-60"
          >
            <div className="p-4 rounded-full bg-slate-900 border border-slate-800">
              <MessageSquare className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-300">Awaiting technical queries...</p>
              <p className="text-xs text-slate-500 mt-2">Ask about my architectural implementations or code patterns.</p>
            </div>
            
            <div className="grid grid-cols-1 gap-3 w-full max-w-[300px]">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={async () => {
                    if (isLoading) return;
                    try {
                      await sendMessage({
                        text: s,
                      });
                    } catch (error) {
                      console.error("Chat Error:", error);
                    }
                  }}
                  className="px-4 py-2 text-xs text-slate-400 border border-slate-800 rounded-xl hover:bg-slate-900 hover:text-cyan-400 hover:border-cyan-500/30 transition-all text-left"
                >
                  {s}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        <AnimatePresence>
          {messages.map((m: UIMessage) => (
            <motion.div 
              key={m.id} 
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`relative max-w-[90%] p-5 rounded-3xl text-sm leading-relaxed whitespace-pre-wrap ${
                m.role === 'user' 
                  ? 'bg-cyan-600 text-white shadow-xl shadow-cyan-900/30 font-medium' 
                  : 'bg-slate-900 border border-slate-800 text-slate-300 shadow-lg'
              }`}>
                {/* Handle parts-based message content */}
                {m.parts.map((part, i) => (
                  part.type === 'text' ? <span key={i}>{part.text}</span> : null
                ))}
                {m.role === 'assistant' && (
                  <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-cyan-400 opacity-20" />
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoading && (
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/50 w-fit">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
            </div>
            <span className="text-[10px] text-cyan-400 font-mono uppercase tracking-widest">Synthesizing Response...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-8 bg-slate-950 border-t border-slate-800/50">
        <form onSubmit={handleSubmit} className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
          <div className="relative flex items-center bg-slate-900 border border-slate-700/50 rounded-2xl p-1.5 focus-within:border-cyan-500/50 transition-all">
            <input
              className="flex-1 bg-transparent py-3 px-4 text-sm focus:outline-none text-white placeholder:text-slate-600"
              value={input}
              onChange={handleInputChange}
              placeholder="Query the architecture..."
            />
            <button 
              type="submit" 
              disabled={isLoading || !input}
              className="p-3 rounded-xl bg-cyan-600 text-white disabled:bg-slate-800 disabled:text-slate-600 transition-all shadow-lg shadow-cyan-900/20"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
        <div className="mt-4 flex items-center justify-center gap-4">
           <div className="flex items-center gap-1.5">
             <div className="w-1 h-1 rounded-full bg-slate-700" />
             <span className="text-[9px] text-slate-600 font-mono">LLM: GPT-4o</span>
           </div>
           <div className="flex items-center gap-1.5">
             <div className="w-1 h-1 rounded-full bg-slate-700" />
             <span className="text-[9px] text-slate-600 font-mono">LATENCY: 42ms</span>
           </div>
        </div>
      </div>
    </div>
  );
}
