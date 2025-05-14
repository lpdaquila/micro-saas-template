// app/components/landing/FeaturesSection.tsx
import React, { JSX } from 'react';

// Você pode definir um tipo para as props de cada feature para melhor organização
interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps): JSX.Element {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
      <div className="text-blue-500 mb-5"> {/* Cor do ícone */}
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export function FeaturesSection(): JSX.Element {
  const features: FeatureCardProps[] = [
    {
      icon: ( // Exemplo de Ícone SVG (Heroicons)
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Tabelas para Excel",
      description: "Exporte tabelas complexas de PDFs diretamente para planilhas Excel (.xlsx) editáveis, mantendo a estrutura e os dados intactos.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Extração de Imagens",
      description: "Salve todas as imagens incorporadas em seus PDFs nos formatos JPG ou PNG com alta resolução, prontas para uso.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Texto Formatado para DOCX",
      description: "Converta o conteúdo textual de PDFs para arquivos Word (.docx) totalmente editáveis, preservando formatações essenciais.",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-slate-50"> {/* Fundo suave */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Recursos Poderosos para Transformar Seus PDFs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nossa ferramenta foi desenhada para simplificar seu trabalho com documentos PDF.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}