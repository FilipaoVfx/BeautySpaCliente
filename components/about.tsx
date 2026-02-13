import { Leaf, Heart, Sun } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "Enfoque Natural",
    description: "Utilizamos terapias naturales y elementos de la tierra para sanar tu cuerpo de manera orgánica."
  },
  {
    icon: Heart,
    title: "Atención Amorosa",
    description: "Cada sesión está llena de cuidado, respeto y dedicación hacia tu proceso de sanación."
  },
  {
    icon: Sun,
    title: "Bienestar Integral",
    description: "No solo sanamos el cuerpo, también trabajamos con tus emociones y tu espíritu."
  }
]

export function About() {
  return (
    <section id="nosotros" className="py-24 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-medium tracking-widest uppercase mb-4">
              Quiénes Somos
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-6 text-balance">
              Un espacio de sanación integral
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Healing es un Centro de Bienestar Integral en Santiago de Cali, Colombia. 
              Ofrecemos terapias holísticas, estética integral, una línea de productos naturales 
              y experiencias de sanación para tu bienestar físico, emocional y espiritual.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nuestro enfoque se basa en sanar de manera integral. Creemos que el verdadero 
              bienestar nace de la armonía entre cuerpo, mente y espíritu. Te invitamos a 
              vivir una experiencia transformadora.
            </p>
          </div>

          <div className="space-y-6">
            {values.map((value) => (
              <div 
                key={value.title}
                className="flex gap-5 p-6 bg-card rounded-lg border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
