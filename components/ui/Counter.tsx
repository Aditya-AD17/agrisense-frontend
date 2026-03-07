"use client"

import CountUp from "react-countup"

interface Props {
  value: number
  label: string
}

export default function Counter({ value, label }: Props) {
  return (
    <div className="text-center">

      <h2 className="text-4xl font-bold text-orange-500">
        <CountUp end={value} duration={3} />
      </h2>

      <p className="text-white mt-2">
        {label}
      </p>

    </div>
  )
}