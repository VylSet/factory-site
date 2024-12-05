import Image from 'next/image'
import { DownloadButton } from '@/components/download-button'

const items = [
  { name: "Chemical Stager", dimensions: "6x6", frames: 1, image: "/placeholder.svg?height=300&width=300" },
  { name: "Quantum Stabilizer", dimensions: "6x6", frames: 100, image: "/placeholder.svg?height=300&width=300" },
  { name: "Pathogen Lab", dimensions: "7x7", frames: 60, image: "/placeholder.svg?height=300&width=300" },
  { name: "Oxidizer", dimensions: "4x4", frames: 60, image: "/placeholder.svg?height=300&width=300" },
  { name: "Fusion Reactor", dimensions: "6x6", frames: 60, image: "/placeholder.svg?height=300&width=300" },
  { name: "Scrubber", dimensions: "3x3", frames: 60, image: "/placeholder.svg?height=300&width=300" },
]

export default function FactorioModderPortfolio() {
  return (
    <div className="min-h-screen text-white">
      <header className="bg-yellow-500 text-black py-2 px-4">
        <h1 className="text-center text-2xl font-bold">Factorio Modder Portfolio</h1>
      </header>
      <main className="container mx-auto p-4 bg-[url('/bg1.png')] bg-cover bg-center bg-no-repeat">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.name} className="bg-zinc-700 p-4 rounded-lg shadow-lg max-w-2xl mx-auto">
              <h2 className="text-xl font-bold mb-4 text-center">{item.name}</h2>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col justify-between md:w-1/3">
                  <div className="text-sm mb-2">
                    <p>DIMENSIONS: {item.dimensions}</p>
                    <p>FRAMES: {item.frames}</p>
                  </div>
                  <DownloadButton />
                </div>
                <div className="md:w-2/3">
                  <Image
                    src={"/images/300png.png"}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="w-full h-auto rounded"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-yellow-500 h-4 mt-8" />
    </div>
  )
}