"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
function initialize(startingDir, excludedDirectories) {
    console.log(startingDir);
    listDirectories(startingDir, '', excludedDirectories);
}
function listDirectories(directoryPath, prefix, excludedDirectories) {
    if (prefix === void 0) { prefix = ''; }
    try {
        var files = fs.readdirSync(directoryPath);
        files.forEach(function (file) {
            var fullPath = path.join(directoryPath, file);
            var stats = fs.statSync(fullPath);
            if (stats.isDirectory() && !excludedDirectories.includes(file)) {
                console.log("".concat(prefix).concat(file, "/"));
                listDirectories(fullPath, "".concat(prefix, "  |-- "), excludedDirectories);
            }
            else if (stats.isDirectory() && excludedDirectories.includes(file)) {
            }
            else {
                console.log("".concat(prefix).concat(file));
            }
        });
    }
    catch (error) {
        console.error("Error al leer el directorio: ".concat(directoryPath), error);
    }
}
module.exports = {
    initialize: initialize,
};
