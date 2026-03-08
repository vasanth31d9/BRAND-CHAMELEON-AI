"use client"

import { Sidebar } from "@/components/Sidebar"
import { motion } from "framer-motion"
import { TrendingUp, Hash, Flame, Target, BarChart3, Eye } from "lucide-react"

export default function TrendsPage() {
  const trends = [
    { keyword: "AI in Marketing", platform: "Twitter", volume: 15000, sentiment: "positive", growth: "+45%", color: "from-purple-500 to-pink-500" },
    { keyword: "Remote Work", platform: "LinkedIn", volume: 12000, sentiment: "neutral", growth: "+32%", color: "from-blue-500 to-cyan-500" },
    { keyword: "Productivity Hacks", platform: "Reddit", volume: 9500, sentiment: "positive", growth: "+28%", color: "from-green-500 to-emerald-500" },
    { keyword: "SaaS Growth", platform: "Twitter", volume: 8200, sentiment: "positive", growth: "+25%", color: "from-orange-500 to-red-500" },
    { keyword: "Content Strategy", platform: "LinkedIn", volume: 7800, sentiment: "positive", growth: "+22%", color: "from-cyan-500 to-blue-500" },
  ]

  const hashtags = [
    { tag: "#AI", trend: "+45%", posts: "125K" },
    { tag: "#Marketing", trend: "+38%", posts: "98K" },
    { tag: "#Growth", trend: "+32%", posts: "87K" },
    { tag: "#SaaS", trend: "+28%", posts: "76K" },
    { tag: "#Productivity", trend: "+25%", posts: "65K" },
    { tag: "#Remote", trend: "+22%", posts: "54K" },
  ]

  const platforms = [
    { name: "LinkedIn", description: "Best for B2B, thought leadership", color: "from-blue-500 to-cyan-500" },
    { name: "Twitter", description: "Fast-paced, trending topics", color: "from-purple-500 to-pink-500" },
    { name: "Instagram", description: "Visual content, lifestyle", color: "from-pink-500 to-rose-500" },
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
              Trending Topics
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Discover what's hot in your niche
            </motion.p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Top Trends */}
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
                  className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <motion.h2 
                  className="text-xl font-semibold text-white mb-6 flex items-center gap-2 relative z-10"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <Flame className="h-5 w-5 text-orange-400" />
                  </motion.div>
                  Top Trends
                </motion.h2>
                
                <div className="space-y-4 relative z-10">
                  {trends.map((trend, i) => (
                    <motion.div 
                      key={i}
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
                        className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />

                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-4 flex-1">
                          <motion.div 
                            className={`p-3 rounded-xl bg-gradient-to-br ${trend.color} bg-opacity-10`}
                            animate={{ 
                              rotate: [0, 5, -5, 0],
                              scale: [1, 1.05, 1]
                            }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                          >
                            <TrendingUp className="h-6 w-6 text-white" />
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-white mb-1">{trend.keyword}</h3>
                            <div className="flex items-center gap-3 text-sm text-gray-400">
                              <span>{trend.platform}</span>
                              <span>•</span>
                              <motion.div 
                                className="flex items-center gap-1"
                                whileHover={{ scale: 1.1, color: "#22D3EE" }}
                              >
                                <Eye className="h-3 w-3" />
                                <span>{trend.volume.toLocaleString()} views</span>
                              </motion.div>
                            </div>
                          </div>
                        </div>
                        
                        <motion.div 
                          className="text-right"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <motion.div 
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/10 mb-1"
                            animate={{
                              boxShadow: [
                                "0 0 0px rgba(34, 197, 94, 0)",
                                "0 0 20px rgba(34, 197, 94, 0.5)",
                                "0 0 0px rgba(34, 197, 94, 0)"
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                          >
                            <TrendingUp className="h-4 w-4 text-green-400" />
                            <span className="text-sm font-bold text-green-400">{trend.growth}</span>
                          </motion.div>
                          <p className="text-xs text-gray-500">growth</p>
                        </motion.div>
                      </div>

                      {/* Pulse Border */}
                      <motion.div
                        className="absolute inset-0 rounded-xl border-2 border-orange-500/0"
                        animate={{
                          borderColor: ["rgba(249, 115, 22, 0)", "rgba(249, 115, 22, 0.3)", "rgba(249, 115, 22, 0)"],
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
              {/* Trending Hashtags */}
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
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Hash className="h-5 w-5 text-cyan-400" />
                  </motion.div>
                  Trending Hashtags
                </motion.h2>
                
                <div className="space-y-3 relative z-10">
                  {hashtags.map((item, i) => (
                    <motion.div 
                      key={item.tag}
                      className="glass rounded-lg p-3 hover:bg-white/5 transition-all cursor-pointer"
                      initial={{ opacity: 0, x: 30, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.5 + i * 0.1,
                        type: "spring"
                      }}
                      whileHover={{ scale: 1.05, x: 5 }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <motion.span 
                          className="text-sm font-semibold text-cyan-400"
                          animate={{
                            textShadow: [
                              "0 0 0px rgba(34, 211, 238, 0)",
                              "0 0 10px rgba(34, 211, 238, 0.5)",
                              "0 0 0px rgba(34, 211, 238, 0)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        >
                          {item.tag}
                        </motion.span>
                        <motion.div 
                          className="flex items-center gap-1 px-2 py-0.5 rounded bg-green-500/10"
                          whileHover={{ scale: 1.1 }}
                        >
                          <TrendingUp className="h-3 w-3 text-green-400" />
                          <span className="text-xs font-semibold text-green-400">{item.trend}</span>
                        </motion.div>
                      </div>
                      <p className="text-xs text-gray-500">{item.posts} posts</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Platform Insights */}
              <motion.div 
                className="glass-card rounded-2xl p-6 gradient-border"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
              >
                <motion.h2 
                  className="text-xl font-semibold text-white mb-6 flex items-center gap-2"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Target className="h-5 w-5 text-purple-400" />
                  </motion.div>
                  Platform Insights
                </motion.h2>
                
                <div className="space-y-4">
                  {platforms.map((platform, i) => (
                    <motion.div 
                      key={platform.name}
                      className="glass rounded-xl p-4 hover:bg-white/5 transition-all"
                      initial={{ opacity: 0, x: 30, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.6 + i * 0.1,
                        type: "spring"
                      }}
                      whileHover={{ scale: 1.05, x: 5 }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <motion.div 
                          className={`w-3 h-3 rounded-full bg-gradient-to-r ${platform.color}`}
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
                        <p className="font-semibold text-white">{platform.name}</p>
                      </div>
                      <p className="text-sm text-gray-400 ml-6">{platform.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Trend Analytics */}
              <motion.div 
                className="glass-card rounded-2xl p-6 gradient-border"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
              >
                <motion.h2 
                  className="text-xl font-semibold text-white mb-4 flex items-center gap-2"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <BarChart3 className="h-5 w-5 text-orange-400" />
                  </motion.div>
                  This Week
                </motion.h2>
                
                <div className="space-y-4">
                  {[
                    { label: "New Trends", value: 24, color: "from-purple-500 to-pink-500" },
                    { label: "Rising Topics", value: 18, color: "from-cyan-500 to-blue-500" },
                    { label: "Hot Hashtags", value: 32, color: "from-orange-500 to-red-500" },
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
                          {metric.value}
                        </motion.span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full bg-gradient-to-r ${metric.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${(metric.value / 40) * 100}%` }}
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
