import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-[#a0d3d9] p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Image src="/logonombrecortado.png" alt="Kala Logo" width={100} height={50} />
        
        {/* título centrado */}
        <h1 className="text-xl font-semibold text-[#3d4455]">Veterinaria</h1>
        
        {/* menú de navegación */}
        <nav>
          <ul className="flex space-x-4">
            {['Inicio', 'Servicios', 'Contacto'].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase()}`} className="text-[#3d4455] hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
