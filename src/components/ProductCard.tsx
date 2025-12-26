import React from 'react';
import { ThumbsUp, ThumbsDown, ArrowRight, Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onViewSteps: (product: Product) => void;
  onBuy: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewSteps, onBuy }) => {
  const { language, t } = useLanguage();

  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-40 bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
            <span className="text-3xl">🌱</span>
          </div>
        </div>
        {product.isRecommended && (
          <Badge className="absolute top-3 left-3 bg-success text-primary-foreground">
            <Star className="w-3 h-3 mr-1" />
            {t('Recommended', 'பரிந்துரை')}
          </Badge>
        )}
        {product.isRecent && (
          <Badge className="absolute top-3 right-3 bg-warning text-foreground">
            {t('New', 'புதிய')}
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-foreground text-lg leading-tight">
            {language === 'en' ? product.name.en : product.name.ta}
          </h3>
          <span className="text-primary font-bold text-sm whitespace-nowrap ml-2">
            {product.price}
          </span>
        </div>

        <Badge variant="outline" className="mb-3 capitalize">
          {product.category}
        </Badge>

        {/* Advantages */}
        <div className="mb-3">
          <div className="flex items-center gap-1 text-success text-xs font-medium mb-1">
            <ThumbsUp className="w-3 h-3" />
            {t('Advantages', 'நன்மைகள்')}
          </div>
          <ul className="text-xs text-muted-foreground space-y-0.5">
            {(language === 'en' ? product.advantages.en : product.advantages.ta)
              .slice(0, 2)
              .map((adv, i) => (
                <li key={i} className="flex items-start gap-1">
                  <span className="text-success">•</span>
                  {adv}
                </li>
              ))}
          </ul>
        </div>

        {/* Disadvantages */}
        <div className="mb-4">
          <div className="flex items-center gap-1 text-destructive text-xs font-medium mb-1">
            <ThumbsDown className="w-3 h-3" />
            {t('Disadvantages', 'குறைபாடுகள்')}
          </div>
          <ul className="text-xs text-muted-foreground space-y-0.5">
            {(language === 'en' ? product.disadvantages.en : product.disadvantages.ta)
              .slice(0, 2)
              .map((dis, i) => (
                <li key={i} className="flex items-start gap-1">
                  <span className="text-destructive">•</span>
                  {dis}
                </li>
              ))}
          </ul>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            onClick={() => onViewSteps(product)}
          >
            {t('Steps', 'படிகள்')}
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-success hover:bg-success/90 text-primary-foreground"
            onClick={() => onBuy(product)}
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            {t('Buy', 'வாங்கு')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
