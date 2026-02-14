"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/piedras.png')" }}
      />

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-background/20 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl md:text-2xl font-semibold text-primary">
              Healing
            </span>
            <span className="text-xs md:text-sm text-muted-foreground hidden sm:block">
              Centro de Bienestar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#servicios" className="text-foreground/80 hover:text-primary transition-colors">
              Servicios
            </Link>
            <Link href="#nosotros" className="text-foreground/80 hover:text-primary transition-colors">
              Nosotros
            </Link>
            <Link href="#beneficios" className="text-foreground/80 hover:text-primary transition-colors">
              Beneficios
            </Link>
            <Link href="#promociones" className="text-foreground/80 hover:text-primary transition-colors">
              Promociones
            </Link>
            <Link href="#contacto" className="text-foreground/80 hover:text-primary transition-colors">
              Contacto
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button asChild>
              <Link href="#reservar">Reservar Cita</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="#servicios"
                className="text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#nosotros"
                className="text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="#beneficios"
                className="text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Beneficios
              </Link>
              <Link
                href="#promociones"
                className="text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Promociones
              </Link>
              <Link
                href="#contacto"
                className="text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <Button asChild className="mt-2">
                <Link href="#reservar" onClick={() => setIsMenuOpen(false)}>
                  Reservar Cita
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
