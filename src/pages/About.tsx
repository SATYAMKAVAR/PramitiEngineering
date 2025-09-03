import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Award, Users2 } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously explore cutting-edge technologies to deliver innovative solutions that give our clients a competitive advantage."
    },
    {
      icon: Eye,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from initial consultation to final delivery and ongoing support."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We build trust through transparency, honest communication, and delivering on our commitments every time."
    },
    {
      icon: Users2,
      title: "Collaboration",
      description: "We work as an extension of your team, fostering partnerships that drive mutual success and long-term growth."
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Chief Technology Officer",
      expertise: ["Cloud Architecture", "DevOps", "System Design"]
    },
    {
      name: "Priya Sharma",
      role: "Lead Solutions Architect",
      expertise: ["Enterprise Integration", "API Design", "Microservices"]
    },
    {
      name: "Amit Patel",
      role: "Senior Consultant",
      expertise: ["Digital Transformation", "Process Automation", "Data Analytics"]
    },
    {
      name: "Sneha Reddy",
      role: "Project Manager",
      expertise: ["Agile Methodology", "Team Leadership", "Client Relations"]
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Pramiti Technology</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Engineering innovative solutions since 2014, we've been at the forefront of technology transformation, 
            helping businesses navigate the digital landscape with confidence and clarity.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
              <div className="space-y-6 text-lg text-text-light">
                <p>
                  Founded in 2014, Pramiti Technology began with a simple yet powerful vision: to bridge the gap 
                  between complex technology and practical business solutions. Our name "Pramiti" derives from 
                  Sanskrit, meaning "wisdom" and "measurement" - principles that guide our approach to every project.
                </p>
                <p>
                  Over the years, we've evolved from a small consulting firm to a comprehensive technology partner, 
                  serving clients across industries from startups to Fortune 500 companies. Our growth has been 
                  driven by our commitment to delivering measurable results and building lasting relationships.
                </p>
                <p>
                  Today, we stand as a trusted partner for organizations seeking to leverage technology for 
                  competitive advantage, operational efficiency, and sustainable growth.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-text-light">Projects Delivered</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-text-light">Happy Clients</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-text-light">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-sm text-text-light">Team Members</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Target className="w-8 h-8 text-primary mr-3" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-text-light">
                  To empower businesses with innovative technology solutions that drive growth, efficiency, and 
                  competitive advantage while maintaining the highest standards of quality and service excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Eye className="w-8 h-8 text-primary mr-3" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-text-light">
                  To be the global leader in technology consulting, recognized for our ability to transform complex 
                  challenges into elegant solutions that create lasting value for our clients and their communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              These fundamental principles guide our decisions, shape our culture, and define how we serve our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default About;