(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./frontend/node_modules/axios/index.js":
/*!**********************************************!*\
  !*** ./frontend/node_modules/axios/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./frontend/node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./frontend/node_modules/axios/lib/adapters/xhr.js":
/*!*********************************************************!*\
  !*** ./frontend/node_modules/axios/lib/adapters/xhr.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./frontend/node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./frontend/node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./frontend/node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./frontend/node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./frontend/node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./frontend/node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./frontend/node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./frontend/node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./frontend/node_modules/axios/lib/axios.js":
/*!**************************************************!*\
  !*** ./frontend/node_modules/axios/lib/axios.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./frontend/node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./frontend/node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./frontend/node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./frontend/node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./frontend/node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./frontend/node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./frontend/node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./frontend/node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./frontend/node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./frontend/node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./frontend/node_modules/axios/lib/cancel/Cancel.js":
/*!**********************************************************!*\
  !*** ./frontend/node_modules/axios/lib/cancel/Cancel.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./frontend/node_modules/axios/lib/cancel/CancelToken.js":
/*!***************************************************************!*\
  !*** ./frontend/node_modules/axios/lib/cancel/CancelToken.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./frontend/node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./frontend/node_modules/axios/lib/cancel/isCancel.js":
/*!************************************************************!*\
  !*** ./frontend/node_modules/axios/lib/cancel/isCancel.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./frontend/node_modules/axios/lib/core/Axios.js":
/*!*******************************************************!*\
  !*** ./frontend/node_modules/axios/lib/core/Axios.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./frontend/node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./frontend/node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./frontend/node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./frontend/node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./frontend/node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./frontend/node_modules/axios/lib/core/InterceptorManager.js":
/*!********************************************************************!*\
  !*** ./frontend/node_modules/axios/lib/core/InterceptorManager.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./frontend/node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./frontend/node_modules/axios/lib/core/buildFullPath.js":
/*!***************************************************************!*\
  !*** ./frontend/node_modules/axios/lib/core/buildFullPath.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./frontend/node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./frontend/node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./frontend/node_modules/axios/lib/core/createError.js":
/*!*************************************************************!*\
  !*** ./frontend/node_modules/axios/lib/core/createError.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./frontend/node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./frontend/node_modules/axios/lib/core/dispatchRequest.js":
/*!*****************************************************************!*\
  !*** ./frontend/node_modules/axios/lib/core/dispatchRequest.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./frontend/node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./frontend/node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./frontend/node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./frontend/node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./frontend/node_modules/axios/lib/core/enhanceError.js":
/*!**************************************************************!*\
  !*** ./frontend/node_modules/axios/lib/core/enhanceError.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./frontend/node_modules/axios/lib/core/mergeConfig.js":
/*!*************************************************************!*\
  !*** ./frontend/node_modules/axios/lib/core/mergeConfig.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./frontend/node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "./frontend/node_modules/axios/lib/core/settle.js":
/*!********************************************************!*\
  !*** ./frontend/node_modules/axios/lib/core/settle.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./frontend/node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./frontend/node_modules/axios/lib/core/transformData.js":
/*!***************************************************************!*\
  !*** ./frontend/node_modules/axios/lib/core/transformData.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./frontend/node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./frontend/node_modules/axios/lib/defaults.js":
/*!*****************************************************!*\
  !*** ./frontend/node_modules/axios/lib/defaults.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./frontend/node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./frontend/node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./frontend/node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./frontend/node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./frontend/node_modules/axios/lib/helpers/bind.js":
/*!*********************************************************!*\
  !*** ./frontend/node_modules/axios/lib/helpers/bind.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./frontend/node_modules/axios/lib/helpers/buildURL.js":
/*!*************************************************************!*\
  !*** ./frontend/node_modules/axios/lib/helpers/buildURL.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./frontend/node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./frontend/node_modules/axios/lib/helpers/combineURLs.js":
/*!****************************************************************!*\
  !*** ./frontend/node_modules/axios/lib/helpers/combineURLs.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./frontend/node_modules/axios/lib/helpers/cookies.js":
/*!************************************************************!*\
  !*** ./frontend/node_modules/axios/lib/helpers/cookies.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./frontend/node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./frontend/node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!******************************************************************!*\
  !*** ./frontend/node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./frontend/node_modules/axios/lib/helpers/isAxiosError.js":
/*!*****************************************************************!*\
  !*** ./frontend/node_modules/axios/lib/helpers/isAxiosError.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./frontend/node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!********************************************************************!*\
  !*** ./frontend/node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./frontend/node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./frontend/node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!************************************************************************!*\
  !*** ./frontend/node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./frontend/node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./frontend/node_modules/axios/lib/helpers/parseHeaders.js":
/*!*****************************************************************!*\
  !*** ./frontend/node_modules/axios/lib/helpers/parseHeaders.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./frontend/node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./frontend/node_modules/axios/lib/helpers/spread.js":
/*!***********************************************************!*\
  !*** ./frontend/node_modules/axios/lib/helpers/spread.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./frontend/node_modules/axios/lib/utils.js":
/*!**************************************************!*\
  !*** ./frontend/node_modules/axios/lib/utils.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./frontend/node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./frontend/node_modules/vue-perfect-scrollbar/dist/index.js":
/*!*******************************************************************!*\
  !*** ./frontend/node_modules/vue-perfect-scrollbar/dist/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(t){function e(i){if(r[i])return r[i].exports;var n=r[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,i){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var r=this[e];r[2]?t.push("@media "+r[2]+"{"+r[1]+"}"):t.push(r[1])}return t.join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},n=0;n<this.length;n++){var o=this[n][0];"number"==typeof o&&(i[o]=!0)}for(n=0;n<e.length;n++){var l=e[n];"number"==typeof l[0]&&i[l[0]]||(r&&!l[2]?l[2]=r:r&&(l[2]="("+l[2]+") and ("+r+")"),t.push(l))}},t}},function(t,e,r){r(10);var i=r(7)(r(3),r(8),null,null);t.exports=i.exports},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(1),n=r.n(i);e.default=n.a},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(6);e.default={name:"vue-perfect-scrollbar",props:{settings:{default:void 0},tagname:{type:String,default:"section"}},data:function(){return{ps:null}},methods:{update:function(){this.ps&&this.ps.update()},__init:function(){this.ps||(this.ps=new i.a(this.$el,this.settings))},__uninit:function(){this.ps&&(this.ps.destroy(),this.ps=null)}},watch:{$route:function(){this.update()}},mounted:function(){this.$isServer||this.__init()},updated:function(){this.$nextTick(this.update)},activated:function(){this.__init()},deactivated:function(){this.__uninit()},beforeDestroy:function(){this.__uninit()}}},function(t,e,r){e=t.exports=r(0)(),e.push([t.i,".ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{height:15px;bottom:0}.ps__rail-x,.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;position:absolute}.ps__rail-y{width:15px;right:0}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px}.ps__thumb-x,.ps__thumb-y{background-color:#aaa;border-radius:6px;position:absolute}.ps__thumb-y{transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.ps{overflow:auto!important}}",""])},function(t,e,r){e=t.exports=r(0)(),e.i(r(4),""),e.push([t.i,".ps-container{position:relative}",""])},function(t,e,r){"use strict";/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
function i(t){return getComputedStyle(t)}function n(t,e){for(var r in e){var i=e[r];"number"==typeof i&&(i+="px"),t.style[r]=i}return t}function o(t){var e=document.createElement("div");return e.className=t,e}function l(t,e){if(!w)throw new Error("No element matching method supported");return w.call(t,e)}function s(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function a(t,e){return Array.prototype.filter.call(t.children,function(t){return l(t,e)})}function c(t,e){var r=t.element.classList,i=Y.state.scrolling(e);r.contains(i)?clearTimeout(_[e]):r.add(i)}function h(t,e){_[e]=setTimeout(function(){return t.isAlive&&t.element.classList.remove(Y.state.scrolling(e))},t.settings.scrollingThreshold)}function u(t,e){c(t,e),h(t,e)}function p(t){if("function"==typeof window.CustomEvent)return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function d(t,e,r,i,n){var o=r[0],l=r[1],s=r[2],a=r[3],c=r[4],h=r[5];void 0===i&&(i=!0),void 0===n&&(n=!1);var d=t.element;t.reach[a]=null,d[s]<1&&(t.reach[a]="start"),d[s]>t[o]-t[l]-1&&(t.reach[a]="end"),e&&(d.dispatchEvent(p("ps-scroll-"+a)),e<0?d.dispatchEvent(p("ps-scroll-"+c)):e>0&&d.dispatchEvent(p("ps-scroll-"+h)),i&&u(t,a)),t.reach[a]&&(e||n)&&d.dispatchEvent(p("ps-"+a+"-reach-"+t.reach[a]))}function f(t){return parseInt(t,10)||0}function b(t){return l(t,"input,[contenteditable]")||l(t,"select,[contenteditable]")||l(t,"textarea,[contenteditable]")||l(t,"button,[contenteditable]")}function v(t){var e=i(t);return f(e.width)+f(e.paddingLeft)+f(e.paddingRight)+f(e.borderLeftWidth)+f(e.borderRightWidth)}function g(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function m(t,e){var r={width:e.railXWidth},i=Math.floor(t.scrollTop);e.isRtl?r.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:r.left=t.scrollLeft,e.isScrollbarXUsingBottom?r.bottom=e.scrollbarXBottom-i:r.top=e.scrollbarXTop+i,n(e.scrollbarXRail,r);var o={top:i,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?o.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth:o.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?o.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:o.left=e.scrollbarYLeft+t.scrollLeft,n(e.scrollbarYRail,o),n(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),n(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}function y(t,e){function r(e){b[p]=v+m*(e[l]-g),c(t,d),T(t),e.stopPropagation(),e.preventDefault()}function i(){h(t,d),t[f].classList.remove(Y.state.clicking),t.event.unbind(t.ownerDocument,"mousemove",r)}var n=e[0],o=e[1],l=e[2],s=e[3],a=e[4],u=e[5],p=e[6],d=e[7],f=e[8],b=t.element,v=null,g=null,m=null;t.event.bind(t[a],"mousedown",function(e){v=b[p],g=e[l],m=(t[o]-t[n])/(t[s]-t[u]),t.event.bind(t.ownerDocument,"mousemove",r),t.event.once(t.ownerDocument,"mouseup",i),t[f].classList.add(Y.state.clicking),e.stopPropagation(),e.preventDefault()})}var w="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector),Y={main:"ps",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},_={x:null,y:null},X=function(t){this.element=t,this.handlers={}},W={isEmpty:{configurable:!0}};X.prototype.bind=function(t,e){void 0===this.handlers[t]&&(this.handlers[t]=[]),this.handlers[t].push(e),this.element.addEventListener(t,e,!1)},X.prototype.unbind=function(t,e){var r=this;this.handlers[t]=this.handlers[t].filter(function(i){return!(!e||i===e)||(r.element.removeEventListener(t,i,!1),!1)})},X.prototype.unbindAll=function(){var t=this;for(var e in t.handlers)t.unbind(e)},W.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every(function(e){return 0===t.handlers[e].length})},Object.defineProperties(X.prototype,W);var x=function(){this.eventElements=[]};x.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return e||(e=new X(t),this.eventElements.push(e)),e},x.prototype.bind=function(t,e,r){this.eventElement(t).bind(e,r)},x.prototype.unbind=function(t,e,r){var i=this.eventElement(t);i.unbind(e,r),i.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(i),1)},x.prototype.unbindAll=function(){this.eventElements.forEach(function(t){return t.unbindAll()}),this.eventElements=[]},x.prototype.once=function(t,e,r){var i=this.eventElement(t),n=function(t){i.unbind(e,n),r(t)};i.bind(e,n)};var L=function(t,e,r,i,n){void 0===i&&(i=!0),void 0===n&&(n=!1);var o;if("top"===e)o=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==e)throw new Error("A proper axis should be provided");o=["contentWidth","containerWidth","scrollLeft","x","left","right"]}d(t,r,o,i,n)},R={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!=typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)},T=function(t){var e=t.element,r=Math.floor(e.scrollTop);t.containerWidth=e.clientWidth,t.containerHeight=e.clientHeight,t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(a(e,Y.element.rail("x")).forEach(function(t){return s(t)}),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(a(e,Y.element.rail("y")).forEach(function(t){return s(t)}),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=g(t,f(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=f((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=g(t,f(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=f(r*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),m(e,t),t.scrollbarXActive?e.classList.add(Y.state.active("x")):(e.classList.remove(Y.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=0),t.scrollbarYActive?e.classList.add(Y.state.active("y")):(e.classList.remove(Y.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)},S=function(t){t.event.bind(t.scrollbarY,"mousedown",function(t){return t.stopPropagation()}),t.event.bind(t.scrollbarYRail,"mousedown",function(e){var r=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top,i=r>t.scrollbarYTop?1:-1;t.element.scrollTop+=i*t.containerHeight,T(t),e.stopPropagation()}),t.event.bind(t.scrollbarX,"mousedown",function(t){return t.stopPropagation()}),t.event.bind(t.scrollbarXRail,"mousedown",function(e){var r=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left,i=r>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=i*t.containerWidth,T(t),e.stopPropagation()})},H=function(t){y(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),y(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])},E=function(t){function e(e,i){var n=Math.floor(r.scrollTop);if(0===e){if(!t.scrollbarYActive)return!1;if(0===n&&i>0||n>=t.contentHeight-t.containerHeight&&i<0)return!t.settings.wheelPropagation}var o=r.scrollLeft;if(0===i){if(!t.scrollbarXActive)return!1;if(0===o&&e<0||o>=t.contentWidth-t.containerWidth&&e>0)return!t.settings.wheelPropagation}return!0}var r=t.element,i=function(){return l(r,":hover")},n=function(){return l(t.scrollbarX,":focus")||l(t.scrollbarY,":focus")};t.event.bind(t.ownerDocument,"keydown",function(o){if(!(o.isDefaultPrevented&&o.isDefaultPrevented()||o.defaultPrevented)&&(i()||n())){var l=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(l){if("IFRAME"===l.tagName)l=l.contentDocument.activeElement;else for(;l.shadowRoot;)l=l.shadowRoot.activeElement;if(b(l))return}var s=0,a=0;switch(o.which){case 37:s=o.metaKey?-t.contentWidth:o.altKey?-t.containerWidth:-30;break;case 38:a=o.metaKey?t.contentHeight:o.altKey?t.containerHeight:30;break;case 39:s=o.metaKey?t.contentWidth:o.altKey?t.containerWidth:30;break;case 40:a=o.metaKey?-t.contentHeight:o.altKey?-t.containerHeight:-30;break;case 32:a=o.shiftKey?t.containerHeight:-t.containerHeight;break;case 33:a=t.containerHeight;break;case 34:a=-t.containerHeight;break;case 36:a=t.contentHeight;break;case 35:a=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&0!==s||t.settings.suppressScrollY&&0!==a||(r.scrollTop-=a,r.scrollLeft+=s,T(t),e(s,a)&&o.preventDefault())}})},M=function(t){function e(e,r){var i=Math.floor(l.scrollTop),n=0===l.scrollTop,o=i+l.offsetHeight===l.scrollHeight,s=0===l.scrollLeft,a=l.scrollLeft+l.offsetWidth===l.scrollWidth;return!(Math.abs(r)>Math.abs(e)?n||o:s||a)||!t.settings.wheelPropagation}function r(t){var e=t.deltaX,r=-1*t.deltaY;return void 0!==e&&void 0!==r||(e=-1*t.wheelDeltaX/6,r=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,r*=10),e!==e&&r!==r&&(e=0,r=t.wheelDelta),t.shiftKey?[-r,-e]:[e,r]}function n(t,e,r){if(!R.isWebKit&&l.querySelector("select:focus"))return!0;if(!l.contains(t))return!1;for(var n=t;n&&n!==l;){if(n.classList.contains(Y.element.consuming))return!0;var o=i(n);if([o.overflow,o.overflowX,o.overflowY].join("").match(/(scroll|auto)/)){var s=n.scrollHeight-n.clientHeight;if(s>0&&!(0===n.scrollTop&&r>0||n.scrollTop===s&&r<0))return!0;var a=n.scrollWidth-n.clientWidth;if(a>0&&!(0===n.scrollLeft&&e<0||n.scrollLeft===a&&e>0))return!0}n=n.parentNode}return!1}function o(i){var o=r(i),s=o[0],a=o[1];if(!n(i.target,s,a)){var c=!1;t.settings.useBothWheelAxes?t.scrollbarYActive&&!t.scrollbarXActive?(a?l.scrollTop-=a*t.settings.wheelSpeed:l.scrollTop+=s*t.settings.wheelSpeed,c=!0):t.scrollbarXActive&&!t.scrollbarYActive&&(s?l.scrollLeft+=s*t.settings.wheelSpeed:l.scrollLeft-=a*t.settings.wheelSpeed,c=!0):(l.scrollTop-=a*t.settings.wheelSpeed,l.scrollLeft+=s*t.settings.wheelSpeed),T(t),c=c||e(s,a),c&&!i.ctrlKey&&(i.stopPropagation(),i.preventDefault())}}var l=t.element;void 0!==window.onwheel?t.event.bind(l,"wheel",o):void 0!==window.onmousewheel&&t.event.bind(l,"mousewheel",o)},k=function(t){function e(e,r){var i=Math.floor(h.scrollTop),n=h.scrollLeft,o=Math.abs(e),l=Math.abs(r);if(l>o){if(r<0&&i===t.contentHeight-t.containerHeight||r>0&&0===i)return 0===window.scrollY&&r>0&&R.isChrome}else if(o>l&&(e<0&&n===t.contentWidth-t.containerWidth||e>0&&0===n))return!0;return!0}function r(e,r){h.scrollTop-=r,h.scrollLeft-=e,T(t)}function n(t){return t.targetTouches?t.targetTouches[0]:t}function o(t){return(!t.pointerType||"pen"!==t.pointerType||0!==t.buttons)&&(!(!t.targetTouches||1!==t.targetTouches.length)||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))}function l(t){if(o(t)){var e=n(t);u.pageX=e.pageX,u.pageY=e.pageY,p=(new Date).getTime(),null!==f&&clearInterval(f)}}function s(t,e,r){if(!h.contains(t))return!1;for(var n=t;n&&n!==h;){if(n.classList.contains(Y.element.consuming))return!0;var o=i(n);if([o.overflow,o.overflowX,o.overflowY].join("").match(/(scroll|auto)/)){var l=n.scrollHeight-n.clientHeight;if(l>0&&!(0===n.scrollTop&&r>0||n.scrollTop===l&&r<0))return!0;var s=n.scrollLeft-n.clientWidth;if(s>0&&!(0===n.scrollLeft&&e<0||n.scrollLeft===s&&e>0))return!0}n=n.parentNode}return!1}function a(t){if(o(t)){var i=n(t),l={pageX:i.pageX,pageY:i.pageY},a=l.pageX-u.pageX,c=l.pageY-u.pageY;if(s(t.target,a,c))return;r(a,c),u=l;var h=(new Date).getTime(),f=h-p;f>0&&(d.x=a/f,d.y=c/f,p=h),e(a,c)&&t.preventDefault()}}function c(){t.settings.swipeEasing&&(clearInterval(f),f=setInterval(function(){return t.isInitialized?void clearInterval(f):d.x||d.y?Math.abs(d.x)<.01&&Math.abs(d.y)<.01?void clearInterval(f):(r(30*d.x,30*d.y),d.x*=.8,void(d.y*=.8)):void clearInterval(f)},10))}if(R.supportsTouch||R.supportsIePointer){var h=t.element,u={},p=0,d={},f=null;R.supportsTouch?(t.event.bind(h,"touchstart",l),t.event.bind(h,"touchmove",a),t.event.bind(h,"touchend",c)):R.supportsIePointer&&(window.PointerEvent?(t.event.bind(h,"pointerdown",l),t.event.bind(h,"pointermove",a),t.event.bind(h,"pointerup",c)):window.MSPointerEvent&&(t.event.bind(h,"MSPointerDown",l),t.event.bind(h,"MSPointerMove",a),t.event.bind(h,"MSPointerUp",c)))}},A=function(){return{handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1}},P={"click-rail":S,"drag-thumb":H,keyboard:E,wheel:M,touch:k},C=function(t,e){var r=this;if(void 0===e&&(e={}),"string"==typeof t&&(t=document.querySelector(t)),!t||!t.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");this.element=t,t.classList.add(Y.main),this.settings=A();for(var l in e)r.settings[l]=e[l];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var s=function(){return t.classList.add(Y.state.focus)},a=function(){return t.classList.remove(Y.state.focus)};this.isRtl="rtl"===i(t).direction,this.isNegativeScroll=function(){var e=t.scrollLeft,r=null;return t.scrollLeft=-1,r=t.scrollLeft<0,t.scrollLeft=e,r}(),this.negativeScrollAdjustment=this.isNegativeScroll?t.scrollWidth-t.clientWidth:0,this.event=new x,this.ownerDocument=t.ownerDocument||document,this.scrollbarXRail=o(Y.element.rail("x")),t.appendChild(this.scrollbarXRail),this.scrollbarX=o(Y.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",s),this.event.bind(this.scrollbarX,"blur",a),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var c=i(this.scrollbarXRail);this.scrollbarXBottom=parseInt(c.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=f(c.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=f(c.borderLeftWidth)+f(c.borderRightWidth),n(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=f(c.marginLeft)+f(c.marginRight),n(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=o(Y.element.rail("y")),t.appendChild(this.scrollbarYRail),this.scrollbarY=o(Y.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",s),this.event.bind(this.scrollbarY,"blur",a),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var h=i(this.scrollbarYRail);this.scrollbarYRight=parseInt(h.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=f(h.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?v(this.scrollbarY):null,this.railBorderYWidth=f(h.borderTopWidth)+f(h.borderBottomWidth),n(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=f(h.marginTop)+f(h.marginBottom),n(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:t.scrollLeft<=0?"start":t.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:t.scrollTop<=0?"start":t.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(t){return P[t](r)}),this.lastScrollTop=Math.floor(t.scrollTop),this.lastScrollLeft=t.scrollLeft,this.event.bind(this.element,"scroll",function(t){return r.onScroll(t)}),T(this)};C.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,n(this.scrollbarXRail,{display:"block"}),n(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=f(i(this.scrollbarXRail).marginLeft)+f(i(this.scrollbarXRail).marginRight),this.railYMarginHeight=f(i(this.scrollbarYRail).marginTop)+f(i(this.scrollbarYRail).marginBottom),n(this.scrollbarXRail,{display:"none"}),n(this.scrollbarYRail,{display:"none"}),T(this),L(this,"top",0,!1,!0),L(this,"left",0,!1,!0),n(this.scrollbarXRail,{display:""}),n(this.scrollbarYRail,{display:""}))},C.prototype.onScroll=function(t){this.isAlive&&(T(this),L(this,"top",this.element.scrollTop-this.lastScrollTop),L(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)},C.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),s(this.scrollbarX),s(this.scrollbarY),s(this.scrollbarXRail),s(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},C.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(t){return!t.match(/^ps([-_].+|)$/)}).join(" ")},e.a=C},function(t,e){t.exports=function(t,e,r,i){var n,o=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(n=t,o=t.default);var s="function"==typeof o?o.options:o;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),r&&(s._scopeId=r),i){var a=s.computed||(s.computed={});Object.keys(i).forEach(function(t){var e=i[t];a[t]=function(){return e}})}return{esModule:n,exports:o,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.$props.tagname,t._g({tag:"section",staticClass:"ps-container",on:{"~mouseover":function(e){return t.update(e)}}},t.$listeners),[t._t("default")],2)},staticRenderFns:[]}},function(t,e){function r(t,e){for(var r=0;r<t.length;r++){var i=t[r],n=h[i.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](i.parts[o]);for(;o<i.parts.length;o++)n.parts.push(s(i.parts[o],e))}else{for(var l=[],o=0;o<i.parts.length;o++)l.push(s(i.parts[o],e));h[i.id]={id:i.id,refs:1,parts:l}}}}function i(t){for(var e=[],r={},i=0;i<t.length;i++){var n=t[i],o=n[0],l=n[1],s=n[2],a=n[3],c={css:l,media:s,sourceMap:a};r[o]?r[o].parts.push(c):e.push(r[o]={id:o,parts:[c]})}return e}function n(t,e){var r=d(),i=v[v.length-1];if("top"===t.insertAt)i?i.nextSibling?r.insertBefore(e,i.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),v.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(e)}}function o(t){t.parentNode.removeChild(t);var e=v.indexOf(t);e>=0&&v.splice(e,1)}function l(t){var e=document.createElement("style");return e.type="text/css",n(t,e),e}function s(t,e){var r,i,n;if(e.singleton){var s=b++;r=f||(f=l(e)),i=a.bind(null,r,s,!1),n=a.bind(null,r,s,!0)}else r=l(e),i=c.bind(null,r),n=function(){o(r)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else n()}}function a(t,e,r,i){var n=r?"":i.css;if(t.styleSheet)t.styleSheet.cssText=g(e,n);else{var o=document.createTextNode(n),l=t.childNodes;l[e]&&t.removeChild(l[e]),l.length?t.insertBefore(o,l[e]):t.appendChild(o)}}function c(t,e){var r=e.css,i=e.media,n=e.sourceMap;if(i&&t.setAttribute("media",i),n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h={},u=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},p=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),d=u(function(){return document.head||document.getElementsByTagName("head")[0]}),f=null,b=0,v=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},void 0===e.singleton&&(e.singleton=p()),void 0===e.insertAt&&(e.insertAt="bottom");var n=i(t);return r(n,e),function(t){for(var o=[],l=0;l<n.length;l++){var s=n[l],a=h[s.id];a.refs--,o.push(a)}if(t){r(i(t),e)}for(var l=0;l<o.length;l++){var a=o[l];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete h[a.id]}}}};var g=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},function(t,e,r){var i=r(5);"string"==typeof i&&(i=[[t.i,i,""]]);r(9)(i,{});i.locals&&(t.exports=i.locals)}]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./frontend/node_modules/vue-ripple-directive/src/ripple.js":
/*!******************************************************************!*\
  !*** ./frontend/node_modules/vue-ripple-directive/src/ripple.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Ripple = {
    bind: function(el, binding){

        // Default values.
        var props = {
            event: 'mousedown',
            transition: 600
        };

        setProps(Object.keys(binding.modifiers),props);

        el.addEventListener(props.event, function(event) {
            rippler(event, el, binding.value);
        });

        var bg = binding.value || Ripple.color || 'rgba(0, 0, 0, 0.35)';
        var zIndex = Ripple.zIndex || '9999';

        function rippler(event, el) {
            var target = el;
            // Get border to avoid offsetting on ripple container position
            var targetBorder = parseInt((getComputedStyle(target).borderWidth).replace('px', ''));

            // Get necessary variables
            var rect        = target.getBoundingClientRect(),
                left        = rect.left,
                top         = rect.top,
                width       = target.offsetWidth,
                height      = target.offsetHeight,
                dx          = event.clientX - left,
                dy          = event.clientY - top,
                maxX        = Math.max(dx, width - dx),
                maxY        = Math.max(dy, height - dy),
                style       = window.getComputedStyle(target),
                radius      = Math.sqrt((maxX * maxX) + (maxY * maxY)),
                border      = (targetBorder > 0 ) ? targetBorder : 0;

            // Create the ripple and its container
            var ripple = document.createElement("div"),
                rippleContainer = document.createElement("div");
                rippleContainer.className = 'ripple-container';
                ripple.className = 'ripple';

            //Styles for ripple
            ripple.style.marginTop= '0px';
            ripple.style.marginLeft= '0px';
            ripple.style.width= '1px';
            ripple.style.height= '1px';
            ripple.style.transition= 'all ' + props.transition + 'ms cubic-bezier(0.4, 0, 0.2, 1)';
            ripple.style.borderRadius= '50%';
            ripple.style.pointerEvents= 'none';
            ripple.style.position= 'relative';
            ripple.style.zIndex= zIndex;
            ripple.style.backgroundColor  = bg;

            //Styles for rippleContainer
            rippleContainer.style.position= 'absolute';
            rippleContainer.style.left = 0 - border + 'px';
            rippleContainer.style.top = 0 - border + 'px';
            rippleContainer.style.height = '0';
            rippleContainer.style.width = '0';
            rippleContainer.style.pointerEvents = 'none';
            rippleContainer.style.overflow = 'hidden';

            // Store target position to change it after
            var storedTargetPosition =  ((target.style.position).length > 0) ? target.style.position : getComputedStyle(target).position;
            // Change target position to relative to guarantee ripples correct positioning
            if (storedTargetPosition !== 'relative') {
                target.style.position = 'relative';
            }

            rippleContainer.appendChild(ripple);
            target.appendChild(rippleContainer);

            ripple.style.marginLeft   = dx + "px";
            ripple.style.marginTop    = dy + "px";

            // No need to set positioning because ripple should be child of target and to it's relative position.
            // rippleContainer.style.left    = left + (((window.pageXOffset || document.scrollLeft) - (document.clientLeft || 0)) || 0) + "px";
            // rippleContainer.style.top     = top + (((window.pageYOffset || document.scrollTop) - (document.clientTop || 0)) || 0) + "px";
            rippleContainer.style.width   = width + "px";
            rippleContainer.style.height  = height + "px";
            rippleContainer.style.borderTopLeftRadius  = style.borderTopLeftRadius;
            rippleContainer.style.borderTopRightRadius  = style.borderTopRightRadius;
            rippleContainer.style.borderBottomLeftRadius  = style.borderBottomLeftRadius;
            rippleContainer.style.borderBottomRightRadius  = style.borderBottomRightRadius;

            rippleContainer.style.direction = 'ltr';

            setTimeout(function() {
                ripple.style.width  = radius * 2 + "px";
                ripple.style.height = radius * 2 + "px";
                ripple.style.marginLeft   = dx - radius + "px";
                ripple.style.marginTop    = dy - radius + "px";
            }, 0);

            function clearRipple() {
                setTimeout(function() {
                    ripple.style.backgroundColor = "rgba(0, 0, 0, 0)";
                }, 250);

                // Timeout set to get a smooth removal of the ripple
                setTimeout(function() {
                    rippleContainer.parentNode.removeChild(rippleContainer);
                }, 850);

                el.removeEventListener('mouseup', clearRipple, false);

                // After removing event set position to target to it's original one
                // Timeout it's needed to avoid jerky effect of ripple jumping out parent target
                setTimeout(function () {

                    var clearPosition = true;
                    for(var i = 0; i < target.childNodes.length; i++) {
                        if(target.childNodes[i].className === 'ripple-container') {
                            clearPosition = false;
                        }
                    }

                    if(clearPosition) {
                        if(storedTargetPosition !== 'static') {
                            target.style.position = storedTargetPosition;
                        } else {
                            target.style.position = '';
                        }
                    }

                }, props.transition + 250)
            }

            if(event.type === 'mousedown') {
                el.addEventListener('mouseup', clearRipple, false);
            } else {
                clearRipple();
            }
        }
    }
};

function setProps(modifiers,props) {
    modifiers.forEach(function(item) {
        if(isNaN(Number(item)))
            props.event = item;
        else
            props.transition = item;
    });
}

/* harmony default export */ __webpack_exports__["default"] = (Ripple);

/***/ })

}]);