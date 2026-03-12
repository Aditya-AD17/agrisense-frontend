import Link from "next/link"

interface Props {
  icon: string
  title: string
  description: string
  action: string
  href?: string
}

export default function FeatureCard({
  icon,
  title,
  description,
  action,
  href,
}: Props) {
  const content = (
    <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center cursor-pointer">

      <div className="w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-6 group-hover:scale-110 transition">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-green-900">
        {title}
      </h3>

      <p className="text-gray-500 mt-3">
        {description}
      </p>

      <button className="mt-4 text-green-700 font-semibold hover:underline">
        {action}
      </button>

    </div>
  )

  return href ? <Link href={href}>{content}</Link> : content
}