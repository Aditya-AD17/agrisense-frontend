interface Props {
  disease: string
  confidence: number
  remedy: string
}

export default function ResultCard({
  disease,
  confidence,
  remedy,
}: Props) {

  const percentage = Math.round(confidence * 100)

  const symptoms = [
    "Brown leaf spots",
    "Yellow margins",
    "Drying leaf tips"
  ]

  const treatments = [
    "Apply copper fungicide",
    "Remove infected leaves",
    "Improve air circulation",
    "Avoid overwatering"
  ]

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 mt-6 space-y-6">

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold text-green-800">
          🌱 Crop Health Report
        </h2>

        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
          {percentage}% Confidence
        </span>

      </div>


      {/* DISEASE */}

      <div className="space-y-2">

        <p className="text-lg font-semibold">
          Detected Disease
        </p>

        <p className="text-xl text-red-600 font-bold">
          {disease}
        </p>

      </div>


      {/* CONFIDENCE BAR */}

      <div>

        <p className="text-sm text-gray-600 mb-2">
          Model Confidence
        </p>

        <div className="w-full bg-gray-200 rounded-full h-3">

          <div
            className="bg-green-600 h-3 rounded-full transition-all duration-700"
            style={{ width: `${percentage}%` }}
          />

        </div>

      </div>


      {/* SYMPTOMS */}

      <div>

        <p className="font-semibold mb-2">
          Common Symptoms
        </p>

        <ul className="list-disc ml-5 text-gray-700 space-y-1">

          {symptoms.map((s, i) => (
            <li key={i}>{s}</li>
          ))}

        </ul>

      </div>


      {/* TREATMENT */}

      <div className="bg-green-50 p-4 rounded-lg">

        <p className="font-semibold text-green-800 mb-2">
          Recommended Treatment
        </p>

        <ul className="list-disc ml-5 text-gray-700 space-y-1">

          {treatments.map((t, i) => (
            <li key={i}>{t}</li>
          ))}

        </ul>

      </div>


      {/* VISUAL EXAMPLES */}

      <div>

        <p className="font-semibold mb-3">
          Similar Disease Examples
        </p>

        <div className="grid grid-cols-3 gap-3">

          <img
            src="https://images.unsplash.com/photo-1598514982871-3f7f8b4a7f3e"
            className="rounded-lg object-cover h-20 w-full"
          />

          <img
            src="https://images.unsplash.com/photo-1598515213695-bdb02c6c0e6e"
            className="rounded-lg object-cover h-20 w-full"
          />

          <img
            src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f"
            className="rounded-lg object-cover h-20 w-full"
          />

        </div>

      </div>

    </div>
  )
}