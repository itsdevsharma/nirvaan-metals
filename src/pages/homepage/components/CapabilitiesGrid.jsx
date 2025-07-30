import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CapabilitiesGrid = () => {
  const [hoveredCapability, setHoveredCapability] = useState(null);

  const capabilities = [
    {
      id: 2,
      title: "Zinc Die Casting Alloy",
      description: "Heavy-duty structural solutions for commercial and industrial projects",
      icon: "Building",
      image: "/src/components/ui/download.jpg",
      capacity: "Up to 500 tons",
      equipment: ["Beam Fabrication", "Steel Erection", "Welding Robots"],
      certifications: ["ISO 9001", "OSHA Compliant"],
      specialties: ["Bridges", "High-Rise Buildings", "Industrial Frameworks"]
    },
    {
      id: 4,
      title: "Zamak 3",
      description: "Zamak 3 is the most common zinc die casting alloy in North America. Over 70% of all zinc die castings are made from this alloy",
      icon: "Cog",
      image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      equipment: ["CNC Machining", "Laser Cutting", "Robotic Welding"],
      certifications: ["ISO 9001", "OSHA Compliant"],
      capacity: "Full-scale industrial fabrication",
      specialties: ["Conveyor Systems", "Machine Guards", "Custom Tooling"]

    },
    {
      id: 6,
      title: "Quality Assurance",
      description: "Rigorous testing and inspection to ensure superior quality",
      icon: "Shield",
      image: "https://images.pexels.com/photos/327482/pexels-photo-327482.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      equipment: ["NDT Equipment", "Load Testing", "Material Analysis"],
      certifications: ["AWS Certified", "Quality Standards"],
      capacity: "Full Inspection Services",
      specialties: ["Weld Inspection", "Material Testing", "Compliance Verification"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 text-accent mb-4">
            <div className="w-12 h-0.5 bg-accent"></div>
            <span className="font-mono text-sm tracking-wider uppercase">
              Our Capabilities
            </span>
            <div className="w-12 h-0.5 bg-accent"></div>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            Engineering Excellence Across Every Discipline
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to completion, our comprehensive capabilities ensure your project 
            receives the expertise and attention it deserves.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability) => (
            <div
              key={capability.id}
              className="group relative bg-card rounded-industrial overflow-hidden shadow-structural hover:shadow-2xl transition-all duration-500 industrial-hover"
              onMouseEnter={() => setHoveredCapability(capability.id)}
              onMouseLeave={() => setHoveredCapability(null)}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={capability.image}
                  alt={capability.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-accent rounded-industrial flex items-center justify-center mb-4 shadow-industrial">
                    <Icon name={capability.icon} size={24} color="var(--color-primary)" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading text-xl font-bold mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed mb-4">
                    {capability.description}
                  </p>

                  {/* Hover Details */}
                  <div className={`transition-all duration-500 ${
                    hoveredCapability === capability.id 
                      ? 'opacity-100 max-h-96 translate-y-0' :'opacity-0 max-h-0 translate-y-4'
                  } overflow-hidden`}>

                  </div>

                  {/* Learn More Button */}
                  <div className={`transition-all duration-500 ${
                    hoveredCapability === capability.id 
                      ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-4'
                  } mt-4`}>
                    <button className="flex items-center space-x-2 text-accent hover:text-white transition-colors duration-300 font-heading font-semibold" >
                      <a href='https://www.bing.com/search?pglt=299&q=zinc+die+casting&cvid=8ebd2401361f4b8e9db28be64136e7d6&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEAAYQDIGCAQQABhAMgYIBRAAGEAyBggGEAAYQDIGCAcQABhAMgYICBAAGEDSAQg1ODMwajBqMagCALACAA&FORM=ANSPA1&PC=LCTS'><span>Learn More</span></a>
                      <Icon name="ArrowRight" size={16} />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default CapabilitiesGrid;