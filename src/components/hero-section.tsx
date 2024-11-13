'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Scissors, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"



export function HeroSection() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero_background.jpg-NHjqcgY2y4pJu5mCVyqQgORp9X4VEi.jpeg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-6 font-serif text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Classic Cuts <br className="hidden sm:inline" />
            <span className="text-primary">Modern Style</span>
          </h1>
          <p className="mb-8 max-w-[600px] text-lg text-gray-300 md:text-xl lg:text-2xl">
            Experience premium grooming services in a unique atmosphere where sports meets style
          </p>
          <Button
            className="bg-primary px-8 py-6 text-lg font-semibold transition-all hover:bg-primary/90 hover:shadow-lg"
            size="lg"
          >
            Book Now
          </Button>
        </div>
      </div>

      {/* Services Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Haircut", description: "Precision cuts tailored to your style" },
              { title: "Beard Trim", description: "Expert shaping and grooming for your beard" },
              { title: "Hot Towel Shave", description: "Luxurious and refreshing traditional shave" },
            ].map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-6 rounded-full bg-primary/10 p-4">
                  <Scissors className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">About The Dapper Cut</h2>
              <p className="text-lg text-muted-foreground">
                At The Dapper Cut, we blend traditional barbering techniques with modern
                styles. Our skilled barbers are dedicated to providing you with the perfect cut
                and a relaxing grooming experience.
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hair_cut.jpg-WnN6WJGDiubfcssjRSUjGRggLY4537.jpeg"
                alt="Professional haircut with fade and beard trim"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h2>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            Book your appointment or get in touch with us for any inquiries.
          </p>
          
          <div className="mx-auto max-w-md space-y-8">
            <form className="space-y-4">
              <Input type="text" placeholder="Name" className="rounded-lg" />
              <Input type="email" placeholder="Email" className="rounded-lg" />
              <Input type="tel" placeholder="Phone" className="rounded-lg" />
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Send Message
              </Button>
            </form>

            <div className="flex flex-col items-center gap-4 pt-8">
              {[
                { icon: MapPin, text: "123 Main St, City, Country" },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: Mail, text: "info@thedappercut.com" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <item.icon className="h-5 w-5" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-sm text-muted-foreground">
              © 2023 The Dapper Cut. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-4">
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </Link>
              </div>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, index) => (
                  <Link key={index} href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}