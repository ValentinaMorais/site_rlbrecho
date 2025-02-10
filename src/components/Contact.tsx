import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function Contact() {
  return (
    <section className="py-16 bg-[#f8f7f5]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Contato</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-xl font-semibold mb-6">Fale Conosco</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:ring-[#606c38] focus:border-[#606c38]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:ring-[#606c38] focus:border-[#606c38]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md focus:ring-[#606c38] focus:border-[#606c38]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#606c38] text-white py-2 rounded-md hover:bg-[#505a2f] transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-xl font-semibold mb-6">Informações</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-[#606c38] flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Endereço</h4>
                  <p className="text-gray-600">Av. Principal, 123<br />Centro, Maringá - PR</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="text-[#606c38] flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Telefone</h4>
                  <p className="text-gray-600">(44) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="text-[#606c38] flex-shrink-0" />
                <div>
                  <h4 className="font-medium">E-mail</h4>
                  <p className="text-gray-600">contato@rlbrecho.com.br</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="text-[#606c38] flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Horário de Funcionamento</h4>
                  <p className="text-gray-600">
                    Segunda a Sexta: 9h às 18h<br />
                    Sábado: 9h às 13h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;