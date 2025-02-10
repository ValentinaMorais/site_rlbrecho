import React from 'react';

function RentalAgreement() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Contrato de Aluguel</h2>
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8">
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold mb-6">Termos e Condições de Aluguel</h3>
            
            <div className="space-y-6 text-gray-600">
              <div>
                <h4 className="font-medium text-[#606c38] mb-2">1. Objeto</h4>
                <p>O presente contrato tem como objeto o aluguel de peças de vestuário e acessórios disponibilizados pela RL Brechó, doravante denominada LOCADORA, ao LOCATÁRIO.</p>
              </div>

              <div>
                <h4 className="font-medium text-[#606c38] mb-2">2. Prazo de Locação</h4>
                <p>2.1. O prazo de locação será definido no momento da reserva, podendo ser:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>De sexta-feira a segunda-feira</li>
                  <li>De terça-feira a quinta-feira</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-[#606c38] mb-2">3. Responsabilidades do Locatário</h4>
                <ul className="list-disc ml-6">
                  <li>Zelar pela conservação da peça alugada</li>
                  <li>Não realizar alterações ou ajustes sem autorização</li>
                  <li>Devolver a peça no prazo estabelecido</li>
                  <li>Arcar com eventuais danos causados à peça</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-[#606c38] mb-2">4. Pagamento e Caução</h4>
                <p>4.1. O valor do aluguel deverá ser pago integralmente no ato da reserva.</p>
                <p>4.2. Será cobrada uma caução, que será devolvida após a verificação do estado da peça.</p>
              </div>

              <div>
                <h4 className="font-medium text-[#606c38] mb-2">5. Cancelamento e Alterações</h4>
                <p>5.1. Cancelamentos podem ser realizados com até 48h de antecedência.</p>
                <p>5.2. Será retido 30% do valor como taxa administrativa em caso de cancelamento.</p>
              </div>

              <div>
                <h4 className="font-medium text-[#606c38] mb-2">6. Danos e Penalidades</h4>
                <p>6.1. Danos às peças serão avaliados e cobrados conforme extensão.</p>
                <p>6.2. Atrasos na devolução incorrem em multa diária de 50% do valor do aluguel.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RentalAgreement;