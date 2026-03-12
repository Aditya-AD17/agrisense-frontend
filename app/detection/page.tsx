"use client"

import { useState } from "react"
import ImageUploader from "@/components/forms/ImageUploader"
import ResultCard from "@/components/ui/ResultCard"
import Skeleton from "@/components/ui/Skeleton"
import { predictDisease } from "@/services/diseaseService"

type PredictionResult = {
  disease: string
  confidence: number
  remedy: string
}

export default function DetectionPage() {

  const [file, setFile] = useState<File | null>(null)
  const [result, setResult] = useState<PredictionResult | null>(null)
  const [loading, setLoading] = useState(false)

  const handleUpload = (file: File) => {
    setFile(file)
    setResult(null)
  }

  const analyzeImage = async () => {
    if (!file) return

    setLoading(true)

    const res = await predictDisease(file)

    setResult(res)

    setLoading(false)
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">

      <h1 className="text-3xl font-bold text-emerald-700">
        Crop Disease Detection
      </h1>

      <ImageUploader onUpload={handleUpload} />

      {file && (
        <button
  onClick={analyzeImage}
  className="
  bg-green-700
  text-white
  px-8
  py-3
  rounded-xl
  hover:bg-green-800
  hover:scale-105
  transition
  shadow-md
  "
>
  Analyze Crop
</button>
      )}

      {loading && (
  <div className="bg-white p-6 rounded-xl shadow space-y-3">

    <Skeleton className="h-6 w-40" />

    <Skeleton className="h-4 w-full" />

    <Skeleton className="h-4 w-3/4" />

    <Skeleton className="h-4 w-1/2" />

  </div>
)}

      {result && (
        <ResultCard
          disease={result.disease}
          confidence={result.confidence}
          remedy={result.remedy}
        />
      )}

    </div>
  )
}
