import React from 'react';

function ExchangePolicy() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Política de Trocas e Devoluções</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#606c38] mb-4">Trocas</h3>
              <ul className="space-y-4 text-gray-600">
                <li>• A troca deve ser solicitada com no mínimo 24h de antecedência</li>
                <li>• A peça deve estar nas mesmas condições recebidas</li>
                <li>• Disponibilidade sujeita ao nosso estoque</li>
                <li>• Em caso de indisponibilidade, o valor pode ser utilizado em outros produtos</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#606c38] mb-4">Devoluções</h3>
              <ul className="space-y-4 text-gray-600">
                <li>• O cancelamento pode ser feito em até 48h antes do evento</li>
                <li>• Será retido 30% do valor como taxa administrativa</li>
                <li>• O reembolso será processado em até 5 dias úteis</li>
                <li>• Não aceitamos devoluções de peças usadas</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#606c38] mb-4">Condições Gerais</h3>
              <ul className="space-y-4 text-gray-600">
                <li>• Todas as peças são verificadas antes e após o aluguel</li>
                <li>• Danos às peças serão cobrados conforme avaliação</li>
                <li>• Atrasos na devolução incorrem em multa diária</li>
                <li>• Em caso de dúvidas, entre em contato conosco</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExchangePolicy;