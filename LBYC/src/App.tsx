import { useState } from 'react';
import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import GetInvolved from './components/GetInvolved';
import Gallery from './components/Gallery';
import Merchandise from './components/Merchandise';
import Donation from './components/Donation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import News from './components/News';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'news'>('home');
  const handleNavigate = (page: 'home' | 'news') => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      
      {/* Conditional Page Rendering */}
      {currentPage === 'home' ? (
        <>
          {/* Main Content */}
          <main className="overflow-x-hidden">
            {/* Hero Section */}
            <Hero />
            
            {/* About Us Section */}
            <About />
            
            {/* Programs Section */}
            <Programs />
            
            {/* Get Involved Section */}
            <GetInvolved />
            
            {/* Gallery Section */}
            <Gallery />
            
            {/* Merchandise Section */}
            <Merchandise />
            
            {/* Donation Section */}
            <Donation />
            
            {/* Contact Section */}
            <Contact />
          </main>
          
          {/* Footer */}
          <Footer />
          
          {/* Floating Donate Button for Mobile */}
          <motion.div
            className="fixed bottom-6 right-6 z-40 md:hidden"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.button
              onClick={() => {
                const element = document.querySelector('#donate');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-14 h-14 bg-[#1d573f] hover:bg-[#164530] text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  '0 4px 20px rgba(29, 87, 63, 0.3)',
                  '0 6px 30px rgba(29, 87, 63, 0.5)',
                  '0 4px 20px rgba(29, 87, 63, 0.3)'
                ]
              }}
              transition={{ 
                boxShadow: { 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }
              }}
            >
              <span className="text-2xl">❤️</span>
            </motion.button>
          </motion.div>
        </>
      ) : (
        /* News Page */
        <News onNavigateHome={handleNavigateHome} />
      )}
    </div>
  );
}