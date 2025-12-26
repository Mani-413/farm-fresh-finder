import React, { useState } from 'react';
import { Phone, MapPin, Globe, ChevronDown, Leaf, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cities, shops } from '@/data/products';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [showShops, setShowShops] = useState(false);

  const cityShops = selectedCity ? shops.filter(s => s.city === selectedCity) : [];

  return (
    <>
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between py-2 border-b border-border/50">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                {t('Helpline:', 'உதவி எண்:')} 1800-123-4567
              </span>
            </div>
            
            {/* City Selector */}
            <div className="flex items-center gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {selectedCity || t('Select City', 'நகரத்தை தேர்ந்தெடுக்கவும்')}
                    <ChevronDown className="w-3 h-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-card border border-border z-50">
                  {cities.map(city => (
                    <DropdownMenuItem
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                        setShowShops(true);
                      }}
                      className="cursor-pointer hover:bg-muted"
                    >
                      {city}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Language Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}
                className="flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                {language === 'en' ? 'தமிழ்' : 'English'}
              </Button>
            </div>
          </div>

          {/* Main Header */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center shadow-card">
                <Leaf className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  {t('AgriMart', 'அக்ரிமார்ட்')}
                </h1>
                <p className="text-xs text-muted-foreground">
                  {t('Farmer Products Portal', 'விவசாய பொருட்கள் போர்டல்')}
                </p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                {t('Products', 'பொருட்கள்')}
              </a>
              <a href="#sand-types" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                {t('Soil Types', 'மண் வகைகள்')}
              </a>
              <a href="#recommended" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                {t('Recommended', 'பரிந்துரை')}
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Shop Dialog */}
      <Dialog open={showShops} onOpenChange={setShowShops}>
        <DialogContent className="max-w-md bg-card">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              {t(`Chemical Shops in ${selectedCity}`, `${selectedCity} இல் உள்ள ரசாயன கடைகள்`)}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {cityShops.map(shop => (
              <div key={shop.id} className="p-4 rounded-lg bg-muted/50 border border-border">
                <h4 className="font-semibold text-foreground">{shop.name}</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === 'en' ? shop.address.en : shop.address.ta}
                </p>
                <a
                  href={`tel:${shop.phone}`}
                  className="flex items-center gap-2 mt-2 text-primary font-medium text-sm hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  {shop.phone}
                </a>
              </div>
            ))}
            {cityShops.length === 0 && (
              <p className="text-center text-muted-foreground py-4">
                {t('No shops found in this city', 'இந்த நகரத்தில் கடைகள் இல்லை')}
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
