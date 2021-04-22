const production = !process.env.ROLLUP_WATCH;

module.exports = {
  mode: 'jit',
  purge: {
    content: ["./assets/__app.html","./src/**/*.svelte"],
    enabled: production,
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
