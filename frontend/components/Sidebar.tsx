"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { 
  LayoutDashboard, 
  Sparkles, 
  Mic2, 
  TrendingUp, 
  Calendar, 
  BarChart3, 
  Settings,
  Zap,
  LogOut,
  User,
  ChevronDown
} from "lucide-react"

const navigation = [
  { 
    name: "Dashboard", 
    href: "/", 
    icon: LayoutDashboard
  },
  { 
    name: "Generate Content", 
    href: "/generate", 
    icon: Sparkles
  },
  { 
    name: "Brand Voice", 
    href: "/brand-voice", 
    icon: Mic2
  },
  { 
    name: "Trends", 
    href: "/trends", 
    icon: TrendingUp
  },
  { 
    name: "Scheduler", 
    href: "/scheduler", 
    icon: Calendar
  },
  { 
    name: "Analytics", 
    href: "/analytics", 
    icon: BarChart3
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Change to true when user is logged in
  const [showUserMenu, setShowUserMenu] = useState(false)

  return (
    <div className="flex h-screen w-72 flex-col glass border-r border-white/5">
      {/* Logo Section */}
      <div className="flex h-20 items-center justify-between px-6 border-b border-white/5">
        <motion.div 
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 glow-purple">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">
              Brand Chameleon
            </h1>
            <p className="text-[10px] text-gray-400 font-medium">AI Content Engine</p>
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4 overflow-y-auto custom-scrollbar">
        {navigation.map((item, index) => {
          const isActive = pathname === item.href
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "group relative flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300",
                  isActive
                    ? "glass-card"
                    : "hover:bg-white/5"
                )}
              >
                {/* Active Indicator */}
                {isActive && (
                  <motion.div 
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-r-full glow-purple"
                    layoutId="activeTab"
                  />
                )}
                
                {/* Icon Container */}
                <div className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300",
                  isActive 
                    ? "bg-purple-500/20 glow-purple"
                    : "bg-white/5 group-hover:bg-white/10"
                )}>
                  <item.icon className={cn(
                    "h-5 w-5 transition-all duration-300",
                    isActive ? "text-purple-400" : "text-gray-400 group-hover:text-white"
                  )} />
                </div>
                
                {/* Text */}
                <span className={cn(
                  "flex-1 transition-colors duration-300",
                  isActive ? "text-white font-semibold" : "text-gray-400 group-hover:text-white"
                )}>
                  {item.name}
                </span>
                
                {/* Glow Effect on Hover */}
                {isActive && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 -z-10"></div>
                )}
              </Link>
            </motion.div>
          )
        })}
        
        {/* Settings */}
        <div className="pt-4 mt-4 border-t border-white/5">
          <Link
            href="/settings"
            className="group flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300">
              <Settings className="h-5 w-5" />
            </div>
            <span>Settings</span>
          </Link>
        </div>
      </nav>

      {/* Bottom Section - User Profile or Login */}
      <div className="p-4 border-t border-white/5">
        {isLoggedIn ? (
          // Logged In - Show User Profile
          <motion.div 
            className="glass-card rounded-xl p-4 hover-lift cursor-pointer relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm glow-purple">
                JD
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">John Doe</p>
                <p className="text-xs text-gray-400">Pro Plan</p>
              </div>
              <ChevronDown className={cn(
                "h-4 w-4 text-gray-400 transition-transform",
                showUserMenu && "rotate-180"
              )} />
            </div>
            
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Credits Used</span>
                <span className="text-white font-medium">7,500 / 10,000</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>

            {/* User Menu Dropdown */}
            {showUserMenu && (
              <motion.div
                className="absolute bottom-full left-4 right-4 mb-2 glass-card rounded-xl p-2 border border-white/10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                <Link
                  href="/settings"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <User className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-white">Profile Settings</span>
                </Link>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-500/10 transition-colors"
                >
                  <LogOut className="h-4 w-4 text-red-400" />
                  <span className="text-sm text-red-400">Logout</span>
                </button>
              </motion.div>
            )}
          </motion.div>
        ) : (
          // Not Logged In - Show Login/Signup Buttons
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/login">
              <motion.button 
                className="w-full btn-gradient px-6 py-3 rounded-xl font-semibold text-white shimmer hover-lift flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <User className="h-4 w-4" />
                Sign In
              </motion.button>
            </Link>
            <Link href="/signup">
              <motion.button 
                className="w-full glass px-6 py-3 rounded-xl font-medium text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Sparkles className="h-4 w-4" />
                Sign Up Free
              </motion.button>
            </Link>
            <p className="text-center text-xs text-gray-500">
              Start your AI content journey
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
