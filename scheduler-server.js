var lively = require('livelykernel'), // loads Lively asynchronously
    scheduler;

// searches for scheduler.js in the directory of the current module
lively.JSLoader.require('./scheduler').toRun(function() {
    // this code gets executed when Lively fully loaded and the module was loaded
    scheduler = new lively.MyScheduler();
});

// express routes for LifeStar subserver
module.exports = function(baseRoute, app) {
    app.get(baseRoute, function(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(scheduler.report());
        res.end();
    });
    app.post(baseRoute, function(req, res) {
        res.writeHead(201, { 'Content-Type': 'text/plain' });
        res.write(scheduler.addTask(req.param('task')));
        res.end();
    });
}
