import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from 'figma:asset/c0d473f6140d24474793ff7aa64fc177b6f8695a.png';

interface HeaderProps {
  currentPage: 'home' | 'news';
  onNavigate: (page: 'home' | 'news') => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home', page: 'home' as const },
    { name: 'About Us', href: '#about', page: 'home' as const },
    { name: 'Programs', href: '#programs', page: 'home' as const },
    { name: 'Get Involved', href: '#get-involved', page: 'home' as const },
    { name: 'Gallery', href: '#gallery', page: 'home' as const },
    { name: 'Merchandise', href: '#merchandise', page: 'home' as const },
    { name: 'News', href: '#news', page: 'news' as const },
    { name: 'Contact', href: '#contact', page: 'home' as const },
  ];

  const handleNavClick = (item: { name: string; href: string; page: 'home' | 'news' }) => {
    if (item.page === 'news') {
      onNavigate('news');
    } else if (item.name === 'Home') {
      onNavigate('home');
    } else {
      // For other sections, navigate to home first then scroll
      if (currentPage !== 'home') {
        onNavigate('home');
        // Small delay to allow page to render before scrolling
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Name */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 flex items-center justify-center">
              <img 
                src={logoImage} 
                alt="Lok Bhalai Youth Club Logo" 
                className="w-20 h-20 object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-black">Lok Bhalai Youth Club</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Registered NGO, Punjab</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="text-black hover:text-[#fed106] transition-colors cursor-pointer font-medium"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Donate Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                onClick={() => {
                  if (currentPage !== 'home') {
                    onNavigate('home');
                    setTimeout(() => {
                      const element = document.querySelector('#donate');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  } else {
                    const element = document.querySelector('#donate');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="bg-[#1d573f] hover:bg-[#164530] text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Heart className="w-4 h-4 mr-2" />
                Donate Now
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="lg:hidden mt-4 py-4 border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="text-left text-black hover:text-[#fed106] transition-colors py-2 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}