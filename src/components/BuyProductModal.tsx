import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Store, ArrowRight, ArrowLeft, CheckCircle, ShoppingCart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Product, Shop, shops, cities } from '@/data/products';

interface BuyProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'city' | 'shops' | 'confirm';

const BuyProductModal: React.FC<BuyProductModalProps> = ({ product, isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const [step, setStep] = useState<Step>('city');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);

  const handleClose = () => {
    setStep('city');
    setSelectedCity('');
    setSelectedShop(null);
    onClose();
  };

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setStep('shops');
  };

  const handleShopSelect = (shop: Shop) => {
    setSelectedShop(shop);
    setStep('confirm');
  };

  const handleBack = () => {
    if (step === 'shops') {
      setStep('city');
      setSelectedCity('');
    } else if (step === 'confirm') {
      setStep('shops');
      setSelectedShop(null);
    }
  };

  const cityShops = shops.filter(shop => shop.city === selectedCity);

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-primary" />
            {t('Buy Product', 'பொருளை வாங்கு')}
          </DialogTitle>
        </DialogHeader>

        {/* Product Info */}
        <div className="bg-muted/50 rounded-lg p-3 mb-4">
          <h3 className="font-semibold text-foreground">
            {language === 'en' ? product.name.en : product.name.ta}
          </h3>
          <p className="text-primary font-bold">{product.price}</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {['city', 'shops', 'confirm'].map((s, i) => (
            <React.Fragment key={s}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                step === s ? 'bg-primary text-primary-foreground' : 
                (step === 'shops' && s === 'city') || (step === 'confirm' && (s === 'city' || s === 'shops')) 
                  ? 'bg-success text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                {(step === 'shops' && s === 'city') || (step === 'confirm' && (s === 'city' || s === 'shops')) 
                  ? <CheckCircle className="w-4 h-4" /> : i + 1}
              </div>
              {i < 2 && <div className="w-8 h-0.5 bg-muted" />}
            </React.Fragment>
          ))}
        </div>

        {/* Step 1: City Selection */}
        {step === 'city' && (
          <div className="space-y-3">
            <h4 className="font-medium text-foreground mb-3">
              {t('Select Your City', 'உங்கள் நகரத்தைத் தேர்ந்தெடுக்கவும்')}
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {cities.map((city) => (
                <Button
                  key={city}
                  variant="outline"
                  className="h-auto py-3 justify-start gap-2 hover:bg-primary hover:text-primary-foreground"
                  onClick={() => handleCitySelect(city)}
                >
                  <MapPin className="w-4 h-4" />
                  {city}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Shop Selection */}
        {step === 'shops' && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-3">
              <Button variant="ghost" size="sm" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <h4 className="font-medium text-foreground">
                {t(`Shops in ${selectedCity}`, `${selectedCity}இல் உள்ள கடைகள்`)}
              </h4>
            </div>
            
            {cityShops.length > 0 ? (
              <div className="space-y-2">
                {cityShops.map((shop) => (
                  <button
                    key={shop.id}
                    className="w-full p-3 border border-border rounded-lg text-left hover:bg-muted/50 hover:border-primary transition-colors"
                    onClick={() => handleShopSelect(shop)}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <Store className="w-4 h-4 text-primary" />
                          <span className="font-medium">{shop.name}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {language === 'en' ? shop.address.en : shop.address.ta}
                        </p>
                        <div className="flex items-center gap-1 text-sm text-success mt-1">
                          <Phone className="w-3 h-3" />
                          {shop.phone}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-4">
                {t('No shops found in this city', 'இந்த நகரத்தில் கடைகள் இல்லை')}
              </p>
            )}
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 'confirm' && selectedShop && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <Button variant="ghost" size="sm" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <h4 className="font-medium text-foreground">
                {t('Confirm Purchase', 'கொள்முதலை உறுதிப்படுத்தவும்')}
              </h4>
            </div>

            <div className="bg-success/10 border border-success/30 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2 text-success font-medium">
                <CheckCircle className="w-5 h-5" />
                {t('Ready to Buy!', 'வாங்க தயாராக உள்ளது!')}
              </div>
              
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">{t('Product:', 'பொருள்:')}</span>
                  <span className="ml-2 font-medium">
                    {language === 'en' ? product.name.en : product.name.ta}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">{t('Price:', 'விலை:')}</span>
                  <span className="ml-2 font-medium text-primary">{product.price}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">{t('Shop:', 'கடை:')}</span>
                  <span className="ml-2 font-medium">{selectedShop.name}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">{t('Address:', 'முகவரி:')}</span>
                  <span className="ml-2">
                    {language === 'en' ? selectedShop.address.en : selectedShop.address.ta}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={`tel:${selectedShop.phone}`}
                className="w-full"
              >
                <Button className="w-full bg-success hover:bg-success/90">
                  <Phone className="w-4 h-4 mr-2" />
                  {t(`Call ${selectedShop.phone}`, `${selectedShop.phone} அழைக்கவும்`)}
                </Button>
              </a>
              <Button variant="outline" onClick={handleClose}>
                {t('Close', 'மூடு')}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BuyProductModal;
