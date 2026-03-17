'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Database, Cpu, Activity, Layout } from 'lucide-react';

interface Node {
  id: string;
  label: string;
  type: 'input' | 'process' | 'database' | 'output';
  description?: string;
}

interface VisualArchitectureProps {
  nodes: Node[];
}

export default function VisualArchitecture({ nodes }: VisualArchitectureProps) {
  const getIcon = (type: Node['type']) => {
    switch (type) {
      case 'input': return <Activity className="w-4 h-4" />;
      case 'process': return <Cpu className="w-4 h-4" />;
      case 'database': return <Database className="w-4 h-4" />;
      case 'output': return <Layout className="w-4 h-4" />;
    }
  };

  const getColor = (type: Node['type']) => {
    switch (type) {
      case 'input': return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20';
      case 'process': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'database': return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
      case 'output': return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
    }
  };

  return (
    <div className="relative py-12">
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 items-center">
        {nodes.map((node, i) => (
          <div key={node.id} className="flex items-center gap-6 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:scale-105 ${getColor(node.type)}`}
            >
              <div className="flex items-center gap-3 mb-2">
                {getIcon(node.type)}
                <span className="text-xs font-black uppercase tracking-widest">{node.type}</span>
              </div>
              <h4 className="text-lg font-black tracking-tight text-white mb-1">{node.label}</h4>
              {node.description && (
                <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest leading-tight">
                  {node.description}
                </p>
              )}
              
              {/* Decorative Glow */}
              <div className="absolute inset-0 rounded-2xl bg-current opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            </motion.div>

            {i < nodes.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.1 }}
                className="hidden md:block text-neutral-700"
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
      
      {/* Background Grid Accent */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />
    </div>
  );
}
