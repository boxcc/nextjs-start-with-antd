/* eslint-disable no-param-reassign */
const withAntdLess = require('next-plugin-antd-less');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
  withAntdLess({
    // optional
    // modifyVars: { '@primary-color': '#04f' },
    // optional
    lessVarsFilePath: './src/styles/custom.less',
    // optional
    lessVarsFilePathAppendToEndOfContent: true,
    // optional https://github.com/webpack-contrib/css-loader#object
    cssLoaderOptions: {
      esModule: false,
      sourceMap: false,
      modules: {
        mode: 'local',
      },
    },

    // Other Config Here...

    webpack(config) {
      config.module.rules.push({
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: '@svgr/webpack',
            options: {
              babel: false,
              icon: true,
            },
          },
        ],
      });

      return config;
    },

    swcMinify: true,
  }),
);
