import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, Share2, Clock, Tag } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface NewsProps {
  onNavigateHome: () => void;
}

export default function News({ onNavigateHome }: NewsProps) {
  const newsArticles = [
    {
      id: 1,
      title: "Honoring the Life and Legacy of Sardar Jaswinder Singh Bahra",
      excerpt: "We remember and celebrate the extraordinary life of Sardar Jaswinder Singh Bahra, whose dedication to community service and humanitarian causes has left an indelible mark on Punjab's social landscape.",
      content: `Sardar Jaswinder Singh Bahra was more than just a community leader; he was a beacon of hope for countless families across Punjab. His unwavering commitment to social justice, education, and community welfare has inspired generations of activists and volunteers.

Born into a modest family, Sardar Bahra understood the struggles of ordinary people. This understanding shaped his lifelong mission to serve the underprivileged and marginalized communities. Through his leadership, numerous educational initiatives were launched, providing scholarships to deserving students and establishing libraries in rural areas.

His approach to community service was holistic - he believed in empowering communities rather than creating dependency. Under his guidance, several self-help groups were formed, women's cooperatives were established, and youth employment programs were initiated.

Sardar Bahra's legacy continues through the countless lives he touched and the institutions he helped build. His vision of a just and equitable society remains the driving force behind our ongoing work at Lok Bhalai Youth Club.

We pledge to carry forward his mission of service, compassion, and social transformation. His teachings remind us that true leadership lies in serving others and that sustainable change comes from empowering communities to become self-reliant.`,
      author: "Lok Bhalai Youth Club Team",
      date: "December 15, 2024",
      readTime: "4 min read",
      category: "Tribute",
      imageUrl: "https://images.unsplash.com/photo-1714136298670-901887f86c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1vcmlhbCUyMHRyaWJ1dGUlMjBob25vciUyMGxlZ2FjeXxlbnwxfHx8fDE3NTY0MDE3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: true
    },
    {
      id: 2,
      title: "Human Rights Day 2024 - Lok Bhalai Youth Club's ongoing 25-year fight for human rights",
      excerpt: "As we commemorate Human Rights Day 2024, we reflect on our quarter-century journey of advocating for fundamental human rights and dignity across Punjab's communities.",
      content: `December 10th marks International Human Rights Day, and this year holds special significance as we celebrate 25 years of unwavering commitment to human rights advocacy. Since our establishment in 1999, Lok Bhalai Youth Club has been at the forefront of fighting for justice, equality, and human dignity.

Our journey began with a simple yet powerful belief: every individual, regardless of their background, deserves to live with dignity and have access to basic human rights. Over the past 25 years, we have witnessed tremendous progress, but the fight continues.

Key achievements in our human rights work include:
- Providing legal aid to over 3,000 individuals who couldn't afford legal representation
- Establishing rehabilitation centers for victims of human trafficking
- Conducting awareness campaigns on women's rights, reaching over 50,000 people
- Supporting marginalized communities in accessing government schemes and benefits

Our work has evolved with changing times. Today, we focus on digital rights, environmental justice, and inclusive development. We have partnered with international organizations to strengthen our advocacy efforts and have trained over 500 young activists who carry the torch forward.

The challenges remain significant - from caste-based discrimination to gender inequality, from poverty to lack of access to quality healthcare and education. But our resolve has only strengthened over the years.

As we look towards the future, we remain committed to building a society where human rights are not just protected on paper but lived in reality. We call upon every citizen to join us in this mission, for human rights are not just the responsibility of organizations but of every individual.`,
      author: "Human Rights Team",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Human Rights",
      imageUrl: "https://images.unsplash.com/photo-1629753908080-e8551ac57b8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMHJpZ2h0cyUyMGRheSUyMGFjdGl2aXN0c3xlbnwxfHx8fDE3NTY0MDE3OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: true
    },
    {
      id: 3,
      title: "Langar Aid provides critical relief to Wales communities affected by severe flooding",
      excerpt: "Our emergency response team mobilized quickly to provide free meals and essential supplies to flood-affected communities in Wales, demonstrating the global reach of Sikh humanitarian values.",
      content: `When severe flooding devastated communities across Wales in November 2024, Lok Bhalai Youth Club responded with swift humanitarian action, establishing emergency langar (community kitchen) services to provide hot meals and essential support to affected residents.

Within 48 hours of the flooding, our disaster response team had established three langar centers in the worst-affected areas, serving over 2,000 hot meals daily to displaced families, emergency workers, and volunteers. Our kitchens operated round-the-clock, ensuring no one went hungry during this crisis.

The langar service extended beyond just food distribution. Our volunteers provided:
- Clean drinking water and water purification tablets
- Emergency clothing and blankets
- Basic medical supplies and first aid
- Emotional support and counseling services
- Help with insurance claims and government assistance applications

This operation exemplifies the Sikh principle of "Sarbat da Bhala" (welfare of all), transcending religious, cultural, and geographical boundaries. Our teams worked alongside local authorities, Red Cross, and other relief organizations, demonstrating the power of collaborative humanitarian response.

Local resident Sarah Williams shared, "When we lost everything to the floods, the langar volunteers were among the first to reach us. They didn't just provide food; they gave us hope and showed us we weren't alone."

The Wales flood response has strengthened our international disaster relief capabilities and reinforced our commitment to serving humanity wherever crisis strikes. We have established permanent partnerships with Welsh community organizations to ensure rapid response capabilities for future emergencies.

This operation was funded entirely through community donations and volunteer contributions, showcasing the power of grassroots humanitarian action.`,
      author: "Emergency Response Team",
      date: "November 28, 2024",
      readTime: "5 min read",
      category: "Disaster Relief",
      imageUrl: "https://images.unsplash.com/photo-1660066522109-82af50d99488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9vZCUyMHJlbGllZiUyMGRpc2FzdGVyJTIwYWlkfGVufDF8fHx8MTc1NjQwMTc5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: false
    },
    {
      id: 4,
      title: "World Food Programme strikes partnership with Lok Bhalai Youth Club in the midst of critical food crises",
      excerpt: "A groundbreaking partnership with the UN World Food Programme will enable us to scale our food security initiatives and reach vulnerable communities across Punjab and beyond.",
      content: `In a significant development for our humanitarian efforts, Lok Bhalai Youth Club has entered into a strategic partnership with the United Nations World Food Programme (WFP) to address growing food insecurity challenges across Punjab and neighboring regions.

This partnership comes at a critical time when climate change, economic disruptions, and social challenges have created unprecedented food security challenges for vulnerable populations. The collaboration will combine WFP's global expertise with our deep community roots and local knowledge.

Key components of the partnership include:

Technical Capacity Building: WFP will provide training to our teams on best practices in food distribution, nutrition education, and emergency response protocols. This will enhance our ability to serve communities more effectively and efficiently.

Resource Sharing: The partnership provides access to WFP's supply chain networks and quality assurance systems, enabling us to source and distribute food aid more effectively during emergencies.

Community-Based Programs: Together, we will develop innovative community-based nutrition programs focusing on pregnant women, lactating mothers, and children under five years of age.

Climate-Resilient Agriculture: The partnership includes support for farmers to adopt climate-resilient agricultural practices, ensuring long-term food security at the community level.

Digital Innovation: We will collaborate on developing digital platforms for food distribution tracking and beneficiary registration, ensuring transparency and efficiency in our operations.

The pilot phase will focus on three districts in Punjab, potentially benefiting over 50,000 individuals. The program emphasizes building local capacity rather than creating dependency, aligning with both organizations' commitment to sustainable development.

WFP Country Director remarked, "Lok Bhalai Youth Club's grassroots approach and community trust make them an ideal partner for addressing food security challenges at the local level."

This partnership represents a milestone in our journey towards eliminating hunger and malnutrition from our communities.`,
      author: "Partnership Development Team",
      date: "November 15, 2024",
      readTime: "7 min read",
      category: "Partnership",
      imageUrl: "https://images.unsplash.com/photo-1723132434781-00b297f6ab01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMGZvb2QlMjBwcm9ncmFtbWUlMjBwYXJ0bmVyc2hpcHxlbnwxfHx8fDE3NTY0MDE4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Tribute':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Human Rights':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Disaster Relief':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Partnership':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#396c9f] to-[#1d573f] py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <Button
              onClick={onNavigateHome}
              variant="outline"
              className="mb-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest News</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Stay updated with our recent activities, community impact stories, and organizational developments
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Featured Articles */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-black mb-8"
            >
              Featured Stories
            </motion.h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {newsArticles.filter(article => article.featured).map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-64">
                      <ImageWithFallback
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={getCategoryColor(article.category)}>
                          {article.category}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl leading-tight hover:text-[#396c9f] transition-colors">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 line-clamp-3">
                        {article.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{article.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <div className="prose text-gray-700 text-sm mb-4">
                        {article.content.split('\n\n')[0]}...
                      </div>
                      <Button
                        variant="outline"
                        className="w-full hover:bg-[#396c9f] hover:text-white border-[#396c9f] text-[#396c9f]"
                      >
                        Read Full Article
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Articles */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-black mb-8"
            >
              Recent Updates
            </motion.h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {newsArticles.filter(article => !article.featured).map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48">
                      <ImageWithFallback
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={getCategoryColor(article.category)}>
                          {article.category}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg leading-tight hover:text-[#396c9f] transition-colors">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 line-clamp-2">
                        {article.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full hover:bg-[#1d573f] hover:text-white border-[#1d573f] text-[#1d573f]"
                      >
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-[#fed106]/10 to-[#396c9f]/10 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-black mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest news, updates, and stories directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#396c9f] focus:border-transparent"
                />
                <Button className="bg-[#396c9f] hover:bg-[#2d5a8a] text-white px-8 py-3 rounded-full">
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}