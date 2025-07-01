'use client'

import { motion } from 'framer-motion'
import { Users, Globe, Shield, Zap, Award, TrendingUp } from 'lucide-react'

export default function StatsSection() {
  const stats = [
    { icon: Users, value: '13', label: 'Agents', color: 'text-purple-400' },
    { icon: Globe, value: '5', label: 'Pays', color: 'text-blue-400' },
    { icon: Award, value: '100%', label: 'Satisfaction', color: 'text-green-400' }
  ]

  const features = [
    { icon: Zap, title: 'IA Française', desc: 'Technologie #1 en France' },
    { icon: Shield, title: 'Données Sécurisées', desc: 'Serveurs français RGPD' },
    { icon: TrendingUp, title: 'Déploiement 72h', desc: 'Mise en place ultra-rapide' }
  ]

  const sectors = [
    { name: 'Assurance', icon: '🛡️' },
    { name: 'Immobilier', icon: '🏠' },
    { name: 'E-commerce', icon: '🛒' },
    { name: 'Santé', icon: '⚕️' },
    { name: 'Finance', icon: '💰' },
    { name: 'Publicité', icon: '📢' }
  ]

  return (
    <section id="statistiques" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats principales en mode minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="mb-4">
                <stat.icon className={`h-12 w-12 ${stat.color} mx-auto group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Avantages en grid compact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300 group"
            >
              <feature.icon className="h-8 w-8 text-purple-400 mb-3 group-hover:text-purple-300 transition-colors" />
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Secteurs en mode compact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-bold text-white mb-8">Secteurs couverts</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm px-4 py-3 rounded-full border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">{sector.icon}</span>
                  <span className="text-white text-sm font-medium">{sector.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Garantie simplifiée */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-green-900/20 border border-green-500/30 rounded-full px-6 py-3">
            <Award className="h-5 w-5 text-green-400" />
            <span className="text-white font-medium">Garantie satisfait ou remboursé 60 jours</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 