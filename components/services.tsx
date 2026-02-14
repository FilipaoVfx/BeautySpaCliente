import Image from "next/image"
import { Sparkles, Flower2, Droplets, Wind } from "lucide-react"

const services = [
  {
    icon: Flower2,
    title: "Masajes Terapéuticos",
    description: "Masajes relajantes y terapéuticos diseñados para aliviar tensiones físicas y restaurar el equilibrio de tu cuerpo.",
    image: "/masajeTerapeutico.png"
  },
  {
    icon: Sparkles,
    title: "Reiki y Sanación Energética",
    description: "Terapias de sanación con cristales, sonido y energía universal para armonizar tus chakras y restaurar tu aura.",
    image: "/sanacionEnergetica.png"
  },
  {
    icon: Droplets,
    title: "Aromaterapia Personalizada",
    description: "Tratamientos con aceites esenciales seleccionados especialmente para tus necesidades de bienestar.",
    image: "/aroma.png"
  },
  {
    icon: Wind,
    title: "Meditación Guiada",
    description: "Sesiones de meditación y respiración consciente para alcanzar paz interior y claridad mental.",
    image: "/meditacion.png"
  }
]

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-card/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">
            Nuestros Servicios
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-6 text-balance">
            Terapias para tu bienestar integral
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada tratamiento está diseñado para equilibrar tu energía y mejorar tu bienestar
            desde adentro hacia afuera.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-background rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
