import React from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre Nós</h3>
            <p className="text-gray-600">
              RL Brechó - Sua loja de aluguel de roupas e acessórios para todas as ocasiões.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-[#606c38]">Como Alugar</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#606c38]">Política de Locação</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#606c38]">Guia de Medidas</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#606c38]">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Maringá - PR</li>
              <li className="text-gray-600">contato@rlbrecho.com.br</li>
              <li className="text-gray-600">(44) 99999-9999</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-2 border rounded-l-full focus:outline-none focus:ring-1 focus:ring-[#606c38]"
              />
              <button className="px-6 py-2 bg-[#606c38] text-white rounded-r-full hover:bg-[#505a2f] transition-colors">
                OK
              </button>
            </div>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#606c38]">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#606c38]">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#606c38]">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-gray-600">
          <p>&copy; 2024 RL Brechó. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;