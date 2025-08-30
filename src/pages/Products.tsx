import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Package, 
  Layers, 
  BarChart3, 
  Shield, 
  Zap, 
  Users,
  CheckCircle,
  Star,
  ArrowRight
} from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Package,
      title: "PramitiERP",
      category: "Enterprise Resource Planning",
      description: "Comprehensive ERP solution that integrates all your business processes into a single, unified platform.",
      features: [
        "Financial Management",
        "Inventory Control",
        "Human Resources",
        "Supply Chain Management",
        "Real-time Reporting",
        "Mobile Access"
      ],
      pricing: "Starting at $299/month",
      popular: true
    },
    {
      icon: Layers,
      title: "PramitiCloud",
      category: "Cloud Infrastructure",
      description: "Scalable cloud platform designed for modern businesses requiring reliable, secure, and flexible infrastructure.",
      features: [
        "Auto-scaling Infrastructure",
        "99.9% Uptime SLA",
        "Advanced Security",
        "Backup & Recovery",
        "24/7 Monitoring",
        "Global CDN"
      ],
      pricing: "Starting at $149/month",
      popular: false
    },
    {
      icon: BarChart3,
      title: "PramitiAnalytics",
      category: "Business Intelligence",
      description: "Advanced analytics platform that transforms your data into actionable insights for better decision-making.",
      features: [
        "Real-time Dashboards",
        "Predictive Analytics",
        "Custom Reporting",
        "Data Visualization",
        "Machine Learning",
        "API Integration"
      ],
      pricing: "Starting at $199/month",
      popular: false
    },
    {
      icon: Shield,
      title: "PramitiSecure",
      category: "Cybersecurity Suite",
      description: "Comprehensive security solution protecting your digital assets from modern cyber threats.",
      features: [
        "Threat Detection",
        "Vulnerability Assessment",
        "Compliance Monitoring",
        "Incident Response",
        "Security Training",
        "Risk Assessment"
      ],
      pricing: "Starting at $399/month",
      popular: false
    }
  ];

  const solutions = [
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Streamline repetitive tasks and improve efficiency with intelligent automation solutions."
    },
    {
      icon: Users,
      title: "Collaboration Tools",
      description: "Enhanced team productivity with integrated communication and project management tools."
    },
    {
      icon: BarChart3,
      title: "Performance Monitoring",
      description: "Real-time insights into system performance and business metrics for proactive management."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp Inc.",
      content: "PramitiERP has revolutionized our operations. The integration capabilities are outstanding.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Operations Manager, Global Logistics",
      content: "The analytics platform provides insights we never had before. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Powerful, scalable software solutions designed to accelerate your business growth 
            and streamline operations across all departments.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              Enterprise-grade solutions built with cutting-edge technology to meet modern business demands.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${product.popular ? 'ring-2 ring-primary' : ''}`}>
                {product.popular && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                        <product.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{product.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1">{product.category}</Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-4">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <div className="text-2xl font-bold text-primary">{product.pricing}</div>
                      <div className="text-sm text-text-light">per organization</div>
                    </div>
                    <Button asChild>
                      <Link to="/contact">Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Solutions */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Complementary Solutions</h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              Additional tools and services that enhance your productivity and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <solution.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              Trusted by businesses worldwide for reliable, scalable, and innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-lg italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-text-light">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-text-light mb-8 max-w-2xl mx-auto">
            Discover how our products can streamline your operations and drive growth. 
            Schedule a demo to see them in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact" className="flex items-center">
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;