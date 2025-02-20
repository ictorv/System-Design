'use client';

import { motion } from 'framer-motion';

const BasicsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-white rounded-lg shadow-lg p-8 max-w-3xl"
      >
        <motion.section variants={itemVariants} className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            Key Components of System Design
          </h2>
          <ul className="space-y-3 text-lg">
            <li>• Decide Architecture</li>
            <li>• Decide Components</li>
            <li>• Decide Modules</li>
            <li className="pl-6">→ How they interact with each other</li>
            <li className="pl-6">→ To solve Problems</li>
            <li className="pl-6">→ Product Development</li>
          </ul>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            Why So Popular?
          </h2>
          <p className="text-lg">
            Every single "Tech" product is a "System" that has been "Designed."
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            Why Understanding System Design is Important?
          </h2>
          <p className="text-lg">Everything is Practical.</p>
          <p className="text-lg">Break big problems into smaller problem statements.</p>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            What We Will Be Doing:
          </h2>
          <ul className="space-y-3 text-lg">
            <li>• Break problems into solvable sub-problems</li>
            <li>• Decide key components and responsibilities</li>
            <li>• Decide boundaries of each component</li>
            <li>• Key challenges in scaling it</li>
            <li>• Make architecture fault-tolerant and highly available</li>
          </ul>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default BasicsPage;
