import { Gift, Percent, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const promotions = [
  {
    icon: Gift,
    title: "2x1 en Masaje Relajante",
    description: "Trae a alguien especial y disfruten juntos de un masaje relajante holístico.",
    terms: "Válido de lunes a miércoles",
    highlight: true
  },
  {
    icon: Percent,
    title: "15% en Limpieza Energética",
    description: "Descuento especial en nuestra sesión de limpieza de chakras y aura.",
    terms: "Con cita previa",
    highlight: false
  },
  {
    icon: Star,
    title: "Reiki Gratis",
    description: "Recibe una sesión de reiki completamente gratis en tu tercera visita.",
    terms: "Acumulable en todas las visitas",
    highlight: false
  }
]

export function Promotions() {
  return (
    <section id="promociones" className="py-24 bg-card/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">
            Promociones
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-6 text-balance">
            Ofertas especiales para ti
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Aprovecha nuestras promociones del mes y regálate momentos de bienestar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {promotions.map((promo) => (
            <div 
              key={promo.title}
              className={`relative p-8 rounded-lg border ${
                promo.highlight 
                  ? "bg-primary text-primary-foreground border-primary" 
                  : "bg-background border-border"
              }`}
            >
              {promo.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-sm font-medium px-4 py-1 rounded-full">
                  Más Popular
                </span>
              )}
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${
                promo.highlight ? "bg-primary-foreground/10" : "bg-primary/10"
              }`}>
                <promo.icon className={`w-7 h-7 ${
                  promo.highlight ? "text-primary-foreground" : "text-primary"
                }`} />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-3">
                {promo.title}
              </h3>
              <p className={`leading-relaxed mb-4 ${
                promo.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
              }`}>
                {promo.description}
              </p>
              <p className={`text-sm ${
                promo.highlight ? "text-primary-foreground/60" : "text-muted-foreground/80"
              }`}>
                {promo.terms}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="#reservar">Reservar con Promoción</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
