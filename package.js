
Package.describe({
    summary: "Bootstrap Switch, packaged for Meteor using less."
});

Package.on_use(function (api, where) {

    
    api.use([
        'jquery', 
        'less', 
        //'coffeescript'
    ], 'client');

    api.add_files([
        //'lib/less/bootstrap3/variables.less',
        //'lib/less/bootstrap3/mixins.less',
        //'lib/less/bootstrap3/bootstrap-switch.less',
        //'lib/coffee/bootstrap-switch.coffee'
        'lib/js/bootstrap-switch.js'
    ], 'client');
    
    /*
    api.use([
        'jquery'
    ], 'client');

    api.add_files([
        'lib/css/bootstrap3/bootstrap-switch.css',
        'lib/js/bootstrap-switch.js'
    ], 'client');
    */
});