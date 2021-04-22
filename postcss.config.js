const production = !process.env.ROLLUP_WATCH;

module.exports = {
  plugins: [
    require("tailwindcss"),
    ...(production
      ? [require("autoprefixer"), require("cssnano")({ preset: "default" })]
      : []),
  ],
};