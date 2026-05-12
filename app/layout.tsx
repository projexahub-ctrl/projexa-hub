import type { Metadata } from "next"

import "./globals.css"

import Navbar from "@/components/navbar"

export const metadata: Metadata = {

  title: "ProjexaHub | Engineering Project Marketplace",

  description:
    "ProjexaHub is a professional engineering project platform for AI, IoT, Robotics, Mechanical and Software solutions.",

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (

    <html lang="en">

      <body
        className="
        bg-white
        text-black
        antialiased
        "
      >

        <Navbar />

        <main>
          {children}
        </main>

      </body>

    </html>

  )
}