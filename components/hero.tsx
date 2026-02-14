import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/piedras.png')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px] z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <p className="opacity-0 animate-smoke text-primary font-medium tracking-widest uppercase mb-4">
            Centro de Bienestar Integral
          </p>
          <h1 className="opacity-0 animate-smoke delay-300 font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-foreground leading-tight mb-6 text-balance">
            Healing
          </h1>
          <p className="opacity-0 animate-smoke delay-700 text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
            Terapias holísticas y estética integral. Línea de productos naturales
            y experiencias de sanación en Santiago de Cali, Colombia.
          </p>
          <div className="opacity-0 animate-smoke delay-1000 flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="text-base">
              <Link href="#reservar">Reservar Cita</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base bg-transparent">
              <Link href="#servicios">Ver Servicios</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
