"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypewriterEffectProps {
  text: string
  className?: string
  speed?: number
}

export function TypewriterEffect({ text, className = '', speed = 50 }: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return (
    <div className={className}>
      {displayedText}
      <motion.span
        className="inline-block w-0.5 h-5 bg-purple-400 ml-1"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </div>
  )
}
