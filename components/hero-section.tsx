"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function HeroSection() {

  return (

    <section
      id="home"
      className="
      bg-white
      pt-36
      pb-24
      overflow-hidden
      "
    >

      <div
        className="
        mx-auto
        grid
        max-w-7xl
        items-center
        gap-16
        px-6

        md:grid-cols-2
        "
      >

        {/* LEFT CONTENT */}

        <div>

          <div
            className="
            inline-flex
            items-center
            rounded-full
            bg-blue-100
            px-4
            py-2
            text-sm
            font-medium
            text-blue-700
            "
          >
            Engineering Project Marketplace
          </div>

          <h1
            className="
            mt-6
            text-5xl
            font-extrabold
            leading-tight
            tracking-tight
            text-gray-900

            md:text-6xl
            "
          >

            Build Engineering

            <br />

            Projects, Prototypes

            <br />

            & Smart Solutions

          </h1>

          <p
            className="
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-gray-600
            "
          >
            ProjexaHub helps students, startups and innovators
            design and develop engineering projects, smart
            prototypes, IoT systems, automation solutions and
            AI-powered products across multiple domains.
          </p>

          <div
            className="
            mt-10
            flex
            flex-col
            gap-4

            sm:flex-row
            "
          >

            <Link href="/projects">

              <Button
                size="lg"

                className="
                rounded-xl
                bg-black
                px-8
                py-6
                text-lg
                text-white
                hover:bg-gray-800
                "
              >
                Browse Projects
              </Button>

            </Link>

            <Link href="/contact">

              <Button
                size="lg"
                variant="outline"

                className="
                rounded-xl
                border-gray-300
                px-8
                py-6
                text-lg
                text-black
                hover:bg-gray-100
                "
              >
                Talk To Expert
              </Button>

            </Link>

          </div>

          {/* TRUST SECTION */}

          <div
            className="
            mt-14
            flex
            flex-wrap
            gap-10
            "
          >

            <div>

              <h3
                className="
                text-3xl
                font-bold
                text-gray-900
                "
              >
                500+
              </h3>

              <p className="text-gray-500">
                Projects Delivered
              </p>

            </div>

            <div>

              <h3
                className="
                text-3xl
                font-bold
                text-gray-900
                "
              >
                1000+
              </h3>

              <p className="text-gray-500">
                Students Supported
              </p>

            </div>

            <div>

              <h3
                className="
                text-3xl
                font-bold
                text-gray-900
                "
              >
                24/7
              </h3>

              <p className="text-gray-500">
                Technical Support
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div
          className="
          relative
          flex
          items-center
          justify-center
          "
        >

          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"

            alt="Engineering Projects"

            className="
            w-full
            rounded-[40px]
            border
            border-gray-200
            shadow-2xl
            object-cover
            "
          />

        </div>

      </div>

    </section>

  )

}