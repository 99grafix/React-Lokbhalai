import { motion } from 'motion/react';
import { GraduationCap, Heart, Shield, Users, ArrowRight, MapPin, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import disasterReliefImage from 'figma:asset/2581e44a3809c7a801593977e5627b92e7a66653.png';
import healthCampsImage from 'figma:asset/ae58ed03e0bc96a97f3553fd3c329299c99060bb.png';
import educationSupportImage from 'figma:asset/23573582e3749de9c2dbe5cbe10c4ede0004685e.png';
import youthEmpowermentImage from 'figma:asset/40d43a00e278b8eca4b18100381686356b06c58f.png';

// Enhanced image component with multiple fallback levels
function ProgramImage({ primarySrc, fallbackSrc, alt, className }: {
  primarySrc: string;
  fallbackSrc: string;
  alt: string;
  className: string;
}) {
  const [imageState, setImageState] = useState<'primary' | 'fallback' | 'error'>('primary');
  
  const handlePrimaryError = () => {
    setImageState('fallback');
  };
  
  const handleFallbackError = () => {
    setImageState('error');
  };

  if (imageState === 'error') {
    return <ImageWithFallback src="" alt={alt} className={className} />;
  }
  
  if (imageState === 'fallback') {
    return (
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        onError={handleFallbackError}
        loading="lazy"
      />
    );
  }
  
  return (
    <img
      src={primarySrc}
      alt={alt}
      className={className}
      onError={handlePrimaryError}
      loading="lazy"
    />
  );
}

export default function Programs() {
  const programs = [
    {
      icon: Shield,
      title: 'Disaster Relief',
      description: 'Emergency response during floods, storms, and other natural disasters affecting Punjab communities.',
      longDescription: 'Immediate response during emergencies providing food, shelter, medical aid, and rehabilitation support to disaster-affected families.',
      impact: '3,000+ families assisted',
      location: 'Punjab-wide Emergency Response',
      status: 'On-Call',
      color: 'bg-[#1d573f]',
      textColor: 'text-white',
      borderColor: 'border-[#1d573f]',
      features: ['Emergency Food', 'Temporary Shelter', 'Medical Aid', 'Rehabilitation'],
      imageUrl: disasterReliefImage,
      fallbackUrl: 'https://images.unsplash.com/photo-1660066522109-82af50d99488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNhc3RlciUyMHJlbGllZiUyMGZsb29kJTIwcmVzY3VlJTIwZW1lcmdlbmN5fGVufDF8fHx8MTc1NjQxMDA5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Heart,
      title: 'Health Camps',
      description: 'Free medical checkups, vaccinations, and health awareness programs in rural and urban communities.',
      longDescription: 'Regular health camps providing free medical consultations, basic treatments, and health education to communities with limited healthcare access.',
      impact: '5,000+ people treated',
      location: 'Rural Punjab Districts',
      status: 'Active',
      color: 'bg-[#396c9f]',
      textColor: 'text-white',
      borderColor: 'border-[#396c9f]',
      features: ['Free Checkups', 'Vaccinations', 'Medicine Distribution', 'Health Education'],
      imageUrl: healthCampsImage,
      fallbackUrl: 'https://images.unsplash.com/photo-1633893669122-a34e430e193b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoJTIwY2FtcCUyMHJ1cmFsJTIwZG9jdG9yfGVufDF8fHx8MTc1NjM5OTk2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: GraduationCap,
      title: 'Education Support',
      description: 'Providing scholarships, school supplies, and tutoring support to underprivileged children across Punjab.',
      longDescription: 'Our education program ensures no child is denied learning opportunities due to financial constraints. We provide school fees, books, uniforms, and after-school tutoring.',
      impact: '2,500+ students supported',
      location: 'Ludhiana, Jalandhar, Amritsar',
      status: 'Active',
      color: 'bg-[#fed106]',
      textColor: 'text-black',
      borderColor: 'border-[#fed106]',
      features: ['Scholarships', 'School Supplies', 'Tutoring', 'Career Guidance'],
      imageUrl: educationSupportImage,
      fallbackUrl: 'https://images.unsplash.com/photo-1636202339022-7d67f7447e3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMHJ1cmFsJTIwc2Nob29sfGVufDF8fHx8MTc1NjM5OTk2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Users,
      title: 'Youth Empowerment',
      description: 'Skill development workshops, leadership training, and employment opportunities for young people.',
      longDescription: 'Comprehensive youth development programs including vocational training, leadership workshops, and job placement assistance.',
      impact: '1,200+ youth trained',
      location: 'Urban Punjab Centers',
      status: 'Expanding',
      color: 'bg-black',
      textColor: 'text-white',
      borderColor: 'border-black',
      features: ['Skill Training', 'Leadership Development', 'Job Placement', 'Entrepreneurship'],
      imageUrl: youthEmpowermentImage,
      fallbackUrl: 'https://images.unsplash.com/photo-1545886082-e66c6b9e011a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGVtcG93ZXJtZW50JTIwdHJhaW5pbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NTYzOTk5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Programs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We run comprehensive programs addressing the most pressing needs of Punjab's communities. 
            Each program is designed for maximum impact and sustainable development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 ${program.borderColor} overflow-hidden`}>
                {/* Program Image */}
                <div className="relative h-48 overflow-hidden">
                  <ProgramImage
                    primarySrc={program.imageUrl}
                    fallbackSrc={program.fallbackUrl}
                    alt={`${program.title} - Lok Bhalai Youth Club`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {/* Overlay with status badge */}
                  <div className="absolute top-4 right-4">
                    <Badge 
                      className={`${program.color} ${program.textColor} hover:${program.color}/90 shadow-lg`}
                    >
                      {program.status}
                    </Badge>
                  </div>
                  {/* Icon overlay */}
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-12 h-12 ${program.color} rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm bg-opacity-90`}>
                      <program.icon className={`w-6 h-6 ${program.textColor}`} />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-black">{program.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {program.longDescription}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {program.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    {/* Program Details */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-[#396c9f]" />
                        <span>{program.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2 text-[#1d573f]" />
                        <span className="font-medium text-black">{program.impact}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button
                        onClick={() => scrollToSection('#get-involved')}
                        className={`flex-1 ${program.color} ${program.textColor} hover:${program.color}/90 rounded-full transition-all duration-300 hover:shadow-lg`}
                      >
                        Get Involved
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button
                        onClick={() => scrollToSection('#donate')}
                        variant="outline"
                        className="px-6 hover:bg-green-50 hover:border-[#1d573f] hover:text-[#1d573f] rounded-full"
                      >
                        Donate
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action with Same Gradient as "Make a Real Difference" */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#396c9f] to-[#1d573f] rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Want to Start a New Program?
            </h3>
            <p className="text-blue-100 leading-relaxed mb-8 max-w-2xl mx-auto">
              Have an idea for a program that could benefit Punjab's communities? We're always looking to expand our impact 
              and welcome collaborative initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection('#contact')}
                size="lg"
                className="bg-[#fed106] hover:bg-[#e6be05] text-black px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Propose a Program
              </Button>
              <Button
                onClick={() => scrollToSection('#get-involved')}
                size="lg"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-8 py-3 rounded-full transition-all duration-300"
              >
                Volunteer With Us
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}