'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, ChevronDown, ChevronRight } from 'lucide-react';

export const SystemDesignNotes = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({});

  const topics = {
    basics: {
      title: 'Basics of System Design',
      subtopics: {
        intro: 'Introduction',
        components: 'Key Components',
        importance: 'Why Important',
        approach: 'Our Approach'
      }
    },
    scaling: {
      title: 'Scaling Systems',
      subtopics: {
        horizontal: 'Horizontal Scaling',
        vertical: 'Vertical Scaling',
        distributed: 'Distributed Systems'
      }
    },
    architecture: {
      title: 'System Architecture',
      subtopics: {
        monolithic: 'Monolithic',
        microservices: 'Microservices',
        serverless: 'Serverless'
      }
    }
  };

  const toggleTopic = (topic: string) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topic]: !prev[topic]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <motion.div 
        initial={{ x: sidebarOpen ? 0 : -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        className={`bg-white w-72 shadow-lg fixed h-full transition-all duration-300 z-10`}
      >
        <div className="p-4 border-b">
          <h2 className="text-xl font-handwriting text-indigo-600 font-bold">Topics</h2>
        </div>
        <div className="overflow-y-auto h-full pb-20">
          {Object.entries(topics).map(([key, topic]) => (
            <div key={key} className="border-b">
              <button
                onClick={() => toggleTopic(key)}
                className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50"
              >
                <span className="font-handwriting text-gray-700">{topic.title}</span>
                {expandedTopics[key] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </button>
              {expandedTopics[key] && (
                <div className="bg-gray-50">
                  {Object.entries(topic.subtopics).map(([subKey, title]) => (
                    <Link key={subKey} href={`/system-design/${key}/${subKey}`}>
                      <button
                        className="w-full p-3 pl-8 text-left font-handwriting text-sm hover:bg-gray-100 text-gray-600"
                      >
                        {title}
                      </button>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
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
            <h1 className="text-4xl font-bold ml-4 font-handwriting text-indigo-700">
              System Design Notes
            </h1>
          </div>
          <p className="text-gray-700 text-lg">Select a topic from the sidebar.</p>
        </div>
      </div>
    </div>
  );
};
