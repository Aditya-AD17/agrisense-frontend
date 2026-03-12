"use client"

import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer
} from "recharts"

const data = [
  {
    name: "Confidence",
    value: 92,
    fill: "#16a34a"
  }
]

export default function ConfidenceGauge() {
  return (
    <div
      className="
      bg-white
      p-6
      rounded-2xl
      shadow-md
      hover:-translate-y-1
      hover:shadow-xl
      transition
      duration-300
      "
    >

      <h3 className="text-green-900 font-semibold text-lg mb-4">
        AI Prediction Confidence
      </h3>

      <div className="h-64">

        <ResponsiveContainer width="100%" height="100%">

          <RadialBarChart
            innerRadius="70%"
            outerRadius="100%"
            data={data}
            startAngle={180}
            endAngle={0}
          >

            <RadialBar
              dataKey="value"
              cornerRadius={10}
              fill="#16a34a"
              animationDuration={1200}
            />

          </RadialBarChart>

        </ResponsiveContainer>

      </div>

      <p className="text-center text-2xl font-bold text-green-700 mt-2">
        92%
      </p>

    </div>
  )
}
