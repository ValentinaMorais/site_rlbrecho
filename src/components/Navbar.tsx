import React from 'react';

const navItems = [
  { name: 'Conjuntos', href: '#' },
  { name: 'Acessórios', href: '#' },
  { name: 'Vestidos', href: '#' },
  { name: 'Blusas e Croppeds', href: '#' },
  { name: 'Shorts e Calças', href: '#' },
  { name: 'Biquínis', href: '#' },
  { name: 'Sapatos', href: '#' },
  { name: 'Sale', href: '#' },
];

function Navbar() {
  return (
    <ul className="lg:flex lg:items-center lg:space-x-8 space-y-2 lg:space-y-0">
      {navItems.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            className="text-gray-700 hover:text-[#606c38] transition-colors block lg:inline-block font-medium"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;