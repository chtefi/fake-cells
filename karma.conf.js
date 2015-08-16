var path = require('path');

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
      dir: 'coverage/',
      reporters: [{
        type: 'text'
      }, {
        type: 'text-summary'
      }, {
        type: 'html'
      }]
    },

    webpack: {
      module: {
        loaders: [{
          test: /\.js$/,
          loaders: ['babel-loader'],
          include: path.resolve('test/')
        }, {
          test: /\.js$/,
          loaders: ['isparta'],
          include: path.resolve('src/')
        }]
        // postLoaders: [{
        //   test: /\.js$/,
        //   exclude: /(test|node_modules)/,
        //   loader: 'istanbul-instrumenter'
        // }]
      }
    },
    webpackMiddleware: {
      noInfo: true // hide webpack crap messages in console
    }
  });
};
