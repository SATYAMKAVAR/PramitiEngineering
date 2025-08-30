import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Monitor, Settings, Zap, Users, CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const services = [
    {
      icon: Monitor,
      title: "Technology Consulting",
      description: "Strategic technology guidance to drive your business forward with cutting-edge solutions."
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Seamlessly connect your systems and platforms for optimal efficiency and performance."
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Transform your business processes with innovative digital solutions and automation."
    },
    {
      icon: Users,
      title: "Custom Development",
      description: "Tailored software solutions designed specifically for your unique business requirements."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "10+", label: "Years Experience" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Engineering Tomorrow's
            <span className="block text-accent-foreground">Technology Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
            At Pramiti Technology, we transform complex business challenges into innovative technology solutions that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-text-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              We provide comprehensive technology solutions tailored to meet your business objectives and drive sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Pramiti Technology?</h2>
              <p className="text-lg text-text-light mb-8">
                We combine deep technical expertise with business acumen to deliver solutions that not only meet your current needs but also position you for future success.
              </p>
              
              <div className="space-y-4">
                {[
                  "Proven track record with 500+ successful projects",
                  "Expert team with diverse technology expertise",
                  "Agile methodology ensuring faster delivery",
                  "24/7 support and maintenance services",
                  "Scalable solutions that grow with your business"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Card className="p-8">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl">Ready to Transform Your Business?</CardTitle>
                  <CardDescription className="text-base">
                    Let's discuss how our technology solutions can drive your business forward.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <Button size="lg" className="w-full" asChild>
                    <Link to="/contact" className="flex items-center justify-center">
                      Schedule a Consultation
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;