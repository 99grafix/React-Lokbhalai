import { motion } from 'motion/react';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from 'figma:asset/80927203b969f199d0e02a6e035db7038a3cbd68.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Get Involved', href: '#get-involved' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Merchandise', href: '#merchandise' },
    { name: 'Contact', href: '#contact' },
  ];

  const programs = [
    { name: 'Education Support', href: '#programs' },
    { name: 'Health Camps', href: '#programs' },
    { name: 'Disaster Relief', href: '#programs' },
    { name: 'Youth Empowerment', href: '#programs' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src={logoImage} 
                  alt="Lok Bhalai Youth Club Logo" 
                  className="w-12 h-12 object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">Lok Bhalai Youth Club</h3>
                <p className="text-sm text-gray-400">Registered NGO, Punjab</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Serving Punjab's communities for over 8 years, we stand with those in need during tough times, providing hope, support, and empowerment.
            </p>
            
            {/* Final Donate Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection('#donate')}
                className="bg-[#1d573f] hover:bg-[#164530] text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Heart className="w-4 h-4 mr-2" />
                Donate Now
              </Button>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-[#fed106] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.name}>
                  <button
                    onClick={() => scrollToSection(program.href)}
                    className="text-gray-300 hover:text-[#fed106] transition-colors duration-300 text-sm"
                  >
                    {program.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#fed106] flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Sector 15, Model Town<br />
                  Ludhiana, Punjab 141001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#fed106] flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 90414-90074</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#fed106] flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@lokbhalaiyouth.org</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#fed106] hover:text-black transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>&copy; 2025 Lok Bhalai Youth Club. All rights reserved.</p>
              <p className="mt-1">Registered NGO | CIN: U85300PB2016NPL045123</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('#contact')}
                className="text-sm text-gray-400 hover:text-[#fed106] transition-colors duration-300"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="text-sm text-gray-400 hover:text-[#fed106] transition-colors duration-300"
              >
                Terms of Service
              </button>
              
              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className="w-10 h-10 bg-[#fed106] hover:bg-[#e6be05] rounded-full flex items-center justify-center transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Back to Top"
              >
                <ArrowUp className="w-5 h-5 text-black" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}