
Package.describe({
    name: "pfafman:bootstrap-switch-less",
    summary: "Bootstrap Switch 3, packaged for Meteor using less.",
  version: "3.3.2",
  git: "https://github.com/pfafman/meteor-bootstrap-3-switch-less.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom("METEOR@1.0");

    
    api.use([
        'jquery', 
        //'less', 
        //'coffeescript'
    ], 'client');

    api.add_files([
        //'lib/less/bootstrap3/variables.less',
        //'lib/less/bootstrap3/mixins.less',
        //'lib/less/bootstrap3/bootstrap-switch.less',
        //'lib/coffee/bootstrap-switch.coffee',
        'lib/js/bootstrap-switch.js'
    ], 'client');
    
});