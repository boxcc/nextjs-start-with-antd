const glob = require('glob');

module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss/nesting',
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
    ['tailwindcss', {}],
    ['autoprefixer', {}],
    // [
    //   '@fullhuman/postcss-purgecss',
    //   {
    //     content: [
    //       './src/pages/**/*.{js,jsx,ts,tsx}',
    //       './src/components/**/*.{js,jsx,ts,tsx}',
    //       './src/containers/**/*.{js,jsx,ts,tsx}',
    //       ...glob.sync('node_modules/antd/es/**/*.css', { noDir: true }),
    //     ],
    //     defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    //     safelist: ['html', 'body'],
    //     extractors: [
    //       {
    //         extractor: (content) => content.match(/([a-zA-Z-]+)(?= {)/g) || [],
    //         extensions: ['css'],
    //       },
    //     ],
    //   },
    // ],
  ],
};
