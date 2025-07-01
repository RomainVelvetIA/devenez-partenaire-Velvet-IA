'use client'

import { motion } from 'framer-motion'
import { User, Phone, Calendar, ArrowRight, Check, FileText, Star, Clock, Euro } from 'lucide-react'

export default function CTASection() {
  const requirements = [
    'Accès à un réseau d\'entreprise étendu',
    'Compréhension des enjeux de l\'IA en 2025',
    'Profil autonome et confiant',
    'Capacité à identifier les prospects qualifiés'
  ]

  const processSteps = [
    { step: '1', title: 'Formulaire', icon: FileText, desc: '5 minutes' },
    { step: '2', title: 'Contact', icon: Phone, desc: 'Appel équipe' },
    { step: '3', title: 'Rencontre', icon: Calendar, desc: 'Visioconférence' },
    { step: '4', title: 'Signature', icon: User, desc: 'Partenariat' }
  ]

  const highlights = [
    { icon: Euro, label: '10%', desc: 'Commission + Bonus' },
    { icon: Clock, label: '24h', desc: 'Paiement après closing' },
    { icon: Star, label: '∞', desc: 'Potentiel illimité' }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-pink-400 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header épuré */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Une opportunité pour les
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Apporteurs d'affaires
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cette opportunité s'adresse aux professionnels capables de créer des ponts entre Velvet IA et des entreprises cibles. Vous devez maîtriser les enjeux de l'IA vocale en 2025, avoir une vision stratégique de partenariat à long terme, et être totalement autonome dans votre démarche d'acquisition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          
          {/* Colonne gauche - Profil */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <User className="h-7 w-7 text-purple-400" />
              Profil recherché
            </h3>
            <div className="space-y-4">
              {requirements.map((requirement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <Check className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{requirement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Colonne droite - Processus */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <ArrowRight className="h-7 w-7 text-purple-400" />
              Processus simple
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 text-center hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlights en ligne */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center hover:border-purple-500/30 transition-all duration-300"
            >
              <item.icon className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{item.label}</div>
              <div className="text-gray-400 text-sm">{item.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-700">
            <h3 className="text-3xl font-bold text-white mb-6">
              Prêt à commencer ?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Candidatez maintenant avec honnêteté pour maximiser vos chances
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="https://tally.so/r/3x7RQo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-purple-500/25 transform hover:scale-105"
              >
                <FileText className="inline h-5 w-5 mr-2" />
                Candidater maintenant
                <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="mailto:contact@velvet-ia.fr"
                className="text-white font-semibold py-4 px-8 rounded-full border-2 border-gray-600 hover:border-purple-400 transition-all duration-300 hover:bg-purple-500/10"
              >
                <Phone className="inline h-5 w-5 mr-2" />
                Nous contacter
              </a>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
                <Check className="h-4 w-4 text-green-400" />
                <span>Contrat de partenariat • Protection juridique • Transparence totale</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 