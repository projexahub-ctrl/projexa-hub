"use client"

export default function Loader() {

  return (

    <div
      className="
      fixed
      inset-0
      z-[100]

      flex
      items-center
      justify-center

      bg-white
      "
    >

      <div className="text-center">

        {/* LOGO */}

        <div
          className="
          mx-auto
          flex
          h-20
          w-20
          items-center
          justify-center

          rounded-2xl

          bg-black

          text-3xl
          font-bold
          text-white

          shadow-lg
          "
        >
          P
        </div>

        {/* BRAND */}

        <h1
          className="
          mt-6
          text-5xl
          font-extrabold
          tracking-tight
          text-black
          "
        >
          ProjexaHub
        </h1>

        {/* SUBTEXT */}

        <p
          className="
          mt-3
          text-lg
          text-gray-500
          "
        >
          Building Professional Engineering Solutions
        </p>

        {/* LOADING BAR */}

        <div
          className="
          mt-8
          h-2
          w-72
          overflow-hidden
          rounded-full
          bg-gray-200
          "
        >

          <div
            className="
            h-full
            w-1/2
            animate-pulse
            rounded-full
            bg-black
            "
          />

        </div>

      </div>

    </div>

  )
}