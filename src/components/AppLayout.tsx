import { ReactNode } from 'react'

interface AppLayoutProps {
  children: ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="backdrop-blur-md bg-white/80 text-black shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img 
              src="/images/logo.png" 
              alt="Brainlytic Logo" 
              className="h-12 w-auto"
            />
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="/consent" className="hover:text-blue-600 transition-colors">
                Consent
              </a>
              <a href="/speech" className="hover:text-blue-600 transition-colors">
                Speech
              </a>
              <a href="/memory" className="hover:text-blue-600 transition-colors">
                Memory
              </a>
              <a href="/dashboard" className="hover:text-blue-600 transition-colors">
                Dashboard
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 SIH Hackathon Bugsmiths..</p>
        </div>
      </footer>
    </div>
  )
}

export default AppLayout
