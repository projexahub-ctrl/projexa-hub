"use client"

import { Bot } from "lucide-react"

export default function AIChatbot() {
  return (
    <button
      className="
      fixed bottom-44 right-6 z-50
      flex h-16 w-16 items-center justify-center
      rounded-full
      bg-gradient-to-r from-blue-600 to-purple-600
      shadow-2xl
      transition hover:scale-110
      "
    >
      <Bot className="h-8 w-8 text-white" />
    </button>
  )
}