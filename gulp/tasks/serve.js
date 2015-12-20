'use strict';
var connect = require('connect'),
    gulp = require('gulp');
var staticServer = connect(),
    serveStatic = require('serve-static');
var fs = require('fs');

var url = require('url');
var proxy = require('./serve-proxy');


gulp.task('serve', function (next) {
    var staticServerPath = BUILD_FOLDER;

    //if (release) {
    //  staticServerPath = RELEASE_FOLDER;
    //}

    staticServer
        .use('/api', proxy(url.parse(config.api.endpoint)))
        .use('/auth', proxy(url.parse(config.api.endpoint)))
        .use('/media', proxy(url.parse(config.api.endpoint)))
        .use(serveStatic(staticServerPath)).use(function (req, res, next) {
            var url = req.originalUrl;

            if (url.substr(0, 5) == '/api/') {
                var fileName = 'api' + url.replace('/api', '').replace('?', '.') + '.' + req.method.toLowerCase() + '.json';
                fs.readFile(fileName, 'utf-8', function (err, data) {
                    if (err) return next(err);

                    var parsedData = JSON.parse(data);
                    if (parsedData.status) {
                        res.writeHead(parsedData.status, 'Specified status');
                    } else {
                        res.writeHead(200, 'Ok');
                    }

                    //setTimeout(function () {
                    res.end(data);
                    //}, config.api.delay);
                });
            } else {
                fs.readFile(staticServerPath + '/index.html', function (err, data) {
                    if (err) return next(err);
                    res.end(data);
                });
            }
        }).listen(process.env.PORT || config.ports.staticServer, next);
});
