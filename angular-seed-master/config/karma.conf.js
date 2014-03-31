module.exports = function(config){
    config.set({
    basePath : '../',

    files : [
    // serve html fixtures
      { pattern: "test/fixtures/*.html", watched: true, served: true, included: false },

      // dependencies
      "app/lib/jquery.min.js",

      // test helper code
      "test/helpers/jasmine-jquery.js",

      // set jasmine fixtures path
      // includes only this line: jasmine.getFixtures().fixturesPath = "base/test/fixtures/";
      "test/helpers/fixtures.js",

      // code you want to test
      "app/js/jquery_app.js",

      // test code
      "test/unit/jquery_appSpec.js",
      'app/lib/angular/angular.js',
      'app/lib/angular/angular-*.js',
      'test/lib/angular/angular-mocks.js',
      'app/js/**/*.js',
      'test/unit/*.js'
    ],

    exclude : [
      //'app/lib/angular/angular-loader.js',
      //'app/lib/angular/*.min.js',
      //'app/lib/angular/angular-scenario.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-jasmine',
             'karma-requirejs',//npm install -g karma-cli
             'karma-coverage',//npm install -g karma-coverage@0.1.2
             'karma-junit-reporter',
             'karma-phantomjs-launcher',
             'karma-chrome-launcher',
             'karma-firefox-launcher',
             'karma-ie-launcher'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },
    preprocessors: { 'app/js/**/*.js': 'coverage' },
    reporters: ['progress','coverage'],
    coverageReporter: {
      type : 'html',
      dir : 'test/coverage/'
    }

})}
