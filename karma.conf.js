module.exports = function test(config) {
  config.set({
    files: [
       'test/**/*.spec.js'
    ],
    preprocessors: {
      'src/**/*.js': ['webpack'],
      'test/**/*.spec.js': ['webpack']
    },
    frameworks: ['mocha'],
    browsers: [ 'PhantomJS' ],
    singleRun: true,
    reporters: [ 'spec' ], // spec reporter is doing like mocha (one check line per test)

    webpack: {
      module: {
        loaders: [
        {
          test: /\.js$/, loaders: [ 'babel-loader'], exclude: /node_modules/
        }
        ]
      }
    },
    webpackMiddleware: {
      noInfo: true  // hide webpack crap messages in console
    }
  });
};

