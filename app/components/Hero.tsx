import Image from 'next/image'

export default function Hero() {
  return (
    <section id="inicio" className="bg-white py-20">
      <div className="container mx-auto text-center">
        <div className="relative h-[400px] mb-8">
          <Image
            src="/kala1.jpg"
            alt="Kala"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff7f50] to-[#a0d3d9] opacity-50 rounded-lg"></div>
        </div>
        <h1 className="text-5xl font-bold mb-4">Bienvenidos a Kala</h1>
        <p className="text-xl mb-8">Cuidamos a tus compañeros de vida con amor y dedicación</p>
        <button className="bg-[#ff7f50] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#ff6b3d] transition duration-300">
          Conoce más
        </button>
      </div>
    </section>
  )
}

