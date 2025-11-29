"use client"

import { useState } from "react"
import { Star } from "lucide-react"

interface StarRatingProps {
  maxStars?: number
  onRatingChange?: (rating: number) => void
}

/**
 * Componente de Calificación con Estrellas
 * Permite a los usuarios calificar el sitio web
 */
export function StarRating({ maxStars = 5, onRatingChange }: StarRatingProps) {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  /**
   * Maneja el clic en una estrella
   */
  const handleStarClick = (starIndex: number) => {
    const newRating = starIndex + 1
    setRating(newRating)
    onRatingChange?.(newRating)
  }

  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: maxStars }, (_, index) => (
        <button
          key={index}
          onClick={() => handleStarClick(index)}
          onMouseEnter={() => setHoverRating(index + 1)}
          onMouseLeave={() => setHoverRating(0)}
          className="transition-colors duration-200 hover:scale-110 transform"
        >
          <Star
            className={`w-6 h-6 ${
              index < (hoverRating || rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300 dark:text-gray-600"
            }`}
          />
        </button>
      ))}
      {rating > 0 && (
        <span className="ml-2 text-sm text-portfolio-darkBlue dark:text-portfolio-cream">
          {rating} de {maxStars} estrellas
        </span>
      )}
    </div>
  )
}
