import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactMethods from './components/ContactMethods';

const ContactConsultation = () => {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <ContactMethods />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-industrial flex items-center justify-center">
                    <span className="text-white font-bold">M</span>
                  </div>
                  <div>
                    <div className="font-heading font-bold text-lg">NIRVAAN METALS</div>
                    <div className="text-xs text-primary-foreground/70 font-mono">Precision Forged</div>
                  </div>
                </div>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Leading industrial metalwork specialists delivering precision-engineered solutions since 2023.
                </p>
              </div>

              {/* Quick Contact */}
              <div>
                <h4 className="font-heading font-semibold mb-4">Quick Contact</h4>
                <div className="space-y-2 text-sm">
                  <div className="text-primary-foreground/80">Main: (+91) 70118 82335</div>
                  <div className="text-primary-foreground/80">sarthaksharma1999@gmail.com</div>
                  <div className="text-primary-foreground/80">Plot no.12 nangla gujran sohna road<br />Faridabad, Haryana 121004</div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-heading font-semibold mb-4">Services</h4>
                <div className="space-y-2 text-sm text-primary-foreground/80">
                  <div>Zinc die casting</div>
                  <div>Purchase Hindustan zinc</div>
                </div>
              </div>

              {/* Business Hours */}
              <div>
                <h4 className="font-heading font-semibold mb-4">Business Hours</h4>
                <div className="space-y-2 text-sm text-primary-foreground/80">
                  <div>Monday - Friday: 7:00 AM - 7:00 PM</div>
                  <div>Saturday: 8:00 AM - 4:00 PM</div>
                  <div>Sunday: Emergency Only</div>
                  <div className="text-accent font-semibold">24/7 Emergency Support</div>
                </div>
              </div>
            </div>

            <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-primary-foreground/60">
                © {new Date().getFullYear()} NIRVAAN METALS. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm text-primary-foreground/60 mt-4 md:mt-0">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
                <span>Safety Standards</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactConsultation;