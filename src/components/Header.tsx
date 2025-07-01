'use client'

import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Velvet IA</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#commission" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
              Commissions
            </a>
            <a href="#statistiques" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
              À propos
            </a>
            <a 
              href="https://tally.so/r/3x7RQo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              Candidater
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2 border border-gray-800">
              <a
                href="#commission"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                onClick={toggleMenu}
              >
                Commissions
              </a>
              <a
                href="#statistiques"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                onClick={toggleMenu}
              >
                À propos
              </a>
              <div className="px-3 py-2">
                <a 
                  href="https://tally.so/r/3x7RQo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 text-center"
                  onClick={toggleMenu}
                >
                  Candidater
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 