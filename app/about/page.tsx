export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 sm:space-y-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-900 sm:text-4xl">
          About AGRISENSE
        </h1>

        <p className="mt-2 text-gray-600">
          AI-Driven Crop Disease Detection & Yield Analytics
        </p>
      </div>

      <div className="space-y-8 rounded-2xl bg-white p-5 shadow-lg sm:p-8">
        <section>
          <h2 className="mb-3 border-b pb-2 text-xl font-semibold text-green-900">
            Our Mission
          </h2>

          <p className="text-gray-700">
            To develop a user-friendly AI platform that helps farmers quickly
            identify crop diseases, receive treatment recommendations, and
            improve yields using image analysis and environmental data.
          </p>
        </section>

        <section>
          <h2 className="mb-3 border-b pb-2 text-xl font-semibold text-green-900">
            The Problem We Solve
          </h2>

          <p className="text-gray-700">
            Plant diseases cause up to 40% loss in crop yield globally. Farmers
            often rely on delayed or inaccurate diagnosis. AgriSense provides
            rapid AI-based crop health detection and smarter treatment
            suggestions.
          </p>
        </section>

        <section>
          <h2 className="mb-3 border-b pb-2 text-xl font-semibold text-green-900">
            Our Technology
          </h2>

          <p className="text-gray-700">
            AgriSense uses Convolutional Neural Networks (CNN) for crop disease
            classification and integrates environmental data such as humidity,
            rainfall, and temperature to provide contextual agricultural
            insights.
          </p>
        </section>

        <section>
          <h2 className="mb-5 border-b pb-2 text-xl font-semibold text-green-900">
            Team
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-lg bg-gray-100 p-4 text-center">
              <p className="font-semibold">Bhalerao Mangesh Sanjay</p>
              <p className="text-sm text-gray-600">ML Engineer</p>
            </div>

            <div className="rounded-lg bg-gray-100 p-4 text-center">
              <p className="font-semibold">Karande Aditya Mahendra</p>
              <p className="text-sm text-gray-600">Full Stack Developer</p>
            </div>

            <div className="rounded-lg bg-gray-100 p-4 text-center">
              <p className="font-semibold">Dahake Aditya Deepak</p>
              <p className="text-sm text-gray-600">AI/ML Specialist</p>
            </div>

            <div className="rounded-lg bg-gray-100 p-4 text-center">
              <p className="font-semibold">Dighe Sahil Jitendra</p>
              <p className="text-sm text-gray-600">Frontend Developer</p>
            </div>
          </div>
        </section>

        <div className="pt-4 text-center text-sm text-gray-600">
          <p>Konkan Gyanpeeth College of Engineering, Karjat</p>
          <p>Department of Artificial Intelligence & Data Science</p>
        </div>
      </div>
    </div>
  )
}
