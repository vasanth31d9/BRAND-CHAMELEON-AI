"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function AIOrb({ isActive = false }: { isActive?: boolean }) {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; delay: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      x: Math.cos((i * 2 * Math.PI) / 30) * 150,
      y: Math.sin((i * 2 * Math.PI) / 30) * 150,
      delay: i * 0.05,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      {/* Outer rotating ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-purple-500/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Middle rotating ring */}
      <motion.div
        className="absolute inset-8 rounded-full border-2 border-cyan-500/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Inner rotating ring */}
      <motion.div
        className="absolute inset-16 rounded-full border-2 border-blue-500/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Central Orb */}
      <motion.div
        className="relative w-32 h-32 rounded-full"
        animate={{
          scale: isActive ? [1, 1.2, 1] : 1,
          opacity: isActive ? [0.8, 1, 0.8] : 0.8,
        }}
        transition={{
          duration: 2,
          repeat: isActive ? Infinity : 0,
        }}
      >
        {/* Gradient Orb */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 blur-2xl opacity-60"></div>
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 blur-xl"></div>
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-700 via-blue-700 to-cyan-700"></div>
        
        {/* Inner glow */}
        <motion.div
          className="absolute inset-8 rounded-full bg-white"
          animate={{
            opacity: isActive ? [0.3, 0.6, 0.3] : 0.3,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* Orbiting Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400"
          style={{
            top: '50%',
            left: '50%',
            marginTop: '-4px',
            marginLeft: '-4px',
          }}
          animate={{
            x: [0, particle.x, 0],
            y: [0, particle.y, 0],
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Neural Network Lines */}
      {isActive && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-24 bg-gradient-to-b from-purple-500/50 to-transparent"
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: 'top',
                transform: `rotate(${i * 45}deg)`,
              }}
              animate={{
                scaleY: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </>
      )}
    </div>
  )
}
