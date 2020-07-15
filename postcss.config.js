const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')({
  preset: ['default', {
    discardComments: {
      removeAll: true,
    },
  }]
})
module.exports = {
  plugins: [
    require("postcss-import"),
    require('tailwindcss'),
    require('postcss-nested'),
    require('postcss-custom-properties'),
    require('postcss-preset-env')({ stage: 1 }),
    ...process.env.NODE_ENV === 'production' ? [cssnano] : [],
    ...process.env.NODE_ENV === 'production' ? [autoprefixer] : [],
  ],
};
