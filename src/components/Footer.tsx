import React from 'react';
import { Leaf, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-earth text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{t('AgriMart', 'அக்ரிமார்ட்')}</h3>
                <p className="text-xs text-primary-foreground/70">
                  {t('Farmer Products Portal', 'விவசாய பொருட்கள் போர்டல்')}
                </p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              {t(
                'Your trusted partner for quality agricultural products. Serving farmers across Tamil Nadu.',
                'தரமான விவசாய பொருட்களுக்கான உங்கள் நம்பகமான பங்காளி. தமிழ்நாடு முழுவதும் விவசாயிகளுக்கு சேவை.'
              )}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{t('Contact Us', 'தொடர்பு கொள்ளுங்கள்')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                1800-123-4567 ({t('Toll Free', 'கட்டணமில்லா')})
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                support@agrimart.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                {t('Chennai, Tamil Nadu, India', 'சென்னை, தமிழ்நாடு, இந்தியா')}
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('Quick Links', 'விரைவு இணைப்புகள்')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#products" className="hover:underline">
                  {t('All Products', 'அனைத்து பொருட்கள்')}
                </a>
              </li>
              <li>
                <a href="#sand-types" className="hover:underline">
                  {t('Soil Types', 'மண் வகைகள்')}
                </a>
              </li>
              <li>
                <a href="#recommended" className="hover:underline">
                  {t('Recommended', 'பரிந்துரை')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/70">
          <p>
            © 2024 AgriMart. {t('All rights reserved.', 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
