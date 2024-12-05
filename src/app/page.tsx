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
  mediaType?: 'image' | 'video'
}

const factorioData: FactorioCard[] = [
  {
    title: "Chemical Stager",
    dimensions: "6x6",
    frames: 1,
    image: "/images/300png.png",
    icon: "/chemical.png",
    mediaType: 'image',
  },
  {
    title: "Quantum Stabilizer",
    dimensions: "6x6",
    frames: 100,
    image: "/chemical.png",
    icon: "/chemical.png",
    mediaType: 'image',
  },
  {
    title: "Pathogen Lab",
    dimensions: "7x7",
    frames: 60,
    image: "/chemical.png",
    icon: "/chemical.png",
    mediaType: 'image',
  },
  {
    title: "Oxidizer",
    dimensions: "4x4",
    frames: 60,
    image: "/chemical.png",
    icon: "/chemical.png",
    mediaType: 'image',
  },
  {
    title: "Fusion Reactor",
    dimensions: "6x6",
    frames: 60,
    image: "/chemical.png",
    icon: "/chemical.png",
    mediaType: 'image',
  },
  {
    title: "Thermal Plant",
    dimensions: "5x5",
    frames: 80,
    image: "/chemical.png",
    icon: "/chemical.png",
    mediaType: 'video',
  }
]

export default function FactorioPortfolio() {
  return (
    <>
      {/* Fixed background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background-Dsp8dquNwvn8APvGX0W4gi02TmCBuQ.png")',
          zIndex: -1
        }}
      />
      
      {/* Scrollable content */}
      <div className="relative min-h-screen">
        
        <div className="container mx-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {factorioData.map((card, index) => (
              <Card key={index} className="bg-zinc-900/40 border-zinc-800/40 text-zinc-100">
                <CardHeader className="flex flex-row items-center justify-center gap-2 pb-2 pt-2">
                  <img
                    src={card.icon}
                    alt=""
                    className="w-6 h-6"
                  />
                  <h3 className="text-4xl font-bold text-[#FFE6C0] padding-top-0">{card.title}</h3>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex">
                    {/* Left Column - Metadata */}
                    <div className="w-34 p-1 pl-4 flex flex-col justify-center items-end">
                      <div className="space-y-1">
                        <div>
                          <p className="text-2xl text-[#818181] text-right leading-none">DIMENSIONS</p>
                          <p className="text-2xl text-zinc-200 text-right">{card.dimensions}</p>
                        </div>
                        <div>
                          <p className="text-2xl text-[#818181] text-right leading-none">FRAMES</p>
                          <p className="text-2xl text-zinc-200 text-right">{card.frames}</p>
                        </div>
                      <div className="relative w-[115.2px] h-[28.2px] ml-auto">
                        <button className="text-xl absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector%203-L1QAIpbjRZASjFJeUxyrcR2hABxtU7.svg')] bg-no-repeat bg-cover text-black hover:opacity-90 transition-opacity flex items-center justify-center">
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
                      {/* <Image
                      src={'/chemical.png'}
                      alt={"alt"}
                      width={300}
                      height={300}
                      className="w-full h-auto rounded"
                    /> */}
  <div className="flex-1">
    {card.mediaType === 'image' ? (
      <Image
        src={'/chemical.png'}
        alt={card.title}
        width={300}
        height={300}
        className="w-full h-auto rounded"
      />
    ) : (
      <video
        src={'chemical.webm'}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto rounded"
        style={{ mixBlendMode: 'normal' }}
      />
    )}
  </div>


                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
      </div>
    </>
  )
}

