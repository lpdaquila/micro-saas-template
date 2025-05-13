import Link from 'next/link'
import React from 'react';

export function HeroSection() { 
  return (
  <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 md:py-32">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
        Extraia Dados de PDFs Facilmente
      </h1>
      <p className="text-lg md:text-xl mb-8 text-blue-100">
        Transforme tabelas, imagens e textos de PDFs em arquivos Excel, imagens e documentos Word (.docx) em segundos.
      </p>
      <p className="text-sm mt-4 text-blue-200">Comece com nosso plano gratuito!</p>
    </div>
  </section>
)
};

export default HeroSection