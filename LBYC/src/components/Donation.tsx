import { motion } from 'motion/react';
import { Heart, Shield, Users, GraduationCap, CheckCircle, CreditCard, Smartphone, Building } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useState } from 'react';

export default function Donation() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  const donationTiers = [
    {
      amount: 500,
      title: 'Community Helper',
      description: 'Provides school supplies for 2 children',
      impact: 'Education Support',
      icon: GraduationCap,
      color: 'border-[#fed106]',
      popular: false
    },
    {
      amount: 1000,
      title: 'Health Supporter',
      description: 'Covers medical checkup for 5 people',
      impact: 'Healthcare Program',
      icon: Heart,
      color: 'border-[#396c9f]',
      popular: true
    },
    {
      amount: 2500,
      title: 'Program Sponsor',
      description: 'Funds disaster relief kit for 1 family',
      impact: 'Emergency Response',
      icon: Shield,
      color: 'border-[#1d573f]',
      popular: false
    },
    {
      amount: 5000,
      title: 'Community Champion',
      description: 'Sponsors youth training for 10 participants',
      impact: 'Youth Empowerment',
      icon: Users,
      color: 'border-black',
      popular: false
    }
  ];



  const paymentMethods = [
    { icon: CreditCard, name: 'Credit/Debit Card', description: 'Secure online payment' },
    { icon: Smartphone, name: 'UPI Payment', description: 'Quick UPI transfer' },
    { icon: Building, name: 'Bank Transfer', description: 'Direct bank transfer' }
  ];

  const handleDonate = () => {
    const amount = selectedAmount || parseInt(customAmount);
    if (!amount || amount < 100) {
      alert('Please select or enter a donation amount of at least ₹100');
      return;
    }
    alert(`Thank you for your donation of ₹${amount}!\n\nIn a real application, this would redirect to a secure payment gateway.`);
  };

  return (
    <section id="donate" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Support Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your donation directly supports communities across Punjab. Every contribution, no matter the size, 
            makes a meaningful difference in someone's life.
          </p>
        </motion.div>



        <div className="grid lg:grid-cols-3 gap-12">
          {/* Donation Tiers */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-black mb-8"
            >
              Choose Your Impact
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {donationTiers.map((tier, index) => (
                <motion.div
                  key={tier.amount}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card 
                    className={`h-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-2 ${
                      selectedAmount === tier.amount ? 'border-[#1d573f] bg-green-50' : tier.color
                    } ${tier.popular ? 'ring-2 ring-[#fed106] ring-opacity-50' : ''}`}
                    onClick={() => setSelectedAmount(tier.amount)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <tier.icon className="w-6 h-6 text-[#396c9f]" />
                        </div>
                        {tier.popular && (
                          <Badge className="bg-[#fed106] text-black hover:bg-[#fed106]/90">
                            Most Popular
                          </Badge>
                        )}
                      </div>
                      <div className="text-2xl font-bold text-black">₹{tier.amount}</div>
                      <CardTitle className="text-lg text-black">{tier.title}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {tier.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center text-sm text-[#1d573f]">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span className="font-medium">{tier.impact}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Custom Amount */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className={`border-2 ${customAmount ? 'border-[#1d573f] bg-green-50' : 'border-gray-200'}`}>
                <CardContent className="p-6">
                  <h4 className="font-bold text-black mb-4">Custom Amount</h4>
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-medium text-black">₹</span>
                    <input
                      type="number"
                      min="100"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:border-[#fed106] focus:outline-none"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Minimum donation: ₹100</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Payment Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg sticky top-8">
                <CardHeader>
                  <CardTitle className="text-xl text-black">Complete Your Donation</CardTitle>
                  <CardDescription>
                    Your contribution is secure and tax-deductible under 80G
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Payment Methods */}
                  <div>
                    <h4 className="font-medium text-black mb-3">Payment Methods</h4>
                    <div className="space-y-2">
                      {paymentMethods.map((method, index) => (
                        <div key={index} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                          <method.icon className="w-5 h-5 text-[#396c9f] mr-3" />
                          <div>
                            <div className="font-medium text-black text-sm">{method.name}</div>
                            <div className="text-xs text-gray-500">{method.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Donation Summary */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Donation Amount:</span>
                      <span className="font-bold text-black">
                        ₹{selectedAmount || customAmount || '0'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Processing Fee:</span>
                      <span className="text-gray-600">₹0 (Covered by us)</span>
                    </div>
                  </div>

                  {/* Donate Button */}
                  <Button
                    onClick={handleDonate}
                    size="lg"
                    className="w-full bg-[#1d573f] hover:bg-[#164530] text-white rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Donate Now
                  </Button>

                  {/* Security Info */}
                  <div className="text-center">
                    <div className="flex items-center justify-center text-sm text-gray-600 mb-2">
                      <Shield className="w-4 h-4 mr-1 text-[#1d573f]" />
                      <span>Secure SSL encrypted payment</span>
                    </div>
                    <p className="text-xs text-gray-500">
                      80G tax exemption certificate will be emailed within 48 hours
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  );
}