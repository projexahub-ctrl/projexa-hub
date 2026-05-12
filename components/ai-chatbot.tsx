"use client"

import { MessageCircle } from "lucide-react"

export default function AIChatbot() {

  function openWhatsApp() {

    window.open(
      "https://wa.me/919999999999",
      "_blank"
    )

  }

  return (

    <button
      onClick={openWhatsApp}

      className="
      fixed
      bottom-6
      right-6
      z-50

      flex
      items-center
      gap-3

      rounded-full

      bg-black

      px-5
      py-4

      text-white

      shadow-lg

      transition-all
      duration-300

      hover:bg-gray-800
      hover:scale-105
      "
    >

      <MessageCircle
        className="
        h-5
        w-5
        "
      />

      <span
        className="
        text-sm
        font-medium
        "
      >
        Chat With Us
      </span>

    </button>

  )
}