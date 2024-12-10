import { Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#3d4455] text-white py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* texto centrado */}
        <p className="text-center">&copy; 2024 Kala Veterinaria. Todos los derechos reservados.</p>
        
        {/* iconos de redes sociales */}
        <div className="flex space-x-4">
          <a href="https://instagram.com" className="hover:text-[#a0d3d9]">
            <Instagram />
          </a>
          <a href="https://facebook.com" className="hover:text-[#a0d3d9]">
            <Facebook />
          </a>
        </div>
      </div>
    </footer>
  )
}
