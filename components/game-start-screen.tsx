"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface GameStartScreenProps {
  onStart: () => void
}

/**
 * Pantalla de inicio estilo videojuego
 * Muestra un botón "START" con efectos visuales y animaciones
 */
export function GameStartScreen({ onStart }: GameStartScreenProps) {
  const [showButton, setShowButton] = useState(false)
  const [matrixChars, setMatrixChars] = useState<Array<{ id: number; char: string; left: number; delay: number }>>([])

  // Caracteres para el efecto Matrix
  const matrixCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?"

  /**
   * Genera caracteres aleatorios para el efecto Matrix
   */
  useEffect(() => {
    const chars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      char: matrixCharacters[Math.floor(Math.random() * matrixCharacters.length)],
      left: Math.random() * 100,
      delay: Math.random() * 3,
    }))
    setMatrixChars(chars)

    // Mostrar el botón después de 1 segundo
    const timer = setTimeout(() => setShowButton(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  /**
   * Maneja el clic del botón START
   */
  const handleStart = () => {
    // Efecto de sonido (opcional)
    // new Audio('/sounds/start-game.mp3').play().catch(() => {})

    onStart()
  }

  return (
    <div className="fixed inset-0 bg-black overflow-hidden flex items-center justify-center">
      {/* Efecto Matrix de fondo */}
      <div className="absolute inset-0">
        {matrixChars.map((char) => (
          <motion.div
            key={char.id}
            className="absolute text-game-neon font-mono text-sm opacity-30"
            style={{ left: `${char.left}%` }}
            initial={{ y: -100, opacity: 0 }}
            animate={{
              y: window.innerHeight + 100,
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 3,
              delay: char.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {char.char}
          </motion.div>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center">
        {/* Título del juego/portfolio */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-6xl md:text-8xl font-bold game-text neon-text mb-4">PORTFOLIO</h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 1.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-game-neon to-transparent mx-auto"
          />
        </motion.div>

        {/* Subtítulo con efecto de escritura */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mb-16"
        >
          <p className="text-xl md:text-2xl game-text text-game-electric">{"> DEVELOPER_EXPERIENCE.EXE"}</p>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            className="text-game-neon text-2xl"
          >
            _
          </motion.span>
        </motion.div>

        {/* Botón START */}
        {showButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
          >
            <motion.button
              onClick={handleStart}
              className="game-button relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Efecto de resplandor */}
              <motion.div
                className="absolute inset-0 bg-game-neon opacity-20 blur-xl rounded"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Texto del botón */}
              <span className="relative z-10 flex items-center justify-center">
                <motion.span
                  animate={{
                    textShadow: ["0 0 5px #00ff41", "0 0 20px #00ff41, 0 0 30px #00ff41", "0 0 5px #00ff41"],
                  }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  ▶ START
                </motion.span>
              </span>

              {/* Partículas decorativas */}
              <div className="absolute inset-0 overflow-hidden rounded">
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-game-neon rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${20 + (i % 2) * 60}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                ))}
              </div>
            </motion.button>
          </motion.div>
        )}

        {/* Instrucciones */}
        {showButton && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            className="mt-8"
          >
            <p className="text-sm game-text text-game-electric/60">PRESS START TO CONTINUE</p>
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="mt-2"
            >
              <span className="text-xs game-text text-game-neon">● READY ●</span>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Líneas de escaneo */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 65, 0.03) 2px,
            rgba(0, 255, 65, 0.03) 4px
          )`,
        }}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      />
    </div>
  )
}
