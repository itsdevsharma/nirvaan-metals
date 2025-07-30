import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const [activeMethod, setActiveMethod] = useState('phone');

  const contactMethods = [
    {
      id: 'phone',
      title: 'Phone Support',
      description: 'Immediate assistance for urgent inquiries and project discussions',
      icon: 'Phone',
      color: 'bg-success',
      details: {
        primary: '+91 70118 82335',
        hours: 'Mon-Fri: 9:00 AM - 7:00 PM IST',
        note: 'Direct line to project managers and technical specialists'
      }
    },
    {
      id: 'email',
      title: 'Email Communication',
      description: 'Detailed project specifications and technical documentation',
      icon: 'Mail',
      color: 'bg-primary',
      details: {
        hours: 'Response within 2 hours during business days',
        emergency: 'Emergency: sarthaksharma1999@gmail.com',
      }
    },
    {
      id: 'chat',
      title: 'Live Chat',
      description: 'Real-time assistance during business hours',
      icon: 'MessageCircle',
      color: 'bg-accent',
      details: {
        primary: 'Available Now',
        secondary: 'Average wait: &lt;30 seconds',
        hours: 'Mon-Fri: 8:00 AM - 6:00 PM EST',
        emergency: 'After hours: Automated quote system',
        note: 'Perfect for quick questions and initial project discussions'
      }
    },
    {
      id: 'form',
      title: 'Project Inquiry',
      description: 'Structured form for comprehensive project details',
      icon: 'FileText',
      color: 'bg-cta',
      details: {
        primary: 'Intelligent Routing',
        secondary: 'Matched to right specialist',
        hours: 'Processed within 1 business hour',
        emergency: 'Priority flagging available',
        note: 'Automatically routes to appropriate department based on project type'
      }
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-muted rounded-full px-4 py-2 mb-6">
            <Icon name="Headphones" size={16} />
            <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Multiple Ways to Connect</span>
          </div>
          
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-6">
            Choose Your Preferred
            <span className="block text-accent">Communication Method</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you need immediate support, detailed project planning, or just have a quick question, 
            we've designed multiple touchpoints to match your communication style and urgency level.
          </p>
        </div>

        {/* Contact Method Tabs */}
        <div className="grid lg:grid-cols-4 gap-4 mb-12">
          {contactMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setActiveMethod(method.id)}
              className={`p-6 rounded-industrial text-left transition-all duration-300 industrial-hover ${
                activeMethod === method.id
                  ? 'bg-primary text-primary-foreground shadow-structural'
                  : 'bg-card hover:bg-muted border border-border'
              }`}
            >
              <div className={`w-12 h-12 ${method.color} rounded-industrial flex items-center justify-center mb-4 ${
                activeMethod === method.id ? 'bg-accent' : ''
              }`}>
                <Icon name={method.icon} size={24} color="white" />
              </div>
              <h3 className="font-heading font-semibold mb-2">{method.title}</h3>
              <p className={`text-sm ${
                activeMethod === method.id ? 'text-primary-foreground/80' : 'text-muted-foreground'
              }`}>
                {method.description}
              </p>
            </button>
          ))}
        </div>

        {/* Active Method Details */}
        <div className="bg-card rounded-industrial border border-border p-8 shadow-structural">
          {contactMethods.map((method) => (
            activeMethod === method.id && (
              <div key={method.id} className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-16 h-16 ${method.color} rounded-industrial flex items-center justify-center`}>
                      <Icon name={method.icon} size={28} color="white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-primary">{method.title}</h3>
                      <p className="text-muted-foreground">{method.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="ArrowRight" size={16} className="text-accent" />
                      <span className="font-semibold text-primary">{method.details.primary}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Clock" size={16} className="text-muted-foreground" />
                      <span className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: method.details.hours }}></span>
                    </div>
                    <div className="bg-muted rounded-industrial p-4 mt-6">
                      <div className="flex items-start space-x-3">
                        <Icon name="Info" size={16} className="text-accent mt-0.5" />
                        <p className="text-sm text-muted-foreground">{method.details.note}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-industrial p-6">
                  <h4 className="font-heading font-semibold text-primary mb-4">Quick Actions</h4>
                  <div className="space-y-3">
                    {method.id === 'phone' && (
                      <>
                        <Button variant="default" fullWidth iconName="Phone" iconPosition="left">
                          Call Now: +91 70118 82335
                        </Button>
                        <Button variant="outline" fullWidth iconName="PhoneCall" iconPosition="left">
                          Schedule Callback
                        </Button>
                      </>
                    )}

                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Response Time Guarantee */}
        <div className="mt-12 bg-gradient-to-r from-success/10 to-accent/10 rounded-industrial p-8 border border-success/20">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
              <Icon name="Clock" size={24} color="white" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-primary">Response Time Guarantee</h3>
              <p className="text-muted-foreground">We're committed to rapid, professional communication</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-success mb-1">&lt;15 min</div>
              <div className="text-sm text-muted-foreground">Emergency Calls</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-success mb-1">&lt;2 hours</div>
              <div className="text-sm text-muted-foreground">Email & Forms</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-success mb-1">&lt;30 sec</div>
              <div className="text-sm text-muted-foreground">Live Chat</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;