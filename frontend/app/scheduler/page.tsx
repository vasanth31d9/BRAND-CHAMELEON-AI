"use client"

import { Sidebar } from "@/components/Sidebar"
import { motion } from "framer-motion"
import { Calendar, Clock, Edit, Trash2, Plus, Zap, CheckCircle } from "lucide-react"

export default function SchedulerPage() {
  const scheduledPosts = [
    { id: 1, title: "LinkedIn Post #1", platform: "LinkedIn", date: "Mar 11, 2026", time: "10:00 AM", status: "scheduled" },
    { id: 2, title: "Twitter Thread #2", platform: "Twitter", date: "Mar 12, 2026", time: "10:00 AM", status: "scheduled" },
    { id: 3, title: "Instagram Story #3", platform: "Instagram", date: "Mar 13, 2026", time: "10:00 AM", status: "scheduled" },
  ]

  const bestTimes = [
    { platform: "LinkedIn", time: "Tue-Thu, 10 AM - 12 PM", color: "from-blue-500 to-cyan-500" },
    { platform: "Twitter", time: "Mon-Fri, 9 AM - 3 PM", color: "from-purple-500 to-pink-500" },
    { platform: "Instagram", time: "Wed-Fri, 11 AM - 1 PM", color: "from-pink-500 to-rose-500" },
  ]

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
              Smart Scheduler
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Schedule posts at optimal times
            </motion.p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Scheduled Posts */}
            <div className="lg:col-span-2">
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

                <div className="flex items-center justify-between mb-6 relative z-10">
                  <motion.h2 
                    className="text-xl font-semibold text-white flex items-center gap-2"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Calendar className="h-5 w-5 text-purple-400" />
                    </motion.div>
                    Scheduled Posts
                  </motion.h2>
                  <motion.button 
                    className="glass px-4 py-2 rounded-xl text-sm font-medium text-white hover:bg-white/10 transition-all flex items-center gap-2"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Plus className="h-4 w-4" />
                    New Post
                  </motion.button>
                </div>

                <div className="space-y-4 relative z-10">
                  {scheduledPosts.map((post, i) => (
                    <motion.div 
                      key={post.id} 
                      className="glass rounded-xl p-5 hover-lift cursor-pointer group relative overflow-hidden"
                      initial={{ opacity: 0, x: -30, rotateX: -10 }}
                      animate={{ opacity: 1, x: 0, rotateX: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.4 + i * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        x: 10,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {/* Hover Gradient Sweep */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />

                      <div className="flex items-start justify-between relative z-10">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <motion.div 
                              className="p-2 rounded-lg bg-purple-500/10"
                              animate={{ 
                                rotate: [0, 5, -5, 0],
                                scale: [1, 1.05, 1]
                              }}
                              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                            >
                              <CheckCircle className="h-5 w-5 text-purple-400" />
                            </motion.div>
                            <div>
                              <h3 className="font-semibold text-white">{post.title}</h3>
                              <p className="text-xs text-gray-400">{post.platform}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <motion.div 
                              className="flex items-center gap-2"
                              whileHover={{ scale: 1.1, color: "#22D3EE" }}
                            >
                              <Calendar className="h-4 w-4 text-cyan-400" />
                              <span>{post.date}</span>
                            </motion.div>
                            <motion.div 
                              className="flex items-center gap-2"
                              whileHover={{ scale: 1.1, color: "#22D3EE" }}
                            >
                              <Clock className="h-4 w-4 text-cyan-400" />
                              <span>{post.time}</span>
                            </motion.div>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <motion.button 
                            className="glass p-2 rounded-lg hover:bg-white/10 transition-all"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Edit className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                          </motion.button>
                          <motion.button 
                            className="glass p-2 rounded-lg hover:bg-red-500/20 transition-all"
                            whileHover={{ scale: 1.1, rotate: -10 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Trash2 className="h-4 w-4 text-gray-400 group-hover:text-red-400 transition-colors" />
                          </motion.button>
                        </div>
                      </div>

                      {/* Pulse Border */}
                      <motion.div
                        className="absolute inset-0 rounded-xl border-2 border-purple-500/0"
                        animate={{
                          borderColor: ["rgba(139, 92, 246, 0)", "rgba(139, 92, 246, 0.3)", "rgba(139, 92, 246, 0)"],
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Panel */}
            <div className="space-y-6">
              {/* Best Times */}
              <motion.div 
                className="glass-card rounded-2xl p-6 gradient-border relative overflow-hidden"
                initial={{ opacity: 0, x: 50, rotateY: 10 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"
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
                    <Zap className="h-5 w-5 text-cyan-400" />
                  </motion.div>
                  Best Times to Post
                </motion.h2>
                
                <div className="space-y-4 relative z-10">
                  {bestTimes.map((item, i) => (
                    <motion.div 
                      key={item.platform}
                      className="glass rounded-xl p-4 hover:bg-white/5 transition-all"
                      initial={{ opacity: 0, x: 30, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.5 + i * 0.1,
                        type: "spring"
                      }}
                      whileHover={{ scale: 1.05, x: 5 }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <motion.div 
                          className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`}
                          animate={{
                            scale: [1, 1.3, 1],
                            boxShadow: [
                              "0 0 0px rgba(139, 92, 246, 0)",
                              "0 0 15px rgba(139, 92, 246, 0.6)",
                              "0 0 0px rgba(139, 92, 246, 0)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        />
                        <p className="font-semibold text-white">{item.platform}</p>
                      </div>
                      <p className="text-sm text-gray-400 ml-6">{item.time}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div 
                className="glass-card rounded-2xl p-6 gradient-border"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
              >
                <motion.h2 
                  className="text-xl font-semibold text-white mb-4"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Quick Actions
                </motion.h2>
                <div className="space-y-3">
                  <motion.button 
                    className="w-full btn-gradient px-6 py-3 rounded-xl font-semibold text-white shimmer hover-lift flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(139, 92, 246, 0)",
                        "0 0 20px rgba(139, 92, 246, 0.5)",
                        "0 0 0px rgba(139, 92, 246, 0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Plus className="h-5 w-5" />
                    Schedule New Post
                  </motion.button>
                  <motion.button 
                    className="w-full glass px-6 py-3 rounded-xl font-medium text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Zap className="h-5 w-5" />
                    Auto-Schedule Queue
                  </motion.button>
                </div>
              </motion.div>

              {/* Stats */}
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
                  This Week
                </motion.h2>
                
                <div className="space-y-4">
                  {[
                    { label: "Posts Scheduled", value: 12, total: 16, color: "from-purple-500 to-pink-500" },
                    { label: "Posts Published", value: 8, total: 12, color: "from-green-500 to-emerald-500" },
                  ].map((stat, i) => (
                    <motion.div 
                      key={stat.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">{stat.label}</span>
                        <motion.span 
                          className="text-xl font-bold text-white"
                          animate={{
                            textShadow: [
                              "0 0 0px rgba(139, 92, 246, 0)",
                              "0 0 10px rgba(139, 92, 246, 0.8)",
                              "0 0 0px rgba(139, 92, 246, 0)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                        >
                          {stat.value}/{stat.total}
                        </motion.span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${(stat.value / stat.total) * 100}%` }}
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
