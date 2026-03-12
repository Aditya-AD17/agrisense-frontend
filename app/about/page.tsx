export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">

      <div className="text-center">

        <h1 className="text-4xl font-bold text-green-900">
          About AGRISENSE
        </h1>

        <p className="text-gray-600 mt-2">
          AI-Driven Crop Disease Detection & Yield Analytics
        </p>

      </div>


      <div className="bg-white shadow-lg rounded-2xl p-8 space-y-8">

        {/* Mission */}

        <section>
          <h2 className="text-xl font-semibold text-green-900 border-b pb-2 mb-3">
            Our Mission
          </h2>

          <p className="text-gray-700">
            To develop a user-friendly AI platform that helps farmers quickly
            identify crop diseases, receive treatment recommendations, and
            improve yields using image analysis and environmental data.
          </p>
        </section>


        {/* Problem */}

        <section>
          <h2 className="text-xl font-semibold text-green-900 border-b pb-2 mb-3">
            The Problem We Solve
          </h2>

          <p className="text-gray-700">
            Plant diseases cause up to 40% loss in crop yield globally.
            Farmers often rely on delayed or inaccurate diagnosis.
            AgriSense provides rapid AI-based crop health detection and
            smarter treatment suggestions.
          </p>
        </section>


        {/* Technology */}

        <section>
          <h2 className="text-xl font-semibold text-green-900 border-b pb-2 mb-3">
            Our Technology
          </h2>

          <p className="text-gray-700">
            AgriSense uses Convolutional Neural Networks (CNN) for crop disease
            classification and integrates environmental data such as humidity,
            rainfall, and temperature to provide contextual agricultural
            insights.
          </p>
        </section>


        {/* Team */}

        <section>

          <h2 className="text-xl font-semibold text-green-900 border-b pb-2 mb-5">
            Team
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <p className="font-semibold">Bhalerao Mangesh Sanjay</p>
              <p className="text-sm text-gray-600">ML Engineer</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <p className="font-semibold">Karande Aditya Mahendra</p>
              <p className="text-sm text-gray-600">Full Stack Developer</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <p className="font-semibold">Dahake Aditya Deepak</p>
              <p className="text-sm text-gray-600">AI/ML Specialist</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <p className="font-semibold">Dighe Sahil Jitendra</p>
              <p className="text-sm text-gray-600">Frontend Developer</p>
            </div>

          </div>

        </section>


        <div className="text-center text-gray-600 text-sm pt-4">

          <p>Konkan Gyanpeeth College of Engineering, Karjat</p>

          <p>Department of Artificial Intelligence & Data Science</p>

        </div>

      </div>

    </div>
  )
}