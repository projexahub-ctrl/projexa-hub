"use client"

import Link from "next/link"

import {
  LayoutDashboard,
  FolderKanban,
  Users,
  Bot,
  Settings,
} from "lucide-react"

const items = [

  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    title: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },

  {
    title: "Users",
    href: "/dashboard",
    icon: Users,
  },

  {
    title: "AI Generator",
    href: "/ai-generator",
    icon: Bot,
  },

  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },

]

export default function DashboardSidebar() {

  return (

    <aside
      className="
      hidden

      h-screen
      w-72
      flex-col

      border-r
      border-gray-200

      bg-white

      p-6

      md:flex
      "
    >

      {/* LOGO */}

      <div>

        <h1
          className="
          text-3xl
          font-extrabold
          tracking-tight
          text-black
          "
        >
          ProjexaHub
        </h1>

        <p
          className="
          mt-2
          text-sm
          text-gray-500
          "
        >
          Engineering Project Dashboard
        </p>

      </div>

      {/* NAVIGATION */}

      <nav
        className="
        mt-10
        space-y-2
        "
      >

        {items.map((item, index) => {

          const Icon = item.icon

          return (

            <Link
              key={index}

              href={item.href}

              className="
              flex
              items-center
              gap-4

              rounded-xl

              px-4
              py-3

              text-gray-700

              transition

              hover:bg-gray-100
              hover:text-black
              "
            >

              <Icon
                className="
                h-5
                w-5
                "
              />

              <span className="font-medium">
                {item.title}
              </span>

            </Link>

          )

        })}

      </nav>

      {/* FOOTER */}

      <div
        className="
        mt-auto

        rounded-2xl

        border
        border-gray-200

        bg-gray-50

        p-5
        "
      >

        <h3
          className="
          text-lg
          font-semibold
          text-black
          "
        >
          ProjexaHub
        </h3>

        <p
          className="
          mt-2
          text-sm
          leading-6
          text-gray-500
          "
        >
          Manage engineering projects,
          students and AI tools in one place.
        </p>

      </div>

    </aside>

  )
}