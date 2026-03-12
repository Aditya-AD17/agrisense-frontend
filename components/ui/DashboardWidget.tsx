import Skeleton from "./Skeleton"

interface Props {
  title?: string
  value?: string
  icon?: string
  loading?: boolean
}

export default function DashboardWidget({
  title,
  value,
  icon,
  loading,
}: Props) {

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow">
        <Skeleton className="h-6 w-10 mb-3" />
        <Skeleton className="h-4 w-24" />
      </div>
    )
  }

  return (
    <div
      className="
      bg-white
      p-6
      rounded-2xl
      shadow-md
      hover:shadow-xl
      hover:-translate-y-2
      transition
      flex
      items-center
      gap-4
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