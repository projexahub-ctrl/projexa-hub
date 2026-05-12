import Link from "next/link"

export default function NotFound() {

  return (

    <main
      className="
      flex
      min-h-screen
      items-center
      justify-center

      bg-gray-50
      px-6
      "
    >

      <div
        className="
        max-w-2xl
        text-center
        "
      >

        {/* 404 */}

        <h1
          className="
          text-9xl
          font-extrabold
          tracking-tight
          text-black
          "
        >
          404
        </h1>

        {/* TITLE */}

        <h2
          className="
          mt-6
          text-5xl
          font-bold
          text-gray-900
          "
        >
          Page Not Found
        </h2>

        {/* DESCRIPTION */}

        <p
          className="
          mx-auto
          mt-6
          max-w-xl
          text-lg
          leading-8
          text-gray-600
          "
        >
          The page you are looking for may have been removed,
          renamed or is temporarily unavailable.
        </p>

        {/* BUTTON */}

        <Link
          href="/"

          className="
          mt-10
          inline-flex
          items-center
          justify-center

          rounded-xl

          bg-black

          px-8
          py-4

          text-lg
          font-semibold
          text-white

          transition
          hover:bg-gray-800
          "
        >
          Back To Home
        </Link>

      </div>

    </main>

  )
}