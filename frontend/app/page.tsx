"use client"

import { Sidebar } from "@/components/Sidebar"
import { motion } from "framer-motion"
import { TrendingUp, Users, FileText, Zap, ArrowUp, Activity, Target, BarChart, Sparkles } from "lucide-react"

export default function Dashboard() {
  const stats = [
    { 
      name: "Total Posts", 
      value: "248", 
      icon: FileText, 
      change: "+12%", 
      trend: "up" 
    },
    { 
      name: "Engagement Rate", 
      value: "8.4%", 
      icon: Activity, 
      change: "+2.1%", 
      trend: "up" 
    },
    { 
      name: "Avg Virality Score", 
      value: "7.8", 
      icon: Zap, 
      change: "+0.5", 
      trend: "up" 
    },
    { 
      name: "Team Members", 
      value: "5", 
      icon: Users, 
      change: "+1", 
      trend: "up" 
    },
  ]

  return (
    <div className="flex h-screen overflow-hidden bg-[#0A0A0A] neural-lines">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="max-w-7xl mx-auto p-8 space-y-8">
          {/* Header */}
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-gradient">
              Dashboard
            </h1>
            <p className="text-lg text-gray-400">
              Welcome back! Here's your content overview.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.name} 
                className="glass-card rounded-2xl p-6 hover-lift cursor-pointer gradient-border"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-400">{stat.name}</span>
                  <div className="p-3 rounded-xl bg-purple-500/10 glow-purple">
                    <stat.icon className="h-5 w-5 text-purple-400" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-green-500/10">
                      <ArrowUp className="h-3 w-3 text-green-400" />
                      <span className="text-xs font-semibold text-green-400">{stat.change}</span>
                    </div>
                    <span className="text-xs text-gray-500">from last month</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Recent Posts */}
            <motion.div 
              className="glass-card rounded-2xl p-6 hover-lift gradient-border"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-400" />
                    Recent Posts
                  </h2>
                  <p className="text-sm text-gray-400 mt-1">Your latest generated content</p>
                </div>
                <button className="text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors">
                  View All
                </button>
              </div>

              <div className="space-y-3">
                {[
                  { platform: "LinkedIn", score: 8.7, time: "2 hours ago" },
                  { platform: "Twitter", score: 9.1, time: "5 hours ago" },
                  { platform: "Instagram", score: 8.3, time: "1 day ago" },
                ].map((post, i) => (
                  <motion.div 
                    key={i} 
                    className="glass rounded-xl p-4 hover:bg-white/5 transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-cyan-500/10 flex-shrink-0">
                        <FileText className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-medium text-white">{post.platform} Post</h3>
                          <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-purple-500/20">
                            <Target className="h-3 w-3 text-purple-400" />
                            <span className="text-xs font-semibold text-purple-400">{post.score}</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500">{post.time}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Trending Topics */}
            <motion.div 
              className="glass-card rounded-2xl p-6 hover-lift gradient-border"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-cyan-400" />
                    Trending Topics
                  </h2>
                  <p className="text-sm text-gray-400 mt-1">Hot topics in your niche</p>
                </div>
                <button className="text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                  Explore
                </button>
              </div>

              <div className="space-y-3">
                {[
                  { topic: "AI in Marketing", trend: "+45%" },
                  { topic: "Remote Work Tips", trend: "+32%" },
                  { topic: "Productivity Hacks", trend: "+28%" },
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="glass rounded-xl p-4 hover:bg-white/5 transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 glow-cyan"></div>
                        <span className="font-medium text-white">{item.topic}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-green-500/10">
                          <TrendingUp className="h-3 w-3 text-green-400" />
                          <span className="text-xs font-semibold text-green-400">{item.trend}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div 
            className="glass-card rounded-2xl p-6 gradient-border"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-purple-400" />
              Quick Actions
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <button className="glass rounded-xl p-6 text-left hover-lift transition-all group">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors glow-purple">
                    <FileText className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Generate Content</h3>
                    <p className="text-xs text-gray-400">Create new posts</p>
                  </div>
                </div>
              </button>
              <button className="glass rounded-xl p-6 text-left hover-lift transition-all group">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors glow-cyan">
                    <BarChart className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">View Analytics</h3>
                    <p className="text-xs text-gray-400">Check performance</p>
                  </div>
                </div>
              </button>
              <button className="glass rounded-xl p-6 text-left hover-lift transition-all group">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors glow-blue">
                    <TrendingUp className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Explore Trends</h3>
                    <p className="text-xs text-gray-400">Find hot topics</p>
                  </div>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
