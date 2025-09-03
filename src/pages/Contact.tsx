import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/movnlpnz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message
        })
      });
      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll be in touch within 24 hours.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
    setSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["pramititechz@gmail.com"],
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 79846 40722"],
      description: "Mon-Sat from 10 am to 7 pm",
    },
    {
      icon: MapPin,
      title: "Factory Address",
      details: [
        "Pramiti Technology, Opp. Kamdhenu Fun Resort, ",
        "Morbi Bypass Highway, Sanala Road, ",
        "Morbi - 363641",
      ],
      description: "Come say hello",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday: 10 am - 7 pm"],
      description: "We're here to help",
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ready to transform your business with innovative technology
            solutions? Let's start the conversation today.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Schedule a Call
                  </CardTitle>
                  <CardDescription className="text-base">
                    We'll be in touch within 24 hours to discuss your project
                    requirements.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6 flex flex-col">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name </Label>
                      <span className="text-red-600">*</span>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name </Label>
                      <span className="text-red-600">*</span>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Last Name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email </Label>
                      <span className="text-red-600">*</span>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone </Label>
                      <span className="text-red-600">*</span>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="79846 40722"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your Company"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <Select
                        onValueChange={(value) => handleInputChange("service", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consulting">Technology Consulting</SelectItem>
                          <SelectItem value="integration">System Integration</SelectItem>
                          <SelectItem value="transformation">Digital Transformation</SelectItem>
                          <SelectItem value="development">Custom Development</SelectItem>
                          <SelectItem value="cloud">Cloud Solutions</SelectItem>
                          <SelectItem value="security">Cybersecurity</SelectItem>
                          <SelectItem value="analytics">Data Analytics</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message </Label>
                      <span className="text-red-600">*</span>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your project and requirements..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      {submitting ? "Submitting..." : "Submit"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-lg text-text-light mb-8">
                  We're here to help you navigate your technology challenges.
                  Choose the most convenient way to reach us.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">
                            {info.title}
                          </h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                          <p className="text-sm text-text-light mt-2">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Alternative Contact */}
              <Card className="bg-section-bg">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">Prefer Email?</h3>
                  <p className="text-text-light mb-4">
                    Send us an email directly and we'll respond within 24 hours.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="mailto:pramititechz@gmail.com">Send Email</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  How long does a typical project take?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-light">
                  Project timelines vary based on scope and complexity. Simple
                  integrations may take 2-4 weeks, while comprehensive digital
                  transformations can take 3-6 months. We provide detailed
                  timelines during our initial consultation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Do you offer ongoing support?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-light">
                  Yes, we provide 24/7 support and maintenance services for all
                  our solutions. Our support packages include regular updates,
                  security patches, and technical assistance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  What industries do you serve?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-light">
                  We work with businesses across various industries including
                  healthcare, finance, manufacturing, retail, and technology.
                  Our solutions are adaptable to meet industry-specific
                  requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Can you work with our existing systems?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-light">
                  Absolutely! We specialize in system integration and can work
                  with your existing infrastructure. We'll assess your current
                  setup and recommend the best approach for seamless
                  integration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
