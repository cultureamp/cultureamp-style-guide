const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const error = require('../util/error').default;

module.exports = decorateConfig;

function decorateConfig(config, options) {
  return [
    excludeStyleGuideFromModules,
    addStyleGuideLoaders,
    addStyleGuideAlias,
  ].reduce((decoratedConfig, decorator) => {
    return decorator(decoratedConfig, options);
  }, config);
}

function excludeStyleGuideFromModules(config, options) {
  const rule = Object.assign({}, config, {
    module: Object.assign({}, config.module, {
      rules: config.module.rules.map(excludeStyleGuideFromRule),
    }),
  });
  return rule;
}

function excludeStyleGuideFromRule(rule) {
  return Object.assign({}, rule, {
    exclude: styleGuidePaths().concat(rule.exclude || []),
  });
}

function addStyleGuideLoaders(config, options) {
  return Object.assign({}, config, {
    module: Object.assign({}, config.module, {
      rules: styleGuideLoaders(options).concat(config.module.rules),
    }),
  });
}

function styleGuideLoaders(options) {
  return [jsLoader(options), cssLoader(options), svgLoader(options)];
}

function jsLoader() {
  return {
    test: /\.js$/,
    include: styleGuidePaths(),
    loader: require.resolve('babel-loader'),
    options: require('./babel.config.js'),
  };
}

function cssLoader(options) {
  return {
    test: /\.scss$/,
    include: styleGuidePaths(),
    loader: cssLoaderDeliveryDecorator(options)([
      {
        loader: require.resolve('css-loader'),
        options: {
          modules: true,
          importLoaders: 2, // number of subsequent loaders to apply on `composes ... from`
          localIdentName: '[name]__[local]--[hash:base64:5]',
          sourceMap: true,
        },
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          plugins: () => [require('autoprefixer')()],
          sourceMap: true,
        },
      },
      {
        loader: require.resolve('sass-loader'),
        options: {
          sourceMap: true,
        },
      },
    ]),
  };
}

function cssLoaderDeliveryDecorator(options) {
  const extractTextPlugin = options && options.extractTextPlugin;

  if (extractTextPlugin == ExtractTextPlugin) {
    error(`
      When decorating your Webpack config with cultureamp-style-guide, you
      passed in \`ExtractTextPlugin\` (the constructor) rather than creating an
      instance with \`new ExtractTextPlugin(...)\` and passing that. An instance
      is required, because the style guide may use \`ExtractTextPlugin\` too, so
      both your project and the style guide must each create and configure their
      own instance(s) of the plugin separately. For help on how to do this,
      refer to the ExtractTextPlugin documentation:
      https://github.com/webpack/extract-text-webpack-plugin/tree/webpack-1
    `);
  }

  return extractTextPlugin
    ? loaders =>
        extractTextPlugin.extract({
          fallback: require.resolve('style-loader'),
          use: loaders,
        })
    : loaders => [require.resolve('style-loader'), ...loaders];
}

function svgLoader(options) {
  return {
    test: /\.svg$/,
    include: styleGuidePaths(),
    use: [
      {
        loader: require.resolve('svg-sprite-loader'),
        options: require('./svgo.config.js'),
      },
      {
        loader: require.resolve('svgo-loader'),
        options: 'symbolId=ca-icon-[name]',
      },
    ],
  };
}

function addStyleGuideAlias(config, options) {
  const styleGuideAliases = {
    'cultureamp-style-guide': path.resolve(__dirname, '..'),
  };

  for (var alias in styleGuideAliases) {
    if (
      config.resolve &&
      config.resolve.alias &&
      config.resolve.alias[alias] &&
      config.resolve.alias[alias] !== styleGuideAliases[alias]
    ) {
      error(`
        Resolve alias '${alias}' is reserved for use by cultureamp-style-guide.
        Please use a different name.
      `);
    }
  }

  return Object.assign({}, config, {
    resolve: Object.assign({}, config.resolve, {
      alias: Object.assign({}, config.resolve.alias, styleGuideAliases),
    }),
  });
}

function styleGuidePaths() {
  module._styleGuidePaths = module._styleGuidePaths || [
    path.resolve(__dirname, '../components'),
    path.resolve(__dirname, '../styles'),
    path.resolve(__dirname, '../icons'),
    path.resolve(__dirname, '../util'),
  ];

  return module._styleGuidePaths;
}
