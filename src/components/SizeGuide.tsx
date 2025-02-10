import React from 'react';

function SizeGuide() {
  return (
    <section className="py-16 bg-[#f8f7f5]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Guia de Medidas</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Como Medir</h3>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <span className="font-medium">Busto:</span> Meça a parte mais larga do busto, mantendo a fita métrica paralela ao chão
                </li>
                <li>
                  <span className="font-medium">Cintura:</span> Meça a parte mais fina da cintura, geralmente na altura do umbigo
                </li>
                <li>
                  <span className="font-medium">Quadril:</span> Meça a parte mais larga do quadril, aproximadamente 20cm abaixo da cintura
                </li>
                <li>
                  <span className="font-medium">Comprimento:</span> Meça da parte superior do ombro até o comprimento desejado
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Dicas Importantes</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Use uma fita métrica maleável</li>
                <li>• Meça sobre roupas leves</li>
                <li>• Mantenha a fita sem folgas, mas não aperte</li>
                <li>• Em caso de dúvidas, entre em contato conosco</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SizeGuide;