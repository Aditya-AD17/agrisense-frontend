"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"

interface NavbarProps {
  onMenuClick: () => void
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-30 bg-green-900 text-white shadow-lg"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 transition hover:bg-white/10 md:hidden"
            aria-label="Open navigation menu"
          >
            <Menu size={20} />
          </button>

          <Link href="/" className="text-lg font-semibold tracking-wide md:hidden">
            AgriSense
          </Link>
        </div>

        <nav className="hidden flex-wrap items-center gap-6 text-sm font-medium md:flex">
          <Link className="transition hover:text-orange-300" href="/">
            Home
          </Link>
          <Link className="transition hover:text-orange-300" href="/detection">
            Detect Disease
          </Link>
          <Link className="transition hover:text-orange-300" href="/schemes">
            Gov Schemes
          </Link>
          <Link className="transition hover:text-orange-300" href="/dashboard">
            Dashboard
          </Link>
          <Link className="transition hover:text-orange-300" href="/about">
            About
          </Link>
        </nav>
      </div>
    </motion.header>
  )
}
