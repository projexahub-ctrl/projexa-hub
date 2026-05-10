"use client"

import Link from "next/link"

import {
  LayoutDashboard,
  FolderKanban,
  Users,
  CreditCard,
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
    title: "Payments",
    href: "/pricing",
    icon: CreditCard,
  },

  {
    title: "AI Generator",
    href: "/ai-generator",
    icon: Bot,
  },

  {
    title: "Settings",
    href: "/dashboard",
    icon: Settings,
  },
]

export default function DashboardSidebar() {
  return (
    <aside
      className="
      hidden
      w-72
      flex-col
      border-r border-white/10
      bg-white/[0.03]
      p-6

      md:flex
      "
    >

      <h1
        className="
        gradient-text
        text-3xl
        font-black
        "
      >
        ProjexaHub
      </h1>

      <nav
        className="
        mt-10
        space-y-3
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

              rounded-2xl
              p-4

              text-slate-300

              transition

              hover:bg-white/[0.06]
              hover:text-white
              "
            >

              <Icon
                className="
                h-5
                w-5
                "
              />

              {item.title}

            </Link>

          )

        })}

      </nav>

    </aside>
  )
}