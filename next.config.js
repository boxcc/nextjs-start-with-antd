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

    webpack(config, { isServer, dev }) {
      if (!isServer && !dev) {
        config.optimization.splitChunks.cacheGroups.commons.minChunks = 2;
      }

      return config;
    },

    swcMinify: true,
  }),
);
