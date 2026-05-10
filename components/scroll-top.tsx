"use client"

import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

export default function ScrollTop() {

  const [visible, setVisible] = useState(false)

  useEffect(() => {

    function handleScroll() {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)

    return () =>
      window.removeEventListener("scroll", handleScroll)

  }, [])

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollTop}
      className="
      fixed bottom-24 right-6 z-50
      flex h-14 w-14 items-center justify-center
      rounded-full
      bg-gradient-to-r from-blue-600 to-purple-600
      shadow-2xl
      transition hover:scale-110
      "
    >
      <ArrowUp className="h-6 w-6 text-white" />
    </button>
  )
}