import React from 'react';
import { X, CheckCircle2, ThumbsUp, ThumbsDown, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Product } from '@/data/products';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface ProductStepsModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductStepsModal: React.FC<ProductStepsModalProps> = ({ product, isOpen, onClose }) => {
  const { language, t } = useLanguage();

  if (!product) return null;

  const steps = language === 'en' ? product.steps.en : product.steps.ta;
  const advantages = language === 'en' ? product.advantages.en : product.advantages.ta;
  const disadvantages = language === 'en' ? product.disadvantages.en : product.disadvantages.ta;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-foreground">
            <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
              <Package className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-xl font-bold">
                {language === 'en' ? product.name.en : product.name.ta}
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline" className="capitalize text-xs">
                  {product.category}
                </Badge>
                <span className="text-primary font-semibold">{product.price}</span>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Step by Step Process */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground text-sm font-bold">
                📋
              </span>
              {t('Step-by-Step Application Process', 'படிப்படியான பயன்பாட்டு செயல்முறை')}
            </h3>
            <div className="space-y-3">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 border border-border animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground">{step}</p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Advantages & Disadvantages */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-success/10 border border-success/20">
              <h4 className="font-semibold text-success flex items-center gap-2 mb-3">
                <ThumbsUp className="w-5 h-5" />
                {t('Advantages', 'நன்மைகள்')}
              </h4>
              <ul className="space-y-2">
                {advantages.map((adv, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="text-success mt-0.5">✓</span>
                    {adv}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h4 className="font-semibold text-destructive flex items-center gap-2 mb-3">
                <ThumbsDown className="w-5 h-5" />
                {t('Disadvantages', 'குறைபாடுகள்')}
              </h4>
              <ul className="space-y-2">
                {disadvantages.map((dis, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="text-destructive mt-0.5">✗</span>
                    {dis}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Suitable Soil Types */}
          <div className="p-4 rounded-lg bg-muted/50 border border-border">
            <h4 className="font-semibold text-foreground mb-3">
              {t('Suitable for Soil Types:', 'பொருத்தமான மண் வகைகள்:')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.sandTypes.map((type) => (
                <Badge key={type} className="bg-secondary text-secondary-foreground capitalize">
                  {type}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductStepsModal;
