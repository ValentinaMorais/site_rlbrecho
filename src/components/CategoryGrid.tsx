import React from 'react';

const categories = [
  {
    name: 'Conjuntos',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Vestidos',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Acessórios',
    image: 'https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Festa Junina',
    image: 'https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&fit=crop&q=80&w=600',
  },
];

function CategoryGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Categorias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative h-64 overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-semibold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryGrid;