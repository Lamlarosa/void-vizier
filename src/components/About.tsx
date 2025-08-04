import { Check, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { portfolioData } from '@/data/portfolio';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-dark opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="text-primary text-glow">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <div className="space-y-6 animate-slide-in-left">
            <Card className="glass hover-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Passionate Developer
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {portfolioData.about.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-primary hover:opacity-90 glow-primary transition-all duration-300"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Highlights */}
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              What I Bring to the Table
            </h3>
            
            <div className="grid gap-4">
              {portfolioData.about.highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="glass hover-glow transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <p className="text-foreground font-medium">
                        {highlight}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="glass text-center hover-glow">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="glass text-center hover-glow">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;