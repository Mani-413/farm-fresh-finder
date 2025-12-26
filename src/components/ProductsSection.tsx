import React from 'react';
import { Package, Clock, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Product } from '@/data/products';
import ProductCard from './ProductCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ProductsSectionProps {
  products: Product[];
  onViewSteps: (product: Product) => void;
  onBuy: (product: Product) => void;
  searchQuery: string;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ products, onViewSteps, onBuy, searchQuery }) => {
  const { language, t } = useLanguage();

  const filteredProducts = products.filter((product) => {
    const name = language === 'en' ? product.name.en : product.name.ta;
    return name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           product.category.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const recentProducts = filteredProducts.filter((p) => p.isRecent);
  const recommendedProducts = filteredProducts.filter((p) => p.isRecommended);

  return (
    <section id="products" className="py-12">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {t('Agricultural Products', 'விவசாய பொருட்கள்')}
              </h2>
              <p className="text-muted-foreground">
                {t(
                  `Showing ${filteredProducts.length} products`,
                  `${filteredProducts.length} பொருட்கள் காட்டப்படுகின்றன`
                )}
              </p>
            </div>
            
            <TabsList className="bg-muted p-1 rounded-lg">
              <TabsTrigger value="all" className="flex items-center gap-2 data-[state=active]:bg-card">
                <Package className="w-4 h-4" />
                {t('All', 'அனைத்தும்')}
              </TabsTrigger>
              <TabsTrigger value="recent" className="flex items-center gap-2 data-[state=active]:bg-card">
                <Clock className="w-4 h-4" />
                {t('Recent', 'சமீபத்திய')}
              </TabsTrigger>
              <TabsTrigger value="recommended" id="recommended" className="flex items-center gap-2 data-[state=active]:bg-card">
                <Star className="w-4 h-4" />
                {t('Recommended', 'பரிந்துரை')}
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <ProductCard product={product} onViewSteps={onViewSteps} onBuy={onBuy} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t('No products found', 'பொருட்கள் எதுவும் கிடைக்கவில்லை')}
                </h3>
                <p className="text-muted-foreground">
                  {t('Try adjusting your search', 'உங்கள் தேடலை மாற்றி முயற்சிக்கவும்')}
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="recent" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {recentProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ProductCard product={product} onViewSteps={onViewSteps} onBuy={onBuy} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recommended" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {recommendedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ProductCard product={product} onViewSteps={onViewSteps} onBuy={onBuy} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductsSection;
