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
      fixed
      bottom-24
      right-6
      z-50

      flex
      h-12
      w-12
      items-center
      justify-center

      rounded-full

      border
      border-gray-200

      bg-white

      text-black

      shadow-lg

      transition-all
      duration-300

      hover:-translate-y-1
      hover:bg-black
      hover:text-white
      "
    >

      <ArrowUp
        className="
        h-5
        w-5
        "
      />

    </button>

  )
}