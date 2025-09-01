import { motion } from 'motion/react';
import { Heart, Users, Award, Target } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export default function About() {
  const values = [
    {
      title: 'Community First',
      description: 'We prioritize the needs of our community above all else, ensuring our programs address real challenges.',
      icon: Users,
      color: 'bg-[#396c9f]'
    },
    {
      title: 'Transparency',
      description: 'Every donation and resource is used responsibly with complete transparency and accountability.',
      icon: Award,
      color: 'bg-[#fed106]'
    },
    {
      title: 'Sustainable Impact',
      description: 'We focus on creating long-term solutions that empower communities to thrive independently.',
      icon: Target,
      color: 'bg-[#1d573f]'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">About Lok Bhalai Youth Club</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Founded in 2016, we are a registered NGO committed to serving Punjab's communities during their most challenging times. 
            Our mission is to provide immediate relief, long-term support, and sustainable development opportunities.
          </p>
        </motion.div>



        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Lok Bhalai Youth Club was born from a simple belief: no one should face life's challenges alone. 
                During the devastating floods of 2016 in Punjab, a group of young volunteers came together to provide 
                immediate relief to affected families.
              </p>
              <p>
                What started as an emergency response evolved into a comprehensive support system. Today, we operate 
                across multiple districts in Punjab, running programs in education, healthcare, disaster relief, 
                and youth empowerment.
              </p>
              <p>
                Our registered NGO status ensures that every donation reaches those who need it most, with complete 
                transparency and accountability in all our operations.
              </p>
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#fed106]">
              <h4 className="text-xl font-bold text-black mb-3">Our Mission</h4>
              <p className="text-gray-600">
                To serve Punjab's communities by providing immediate relief during crises, supporting long-term 
                development, and empowering individuals to build resilient, self-sustaining communities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#396c9f]">
              <h4 className="text-xl font-bold text-black mb-3">Our Vision</h4>
              <p className="text-gray-600">
                A Punjab where every community has access to education, healthcare, and opportunities for growth, 
                and where no one faces hardship alone.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-black text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${value.color} rounded-full flex items-center justify-center mb-4`}>
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-black mb-3">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}