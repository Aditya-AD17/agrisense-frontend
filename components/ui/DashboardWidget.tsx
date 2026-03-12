interface Props {
  title: string
  value: string
  icon: string
}

export default function DashboardWidget({ title, value, icon }: Props) {
  return (
    <div
  className="
  bg-white
  p-6
  rounded-2xl
  shadow-md
  hover:shadow-2xl
  hover:-translate-y-2
  hover:scale-[1.02]
  transition-all
  duration-300
  flex
  items-center
  gap-4
  cursor-pointer
  "
>
      <div className="text-3xl">{icon}</div>

      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-xl font-bold text-green-900">{value}</p>
      </div>
    </div>
  )
}