import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Monitor, 
  Settings, 
  Zap, 
  Users, 
  Cloud, 
  Shield, 
  Database, 
  Smartphone,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Monitor,
      title: "Technology Consulting",
      description: "Strategic guidance to align technology with your business objectives and drive digital transformation.",
      features: ["IT Strategy & Planning", "Technology Assessment", "Digital Roadmap", "Architecture Design"]
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Seamlessly connect your systems, applications, and data for improved efficiency and collaboration.",
      features: ["API Development", "Legacy Modernization", "Data Integration", "Workflow Automation"]
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Transform your business processes with cutting-edge digital solutions and automation technologies.",
      features: ["Process Automation", "Digital Workflows", "Change Management", "Training & Support"]
    },
    {
      icon: Users,
      title: "Custom Development",
      description: "Tailored software solutions designed specifically for your unique business requirements and challenges.",
      features: ["Web Applications", "Mobile Apps", "Enterprise Software", "E-commerce Solutions"]
    }
  ];

  const specializedServices = [
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Migrate, optimize, and manage your cloud infrastructure for scalability and cost-efficiency."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security assessments and implementation."
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and visualization."
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile applications that engage users and drive business growth."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We begin by understanding your business, challenges, and objectives through comprehensive analysis."
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Develop a detailed roadmap with clear milestones, timelines, and success metrics."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the solution using agile methodologies with regular communication and feedback loops."
    },
    {
      step: "04",
      title: "Testing & Deployment",
      description: "Rigorous testing ensures quality delivery, followed by smooth deployment and user training."
    },
    {
      step: "05",
      title: "Support & Optimization",
      description: "Ongoing support and continuous optimization to ensure long-term success and growth."
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business, 
            streamline operations, and drive sustainable growth in the digital age.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Services</h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              Our comprehensive suite of services covers every aspect of your technology journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-4">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Specialized Solutions</h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              Advanced technology services for specific business needs and industry requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedServices.map((service, index) => (
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

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="space-y-8">
            {process.map((phase, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{phase.step}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-lg text-text-light">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-text-light mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business and achieve your technology goals.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact" className="flex items-center">
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;