import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const heroSlides = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Precision Forged Through Experience",
      subtitle: "Where engineering meets artistry in every custom fabrication",
    },
    {
      id: 2,
      image: "https://images.pixabay.com/photo/2017/08/07/14/02/people-2604149_1920.jpg",
      title: "Industrial Excellence Delivered",
      subtitle: "Structural steel solutions for tomorrow\'s infrastructure",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&h=1080&q=80",
      title: "Built to Last, Delivered on Time",
      subtitle: "Custom metalwork that stands the test of time",
      stats: "99.2% On-Time Delivery"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-primary">         
      {/* Background Slides */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            
            <Image
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
          </div>
        ))}
      </div>

      {/* Sparks Animation Overlay */}
      <div className="absolute inset-0 spark-trail opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-accent">
                  <div className="w-12 h-0.5 bg-accent"></div>
                  <span className="font-mono text-sm tracking-wider uppercase">
                    Industrial Excellence Since 1987
                  </span>
                </div>
                
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {heroSlides[currentSlide].title}
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                  {heroSlides[currentSlide].subtitle}
                </p>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="font-mono text-accent font-semibold">
                    {heroSlides[currentSlide].stats}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Icon name="Award" size={20} />
                  <span className="font-mono text-sm">AWS Certified</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="default"
                  size="lg"
                  className="cta-primary font-heading font-semibold tracking-wide px-8 py-4"
                  iconName="Calculator"
                  iconPosition="left"
                >
                  Request Custom Quote
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary font-heading font-semibold tracking-wide px-8 py-4"
                  iconName="MapPin"
                  iconPosition="left"
                >
                  Schedule Facility Tour
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="trust-badge flex items-center space-x-2">
                  <Icon name="Shield" size={18} color="#D4AF37" />
                  <span className="text-sm text-gray-300">AISC Certified</span>
                </div>
                <div className="trust-badge flex items-center space-x-2">
                  <Icon name="Clock" size={18} color="#D4AF37" />
                  <span className="text-sm text-gray-300">24/7 Support</span>
                </div>
                <div className="trust-badge flex items-center space-x-2">
                  <Icon name="Truck" size={18} color="#D4AF37" />
                  <span className="text-sm text-gray-300">Nationwide Delivery</span>
                </div>
              </div>
            </div>

            {/* Right Content - Video Preview */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="aspect-video bg-secondary/20 rounded-industrial overflow-hidden shadow-2xl">
                  {isVideoLoaded ? (
                    <Image
                      src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop"
                      alt="Precision welding in action"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="molten-loading w-16 h-16 bg-accent"></div>
                    </div>
                  )}
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 industrial-hover">
                      <Icon name="Play" size={32} color="white" />
                    </button>
                  </div>
                </div>

                {/* Video Stats */}
                <div className="absolute -bottom-6 -right-6 bg-accent text-primary px-6 py-3 rounded-industrial shadow-industrial">
                  <div className="text-center">
                    <div className="font-heading font-bold text-2xl">2:47</div>
                    <div className="font-mono text-xs uppercase tracking-wider">Facility Tour</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
          >
            <Icon name="ChevronLeft" size={20} color="white" />
          </button>
          
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-accent' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
          >
            <Icon name="ChevronRight" size={20} color="white" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="font-mono text-xs uppercase tracking-wider rotate-90 origin-center">
            Scroll
          </span>
          <div className="w-px h-12 bg-white/40"></div>
          <Icon name="ChevronDown" size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;