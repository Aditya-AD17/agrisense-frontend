"use client"

import { useState } from "react"
import Navbar from "@/components/layout/Navbar"
import PageTransition from "@/components/layout/PageTransition"
import Sidebar from "@/components/layout/Sidebar"

export default function AppShell({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <body className="min-h-screen bg-gray-100 text-gray-900 md:flex">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex min-h-screen flex-1 flex-col md:min-w-0">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 px-4 py-6 sm:px-6 md:p-8">
          <PageTransition>{children}</PageTransition>
        </main>
      </div>
    </body>
  )
}
