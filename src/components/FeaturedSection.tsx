import React from 'react';

const featuredItems = [
  {
    name: 'Vestido Floral',
    price: 'R$ 89,90/dia',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Conjunto Xadrez',
    price: 'R$ 79,90/dia',
    image: 'https://images.unsplash.com/photo-1525450824786-227cbef70703?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Vestido Festa',
    price: 'R$ 129,90/dia',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600',
  },
];

function FeaturedSection() {
  return (
    <section className="py-16 bg-[#f8f7f5]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Destaques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div key={item.name} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-80">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-[#606c38] font-medium">{item.price}</p>
                <button className="mt-4 w-full bg-[#606c38] text-white py-2 rounded-full hover:bg-[#505a2f] transition-colors">
                  Alugar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;