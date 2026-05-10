import Link from "next/link"

export default function NotFound() {
  return (
    <main
      className="
      flex
      min-h-screen
      items-center
      justify-center

      bg-[#060816]
      px-6
      text-white
      "
    >

      <div
        className="
        text-center
        "
      >

        <h1
          className="
          text-8xl
          font-black

          gradient-text
          "
        >
          404
        </h1>

        <h2
          className="
          mt-6
          text-4xl
          font-black
          "
        >
          Page Not Found
        </h2>

        <p
          className="
          mt-6
          text-lg
          text-slate-400
          "
        >
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"

          className="
          mt-10
          inline-flex

          rounded-2xl

          bg-gradient-to-r
          from-blue-600
          to-purple-600

          px-8
          py-4

          font-semibold
          "
        >
          Back To Home
        </Link>

      </div>

    </main>
  )
}