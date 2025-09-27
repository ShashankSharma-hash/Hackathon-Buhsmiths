const Consent = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold white mb-8">Consent Management</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Data Collection Consent</h2>
        <p className="text-gray-600 mb-6">
          Please review and provide your consent for data collection and processing.
        </p>

        <div className="space-y-4">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="data-collection"
              className="mt-1 mr-3"
            />
            <label htmlFor="data-collection" className="text-gray-700">
              I consent to the collection of my personal data for the purpose of improving the application.
            </label>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="analytics"
              className="mt-1 mr-3"
            />
            <label htmlFor="analytics" className="text-gray-700">
              I consent to the use of analytics and performance monitoring.
            </label>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="cookies"
              className="mt-1 mr-3"
            />
            <label htmlFor="cookies" className="text-gray-700">
              I consent to the use of cookies for session management.
            </label>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Save Consent
          </button>
          <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default Consent
