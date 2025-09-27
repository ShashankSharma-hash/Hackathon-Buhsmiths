const Memory = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">Memory Management</h1>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Memory Storage</h2>
          <p className="text-gray-600 mb-4">
            Manage your stored memories and data.
          </p>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="text-sm">Session Data</span>
              <span className="text-xs text-gray-500">2.3 MB</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="text-sm">User Preferences</span>
              <span className="text-xs text-gray-500">156 KB</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="text-sm">Cache Files</span>
              <span className="text-xs text-gray-500">8.7 MB</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Memory Actions</h2>
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
              Clear Cache
            </button>
            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors">
              Export Data
            </button>
            <button className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 transition-colors">
              Backup Memory
            </button>
            <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition-colors">
              Reset All Data
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Memory Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">1,234</div>
            <div className="text-sm text-gray-500">Total Memories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">11.2 MB</div>
            <div className="text-sm text-gray-500">Storage Used</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">89%</div>
            <div className="text-sm text-gray-500">Cache Hit Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">45</div>
            <div className="text-sm text-gray-500">Active Sessions</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Memory
