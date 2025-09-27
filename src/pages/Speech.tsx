import { useState, useRef } from "react";

const Speech = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [status, setStatus] = useState("Click to start/stop recording");
  const [transcript, setTranscript] = useState("");
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const recognitionRef = useRef(null);

  const handleStartRecording = async () => {
    try {
      // 🎤 Setup audio capture
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream, { mimeType: "audio/webm" });

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(chunksRef.current, { type: "audio/webm" });
        chunksRef.current = [];

        // 👇 Hand off to Person B
        // fetch("/api/audio", { method: "POST", body: audioBlob });

        console.log("Audio Blob ready:", audioBlob);
      };

      mediaRecorder.start(1000); // chunk every 1 sec
      mediaRecorderRef.current = mediaRecorder;

      // 📝 Setup speech recognition
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        alert("Speech recognition not supported in this browser.");
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";

      recognition.onstart = () => console.log("Speech recognition started ✅");
      recognition.onend = () => console.log("Speech recognition ended ❌");

      recognition.onresult = (event) => {
        let interimTranscript = "";
        let finalTranscript = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const result = event.results[i];
          if (result.isFinal) {
            finalTranscript += result[0].transcript + " ";
          } else {
            interimTranscript += result[0][0].transcript + " ";
          }
        }

        // Always append to latest state
        setTranscript((prev) => prev + finalTranscript + interimTranscript);
      };

      recognition.onerror = (e) => {
        console.warn("Recognition error:", e.error);
        if (e.error === "network") {
          setStatus("Minor network glitch in recognition, but recording is fine.");
        }
      };

      recognition.start();
      recognitionRef.current = recognition;

      setIsRecording(true);
      setStatus("Recording... Click again to stop.");
    } catch (err) {
      console.error("Mic error:", err);
      setStatus("Microphone access denied.");
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsRecording(false);
    setStatus("Recording stopped.");
  };

  const toggleRecording = () => {
    if (isRecording) {
      handleStopRecording();
    } else {
      handleStartRecording();
    }
  };

  const handleClear = () => setTranscript("");

  const handleCopy = () => {
    navigator.clipboard.writeText(transcript);
    alert("Copied to clipboard!");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">Speech Processing</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Speech Recognition</h2>
        <p className="text-gray-600 mb-6">
          Use your microphone to record speech and convert it to text.
        </p>

        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            <div className={`w-16 h-16 ${isRecording ? "bg-green-500" : "bg-red-500"} rounded-full`}></div>
          </div>
          
          <button 
            onClick={toggleRecording} 
            className={`${
              isRecording ? "bg-gray-600 hover:bg-gray-700" : "bg-red-600 hover:bg-red-700"
            } text-white px-8 py-3 rounded-lg transition-colors mb-4`}
          >
            {isRecording ? "Stop Recording" : "Start Recording"}
          </button>
          
          <p className="text-sm text-gray-500">{status}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Transcription Results</h2>
        <div className="bg-gray-50 p-4 rounded-lg min-h-[200px] whitespace-pre-wrap">
            {transcript ? (
              <p>{transcript}</p>
            ) : (
              <p className="text-gray-500 italic">
                Your transcribed speech will appear here...
              </p>
            )}
        </div>

        
        <div className="mt-4 flex gap-2">
          <button 
            onClick={handleCopy}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Copy Text
          </button>
          <button 
            onClick={handleClear}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Speech;
