/** Design tokens. Slate and ink use the exact wireframe values.
 *  Grafty originals: ink #0A0A0B, slate #B8C0CD (kept as `sky`, used by the ghost fade). */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#27272A',
        slate: '#BEC4CC',
        sky: '#B8C0CD',
        mist: '#D5DAE2',
        flame: '#FF4C1C',
        violet: '#5B2BFF',
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        script: ['"Mr Dafoe"', 'cursive'],
      },
    },
  },
  plugins: [],
}
