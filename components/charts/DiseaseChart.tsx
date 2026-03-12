"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"

const data = [
  { name: "Blight", cases: 40 },
  { name: "Rust", cases: 25 },
  { name: "Mildew", cases: 15 },
  { name: "Spot", cases: 30 },
]

export default function DiseaseChart() {
  return (
    <div
      className="
      bg-white
      p-6
      rounded-2xl
      shadow-md
      hover:shadow-xl
      hover:-translate-y-1
      transition
      duration-300
      "
    >

      <h3 className="text-green-900 font-semibold text-lg mb-4">
        Most Detected Crop Diseases
      </h3>

      <ResponsiveContainer width="100%" height={260}>

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip
            contentStyle={{
              borderRadius: "8px",
              border: "none",
            }}
          />

          <Bar
            dataKey="cases"
            fill="url(#colorGradient)"
            radius={[6, 6, 0, 0]}
            animationDuration={1200}
          />
          <defs>
  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="#22c55e" stopOpacity={1}/>
    <stop offset="100%" stopColor="#15803d" stopOpacity={1}/>
  </linearGradient>
</defs>
        </BarChart>

      </ResponsiveContainer>

    </div>
  )
}