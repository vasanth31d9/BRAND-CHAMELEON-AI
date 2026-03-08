"use client"

import { Sidebar } from "@/components/Sidebar"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { TrendingUp, TrendingDown, BarChart3, Eye, Heart, Share2, Target, Users, MessageCircle, Repeat2, Zap } from "lucide-react"
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

export default function AnalyticsPage() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }))
  }, [controls])

  // Engagement data over time
  const engagementData = [
    { date: 'Mon', LinkedIn: 8.2, Twitter: 7.1, Instagram: 8.8 },
    { date: 'Tue', LinkedIn: 8.5, Twitter: 7.5, Instagram: 8.5 },
    { date: 'Wed', LinkedIn: 9.1, Twitter: 7.8, Instagram: 8.3 },
    { date: 'Thu', LinkedIn: 8.8, Twitter: 8.2, Instagram: 8.7 },
    { date: 'Fri', LinkedIn: 9.2, Twitter: 7.8, Instagram: 8.5 },
    { date: 'Sat', LinkedIn: 8.6, Twitter: 8.5, Instagram: 9.2 },
    { date: 'Sun', LinkedIn: 8.4, Twitter: 8.1, Instagram: 8.9 },
  ]

  // Reach data
  const reachData = [
    { date: 'Week 1', reach: 32000 },
    { date: 'Week 2', reach: 38000 },
    { date: 'Week 3', reach: 42000 },
    { date: 'Week 4', reach: 45000 },
  ]

  // Platform distribution
  const platformData = [
    { name: 'LinkedIn', value: 35, color: '#0A66C2' },
    { name: 'Twitter', value: 28, color: '#8B5CF6' },
    { name: 'Instagram', value: 25, color: '#E4405F' },
    { name: 'TikTok', value: 12, color: '#22D3EE' },
  ]

  // Content performance
  const contentPerformance = [
    { type: 'Video', posts: 12, engagement: 9.2 },
    { type: 'Image', posts: 24, engagement: 8.5 },
    { type: 'Text', posts: 18, engagement: 7.8 },
    { type: 'Carousel', posts: 8, engagement: 8.9 },
  ]

  const platformStats = [
    { name: "LinkedIn", engagement: 9.2, reach: 45000, trend: "up", posts: 24, color: "from-blue-500 to-cyan-500", icon: Users },
    { name: "Twitter", engagement: 7.8, reach: 38000, trend: "up", posts: 32, color: "from-purple-500 to-pink-500", icon: MessageCircle },
    { name: "Instagram", engagement: 8.5, reach: 42000, trend: "down", posts: 28, color: "from-pink-500 to-rose-500", icon: Heart },
  ]

  const topPosts = [
    { title: "AI Marketing Trends 2026", platform: "LinkedIn", score: 8.9, views: 12500, likes: 1200, shares: 340 },
    { title: "Remote Work Best Practices", platform: "Twitter", score: 8.7, views: 9800, likes: 890, shares: 280 },
    { title: "Productivity Hacks Thread", platform: "Twitter", score: 8.5, views: 8600, likes: 720, shares: 210 },
    { title: "SaaS Growth Strategy", platform: "LinkedIn", score: 8.3, views: 7200, likes: 650, shares: 190 },
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
              Analytics Dashboard
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Track your content performance across all platforms
            </motion.p>
          </motion.div>

          {/* Animated Stats Cards */}
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            {platformStats.map((platform, i) => (
              <motion.div 
                key={platform.name}
                className="glass-card rounded-2xl p-6 hover-lift gradient-border relative overflow-hidden group"
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: i * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(34, 211, 238, 0.3))`
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <motion.h3 
                      className="text-lg font-semibold text-white"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.15 + 0.2 }}
                    >
                      {platform.name}
                    </motion.h3>
                    <motion.div 
                      className={`p-3 rounded-xl bg-gradient-to-br ${platform.color} bg-opacity-10`}
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    >
                      <platform.icon className="h-5 w-5 text-white" />
                    </motion.div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm text-gray-400">Engagement Rate</p>
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: i * 0.15 + 0.4, type: "spring" }}
                        >
                          {platform.trend === "up" ? (
                            <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-green-500/10">
                              <TrendingUp className="h-3 w-3 text-green-400" />
                              <span className="text-xs font-semibold text-green-400">+2.1%</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-red-500/10">
                              <TrendingDown className="h-3 w-3 text-red-400" />
                              <span className="text-xs font-semibold text-red-400">-1.3%</span>
                            </div>
                          )}
                        </motion.div>
                      </div>
                      <motion.p 
                        className="text-2xl font-bold text-white"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          delay: i * 0.15 + 0.5,
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        {platform.engagement}%
                      </motion.p>
                    </div>
                    
                    <motion.div 
                      className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.15 + 0.6 }}
                    >
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Total Reach</p>
                        <motion.p 
                          className="text-sm font-bold text-white"
                          animate={{ 
                            textShadow: [
                              "0 0 0px rgba(139, 92, 246, 0)",
                              "0 0 10px rgba(139, 92, 246, 0.5)",
                              "0 0 0px rgba(139, 92, 246, 0)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {(platform.reach / 1000).toFixed(1)}K
                        </motion.p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Posts</p>
                        <motion.p 
                          className="text-sm font-bold text-white"
                          animate={{ 
                            textShadow: [
                              "0 0 0px rgba(34, 211, 238, 0)",
                              "0 0 10px rgba(34, 211, 238, 0.5)",
                              "0 0 0px rgba(34, 211, 238, 0)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        >
                          {platform.posts}
                        </motion.p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Pulse Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-purple-500/0"
                  animate={{
                    borderColor: ["rgba(139, 92, 246, 0)", "rgba(139, 92, 246, 0.5)", "rgba(139, 92, 246, 0)"],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Charts Section with Stagger Animation */}
          <div className="grid gap-6 lg:grid-cols-2 mb-8">
            {/* Engagement Over Time */}
            <motion.div 
              className="glass-card rounded-2xl p-6 gradient-border relative overflow-hidden"
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <motion.h2 
                className="text-xl font-semibold text-white mb-6 flex items-center gap-2 relative z-10"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <TrendingUp className="h-5 w-5 text-purple-400" />
                </motion.div>
                Engagement Trends
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={engagementData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="date" stroke="#9CA3AF" style={{ fontSize: '12px' }} />
                    <YAxis stroke="#9CA3AF" style={{ fontSize: '12px' }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(15, 15, 20, 0.9)', 
                        border: '1px solid rgba(139, 92, 246, 0.5)',
                        borderRadius: '12px',
                        backdropFilter: 'blur(20px)'
                      }}
                      labelStyle={{ color: '#fff' }}
                    />
                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                    <Line type="monotone" dataKey="LinkedIn" stroke="#0A66C2" strokeWidth={2} dot={{ fill: '#0A66C2', r: 4 }} animationDuration={1500} />
                    <Line type="monotone" dataKey="Twitter" stroke="#8B5CF6" strokeWidth={2} dot={{ fill: '#8B5CF6', r: 4 }} animationDuration={1500} animationBegin={200} />
                    <Line type="monotone" dataKey="Instagram" stroke="#E4405F" strokeWidth={2} dot={{ fill: '#E4405F', r: 4 }} animationDuration={1500} animationBegin={400} />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>
            </motion.div>

            {/* Reach Growth */}
            <motion.div 
              className="glass-card rounded-2xl p-6 gradient-border relative overflow-hidden"
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />

              <motion.h2 
                className="text-xl font-semibold text-white mb-6 flex items-center gap-2 relative z-10"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Users className="h-5 w-5 text-cyan-400" />
                </motion.div>
                Reach Growth
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={reachData}>
                    <defs>
                      <linearGradient id="reachGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22D3EE" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#22D3EE" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="date" stroke="#9CA3AF" style={{ fontSize: '12px' }} />
                    <YAxis stroke="#9CA3AF" style={{ fontSize: '12px' }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(15, 15, 20, 0.9)', 
                        border: '1px solid rgba(34, 211, 238, 0.5)',
                        borderRadius: '12px',
                        backdropFilter: 'blur(20px)'
                      }}
                      labelStyle={{ color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="reach" stroke="#22D3EE" strokeWidth={2} fillOpacity={1} fill="url(#reachGradient)" animationDuration={2000} />
                  </AreaChart>
                </ResponsiveContainer>
              </motion.div>
            </motion.div>
          </div>

          {/* More Charts with Enhanced Animations */}
          <div className="grid gap-6 lg:grid-cols-2 mb-8">
            {/* Platform Distribution */}
            <motion.div 
              className="glass-card rounded-2xl p-6 gradient-border"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
              whileHover={{ scale: 1.02, rotate: 1, transition: { duration: 0.3 } }}
            >
              <motion.h2 
                className="text-xl font-semibold text-white mb-6 flex items-center gap-2"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Target className="h-5 w-5 text-purple-400" />
                </motion.div>
                Platform Distribution
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
              >
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={platformData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      animationBegin={0}
                      animationDuration={1500}
                    >
                      {platformData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(15, 15, 20, 0.9)', 
                        border: '1px solid rgba(139, 92, 246, 0.5)',
                        borderRadius: '12px',
                        backdropFilter: 'blur(20px)'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </motion.div>
            </motion.div>

            {/* Content Performance */}
            <motion.div 
              className="glass-card rounded-2xl p-6 gradient-border"
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
              whileHover={{ scale: 1.02, rotate: -1, transition: { duration: 0.3 } }}
            >
              <motion.h2 
                className="text-xl font-semibold text-white mb-6 flex items-center gap-2"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <BarChart3 className="h-5 w-5 text-orange-400" />
                </motion.div>
                Content Performance
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={contentPerformance}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="type" stroke="#9CA3AF" style={{ fontSize: '12px' }} />
                    <YAxis stroke="#9CA3AF" style={{ fontSize: '12px' }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(15, 15, 20, 0.9)', 
                        border: '1px solid rgba(249, 115, 22, 0.5)',
                        borderRadius: '12px',
                        backdropFilter: 'blur(20px)'
                      }}
                      labelStyle={{ color: '#fff' }}
                    />
                    <Bar dataKey="engagement" fill="#F97316" radius={[8, 8, 0, 0]} animationDuration={1500} />
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>
            </motion.div>
          </div>

          {/* Top Performing Posts with Enhanced Animations */}
          <motion.div 
            className="glass-card rounded-2xl p-6 gradient-border"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, type: "spring" }}
          >
            <motion.h2 
              className="text-xl font-semibold text-white mb-6 flex items-center gap-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                <Zap className="h-5 w-5 text-purple-400" />
              </motion.div>
              Top Performing Posts
            </motion.h2>
            
            <div className="space-y-4">
              {topPosts.map((post, i) => (
                <motion.div 
                  key={i}
                  className="glass rounded-xl p-5 hover-lift cursor-pointer group relative overflow-hidden"
                  initial={{ opacity: 0, x: -30, rotateX: -10 }}
                  animate={{ opacity: 1, x: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.1 + i * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    x: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Animated Background on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />

                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div 
                          className="p-2 rounded-lg bg-cyan-500/10"
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                        >
                          <BarChart3 className="h-5 w-5 text-cyan-400" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-white">{post.title}</h3>
                          <p className="text-xs text-gray-400">{post.platform} • 3 days ago</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6 ml-11 text-sm">
                        <motion.div 
                          className="flex items-center gap-2 text-gray-400"
                          whileHover={{ scale: 1.1, color: "#22D3EE" }}
                        >
                          <Eye className="h-4 w-4 text-cyan-400" />
                          <span>{post.views.toLocaleString()}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center gap-2 text-gray-400"
                          whileHover={{ scale: 1.1, color: "#EC4899" }}
                        >
                          <Heart className="h-4 w-4 text-pink-400" />
                          <span>{post.likes}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center gap-2 text-gray-400"
                          whileHover={{ scale: 1.1, color: "#8B5CF6" }}
                        >
                          <Share2 className="h-4 w-4 text-purple-400" />
                          <span>{post.shares}</span>
                        </motion.div>
                      </div>
                    </div>
                    
                    <motion.div 
                      className="text-right"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <motion.div 
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/20 mb-1"
                        animate={{
                          boxShadow: [
                            "0 0 0px rgba(139, 92, 246, 0)",
                            "0 0 20px rgba(139, 92, 246, 0.5)",
                            "0 0 0px rgba(139, 92, 246, 0)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      >
                        <Target className="h-3 w-3 text-purple-400" />
                        <span className="text-lg font-bold text-purple-400">{post.score}</span>
                      </motion.div>
                      <p className="text-xs text-gray-500">Virality Score</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
