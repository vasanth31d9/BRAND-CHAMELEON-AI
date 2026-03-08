"use client"

import { motion } from 'framer-motion'
import { Sparkles, Zap, Brain, Cpu } from 'lucide-react'

export function AILoadingAnimation() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl">
      <div className="relative">
        {/* Outer rotating ring */}
        <motion.div
          className="absolute inset-0 w-64 h-64 rounded-full border-2 border-purple-500/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Middle rotating ring */}
        <motion.div
          className="absolute inset-4 rounded-full border-2 border-blue-500/30"
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner rotating ring */}
        <motion.div
          className="absolute inset-8 rounded-full border-2 border-pink-500/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Center content */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          <div className="text-center space-y-4">
            {/* Animated icons */}
            <div className="flex items-center justify-center gap-4">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Brain className="w-8 h-8 text-purple-400" />
              </motion.div>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, -180, -360]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <Cpu className="w-8 h-8 text-blue-400" />
              </motion.div>
            </div>

            {/* Pulsing glow */}
            <motion.div
              className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ filter: 'blur(20px)' }}
            />

            {/* Text */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <h3 className="text-2xl font-bold text-gradient">
                AI is thinking...
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Generating your content
              </p>
            </motion.div>

            {/* Animated dots */}
            <div className="flex items-center justify-center gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-purple-400"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Orbiting particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
            style={{
              top: '50%',
              left: '50%',
              marginTop: '-6px',
              marginLeft: '-6px',
            }}
            animate={{
              x: [0, Math.cos((i * Math.PI * 2) / 8) * 120],
              y: [0, Math.sin((i * Math.PI * 2) / 8) * 120],
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.25,
            }}
          />
        ))}
      </div>
    </div>
  )
}
