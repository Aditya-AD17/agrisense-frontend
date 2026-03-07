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
    <aside className="h-screen w-64 bg-green-900 text-white p-6 flex flex-col">

      <h2 className="text-2xl font-bold mb-10">
        🌱 AgriSense
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
                flex items-center gap-3 px-4 py-3 rounded-lg transition
                ${
                  active
                    ? "bg-green-700"
                    : "hover:bg-green-800"
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