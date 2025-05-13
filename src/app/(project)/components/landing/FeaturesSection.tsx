import React from 'react';

export function FeaturesSection() { 
    return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Recursos Poderosos para Seus PDFs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Tabela para Excel */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            {/* Ícone (ex: usando Heroicons ou FontAwesome) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z" /> {/* Exemplo de Ícone */}
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Tabelas para Excel</h3>
            <p className="text-gray-600">
              Exporte tabelas de PDFs diretamente para planilhas Excel (.xlsx) editáveis, preservando a estrutura.
            </p>
          </div>

          {/* Feature 2: Extrair Imagens */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
             {/* Ícone */}
             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /> {/* Exemplo de Ícone */}
             </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Extração de Imagens</h3>
            <p className="text-gray-600">
              Salve todas as imagens contidas nos seus PDFs em formatos populares (JPG, PNG) com alta qualidade.
            </p>
          </div>

          {/* Feature 3: Texto para DOCX */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
             {/* Ícone */}
             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> {/* Exemplo de Ícone */}
             </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Texto Formatado para DOCX</h3>
            <p className="text-gray-600">
              Converta textos de PDF para arquivos Word (.docx) editáveis, mantendo a formatação básica.
            </p>
          </div>
        </div>
      </div>
    </section>
)
};

export default FeaturesSection;