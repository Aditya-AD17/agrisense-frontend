"use client"

import Link from "next/link"

export default function Sidebar() {
  return (
    <aside className="h-screen w-60 bg-green-800 text-white p-6">

      <h2 className="text-2xl font-bold mb-8">
        AgriSense
      </h2>

      <nav className="flex flex-col gap-4">

        <Link href="/dashboard">Dashboard</Link>

        <Link href="/detection">Disease Detection</Link>

        <Link href="/schemes">Government Schemes</Link>

        <Link href="/analytics">Analytics</Link>

      </nav>

    </aside>
  )
}