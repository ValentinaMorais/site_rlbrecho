import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1920'
];

function Hero() {
  return (
    <div className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images[0]}
          alt="Fashion collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Coleção Festa Junina 2024
          </h2>
          <p className="text-xl text-white mb-8">
            Alugue looks exclusivos para sua festa junina
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Ver Coleção
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;