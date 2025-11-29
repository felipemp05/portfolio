"use client"

import { StarRating } from "@/components/ui/star-rating"

/**
 * Componente Footer
 * Contiene los derechos de autor y sistema de calificación
 */
export function Footer() {
  /**
   * Maneja el cambio de calificación
   */
  const handleRatingChange = (rating: number) => {
    console.log(`Usuario calificó con ${rating} estrellas`)
    // Aquí podrías enviar la calificación a tu backend
  }

  return (
    <footer className="bg-portfolio-darkBlue dark:bg-portfolio-purple text-portfolio-cream py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Derechos de autor */}
          <div className="text-center md:text-left">
            <p className="text-sm">© {new Date().getFullYear()} Mi Portfolio. Todos los derechos reservados.</p>
            <p className="text-xs text-portfolio-cream/70 mt-1">Desarrollado con ❤️ usando Next.js y Tailwind CSS</p>
          </div>

          {/* Sistema de calificación */}
          <div className="text-center">
            <p className="text-sm mb-2">¿Te gusta mi portfolio?</p>
            <StarRating onRatingChange={handleRatingChange} />
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-portfolio-cream/20 mt-6 pt-4 text-center">
          <p className="text-xs text-portfolio-cream/60">Hecho con pasión por el desarrollo web</p>
        </div>
      </div>
    </footer>
  )
}
