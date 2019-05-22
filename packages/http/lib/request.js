"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpRequestMethod;
(function (HttpRequestMethod) {
    HttpRequestMethod["GET"] = "GET";
    HttpRequestMethod["POST"] = "POST";
    HttpRequestMethod["PUT"] = "PUT";
    HttpRequestMethod["DELETE"] = "DELETE";
})(HttpRequestMethod = exports.HttpRequestMethod || (exports.HttpRequestMethod = {}));
;
var HttpRequest = /** @class */ (function () {
    function HttpRequest(config) {
        this.method = HttpRequestMethod.GET;
        if (config) {
            this.headers = config.headers;
            if (config.method) {
                this.method = config.method;
            }
            this.url = config.url;
            this.body = config.body;
            this.timeout = config.timeout;
        }
    }
    return HttpRequest;
}());
exports.HttpRequest = HttpRequest;
