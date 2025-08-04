import { Heart, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary text-glow mb-2">
              {portfolioData.personal.name.split(' ')[0]}
            </h3>
            <p className="text-muted-foreground">
              {portfolioData.personal.title}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {Object.entries(portfolioData.social).map(([platform, url]) => {
              const IconComponent = socialIcons[platform as keyof typeof socialIcons];
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover-glow"
                >
                  <IconComponent size={18} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {currentYear} {portfolioData.personal.name}
            </p>
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end mt-1">
              Made with <Heart className="w-4 h-4 text-primary mx-1" fill="currentColor" /> using React
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border mt-8 mb-4"></div>

        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-6">
            {portfolioData.navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  const target = document.querySelector(item.href);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
              >
                {item.name}
              </button>
            ))}
          </div>
          
          <div className="text-muted-foreground text-xs">
            Built with React, TypeScript & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;