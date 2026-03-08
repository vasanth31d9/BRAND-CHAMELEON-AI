"use client"

import { Sidebar } from "@/components/Sidebar"
import { motion } from "framer-motion"
import { UserPlus, Users, Mail, Shield, Edit, Trash2, Crown, CheckCircle } from "lucide-react"

export default function TeamPage() {
  const members = [
    { name: "John Doe", email: "john@example.com", role: "Admin", avatar: "JD", color: "from-purple-500 to-pink-500" },
    { name: "Jane Smith", email: "jane@example.com", role: "Editor", avatar: "JS", color: "from-cyan-500 to-blue-500" },
    { name: "Mike Johnson", email: "mike@example.com", role: "Viewer", avatar: "MJ", color: "from-green-500 to-emerald-500" },
  ]

  const permissions = [
    { 
      role: "Admin", 
      description: "Full access to all features", 
      icon: Crown,
      color: "from-purple-500 to-pink-500",
      features: ["Create & Edit", "Delete", "Manage Team", "Billing"]
    },
    { 
      role: "Editor", 
      description: "Create and edit content", 
      icon: Edit,
      color: "from-cyan-500 to-blue-500",
      features: ["Create & Edit", "View Analytics", "Schedule Posts"]
    },
    { 
      role: "Viewer", 
      description: "View-only access", 
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      features: ["View Content", "View Analytics"]
    },
  ]

  return (
    <div className="flex h-screen overflow-hidden bg-[#0A0A0A] neural-lines">
      <Sidebar />
      <main className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="max-w-7xl mx-auto p-8">
          {/* Animated Header */}
          <motion.div 
            className="mb-8 flex items-center justify-between"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <div>
              <motion.h1 
                className="text-5xl font-bold text-gradient mb-2"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                Team Workspace
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Collaborate with your team
              </motion.p>
            </div>
            <motion.button 
              className="btn-gradient px-6 py-3 rounded-xl font-semibold text-white shimmer hover-lift flex items-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <UserPlus className="h-5 w-5" />
              Invite Member
            </motion.button>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Team Members */}
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

                <motion.h2 
                  className="text-xl font-semibold text-white mb-6 flex items-center gap-2 relative z-10"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Users className="h-5 w-5 text-purple-400" />
                  </motion.div>
                  Team Members
                </motion.h2>
                
                <div className="space-y-4 relative z-10">
                  {members.map((member, i) => (
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
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />

                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-4 flex-1">
                          <motion.div 
                            className={`w-12 h-12 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-sm glow-purple`}
                            animate={{
                              boxShadow: [
                                "0 0 0px rgba(139, 92, 246, 0)",
                                "0 0 20px rgba(139, 92, 246, 0.5)",
                                "0 0 0px rgba(139, 92, 246, 0)"
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                          >
                            {member.avatar}
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-white mb-1">{member.name}</h3>
                            <motion.div 
                              className="flex items-center gap-2 text-sm text-gray-400"
                              whileHover={{ color: "#22D3EE" }}
                            >
                              <Mail className="h-3 w-3" />
                              <span>{member.email}</span>
                            </motion.div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="px-3 py-1.5 rounded-lg glass">
                            <span className="text-sm font-medium text-gray-300">{member.role}</span>
                          </div>
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

                {/* Invite Section */}
                <motion.div 
                  className="mt-6 glass rounded-xl p-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <h3 className="text-sm font-semibold text-white mb-3">Invite New Member</h3>
                  <div className="flex gap-3">
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="flex-1 glass rounded-lg px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    />
                    <button className="btn-gradient px-6 py-2 rounded-lg font-medium text-white hover-lift">
                      Send Invite
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Panel */}
            <div className="space-y-6">
              {/* Permissions */}
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
                    <Shield className="h-5 w-5 text-cyan-400" />
                  </motion.div>
                  Permissions
                </motion.h2>
                
                <div className="space-y-4 relative z-10">
                  {permissions.map((perm, i) => (
                    <motion.div 
                      key={perm.role}
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
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div 
                          className={`p-2 rounded-lg bg-gradient-to-br ${perm.color} bg-opacity-10`}
                          animate={{ 
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        >
                          <perm.icon className="h-5 w-5 text-white" />
                        </motion.div>
                        <div>
                          <p className="font-semibold text-white">{perm.role}</p>
                          <p className="text-xs text-gray-400">{perm.description}</p>
                        </div>
                      </div>
                      <div className="space-y-1 ml-11">
                        {perm.features.map((feature, j) => (
                          <motion.div 
                            key={j} 
                            className="flex items-center gap-2 text-xs text-gray-400"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + i * 0.1 + j * 0.05 }}
                          >
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Team Stats */}
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
                  Team Activity
                </motion.h2>
                
                <div className="space-y-4">
                  {[
                    { label: "Active Members", value: 3, total: 5, color: "from-purple-500 to-pink-500" },
                    { label: "Posts This Week", value: 24, total: 30, color: "from-cyan-500 to-blue-500" },
                    { label: "Collaboration", value: 18, total: 20, color: "from-green-500 to-emerald-500" },
                  ].map((stat, i) => (
                    <motion.div 
                      key={stat.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">{stat.label}</span>
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
                          {stat.value}/{stat.total}
                        </motion.span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${(stat.value / stat.total) * 100}%` }}
                          transition={{ duration: 1.5, delay: 0.7 + i * 0.1, type: "spring" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Actions */}
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
                  Quick Actions
                </motion.h2>
                <div className="space-y-3">
                  {[
                    { icon: UserPlus, label: "Bulk Invite" },
                    { icon: Shield, label: "Manage Roles" },
                    { icon: Mail, label: "Send Announcement" }
                  ].map((action, i) => (
                    <motion.button 
                      key={action.label}
                      className="w-full glass px-4 py-3 rounded-xl text-sm font-medium text-white hover:bg-white/10 transition-all flex items-center gap-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <action.icon className="h-4 w-4" />
                      {action.label}
                    </motion.button>
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
