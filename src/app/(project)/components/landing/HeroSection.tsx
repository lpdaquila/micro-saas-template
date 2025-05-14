// app/components/landing/HeroSection.tsx
import Link from 'next/link';
import React, { JSX } from 'react'; // Import React se usar JSX complexo ou hooks, boa prática ter

export function HeroSection(): JSX.Element {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 md:py-32"> {/* Ajuste de cor para um pouco mais de contraste */}
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Extraia Dados de PDFs com Precisão e Rapidez
        </h1>
        <p className="text-lg md:text-xl mb-10 text-blue-100 max-w-3xl mx-auto">
          Transforme tabelas, imagens e textos de seus arquivos PDF em formatos úteis como Excel, JPG/PNG e Word (.docx) em poucos cliques.
        </p>
        <Link href="/app" legacyBehavior> {/* Ou '/login' se precisar logar primeiro */}
          <a className="bg-white text-indigo-700 font-semibold py-3 px-10 rounded-lg shadow-xl hover:bg-gray-100 transition duration-300 ease-in-out text-lg">
            Experimente Grátis Agora
          </a>
        </Link>
        <p className="text-sm mt-6 text-blue-200">Comece com nosso plano gratuito e veja a mágica acontecer!</p>
      </div>
    </section>
  );
}