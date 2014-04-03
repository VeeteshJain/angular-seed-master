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
      'test/unit/*.js',
      //html templates(order in which path to html files are places matters)
      "app/partials/*.html",
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
             'karma-ie-launcher',
             'karma-ng-html2js-preprocessor'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },
    preprocessors: { 
      'app/js/**/*.js': 'coverage',
      'app/partials/*.html': 'ng-html2js'
  },
    reporters: ['progress','coverage'],
    coverageReporter: {
      type : 'html',
      dir : 'test/coverage/'
    },
    ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'public/',
      // prepend this to the
      prependPrefix: 'served/',
      // setting this option will create only a single module that contains templates
      // from all the files, so you can load them all with module('foo')
      moduleName: 'foo'
    }
})}
