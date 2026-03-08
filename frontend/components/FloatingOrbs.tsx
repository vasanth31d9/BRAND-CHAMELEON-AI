"use client"

import { motion } from 'framer-motion'

export function FloatingOrbs() {
  const orbs = [
    { size: 400, color: 'from-purple-500/20 to-pink-500/20', duration: 20, delay: 0 },
    { size: 300, color: 'from-blue-500/20 to-cyan-500/20', duration: 15, delay: 2 },
    { size: 350, color: 'from-pink-500/20 to-orange-500/20', duration: 18, delay: 4 },
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full bg-gradient-to-br ${orb.color} blur-3xl`}
          style={{
            width: orb.size,
            height: orb.size,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
