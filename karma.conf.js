module.exports = function test(config) {
  config.set({
    files: [
      'test/**/*.spec.js'
    ],
    preprocessors: {
      'test/**/*.spec.js': ['webpack']
    },
    frameworks: ['mocha'],
    browsers: ['PhantomJS'],
    singleRun: true,
    reporters: ['spec', 'coverage'], // spec reporter is doing like mocha (one check line per test)

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    webpack: {
      module: {
        loaders: [{
          test: /\.js$/,
          loaders: ['babel-loader'],
          exclude: /node_modules/
        }],
        postLoaders: [{
          test: /\.js$/,
          exclude: /(test|node_modules)/,
          loader: 'istanbul-instrumenter'
        }]
      }
    },
    webpackMiddleware: {
      noInfo: true // hide webpack crap messages in console
    }
  });
};
