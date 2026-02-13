import Link from "next/link"
import { Instagram, Facebook, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-3xl font-semibold">
                Healing
              </span>
              <span className="block text-sm text-background/70">
                Centro de Bienestar Integral
              </span>
            </Link>
            <p className="text-background/70 leading-relaxed mb-6 max-w-md">
              Terapias holísticas y estética integral, línea de productos naturales y experiencias de sanación en Cali, Colombia.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/healingcentrodebienestar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/healingcentrodebienestar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/573153525566" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">
              Enlaces
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="#servicios" className="text-background/70 hover:text-background transition-colors">
                Servicios
              </Link>
              <Link href="#nosotros" className="text-background/70 hover:text-background transition-colors">
                Nosotros
              </Link>
              <Link href="#beneficios" className="text-background/70 hover:text-background transition-colors">
                Beneficios
              </Link>
              <Link href="#promociones" className="text-background/70 hover:text-background transition-colors">
                Promociones
              </Link>
              <Link href="#contacto" className="text-background/70 hover:text-background transition-colors">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">
              Contacto
            </h4>
            <div className="flex flex-col gap-3 text-background/70">
              <p>Calle 3 #24c-34</p>
              <p>Santiago de Cali, Colombia</p>
              <p>+57 315 352 5566</p>
              <p>healingcentrodebienestar@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Healing Centro de Bienestar Integral. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
