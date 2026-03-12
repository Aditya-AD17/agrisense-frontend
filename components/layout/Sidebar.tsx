"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Info,
  Landmark,
  LayoutDashboard,
  Microscope,
  X,
} from "lucide-react"

interface SidebarProps {
  open: boolean
  onClose: () => void
}

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

export default function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-black/40 transition md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen w-72 flex-col bg-green-900 p-5 text-white shadow-2xl transition-transform duration-300 md:static md:w-64 md:translate-x-0 md:shadow-none ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between md:block">
          <Link href="/" onClick={onClose}>
            <div className="flex items-center gap-3 transition hover:scale-[1.02]">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-700 text-sm font-bold">
                🌱
              </div>
              <span className="text-2xl font-bold tracking-wide">AgriSense</span>
            </div>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 transition hover:bg-white/10 md:hidden"
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="space-y-2">
          {links.map((link) => {
            const Icon = link.icon
            const active = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 ${
                  active
                    ? "bg-green-700 shadow-lg"
                    : "hover:bg-green-800 hover:translate-x-1"
                }`}
              >
                <Icon size={20} />
                {link.name}
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
