"use client"

import { useDropzone } from "react-dropzone"
import { useState } from "react"

interface Props {
  onUpload: (file: File) => void
}

export default function ImageUploader({ onUpload }: Props) {
  const [preview, setPreview] = useState<string | null>(null)

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0]

      setPreview(URL.createObjectURL(file))
      onUpload(file)
    },
  })

  return (
    <div
      {...getRootProps()}
      className="
      border-2 border-dashed border-gray-300
      rounded-2xl
      p-10
      text-center
      cursor-pointer
      hover:border-green-600
      hover:bg-green-50
      transition
      "
    >
      <input {...getInputProps()} />

      {preview ? (
        <img
          src={preview}
          className="mx-auto h-56 rounded-lg object-contain"
        />
      ) : (
        <div className="space-y-3">

          <div className="text-5xl">🌿</div>

          <p className="text-gray-600 font-medium">
            Drag & Drop Crop Leaf Image
          </p>

          <p className="text-sm text-gray-400">
            or click to upload
          </p>

        </div>
      )}
    </div>
  )
}