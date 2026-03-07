"use client"

import { useEffect, useState } from "react"
import SchemeCard from "@/components/ui/SchemeCard"
import { getSchemes } from "@/services/schemeService"
import { Scheme } from "@/types/scheme"

export default function SchemesPage() {

  const [schemes, setSchemes] = useState<Scheme[]>([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    async function load() {
      const data = await getSchemes()
      setSchemes(data)
    }

    load()
  }, [])

  const filtered = schemes.filter((scheme) =>
    scheme.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="max-w-6xl mx-auto space-y-8">

      <h1 className="text-3xl font-bold text-gray-800">
        Government Schemes for Farmers
      </h1>

      {/* SEARCH */}

      <input
        type="text"
        placeholder="Search schemes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
        w-full
        border
        rounded-lg
        px-4
        py-3
        focus:outline-none
        focus:ring-2
        focus:ring-green-600
        "
      />

      {/* SCHEME LIST */}
      <div className="text-center">

  <h1 className="text-4xl font-bold text-green-900">
    Government Schemes
  </h1>

  <p className="text-gray-600 mt-3">
    Access agricultural support programs and subsidies
  </p>

</div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">

        {filtered.map((scheme) => (
          <SchemeCard key={scheme.id} scheme={scheme} />
        ))}

      </div>

    </div>
  )

}