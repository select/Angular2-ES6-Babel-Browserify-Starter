// # Karma (renamed from Spectacular) Test Runner for JavaScript
// https://github.com/karma-runner/karma

// Here is an example where they are using webpack instead of browserify - babel
// https://github.com/AngularClass/angular2-webpack-starter/blob/master/karma.conf.js
module.exports = function(config) {
  config.set({
    // All plugins starting with karma will automatically be loaded
    // ```
    // plugins: [
    //   'karma-jasmine',
    //   ...
    // ],
    // ```

    // ## Adapter for the Jasmine testing framework.
    // We will be creating the unit test in jasmine
    // https://github.com/karma-runner/karma-jasmine
    frameworks: ['browserify', 'jasmine'],

    // ## Watch files
    // list of files / patterns to load in the browser
    files: [
      'src/**/*.spec.js'
    ],

    // list of files to exclude
    exclude: [],

    // ## Convert ES6 to ES5
    // as suggested here http://busypeoples.github.io/post/testing-workflow-with-es6/
    preprocessors: {
      'src/**/*.spec.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: [
        ['babelify', {
          presets: ['es2015'],
          plugins: ['transform-decorators-legacy']
        }]
      ]
    },

    // reporters: ['progress', 'coverage'],

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'/*, 'Chrome'*/],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true

  });
};
