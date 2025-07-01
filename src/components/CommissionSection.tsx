'use client'

import { motion } from 'framer-motion'
import { Calculator, Target, Phone, Users, Star, ArrowRight } from 'lucide-react'

export default function CommissionSection() {
  const earnings = [
    { ventes: '5', gain: '1 000€ - 2 500€', bonus: 'Bonus 200€', color: 'from-blue-500 to-cyan-500' },
    { ventes: '10', gain: '2 000€ - 5 000€', bonus: 'Bonus 500€', color: 'from-purple-500 to-pink-500' },
    { ventes: '15', gain: '3 000€ - 7 500€', bonus: 'Bonus 1 000€', color: 'from-green-500 to-emerald-500' }
  ]

  const processSteps = [
    { icon: Target, title: 'Prospectez', desc: 'Ciblez les entreprises et démarchez selon vos préférences (mail, appels, linkedIn, etc)' },
    { icon: Phone, title: 'Contactez', desc: 'Présentez les outils Velvet IA aux prospects, qualifiez, et faites essayer notre agent demo' },
    { icon: Users, title: 'Planifiez', desc: 'Planifiez un rendez-vous dans notre calendrier avec notre équipe de closing' },
    { icon: Star, title: 'Encaissez', desc: 'Obtenez votre commission dans les 24h après vente conclue' }
  ]

  return (
    <section id="commission" className="py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header avec style différent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full px-6 py-2 mb-6 border border-purple-500/30">
            <span className="text-purple-300 font-semibold">💰 COMMISSIONS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Revenus <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Transparents</span>
          </h2>
        </motion.div>

        {/* Grille des gains avec design hexagonal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {earnings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:border-gray-500 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">{item.ventes}</div>
                <div className="text-sm text-gray-400 mb-4">ventes</div>
                <div className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                  {item.gain}
                </div>
                <div className="text-sm text-gray-300">+ {item.bonus}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline horizontale du processus */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-white">Le processus simplifié</h3>
          
          {/* Ligne de connexion */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA final épuré */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
            <Calculator className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <p className="text-xl text-white mb-6">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                3500€ HT
              </span>
              {' '}prix moyen par vente
            </p>
            <a 
              href="https://tally.so/r/3x7RQo" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-purple-500/25"
            >
              Commencer maintenant
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 