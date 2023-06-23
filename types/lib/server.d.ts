/// <reference types="node" />
export = createApplication;
/**
 * @typedef {Object} App
 * @property {function(string, function(http.IncomingMessage, http.ServerResponse, Object, any):void):void} get - Registers a GET request handler.
 * @property {function(string, function(http.IncomingMessage, http.ServerResponse, Object, any):void):void} post - Registers a POST request handler.
 * @property {function(string, function(http.IncomingMessage, http.ServerResponse, Object, any):void):void} put - Registers a PUT request handler.
 * @property {function(string, function(http.IncomingMessage, http.ServerResponse, Object, any):void):void} delete - Registers a DELETE request handler.
 * @property {function(number, function():void):http.Server} listen - Starts listening for incoming requests.
 */
/**
 * Create a new application.
 * @returns {App} The new application.
 */
declare function createApplication(): App;
declare namespace createApplication {
    export { App };
}
type App = {
    /**
     * - Registers a GET request handler.
     */
    get: (arg0: string, arg1: (arg0: http.IncomingMessage, arg1: http.ServerResponse, arg2: Object, arg3: any) => void) => void;
    /**
     * - Registers a POST request handler.
     */
    post: (arg0: string, arg1: (arg0: http.IncomingMessage, arg1: http.ServerResponse, arg2: Object, arg3: any) => void) => void;
    /**
     * - Registers a PUT request handler.
     */
    put: (arg0: string, arg1: (arg0: http.IncomingMessage, arg1: http.ServerResponse, arg2: Object, arg3: any) => void) => void;
    /**
     * - Registers a DELETE request handler.
     */
    delete: (arg0: string, arg1: (arg0: http.IncomingMessage, arg1: http.ServerResponse, arg2: Object, arg3: any) => void) => void;
    /**
     * - Starts listening for incoming requests.
     */
    listen: (arg0: number, arg1: () => void) => http.Server;
};
import http = require("http");
