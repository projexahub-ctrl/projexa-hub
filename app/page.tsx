
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import FeaturedProjects from "@/components/featured-projects"
import CustomAISection from "@/components/custom-ai-section"
import Testimonials from "@/components/testimonials"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import Reveal from "@/components/reveal"
import ScrollTop from "@/components/scroll-top"

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">

      <HeroSection />

      <Reveal>
        <ServicesSection />
      </Reveal>

      <Reveal>
        <FeaturedProjects />
      </Reveal>

      <Reveal>
        <CustomAISection />
      </Reveal>

      <Reveal>
        <Testimonials />
      </Reveal>

      <Reveal>
        <ContactSection />
      </Reveal>

      <Footer />

      <WhatsAppFloat />

      <ScrollTop />

    </main>
  )
}