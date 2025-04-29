/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eefaf3',
          100: '#d4f0e2',
          200: '#aee0c5',
          300: '#83caa3',
          400: '#6DB784', // Main primary color
          500: '#479f67',
          600: '#358153',
          700: '#2b6544',
          800: '#254f37',
          900: '#1f422f',
          950: '#10261a',
        },
        secondary: {
          50: '#f7f7f7',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#909090', // Main secondary color
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#262626',
        },
        wood: {
          50: '#fbf8f0',
          100: '#f7f1df',
          200: '#eee1be',
          300: '#e5cb94',
          400: '#dbb162',
          500: '#d29a41',
          600: '#c18134',
          700: '#a06630',
          800: '#82522c',
          900: '#6c4528',
          950: '#3c2313',
        },
      },
      borderRadius: {
        '2lg': '0.5rem', // 8px
      },
      spacing: {
        '18': '4.5rem',
      },
      boxShadow: {
        'soft': '0 4px 14px 0 rgba(0, 0, 0, 0.05)',
        'medium': '0 6px 24px rgba(0, 0, 0, 0.08)',
      },
      gridTemplateColumns: {
        'product-grid': 'repeat(auto-fill, minmax(280px, 1fr))',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            h1: {
              fontWeight: '800',
              marginBottom: '2rem',
            },
            h2: {
              fontWeight: '700',
              marginTop: '2.5rem',
              marginBottom: '1.25rem',
            },
            h3: {
              fontWeight: '600',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            p: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              lineHeight: '1.8',
            },
            'ul > li': {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            img: {
              borderRadius: '0.5rem',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            a: {
              color: '#479f67',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            blockquote: {
              fontStyle: 'normal',
              borderLeftColor: '#6DB784',
              backgroundColor: '#f8fafc',
              padding: '1.5rem',
              borderRadius: '0.5rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};