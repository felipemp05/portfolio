import { Github, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

/**
 * Sección Hero
 * Contiene la foto de perfil, descripción personal y enlaces a redes sociales
 */
export function HeroSection() {
  return (
    <section id="inicio" className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Foto de perfil */}
        <div className="mb-8">
          <div className="relative w-48 h-48 mx-auto mb-6">
            <Image
              src="../fotoperfil.png"
              alt="Foto de perfil"
              fill
              className="rounded-full object-cover border-4 border-portfolio-purple shadow-lg"
              priority
            />
          </div>
        </div>

        {/* Descripción personal */}
        <div className="mb-8 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-portfolio-darkBlue dark:text-portfolio-cream mb-4">
            ¡Hola! Soy <span className="text-portfolio-purple">Desarrollador</span>
          </h1>

          <p className="text-lg md:text-xl text-portfolio-darkBlue/80 dark:text-portfolio-cream/80 max-w-2xl mx-auto leading-relaxed">
            Soy un desarrollador full-stack apasionado por crear experiencias web excepcionales. Me especializo en
            tecnologías modernas como React, Laravel y CakePHP, siempre buscando soluciones innovadoras y eficientes
            para cada proyecto.
          </p>

          <p className="text-base md:text-lg text-portfolio-darkBlue/70 dark:text-portfolio-cream/70 max-w-xl mx-auto">
            Con experiencia en desarrollo frontend y backend, me enfoco en crear aplicaciones escalables, mantenibles y
            con excelente experiencia de usuario.
          </p>
        </div>

        {/* Botones de redes sociales */}
        <div className="flex justify-center space-x-4">
          <Button asChild className="bg-portfolio-purple hover:bg-portfolio-purple/90 text-white">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white"
          >
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
