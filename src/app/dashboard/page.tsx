"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Eye, FileImage, ArrowLeft, Play, CheckCircle } from "lucide-react";
import { useTheme } from "@/lib/theme-context";

export default function DashboardPage() {
  const [imageType, setImageType] = useState<"fundus" | "slitlamp" | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { isDark } = useTheme();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleAnalysis = () => {
    setIsProcessing(true);
    // Simulate processing time
    setTimeout(() => {
      setIsProcessing(false);
      // Here you would typically handle the AI analysis results
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-32">
      <motion.section 
        className="max-w-6xl mx-auto px-6 py-20"
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
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            AI Cataract Detection Dashboard
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Select the type of image you are going to upload and let our AI analyze it for cataract detection.
          </p>
        </motion.div>

        {/* Step 1: Select Image Type */}
        {!imageType && (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.button
              onClick={() => setImageType("fundus")}
              className="group p-8 border-2 border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-2xl dark:hover:bg-gray-800/50 hover:bg-gray-50/50 transition-all duration-300 bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm"
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Fundus Image</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Retinal photograph from fundus camera showing the back of the eye.
              </p>
            </motion.button>
            
            <motion.button
              onClick={() => setImageType("slitlamp")}
              className="group p-8 border-2 border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-2xl dark:hover:bg-gray-800/50 hover:bg-gray-50/50 transition-all duration-300 bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm"
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <FileImage className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Slit-Lamp Image</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Image from slit-lamp examination showing the front structures of the eye.
              </p>
            </motion.button>
          </motion.div>
        )}

        {/* Step 2: Upload Image */}
        {imageType && !file && (
          <motion.div 
            className="mt-16 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 rounded-2xl bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-zinc-700/50 shadow-xl">
              <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Upload {imageType === "fundus" ? "Fundus" : "Slit-Lamp"} Image
              </h3>
              
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Drag & drop your image here or click to browse
                </p>
              </div>
              
              <input
                type="file"
                accept="image/*"
                className="block mx-auto mb-6 w-full max-w-md"
                onChange={handleFileChange}
              />
              
              <motion.button
                onClick={() => setImageType(null)}
                className="inline-flex items-center gap-2 px-6 py-3 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                whileHover={{ x: -4 }}
              >
                <ArrowLeft size={16} />
                Back to image type selection
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Step 3: File Selected */}
        {file && (
          <motion.div 
            className="mt-16 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 rounded-2xl bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-zinc-700/50 shadow-xl">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                File Uploaded Successfully!
              </h3>
              
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                <span className="font-semibold">{file.name}</span> has been uploaded as{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  {imageType === "fundus" ? "Fundus Image" : "Slit-Lamp Image"}
                </span>
              </p>
              
              <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  File size: {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Type: {file.type || "Unknown"}
                </p>
              </div>
              
              <motion.button
                onClick={handleAnalysis}
                disabled={isProcessing}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isProcessing ? 1 : 1.05 }}
                whileTap={{ scale: isProcessing ? 1 : 0.98 }}
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    Start Analysis
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.section>
    </div>
  );
}
