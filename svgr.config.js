// svgr.config.js
module.exports = {
  svgo: true,
  svgoConfig: {
    plugins: [
      // оставляем viewBox
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
    ],
  },
};
