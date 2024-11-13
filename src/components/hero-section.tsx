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
          {/* <h1 className="mb-6 font-serif text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Classic Cuts <br className="hidden sm:inline" />
            <span className="text-primary">Modern Style</span>
          </h1> */}
            <svg width="396" height="260.51880114474636" viewBox="0 0 350 230.2565161632859" class="looka-1j8o68f"><defs id="SvgjsDefs1581"></defs><g id="SvgjsG1582" featurekey="symbolFeature-0" transform="matrix(1.5996525587224661,0,0,1.5996525587224661,103.04042557742629,-2.932166484138533)" fill="#818d98"><path xmlns="http://www.w3.org/2000/svg" d="M1.225,81.063c1.694,2.405,5.094,6.144,9.884,6.144c8.724,0,11.203-8.124,11.203-8.124s1.479,8.124,11.25,8.124  c8.271,0,11.273-8.124,11.273-8.124s3.74,8.124,11.285,8.124s11.292-8.124,11.292-8.124s3.5,8.124,11.294,8.124  c5.144,0,8.406-3.531,10.038-5.937c-0.362-7.87-1.524-16.546-4.715-25.231c0.447-0.761,0.721-1.635,0.721-2.581  c0-2.443-1.712-4.478-4-4.992c-6.874-14.344-14.766-27.213-21.56-35.781c-2.302,1.517-5.195,3.879-7.832,7.392  c1.918-3.747,4.32-6.886,6.362-9.197c-4.746-5.679-8.849-9.047-11.527-9.047c-6.689,0-24.356,21.067-36.85,46.681  C7.137,49.086,5.5,51.073,5.5,53.458c0,0.846,0.225,1.633,0.588,2.337C2.729,64.485,1.554,73.173,1.225,81.063z M18.38,55.917  l3.338-2.505l-1.044-3.141l2.623,0.607l-0.79-4.919l4.378,2.842l-2.406-4.466l2.328,1.621l-1.376-4.101l4.12,4.176l-1.439-10.452  l4.819,7.798l-1.339-13.304c0.022-0.028,0.195,1.393,0.217,1.365l5.906,7.44L37.64,27.804l5.457,10.036l3.642-13.834l3.684,12.45  l5.53-9.531l0.152,14.722l4.897-9.198c0.009,0.013,0.019,0.026,0.028,0.039l-0.364,10.374l3.687-4.807l-0.207,8.079l2.331-3.089  l-0.58,5.263l2.916-1.688l-0.898,3.937l2.042-0.347L69.5,54.916l2.5,0.417c2.731,7.631,3.908,13.08,3.908,18.661  c-0.612-3.729-1.516-7.67-3.408-10.161l-3.415-6.84l-1.344,3.349l-1.73-4.113l-1.682,1.854h-0.001l-0.896-4.061l-1.341,2.255  l-1.799-4.207l-1.378,3.91c-0.069-0.023-0.138-0.046-0.208-0.069l-2.115-6.566l-2.54,4.845l-1.556-5.897l-3.101,5.473l-0.942-8.162  l-3.097,7.789l-4.051-7.783l-4.553,8.182l0.964-7.143l-5.409,7.942l0.625-6.212l-4.775,7.727l-1.504-2.536l-2.099,5.625  l-1.489-2.512l-1.991,5.334l-0.701-1.181L18,65.583c-1.987,2.536-2.46,4.567-3.092,8.419C14.908,69.071,16.197,62.616,18.38,55.917z  "></path></g><g id="SvgjsG1583" featurekey="fiAKjI-0" transform="matrix(2.714440773793604,0,0,2.714440773793604,-1.4115104449450497,140.6590691822288)" fill="#edeef0"><path d="M7.76 8.9 c-2.32 0 -4.08 1.86 -4.08 4.22 c0 2.42 1.76 4.26 4.18 4.26 c1.68 0 2.96 -0.88 3.74 -2.22 l2.42 1.68 c-1.32 2.16 -3.34 3.44 -6.12 3.44 c-4.22 0 -7.38 -3.14 -7.38 -7.16 c0 -3.98 3.14 -7.1 7.3 -7.1 c2.7 0 4.84 1.12 6.14 3.42 l-2.46 1.7 c-0.8 -1.32 -2 -2.24 -3.74 -2.24 z M24.12 20 l0 -5.36 l-5.8 0 l0 5.36 l-3.1 0 l0 -13.7 l3.1 0 l0 5.5 l5.8 0 l0 -5.5 l3.1 0 l0 13.7 l-3.1 0 z M35.84 20.28 c-4 0 -7.26 -3.06 -7.26 -7.12 c0 -4.08 3.26 -7.14 7.26 -7.14 c4.1 0 7.26 3.06 7.26 7.12 c0 4.08 -3.16 7.14 -7.26 7.14 z M35.84 17.4 c2.32 0 4.1 -1.84 4.1 -4.26 c0 -2.38 -1.78 -4.24 -4.1 -4.24 s-4.1 1.86 -4.1 4.26 s1.78 4.24 4.1 4.24 z M51.14 20 l-3.7 -8.18 l0 8.18 l-2.98 0 l0 -13.7 l3.72 0 l4.02 9.06 l4.02 -9.06 l3.72 0 l0 13.7 l-3.04 0 l0 -8.22 l-3.72 8.22 l-2.04 0 z M67.24 16.18 l-2.52 0 l0 3.82 l-3.1 0 l0 -13.7 l5.9 0 c3.12 0 4.88 2.18 4.88 4.84 c0 2.8 -1.94 5.04 -5.16 5.04 z M67.06 9.14 l-2.34 0 l0 4.2 l2.44 0 c1.32 0 2.12 -0.88 2.12 -2.12 s-0.78 -2.08 -2.22 -2.08 z M82.66 20.26 c-3.46 0 -5.36 -1.72 -5.54 -4.54 l3.1 0 c0.06 1.04 0.66 2.08 2.52 2.08 c1.56 0 2.36 -0.62 2.36 -1.48 c0 -1.06 -1.34 -1.34 -2.9 -1.68 c-2.18 -0.52 -4.84 -1.16 -4.84 -4.42 c0 -2.4 1.86 -4.18 5.14 -4.18 c3.34 0 5.18 1.82 5.38 4.5 l-3.12 0 c-0.06 -1.1 -0.66 -1.98 -2.34 -1.98 c-1.24 0 -2.06 0.5 -2.06 1.4 c0 1.16 1.36 1.48 2.92 1.84 c2.24 0.5 4.92 1.06 4.92 4.14 c0 2.5 -1.96 4.32 -5.54 4.32 z M98.34 20 l0 -5.36 l-5.8 0 l0 5.36 l-3.1 0 l0 -13.7 l3.1 0 l0 5.5 l5.8 0 l0 -5.5 l3.1 0 l0 13.7 l-3.1 0 z M110.06 20.28 c-4 0 -7.26 -3.06 -7.26 -7.12 c0 -4.08 3.26 -7.14 7.26 -7.14 c4.1 0 7.26 3.06 7.26 7.12 c0 4.08 -3.16 7.14 -7.26 7.14 z M110.06 17.4 c2.32 0 4.1 -1.84 4.1 -4.26 c0 -2.38 -1.78 -4.24 -4.1 -4.24 s-4.1 1.86 -4.1 4.26 s1.78 4.24 4.1 4.24 z M124.3 16.18 l-2.52 0 l0 3.82 l-3.1 0 l0 -13.7 l5.9 0 c3.12 0 4.88 2.18 4.88 4.84 c0 2.8 -1.94 5.04 -5.16 5.04 z M124.12 9.14 l-2.34 0 l0 4.2 l2.44 0 c1.32 0 2.12 -0.88 2.12 -2.12 s-0.78 -2.08 -2.22 -2.08 z"></path></g><g id="SvgjsG1584" featurekey="sloganFeature-0" transform="matrix(1.6844802221818476,0,0,1.6844802221818476,37.136383943579965,196.23001439005617)" fill="#818d98"><path d="M9.3 11.16 c1.76 0.64 2.78 2.24 2.78 4.28 c0 2.38 -1.18 4.48 -5 4.56 l-5.38 0 l0 -14 l5.6 0 c2.46 0 3.14 1.8 3.14 2.94 c0 1 -0.6 1.8 -1.14 2.22 z M7.08 7.619999999999999 l-3.58 0 l0 3.12 l3.2 0 c1.42 0 1.98 -0.72 1.98 -1.58 c0 -0.62 -0.4 -1.54 -1.6 -1.54 z M6.92 18.28 c2.32 0 3.32 -1.16 3.32 -2.84 c0 -1.88 -1.04 -3.2 -3.28 -3.2 l-3.46 0 l0 6.04 l3.42 0 z M26.407000000000004 20 l-1.22 -2.84 l-6.24 0 l-1.22 2.84 l-1.92 0 l6.16 -14.2 l0.2 0 l6.16 14.2 l-1.92 0 z M19.667 15.48 l4.8 0 l-2.4 -5.54 z M43.054 11.06 c0 2.26 -1.06 4.2 -3.24 4.84 l3.02 4.1 l-2.16 0 l-2.86 -3.88 l-3.14 0 l0 3.88 l-1.8 0 l0 -14 l5.28 0 c3.3 0 4.9 2.28 4.9 5.06 z M34.67400000000001 7.68 l0 6.74 l3.4 0 c2.26 0 3.18 -1.66 3.18 -3.36 s-0.92 -3.38 -3.18 -3.38 l-3.4 0 z M55.98100000000001 11.16 c1.76 0.64 2.78 2.24 2.78 4.28 c0 2.38 -1.18 4.48 -5 4.56 l-5.38 0 l0 -14 l5.6 0 c2.46 0 3.14 1.8 3.14 2.94 c0 1 -0.6 1.8 -1.14 2.22 z M53.761 7.619999999999999 l-3.58 0 l0 3.12 l3.2 0 c1.42 0 1.98 -0.72 1.98 -1.58 c0 -0.62 -0.4 -1.54 -1.6 -1.54 z M53.601000000000006 18.28 c2.32 0 3.32 -1.16 3.32 -2.84 c0 -1.88 -1.04 -3.2 -3.28 -3.2 l-3.46 0 l0 6.04 l3.42 0 z M72.288 18.28 l0.12 1.72 l-8.52 0 l0 -14 l8.12 0 l0.14 1.72 l-6.46 0 l0 3.42 l4.38 0 l0 1.72 l-4.38 0 l0 5.42 l6.6 0 z M87.735 11.06 c0 2.26 -1.06 4.2 -3.24 4.84 l3.02 4.1 l-2.16 0 l-2.86 -3.88 l-3.14 0 l0 3.88 l-1.8 0 l0 -14 l5.28 0 c3.3 0 4.9 2.28 4.9 5.06 z M79.355 7.68 l0 6.74 l3.4 0 c2.26 0 3.18 -1.66 3.18 -3.36 s-0.92 -3.38 -3.18 -3.38 l-3.4 0 z M101.66900000000001 18.54 c0.88 0.82 2.7 1.66 4.52 1.66 c2.8 0 4.58 -1.44 4.58 -3.7 c0 -1.84 -0.88 -2.92 -3.92 -4.64 c-2.32 -1.34 -2.88 -1.78 -2.88 -2.66 c0 -0.94 0.88 -1.68 2.36 -1.68 c0.86 0 2 0.38 2.66 0.8 l0.96 -1.44 c-0.94 -0.62 -2.42 -1.08 -3.6 -1.08 c-2.58 0 -4.3 1.48 -4.3 3.42 c0 1.72 0.86 2.58 3.5 4.02 c2.34 1.28 3.3 2.22 3.3 3.24 c0 1.2 -1.04 1.92 -2.66 1.92 c-1.4 0 -2.8 -0.66 -3.5 -1.3 z M124.656 6 l1.8 0 l0 14 l-1.8 0 l0 -6.44 l-6.94 0 l0 6.44 l-1.8 0 l0 -14 l1.8 0 l0 5.84 l6.94 0 l0 -5.84 z M139.003 20.2 c-4 0 -7.18 -3.2 -7.18 -7.2 s3.18 -7.2 7.18 -7.2 s7.18 3.2 7.18 7.2 s-3.18 7.2 -7.18 7.2 z M139.003 18.48 c3.04 0 5.32 -2.38 5.32 -5.48 s-2.28 -5.48 -5.32 -5.48 c-3.06 0 -5.34 2.38 -5.34 5.48 s2.28 5.48 5.34 5.48 z M156.87 6 c3.28 0 4.82 2.48 4.82 5.1 s-1.54 5.1 -4.82 5.1 l-3.5 0 l0 3.8 l-1.8 0 l0 -14 l5.3 0 z M156.79 14.48 c1.84 0 3.06 -1.42 3.06 -3.38 s-1.22 -3.38 -3.06 -3.38 l-3.42 0 l0 6.76 l3.42 0 z"></path></g></svg>
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