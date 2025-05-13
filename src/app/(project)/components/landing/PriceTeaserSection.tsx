import Link from "next/link";
import React from "react";

export function PricingTeaserSection() { 
    return (
  <section id="pricing-teaser" className="bg-gray-100 py-16 md:py-24">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Comece Gratuitamente!
      </h2>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Experimente nosso extrator de PDF gratuitamente! Você pode processar até{' '}
        <span className="font-semibold">5 arquivos</span> {/* Ajuste o limite aqui */}
        por mês sem custo. Precisa de mais poder? Nossos planos pagos oferecem limites maiores e processamento prioritário.
      </p>
    </div>
  </section>
)
};

export default PricingTeaserSection;