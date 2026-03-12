import Counter from "@/components/ui/Counter"
import FeatureCard from "@/components/ui/FeatureCard"
import Link from "next/link"

export default function Home() {
  return (
    <div>

      {/* HERO SECTION */}

      {/* HERO SECTION */}

<section
  className="
  relative
  bg-[url('https://images.unsplash.com/photo-1464226184884-fa280b87c399')]
  bg-cover
  bg-center
  text-white
  py-32
  text-center
  "
>

  {/* Dark overlay */}

  <div className="absolute inset-0 bg-green-900/70"></div>

  <div className="relative z-10 px-6">

    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
      AI Powered Crop Disease Detection
    </h1>

    <p className="mt-6 text-lg text-green-200 max-w-xl mx-auto">
      Helping farmers detect plant diseases early and improve crop yield
      using artificial intelligence.
    </p>

    <Link href="/detection">
      <button className="mt-8 bg-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:scale-105 transition">
        Detect Disease
      </button>
    </Link>

    {/* COUNTERS */}

    <div className="flex justify-center flex-wrap gap-16 mt-20 hover:scale-[1.02] transition">

      <Counter value={69} label="Farmers Trust Us" />

      <Counter value={70} label="% Accuracy Rate" />

      <Counter value={169} label="Diseases Detected" />

    </div>

  </div>

</section>


      {/* FEATURES */}

      <section className="py-20 bg-gray-100">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-green-900">
            Our Features
          </h2>

          <p className="text-gray-600 mt-4">
            Empowering farmers with cutting-edge AI technology
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">

          <FeatureCard
            icon="🔍"
            title="Disease Detection"
            description="Upload crop images and get instant AI-powered disease diagnosis."
            action="Try Now →"
            href="/detection"
          />

          <FeatureCard
            icon="💊"
            title="Treatment Recommendations"
            description="Receive personalized remedies and treatment suggestions."
            action="Learn More →"
          />

          <FeatureCard
            icon="🏛️"
            title="Government Schemes"
            description="Discover Indian agricultural subsidies and farmer schemes."
            action="Explore Schemes →"
            href="/schemes"
          />

        </div>

      </section>

    </div>
  )
}