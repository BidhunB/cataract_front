"use client";

import { motion } from "framer-motion";
import { CheckCircle, Eye, BarChart3, RefreshCw, Download } from "lucide-react";
import { useTheme } from "@/lib/theme-context";

export default function ResultsPage() {
  const { isDark } = useTheme();
  
  // Placeholder values until backend integration
  const severity = "Moderate Cataract";
  const confidence = 92;
  const imageType = "Fundus Image";
  const analysisTime = "3.2 seconds";

  return (
    <div className="min-h-screen pt-32">
      <motion.section 
        className="max-w-4xl mx-auto px-6 py-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
          </div>
          
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-green-600 dark:from-white dark:to-green-400 bg-clip-text text-transparent">
            Analysis Complete!
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Your {imageType.toLowerCase()} has been successfully analyzed by our AI system.
          </p>
        </motion.div>

        {/* Results Summary */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Primary Result */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200/50 dark:border-green-700/30">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Detection Result</h3>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{severity}</p>
              <p className="text-gray-600 dark:text-gray-300">AI Classification</p>
            </div>
          </div>

          {/* Confidence Score */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200/50 dark:border-blue-700/30">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Confidence Level</h3>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{confidence}%</p>
              <p className="text-gray-600 dark:text-gray-300">AI Confidence</p>
            </div>
          </div>
        </motion.div>

        {/* Additional Details */}
        <motion.div
          className="p-8 rounded-2xl bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-zinc-700/50 shadow-xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
            Analysis Details
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Image Type</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{imageType}</p>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Processing Time</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{analysisTime}</p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="/dashboard"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <RefreshCw className="w-5 h-5" />
            Analyze Another Image
          </motion.a>
          
          <motion.button
            onClick={() => {
              // Placeholder for download functionality
              alert("Download functionality will be implemented here");
            }}
            className="px-8 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 font-semibold text-lg rounded-xl flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="w-5 h-5" />
            Download Report
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
}
