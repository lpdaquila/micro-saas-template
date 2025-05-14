// app/components/landing/PricingTeaserSection.tsx
import Link from 'next/link';
import React, { JSX } from 'react';

export function PricingTeaserSection(): JSX.Element {
  return (
    <section id="pricing-teaser" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 md:py-24"> {/* Gradiente atraente */}
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Comece Gratuitamente, Cresça Conosco!
        </h2>
        <p className="text-lg text-indigo-100 mb-10 max-w-2xl mx-auto">
          Experimente nosso extrator de PDF gratuitamente! Você pode processar até{' '}
          <span className="font-semibold text-yellow-300">5 arquivos </span> 
           por mês sem nenhum custo. Precisa de mais? Nossos planos pagos oferecem limites generosos e recursos avançados.
        </p>
        <Link href="/payment"> {/* Link para sua página de preços */}
          <button className="bg-white text-purple-700 font-semibold py-3 px-10 rounded-lg shadow-xl hover:bg-gray-100 transition duration-300 ease-in-out text-lg">
            Ver Planos e Preços
          </button>
        </Link>
      </div>
    </section>
  );
}