export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        shell: '#1a1a1a',
        panel: '#232323',
        surface: '#2b2b2b',
        raised: '#333333',
        hairline: '#3a3a3a',
        muted: '#8c8c8c',
        dim: '#6a6a6a',
        signal: '#4ade80',
        rec: '#ef4444',
      },
      borderRadius: {
        panel: '22px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
}
