import Image from "next/image"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Benefits } from "@/components/benefits"
import { Promotions } from "@/components/promotions"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/hero-spa.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <Services />
        <About />
        <Benefits />
        <Promotions />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
