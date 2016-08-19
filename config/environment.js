/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'zidsms',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    firebase: {
    apiKey: "AIzaSyCRbQw2h3q5U0sDjh7UFUmh0mvzTLVS7Dk",
    authDomain: "zidsms-93ec3.firebaseapp.com",
    databaseURL: "https://zidsms-93ec3.firebaseio.com",
    storageBucket: "zidsms-93ec3.appspot.com",
    },
     moment: {
      outputFormat: 'L'
    },
  // if using ember-cli-content-security-policy
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
