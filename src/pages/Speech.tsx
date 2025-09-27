const Speech = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Speech Processing</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Speech Recognition</h2>
        <p className="text-gray-600 mb-6">
          Use your microphone to record speech and convert it to text.
        </p>

        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-red-500 rounded-full"></div>
          </div>
          
          <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors mb-4">
            Start Recording
          </button>
          
          <p className="text-sm text-gray-500">
            Click to start/stop recording
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Transcription Results</h2>
        <div className="bg-gray-50 p-4 rounded-lg min-h-[200px]">
          <p className="text-gray-500 italic">
            Your transcribed speech will appear here...
          </p>
        </div>
        
        <div className="mt-4 flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Copy Text
          </button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors">
            Clear
          </button>
        </div>
      </div>
    </div>
  )
}

export default Speech
