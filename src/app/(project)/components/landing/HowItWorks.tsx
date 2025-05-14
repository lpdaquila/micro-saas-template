import React, { JSX } from 'react';

interface StepProps {
  number: string;
  title: string;
  description: string;
}

function Step({ number, title, description }: StepProps): JSX.Element {
  return (
    <div className="p-6 text-center md:text-left">
      <div className="flex justify-center md:justify-start items-center mb-4">
        <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-md">
          {number}
        </div>
        <h3 className="text-xl font-semibold text-gray-700 ml-4">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export function HowItWorksSection(): JSX.Element {
  const steps: StepProps[] = [
    {
      number: "1",
      title: "Faça Upload do PDF",
      description: "Arraste e solte seu arquivo PDF na nossa plataforma ou selecione-o do seu dispositivo. É rápido e seguro.",
    },
    {
      number: "2",
      title: "Escolha a Extração",
      description: "Selecione o que você deseja extrair: tabelas para Excel, todas as imagens ou o texto formatado para Word.",
    },
    {
      number: "3",
      title: "Baixe Seus Arquivos",
      description: "Em instantes, seus dados estarão prontos. Faça o download dos arquivos convertidos no formato escolhido.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Como Funciona? Simples Assim!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Extrair dados de PDFs nunca foi tão fácil. Siga estes três passos:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Step key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}