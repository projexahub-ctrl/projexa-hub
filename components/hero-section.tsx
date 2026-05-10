"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="
      relative
      flex
      min-h-screen
      items-center
      justify-center
      overflow-hidden
      hero-grid
      "
    >

      <div
        className="
        absolute
        left-20
        top-20
        h-72
        w-72
        rounded-full
        bg-blue-500/20
        blur-3xl
        "
      />

      <div
        className="
        absolute
        bottom-20
        right-20
        h-72
        w-72
        rounded-full
        bg-purple-500/20
        blur-3xl
        "
      />

      <div
        className="
        relative
        z-10
        mx-auto
        max-w-6xl
        px-6
        text-center

        drop-shadow-[0_0_40px_rgba(99,102,241,0.15)]
        "
      >

        <div
          className="
          mb-6
          inline-flex
          items-center
          rounded-full
          border
          border-white/10
          bg-white/5
          px-4
          py-2
          text-sm
          text-slate-200
          backdrop-blur-xl
          "
        >
          🚀 Premium Engineering Project Marketplace
        </div>

        <h1
          className="
          text-4xl
          font-black
          leading-tight

          md:text-6xl
          lg:text-7xl
          "
        >

          Build Your Final Year

          <br />

          Project With{" "}

          <span className="gradient-text">
            ProjexaHub
          </span>

        </h1>

        <p
          className="
          mx-auto
          mt-8
          max-w-3xl
          text-lg
          text-slate-300
          md:text-2xl
          "
        >
          Helping students transform ideas into innovation with affordable engineering solutions.
        </p>

        <div
          className="
          mt-10
          flex
          flex-col
          items-center
          justify-center
          gap-4

          sm:flex-row
          "
        >

          <Link href="/projects">

            <Button
              size="lg"

              className="
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-purple-600

              px-8
              py-6
              text-lg

              transition
              hover:scale-105
              "
            >
              Get Your Project Done
            </Button>

          </Link>

          <Link href="/projects">

            <Button
              size="lg"
              variant="outline"

              className="
              rounded-2xl
              border-white/10
              bg-white/5

              px-8
              py-6
              text-lg
              text-white

              backdrop-blur-xl
              "
            >
              Explore Projects
            </Button>

          </Link>

        </div>

      </div>

    </section>
  )
}