"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, User, Send } from "lucide-react"

/**
 * Formulario de Contacto
 * Permite a los visitantes enviar mensajes con validación básica
 */
export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  /**
   * Maneja los cambios en los campos del formulario
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  /**
   * Maneja el envío del formulario
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulamos el envío del formulario
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Aquí iría la lógica real de envío
      console.log("Datos del formulario:", formData)

      setSubmitStatus("success")
      setFormData({ fullName: "", email: "", phone: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      // Resetear el estado después de 3 segundos
      setTimeout(() => setSubmitStatus("idle"), 3000)
    }
  }

  return (
    <section id="contacto" className="py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-darkBlue dark:text-portfolio-cream mb-4">
            Contacto
          </h2>
          <p className="text-lg text-portfolio-darkBlue/70 dark:text-portfolio-cream/70">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </div>

        {/* Formulario */}
        <Card className="bg-white dark:bg-portfolio-darkBlue/50 border-portfolio-purple/20">
          <CardHeader>
            <CardTitle className="text-portfolio-darkBlue dark:text-portfolio-cream">Envíame un mensaje</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre completo */}
              <div className="space-y-2">
                <Label
                  htmlFor="fullName"
                  className="text-portfolio-darkBlue dark:text-portfolio-cream flex items-center space-x-2"
                >
                  <User className="w-4 h-4" />
                  <span>Nombre completo</span>
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="border-portfolio-purple/30 focus:border-portfolio-purple"
                  placeholder="Tu nombre completo"
                />
              </div>

              {/* Correo electrónico */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-portfolio-darkBlue dark:text-portfolio-cream flex items-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Correo electrónico</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="border-portfolio-purple/30 focus:border-portfolio-purple"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Celular */}
              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-portfolio-darkBlue dark:text-portfolio-cream flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Celular</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border-portfolio-purple/30 focus:border-portfolio-purple"
                  placeholder="+1 234 567 8900"
                />
              </div>

              {/* Mensaje */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-portfolio-darkBlue dark:text-portfolio-cream">
                  Mensaje
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="border-portfolio-purple/30 focus:border-portfolio-purple resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              {/* Botón de envío */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-portfolio-purple hover:bg-portfolio-purple/90 text-white"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Enviando...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="w-4 h-4" />
                    <span>Enviar mensaje</span>
                  </div>
                )}
              </Button>

              {/* Mensajes de estado */}
              {submitStatus === "success" && (
                <div className="text-green-600 text-center font-medium">
                  ¡Mensaje enviado correctamente! Te contactaré pronto.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="text-red-600 text-center font-medium">
                  Error al enviar el mensaje. Por favor, inténtalo de nuevo.
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
