"use client"

import { useState } from "react"
import { Menu, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"

/**
 * Componente Header
 * Navegación principal responsive con menú hamburguesa para móviles
 * Incluye toggle para modo oscuro/claro
 */
export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  // Enlaces de navegación
  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#tecnologias", label: "Tecnologías" },
    { href: "#contacto", label: "Contacto" },
  ]

  /**
   * Maneja el scroll suave hacia las secciones
   */
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-portfolio-cream/90 dark:bg-portfolio-darkBlue/90 backdrop-blur-md border-b border-portfolio-purple/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Nombre */}
          <div className="text-2xl font-bold text-portfolio-purple dark:text-portfolio-cream">Mi Portfolio</div>

          {/* Navegación desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-portfolio-darkBlue dark:text-portfolio-cream hover:text-portfolio-purple dark:hover:text-portfolio-purple transition-colors duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Controles de la derecha */}
          <div className="flex items-center space-x-4">
            {/* Toggle tema */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-portfolio-darkBlue dark:text-portfolio-cream hover:text-portfolio-purple"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Cambiar tema</span>
            </Button>

            {/* Menú hamburguesa para móviles */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-portfolio-darkBlue dark:text-portfolio-cream"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-portfolio-cream dark:bg-portfolio-darkBlue">
                <div className="flex flex-col space-y-6 mt-8">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="text-left text-lg text-portfolio-darkBlue dark:text-portfolio-cream hover:text-portfolio-purple transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
