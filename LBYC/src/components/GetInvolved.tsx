import { motion } from 'motion/react';
import { Users, Heart, Calendar, MapPin, Clock, ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export default function GetInvolved() {
  const opportunities = [
    {
      icon: Users,
      title: 'Field Volunteer',
      description: 'Join our ground teams for community programs',
      commitment: '4-6 hours/week',
      location: 'Ludhiana, Jalandhar',
      requirements: ['18+ years', 'Punjabi/Hindi speaking', 'Transportation'],
      color: 'bg-[#fed106]',
      textColor: 'text-black',
      urgent: false
    },
    {
      icon: Heart,
      title: 'Healthcare Volunteer',
      description: 'Support medical camps and health awareness',
      commitment: '6-8 hours/month',
      location: 'Rural Punjab',
      requirements: ['Medical background', 'Compassionate care', 'Flexible schedule'],
      color: 'bg-[#396c9f]',
      textColor: 'text-white',
      urgent: true
    },
    {
      icon: Calendar,
      title: 'Event Coordinator',
      description: 'Help organize fundraising and awareness events',
      commitment: '2-3 hours/week',
      location: 'Remote + Events',
      requirements: ['Event planning experience', 'Communication skills', 'Social media savvy'],
      color: 'bg-[#1d573f]',
      textColor: 'text-white',
      urgent: false
    },
    {
      icon: MapPin,
      title: 'Emergency Response',
      description: 'First responder for disaster relief operations',
      commitment: 'On-call basis',
      location: 'Punjab-wide',
      requirements: ['Physical fitness', 'Emergency training', 'Available for emergencies'],
      color: 'bg-black',
      textColor: 'text-white',
      urgent: true
    }
  ];



  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="get-involved" className="py-20 bg-gradient-to-br from-gray-50 via-white to-[#fed106]/5">
      <div className="container mx-auto px-4">




        {/* Volunteer Opportunities */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Volunteer Opportunities</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-[#fed106] to-[#396c9f] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our specialized volunteer programs designed to match your skills and availability
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg bg-white relative overflow-hidden group">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-gray-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Card Content */}
                  <div className="relative z-10">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-14 h-14 ${opportunity.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <opportunity.icon className={`w-7 h-7 ${opportunity.textColor}`} />
                        </div>
                        {opportunity.urgent && (
                          <Badge className="bg-gradient-to-r from-[#1d573f] to-[#164530] text-white hover:from-[#164530] hover:to-[#0f3a28] text-xs shadow-lg animate-pulse">
                            Priority Need
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg font-bold text-black leading-tight mb-2">{opportunity.title}</CardTitle>
                      <CardDescription className="text-gray-600 text-sm leading-relaxed">
                        {opportunity.description}
                      </CardDescription>
                    </CardHeader>
                  
                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        {/* Info Grid */}
                        <div className="bg-gray-50/80 rounded-xl p-4 space-y-3">
                          <div className="space-y-3 text-sm">
                            <div>
                              <div className="flex items-center text-gray-700 mb-2">
                                <Clock className="w-4 h-4 mr-2 text-[#fed106]" />
                                <span className="font-semibold">Time Commitment</span>
                              </div>
                              <p className="text-black text-sm font-medium pl-6">{opportunity.commitment}</p>
                            </div>
                            <div className="border-t border-gray-200 pt-3">
                              <div className="flex items-center text-gray-700 mb-2">
                                <MapPin className="w-4 h-4 mr-2 text-[#396c9f]" />
                                <span className="font-semibold">Location</span>
                              </div>
                              <p className="text-black text-sm font-medium pl-6">{opportunity.location}</p>
                            </div>
                          </div>
                        </div>

                        {/* Requirements */}
                        <div>
                          <h4 className="font-semibold text-black mb-3 text-sm flex items-center">
                            <Users className="w-4 h-4 mr-2 text-[#1d573f]" />
                            Requirements
                          </h4>
                          <ul className="space-y-2">
                            {opportunity.requirements.map((req, idx) => (
                              <li key={idx} className="text-xs text-gray-700 flex items-start">
                                <div className="w-2 h-2 bg-gradient-to-r from-[#fed106] to-[#396c9f] rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                                <span className="leading-relaxed font-medium">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Apply Button */}
                        <Button
                          onClick={() => scrollToSection('#contact')}
                          className={`w-full ${opportunity.color} ${opportunity.textColor} hover:${opportunity.color}/90 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-${opportunity.color.replace('bg-', '')}/20 font-semibold py-3`}
                        >
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>



        {/* Professional CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#396c9f] to-[#1d573f] rounded-2xl p-8 md:p-12 text-white text-center">
            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Make a Difference?
            </h3>
            
            <p className="text-blue-100 leading-relaxed mb-8 max-w-2xl mx-auto">
              Join our mission to serve Punjab's communities. Whether through volunteering, partnerships, 
              or support, every contribution helps us build resilient, self-sustaining communities across Punjab.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2016</div>
                <div className="text-xs text-blue-100">Established</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">12K+</div>
                <div className="text-xs text-blue-100">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#fed106]">4</div>
                <div className="text-xs text-blue-100">Core Programs</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection('#contact')}
                size="lg"
                className="bg-[#fed106] hover:bg-[#e6be05] text-black px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Journey
              </Button>
              <Button
                onClick={() => scrollToSection('#donate')}
                size="lg"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-8 py-3 rounded-full transition-all duration-300"
              >
                Support Our Cause
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}