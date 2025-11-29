"use client"

import { Card } from "@/components/ui/card"
import { SiReact, SiLaravel, SiNextdotjs, SiCakephp, SiTypescript, SiTailwindcss, SiVuedotjs, SiNodedotjs, SiPython } from "react-icons/si";

/**
 * Carrusel de Tecnologías
 * Muestra las tecnologías que manejo con animación de scroll infinito
 */
export function TechCarousel() {
  // Tecnologías que manejo
  const technologies = [
  { name: "React", color: "bg-blue-500", icon: <SiReact size={32} /> },
  { name: "Laravel", color: "bg-red-500", icon: <SiLaravel size={32} /> },
  { name: "CakePHP", color: "bg-yellow-500", icon: <SiCakephp size={32} /> },
  { name: "Next.js", color: "bg-black", icon: <SiNextdotjs size={32} /> },
  { name: "TypeScript", color: "bg-blue-600", icon: <SiTypescript size={32} /> },
  { name: "Tailwind CSS", color: "bg-cyan-500", icon: <SiTailwindcss size={32} /> },
];


  // Tecnologías próximas
  const comingSoon = [
  { name: "Vue.js", color: "bg-green-500", icon: <SiVuedotjs size={28} /> },
  { name: "Python", color: "bg-yellow-600", icon: <SiPython size={28} /> },
  { name: "Node.js", color: "bg-green-600", icon: <SiNodedotjs size={28} /> },
];


  return (
    <section id="tecnologias" className="py-16 px-4 bg-portfolio-purple/5 dark:bg-portfolio-purple/10">
      <div className="container mx-auto max-w-6xl">
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-darkBlue dark:text-portfolio-cream mb-4">
            Tecnologías que manejo
          </h2>
          <p className="text-lg text-portfolio-darkBlue/70 dark:text-portfolio-cream/70">
            Herramientas y frameworks con los que trabajo día a día
          </p>
        </div>

        {/* Carrusel de tecnologías actuales */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-portfolio-darkBlue dark:text-portfolio-cream mb-6 text-center">
            Tecnologías Actuales
          </h3>
          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-6">
              {/* Duplicamos las tecnologías para el efecto infinito */}
              {[...technologies, ...technologies].map((tech, index) => (
                <Card
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 w-48 p-6 bg-white dark:bg-portfolio-darkBlue/50 border-portfolio-purple/20 hover:border-portfolio-purple/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <div
                      className={`w-16 h-16 ${tech.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-4`}
                    >
                      {tech.icon}
                    </div>
                    <h4 className="font-semibold text-portfolio-darkBlue dark:text-portfolio-cream">{tech.name}</h4>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Tecnologías próximas */}
        <div>
          <h3 className="text-xl font-semibold text-portfolio-darkBlue dark:text-portfolio-cream mb-6 text-center">
            Coming Soon
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {comingSoon.map((tech) => (
              <Card
                key={tech.name}
                className="p-6 bg-white dark:bg-portfolio-darkBlue/50 border-portfolio-purple/20 opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <div className="text-center">
                  <div
                    className={`w-12 h-12 ${tech.color} rounded-full flex items-center justify-center text-xl mx-auto mb-3`}
                  >
                    {tech.icon}
                  </div>
                  <h4 className="font-semibold text-portfolio-darkBlue dark:text-portfolio-cream">{tech.name}</h4>
                  <p className="text-sm text-portfolio-purple mt-1">Próximamente</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
