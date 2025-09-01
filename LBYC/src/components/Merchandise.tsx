import { motion } from 'motion/react';
import { MessageCircle, Heart, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import tshirtImage from 'figma:asset/14d6ed2a90bc7011f654e154f21a3259a3619612.png';
import mugImage from 'figma:asset/1f7f958578567fbe28999d09808983275f18eee0.png';
import umbrellaImage from 'figma:asset/b19e26fdc8b9519bc1446f92fcb608c328274386.png';
import logoCapImage from 'figma:asset/cf43abaab932bf453548044cd2839e6fea4e36f1.png';
import paperBagImage from 'figma:asset/c04c097f9a3049537dd1a317537ee840220f0c36.png';

export default function Merchandise() {
  const merchandiseItems = [
    {
      id: 1,
      name: 'LBYC Logo T-Shirt',
      description: 'Premium cotton t-shirt with embroidered Lok Bhalai Youth Club logo',
      image: tshirtImage,
      category: 'Apparel',
      popular: true,
      colors: ['Black', 'White', 'Yellow'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 2,
      name: 'Coffee Mug with Logo',
      description: 'Ceramic mug featuring the official LBYC logo, perfect for your morning coffee',
      image: mugImage,
      category: 'Drinkware',
      popular: false,
      colors: ['White', 'Black'],
      capacity: '325ml'
    },
    {
      id: 3,
      name: 'LBYC Umbrella',
      description: 'Compact umbrella with LBYC branding, perfect for Punjab weather',
      image: umbrellaImage,
      category: 'Accessories',
      popular: true,
      colors: ['Black', 'Navy Blue'],
      features: ['Compact', 'Wind Resistant']
    },
    {
      id: 4,
      name: 'Eco-Friendly Tote Bag',
      description: 'Sustainable cotton tote bag with LBYC logo, perfect for daily use',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3RlJTIwYmFnJTIwY290dG9uJTIwZWNvfGVufDF8fHx8MTc1NjM3ODAzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Bags',
      popular: false,
      colors: ['Natural', 'Black'],
      material: '100% Organic Cotton'
    },
    {
      id: 5,
      name: 'Logo Cap',
      description: 'Adjustable cap with embroidered LBYC logo',
      image: logoCapImage,
      category: 'Apparel',
      popular: true,
      colors: ['Black', 'White', 'Yellow'],
      adjustable: true
    },
    {
      id: 6,
      name: 'Paper Bag Set',
      description: 'Set of 10 branded paper bags, perfect for events and giveaways',
      image: paperBagImage,
      category: 'Packaging',
      popular: false,
      quantity: '10 pieces',
      biodegradable: true
    }
  ];

  const handleRequest = (item: any) => {
    // In a real application, this would integrate with a request system
    alert(`Request submitted for ${item.name}!\\n\\nWe will contact you soon with availability details.`);
  };

  const categories = ['All', 'Apparel', 'Drinkware', 'Accessories', 'Bags', 'Packaging'];

  return (
    <section id="merchandise" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Official Merchandise</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Request our official merchandise to show your support for Lok Bhalai Youth Club. Contact us for availability and details.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="rounded-full border-[#fed106]/30 hover:bg-[#fed106]/10 hover:border-[#fed106] text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {merchandiseItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <Badge className="bg-[#396c9f] text-white hover:bg-[#396c9f]/90">
                      {item.category}
                    </Badge>
                    {item.popular && (
                      <Badge className="bg-[#1d573f] text-white hover:bg-[#164530]">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-black">{item.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {item.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {/* Product Details */}
                    <div className="text-sm text-gray-600 space-y-1">
                      {item.colors && (
                        <div>
                          <span className="font-medium">Colors:</span> {item.colors.join(', ')}
                        </div>
                      )}
                      {item.sizes && (
                        <div>
                          <span className="font-medium">Sizes:</span> {item.sizes.join(', ')}
                        </div>
                      )}
                      {item.capacity && (
                        <div>
                          <span className="font-medium">Capacity:</span> {item.capacity}
                        </div>
                      )}
                      {item.material && (
                        <div>
                          <span className="font-medium">Material:</span> {item.material}
                        </div>
                      )}
                      {item.quantity && (
                        <div>
                          <span className="font-medium">Quantity:</span> {item.quantity}
                        </div>
                      )}
                    </div>

                    {/* Special Features */}
                    {(item.features || item.adjustable || item.biodegradable) && (
                      <div className="flex flex-wrap gap-1">
                        {item.features?.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {item.adjustable && <Badge variant="outline" className="text-xs">Adjustable</Badge>}
                        {item.biodegradable && <Badge variant="outline" className="text-xs">Eco-Friendly</Badge>}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      <Button
                        onClick={() => handleRequest(item)}
                        className="flex-1 bg-[#1d573f] hover:bg-[#164530] text-white rounded-full transition-all duration-300 hover:shadow-lg"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Request to Get
                      </Button>
                      <Button
                        variant="outline"
                        className="px-4 hover:bg-green-50 hover:border-[#1d573f] hover:text-[#1d573f]"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}