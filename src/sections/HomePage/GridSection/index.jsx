"use client"

import PrimaryButton from "@/components/PrimaryButton"

const technologies = [
  {
    name: "Perplexity",
    description: "Score, Embeddings, Search, Contextualization, Retrieval",
    icon: "🔍",
    color: "text-emerald-600",
  },
  {
    name: "Co-pilot",
    description: "GitHub Copilot X, Chat, Labs, Voice for Business",
    icon: "🤖",
    color: "text-blue-600",
  },
  {
    name: "Microsoft Azure",
    description: "Cognitive, Synapse, Bot Service, Form Recognizer, OpenAI",
    icon: "☁️",
    color: "text-cyan-600",
  },
  {
    name: "Gemini",
    description: "Gemini 2.0, Deep Think, Flash-Lite, Pipelines, Restructions",
    icon: "💎",
    color: "text-purple-600",
  },
  {
    name: "OpenAI",
    description: "GPT-5, Codex, Embeddings, DALL-E, Whisper",
    icon: "🧠",
    color: "text-green-600",
  },
  {
    name: "Meta",
    description: "LLAMA, Segments, Broadcast, Detection, MLX",
    icon: "🔗",
    color: "text-blue-500",
  },
  {
    name: "Cursor",
    description: "AI Code Completion, Debug, Assistant, Workflow Automations",
    icon: "⚡",
    color: "text-gray-600",
  },
  {
    name: "Claude",
    description: "Opus 3.5, Sonnet, Memory, Multi, Safety",
    icon: "🎭",
    color: "text-orange-600",
  },
  {
    name: "Google Vertex AI",
    description: "Gemini 2.0, Deep Think, Flash-Lite, Pipelines, Feature Store",
    icon: "🔬",
    color: "text-indigo-600",
  },
  {
    name: "AWS Bedrock",
    description: "Titan, Nova, Lambda, Firecracker, SageMaker",
    icon: "🏗️",
    color: "text-yellow-600",
  },
  {
    name: "Qodo",
    description: "No-Code AI Builder, AutoML, Integration Hub",
    icon: "🎯",
    color: "text-teal-600",
  },
  {
    name: "Technology",
    description: "Discover what's driving the future of technology",
    icon: "💧",
    color: "text-blue-400",
  },
]

export function GridSection() {
  return (
    <>
      <style jsx>{`
        @keyframes gradient-rotate {
          0% {
            background: linear-gradient(45deg, 
              rgba(40, 184, 115, 1), 
              rgba(255, 211, 51, 1), 
              rgba(219, 38, 77, 1), 
              rgba(255, 116, 77, 1), 
              rgba(51, 95, 255, 1)
            );
          }
          25% {
            background: linear-gradient(135deg, 
              rgba(255, 211, 51, 1), 
              rgba(219, 38, 77, 1), 
              rgba(255, 116, 77, 1), 
              rgba(51, 95, 255, 1), 
              rgba(40, 184, 115, 1)
            );
          }
          50% {
            background: linear-gradient(225deg, 
              rgba(219, 38, 77, 1), 
              rgba(255, 116, 77, 1), 
              rgba(51, 95, 255, 1), 
              rgba(40, 184, 115, 1), 
              rgba(255, 211, 51, 1)
            );
          }
          75% {
            background: linear-gradient(315deg, 
              rgba(255, 116, 77, 1), 
              rgba(51, 95, 255, 1), 
              rgba(40, 184, 115, 1), 
              rgba(255, 211, 51, 1), 
              rgba(219, 38, 77, 1)
            );
          }
          100% {
            background: linear-gradient(45deg, 
              rgba(40, 184, 115, 1), 
              rgba(255, 211, 51, 1), 
              rgba(219, 38, 77, 1), 
              rgba(255, 116, 77, 1), 
              rgba(51, 95, 255, 1)
            );
          }
        }
        
        .animate-gradient-border {
          animation: gradient-rotate 4s ease-in-out infinite;
          background-size: 400% 400%;
        }
      `}</style>

      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
              Pioneering Next-gen Technologies for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Impactful Solutions
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Delivering innovative solutions tailored to your business needs.
            </p>
          </div>

          <div className="relative">
            <div className="p-[6px] rounded-3xl animate-gradient-border shadow-2xl shadow-white/20">
              {/* Content Container */}
              <div className="bg-white rounded-[calc(1.5rem-6px)] p-8 shadow-inner shadow-white/10">
                {/* Technology Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                  {technologies.map((tech, index) => (
                    <div key={index} className="text-left">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{tech.icon}</span>
                        <h3 className="font-semibold text-gray-900">{tech.name}</h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{tech.description}</p>
                    </div>
                  ))}
                </div>

                {/* View All Button */}
                <div className="flex justify-end">
                  <PrimaryButton 
                    text="View All"
                    className="text-blue-600 border border-blue-200 hover:bg-blue-50 bg-transparent px-6 py-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
