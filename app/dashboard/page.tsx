import DashboardWidget from "@/components/ui/DashboardWidget"
import DiseaseChart from "@/components/charts/DiseaseChart"

export default function DashboardPage() {
  return (
    <div className="space-y-10">

      <h1 className="text-3xl font-bold text-green-900">
        Farmer Dashboard
      </h1>

      {/* SUMMARY WIDGETS */}

      <div className="grid md:grid-cols-3 gap-6">

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

      <div className="grid lg:grid-cols-2 gap-8">

        <DiseaseChart />

        <div className="bg-white p-6 rounded-2xl shadow">

          <h3 className="font-semibold mb-4">
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