"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Microscope,
  Landmark,
  BarChart3,
} from "lucide-react"

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Disease Detection",
    href: "/detection",
    icon: Microscope,
  },
  {
    name: "Government Schemes",
    href: "/schemes",
    icon: Landmark,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex h-screen w-64 flex-col bg-green-900 p-6 text-white">
      <h2 className="mb-10 text-2xl font-bold">
        {"\u{1F331}"} AgriSense
      </h2>

      <nav className="space-y-3">
        {links.map((link) => {
          const Icon = link.icon
          const active = pathname === link.href

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`
                flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200
                ${
                  active
                    ? "bg-green-700 shadow-lg"
                    : "hover:bg-green-800 hover:translate-x-1"
                }
              `}
            >
              <Icon size={20} />
              {link.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
