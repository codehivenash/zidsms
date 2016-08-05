/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // app.import('vendor/css/datatables.css');
  // app.import('vendor/css/datatables.bootstrap.css');
   app.import('vendor/css/profile.css');
   // app.import('vendor/img/assets/layouts/layout/img/logo.png');


  // BEGIN CORE PLUGINS
  app.import('vendor/js/global/plugins/jquery.min.js');
  app.import('vendor/js/global/plugins/bootstrap/js/bootstrap.min.js');
  app.import('vendor/js/global/plugins/js.cookie.min.js');
  app.import('vendor/js/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js');
  app.import('vendor/js/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js');
  app.import('vendor/js/global/plugins/jquery.blockui.min.js');
  app.import('vendor/js/global/plugins/uniform/jquery.uniform.min.js');
  app.import('vendor/js/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js');
  // END CORE PLUGINS

  // BEGIN PAGE LEVEL PLUGINS
  // app.import('vendor/js/global/scripts/datatable.js');
  // app.import('vendor/js/global/plugins/datatables/datatables.min.js');
  // app.import('vendor/js/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.js');
  
  // app.import('vendor/js/pages/scripts/table-datatables-editable.min.js');
  // app.import('vendor/js/pages/scripts/table-datatables-managed.min.js');
  
  // BEGIN THEME GLOBAL SCRIPTS

  app.import('vendor/js/global/scripts/app.min.js');
  // END THEME GLOBAL SCRIPTS 
  // BEGIN THEME LAYOUT SCRIPTS
  app.import('vendor/js/layouts/layout/scripts/layout.min.js');
  app.import('vendor/js/layouts/layout/scripts/demo.min.js');
  app.import('vendor/js/layouts/global/scripts/quick-sidebar.min.js');


  // END THEME LAYOUT SCRIPTS



  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
