"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-green-900 text-white shadow-lg"
    >

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold tracking-wide">
          AgriSense 🌱
        </h1>

        <nav className="flex gap-8 text-sm font-medium">

          <Link className="hover:text-orange-400 transition" href="/">
            Home
          </Link>

          <Link className="hover:text-orange-400 transition" href="/detection">
            Detect Disease
          </Link>

          <Link className="hover:text-orange-400 transition" href="/schemes">
            Gov Schemes
          </Link>

          <Link className="hover:text-orange-400 transition" href="/dashboard">
            Dashboard
          </Link>

        </nav>

      </div>

    </motion.header>
  )
}