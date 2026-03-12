import Link from "next/link"
import Counter from "@/components/ui/Counter"
import FeatureCard from "@/components/ui/FeatureCard"

export default function Home() {
  return (
    <div>
      <section
        className="
          relative
          bg-[url('https://images.unsplash.com/photo-1464226184884-fa280b87c399')]
          bg-cover
          bg-center
          py-20 text-center text-white sm:py-24 md:py-32
        "
      >
        <div className="absolute inset-0 bg-green-900/70"></div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            AI Powered Crop Disease Detection
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-green-100 sm:text-lg">
            Helping farmers detect plant diseases early and improve crop yield
            using artificial intelligence.
          </p>

          <Link
            href="/detection"
            className="mt-8 inline-flex rounded-lg bg-orange-500 px-6 py-3 font-semibold transition hover:scale-105 hover:bg-orange-600 sm:px-8"
          >
            Detect Disease
          </Link>

          <div className="mt-14 grid gap-8 sm:grid-cols-3 sm:gap-6 md:mt-20">
            <Counter value={69} label="Farmers Trust Us" />
            <Counter value={70} label="% Accuracy Rate" />
            <Counter value={169} label="Diseases Detected" />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 sm:py-20">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="text-3xl font-bold text-green-900 sm:text-4xl">
            Our Features
          </h2>

          <p className="mt-4 px-4 text-gray-600">
            Empowering farmers with cutting-edge AI technology
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-3 md:gap-10">
          <FeatureCard
            icon="🔍"
            title="Disease Detection"
            description="Upload crop images and get instant AI-powered disease diagnosis."
            action="Try Now ->"
            href="/detection"
          />

          <FeatureCard
            icon="💊"
            title="Treatment Recommendations"
            description="Receive personalized remedies and treatment suggestions."
            action="Learn More ->"
          />

          <FeatureCard
            icon="🏛️"
            title="Government Schemes"
            description="Discover Indian agricultural subsidies and farmer schemes."
            action="Explore Schemes ->"
            href="/schemes"
          />
        </div>
      </section>
    </div>
  )
}
