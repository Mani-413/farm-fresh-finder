import React from 'react';
import { Layers, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { sandTypes, products } from '@/data/products';
import { Badge } from '@/components/ui/badge';

interface SandTypeSelectorProps {
  selectedSandType: string | null;
  onSelect: (sandTypeId: string | null) => void;
}

const SandTypeSelector: React.FC<SandTypeSelectorProps> = ({ selectedSandType, onSelect }) => {
  const { language, t } = useLanguage();

  const selectedType = sandTypes.find(s => s.id === selectedSandType);
  const recommendedProducts = selectedType
    ? products.filter(p => selectedType.recommendedProducts.includes(p.id))
    : [];

  return (
    <section id="sand-types" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full mb-4">
            <Layers className="w-5 h-5 text-secondary-foreground" />
            <span className="text-sm font-medium text-secondary-foreground">
              {t('Soil Analysis', 'மண் பகுப்பாய்வு')}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {t('Select Your Soil Type', 'உங்கள் மண் வகையைத் தேர்ந்தெடுக்கவும்')}
          </h2>
          <p className="text-muted-foreground">
            {t(
              'Get personalized product recommendations based on your soil',
              'உங்கள் மண்ணின் அடிப்படையில் தனிப்பயனாக்கப்பட்ட பொருள் பரிந்துரைகளைப் பெறுங்கள்'
            )}
          </p>
        </div>

        {/* Soil Type Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {sandTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => onSelect(selectedSandType === type.id ? null : type.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                selectedSandType === type.id
                  ? 'border-primary bg-primary/10 shadow-card'
                  : 'border-border bg-card hover:border-primary/50 hover:shadow-soft'
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-earth mb-3 flex items-center justify-center">
                <Layers className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">
                {language === 'en' ? type.name.en : type.name.ta}
              </h3>
              <p className="text-xs text-muted-foreground line-clamp-2">
                {language === 'en' ? type.description.en : type.description.ta}
              </p>
            </button>
          ))}
        </div>

        {/* Recommended Products for Selected Soil */}
        {selectedType && (
          <div className="animate-slide-up">
            <div className="flex items-center gap-2 mb-4">
              <ChevronRight className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">
                {t(
                  `Recommended Products for ${selectedType.name.en}`,
                  `${selectedType.name.ta} க்கு பரிந்துரைக்கப்பட்ட பொருட்கள்`
                )}
              </h3>
              <Badge className="bg-primary text-primary-foreground">
                {recommendedProducts.length} {t('products', 'பொருட்கள்')}
              </Badge>
            </div>
            <div className="flex flex-wrap gap-3">
              {recommendedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3 shadow-soft"
                >
                  <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                    🌱
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      {language === 'en' ? product.name.en : product.name.ta}
                    </p>
                    <p className="text-xs text-primary font-semibold">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SandTypeSelector;
