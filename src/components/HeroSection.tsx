import React, { useState } from 'react';
import { Search, Sprout, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSearch }) => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const features = [
    { icon: Sprout, label: t('Organic Options', 'இயற்கை விருப்பங்கள்') },
    { icon: TrendingUp, label: t('Best Prices', 'சிறந்த விலைகள்') },
    { icon: Shield, label: t('Quality Assured', 'தரம் உறுதி') },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary-foreground rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border-2 border-primary-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-primary-foreground rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4 animate-slide-up">
            {t(
              'Premium Agricultural Products for Modern Farmers',
              'நவீன விவசாயிகளுக்கான தரமான விவசாய பொருட்கள்'
            )}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-slide-up stagger-1">
            {t(
              'Find the right fertilizers, pesticides, and soil conditioners for your land',
              'உங்கள் நிலத்திற்கான சரியான உரங்கள், பூச்சிக்கொல்லிகள் மற்றும் மண் மேம்பாடுகளைக் கண்டறியுங்கள்'
            )}
          </p>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-10 animate-slide-up stagger-2">
            <div className="flex gap-2 bg-card/95 backdrop-blur-sm p-2 rounded-xl shadow-elevated">
              <Input
                type="text"
                placeholder={t('Search products...', 'பொருட்களைத் தேடுங்கள்...')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground placeholder:text-muted-foreground"
              />
              <Button type="submit" variant="hero" size="lg">
                <Search className="w-5 h-5" />
                {t('Search', 'தேடு')}
              </Button>
            </div>
          </form>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up stagger-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full text-primary-foreground"
              >
                <feature.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
