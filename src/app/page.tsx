import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'
import Image from 'next/image'
import blank from '../../public/300png.png'
// import chemical from '../../public/chemical.png'

interface FactorioCard {
  title: string
  dimensions: string
  frames: number
  image: string
  icon: string
}

const factorioData: FactorioCard[] = [
  {
    title: "Chemical Stager",
    dimensions: "6x6",
    frames: 1,
    image: "/images/300png.png",
    icon: "/chemical.png",
  },
  {
    title: "Quantum Stabilizer",
    dimensions: "6x6",
    frames: 100,
    image: "/chemical.png",
    icon: "/chemical.png",
  },
  {
    title: "Pathogen Lab",
    dimensions: "7x7",
    frames: 60,
    image: "/chemical.png",
    icon: "/chemical.png",
  },
  {
    title: "Oxidizer",
    dimensions: "4x4",
    frames: 60,
    image: "/chemical.png",
    icon: "/chemical.png",
  },
  {
    title: "Fusion Reactor",
    dimensions: "6x6",
    frames: 60,
    image: "/chemical.png",
    icon: "/chemical.png",
  },
  {
    title: "Scrubber",
    dimensions: "3x3",
    frames: 60,
    image: "/chemical.png",
    icon: "/chemical.png",
  }
]

export default function FactorioPortfolio() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat p-8"
      style={{ 
        backgroundImage: 'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background-Dsp8dquNwvn8APvGX0W4gi02TmCBuQ.png")',
        backgroundSize: 'cover'
      }}
    >
      {/* Hazard Stripes Header */}
      {/* <div className="w-full h-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBmaWxsPSIjZmZkNzAwIiBkPSJNMCAwaDIwbDIwIDIwSDIweiIvPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0yMCAwaDE4bC0yMCAyMEgweiIvPjwvc3ZnPg==')] bg-repeat-x mb-8" /> */}
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {factorioData.map((card, index) => (
            <Card key={index} className="bg-zinc-900/50 border-zinc-800 text-zinc-100">
              <CardHeader className="flex flex-row items-center justify-center gap-2 pb-2">
                <img
                  src={card.icon}
                  alt=""
                  className="w-6 h-6"
                />
                <h3 className="text-3xl font-bold text-[#FFE6C0]">{card.title}</h3>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex">
                  {/* Left Column - Metadata */}
                  <div className="w-32 p-4 flex flex-col justify-center items-end">
                    <div className="space-y-1">
                      <div>
                        <p className="text-lg text-[#818181] text-right">DIMENSIONS</p>
                        <p className="text-lg text-zinc-200 text-right">{card.dimensions}</p>
                      </div>
                      <div>
                        <p className="text-lg text-[#818181] text-right">FRAMES</p>
                        <p className="text-lg text-zinc-200 text-right">{card.frames}</p>
                      </div>
                    <div className="relative w-[192px] h-[47px] -ml-4">
                      <button className="text-3xl absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector%203-L1QAIpbjRZASjFJeUxyrcR2hABxtU7.svg')] bg-no-repeat bg-cover text-black hover:opacity-90 transition-opacity flex items-center justify-center">
                        {/* <Download className="w-4 h-4 mr-2" /> */}
                        Download
                      </button>
                    </div>
                    </div>
                    {/* <Button className="w-[192px] h-[47px] text-white relative bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector%203-L1QAIpbjRZASjFJeUxyrcR2hABxtU7.svg')] bg-no-repeat bg-cover hover:opacity-90 transition-opacity">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button> */}

                  </div>
                  {/* Right Column - Image */}
                  <div className="flex-1">
                    {/* <img
                      src={blank}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    /> */}
                    <Image
                    src={'/chemical.png'}
                    alt={"alt"}
                    width={300}
                    height={300}
                    className="w-full h-auto rounded"
                  />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Hazard Stripes Footer */}
      {/* <div className="w-full h-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBmaWxsPSIjZmZkNzAwIiBkPSJNMCAwaDIwbDIwIDIwSDIweiIvPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0yMCAwaDE4bC0yMCAyMEgweiIvPjwvc3ZnPg==')] bg-repeat-x mt-8" /> */}
    </div>
  )
}

