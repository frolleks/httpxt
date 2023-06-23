const http = require("http");
const router = require("find-my-way")();

/**
 * @typedef {Object} App
 * @property {function(string, function(http.IncomingMessage, http.ServerResponse, Object, any):void):void} get - Registers a GET request handler.
 * @property {function(string, function(http.IncomingMessage, http.ServerResponse, Object, any):void):void} post - Registers a POST request handler.
 * @property {function(string, function(http.IncomingMessage, http.ServerResponse, Object, any):void):void} put - Registers a PUT request handler.
 * @property {function(string, function(http.IncomingMessage, http.ServerResponse, Object, any):void):void} delete - Registers a DELETE request handler.
 * @property {function(string, function(http.IncomingMessage, http.ServerResponse, Object, any):void):void} patch - Registers a PATCH request handler.
 * @property {function(number, function():void):http.Server} listen - Starts listening for incoming requests.
 */

/**
 * Create a new application.
 * @returns {App} The new application.
 */
function createApplication() {
  const app = {
    /**
     * Register a new handler for GET requests.
     * @param {string} path - The path to handle.
     * @param {function(http.IncomingMessage, http.ServerResponse, Object, any):void} handler - The handler function.
     */
    get: function (path, handler) {
      router.on("GET", path, handler);
    },

    /**
     * Register a new handler for POST requests.
     * @param {string} path - The path to handle.
     * @param {function(http.IncomingMessage, http.ServerResponse, Object, any):void} handler - The handler function.
     */
    post: function (path, handler) {
      router.on("POST", path, handler);
    },

    /**
     * Register a new handler for PUT requests.
     * @param {string} path - The path to handle.
     * @param {function(http.IncomingMessage, http.ServerResponse, Object, any):void} handler - The handler function.
     */
    put: function (path, handler) {
      router.on("PUT", path, handler);
    },

    /**
     * Register a new handler for DELETE requests.
     * @param {string} path - The path to handle.
     * @param {function(http.IncomingMessage, http.ServerResponse, Object, any):void} handler - The handler function.
     */
    delete: function (path, handler) {
      router.on("DELETE", path, handler);
    },

    /**
     * Register a new handler for PATCH requests.
     * @param {string} path - The path to handle.
     * @param {function(http.IncomingMessage, http.ServerResponse, Object, any):void} handler - The handler function.
     */
    patch: function (path, handler) {
      router.on("PATCH", path, handler);
    },

    /**
     * Start the application server.
     * @param {number} [port=3000] - The port to listen on.
     * @param {function():void} [callback] - A function to call when the server is ready.
     * @returns {http.Server} The HTTP server.
     */
    listen: function (port = 3000, callback) {
      const server = http.createServer(async (req, res) => {
        router.lookup(req, res);
      });
      return server.listen(port, callback);
    },
  };

  return app;
}

module.exports = createApplication;
