"use client"

import { useState } from "react"
import { Sidebar } from "@/components/Sidebar"
import { motion } from "framer-motion"
import { User, Mail, Lock, Bell, Key, Palette, Globe, Shield, Save, Eye, EyeOff, CheckCircle } from "lucide-react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [showApiKeys, setShowApiKeys] = useState(false)
  const [saved, setSaved] = useState(false)

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "account", label: "Account", icon: Shield },
    { id: "api", label: "API Keys", icon: Key },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "appearance", label: "Appearance", icon: Palette },
  ]

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
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
              Settings
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Manage your account and preferences
            </motion.p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-4">
            {/* Tabs Sidebar */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-card rounded-2xl p-4 gradient-border sticky top-8">
                <div className="space-y-2">
                  {tabs.map((tab, i) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                        activeTab === tab.id
                          ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white"
                          : "text-gray-400 hover:bg-white/5 hover:text-white"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <tab.icon className="h-5 w-5" />
                      {tab.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              <motion.div 
                className="glass-card rounded-2xl p-8 gradient-border relative overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
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

                {/* Profile Tab */}
                {activeTab === "profile" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6 relative z-10"
                  >
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">Profile Information</h2>
                      <p className="text-gray-400">Update your personal details</p>
                    </div>

                    {/* Avatar */}
                    <div className="flex items-center gap-6">
                      <motion.div 
                        className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white text-3xl font-bold"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        JD
                      </motion.div>
                      <div>
                        <motion.button 
                          className="btn-gradient px-4 py-2 rounded-lg text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Change Avatar
                        </motion.button>
                        <p className="text-xs text-gray-500 mt-2">JPG, PNG or GIF. Max 2MB</p>
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                        <input
                          type="text"
                          defaultValue="John Doe"
                          className="w-full glass rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Username</label>
                        <input
                          type="text"
                          defaultValue="johndoe"
                          className="w-full glass rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <input
                          type="email"
                          defaultValue="john@example.com"
                          className="w-full glass rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                        <input
                          type="text"
                          placeholder="Your company"
                          className="w-full glass rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Bio</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about yourself..."
                        className="w-full glass rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Account Tab */}
                {activeTab === "account" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6 relative z-10"
                  >
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">Account Security</h2>
                      <p className="text-gray-400">Manage your password and security settings</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Current Password</label>
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full glass rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">New Password</label>
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full glass rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Confirm New Password</label>
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full glass rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="glass rounded-xl p-6 mt-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Two-Factor Authentication</h3>
                      <p className="text-sm text-gray-400 mb-4">Add an extra layer of security to your account</p>
                      <motion.button 
                        className="btn-gradient px-6 py-2 rounded-lg text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Enable 2FA
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {/* API Keys Tab */}
                {activeTab === "api" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6 relative z-10"
                  >
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">API Configuration</h2>
                      <p className="text-gray-400">Manage your API keys for integrations</p>
                    </div>

                    <div className="space-y-4">
                      {[
                        { name: "OpenAI API Key", placeholder: "sk-proj-...", required: true },
                        { name: "Supabase URL", placeholder: "https://...supabase.co", required: true },
                        { name: "Supabase Anon Key", placeholder: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", required: true },
                        { name: "Twitter API Key", placeholder: "Optional", required: false },
                        { name: "LinkedIn Client ID", placeholder: "Optional", required: false },
                      ].map((api, i) => (
                        <motion.div 
                          key={api.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            {api.name}
                            {api.required && <span className="text-red-400 ml-1">*</span>}
                          </label>
                          <div className="relative">
                            <input
                              type={showApiKeys ? "text" : "password"}
                              placeholder={api.placeholder}
                              className="w-full glass rounded-xl px-4 py-3 pr-12 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                            />
                            <button
                              type="button"
                              onClick={() => setShowApiKeys(!showApiKeys)}
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                            >
                              {showApiKeys ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="glass rounded-xl p-6 bg-blue-500/10 border border-blue-500/30">
                      <h3 className="text-sm font-semibold text-blue-400 mb-2">Need API Keys?</h3>
                      <p className="text-xs text-gray-400">
                        Check the API_KEYS_REQUIRED.md file in the project root for detailed instructions on obtaining all necessary API keys.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Notifications Tab */}
                {activeTab === "notifications" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6 relative z-10"
                  >
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">Notification Preferences</h2>
                      <p className="text-gray-400">Choose what updates you want to receive</p>
                    </div>

                    <div className="space-y-4">
                      {[
                        { label: "Email Notifications", description: "Receive email updates about your account" },
                        { label: "Post Scheduled", description: "Get notified when posts are scheduled" },
                        { label: "Analytics Reports", description: "Weekly analytics summary" },
                        { label: "Team Activity", description: "Updates from team members" },
                        { label: "Trending Topics", description: "New trending topics in your niche" },
                      ].map((notif, i) => (
                        <motion.div 
                          key={notif.label}
                          className="glass rounded-xl p-4 flex items-center justify-between"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div>
                            <p className="font-medium text-white">{notif.label}</p>
                            <p className="text-sm text-gray-400">{notif.description}</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                          </label>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Appearance Tab */}
                {activeTab === "appearance" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6 relative z-10"
                  >
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">Appearance Settings</h2>
                      <p className="text-gray-400">Customize how the app looks</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-4">Theme</label>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { name: "Dark", active: true },
                          { name: "Light", active: false },
                          { name: "Auto", active: false },
                        ].map((theme, i) => (
                          <motion.button
                            key={theme.name}
                            className={`glass rounded-xl p-6 text-center ${
                              theme.active ? "ring-2 ring-purple-500" : ""
                            }`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div className="text-2xl mb-2">{theme.name === "Dark" ? "🌙" : theme.name === "Light" ? "☀️" : "🔄"}</div>
                            <p className="text-sm font-medium text-white">{theme.name}</p>
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-4">Language</label>
                      <select className="w-full glass rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all">
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {/* Save Button */}
                <motion.div 
                  className="flex items-center justify-end gap-4 mt-8 pt-6 border-t border-white/10 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {saved && (
                    <motion.div
                      className="flex items-center gap-2 text-green-400"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <CheckCircle className="h-5 w-5" />
                      <span className="text-sm font-medium">Settings saved!</span>
                    </motion.div>
                  )}
                  <motion.button 
                    className="glass px-6 py-3 rounded-xl font-medium text-white hover:bg-white/10 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button 
                    onClick={handleSave}
                    className="btn-gradient px-6 py-3 rounded-xl font-semibold text-white shimmer hover-lift flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Save className="h-5 w-5" />
                    Save Changes
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
