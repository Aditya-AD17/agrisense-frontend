import DashboardWidget from "@/components/ui/DashboardWidget"
import DiseaseChart from "@/components/charts/DiseaseChart"
import ConfidenceGauge from "@/components/charts/ConfidenceGauge"

export default function DashboardPage() {
  return (
    <div className="space-y-10">

      <h1 className="text-3xl font-bold text-emerald-700">
        Farmer Dashboard
      </h1>

      {/* SUMMARY WIDGETS */}

       <div className="grid md:grid-cols-3 gap-6 group">
        <DashboardWidget
          title="Diseases Detected"
          value="120"
          icon="🌿"
        />

        <DashboardWidget
          title="Healthy Crops"
          value="86%"
          icon="✅"
        />

        <DashboardWidget
          title="Recommended Schemes"
          value="4"
          icon="🏛"
        />

      </div>

      {/* ANALYTICS */}

      <div className="grid lg:grid-cols-3 gap-8">

        <DiseaseChart />

        <ConfidenceGauge />

        <div className="className=
bg-white
p-6
rounded-xl
shadow-md
hover:shadow-xl
hover:-translate-y-1
transition
duration-300
">

          <h3 className="font-semibold text-green-900 text-lg mb-4">
  Recent AI Predictions
</h3>

          <ul className="space-y-3 text-gray-600">

            <li>🌾 Wheat Leaf Blight detected</li>
            <li>🌾 Tomato Rust detected</li>
            <li>🌾 Rice Bacterial Spot detected</li>

          </ul>

        </div>

      </div>

    </div>
  )
}