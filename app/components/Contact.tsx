'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      alert('Formulario enviado correctamente')
      setFormData({ name: '', email: '', message: '' })
    }
  }

  const validateForm = () => {
    if (!formData.name) {
      alert('Por favor, ingrese su nombre')
      return false
    }
    if (!formData.email || !formData.email.includes('@')) {
      alert('Por favor, ingrese un correo electrónico válido')
      return false
    }
    if (!formData.message) {
      alert('Por favor, ingrese un mensaje')
      return false
    }
    return true
  }

  return (
    <section id="contacto" className="relative bg-white py-20 mb-12 px-6 md:px-12">
  <div className="absolute inset-0 bg-gradient-to-r from-[#ff7f50] to-[#a0d3d9] opacity-50 rounded-lg"></div>
  <div className="relative container mx-auto">
    <h2 className="text-4xl font-bold text-center text-[#3d4455] mb-12">Contáctanos</h2>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 px-6 mb-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">Correo</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              rows={4}
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-[#ff7f50] text-white px-6 py-2 rounded hover:bg-[#ff6b3d] transition duration-300">
            Enviar
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 px-6">
        <h3 className="text-2xl font-semibold mb-4">Información de contacto</h3>
        <p className="mb-2">Dirección: Calle Principal 123, Ciudad</p>
        <p className="mb-2">Teléfono: (123) 456-7890</p>
        <p className="mb-2">Correo: info@kalaveterinaria.com</p>
      </div>
    </div>
  </div>
</section>


  )
}

