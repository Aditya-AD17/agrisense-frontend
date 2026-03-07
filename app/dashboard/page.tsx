export default function DashboardPage() {
  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold text-gray-800">
        Farmer Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="font-semibold text-lg">
            Recent Disease Predictions
          </h2>
          <p className="text-gray-500 mt-2">
            Your previous crop disease analyses will appear here.
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="font-semibold text-lg">
            Recommended Schemes
          </h2>
          <p className="text-gray-500 mt-2">
            Government schemes suited for your crops.
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="font-semibold text-lg">
            Crop Health Insights
          </h2>
          <p className="text-gray-500 mt-2">
            AI generated crop insights.
          </p>
        </div>

      </div>

    </div>
  )
}