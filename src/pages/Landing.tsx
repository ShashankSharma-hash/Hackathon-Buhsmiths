const Landing = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Brainlytic
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Welcome to Brainlytic,our goal is to detect early Dementia 
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/consent"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
          <a
            href="/dashboard"
            className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            View Dashboard
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3">Consent</h3>
          <p className="text-gray-600 mb-4">
            Manage user consent and privacy settings for data collection.
          </p>
          <a href="/consent" className="text-blue-600 hover:text-blue-800">
            Learn more →
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3">Speech</h3>
          <p className="text-gray-600 mb-4">
            Speech recognition and processing capabilities.
          </p>
          <a href="/speech" className="text-blue-600 hover:text-blue-800">
            Learn more →
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3">Memory</h3>
          <p className="text-gray-600 mb-4">
            Memory management and data persistence features.
          </p>
          <a href="/memory" className="text-blue-600 hover:text-blue-800">
            Learn more →
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3">Dashboard</h3>
          <p className="text-gray-600 mb-4">
            Analytics and insights dashboard for monitoring.
          </p>
          <a href="/dashboard" className="text-blue-600 hover:text-blue-800">
            Learn more →
          </a>
        </div>
      </div>
    </div>
  )
}

export default Landing
