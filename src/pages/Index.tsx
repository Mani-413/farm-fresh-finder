import React, { useState } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SandTypeSelector from '@/components/SandTypeSelector';
import ProductsSection from '@/components/ProductsSection';
import ProductStepsModal from '@/components/ProductStepsModal';
import BuyProductModal from '@/components/BuyProductModal';
import Footer from '@/components/Footer';
import { products, Product } from '@/data/products';

const Index: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSandType, setSelectedSandType] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buyProduct, setBuyProduct] = useState<Product | null>(null);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleViewSteps = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleBuy = (product: Product) => {
    setBuyProduct(product);
    setIsBuyModalOpen(true);
  };

  const filteredProducts = selectedSandType
    ? products.filter((p) => p.sandTypes.includes(selectedSandType))
    : products;

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection onSearch={handleSearch} />
          <SandTypeSelector
            selectedSandType={selectedSandType}
            onSelect={setSelectedSandType}
          />
          <ProductsSection
            products={filteredProducts}
            onViewSteps={handleViewSteps}
            onBuy={handleBuy}
            searchQuery={searchQuery}
          />
        </main>
        <Footer />
        <ProductStepsModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        <BuyProductModal
          product={buyProduct}
          isOpen={isBuyModalOpen}
          onClose={() => setIsBuyModalOpen(false)}
        />
      </div>
    </LanguageProvider>
  );
};

export default Index;
