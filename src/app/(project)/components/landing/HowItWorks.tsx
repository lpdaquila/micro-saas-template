export function HowItWorksSection() {
    return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Como Funciona em 3 Passos Simples
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Passo 1 */}
          <div className="p-6">
             <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
               <span className="text-2xl font-bold text-blue-600">1</span>
             </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Faça Upload</h3>
            <p className="text-gray-600">
              Arraste e solte ou selecione o arquivo PDF que deseja processar.
            </p>
          </div>
          {/* Passo 2 */}
          <div className="p-6">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
               <span className="text-2xl font-bold text-blue-600">2</span>
             </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Escolha a Extração</h3>
            <p className="text-gray-600">
              Selecione o que você precisa: tabelas para Excel, imagens ou texto para Word.
            </p>
          </div>
          {/* Passo 3 */}
          <div className="p-6">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
               <span className="text-2xl font-bold text-blue-600">3</span>
             </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Baixe o Resultado</h3>
            <p className="text-gray-600">
              Faça o download dos seus dados extraídos no formato desejado. Rápido e fácil!
            </p>
          </div>
        </div>
      </div>
    </section>
)
};

export default HowItWorksSection;