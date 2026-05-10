"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/918088046553"
      target="_blank"
      className="
      fixed bottom-6 right-6 z-50
      flex h-16 w-16 items-center justify-center
      rounded-full
      bg-green-500
      shadow-2xl
      transition hover:scale-110
      "
    >
      <MessageCircle className="h-8 w-8 text-white" />
    </a>
  )
}