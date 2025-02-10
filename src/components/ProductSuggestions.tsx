import React from 'react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface ProductSuggestionsProps {
  currentProductId: string;
  category: string;
}

function ProductSuggestions({ currentProductId, category }: ProductSuggestionsProps) {
  // Simulated related products - in a real app, this would come from your database
  const suggestions = [
    {
      id: '1',
      name: 'Laço de Cabelo',
      price: 'R$ 15,90/dia',
      image: 'https://images.unsplash.com/photo-1625794084867-8ddd239946b1?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: '2',
      name: 'Colar Delicado',
      price: 'R$ 19,90/dia',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: '3',
      name: 'Bolsa Clutch',
      price: 'R$ 29,90/dia',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=400',
    },
  ];

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-semibold mb-8">Compre Também</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {suggestions.map((product) => (
          <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-64">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-medium mb-2">{product.name}</h4>
              <p className="text-[#606c38] font-medium">{product.price}</p>
              <button className="mt-4 w-full bg-[#606c38] text-white py-2 rounded-full hover:bg-[#505a2f] transition-colors">
                Adicionar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSuggestions;