'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Brain, Code, Cpu } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-indigo-500" />,
      title: "System Design Concepts",
      description: "Deep dive into architectural patterns and design principles"
    },
    {
      icon: <Code className="w-6 h-6 text-indigo-500" />,
      title: "Practical Examples",
      description: "Real-world case studies and implementation strategies"
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-500" />,
      title: "Scalable Architecture",
      description: "Learn to build systems that can handle millions of users"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold font-handwriting text-indigo-700 mb-6">
              System Design
            </h1>
            <p className="text-xl text-gray-600 font-handwriting mb-8 max-w-2xl mx-auto">
              Your comprehensive guide to understanding and implementing scalable system architectures
            </p>
            
            <Link href="/notes" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg transition-all transform hover:scale-105">
              Let&apos;s Get Started
              <ArrowRight className="ml-2" />
            </Link>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mx-auto max-w-4xl">
              <img 
                src="https://raw.githubusercontent.com/karanpratapsingh/portfolio/master/public/static/courses/system-design/chapter-I/load-balancing/load-balancer.png" 
                alt="System Design Overview" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent rounded-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-indigo-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-handwriting font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-handwriting">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Created By Section */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <img 
            src="https://media.licdn.com/dms/image/v2/D5603AQHJA1cIc-eBMw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721647811731?e=1745452800&v=beta&t=ROqWdEx8ove3IJpIMpJ_2PZPQbiq8c0nfazRWxbeBMk" 
            alt="Author" 
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          {/* <h2 className="text-2xl font-handwriting font-bold text-gray-900 mb-2">
            Created with ❤️ by You
          </h2> */}
          <p className="text-gray-600 font-handwriting max-w-2xl mx-auto">
            A passionate developer dedicated to simplifying system design concepts for the next generation of engineers.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <Link href="https://github.com/ictorv" className="text-gray-600 hover:text-indigo-600">
              GitHub
            </Link>
            <Link href="https://linkedin.com/in/ictorvS" className="text-gray-600 hover:text-indigo-600">
              LinkedIn
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}