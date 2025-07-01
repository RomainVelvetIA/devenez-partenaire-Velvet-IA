'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Shield, FileText, Eye, Lock } from 'lucide-react'
import Link from 'next/link'

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header avec navigation retour */}
      <section className="pt-24 pb-8 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-200 mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Mentions Légales & 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {' '}Confidentialité
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Informations légales et politique de confidentialité de Velvet IA
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            {/* Mentions Légales */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Mentions Légales</h2>
              </div>

              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Éditeur du site</h3>
                  <p>
                    <strong>Velvet IA</strong><br />
                    Bordeaux, France<br />
                    Email : romain@velvet-ia.com<br />
                    Téléphone : +33 640083249
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Hébergement</h3>
                  <p>
                    Ce site est hébergé par Vercel Inc.<br />
                    340 S Lemon Ave #4133<br />
                    Walnut, CA 91789, États-Unis
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Propriété intellectuelle</h3>
                  <p>
                    L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par le droit d'auteur. 
                    Toute reproduction, même partielle, est interdite sans autorisation préalable écrite de Velvet IA.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Responsabilité</h3>
                  <p>
                    Velvet IA s'efforce de fournir des informations exactes et à jour. Cependant, nous ne pouvons 
                    garantir l'exactitude, la complétude ou l'actualité des informations diffusées sur ce site.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Politique de Confidentialité */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Politique de Confidentialité</h2>
              </div>

              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Collecte des données</h3>
                  <p>
                    Nous collectons uniquement les informations nécessaires au traitement de votre candidature 
                    de partenariat : nom, prénom, email, téléphone, et informations professionnelles.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Utilisation des données</h3>
                  <p>
                    Vos données personnelles sont utilisées exclusivement pour :
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Traiter votre candidature de partenariat</li>
                    <li>Vous contacter dans le cadre du processus de sélection</li>
                    <li>Gérer la relation contractuelle en cas d'acceptation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Conservation des données</h3>
                  <p>
                    Vos données sont conservées pendant une durée maximale de 3 ans à compter de votre 
                    dernière interaction avec nos services, ou selon les obligations légales en vigueur.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Vos droits</h3>
                  <p>
                    Conformément au RGPD, vous disposez des droits suivants :
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Droit d'accès à vos données personnelles</li>
                    <li>Droit de rectification de vos données</li>
                    <li>Droit à l'effacement de vos données</li>
                    <li>Droit à la portabilité de vos données</li>
                    <li>Droit d'opposition au traitement</li>
                  </ul>
                  <p className="mt-3">
                    Pour exercer ces droits, contactez-nous à : <strong>romain@velvet-ia.com</strong>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Sécurité</h3>
                  <p>
                    Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées 
                    pour protéger vos données personnelles contre tout accès, modification, divulgation ou 
                    destruction non autorisés.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Cookies</h3>
                  <p>
                    Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. 
                    Aucun cookie de tracking ou publicitaire n'est utilisé sans votre consentement explicite.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30 text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Questions ?</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Pour toute question concernant ces mentions légales ou notre politique de confidentialité
              </p>
              <a 
                href="mailto:romain@velvet-ia.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
              >
                <Lock className="h-4 w-4" />
                Nous contacter
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 