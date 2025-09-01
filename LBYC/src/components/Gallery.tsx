import { motion, AnimatePresence, useMotionValue, useDragControls } from 'motion/react';
import { Calendar, MapPin, Users, Play, Image as ImageIcon, ChevronLeft, ChevronRight, Maximize2, Share2, Pause, PlayIcon, X } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect, useCallback, useRef } from 'react';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { Skeleton } from './ui/skeleton';

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<any>(null);
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: number]: boolean }>({});
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      title: 'Education Support Program',
      description: 'Distributing school supplies to underprivileged children in rural Punjab, ensuring every child has access to quality education and learning materials.',
      location: 'Ludhiana District',
      date: 'March 2024',
      participants: '150+ children',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMGluZGlhfGVufDF8fHx8MTc1NjM3ODAzNHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Education',
      impact: 'Improved literacy rates by 40% in target areas'
    },
    {
      id: 2,
      type: 'image',
      title: 'Health Camp Initiative',
      description: 'Free medical checkups and medicine distribution in village communities, providing healthcare access to underserved populations.',
      location: 'Jalandhar Rural',
      date: 'February 2024',
      participants: '300+ people served',
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBjYW1wJTIwaW5kaWF8ZW58MXx8fHwxNzU2Mzc4MDM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Healthcare',
      impact: 'Early detection of health issues in 85% of participants'
    },
    {
      id: 3,
      type: 'video',
      title: 'Disaster Relief Operations',
      description: 'Emergency response during recent flooding in Punjab districts, providing immediate aid and long-term rehabilitation support.',
      location: 'Multiple Districts',
      date: 'January 2024',
      participants: '500+ families aided',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNhc3RlciUyMHJlbGllZiUyMGluZGlhfGVufDF8fHx8MTc1NjM3ODAzNHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Disaster Relief',
      impact: 'Restored normalcy for 95% of affected families within 30 days'
    },
    {
      id: 4,
      type: 'image',
      title: 'Youth Empowerment Workshop',
      description: 'Skill development and leadership training for young adults, fostering entrepreneurship and career opportunities.',
      location: 'Amritsar Center',
      date: 'April 2024',
      participants: '80+ youth trained',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMHRyYWluaW5nJTIwaW5kaWF8ZW58MXx8fHwxNzU2Mzc4MDM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Youth Development',
      impact: '70% of participants started their own micro-enterprises'
    },
    {
      id: 5,
      type: 'video',
      title: 'Community Outreach Event',
      description: 'Awareness campaign and community engagement programs to build stronger, more resilient local communities.',
      location: 'Punjab Villages',
      date: 'March 2024',
      participants: '1000+ people reached',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBvdXRyZWFjaCUyMGluZGlhfGVufDF8fHx8MTc1NjM3ODAzNHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Community',
      impact: 'Increased community participation by 60% in local initiatives'
    },
    {
      id: 6,
      type: 'image',
      title: 'Volunteer Training Session',
      description: 'Training new volunteers for upcoming community programs, building capacity for sustainable impact.',
      location: 'LBYC Headquarters',
      date: 'April 2024',
      participants: '45 new volunteers',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NTYzNzgwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Training',
      impact: '90% volunteer retention rate after 6 months'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Education': 'bg-[#fed106] text-black',
      'Healthcare': 'bg-[#396c9f] text-white',
      'Disaster Relief': 'bg-[#1d573f] text-white',
      'Youth Development': 'bg-[#1d573f] text-white',
      'Community': 'bg-black text-white',
      'Training': 'bg-purple-600 text-white'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-600 text-white';
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isTransitioning) {
      autoPlayRef.current = setTimeout(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [currentIndex, isAutoPlaying, isTransitioning]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isFullscreen) return;
      
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          prevSlide();
          break;
        case 'ArrowRight':
          event.preventDefault();
          nextSlide();
          break;
        case ' ':
          event.preventDefault();
          setIsAutoPlaying(prev => !prev);
          break;
        case 'Escape':
          setIsFullscreen(false);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [galleryItems.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [galleryItems.length, isTransitioning]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [currentIndex, isTransitioning]);

  // Touch handlers for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const handleImageLoad = (id: number) => {
    setImagesLoaded(prev => ({ ...prev, [id]: true }));
  };

  const openFullscreen = (item: any) => {
    setFullscreenImage(item);
    setIsFullscreen(true);
    setIsAutoPlaying(false);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setFullscreenImage(null);
  };

  const shareImage = async (item: any) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: item.description,
          url: item.image
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(item.image);
    }
  };

  const getVisibleItems = () => {
    const items = [];
    const totalItems = galleryItems.length;
    
    // Get previous 2 items for left stack
    for (let i = 2; i >= 1; i--) {
      items.push({
        ...galleryItems[(currentIndex - i + totalItems) % totalItems],
        position: 'left',
        stackOrder: i
      });
    }
    
    // Current item (center)
    items.push({
      ...galleryItems[currentIndex],
      position: 'center',
      stackOrder: 0
    });
    
    // Get next 2 items for right stack
    for (let i = 1; i <= 2; i++) {
      items.push({
        ...galleryItems[(currentIndex + i) % totalItems],
        position: 'right',
        stackOrder: i
      });
    }
    
    return items;
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Gallery & Impact Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See our work in action through photos and videos from our programs across Punjab. 
            Every image tells a story of hope, community, and positive change.
          </p>
          
          {/* Controls Info */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <span className="hidden sm:inline">Use arrow keys or</span> swipe to navigate
            </span>
            <span className="flex items-center gap-1">
              Press spacebar to {isAutoPlaying ? 'pause' : 'resume'} auto-play
            </span>
          </div>
        </motion.div>

        {/* Enhanced Carousel Container */}
        <div 
          ref={containerRef}
          className="relative w-full mb-16"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="flex items-center justify-center relative h-[500px] lg:h-[600px] overflow-hidden">
            
            {/* Enhanced Navigation Arrows */}
            <Button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="absolute left-4 lg:left-8 z-30 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/95 hover:bg-white shadow-2xl border border-gray-200 text-gray-700 hover:text-black transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7" />
            </Button>
            
            <Button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="absolute right-4 lg:right-8 z-30 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/95 hover:bg-white shadow-2xl border border-gray-200 text-gray-700 hover:text-black transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7" />
            </Button>

            {/* Auto-play Control */}
            <Button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg border border-gray-200 text-gray-700 hover:text-black transition-all duration-300"
              aria-label={isAutoPlaying ? 'Pause auto-play' : 'Resume auto-play'}
            >
              {isAutoPlaying ? <Pause className="w-4 h-4" /> : <PlayIcon className="w-4 h-4" />}
            </Button>

            {/* Enhanced Carousel Items */}
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                {getVisibleItems().map((item, index) => {
                  const isCenter = item.position === 'center';
                  const isLeft = item.position === 'left';
                  const isRight = item.position === 'right';
                  const isLoaded = imagesLoaded[item.id];
                  
                  return (
                    <motion.div
                      key={`${item.id}-${currentIndex}-${index}`}
                      initial={{ 
                        opacity: 0, 
                        scale: 0.6,
                        rotateY: isLeft ? -45 : isRight ? 45 : 0,
                        x: isLeft ? -400 : isRight ? 400 : 0
                      }}
                      animate={{
                        opacity: isCenter ? 1 : 0.7,
                        scale: isCenter ? 1 : 0.75,
                        rotateY: 0,
                        x: isCenter ? 0 : isLeft ? -160 - (item.stackOrder * 25) : 160 + (item.stackOrder * 25),
                        y: isCenter ? 0 : item.stackOrder * 15,
                        zIndex: isCenter ? 20 : 10 - item.stackOrder,
                      }}
                      exit={{ 
                        opacity: 0, 
                        scale: 0.6,
                        rotateY: isLeft ? 45 : isRight ? -45 : 0,
                        x: isLeft ? -400 : isRight ? 400 : 0
                      }}
                      transition={{ 
                        duration: 0.8, 
                        ease: [0.25, 0.1, 0.25, 1],
                        type: "spring",
                        stiffness: 100,
                        damping: 20
                      }}
                      className={`absolute cursor-pointer transform-gpu ${
                        !isCenter ? 'hover:scale-[0.8] transition-transform duration-300' : ''
                      }`}
                      onClick={() => !isCenter && goToSlide(galleryItems.findIndex(gi => gi.id === item.id))}
                      style={{
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden'
                      }}
                    >
                      <Card className={`overflow-hidden shadow-2xl border-0 ${
                        isCenter 
                          ? 'w-[320px] sm:w-[380px] lg:w-[550px] h-[400px] sm:h-[450px] lg:h-[520px] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)]' 
                          : 'w-[240px] sm:w-[280px] lg:w-[350px] h-[280px] sm:h-[320px] lg:h-[380px] shadow-[0_15px_35px_-10px_rgba(0,0,0,0.2)]'
                      } ${isCenter ? 'ring-4 ring-[#fed106]/30' : ''}`}>
                        <div className="relative h-2/3">
                          {/* Loading Skeleton */}
                          {!isLoaded && (
                            <Skeleton className="w-full h-full absolute inset-0 z-10" />
                          )}
                          
                          <ImageWithFallback
                            src={item.image}
                            alt={item.title}
                            className={`w-full h-full object-cover transition-all duration-700 hover:scale-110 ${
                              isLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                            onLoad={() => handleImageLoad(item.id)}
                            loading="lazy"
                          />
                          
                          <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent ${isCenter ? 'opacity-30' : 'opacity-50'}`}></div>
                          
                          {/* Type Indicator */}
                          <div className="absolute top-4 left-4">
                            {item.type === 'video' ? (
                              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#1d573f] rounded-full flex items-center justify-center shadow-lg">
                                <Play className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                              </div>
                            ) : (
                              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#fed106] rounded-full flex items-center justify-center shadow-lg">
                                <ImageIcon className="w-4 h-4 lg:w-5 lg:h-5 text-black" />
                              </div>
                            )}
                          </div>

                          {/* Category Badge */}
                          <div className="absolute top-4 right-4">
                            <Badge className={`${getCategoryColor(item.category)} hover:${getCategoryColor(item.category)} shadow-lg text-xs`}>
                              {item.category}
                            </Badge>
                          </div>

                          {/* Center Image Actions */}
                          {isCenter && (
                            <>
                              <motion.div 
                                className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/50 transition-all duration-500"
                                whileHover={{ backdropFilter: "blur(4px)" }}
                              >
                                <div className="flex gap-3">
                                  <Button 
                                    onClick={() => openFullscreen(item)}
                                    className="bg-white/95 text-black hover:bg-white rounded-full px-4 py-2 shadow-xl transform hover:scale-105 transition-all duration-300"
                                  >
                                    <Maximize2 className="w-4 h-4 mr-2" />
                                    View
                                  </Button>
                                  <Button 
                                    onClick={() => shareImage(item)}
                                    className="bg-white/95 text-black hover:bg-white rounded-full px-4 py-2 shadow-xl transform hover:scale-105 transition-all duration-300"
                                  >
                                    <Share2 className="w-4 h-4" />
                                  </Button>
                                </div>
                              </motion.div>

                              {/* Progress Bar */}
                              {isAutoPlaying && (
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
                                  <motion.div
                                    className="h-full bg-[#fed106]"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 5, ease: "linear" }}
                                    key={currentIndex}
                                  />
                                </div>
                              )}
                            </>
                          )}
                        </div>

                        <CardContent className="p-3 sm:p-4 lg:p-6 h-1/3 bg-white">
                          <h3 className={`font-bold text-black mb-2 ${isCenter ? 'text-lg lg:text-xl' : 'text-sm lg:text-base'} line-clamp-2`}>
                            {item.title}
                          </h3>
                          {isCenter && (
                            <>
                              <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                                {item.description}
                              </p>
                              <div className="space-y-2 text-xs text-gray-500">
                                <div className="flex items-center">
                                  <MapPin className="w-3 h-3 mr-2 text-[#396c9f] flex-shrink-0" />
                                  <span className="truncate">{item.location}</span>
                                </div>
                                <div className="flex items-center">
                                  <Calendar className="w-3 h-3 mr-2 text-[#fed106] flex-shrink-0" />
                                  <span>{item.date}</span>
                                </div>
                                <div className="flex items-center">
                                  <Users className="w-3 h-3 mr-2 text-[#1d573f] flex-shrink-0" />
                                  <span className="font-medium text-black">{item.participants}</span>
                                </div>
                                {item.impact && (
                                  <div className="mt-2 p-2 bg-[#fed106]/10 rounded text-xs">
                                    <strong className="text-[#1d573f]">Impact:</strong> {item.impact}
                                  </div>
                                )}
                              </div>
                            </>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Enhanced Pagination Dots */}
          <div className="flex justify-center mt-10 space-x-3">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`transition-all duration-500 rounded-full ${
                  index === currentIndex 
                    ? 'w-12 h-4 bg-gradient-to-r from-[#fed106] to-[#e6be05] shadow-lg' 
                    : 'w-4 h-4 bg-gray-300 hover:bg-gray-400 hover:scale-125'
                } disabled:opacity-50`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Fullscreen Modal */}
        <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
          <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95">
            {fullscreenImage && (
              <div className="relative w-full h-full flex items-center justify-center">
                <Button
                  onClick={closeFullscreen}
                  className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white border-0"
                >
                  <X className="w-6 h-6" />
                </Button>
                
                <ImageWithFallback
                  src={fullscreenImage.image}
                  alt={fullscreenImage.title}
                  className="max-w-full max-h-full object-contain"
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">{fullscreenImage.title}</h3>
                    <p className="text-gray-300 mb-4">{fullscreenImage.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {fullscreenImage.location}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {fullscreenImage.date}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {fullscreenImage.participants}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-[#fed106]/5 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#fed106]/5 via-transparent to-[#396c9f]/5"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
                Be Part of Our Story
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join us in creating more positive impact stories across Punjab. Your involvement, 
                whether through volunteering or donations, helps us reach more communities in need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => {
                    const element = document.querySelector('#get-involved');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  size="lg"
                  className="bg-gradient-to-r from-[#fed106] to-[#e6be05] hover:from-[#e6be05] hover:to-[#d1a904] text-black px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                >
                  Get Involved
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  onClick={() => {
                    const element = document.querySelector('#donate');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  size="lg"
                  className="bg-gradient-to-r from-[#1d573f] to-[#164530] hover:from-[#164530] hover:to-[#0f3a28] text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                >
                  Support Our Cause
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}