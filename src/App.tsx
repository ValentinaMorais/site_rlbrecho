import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import FeaturedSection from './components/FeaturedSection';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import SizeGuide from './components/SizeGuide';
import ExchangePolicy from './components/ExchangePolicy';
import Contact from './components/Contact';
import RentalAgreement from './components/RentalAgreement';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f7f5]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <div className="flex-1 lg:flex-none text-center lg:text-left">
              <h1 className="text-2xl font-semibold text-[#606c38]">RL Brechó</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-1 justify-center">
              <Navbar />
            </nav>

            {/* Search and Cart */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Search size={20} className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  className="bg-transparent border-none focus:outline-none ml-2 w-40"
                />
              </div>
              <button className="p-2">
                <ShoppingBag size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              <Navbar />
              <div className="mt-4 flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Search size={20} className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  className="bg-transparent border-none focus:outline-none ml-2 w-full"
                />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        <CategoryGrid />
        <FeaturedSection />
        <FAQ />
        <SizeGuide />
        <ExchangePolicy />
        <Contact />
        <RentalAgreement />
      </main>

      <Footer />
    </div>
  );
}

export default App