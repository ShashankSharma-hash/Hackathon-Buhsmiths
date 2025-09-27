import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import Landing from './pages/Landing'
import Consent from './pages/Consent'
import Speech from './pages/Speech'
import Memory from './pages/Memory'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/consent" element={<Consent />} />
          <Route path="/speech" element={<Speech />} />
          <Route path="/memory" element={<Memory />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AppLayout>
    </Router>
  )
}

export default App
