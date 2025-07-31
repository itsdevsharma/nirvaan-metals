import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const navigationItems = [
  { name: 'Home', path: '/homepage', icon: 'Home' },
  { name: 'Portfolio', path: '/project-portfolio', icon: 'FolderOpen' },
  { name: 'Consultation', path: '/contact-consultation', icon: 'MessageSquare' }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;
  const renderLinks = (isMobile = false) =>
    navigationItems.map(({ name, path, icon }) => (
      <Link
        key={path}
        to={path}
        onClick={() => isMobile && setIsMenuOpen(false)}
        className={`flex items-center space-x-2 px-4 py-2 rounded-industrial transition-all ${
          isActive(path)
            ? 'bg-primary text-primary-foreground shadow-industrial'
            : 'text-muted-foreground hover:text-primary hover:bg-muted'
        }`}
      >
        <Icon name={icon} size={isMobile ? 20 : 18} />
        <span>{name}</span>
      </Link>
    ));

  return (
    <header className={'fixed top-0 w-full  transition-all h-20 backdrop-blur bg-white/30 p-4 rounded-md '}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/homepage" className="flex items-center space-x-2 group">
          <div className="relative h-10 w-10">
            <img src="\public\nirvaan-logo.jpg" />
          <div>
            </div>
          </div>
          <div>
            <span className="font-heading font-bold text-xl text-primary">NIRVAAN METAL</span>
            <span className="block text-xs text-muted-foreground font-mono uppercase tracking-wider">Precision Forged</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">{renderLinks()}</nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center text-sm text-muted-foreground space-x-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          </div>
          <Button variant="default" className="cta-primary font-heading font-semibold tracking-wide" iconName="ArrowRight" iconPosition="right">
            Request Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-industrial text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-4 bg-muted/50 backdrop-blur-sm border-t border-border">
          <nav className="space-y-2">{renderLinks(true)}</nav>
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex justify-center items-center space-x-2 text-sm text-muted-foreground mb-3">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            </div>
            <Button fullWidth variant="default" className="cta-primary font-heading font-semibold tracking-wide" iconName="ArrowRight" iconPosition="right">
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
