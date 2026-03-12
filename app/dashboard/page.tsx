import ConfidenceGauge from "@/components/charts/ConfidenceGauge"
import DiseaseChart from "@/components/charts/DiseaseChart"
import DashboardWidget from "@/components/ui/DashboardWidget"

export default function DashboardPage() {
  const loading = false

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-emerald-700">
        Farmer Dashboard
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <DashboardWidget
          title="Diseases Detected"
          value="120"
          icon="🌿"
          loading={loading}
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

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <DiseaseChart />
        <ConfidenceGauge />

        <div
          className="
            rounded-xl
            bg-white
            p-6
            shadow-md
            transition
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
          "
        >
          <h3 className="mb-4 text-lg font-semibold text-green-900">
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
