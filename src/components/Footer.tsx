'use client'

import { Zap, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Velvet IA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Assistants vocaux IA nouvelle génération.
              Programme de partenariat commercial.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#commission" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Commissions
                </a>
              </li>
              <li>
                <a href="#statistiques" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  À propos
                </a>
              </li>
              <li>
                <a href="https://tally.so/r/3x7RQo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Candidater
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white uppercase tracking-wider">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2 text-purple-400" />
                <span className="text-sm">romain@velvet-ia.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2 text-purple-400" />
                <span className="text-sm">+33 640083249</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-2 text-purple-400" />
                <span className="text-sm">Bordeaux, France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 Velvet IA. Tous droits réservés.
            </p>
            <div className="flex space-x-4 mt-3 md:mt-0">
              <a href="/mentions-legales" className="text-gray-500 hover:text-gray-400 text-xs transition-colors duration-200">
                Mentions Légales
              </a>
              <a href="/mentions-legales" className="text-gray-500 hover:text-gray-400 text-xs transition-colors duration-200">
                Confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 