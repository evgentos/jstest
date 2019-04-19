'use strict'

let http = require("http");
let url = require("url");

function start(route) {
    http.createServer(function (request, response) {
        let pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname +" received.");

        route(pathname);
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Привет Мир!");
        response.end();
    }).listen(8888);

    console.log("Server has started.");
}

exports.start = start;