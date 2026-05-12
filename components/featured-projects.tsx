import Link from "next/link"

const domains = [

  {
    title: "Mechanical Engineering",
    image:
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Electronics & Communication",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Electrical Engineering",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "AI / Machine Learning",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Robotics Projects",
    image:
      "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "IoT Based Systems",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop",
  },

]

export default function FeaturedProjects() {

  return (

    <section
      className="
      bg-white
      py-24
      "
    >

      <div
        className="
        mx-auto
        max-w-7xl
        px-6
        "
      >

        {/* HEADER */}

        <div className="text-center">

          <div
            className="
            inline-flex
            rounded-full
            bg-blue-100
            px-4
            py-2
            text-sm
            font-medium
            text-blue-700
            "
          >
            PROJECT DOMAINS
          </div>

          <h2
            className="
            mt-6
            text-5xl
            font-bold
            text-gray-900
            "
          >
            Explore Engineering Domains
          </h2>

          <p
            className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-gray-600
            "
          >
            Discover innovative engineering domains,
            prototypes, automation systems and custom
            project solutions developed by ProjexaHub.
          </p>

        </div>

        {/* DOMAIN CARDS */}

        <div
          className="
          mt-20
          grid
          gap-8

          md:grid-cols-2
          lg:grid-cols-3
          "
        >

          {domains.map((domain, i) => (

            <div
              key={i}

              className="
              overflow-hidden
              rounded-3xl
              border
              border-gray-200
              bg-white
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
              "
            >

              <img
                src={domain.image}

                alt={domain.title}

                className="
                h-64
                w-full
                object-cover
                "
              />

              <div className="p-6">

                <h3
                  className="
                  text-2xl
                  font-bold
                  text-gray-900
                  "
                >
                  {domain.title}
                </h3>

                <p
                  className="
                  mt-4
                  leading-7
                  text-gray-600
                  "
                >
                  Explore innovative projects,
                  prototypes and real-world
                  engineering implementations.
                </p>

                <Link href="/projects">

                  <button
                    className="
                    mt-6
                    rounded-xl
                    bg-black
                    px-6
                    py-3
                    text-white
                    transition
                    hover:bg-gray-800
                    "
                  >
                    Explore Projects
                  </button>

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )

}