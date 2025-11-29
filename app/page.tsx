"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GameStartScreen } from "@/components/game-start-screen"
import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/sections/hero-section"
import { TechCarousel } from "@/components/sections/tech-carousel"
import { ContactForm } from "@/components/sections/contact-form"
import { Footer } from "@/components/layout/footer"

/**
 * Página principal del portfolio
 * Controla la transición entre la pantalla de inicio y el portfolio completo
 */
export default function Portfolio() {
  const [gameStarted, setGameStarted] = useState(false)

  /**
   * Maneja el inicio del "juego" (mostrar el portfolio)
   */
  const handleGameStart = () => {
    setGameStarted(true)
  }

  return (
    <AnimatePresence mode="wait">
      {!gameStarted ? (
        // Pantalla de inicio estilo videojuego
        <motion.div
          key="start-screen"
          exit={{
            opacity: 0,
            scale: 0.8,
            filter: "blur(10px)",
          }}
          transition={{ duration: 1 }}
        >
          <GameStartScreen onStart={handleGameStart} />
        </motion.div>
      ) : (
        // Portfolio completo
        <motion.div
          key="portfolio"
          initial={{
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{ duration: 1 }}
          className="min-h-screen bg-portfolio-cream dark:bg-portfolio-darkBlue transition-colors duration-300"
        >
          {/* Header con navegación responsive */}
          <Header />

          {/* Contenido principal */}
          <main className="relative">
            {/* Sección hero con foto y descripción */}
            <HeroSection />

            {/* Carrusel de tecnologías */}
            <TechCarousel />

            {/* Formulario de contacto */}
            <ContactForm />
          </main>

          {/* Footer con derechos y calificación */}
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
