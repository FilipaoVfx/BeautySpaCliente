import { Brain, Moon, Zap, HeartPulse, Smile, Sparkles } from "lucide-react"

const benefits = [
  {
    icon: Brain,
    title: "Reducción del Estrés",
    description: "Libera la tensión acumulada y encuentra calma interior"
  },
  {
    icon: HeartPulse,
    title: "Mayor Conexión Interior",
    description: "Reconecta contigo mismo y descubre tu esencia"
  },
  {
    icon: Zap,
    title: "Armonización Energética",
    description: "Equilibra tus chakras y restaura el flujo de energía"
  },
  {
    icon: Moon,
    title: "Mejora del Sueño",
    description: "Disfruta de un descanso más profundo y reparador"
  },
  {
    icon: Smile,
    title: "Alivio de Tensiones",
    description: "Libera bloqueos físicos y emocionales"
  },
  {
    icon: Sparkles,
    title: "Bienestar Duradero",
    description: "Transforma tu calidad de vida de manera sostenible"
  }
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-primary/90 backdrop-blur-sm text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary-foreground/80 font-medium tracking-widest uppercase mb-4">
            Beneficios
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold mb-6 text-balance">
            Transforma tu bienestar
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Nuestras terapias holísticas ofrecen beneficios profundos para tu cuerpo, 
            mente y espíritu.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="text-center p-6"
            >
              <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-5">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">
                {benefit.title}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
