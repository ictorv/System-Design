// src/app/components/SystemDesignLayout.tsx
'use client';
import { useState, ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, ChevronDown, ChevronRight } from 'lucide-react';

interface SystemDesignLayoutProps {
  children: ReactNode;
}

const SystemDesignLayout = ({ children }: SystemDesignLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({});
  
  // Your existing topics object and toggleTopic function here...

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Your existing sidebar code */}
      <motion.div
        initial={{ x: sidebarOpen ? 0 : -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        className="bg-white w-72 shadow-lg fixed h-full transition-all duration-300 z-10"
      >
        {/* Your existing sidebar content */}
      </motion.div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-72' : 'ml-0'}`}>
        <div className="p-8">
          <div className="flex items-center mb-8">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu size={24} />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SystemDesignLayout;