import { ReactNode } from 'react'

interface AppLayoutProps {
  children: ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-red-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Hackathon Buhsmiths</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="hover:text-red-200 transition-colors">
                Home
              </a>
              <a href="/consent" className="hover:text-red-200 transition-colors">
                Consent
              </a>
              <a href="/speech" className="hover:text-red-200 transition-colors">
                Speech
              </a>
              <a href="/memory" className="hover:text-red-200 transition-colors">
                Memory
              </a>
              <a href="/dashboard" className="hover:text-red-200 transition-colors">
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
