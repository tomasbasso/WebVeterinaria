import { Stethoscope, Scissors, Bone } from 'lucide-react'

const services = [
  { icon: Stethoscope, text: 'Consultas veterinarias' },
  { icon: Scissors, text: 'Peluquería canina' },
  { icon: Bone, text: 'Tienda de productos' },
]

export default function Services() {
  return (
    <section id="servicios" className="bg-[#c6e3e7] py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#3d4455] mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, text }) => (
            <div key={text} className="text-center">
              <Icon className="mx-auto h-16 w-16 text-[#3d4455] mb-4" />
              <p className="text-xl font-semibold">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

