"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const data = [
  { name: "Blight", cases: 40 },
  { name: "Rust", cases: 25 },
  { name: "Mildew", cases: 15 },
  { name: "Spot", cases: 30 },
]

export default function DiseaseChart() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">

      <h3 className="font-semibold mb-4">
        Most Detected Crop Diseases
      </h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="cases" fill="#16a34a" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  )
}