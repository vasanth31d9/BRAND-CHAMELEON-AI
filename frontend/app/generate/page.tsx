"use client"

import { useState, ChangeEvent } from "react"
import { Sidebar } from "@/components/Sidebar"
import { AIOrb } from "@/components/AIOrb"
import { motion, AnimatePresence } from "framer-motion"
import { FileText, Link as LinkIcon, FileUp, Mic, Sparkles, Copy, RefreshCw, Edit, Target, TrendingUp, BarChart3 } from "lucide-react"

export default function GeneratePage() {
  const [inputType, setInputType] = useState<"text" | "url" | "pdf" | "voice">("text")
  const [inputValue, setInputValue] = useState("")
  const [generating, setGenerating] = useState(false)
  const [generated, setGenerated] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<any[]>([])
  const [error, setError] = useState("")

  const inputTypes = [
    { type: "text" as const, icon: FileText, label: "Text" },
    { type: "url" as const, icon: LinkIcon, label: "URL" },
    { type: "pdf" as const, icon: FileUp, label: "PDF" },
    { type: "voice" as const, icon: Mic, label: "Voice" },
  ]

  const handleGenerate = async () => {
    if (!inputValue.trim()) {
      setError("Please enter some content")
      return
    }

    setGenerating(true)
    setError("")
    
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
      
      const response = await fetch(`${apiUrl}/api/content/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: inputType === 'text' ? inputValue : null,
          url: inputType === 'url' ? inputValue : null,
          language: 'en',
          platforms: ['linkedin', 'twitter', 'instagram', 'tiktok', 'blog', 'youtube']
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || 'Failed to generate content')
      }

      const data = await response.json()
      setGeneratedContent(data)
      setGenerated(true)
    } catch (err: any) {
      console.error('Generation error:', err)
      setError(err.message || 'Failed to generate content. Make sure the backend is running and OpenAI API key is configured.')
    } finally {
      setGenerating(false)
    }
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#0A0A0A] neural-lines">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="max-w-7xl mx-auto p-8">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-gradient mb-2">Content Generator</h1>
            <p className="text-lg text-gray-400">Transform your idea into multi-platform content</p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">

              {!generated && (
                <motion.div 
                  className="glass-card rounded-2xl p-12 gradient-border"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex flex-col items-center justify-center">
                    <AIOrb isActive={generating} />
                    <motion.p 
                      className="text-gray-400 text-center mt-6"
                      animate={{ opacity: generating ? [0.5, 1, 0.5] : 1 }}
                      transition={{ duration: 1.5, repeat: generating ? Infinity : 0 }}
                    >
                      {generating ? "AI is thinking..." : "Ready to generate amazing content"}
                    </motion.p>
                  </div>
                </motion.div>
              )}

              <motion.div 
                className="glass-card rounded-2xl p-6 gradient-border"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-xl font-semibold text-white mb-4">Input Source</h2>
                
                <div className="grid grid-cols-4 gap-3 mb-6">
                  {inputTypes.map(({ type, icon: Icon, label }) => (
                    <button
                      key={type}
                      onClick={() => setInputType(type)}
                      style={{
                        backgroundColor: inputType === type ? 'rgba(139, 92, 246, 0.15)' : 'rgba(15, 15, 20, 0.6)',
                        backdropFilter: 'blur(20px)',
                      }}
                      className={`flex flex-col items-center justify-center gap-2 px-4 py-4 rounded-xl font-medium transition-all duration-300 ${
                        inputType === type
                          ? "text-white glow-purple border-2 border-purple-500/50"
                          : "text-gray-400 hover:text-white hover:bg-white/10 border-2 border-white/10"
                      }`}
                    >
                      <Icon className={`h-6 w-6 transition-colors ${inputType === type ? "text-purple-400" : "text-gray-400"}`} />
                      <span className="text-sm">{label}</span>
                    </button>
                  ))}
                </div>

                {inputType === "text" && (
                  <div className="relative">
                    <textarea
                      className="w-full min-h-[200px] rounded-xl glass p-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                      placeholder="Enter your content idea..."
                      value={inputValue}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInputValue(e.target.value)}
                    />
                    <div className="absolute bottom-4 right-4 text-xs text-gray-500">
                      {inputValue.length} characters
                    </div>
                  </div>
                )}

                {inputType === "url" && (
                  <input
                    type="url"
                    className="w-full rounded-xl glass p-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    placeholder="https://example.com/article"
                    value={inputValue}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                  />
                )}

                {inputType === "pdf" && (
                  <div className="border-2 border-dashed border-purple-500/30 rounded-xl p-12 text-center hover:border-purple-500/50 transition-all cursor-pointer bg-black/20">
                    <FileUp className="mx-auto h-12 w-12 text-purple-400 mb-4" />
                    <p className="text-sm text-gray-400">Drag & drop PDF or click to upload</p>
                    <p className="text-xs text-gray-500 mt-2">Max file size: 10MB</p>
                  </div>
                )}

                {inputType === "voice" && (
                  <div className="rounded-xl p-12 text-center" style={{ backgroundColor: 'rgba(15, 15, 20, 0.6)', backdropFilter: 'blur(20px)' }}>
                    <motion.div animate={generating ? { scale: [1, 1.2, 1] } : {}} transition={{ duration: 1, repeat: Infinity }}>
                      <Mic className="mx-auto h-12 w-12 text-cyan-400 mb-4" />
                    </motion.div>
                    <button className="px-6 py-3 rounded-xl text-white font-medium hover-lift transition-all" style={{ backgroundColor: 'rgba(139, 92, 246, 0.2)', border: '2px solid rgba(139, 92, 246, 0.5)' }}>
                      Start Recording
                    </button>
                  </div>
                )}

                {error && (
                  <motion.div
                    className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="text-sm text-red-400">{error}</p>
                  </motion.div>
                )}

                <button 
                  className="w-full mt-6 btn-gradient px-8 py-4 rounded-xl font-semibold text-white shimmer hover-lift flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleGenerate}
                  disabled={generating || !inputValue}
                >
                  <Sparkles className="h-5 w-5" />
                  {generating ? "Generating..." : "Generate Content"}
                </button>
              </motion.div>


              <AnimatePresence>
                {generated && generatedContent.length > 0 && (
                  <motion.div className="glass-card rounded-2xl p-6 gradient-border" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.6 }}>
                    <h2 className="text-xl font-semibold text-white mb-6">Generated Content</h2>
                    <div className="grid gap-4">
                      {generatedContent.map((item, i) => {
                        const platformConfig: Record<string, { name: string; icon: any; color: string }> = {
                          linkedin: { name: "LinkedIn Post", icon: FileText, color: "from-blue-500 to-cyan-500" },
                          twitter: { name: "Twitter Thread", icon: FileText, color: "from-purple-500 to-pink-500" },
                          instagram: { name: "Instagram Caption", icon: FileText, color: "from-pink-500 to-rose-500" },
                          tiktok: { name: "TikTok Script", icon: FileText, color: "from-cyan-500 to-blue-500" },
                          blog: { name: "Blog Article", icon: FileText, color: "from-green-500 to-emerald-500" },
                          youtube: { name: "YouTube Script", icon: FileText, color: "from-red-500 to-orange-500" },
                        }
                        
                        const config = platformConfig[item.platform] || { name: item.platform, icon: FileText, color: "from-gray-500 to-gray-600" }
                        
                        return (
                          <motion.div key={i} className="glass rounded-xl p-5 hover-lift cursor-pointer group" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <div className={`p-3 rounded-lg bg-gradient-to-br ${config.color} bg-opacity-10`}>
                                  <config.icon className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <h3 className="font-semibold text-white">{config.name}</h3>
                                  <p className="text-xs text-gray-400">Generated just now</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/20">
                                <Target className="h-3 w-3 text-purple-400" />
                                <span className="text-xs font-semibold text-purple-400">{item.virality_score.toFixed(1)}</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-300 mb-4 whitespace-pre-wrap">
                              {item.content}
                            </p>
                            <div className="flex gap-2 mb-3">
                              <button 
                                onClick={() => navigator.clipboard.writeText(item.content)}
                                className="flex-1 glass px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                              >
                                <Copy className="h-4 w-4" />
                                Copy
                              </button>
                              <button className="flex-1 glass px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                <Edit className="h-4 w-4" />
                                Edit
                              </button>
                              <button 
                                onClick={handleGenerate}
                                className="glass px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-white/10 transition-all"
                              >
                                <RefreshCw className="h-4 w-4" />
                              </button>
                            </div>
                            {/* Metrics */}
                            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10">
                              <div className="text-center">
                                <p className="text-xs text-gray-500">Hook</p>
                                <p className="text-sm font-bold text-green-400">{item.hook_strength.toFixed(0)}%</p>
                              </div>
                              <div className="text-center">
                                <p className="text-xs text-gray-500">Readability</p>
                                <p className="text-sm font-bold text-blue-400">{item.readability_score.toFixed(0)}%</p>
                              </div>
                              <div className="text-center">
                                <p className="text-xs text-gray-500">SEO</p>
                                <p className="text-sm font-bold text-purple-400">{item.seo_score.toFixed(0)}%</p>
                              </div>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="space-y-6">
              <motion.div className="glass-card rounded-2xl p-6 gradient-border" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-cyan-400" />
                  AI Insights
                </h2>
                <div className="space-y-5">
                  {[
                    { label: "Hook Strength", value: 85, color: "from-green-500 to-emerald-500" },
                    { label: "Readability", value: 92, color: "from-blue-500 to-cyan-500" },
                    { label: "SEO Score", value: 78, color: "from-purple-500 to-pink-500" },
                    { label: "Virality Potential", value: 88, color: "from-orange-500 to-red-500" },
                  ].map((metric, i) => (
                    <motion.div key={metric.label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-300">{metric.label}</span>
                        <span className="text-sm font-bold text-white">{metric.value}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div className={`h-full bg-gradient-to-r ${metric.color} rounded-full`} initial={{ width: 0 }} animate={{ width: `${metric.value}%` }} transition={{ duration: 1, delay: 0.5 + i * 0.1 }} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div className="glass-card rounded-2xl p-6 gradient-border" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-purple-400" />
                  Trending Keywords
                </h2>
                <div className="flex flex-wrap gap-2">
                  {["#AI", "#Marketing", "#Growth", "#SaaS", "#Productivity", "#Innovation"].map((tag, i) => (
                    <motion.span key={tag} className="text-xs glass px-3 py-1.5 rounded-lg text-cyan-400 hover:bg-white/10 transition-all cursor-pointer" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}>
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div className="glass-card rounded-2xl p-6 gradient-border" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
                <h2 className="text-xl font-semibold text-white mb-4">AI Suggestions</h2>
                <div className="space-y-3">
                  {["Add more emotional hooks", "Include trending hashtags", "Optimize for mobile readers"].map((suggestion, i) => (
                    <motion.div key={i} className="glass rounded-lg p-3 text-sm text-gray-300 hover:bg-white/5 transition-all cursor-pointer" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}>
                      • {suggestion}
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
