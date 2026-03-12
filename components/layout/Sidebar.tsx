"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Info,
  Landmark,
  LayoutDashboard,
  Microscope,
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
  {
    name: "About",
    href: "/about",
    icon: Info,
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex h-screen w-64 flex-col bg-green-900 p-6 text-white">
      <Link href="/">
        <div className="mb-10 flex cursor-pointer items-center gap-3 transition hover:scale-105">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-700 text-sm font-bold">
            🌱
          </div>

          <span className="text-2xl font-bold tracking-wide">AgriSense</span>
        </div>
      </Link>

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
