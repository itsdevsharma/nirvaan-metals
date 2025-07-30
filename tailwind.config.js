/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Colors
        background: 'var(--color-background)', // gray-50
        foreground: 'var(--color-foreground)', // gray-900
        border: 'var(--color-border)', // primary with opacity
        input: 'var(--color-input)', // white
        ring: 'var(--color-ring)', // primary
        
        // Card Colors
        card: {
          DEFAULT: 'var(--color-card)', // white
          foreground: 'var(--color-card-foreground)' // gray-900
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // white
          foreground: 'var(--color-popover-foreground)' // gray-900
        },
        
        // Muted Colors
        muted: {
          DEFAULT: 'var(--color-muted)', // gray-50
          foreground: 'var(--color-muted-foreground)' // gray-500
        },
        
        // Brand Colors
        primary: {
          DEFAULT: 'var(--color-primary)', // slate-800
          foreground: 'var(--color-primary-foreground)' // white
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // slate-700
          foreground: 'var(--color-secondary-foreground)' // white
        },
        
        // Accent Colors
        accent: {
          DEFAULT: 'var(--color-accent)', // gold
          foreground: 'var(--color-accent-foreground)' // gray-900
        },
        
        // Status Colors
        success: {
          DEFAULT: 'var(--color-success)', // green-600
          foreground: 'var(--color-success-foreground)' // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // orange-500
          foreground: 'var(--color-warning-foreground)' // gray-900
        },
        error: {
          DEFAULT: 'var(--color-error)', // red-500
          foreground: 'var(--color-error-foreground)' // white
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // red-500
          foreground: 'var(--color-destructive-foreground)' // white
        },
        
        // CTA Color
        cta: {
          DEFAULT: 'var(--color-cta)', // orange-600
          foreground: 'var(--color-cta-foreground)' // white
        },
        
        // Industrial Specific Colors
        steel: 'var(--color-steel)', // secondary
        copper: 'var(--color-copper)', // orange-600
        forge: 'var(--color-forge)', // orange-600
        surface: 'var(--color-surface)' // white
      },
      fontFamily: {
        'sans': ['Source Sans Pro', 'sans-serif'],
        'heading': ['Montserrat', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace']
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'value-prop': ['1.25rem', { lineHeight: '1.6', fontWeight: '400' }]
      },
      spacing: {
        'industrial': 'clamp(1rem, 4vw, 3rem)'
      },
      borderRadius: {
        'industrial': '4px'
      },
      boxShadow: {
        'industrial': '0 2px 4px rgba(44, 62, 80, 0.1), 0 8px 16px rgba(44, 62, 80, 0.1)',
        'structural': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'cta-hover': '0 6px 20px rgba(255, 107, 53, 0.3)'
      },
      animation: {
        'spark-trail': 'sparkTrail 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
        'molten-metal': 'moltenMetal 1.2s ease-in-out infinite',
        'blueprint-reveal': 'blueprintReveal 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'precision-reveal': 'precisionReveal 0.8s ease-out 0.8s forwards'
      },
      keyframes: {
        sparkTrail: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' }
        },
        moltenMetal: {
          '0%, 100%': { 
            borderRadius: '0%', 
            filter: 'hue-rotate(0deg)' 
          },
          '50%': { 
            borderRadius: '50%', 
            filter: 'hue-rotate(45deg)' 
          }
        },
        blueprintReveal: {
          'to': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }
        },
        precisionReveal: {
          'to': { transform: 'scaleY(1)' }
        }
      },
      backdropFilter: {
        'steel': 'contrast(1.2) saturate(0.8)'
      },
      backgroundImage: {
        'forge-gradient': 'conic-gradient(from 180deg, #1a1a1a 0deg, #D4AF37 120deg, #FF6B35 240deg, #1a1a1a 360deg)',
        'cta-gradient': 'linear-gradient(135deg, #FF6B35, #D4AF37)',
        'steel-texture': 'linear-gradient(45deg, rgba(52, 73, 94, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(52, 73, 94, 0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(52, 73, 94, 0.1) 75%), linear-gradient(-45deg, transparent 75%, rgba(52, 73, 94, 0.1) 75%)'
      },
      transitionTimingFunction: {
        'industrial': 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      zIndex: {
        'header': '50',
        'sidebar': '40',
        'overlay': '60'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate')
  ],
}