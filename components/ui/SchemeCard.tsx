import { Scheme } from "@/types/scheme"

interface Props {
  scheme: Scheme
}

export default function SchemeCard({ scheme }: Props) {

  return (
    <div
      className="
      bg-white
      rounded-2xl
      p-8
      shadow-md
      hover:shadow-xl
      hover:-translate-y-2
      transition
      flex
      flex-col
      justify-between
      "
    >

      {/* CATEGORY BADGE */}

      <div className="mb-4">

        <span className="
        bg-orange-500
        text-white
        text-sm
        px-4
        py-1
        rounded-full
        font-medium
        ">
          {scheme.category}
        </span>

      </div>


      {/* TITLE */}

      <h3 className="text-2xl font-bold text-green-900">
        {scheme.name}
      </h3>


      {/* DESCRIPTION */}

      <p className="text-gray-600 mt-4">
        {scheme.description}
      </p>


      {/* BENEFITS */}

      <ul className="mt-6 space-y-2 text-gray-700">

        {scheme.benefits.map((b: string, i: number) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-green-700">•</span>
            {b}
          </li>
        ))}

      </ul>


      {/* BUTTON */}

      <button
        className="
        mt-8
        bg-orange-500
        text-white
        py-4
        rounded-full
        font-semibold
        hover:bg-orange-600
        transition
        "
      >
        View Details
      </button>

    </div>
  )
}