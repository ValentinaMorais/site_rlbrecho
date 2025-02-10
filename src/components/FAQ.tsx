import React from 'react';

function FAQ() {
  const faqs = [
    {
      question: 'Como funciona o aluguel?',
      answer: 'O aluguel é feito por períodos: de sexta a segunda ou de terça a quinta. Você escolhe a peça, seleciona o período desejado e nós cuidamos do resto!'
    },
    {
      question: 'Qual o prazo de devolução?',
      answer: 'As peças devem ser devolvidas até as 12h do último dia do período de aluguel.'
    },
    {
      question: 'Como funciona a entrega?',
      answer: 'Oferecemos entrega em Maringá (R$10), Sarandi (R$15) e Paiçandu (R$25), ou você pode retirar em nossa loja física.'
    },
    {
      question: 'Quais documentos são necessários?',
      answer: 'Para alugar, é necessário apresentar RG, CPF e comprovante de residência.'
    },
    {
      question: 'E se a peça não servir?',
      answer: 'Recomendamos consultar nosso guia de medidas. Caso precise trocar, entre em contato conosco com antecedência.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Perguntas Frequentes</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#606c38] mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;