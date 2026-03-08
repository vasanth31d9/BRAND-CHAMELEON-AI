"use client"

import { useState } from "react"
import { Sidebar } from "@/components/Sidebar"
import { motion, AnimatePresence } from "framer-motion"
import { Upload, Sparkles, CheckCircle, Mic2, TrendingUp, Zap } from "lucide-react"

export default function BrandVoicePage() {
  const [training, setTraining] = useState(false)
  const [trained, setTrained] = useState(false)

  const handleTrain = () => {
    setTraining(true)
    setTimeout(() => {
      setTraining(false)
      setTrained(true)
    }, 3000)
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#0A0A0A] neural-lines">
      <Sidebar />
      <main className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="max-w-7xl mx-auto p-8">
          {/* Animated Header */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <motion.h1 
              className="text-5xl font-bold text-gradient mb-2"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              Brand Voice DNA
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Train AI to write in your unique style
            </motion.p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Upload Section */}
              <motion.div 
                className="glass-card rounded-2xl p-6 gradient-border relative overflow-hidden"
                initial={{ opacity: 0, x: -50, rotateY: -10 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                whileHover={{ scale: 1.01 }}
              >
                {/* Animated Background Orb */}
                <motion.div
                  className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <motion.div 
                  className="mb-6 relative z-10"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-xl font-semibold text-white mb-2">Upload Past Posts</h2>
                  <p className="text-sm text-gray-400">Upload your LinkedIn, Twitter, or blog posts to train your brand voice</p>
                </motion.div>

                <motion.div 
                  className="border-2 border-dashed border-purple-500/30 rounded-xl p-12 text-center hover:border-purple-500/50 transition-all cursor-pointer group relative z-10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    animate={training ? { 
                      scale: [1, 1.1, 1],
                      rotate: [0, 360]
                    } : {}}
                    transition={{ duration: 1, repeat: training ? Infinity : 0 }}
                  >
                    <Upload className="mx-auto h-12 w-12 text-purple-400 mb-4 group-hover:text-purple-300 transition-colors" />
                  </motion.div>
                  <p className="text-sm text-gray-300 mb-2">
                    Drag & drop files or click to upload
                  </p>
                  <p className="text-xs text-gray-500">
                    Supports: .txt, .csv, .json (min 10 posts recommended)
                  </p>
                </motion.div>
                
                <motion.button 
                  className="w-full mt-6 btn-gradient px-8 py-4 rounded-xl font-semibold text-white shimmer hover-lift flex items-center justify-center gap-2 disabled:opacity-50"
                  onClick={handleTrain}
                  disabled={training}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={training ? { rotate: 360 } : {}}
                    transition={{ duration: 1, repeat: training ? Infinity : 0, ease: "linear" }}
                  >
                    <Sparkles className="h-5 w-5" />
                  </motion.div>
                  {training ? "Training AI..." : "Train Brand Voice"}
                </motion.button>
              </motion.div>

              {/* Brand Voice Profile */}
              <AnimatePresence>
                {trained && (
                  <motion.div 
                    className="glass-card rounded-2xl p-6 gradient-border"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-green-500/10 glow-purple">
                        <CheckCircle className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-white">Brand Voice Profile</h2>
                        <p className="text-sm text-gray-400">Successfully trained on 25 posts</p>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div className="glass rounded-xl p-4">
                        <p className="text-sm font-semibold text-purple-400 mb-2">Tone Analysis</p>
                        <p className="text-sm text-gray-300">Professional, Insightful, Conversational</p>
                      </div>

                      <div className="glass rounded-xl p-4">
                        <p className="text-sm font-semibold text-cyan-400 mb-3">Common Vocabulary</p>
                        <div className="flex flex-wrap gap-2">
                          {["innovative", "growth", "strategy", "impact", "value", "transform", "optimize"].map((word, i) => (
                            <motion.span 
                              key={word} 
                              className="text-xs glass px-3 py-1.5 rounded-lg text-white hover:bg-white/10 transition-all"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: i * 0.05 }}
                            >
                              {word}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      <div className="glass rounded-xl p-4">
                        <p className="text-sm font-semibold text-blue-400 mb-2">Sentence Structure</p>
                        <p className="text-sm text-gray-300">Medium-length, clear and direct with occasional storytelling</p>
                      </div>

                      <div className="glass rounded-xl p-4">
                        <p className="text-sm font-semibold text-pink-400 mb-2">Engagement Style</p>
                        <p className="text-sm text-gray-300">Question-driven, data-backed, actionable insights</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Panel */}
            <div className="space-y-6">
              {/* Style Score */}
              <motion.div 
                className="glass-card rounded-2xl p-6 gradient-border relative overflow-hidden"
                initial={{ opacity: 0, x: 50, rotateY: 10 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />

                <motion.h2 
                  className="text-xl font-semibold text-white mb-6 flex items-center gap-2 relative z-10"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Mic2 className="h-5 w-5 text-purple-400" />
                  </motion.div>
                  Style Score
                </motion.h2>
                
                <div className="text-center">
                  <motion.div 
                    className="relative inline-block"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="text-6xl font-bold text-gradient mb-2">
                      {trained ? "8.5" : "--"}
                    </div>
                    {trained && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                  <p className="text-sm text-gray-400 mt-2">
                    {trained ? "Excellent match" : "Train to see score"}
                  </p>
                  
                  {trained && (
                    <motion.div 
                      className="mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-green-500/10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <TrendingUp className="h-4 w-4 text-green-400" />
                      <span className="text-sm font-semibold text-green-400">+15% vs baseline</span>
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Training Tips */}
              <motion.div 
                className="glass-card rounded-2xl p-6 gradient-border"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
              >
                <motion.h2 
                  className="text-xl font-semibold text-white mb-4 flex items-center gap-2"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Zap className="h-5 w-5 text-cyan-400" />
                  </motion.div>
                  Training Tips
                </motion.h2>
                
                <div className="space-y-3">
                  {[
                    "Upload at least 10-20 posts",
                    "Use your best performing content",
                    "Include variety of topics",
                    "Update regularly for best results"
                  ].map((tip, i) => (
                    <motion.div 
                      key={i}
                      className="flex gap-3 glass rounded-lg p-3 hover:bg-white/5 transition-all"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{tip}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Voice Metrics */}
              <motion.div 
                className="glass-card rounded-2xl p-6 gradient-border"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
              >
                <motion.h2 
                  className="text-xl font-semibold text-white mb-4"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Voice Metrics
                </motion.h2>
                
                <div className="space-y-4">
                  {[
                    { label: "Consistency", value: trained ? 92 : 0, color: "from-purple-500 to-pink-500" },
                    { label: "Authenticity", value: trained ? 88 : 0, color: "from-cyan-500 to-blue-500" },
                    { label: "Engagement", value: trained ? 85 : 0, color: "from-green-500 to-emerald-500" },
                  ].map((metric, i) => (
                    <motion.div 
                      key={metric.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">{metric.label}</span>
                        <motion.span 
                          className="text-sm font-bold text-white"
                          animate={{
                            textShadow: [
                              "0 0 0px rgba(139, 92, 246, 0)",
                              "0 0 10px rgba(139, 92, 246, 0.8)",
                              "0 0 0px rgba(139, 92, 246, 0)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                        >
                          {metric.value}%
                        </motion.span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full bg-gradient-to-r ${metric.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${metric.value}%` }}
                          transition={{ duration: 1.5, delay: 0.8 + i * 0.1, type: "spring" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
