'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, Star, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-black relative overflow-hidden min-h-screen flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-16 w-16 h-16 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-purple-300 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Devenez partenaire officiel{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Velvet IA
              </span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Trouver des clients pour Velvet IA dans tout le marché francophone (France, Suisse, Québec, Belgique, Luxembourg). 
              <span className="text-white font-semibold"> Vous obtenez 10% de commissions sur les ventes + des bonus.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <a 
              href="https://tally.so/r/3x7RQo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-6 px-12 rounded-full transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 text-xl"
            >
              Candidater Maintenant
              <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#commission"
              className="text-white font-semibold py-4 px-8 rounded-full border-2 border-gray-600 hover:border-purple-400 transition-all duration-300 text-lg hover:bg-purple-500/10"
            >
              Découvrir les commissions
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center gap-12 text-gray-400"
          >
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span>13 agents</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-400" />
              <span>Revenus illimités</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-purple-400" />
              <span>Paiement 24h</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 