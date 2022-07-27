(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

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

/***/ }),

/***/ "./frontend/src sync recursive ^\\.\\/.*\\/router$":
/*!********************************************!*\
  !*** ./frontend/src sync ^\.\/.*\/router$ ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/router": "./frontend/src/admin/router/index.js",
	"./care_giver/router": "./frontend/src/care_giver/router/index.js",
	"./client/router": "./frontend/src/client/router/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./frontend/src sync recursive ^\\.\\/.*\\/router$";

/***/ }),

/***/ "./frontend/src/@core/auth/jwt/jwtDefaultConfig.js":
/*!*********************************************************!*\
  !*** ./frontend/src/@core/auth/jwt/jwtDefaultConfig.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Endpoints
  loginEndpoint: '/jwt/login',
  registerEndpoint: '/jwt/register',
  refreshEndpoint: '/jwt/refresh-token',
  logoutEndpoint: '/jwt/logout',
  // This will be prefixed in authorization header with token
  // e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',
  // Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken'
});

/***/ }),

/***/ "./frontend/src/@core/auth/jwt/jwtService.js":
/*!***************************************************!*\
  !*** ./frontend/src/@core/auth/jwt/jwtService.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JwtService; });
/* harmony import */ var _jwtDefaultConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwtDefaultConfig */ "./frontend/src/@core/auth/jwt/jwtDefaultConfig.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var JwtService = /*#__PURE__*/function () {
  // Will be used by this service for making API calls
  // jwtConfig <= Will be used by this service
  // For Refreshing Token
  // For Refreshing Token
  function JwtService(axiosIns, jwtOverrideConfig) {
    var _this = this;

    _classCallCheck(this, JwtService);

    _defineProperty(this, "axiosIns", null);

    _defineProperty(this, "jwtConfig", _objectSpread({}, _jwtDefaultConfig__WEBPACK_IMPORTED_MODULE_0__["default"]));

    _defineProperty(this, "isAlreadyFetchingAccessToken", false);

    _defineProperty(this, "subscribers", []);

    this.axiosIns = axiosIns;
    this.jwtConfig = _objectSpread(_objectSpread({}, this.jwtConfig), jwtOverrideConfig); // Request Interceptor

    this.axiosIns.interceptors.request.use(function (config) {
      // Get token from localStorage
      var accessToken = _this.getToken(); // If token is present add it to request's Authorization Header


      if (accessToken) {
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = "".concat(_this.jwtConfig.tokenType, " ").concat(accessToken);
      }

      return config;
    }, function (error) {
      return Promise.reject(error);
    }); // Add request/response interceptor

    this.axiosIns.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      // const { config, response: { status } } = error
      var config = error.config,
          response = error.response;
      var originalRequest = config; // if (status === 401) {

      if (response && response.status === 401) {
        if (!_this.isAlreadyFetchingAccessToken) {
          _this.isAlreadyFetchingAccessToken = true;

          _this.refreshToken().then(function (r) {
            _this.isAlreadyFetchingAccessToken = false; // Update accessToken in localStorage

            _this.setToken(r.data.accessToken);

            _this.setRefreshToken(r.data.refreshToken);

            _this.onAccessTokenFetched(r.data.accessToken);
          });
        }

        var retryOriginalRequest = new Promise(function (resolve) {
          _this.addSubscriber(function (accessToken) {
            // Make sure to assign accessToken according to your response.
            // Check: https://pixinvent.ticksy.com/ticket/2413870
            // Change Authorization header
            originalRequest.headers.Authorization = "".concat(_this.jwtConfig.tokenType, " ").concat(accessToken);
            resolve(_this.axiosIns(originalRequest));
          });
        });
        return retryOriginalRequest;
      }

      return Promise.reject(error);
    });
  }

  _createClass(JwtService, [{
    key: "onAccessTokenFetched",
    value: function onAccessTokenFetched(accessToken) {
      this.subscribers = this.subscribers.filter(function (callback) {
        return callback(accessToken);
      });
    }
  }, {
    key: "addSubscriber",
    value: function addSubscriber(callback) {
      this.subscribers.push(callback);
    }
  }, {
    key: "getToken",
    value: function getToken() {
      return localStorage.getItem(this.jwtConfig.storageTokenKeyName);
    }
  }, {
    key: "getRefreshToken",
    value: function getRefreshToken() {
      return localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName);
    }
  }, {
    key: "setToken",
    value: function setToken(value) {
      localStorage.setItem(this.jwtConfig.storageTokenKeyName, value);
    }
  }, {
    key: "setRefreshToken",
    value: function setRefreshToken(value) {
      localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName, value);
    }
  }, {
    key: "login",
    value: function login() {
      var _this$axiosIns;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_this$axiosIns = this.axiosIns).post.apply(_this$axiosIns, [this.jwtConfig.loginEndpoint].concat(args));
    }
  }, {
    key: "register",
    value: function register() {
      var _this$axiosIns2;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return (_this$axiosIns2 = this.axiosIns).post.apply(_this$axiosIns2, [this.jwtConfig.registerEndpoint].concat(args));
    }
  }, {
    key: "refreshToken",
    value: function refreshToken() {
      return this.axiosIns.post(this.jwtConfig.refreshEndpoint, {
        refreshToken: this.getRefreshToken()
      });
    }
  }]);

  return JwtService;
}();



/***/ }),

/***/ "./frontend/src/@core/auth/jwt/useJwt.js":
/*!***********************************************!*\
  !*** ./frontend/src/@core/auth/jwt/useJwt.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useJwt; });
/* harmony import */ var _jwtService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwtService */ "./frontend/src/@core/auth/jwt/jwtService.js");

function useJwt(axiosIns, jwtOverrideConfig) {
  var jwt = new _jwtService__WEBPACK_IMPORTED_MODULE_0__["default"](axiosIns, jwtOverrideConfig);
  return {
    jwt: jwt
  };
}

/***/ }),

/***/ "./frontend/src/@core/components/app-auto-suggest/useAutoSuggest.js":
/*!**************************************************************************!*\
  !*** ./frontend/src/@core/components/app-auto-suggest/useAutoSuggest.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useAutoSuggest; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");

function useAutoSuggest(props) {
  var filteredData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({});
  /**
   * Filter group against provided query
   * Grp Structure:
   * {
   *    key: 'title',
   *    data: [
   *      title: 'Admin', img: 'someImage.png',
   *      title: 'Template', img: 'otherImage.png',
   *    ]
   * }
   * @param {Object} grp Group object to perform filter on
   * @param {String} query Query string to filter
   */

  var filterGrp = function filterGrp(grp, query) {
    var exactEle = grp.data.filter(function (item) {
      return item[grp.key].toLowerCase().startsWith(query.toLowerCase());
    });
    var containEle = grp.data.filter( // prettier-ignore
    function (item) {
      return !item[grp.key].toLowerCase().startsWith(query.toLowerCase()) && item[grp.key].toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
    return exactEle.concat(containEle).slice(0, props.searchLimit);
  };

  var searchQuery = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('');

  var resetsearchQuery = function resetsearchQuery() {
    searchQuery.value = '';
  };

  var handleSearchQueryUpdate = function handleSearchQueryUpdate(val) {
    if (val === '') {
      filteredData.value = {};
    } else {
      var queriedData = {};
      var dataGrps = Object.keys(props.data);
      dataGrps.forEach(function (grp, i) {
        queriedData[dataGrps[i]] = filterGrp(props.data[grp], val);
      });
      filteredData.value = queriedData;
    }
  };

  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["watch"])(searchQuery, function (val) {
    return handleSearchQueryUpdate(val);
  });
  return {
    searchQuery: searchQuery,
    resetsearchQuery: resetsearchQuery,
    filteredData: filteredData
  };
}

/***/ }),

/***/ "./frontend/src/@core/layouts/components/AppBreadcrumb.vue":
/*!*****************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/AppBreadcrumb.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppBreadcrumb_vue_vue_type_template_id_70de66ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBreadcrumb.vue?vue&type=template&id=70de66ab& */ "./frontend/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=template&id=70de66ab&");
/* harmony import */ var _AppBreadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppBreadcrumb.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppBreadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppBreadcrumb_vue_vue_type_template_id_70de66ab___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppBreadcrumb_vue_vue_type_template_id_70de66ab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/components/AppBreadcrumb.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBreadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppBreadcrumb.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBreadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=template&id=70de66ab&":
/*!************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=template&id=70de66ab& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBreadcrumb_vue_vue_type_template_id_70de66ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppBreadcrumb.vue?vue&type=template&id=70de66ab& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=template&id=70de66ab&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBreadcrumb_vue_vue_type_template_id_70de66ab___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBreadcrumb_vue_vue_type_template_id_70de66ab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/components/AppFooter.vue":
/*!*************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/AppFooter.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppFooter_vue_vue_type_template_id_5db6a843___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=template&id=5db6a843& */ "./frontend/src/@core/layouts/components/AppFooter.vue?vue&type=template&id=5db6a843&");
/* harmony import */ var _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/components/AppFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppFooter_vue_vue_type_template_id_5db6a843___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppFooter_vue_vue_type_template_id_5db6a843___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/components/AppFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/components/AppFooter.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/AppFooter.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/AppFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/components/AppFooter.vue?vue&type=template&id=5db6a843&":
/*!********************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/AppFooter.vue?vue&type=template&id=5db6a843& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_5db6a843___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=template&id=5db6a843& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/AppFooter.vue?vue&type=template&id=5db6a843&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_5db6a843___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_5db6a843___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue":
/*!***********************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bookmarks_vue_vue_type_template_id_64de30c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bookmarks.vue?vue&type=template&id=64de30c4&scoped=true& */ "./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=template&id=64de30c4&scoped=true&");
/* harmony import */ var _Bookmarks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bookmarks.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Bookmarks_vue_vue_type_style_index_0_id_64de30c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bookmarks.vue?vue&type=style&index=0&id=64de30c4&lang=scss&scoped=true& */ "./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=64de30c4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Bookmarks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Bookmarks_vue_vue_type_template_id_64de30c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Bookmarks_vue_vue_type_template_id_64de30c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "64de30c4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Bookmarks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=64de30c4&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=64de30c4&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_style_index_0_id_64de30c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Bookmarks.vue?vue&type=style&index=0&id=64de30c4&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=64de30c4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_style_index_0_id_64de30c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_style_index_0_id_64de30c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_style_index_0_id_64de30c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_style_index_0_id_64de30c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=template&id=64de30c4&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=template&id=64de30c4&scoped=true& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_template_id_64de30c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Bookmarks.vue?vue&type=template&id=64de30c4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=template&id=64de30c4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_template_id_64de30c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_template_id_64de30c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue":
/*!**************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CartDropdown_vue_vue_type_template_id_09965980_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartDropdown.vue?vue&type=template&id=09965980&scoped=true& */ "./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=template&id=09965980&scoped=true&");
/* harmony import */ var _CartDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartDropdown.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CartDropdown_vue_vue_type_style_index_0_id_09965980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CartDropdown.vue?vue&type=style&index=0&id=09965980&lang=scss&scoped=true& */ "./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=style&index=0&id=09965980&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CartDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CartDropdown_vue_vue_type_template_id_09965980_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CartDropdown_vue_vue_type_template_id_09965980_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "09965980",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CartDropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=style&index=0&id=09965980&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=style&index=0&id=09965980&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropdown_vue_vue_type_style_index_0_id_09965980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CartDropdown.vue?vue&type=style&index=0&id=09965980&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=style&index=0&id=09965980&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropdown_vue_vue_type_style_index_0_id_09965980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropdown_vue_vue_type_style_index_0_id_09965980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropdown_vue_vue_type_style_index_0_id_09965980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropdown_vue_vue_type_style_index_0_id_09965980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=template&id=09965980&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=template&id=09965980&scoped=true& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropdown_vue_vue_type_template_id_09965980_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CartDropdown.vue?vue&type=template&id=09965980&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=template&id=09965980&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropdown_vue_vue_type_template_id_09965980_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropdown_vue_vue_type_template_id_09965980_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue":
/*!*************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DarkToggler_vue_vue_type_template_id_def79dae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DarkToggler.vue?vue&type=template&id=def79dae& */ "./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=template&id=def79dae&");
/* harmony import */ var _DarkToggler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DarkToggler.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DarkToggler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DarkToggler_vue_vue_type_template_id_def79dae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DarkToggler_vue_vue_type_template_id_def79dae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkToggler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DarkToggler.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkToggler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=template&id=def79dae&":
/*!********************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=template&id=def79dae& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkToggler_vue_vue_type_template_id_def79dae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DarkToggler.vue?vue&type=template&id=def79dae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=template&id=def79dae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkToggler_vue_vue_type_template_id_def79dae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkToggler_vue_vue_type_template_id_def79dae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue":
/*!********************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Locale_vue_vue_type_template_id_e29bc1ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Locale.vue?vue&type=template&id=e29bc1ee& */ "./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue?vue&type=template&id=e29bc1ee&");
/* harmony import */ var _Locale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Locale.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Locale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Locale_vue_vue_type_template_id_e29bc1ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Locale_vue_vue_type_template_id_e29bc1ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/components/app-navbar/components/Locale.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Locale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Locale.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Locale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue?vue&type=template&id=e29bc1ee&":
/*!***************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue?vue&type=template&id=e29bc1ee& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Locale_vue_vue_type_template_id_e29bc1ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Locale.vue?vue&type=template&id=e29bc1ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue?vue&type=template&id=e29bc1ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Locale_vue_vue_type_template_id_e29bc1ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Locale_vue_vue_type_template_id_e29bc1ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue":
/*!**********************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotificationDropdown_vue_vue_type_template_id_3bb7c18b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationDropdown.vue?vue&type=template&id=3bb7c18b& */ "./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue?vue&type=template&id=3bb7c18b&");
/* harmony import */ var _NotificationDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationDropdown.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotificationDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotificationDropdown_vue_vue_type_template_id_3bb7c18b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotificationDropdown_vue_vue_type_template_id_3bb7c18b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationDropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue?vue&type=template&id=3bb7c18b&":
/*!*****************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue?vue&type=template&id=3bb7c18b& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationDropdown_vue_vue_type_template_id_3bb7c18b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationDropdown.vue?vue&type=template&id=3bb7c18b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue?vue&type=template&id=3bb7c18b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationDropdown_vue_vue_type_template_id_3bb7c18b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationDropdown_vue_vue_type_template_id_3bb7c18b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue":
/*!***********************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchBar_vue_vue_type_template_id_1df32828_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=template&id=1df32828&scoped=true& */ "./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=template&id=1df32828&scoped=true&");
/* harmony import */ var _SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SearchBar_vue_vue_type_style_index_0_id_1df32828_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=style&index=0&id=1df32828&lang=scss&scoped=true& */ "./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=style&index=0&id=1df32828&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchBar_vue_vue_type_template_id_1df32828_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchBar_vue_vue_type_template_id_1df32828_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1df32828",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=style&index=0&id=1df32828&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=style&index=0&id=1df32828&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_id_1df32828_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=style&index=0&id=1df32828&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=style&index=0&id=1df32828&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_id_1df32828_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_id_1df32828_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_id_1df32828_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_id_1df32828_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=template&id=1df32828&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=template&id=1df32828&scoped=true& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_1df32828_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=template&id=1df32828&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=template&id=1df32828&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_1df32828_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_1df32828_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue":
/*!**************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserDropdown_vue_vue_type_template_id_58cac92a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserDropdown.vue?vue&type=template&id=58cac92a& */ "./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=template&id=58cac92a&");
/* harmony import */ var _UserDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserDropdown.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserDropdown_vue_vue_type_template_id_58cac92a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserDropdown_vue_vue_type_template_id_58cac92a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserDropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=template&id=58cac92a&":
/*!*********************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=template&id=58cac92a& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDropdown_vue_vue_type_template_id_58cac92a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserDropdown.vue?vue&type=template&id=58cac92a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=template&id=58cac92a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDropdown_vue_vue_type_template_id_58cac92a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDropdown_vue_vue_type_template_id_58cac92a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/search-and-bookmark-data.js":
/*!**************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/search-and-bookmark-data.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// prettier-ignore
/* harmony default export */ __webpack_exports__["default"] = ({
  pages: {
    key: 'title',
    data: [{
      title: 'Access Control',
      route: {
        name: 'access-control'
      },
      icon: 'ShieldIcon',
      isBookmarked: false
    }, {
      title: 'Account Settings',
      route: {
        name: 'pages-account-setting'
      },
      icon: 'SettingsIcon',
      isBookmarked: false
    }, {
      title: 'Advance Card',
      route: {
        name: 'card-advance'
      },
      icon: 'CreditCardIcon',
      isBookmarked: false
    }, {
      title: 'Alerts',
      route: {
        name: 'components-alert'
      },
      icon: 'AlertTriangleIcon',
      isBookmarked: false
    }, {
      title: 'Analytics Cards',
      route: {
        name: 'card-analytic'
      },
      icon: 'CreditCardIcon',
      isBookmarked: false
    }, {
      title: 'Apex Chart',
      route: {
        name: 'charts-apex-chart'
      },
      icon: 'PieChartIcon',
      isBookmarked: false
    }, {
      title: 'Aspect',
      route: {
        name: 'components-aspect'
      },
      icon: 'AirplayIcon',
      isBookmarked: false
    }, {
      title: 'Auto Suggest',
      route: {
        name: 'extensions-auto-suggest'
      },
      icon: 'AlignLeftIcon',
      isBookmarked: false
    }, {
      title: 'Avatar',
      route: {
        name: 'components-avatar'
      },
      icon: 'UserIcon',
      isBookmarked: false
    }, {
      title: 'Badge',
      route: {
        name: 'components-badge'
      },
      icon: 'TagIcon',
      isBookmarked: false
    }, {
      title: 'Basic Card',
      route: {
        name: 'card-basic'
      },
      icon: 'CreditCardIcon',
      isBookmarked: false
    }, {
      title: 'Blog Detail',
      route: {
        name: 'pages-blog-detail',
        params: {
          id: 1
        }
      },
      icon: 'FileTextIcon',
      isBookmarked: false
    }, {
      title: 'Blog Edit',
      route: {
        name: 'pages-blog-edit',
        params: {
          id: 1
        }
      },
      icon: 'FileTextIcon',
      isBookmarked: false
    }, {
      title: 'Blog List',
      route: {
        name: 'pages-blog-list'
      },
      icon: 'FileTextIcon',
      isBookmarked: false
    }, {
      title: 'Breadcrumb',
      route: {
        name: 'components-breadcrumb'
      },
      icon: 'HomeIcon',
      isBookmarked: false
    }, {
      title: 'BS Table',
      route: {
        name: 'table-bs-table'
      },
      icon: 'GridIcon',
      isBookmarked: false
    }, {
      title: 'Button Group',
      route: {
        name: 'components-button-group'
      },
      icon: 'BoldIcon',
      isBookmarked: false
    }, {
      title: 'Button Toolbar',
      route: {
        name: 'components-button-toolbar'
      },
      icon: 'BoldIcon',
      isBookmarked: false
    }, {
      title: 'Button',
      route: {
        name: 'components-button'
      },
      icon: 'BoldIcon',
      isBookmarked: false
    }, {
      title: 'Calendar App',
      route: {
        name: 'apps-calendar'
      },
      icon: 'CalendarIcon',
      isBookmarked: true
    }, {
      title: 'Calendar Component',
      route: {
        name: 'components-calendar'
      },
      icon: 'CalendarIcon',
      isBookmarked: false
    }, {
      title: 'Card Actions',
      route: {
        name: 'card-action'
      },
      icon: 'CreditCardIcon',
      isBookmarked: false
    }, {
      title: 'Carousel',
      route: {
        name: 'components-carousel'
      },
      icon: 'CopyIcon',
      isBookmarked: false
    }, {
      title: 'Chartjs',
      route: {
        name: 'charts-chartjs'
      },
      icon: 'PieChartIcon',
      isBookmarked: false
    }, {
      title: 'Chat',
      route: {
        name: 'apps-chat'
      },
      icon: 'MessageSquareIcon',
      isBookmarked: true
    }, {
      title: 'Checkbox',
      route: {
        name: 'forms-element-checkbox'
      },
      icon: 'CheckSquareIcon',
      isBookmarked: false
    }, {
      title: 'Checkout',
      route: {
        name: 'apps-e-commerce-checkout'
      },
      icon: 'DollarSignIcon',
      isBookmarked: false
    }, {
      title: 'Clipboard',
      route: {
        name: 'extensions-clipboard'
      },
      icon: 'ClipboardIcon',
      isBookmarked: false
    }, {
      title: 'Collapse',
      route: {
        name: 'components-collapse'
      },
      icon: 'PlusIcon',
      isBookmarked: false
    }, {
      title: 'Colors',
      route: {
        name: 'ui-colors'
      },
      icon: 'DropletIcon',
      isBookmarked: false
    }, {
      title: 'Coming Soon',
      route: {
        name: 'misc-coming-soon'
      },
      icon: 'ClockIcon',
      isBookmarked: false
    }, {
      title: 'Context Menu',
      route: {
        name: 'extensions-context-menu'
      },
      icon: 'MoreVerticalIcon',
      isBookmarked: false
    }, {
      title: 'Dashboard Analytics',
      route: {
        name: 'dashboard-analytics'
      },
      icon: 'ActivityIcon',
      isBookmarked: false
    }, {
      title: 'Dashboard ECommerce',
      route: {
        name: 'dashboard-ecommerce'
      },
      icon: 'ShoppingCartIcon',
      isBookmarked: false
    }, {
      title: 'Date Time Picker',
      route: {
        name: 'extensions-date-time-picker'
      },
      icon: 'ClockIcon',
      isBookmarked: false
    }, {
      title: 'Drag & Drop',
      route: {
        name: 'extensions-drag-and-drop'
      },
      icon: 'CopyIcon',
      isBookmarked: false
    }, {
      title: 'Dropdown',
      route: {
        name: 'components-dropdown'
      },
      icon: 'MoreHorizontalIcon',
      isBookmarked: false
    }, {
      title: 'Echart',
      route: {
        name: 'charts-echart'
      },
      icon: 'PieChartIcon',
      isBookmarked: false
    }, {
      title: 'Email',
      route: {
        name: 'apps-email'
      },
      icon: 'MailIcon',
      isBookmarked: true
    }, {
      title: 'Embed',
      route: {
        name: 'components-embed'
      },
      icon: 'TvIcon',
      isBookmarked: false
    }, {
      title: 'Error 404',
      route: {
        name: 'error-404'
      },
      icon: 'AlertTriangleIcon',
      isBookmarked: false
    }, {
      title: 'Error',
      route: {
        name: 'misc-error'
      },
      icon: 'AlertTriangleIcon',
      isBookmarked: false
    }, {
      title: 'FAQ',
      route: {
        name: 'pages-faq'
      },
      icon: 'HelpCircleIcon',
      isBookmarked: false
    }, {
      title: 'Feather',
      route: {
        name: 'ui-feather'
      },
      icon: 'FeatherIcon',
      isBookmarked: false
    }, {
      title: 'File Input',
      route: {
        name: 'forms-element-file-input'
      },
      icon: 'FileIcon',
      isBookmarked: false
    }, {
      title: 'Forgot Password V1',
      route: {
        name: 'auth-forgot-password-v1'
      },
      icon: 'KeyIcon',
      isBookmarked: false
    }, {
      title: 'Forgot Password V2',
      route: {
        name: 'auth-forgot-password-v2'
      },
      icon: 'KeyIcon',
      isBookmarked: false
    }, {
      title: 'Form Datepicker',
      route: {
        name: 'forms-element-datepicker'
      },
      icon: 'ClockIcon',
      isBookmarked: false
    }, {
      title: 'Form Layout',
      route: {
        name: 'form-layout'
      },
      icon: 'GridIcon',
      isBookmarked: false
    }, {
      title: 'Form Rating',
      route: {
        name: 'forms-element-rating'
      },
      icon: 'StarIcon',
      isBookmarked: false
    }, {
      title: 'Form Repeater',
      route: {
        name: 'form-repeater'
      },
      icon: 'StarIcon',
      isBookmarked: false
    }, {
      title: 'Form Tag',
      route: {
        name: 'forms-element-tag'
      },
      icon: 'TagIcon',
      isBookmarked: false
    }, {
      title: 'Form Timepicker',
      route: {
        name: 'forms-element-timepicker'
      },
      icon: 'ClockIcon',
      isBookmarked: false
    }, {
      title: 'Form Validation',
      route: {
        name: 'form-validation'
      },
      icon: 'CheckCircleIcon',
      isBookmarked: false
    }, {
      title: 'Form Wizard',
      route: {
        name: 'form-wizard'
      },
      icon: 'GitCommitIcon',
      isBookmarked: false
    }, {
      title: 'Good Table',
      route: {
        name: 'table-good-table'
      },
      icon: 'GridIcon',
      isBookmarked: false
    }, {
      title: 'I18n',
      route: {
        name: 'extensions-i18n'
      },
      icon: 'GlobeIcon',
      isBookmarked: false
    }, {
      title: 'Image',
      route: {
        name: 'components-image'
      },
      icon: 'ImageIcon',
      isBookmarked: false
    }, {
      title: 'Input Group',
      route: {
        name: 'forms-element-input-group'
      },
      icon: 'TypeIcon',
      isBookmarked: false
    }, {
      title: 'Input Mask',
      route: {
        name: 'forms-element-input-mask'
      },
      icon: 'TypeIcon',
      isBookmarked: false
    }, {
      title: 'Input',
      route: {
        name: 'forms-element-input'
      },
      icon: 'TypeIcon',
      isBookmarked: false
    }, {
      title: 'Invoice Add',
      route: {
        name: 'apps-invoice-add'
      },
      icon: 'FileTextIcon',
      isBookmarked: false
    }, {
      title: 'Invoice Edit',
      route: {
        name: 'apps-invoice-edit',
        params: {
          id: 4987
        }
      },
      icon: 'FileTextIcon',
      isBookmarked: false
    }, {
      title: 'Invoice List',
      route: {
        name: 'apps-invoice-list'
      },
      icon: 'FileTextIcon',
      isBookmarked: false
    }, {
      title: 'Invoice Preview',
      route: {
        name: 'apps-invoice-preview',
        params: {
          id: 4987
        }
      },
      icon: 'FileTextIcon',
      isBookmarked: false
    }, {
      title: 'Knowledge Base Category',
      route: {
        name: 'pages-knowledge-base-category'
      },
      icon: 'InfoIcon',
      isBookmarked: false
    }, {
      title: 'Knowledge Base Question',
      route: {
        name: 'pages-knowledge-base-question'
      },
      icon: 'InfoIcon',
      isBookmarked: false
    }, {
      title: 'Knowledge Base',
      route: {
        name: 'pages-knowledge-base'
      },
      icon: 'InfoIcon',
      isBookmarked: false
    }, {
      title: 'Leaflet',
      route: {
        name: 'maps-leaflet'
      },
      icon: 'MapPinIcon',
      isBookmarked: false
    }, {
      title: 'List Group',
      route: {
        name: 'components-list-group'
      },
      icon: 'ListIcon',
      isBookmarked: false
    }, {
      title: 'Login V1',
      route: {
        name: 'auth-login-v1'
      },
      icon: 'LogInIcon',
      isBookmarked: false
    }, {
      title: 'Login V2',
      route: {
        name: 'auth-login-v2'
      },
      icon: 'LogInIcon',
      isBookmarked: false
    }, {
      title: 'Media Objects',
      route: {
        name: 'components-media'
      },
      icon: 'ImageIcon',
      isBookmarked: false
    }, {
      title: 'Modal',
      route: {
        name: 'components-modal'
      },
      icon: 'CopyIcon',
      isBookmarked: false
    }, {
      title: 'Nav',
      route: {
        name: 'components-nav'
      },
      icon: 'CreditCardIcon',
      isBookmarked: false
    }, {
      title: 'Not Authorized',
      route: {
        name: 'misc-not-authorized'
      },
      icon: 'XOctagonIcon',
      isBookmarked: false
    }, {
      title: 'Overlay',
      route: {
        name: 'components-overlay'
      },
      icon: 'CopyIcon',
      isBookmarked: false
    }, {
      title: 'Pagination Nav',
      route: {
        name: 'components-pagination-nav'
      },
      icon: 'HashIcon',
      isBookmarked: false
    }, {
      title: 'Pagination',
      route: {
        name: 'components-pagination'
      },
      icon: 'HashIcon',
      isBookmarked: false
    }, {
      title: 'Pill Badge',
      route: {
        name: 'components-pill-badge'
      },
      icon: 'TagIcon',
      isBookmarked: false
    }, {
      title: 'Pill',
      route: {
        name: 'components-pill'
      },
      icon: 'TagIcon',
      isBookmarked: false
    }, {
      title: 'Popover',
      route: {
        name: 'components-popover'
      },
      icon: 'TagIcon',
      isBookmarked: false
    }, {
      title: 'Pricing',
      route: {
        name: 'pages-pricing'
      },
      icon: 'DollarSignIcon',
      isBookmarked: false
    }, {
      title: 'Product Details',
      route: {
        name: 'apps-e-commerce-product-details',
        params: {
          slug: 'apple-watch-series-5-27'
        }
      },
      icon: 'BoxIcon',
      isBookmarked: false
    }, {
      title: 'Profile',
      route: {
        name: 'pages-profile'
      },
      icon: 'UserIcon',
      isBookmarked: false
    }, {
      title: 'Progress',
      route: {
        name: 'components-progress'
      },
      icon: 'ChevronsRightIcon',
      isBookmarked: false
    }, {
      title: 'Quill Editor',
      route: {
        name: 'extensions-quill-editor'
      },
      icon: 'TypeIcon',
      isBookmarked: false
    }, {
      title: 'Radio',
      route: {
        name: 'forms-element-radio'
      },
      icon: 'DiscIcon',
      isBookmarked: false
    }, {
      title: 'Register V1',
      route: {
        name: 'auth-register-v1'
      },
      icon: 'UserPlusIcon',
      isBookmarked: false
    }, {
      title: 'Register V2',
      route: {
        name: 'auth-register-v2'
      },
      icon: 'UserPlusIcon',
      isBookmarked: false
    }, {
      title: 'Reset Password V1',
      route: {
        name: 'auth-reset-password-v1'
      },
      icon: 'KeyIcon',
      isBookmarked: false
    }, {
      title: 'Reset Password V2',
      route: {
        name: 'auth-reset-password-v2'
      },
      icon: 'KeyIcon',
      isBookmarked: false
    }, {
      title: 'Select',
      route: {
        name: 'forms-element-select'
      },
      icon: 'AlignCenterIcon',
      isBookmarked: false
    }, {
      title: 'Shop',
      route: {
        name: 'apps-e-commerce-shop'
      },
      icon: 'ArchiveIcon',
      isBookmarked: false
    }, {
      title: 'Sidebar',
      route: {
        name: 'components-sidebar'
      },
      icon: 'SidebarIcon',
      isBookmarked: false
    }, {
      title: 'Slider',
      route: {
        name: 'extensions-slider'
      },
      icon: 'GitCommitIcon',
      isBookmarked: false
    }, {
      title: 'Spinbutton',
      route: {
        name: 'forms-element-spinbutton'
      },
      icon: 'TypeIcon',
      isBookmarked: false
    }, {
      title: 'Spinner',
      route: {
        name: 'components-spinner'
      },
      icon: 'LoaderIcon',
      isBookmarked: false
    }, {
      title: 'Statistics Cards',
      route: {
        name: 'card-statistic'
      },
      icon: 'CreditCardIcon',
      isBookmarked: false
    }, {
      title: 'Sweet Alert',
      route: {
        name: 'extensions-sweet-alert'
      },
      icon: 'BellIcon',
      isBookmarked: false
    }, {
      title: 'Swiper',
      route: {
        name: 'extensions-swiper'
      },
      icon: 'ImageIcon',
      isBookmarked: false
    }, {
      title: 'Switch',
      route: {
        name: 'forms-element-switch'
      },
      icon: 'ToggleRightIcon',
      isBookmarked: false
    }, {
      title: 'Tab',
      route: {
        name: 'components-tab'
      },
      icon: 'CreditCardIcon',
      isBookmarked: false
    }, {
      title: 'Textarea',
      route: {
        name: 'forms-element-textarea'
      },
      icon: 'TypeIcon',
      isBookmarked: false
    }, {
      title: 'Time',
      route: {
        name: 'components-time'
      },
      icon: 'ClockIcon',
      isBookmarked: false
    }, {
      title: 'Timeline',
      route: {
        name: 'components-timeline'
      },
      icon: 'GitCommitIcon',
      isBookmarked: false
    }, {
      title: 'Toastification',
      route: {
        name: 'extensions-toastification'
      },
      icon: 'BellIcon',
      isBookmarked: false
    }, {
      title: 'Toasts',
      route: {
        name: 'components-toasts'
      },
      icon: 'BellIcon',
      isBookmarked: false
    }, {
      title: 'Todo',
      route: {
        name: 'apps-todo'
      },
      icon: 'CheckSquareIcon',
      isBookmarked: true
    }, {
      title: 'Tooltip',
      route: {
        name: 'components-tooltip'
      },
      icon: 'CopyIcon',
      isBookmarked: false
    }, {
      title: 'Tour',
      route: {
        name: 'extensions-tour'
      },
      icon: 'GlobeIcon',
      isBookmarked: false
    }, // { title: 'Tree', route: { name: 'extensions-tree' }, icon: 'GitCommitIcon', isBookmarked: false },
    {
      title: 'Typography',
      route: {
        name: 'ui-typography'
      },
      icon: 'TypeIcon',
      isBookmarked: false
    }, {
      title: 'Under Maintenance',
      route: {
        name: 'misc-under-maintenance'
      },
      icon: 'MonitorIcon',
      isBookmarked: false
    }, {
      title: 'Users Edit',
      route: {
        name: 'apps-users-edit',
        params: {
          id: 21
        }
      },
      icon: 'UserIcon',
      isBookmarked: false
    }, {
      title: 'Users List',
      route: {
        name: 'apps-users-list'
      },
      icon: 'UserIcon',
      isBookmarked: false
    }, {
      title: 'Users View',
      route: {
        name: 'apps-users-view',
        params: {
          id: 21
        }
      },
      icon: 'UserIcon',
      isBookmarked: false
    }, {
      title: 'Vue Select',
      route: {
        name: 'extensions-vue-select'
      },
      icon: 'AlignCenterIcon',
      isBookmarked: false
    }, {
      title: 'Wishlist',
      route: {
        name: 'apps-e-commerce-wishlist'
      },
      icon: 'HeartIcon',
      isBookmarked: false
    }]
  },
  files: {
    key: 'file_name',
    data: [{
      file_name: "Joe's CV",
      from: 'Stacy Watson',
      icon: __webpack_require__(/*! @/assets/images/icons/doc.png */ "./frontend/src/assets/images/icons/doc.png"),
      size: '1.7 mb'
    }, {
      file_name: 'Passport Image',
      from: 'Ben Sinitiere',
      icon: __webpack_require__(/*! @/assets/images/icons/jpg.png */ "./frontend/src/assets/images/icons/jpg.png"),
      size: ' 52 kb'
    }, {
      file_name: 'Questions',
      from: 'Charleen Patti',
      icon: __webpack_require__(/*! @/assets/images/icons/doc.png */ "./frontend/src/assets/images/icons/doc.png"),
      size: '1.5 gb'
    }, {
      file_name: 'Parenting Guide',
      from: 'Doyle Blatteau',
      icon: __webpack_require__(/*! @/assets/images/icons/doc.png */ "./frontend/src/assets/images/icons/doc.png"),
      size: '2.3 mb'
    }, {
      file_name: 'Class Notes',
      from: 'Gwen Greenlow',
      icon: __webpack_require__(/*! @/assets/images/icons/doc.png */ "./frontend/src/assets/images/icons/doc.png"),
      size: ' 30 kb'
    }, {
      file_name: 'Class Attendance',
      from: 'Tom Alred',
      icon: __webpack_require__(/*! @/assets/images/icons/xls.png */ "./frontend/src/assets/images/icons/xls.png"),
      size: '52 mb'
    }, {
      file_name: 'Company Salary',
      from: 'Nellie Dezan',
      icon: __webpack_require__(/*! @/assets/images/icons/xls.png */ "./frontend/src/assets/images/icons/xls.png"),
      size: '29 mb'
    }, {
      file_name: 'Company Logo',
      from: 'Steve Sheldon',
      icon: __webpack_require__(/*! @/assets/images/icons/jpg.png */ "./frontend/src/assets/images/icons/jpg.png"),
      size: '1.3 mb'
    }, {
      file_name: 'Crime Rates',
      from: 'Sherlock Holmes',
      icon: __webpack_require__(/*! @/assets/images/icons/xls.png */ "./frontend/src/assets/images/icons/xls.png"),
      size: '37 kb'
    }, {
      file_name: 'Ulysses',
      from: 'Theresia Wrenne',
      icon: __webpack_require__(/*! @/assets/images/icons/pdf.png */ "./frontend/src/assets/images/icons/pdf.png"),
      size: '7.2 mb'
    }, {
      file_name: 'War and Peace',
      from: 'Goldie Highnote',
      icon: __webpack_require__(/*! @/assets/images/icons/pdf.png */ "./frontend/src/assets/images/icons/pdf.png"),
      size: '10.5 mb'
    }, {
      file_name: 'Vedas',
      from: 'Ajay Patel',
      icon: __webpack_require__(/*! @/assets/images/icons/pdf.png */ "./frontend/src/assets/images/icons/pdf.png"),
      size: '8.3 mb'
    }, {
      file_name: 'The Trial',
      from: 'Sirena Linkert',
      icon: __webpack_require__(/*! @/assets/images/icons/pdf.png */ "./frontend/src/assets/images/icons/pdf.png"),
      size: '1.5 mb'
    }]
  },
  contacts: {
    key: 'name',
    data: [{
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-4.jpg */ "./frontend/src/assets/images/portrait/small/avatar-s-4.jpg"),
      name: 'Rena Brant',
      email: 'nephrod@preany.co.uk',
      time: '21/05/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-2.jpg */ "./frontend/src/assets/images/portrait/small/avatar-s-2.jpg"),
      name: 'Mariano Packard',
      email: 'seek@sparaxis.org',
      time: '14/01/2018'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-24.jpg */ "./frontend/src/assets/images/portrait/small/avatar-s-24.jpg"),
      name: 'Risa Montufar',
      email: 'vagary@unblist.org',
      time: '10/08/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-15.jpg */ "./frontend/src/assets/images/portrait/small/avatar-s-15.jpg"),
      name: 'Maragaret Cimo',
      email: 'designed@insanely.net',
      time: '01/12/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-7.jpg */ "./frontend/src/assets/images/portrait/small/avatar-s-7.jpg"),
      name: 'Jona Prattis',
      email: 'unwieldable@unblist.org',
      time: '21/05/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-5.jpg */ "./frontend/src/assets/images/portrait/small/avatar-s-5.jpg"),
      name: 'Edmond Chicon',
      email: 'museist@anaphyte.co.uk',
      time: '15/11/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-25.jpg */ "./frontend/src/assets/images/portrait/small/avatar-s-25.jpg"),
      name: 'Abbey Darden',
      email: 'astema@defectively.co.uk',
      time: '07/05/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-10.jpg */ "./frontend/src/assets/images/portrait/small/avatar-s-10.jpg"),
      name: 'Seema Moallankamp',
      email: 'fernando@storkish.co.uk',
      time: '13/08/2017'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-2.jpg */ "./frontend/src/assets/images/portrait/small/avatar-s-2.jpg"),
      name: 'Charleen Warmington',
      email: 'furphy@cannibal.net',
      time: '11/08/1891'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-25.jpg */ "./frontend/src/assets/images/portrait/small/avatar-s-25.jpg"),
      name: 'Geri Linch',
      email: 'insignia@markab.org',
      time: '18/01/2015'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-23.jpg */ "./frontend/src/assets/images/portrait/small/avatar-s-23.jpg"),
      name: 'Shellie Muster',
      email: 'maxillary@equalize.co.uk',
      time: '26/07/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-20.jpg */ "./frontend/src/assets/images/portrait/small/avatar-s-20.jpg"),
      name: 'Jesenia Vanbramer',
      email: 'hypotony@phonetist.net',
      time: '12/09/2017'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-23.jpg */ "./frontend/src/assets/images/portrait/small/avatar-s-23.jpg"),
      name: 'Mardell Channey',
      email: 'peseta@myrica.com',
      time: '11/11/2019'
    }]
  }
});
/* eslint-enable */

/***/ }),

/***/ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue":
/*!********************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutContentRendererDefault_vue_vue_type_template_id_fef05e66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutContentRendererDefault.vue?vue&type=template&id=fef05e66& */ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=template&id=fef05e66&");
/* harmony import */ var _LayoutContentRendererDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutContentRendererDefault.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LayoutContentRendererDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayoutContentRendererDefault_vue_vue_type_template_id_fef05e66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LayoutContentRendererDefault_vue_vue_type_template_id_fef05e66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutContentRendererDefault.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=template&id=fef05e66&":
/*!***************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=template&id=fef05e66& ***!
  \***************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererDefault_vue_vue_type_template_id_fef05e66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutContentRendererDefault.vue?vue&type=template&id=fef05e66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=template&id=fef05e66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererDefault_vue_vue_type_template_id_fef05e66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererDefault_vue_vue_type_template_id_fef05e66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue":
/*!*****************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutContentRendererLeft_vue_vue_type_template_id_5f8a9b2b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutContentRendererLeft.vue?vue&type=template&id=5f8a9b2b& */ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=template&id=5f8a9b2b&");
/* harmony import */ var _LayoutContentRendererLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutContentRendererLeft.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LayoutContentRendererLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayoutContentRendererLeft_vue_vue_type_template_id_5f8a9b2b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LayoutContentRendererLeft_vue_vue_type_template_id_5f8a9b2b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutContentRendererLeft.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=template&id=5f8a9b2b&":
/*!************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=template&id=5f8a9b2b& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeft_vue_vue_type_template_id_5f8a9b2b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutContentRendererLeft.vue?vue&type=template&id=5f8a9b2b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=template&id=5f8a9b2b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeft_vue_vue_type_template_id_5f8a9b2b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeft_vue_vue_type_template_id_5f8a9b2b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue":
/*!*************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutContentRendererLeftDetached_vue_vue_type_template_id_68852ebd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutContentRendererLeftDetached.vue?vue&type=template&id=68852ebd& */ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=template&id=68852ebd&");
/* harmony import */ var _LayoutContentRendererLeftDetached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LayoutContentRendererLeftDetached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayoutContentRendererLeftDetached_vue_vue_type_template_id_68852ebd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LayoutContentRendererLeftDetached_vue_vue_type_template_id_68852ebd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeftDetached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeftDetached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=template&id=68852ebd&":
/*!********************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=template&id=68852ebd& ***!
  \********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeftDetached_vue_vue_type_template_id_68852ebd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutContentRendererLeftDetached.vue?vue&type=template&id=68852ebd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=template&id=68852ebd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeftDetached_vue_vue_type_template_id_68852ebd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeftDetached_vue_vue_type_template_id_68852ebd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue":
/*!*****************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalNavMenu_vue_vue_type_template_id_f11d7d8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalNavMenu.vue?vue&type=template&id=f11d7d8c& */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=f11d7d8c&");
/* harmony import */ var _VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalNavMenu.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerticalNavMenu_vue_vue_type_template_id_f11d7d8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerticalNavMenu_vue_vue_type_template_id_f11d7d8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=f11d7d8c&":
/*!************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=f11d7d8c& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_template_id_f11d7d8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=template&id=f11d7d8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=f11d7d8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_template_id_f11d7d8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_template_id_f11d7d8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue":
/*!*********************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalNavMenuGroup_vue_vue_type_template_id_79499ad7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalNavMenuGroup.vue?vue&type=template&id=79499ad7& */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=template&id=79499ad7&");
/* harmony import */ var _VerticalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalNavMenuGroup.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VerticalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerticalNavMenuGroup_vue_vue_type_template_id_79499ad7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerticalNavMenuGroup_vue_vue_type_template_id_79499ad7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=template&id=79499ad7&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=template&id=79499ad7& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_template_id_79499ad7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuGroup.vue?vue&type=template&id=79499ad7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=template&id=79499ad7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_template_id_79499ad7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_template_id_79499ad7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/mixinVerticalNavMenuGroup.js":
/*!*************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/mixinVerticalNavMenuGroup.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  watch: {
    $route: {
      immediate: true,
      handler: function handler() {
        this.updateIsActive();
      }
    }
  }
});

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/useVerticalNavMenuGroup.js":
/*!***********************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/useVerticalNavMenuGroup.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useVerticalNavMenuGroup; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ "./frontend/src/store/index.js");
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/layouts/utils */ "./frontend/src/@core/layouts/utils.js");
// eslint-disable-next-line object-curly-newline



function useVerticalNavMenuGroup(item) {
  // ------------------------------------------------
  // isVerticalMenuCollapsed
  // ------------------------------------------------
  var isVerticalMenuCollapsed = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    return _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.verticalMenu.isVerticalMenuCollapsed;
  });
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["watch"])(isVerticalMenuCollapsed, function (val) {
    /* eslint-disable no-use-before-define */
    // * Handles case if routing is done outside of vertical menu
    // i.e. From Customizer Collapse or Using Link
    if (!isMouseHovered.value) {
      if (val) isOpen.value = false;else if (!val && isActive.value) isOpen.value = true;
    }
    /* eslint-enable */

  }); // ------------------------------------------------
  // isMouseHovered
  // ------------------------------------------------

  var isMouseHovered = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["inject"])('isMouseHovered'); // Collapse menu when menu is collapsed and show on open

  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["watch"])(isMouseHovered, function (val) {
    if (isVerticalMenuCollapsed.value) {
      // * we have used `val && val && isActive.value` to only open active menu on mouseEnter and close all menu on mouseLeave
      // * If we don't use `isActive.value` with `val` it can open other groups which are not active as well
      // eslint-disable-next-line no-use-before-define
      isOpen.value = val && isActive.value;
    }
  }); // ------------------------------------------------
  // openGroups
  // ------------------------------------------------

  var openGroups = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["inject"])('openGroups'); // Collapse other groups if one group is opened

  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["watch"])(openGroups, function (currentOpenGroups) {
    var clickedGroup = currentOpenGroups[currentOpenGroups.length - 1]; // If current group is not clicked group or current group is not active => Proceed with closing it
    // eslint-disable-next-line no-use-before-define

    if (clickedGroup !== item.title && !isActive.value) {
      // If clicked group is not child of current group
      // eslint-disable-next-line no-use-before-define
      if (!doesHaveChild(clickedGroup)) isOpen.value = false;
    }
  }); // ------------------------------------------------
  // isOpen
  // ------------------------------------------------

  var isOpen = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["watch"])(isOpen, function (val) {
    // if group is opened push it to the array
    if (val) openGroups.value.push(item.title);
  });

  var updateGroupOpen = function updateGroupOpen(val) {
    // eslint-disable-next-line no-use-before-define
    isOpen.value = val;
  }; // ------------------------------------------------
  // isActive
  // ------------------------------------------------


  var isActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["watch"])(isActive, function (val) {
    /*
      If menu is collapsed and not hovered(optional) then don't open group
    */
    if (val) {
      if (!isVerticalMenuCollapsed.value) isOpen.value = val;
    } else {
      isOpen.value = val;
    }
  });

  var updateIsActive = function updateIsActive() {
    isActive.value = Object(_core_layouts_utils__WEBPACK_IMPORTED_MODULE_2__["isNavGroupActive"])(item.children);
  }; // ------------------------------------------------
  // Other Methods
  // ------------------------------------------------


  var doesHaveChild = function doesHaveChild(title) {
    return item.children.some(function (child) {
      return child.title === title;
    });
  };

  return {
    isOpen: isOpen,
    isActive: isActive,
    updateGroupOpen: updateGroupOpen,
    openGroups: openGroups,
    isMouseHovered: isMouseHovered,
    updateIsActive: updateIsActive
  };
}

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-header/index.js":
/*!******************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-header/index.js ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_libs_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/libs/i18n */ "./frontend/src/@core/libs/i18n/index.js");
/* harmony import */ var _core_libs_acl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/libs/acl */ "./frontend/src/@core/libs/acl/index.js");



var _useI18nUtils = Object(_core_libs_i18n__WEBPACK_IMPORTED_MODULE_0__["useUtils"])(),
    t = _useI18nUtils.t;

var _useAclUtils = Object(_core_libs_acl__WEBPACK_IMPORTED_MODULE_1__["useUtils"])(),
    canViewVerticalNavMenuHeader = _useAclUtils.canViewVerticalNavMenuHeader;

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  render: function render(h) {
    var span = h('span', {}, t(this.item.header));
    var icon = h('feather-icon', {
      props: {
        icon: 'MoreHorizontalIcon',
        size: '18'
      }
    });

    if (canViewVerticalNavMenuHeader(this.item)) {
      return h('li', {
        "class": 'navigation-header text-truncate'
      }, [span, icon]);
    }

    return h();
  }
});

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue":
/*!*********************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalNavMenuItems_vue_vue_type_template_id_79ec4d77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalNavMenuItems.vue?vue&type=template&id=79ec4d77& */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=template&id=79ec4d77&");
/* harmony import */ var _VerticalNavMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalNavMenuItems.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VerticalNavMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerticalNavMenuItems_vue_vue_type_template_id_79ec4d77___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerticalNavMenuItems_vue_vue_type_template_id_79ec4d77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuItems.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=template&id=79ec4d77&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=template&id=79ec4d77& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItems_vue_vue_type_template_id_79ec4d77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuItems.vue?vue&type=template&id=79ec4d77& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=template&id=79ec4d77&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItems_vue_vue_type_template_id_79ec4d77___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItems_vue_vue_type_template_id_79ec4d77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue":
/*!*******************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalNavMenuLink_vue_vue_type_template_id_10ffb945___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalNavMenuLink.vue?vue&type=template&id=10ffb945& */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=template&id=10ffb945&");
/* harmony import */ var _VerticalNavMenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalNavMenuLink.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VerticalNavMenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerticalNavMenuLink_vue_vue_type_template_id_10ffb945___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerticalNavMenuLink_vue_vue_type_template_id_10ffb945___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=template&id=10ffb945&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=template&id=10ffb945& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuLink_vue_vue_type_template_id_10ffb945___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuLink.vue?vue&type=template&id=10ffb945& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=template&id=10ffb945&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuLink_vue_vue_type_template_id_10ffb945___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuLink_vue_vue_type_template_id_10ffb945___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/mixinVerticalNavMenuLink.js":
/*!***********************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/mixinVerticalNavMenuLink.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  watch: {
    $route: {
      immediate: true,
      handler: function handler() {
        this.updateIsActive();
      }
    }
  }
});

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/useVerticalNavMenuLink.js":
/*!*********************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/useVerticalNavMenuLink.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useVerticalNavMenuLink; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/utils */ "./frontend/src/@core/layouts/utils.js");


function useVerticalNavMenuLink(item) {
  var isActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
  var linkProps = Object(_core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__["navLinkProps"])(item);

  var updateIsActive = function updateIsActive() {
    isActive.value = Object(_core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__["isNavLinkActive"])(item);
  };

  return {
    isActive: isActive,
    linkProps: linkProps,
    updateIsActive: updateIsActive
  };
}

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/useVerticalNavMenu.js":
/*!*******************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/useVerticalNavMenu.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useVerticalNavMenu; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ "./frontend/src/store/index.js");


function useVerticalNavMenu(props) {
  // ------------------------------------------------
  // isVerticalMenuCollapsed
  // ------------------------------------------------
  var isVerticalMenuCollapsed = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])({
    get: function get() {
      return _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.verticalMenu.isVerticalMenuCollapsed;
    },
    set: function set(val) {
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED', val);
    }
  }); // ------------------------------------------------
  // collapseTogglerIcon
  // ------------------------------------------------

  var collapseTogglerIcon = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    if (props.isVerticalMenuActive) {
      return isVerticalMenuCollapsed.value ? 'unpinned' : 'pinned';
    }

    return 'close';
  });
  var isMouseHovered = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);

  var updateMouseHovered = function updateMouseHovered(val) {
    isMouseHovered.value = val;
  };

  var toggleCollapsed = function toggleCollapsed() {
    isVerticalMenuCollapsed.value = !isVerticalMenuCollapsed.value;
  };

  return {
    isMouseHovered: isMouseHovered,
    isVerticalMenuCollapsed: isVerticalMenuCollapsed,
    collapseTogglerIcon: collapseTogglerIcon,
    toggleCollapsed: toggleCollapsed,
    updateMouseHovered: updateMouseHovered
  };
}

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/useVerticalLayout.js":
/*!*************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/useVerticalLayout.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useVerticalLayout; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ "./frontend/src/store/index.js");


function useVerticalLayout(navbarType, footerType) {
  var isVerticalMenuActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(true);

  var toggleVerticalMenuActive = function toggleVerticalMenuActive() {
    isVerticalMenuActive.value = !isVerticalMenuActive.value;
  };

  var currentBreakpoint = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('xl');
  var isVerticalMenuCollapsed = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    return _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.verticalMenu.isVerticalMenuCollapsed;
  });
  var layoutClasses = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    var classes = [];

    if (currentBreakpoint.value === 'xl') {
      classes.push('vertical-menu-modern');
      classes.push(isVerticalMenuCollapsed.value ? 'menu-collapsed' : 'menu-expanded');
    } else {
      classes.push('vertical-overlay-menu');
      classes.push(isVerticalMenuActive.value ? 'menu-open' : 'menu-hide');
    } // Navbar


    classes.push("navbar-".concat(navbarType.value)); // Footer

    if (footerType.value === 'sticky') classes.push('footer-fixed');
    if (footerType.value === 'static') classes.push('footer-static');
    if (footerType.value === 'hidden') classes.push('footer-hidden');
    return classes;
  }); // ------------------------------------------------
  // Resize handler for Breakpoint
  // ------------------------------------------------

  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["watch"])(currentBreakpoint, function (val) {
    isVerticalMenuActive.value = val === 'xl';
  });

  var resizeHandler = function resizeHandler() {
    // ? This closes vertical menu when title bar is shown/hidden in mobile browsers.
    // ? We will watch for breakpoint to overcome this issue
    // isVerticalMenuActive.value = window.innerWidth >= 1200
    // ! You can use store getter to get breakpoint
    if (window.innerWidth >= 1200) currentBreakpoint.value = 'xl';else if (window.innerWidth >= 992) currentBreakpoint.value = 'lg';else if (window.innerWidth >= 768) currentBreakpoint.value = 'md';else if (window.innerWidth >= 576) currentBreakpoint.value = 'sm';else currentBreakpoint.value = 'xs';
  };

  var overlayClasses = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    if (currentBreakpoint.value !== 'xl' && isVerticalMenuActive.value) return 'show';
    return null;
  });
  var navbarTypeClass = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    if (navbarType.value === 'sticky') return 'fixed-top';
    if (navbarType.value === 'static') return 'navbar-static-top';
    if (navbarType.value === 'hidden') return 'd-none';
    return 'floating-nav';
  });
  var footerTypeClass = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    if (footerType.value === 'static') return 'footer-static';
    if (footerType.value === 'hidden') return 'd-none';
    return '';
  });
  return {
    isVerticalMenuActive: isVerticalMenuActive,
    toggleVerticalMenuActive: toggleVerticalMenuActive,
    isVerticalMenuCollapsed: isVerticalMenuCollapsed,
    layoutClasses: layoutClasses,
    overlayClasses: overlayClasses,
    navbarTypeClass: navbarTypeClass,
    footerTypeClass: footerTypeClass,
    resizeHandler: resizeHandler
  };
}

/***/ }),

/***/ "./frontend/src/@core/layouts/utils.js":
/*!*********************************************!*\
  !*** ./frontend/src/@core/layouts/utils.js ***!
  \*********************************************/
/*! exports provided: resolveVerticalNavMenuItemComponent, resolveHorizontalNavMenuItemComponent, resolveNavDataRouteName, isNavLinkActive, isNavGroupActive, navLinkProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveVerticalNavMenuItemComponent", function() { return resolveVerticalNavMenuItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveHorizontalNavMenuItemComponent", function() { return resolveHorizontalNavMenuItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveNavDataRouteName", function() { return resolveNavDataRouteName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNavLinkActive", function() { return isNavLinkActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNavGroupActive", function() { return isNavGroupActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navLinkProps", function() { return navLinkProps; });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ "./frontend/src/router/index.js");
/* harmony import */ var _core_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/utils */ "./frontend/src/@core/utils/utils.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");



/**
 * Return which component to render based on it's data/context
 * @param {Object} item nav menu item
 */

var resolveVerticalNavMenuItemComponent = function resolveVerticalNavMenuItemComponent(item) {
  if (item.header) return 'vertical-nav-menu-header';
  if (item.children.length > 0) return 'vertical-nav-menu-group';
  return 'vertical-nav-menu-link';
};
/**
 * Return which component to render based on it's data/context
 * @param {Object} item nav menu item
 */

var resolveHorizontalNavMenuItemComponent = function resolveHorizontalNavMenuItemComponent(item) {
  if (item.children.length > 0) return 'horizontal-nav-menu-group';
  return 'horizontal-nav-menu-link';
};
/**
 * Return route name for navigation link
 * If link is string then it will assume it is route-name
 * IF link is object it will resolve the object and will return the link
 * @param {Object, String} link navigation link object/string
 */

var resolveNavDataRouteName = function resolveNavDataRouteName(link) {
  if (Object(_core_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(link.route)) {
    var _router$resolve = _router__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(link.route),
        route = _router$resolve.route;

    return route.name;
  }

  return link.route;
};
/**
 * Check if nav-link is active
 * @param {Object} link nav-link object
 */

var isNavLinkActive = function isNavLinkActive(link) {
  // Matched routes array of current route
  var matchedRoutes = _router__WEBPACK_IMPORTED_MODULE_0__["default"].currentRoute.matched; // Check if provided route matches route's matched route

  var resolveRoutedName = resolveNavDataRouteName(link);
  if (!resolveRoutedName) return false;
  return matchedRoutes.some(function (route) {
    return route.name === resolveRoutedName || route.meta.navActiveLink === resolveRoutedName;
  });
};
/**
 * Check if nav group is
 * @param {Array} children Group children
 */

var isNavGroupActive = function isNavGroupActive(children) {
  // Matched routes array of current route
  var matchedRoutes = _router__WEBPACK_IMPORTED_MODULE_0__["default"].currentRoute.matched;
  return children.some(function (child) {
    // If child have children => It's group => Go deeper(recursive)
    if (child.children) {
      return isNavGroupActive(child.children);
    } // else it's link => Check for matched Route


    return isNavLinkActive(child, matchedRoutes);
  });
};
/**
 * Return b-link props to use
 * @param {Object, String} item navigation routeName or route Object provided in navigation data
 */
// prettier-ignore

var navLinkProps = function navLinkProps(item) {
  return Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
    var props = {}; // If route is string => it assumes => Create route object from route name
    // If route is not string => It assumes it's route object => returns route object

    if (item.route) props.to = typeof item.route === 'string' ? {
      name: item.route
    } : item.route;else {
      props.href = item.href;
      props.target = '_blank';
      props.rel = 'nofollow';
    }
    if (!props.target) props.target = item.target || null;
    return props;
  });
};

/***/ }),

/***/ "./frontend/src/@core/libs/acl/index.js":
/*!**********************************************!*\
  !*** ./frontend/src/@core/libs/acl/index.js ***!
  \**********************************************/
/*! exports provided: useUtils, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUtils", function() { return useUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./frontend/src/@core/libs/acl/utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var useUtils = function useUtils() {
  return _objectSpread({}, _utils__WEBPACK_IMPORTED_MODULE_0__);
};
var _ = null;

/***/ }),

/***/ "./frontend/src/@core/libs/acl/utils.js":
/*!**********************************************!*\
  !*** ./frontend/src/@core/libs/acl/utils.js ***!
  \**********************************************/
/*! exports provided: can, canViewVerticalNavMenuLink, canViewVerticalNavMenuGroup, canViewVerticalNavMenuHeader, canViewHorizontalNavMenuLink, canViewHorizontalNavMenuHeaderLink, canViewHorizontalNavMenuGroup, canViewHorizontalNavMenuHeaderGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "can", function() { return can; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewVerticalNavMenuLink", function() { return canViewVerticalNavMenuLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewVerticalNavMenuGroup", function() { return canViewVerticalNavMenuGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewVerticalNavMenuHeader", function() { return canViewVerticalNavMenuHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewHorizontalNavMenuLink", function() { return canViewHorizontalNavMenuLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewHorizontalNavMenuHeaderLink", function() { return canViewHorizontalNavMenuHeaderLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewHorizontalNavMenuGroup", function() { return canViewHorizontalNavMenuGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewHorizontalNavMenuHeaderGroup", function() { return canViewHorizontalNavMenuHeaderGroup; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");

/**
 * Returns ability result if ACL is configured or else just return true
 * Useful if you don't know if ACL is configured or not
 * Used in @core files to handle absence of ACL without errors
 * @param {String} action CASL Actions // https://casl.js.org/v4/en/guide/intro#basics
 * @param {String} subject CASL Subject // https://casl.js.org/v4/en/guide/intro#basics
 */

var can = function can(action, subject) {
  var vm = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"])().proxy;
  return vm.$can ? vm.$can(action, subject) : true;
};
/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource
 * @param {Object} item navigation object item
 */

var canViewVerticalNavMenuLink = function canViewVerticalNavMenuLink(item) {
  return can(item.action, item.resource);
};
/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource & Hide group if all of it's children are hidden
 * @param {Object} item navigation object item
 */
// eslint-disable-next-line arrow-body-style

var canViewVerticalNavMenuGroup = function canViewVerticalNavMenuGroup(item) {
  // ! This same logic is used in canViewHorizontalNavMenuGroup and canViewHorizontalNavMenuHeaderGroup. So make sure to update logic in them as well
  var hasAnyVisibleChild = item.children.some(function (i) {
    return can(i.action, i.resource);
  }); // If resource and action is defined in item => Return based on children visibility (Hide group if no child is visible)
  // Else check for ability using provided resource and action along with checking if has any visible child

  if (!(item.action && item.resource)) {
    return hasAnyVisibleChild;
  }

  return can(item.action, item.resource) && hasAnyVisibleChild;
};
/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource
 * @param {Object} item navigation object item
 */

var canViewVerticalNavMenuHeader = function canViewVerticalNavMenuHeader(item) {
  return can(item.action, item.resource);
};
/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource
 * @param {Object} item navigation object item
 */

var canViewHorizontalNavMenuLink = function canViewHorizontalNavMenuLink(item) {
  return can(item.action, item.resource);
};
/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource
 * @param {Object} item navigation object item
 */

var canViewHorizontalNavMenuHeaderLink = function canViewHorizontalNavMenuHeaderLink(item) {
  return can(item.action, item.resource);
};
/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource & Hide group if all of it's children are hidden
 * @param {Object} item navigation object item
 */
// eslint-disable-next-line arrow-body-style

var canViewHorizontalNavMenuGroup = function canViewHorizontalNavMenuGroup(item) {
  // ? Same logic as canViewVerticalNavMenuGroup
  var hasAnyVisibleChild = item.children.some(function (i) {
    return can(i.action, i.resource);
  }); // If resource and action is defined in item => Return based on children visibility (Hide group if no child is visible)
  // Else check for ability using provided resource and action along with checking if has any visible child

  if (!(item.action && item.resource)) {
    return hasAnyVisibleChild;
  }

  return can(item.action, item.resource) && hasAnyVisibleChild;
}; // eslint-disable-next-line arrow-body-style

var canViewHorizontalNavMenuHeaderGroup = function canViewHorizontalNavMenuHeaderGroup(item) {
  // ? Same logic as canViewVerticalNavMenuGroup but with extra content
  // eslint-disable-next-line arrow-body-style
  var hasAnyVisibleChild = item.children.some(function (grpOrItem) {
    // If it have children => It's grp
    // Call ACL function based on grp/link
    return grpOrItem.children ? canViewHorizontalNavMenuGroup(grpOrItem) : canViewHorizontalNavMenuLink(grpOrItem);
  }); // If resource and action is defined in item => Return based on children visibility (Hide group if no child is visible)
  // Else check for ability using provided resource and action along with checking if has any visible child

  if (!(item.action && item.resource)) {
    return hasAnyVisibleChild;
  }

  return can(item.action, item.resource) && hasAnyVisibleChild;
};

/***/ }),

/***/ "./frontend/src/@core/libs/i18n/index.js":
/*!***********************************************!*\
  !*** ./frontend/src/@core/libs/i18n/index.js ***!
  \***********************************************/
/*! exports provided: useUtils, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUtils", function() { return useUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./frontend/src/@core/libs/i18n/utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var useUtils = function useUtils() {
  return _objectSpread({}, _utils__WEBPACK_IMPORTED_MODULE_0__);
};
var _ = null;

/***/ }),

/***/ "./frontend/src/@core/libs/i18n/utils.js":
/*!***********************************************!*\
  !*** ./frontend/src/@core/libs/i18n/utils.js ***!
  \***********************************************/
/*! exports provided: t, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");

/**
 * Returns translated string if i18n package is available to Vue
 * If i18n is not configured then it will simply return what is being passed
 * Useful if you don't know if i18n is configured or not
 * Used in @core files to handle absence of i18n without errors
 * @param {String} key i18n key to use for translation
 */

var t = function t(key) {
  var vm = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"])().proxy;
  return vm.$t ? vm.$t(key) : key;
};
var _ = null;

/***/ }),

/***/ "./frontend/src/@core/utils/filter.js":
/*!********************************************!*\
  !*** ./frontend/src/@core/utils/filter.js ***!
  \********************************************/
/*! exports provided: kFormatter, title, avatarText, formatDate, formatDateToMonthShort, filterTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kFormatter", function() { return kFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avatarText", function() { return avatarText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateToMonthShort", function() { return formatDateToMonthShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTags", function() { return filterTags; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./frontend/src/@core/utils/utils.js");

var kFormatter = function kFormatter(num) {
  return num > 999 ? "".concat((num / 1000).toFixed(1), "k") : num;
};
var title = function title(value) {
  var replacer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
  if (!value) return '';
  var str = value.toString();
  var arr = str.split(replacer);
  var capitalizedArray = [];
  arr.forEach(function (word) {
    var capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedArray.push(capitalized);
  });
  return capitalizedArray.join(' ');
};
var avatarText = function avatarText(value) {
  if (!value) return '';
  var nameArray = value.split(' ');
  return nameArray.map(function (word) {
    return word.charAt(0).toUpperCase();
  }).join('');
};
/**
 * Format and return date in Humanize format
 * Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 * Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Object} formatting Intl object to format with
 */

var formatDate = function formatDate(value) {
  var formatting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  };
  if (!value) return value;
  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
};
/**
 * Return short human friendly month representation of date
 * Can also convert date to only time if date is of today (Better UX)
 * @param {String} value date to format
 * @param {Boolean} toTimeForCurrentDay Shall convert to time if day is today/current
 */

var formatDateToMonthShort = function formatDateToMonthShort(value) {
  var toTimeForCurrentDay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var date = new Date(value);
  var formatting = {
    month: 'short',
    day: 'numeric'
  };

  if (toTimeForCurrentDay && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isToday"])(date)) {
    formatting = {
      hour: 'numeric',
      minute: 'numeric'
    };
  }

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
}; // Strip all the tags from markup and return plain text

var filterTags = function filterTags(value) {
  return value.replace(/<\/?[^>]+(>|$)/g, '');
};

/***/ }),

/***/ "./frontend/src/@core/utils/utils.js":
/*!*******************************************!*\
  !*** ./frontend/src/@core/utils/utils.js ***!
  \*******************************************/
/*! exports provided: isObject, isToday, getRandomBsVariant, isDynamicRouteActive, useRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isToday", function() { return isToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBsVariant", function() { return getRandomBsVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDynamicRouteActive", function() { return isDynamicRouteActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return useRouter; });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ "./frontend/src/router/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

 // eslint-disable-next-line object-curly-newline


var isObject = function isObject(obj) {
  return _typeof(obj) === 'object' && obj !== null;
};
var isToday = function isToday(date) {
  var today = new Date();
  return (
    /* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()
    /* eslint-enable */

  );
};

var getRandomFromArray = function getRandomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}; // ? Light and Dark variant is not included
// prettier-ignore


var getRandomBsVariant = function getRandomBsVariant() {
  return getRandomFromArray(['primary', 'secondary', 'success', 'warning', 'danger', 'info']);
};
var isDynamicRouteActive = function isDynamicRouteActive(route) {
  var _router$resolve = _router__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(route),
      resolvedRoute = _router$resolve.route;

  return resolvedRoute.path === _router__WEBPACK_IMPORTED_MODULE_0__["default"].currentRoute.path;
}; // Thanks: https://medium.com/better-programming/reactive-vue-routes-with-the-composition-api-18c1abd878d1

var useRouter = function useRouter() {
  var vm = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["getCurrentInstance"])().proxy;
  var state = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["reactive"])({
    route: vm.$route
  });
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["watch"])(function () {
    return vm.$route;
  }, function (r) {
    state.route = r;
  });
  return _objectSpread(_objectSpread({}, Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["toRefs"])(state)), {}, {
    router: vm.$router
  });
};
/**
 * This is just enhancement over Object.extend [Gives deep extend]
 * @param {target} a Object which contains values to be overridden
 * @param {source} b Object which contains values to override
 */
// export const objectExtend = (a, b) => {
//   // Don't touch 'null' or 'undefined' objects.
//   if (a == null || b == null) {
//     return a
//   }
//   Object.keys(b).forEach(key => {
//     if (Object.prototype.toString.call(b[key]) === '[object Object]') {
//       if (Object.prototype.toString.call(a[key]) !== '[object Object]') {
//         // eslint-disable-next-line no-param-reassign
//         a[key] = b[key]
//       } else {
//         // eslint-disable-next-line no-param-reassign
//         a[key] = objectExtend(a[key], b[key])
//       }
//     } else {
//       // eslint-disable-next-line no-param-reassign
//       a[key] = b[key]
//     }
//   })
//   return a
// }

/***/ }),

/***/ "./frontend/src/admin/router/care_givers.js":
/*!**************************************************!*\
  !*** ./frontend/src/admin/router/care_givers.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  path: '/care_givers',
  name: 'view-care-givers',
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(37), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(28)]).then(__webpack_require__.bind(null, /*! ../views/CareGiver/index */ "./frontend/src/admin/views/CareGiver/index.vue"));
  },
  meta: {
    pageTitle: 'Care Givers',
    breadcrumb: [{
      text: 'Index',
      active: true
    }]
  }
}, {
  path: '/care_givers/create',
  name: 'create-care-givers',
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(37), __webpack_require__.e(23)]).then(__webpack_require__.bind(null, /*! ../views/CareGiver/form */ "./frontend/src/admin/views/CareGiver/form.vue"));
  },
  meta: {
    pageTitle: 'Care Givers',
    breadcrumb: [{
      text: 'Create',
      active: true
    }]
  }
}]);

/***/ }),

/***/ "./frontend/src/admin/router/clients.js":
/*!**********************************************!*\
  !*** ./frontend/src/admin/router/clients.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  path: '/clients/all',
  name: 'view-clients',
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(37), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ../views/Client/index */ "./frontend/src/admin/views/Client/index.vue"));
  },
  meta: {
    client_type: null,
    pageTitle: 'Clients',
    breadcrumb: [{
      text: 'All',
      active: true
    }]
  }
}, {
  path: '/clients/help_seekers',
  name: 'view-client-helpseeker',
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(37), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ../views/Client/index */ "./frontend/src/admin/views/Client/index.vue"));
  },
  meta: {
    client_type: 1,
    pageTitle: 'Clients',
    breadcrumb: [{
      text: 'Help Seeker',
      active: true
    }]
  }
}, {
  path: '/clients/homeless',
  name: 'view-client-homeless',
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(37), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ../views/Client/index */ "./frontend/src/admin/views/Client/index.vue"));
  },
  meta: {
    client_type: 2,
    pageTitle: 'Clients',
    breadcrumb: [{
      text: 'Homeless',
      active: true
    }]
  }
}, {
  path: '/clients/in_danger',
  name: 'view-client-indanger',
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(37), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ../views/Client/index */ "./frontend/src/admin/views/Client/index.vue"));
  },
  meta: {
    client_type: 3,
    pageTitle: 'Clients',
    breadcrumb: [{
      text: 'In Danger',
      active: true
    }]
  }
}, {
  path: '/clients/in_poverty',
  name: 'view-client-inpoverty',
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(37), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ../views/Client/index */ "./frontend/src/admin/views/Client/index.vue"));
  },
  meta: {
    client_type: 4,
    pageTitle: 'Clients',
    breadcrumb: [{
      text: 'In Poverty',
      active: true
    }]
  }
}, {
  path: '/clients/vendor',
  name: 'view-client-vendor',
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(37), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ../views/Client/index */ "./frontend/src/admin/views/Client/index.vue"));
  },
  meta: {
    client_type: 5,
    pageTitle: 'Clients',
    breadcrumb: [{
      text: 'Vendor',
      active: true
    }]
  }
}, {
  path: '/clients/donor',
  name: 'view-client-donor',
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(37), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ../views/Client/index */ "./frontend/src/admin/views/Client/index.vue"));
  },
  meta: {
    client_type: 6,
    pageTitle: 'Clients',
    breadcrumb: [{
      text: 'Donor',
      active: true
    }]
  }
}, {
  path: '/clients/create',
  name: 'create-clients',
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(37), __webpack_require__.e(24)]).then(__webpack_require__.bind(null, /*! ../views/Client/form */ "./frontend/src/admin/views/Client/form.vue"));
  },
  meta: {
    pageTitle: 'Clients',
    breadcrumb: [{
      text: 'Create',
      active: true
    }]
  }
}]);

/***/ }),

/***/ "./frontend/src/admin/router/help_requests.js":
/*!****************************************************!*\
  !*** ./frontend/src/admin/router/help_requests.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  path: '/help_requests',
  name: 'view-help-requests',
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(37), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(29)]).then(__webpack_require__.bind(null, /*! ../views/HelpRequest/index */ "./frontend/src/admin/views/HelpRequest/index.vue"));
  },
  meta: {
    pageTitle: 'Help Requests',
    breadcrumb: [{
      text: 'Index',
      active: true
    }]
  }
}, {
  path: '/help_requests/create',
  name: 'create-help-requests',
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(37), __webpack_require__.e(25)]).then(__webpack_require__.bind(null, /*! ../views/HelpRequest/form */ "./frontend/src/admin/views/HelpRequest/form.vue"));
  },
  meta: {
    pageTitle: 'Help Requests',
    breadcrumb: [{
      text: 'Create',
      active: true
    }]
  }
}, {
  path: '/help_request_chat/:id',
  name: 'view-help-request-chat',
  component: function component() {
    return __webpack_require__.e(/*! import() */ 32).then(__webpack_require__.bind(null, /*! ../views/HelpRequest/chat */ "./frontend/src/admin/views/HelpRequest/chat.vue"));
  },
  meta: {
    pageTitle: 'Chat',
    breadcrumb: [{
      text: 'Help Request',
      active: true
    }]
  }
}]);

/***/ }),

/***/ "./frontend/src/admin/router/index.js":
/*!********************************************!*\
  !*** ./frontend/src/admin/router/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./frontend/node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./frontend/node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _core_components_toastification_ToastificationContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent */ "./frontend/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var _admin_router_help_requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/admin/router/help_requests */ "./frontend/src/admin/router/help_requests.js");
/* harmony import */ var _admin_router_clients__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/admin/router/clients */ "./frontend/src/admin/router/clients.js");
/* harmony import */ var _admin_router_care_givers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/admin/router/care_givers */ "./frontend/src/admin/router/care_givers.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  mode: 'history',
  base: '/admin',
  scrollBehavior: function scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  },
  routes: [{
    path: '/',
    name: 'view-home',
    component: function component() {
      return Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(21)]).then(__webpack_require__.bind(null, /*! ../views/Home.vue */ "./frontend/src/admin/views/Home.vue"));
    },
    meta: {
      pageTitle: 'Home',
      breadcrumb: [{
        text: 'Home',
        active: true
      }]
    }
  }, {
    path: '/users',
    name: 'view-users',
    component: function component() {
      return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(37), __webpack_require__.e(2), __webpack_require__.e(31)]).then(__webpack_require__.bind(null, /*! ../views/Settings/Users/index */ "./frontend/src/admin/views/Settings/Users/index.vue"));
    },
    meta: {
      pageTitle: 'Users',
      breadcrumb: [{
        text: 'Settings'
      }, {
        text: 'Users',
        active: true
      }]
    }
  }, {
    path: '/users/create',
    name: 'create-users',
    component: function component() {
      return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ../views/Settings/Users/form */ "./frontend/src/admin/views/Settings/Users/form.vue"));
    },
    meta: {
      pageTitle: 'Users',
      breadcrumb: [{
        text: 'Settings'
      }, {
        text: 'Users Create',
        active: true
      }]
    }
  }, {
    path: '/users/:id/edit',
    name: 'edit-users',
    component: function component() {
      return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ../views/Settings/Users/form */ "./frontend/src/admin/views/Settings/Users/form.vue"));
    },
    meta: {
      mode: 'edit',
      pageTitle: 'Users',
      breadcrumb: [{
        text: 'Settings',
        to: '/users'
      }, {
        text: 'Users Edit',
        active: true
      }]
    }
  }, {
    path: '/roles',
    name: 'view-roles',
    component: function component() {
      return Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(2), __webpack_require__.e(30)]).then(__webpack_require__.bind(null, /*! ../views/Settings/Roles/index */ "./frontend/src/admin/views/Settings/Roles/index.vue"));
    },
    meta: {
      pageTitle: 'Roles',
      breadcrumb: [{
        text: 'Settings'
      }, {
        text: 'Roles',
        active: true
      }]
    }
  }, {
    path: '/roles/create',
    name: 'create-roles',
    component: function component() {
      return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ../views/Settings/Roles/form */ "./frontend/src/admin/views/Settings/Roles/form.vue"));
    },
    meta: {
      pageTitle: 'Roles',
      breadcrumb: [{
        text: 'Settings'
      }, {
        text: 'Roles'
      }, {
        text: 'Create',
        active: true
      }]
    }
  }, {
    path: '/roles/:id/edit',
    name: 'edit-roles',
    component: function component() {
      return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ../views/Settings/Roles/form */ "./frontend/src/admin/views/Settings/Roles/form.vue"));
    },
    meta: {
      mode: 'edit',
      pageTitle: 'Roles',
      breadcrumb: [{
        text: 'Settings'
      }, {
        text: 'Roles',
        link: '/roles'
      }, {
        text: 'Roles Edit',
        active: true
      }]
    }
  }, {
    path: '/update-profile',
    name: 'view-update-profile',
    component: function component() {
      return __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.bind(null, /*! ../views/Profile */ "./frontend/src/admin/views/Profile.vue"));
    },
    meta: {
      pageTitle: 'Profile',
      breadcrumb: [{
        text: 'Update',
        active: true
      }]
    }
  }].concat(_toConsumableArray(_admin_router_help_requests__WEBPACK_IMPORTED_MODULE_3__["default"]), _toConsumableArray(_admin_router_clients__WEBPACK_IMPORTED_MODULE_4__["default"]), _toConsumableArray(_admin_router_care_givers__WEBPACK_IMPORTED_MODULE_5__["default"]), [{
    path: '/error-404',
    name: 'error-404',
    component: function component() {
      return __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! ../../views/error/Error404.vue */ "./frontend/src/views/error/Error404.vue"));
    },
    meta: {
      layout: 'full'
    }
  }, {
    path: '/not-authorized',
    name: 'not-authorized',
    component: function component() {
      return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! ../../views/error/NotAuthorized.vue */ "./frontend/src/views/error/NotAuthorized.vue"));
    },
    meta: {
      layout: 'full'
    }
  }, {
    path: '*',
    redirect: 'error-404'
  }])
}); // ? For splash screen
// Remove afterEach hook if you are not using splash screen

router.afterEach(function () {
  // Remove initial loading
  var appLoading = document.getElementById('loading-bg');

  if (appLoading) {
    appLoading.style.display = 'none';
  }
});
router.beforeEach(function (to, from, next) {
  setTimeout(function () {
    if (to.name == 'error-404' || to.name == 'not-authorized' || to.name == 'view-home') {
      next();
    } else {
      var bool = false;
      var permissions = window.apex.user.permissions;
      permissions.forEach(function (entry) {
        if (to.name === entry.name) {
          bool = true;
        }
      });

      if (bool) {
        next();
      } else {
        if (from.name === null) {
          next({
            name: 'not-authorized'
          });
        } else {
          vue__WEBPACK_IMPORTED_MODULE_0___default.a.$toast({
            component: _core_components_toastification_ToastificationContent__WEBPACK_IMPORTED_MODULE_2__["default"],
            props: {
              title: 'Un-Authorized',
              icon: 'BellIcon',
              text: 'You Are Not Authorized',
              variant: 'danger'
            }
          });
        }
      }
    }
  }, 10);
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./frontend/src/assets/images/avatars/6-small.png":
/*!********************************************************!*\
  !*** ./frontend/src/assets/images/avatars/6-small.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/safeplaceworld/frontend/src/assets/images/avatars/6-small.png";

/***/ }),

/***/ "./frontend/src/assets/images/avatars/9-small.png":
/*!********************************************************!*\
  !*** ./frontend/src/assets/images/avatars/9-small.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/safeplaceworld/frontend/src/assets/images/avatars/9-small.png";

/***/ }),

/***/ "./frontend/src/assets/images/flags/de.png":
/*!*************************************************!*\
  !*** ./frontend/src/assets/images/flags/de.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/safeplaceworld/frontend/src/assets/images/flags/de.png";

/***/ }),

/***/ "./frontend/src/assets/images/flags/en.png":
/*!*************************************************!*\
  !*** ./frontend/src/assets/images/flags/en.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/safeplaceworld/frontend/src/assets/images/flags/en.png";

/***/ }),

/***/ "./frontend/src/assets/images/flags/fr.png":
/*!*************************************************!*\
  !*** ./frontend/src/assets/images/flags/fr.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/safeplaceworld/frontend/src/assets/images/flags/fr.png";

/***/ }),

/***/ "./frontend/src/assets/images/flags/pt.png":
/*!*************************************************!*\
  !*** ./frontend/src/assets/images/flags/pt.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/safeplaceworld/frontend/src/assets/images/flags/pt.png";

/***/ }),

/***/ "./frontend/src/assets/images/icons/doc.png":
/*!**************************************************!*\
  !*** ./frontend/src/assets/images/icons/doc.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/safeplaceworld/frontend/src/assets/images/icons/doc.png";

/***/ }),

/***/ "./frontend/src/assets/images/icons/jpg.png":
/*!**************************************************!*\
  !*** ./frontend/src/assets/images/icons/jpg.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/safeplaceworld/frontend/src/assets/images/icons/jpg.png";

/***/ }),

/***/ "./frontend/src/assets/images/icons/pdf.png":
/*!**************************************************!*\
  !*** ./frontend/src/assets/images/icons/pdf.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/safeplaceworld/frontend/src/assets/images/icons/pdf.png";

/***/ }),

/***/ "./frontend/src/assets/images/icons/xls.png":
/*!**************************************************!*\
  !*** ./frontend/src/assets/images/icons/xls.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/safeplaceworld/frontend/src/assets/images/icons/xls.png";

/***/ }),

/***/ "./frontend/src/assets/images/portrait/small/avatar-s-10.jpg":
/*!*******************************************************************!*\
  !*** ./frontend/src/assets/images/portrait/small/avatar-s-10.jpg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/safeplaceworld/frontend/src/assets/images/portrait/small/avatar-s-10.jpg";

/***/ }),

/***/ "./frontend/src/assets/images/portrait/small/avatar-s-15.jpg":
/*!*******************************************************************!*\
  !*** ./frontend/src/assets/images/portrait/small/avatar-s-15.jpg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/safeplaceworld/frontend/src/assets/images/portrait/small/avatar-s-15.jpg";

/***/ }),

/***/ "./frontend/src/assets/images/portrait/small/avatar-s-2.jpg":
/*!******************************************************************!*\
  !*** ./frontend/src/assets/images/portrait/small/avatar-s-2.jpg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/safeplaceworld/frontend/src/assets/images/portrait/small/avatar-s-2.jpg";

/***/ }),

/***/ "./frontend/src/assets/images/portrait/small/avatar-s-20.jpg":
/*!*******************************************************************!*\
  !*** ./frontend/src/assets/images/portrait/small/avatar-s-20.jpg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/safeplaceworld/frontend/src/assets/images/portrait/small/avatar-s-20.jpg";

/***/ }),

/***/ "./frontend/src/assets/images/portrait/small/avatar-s-23.jpg":
/*!*******************************************************************!*\
  !*** ./frontend/src/assets/images/portrait/small/avatar-s-23.jpg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/safeplaceworld/frontend/src/assets/images/portrait/small/avatar-s-23.jpg";

/***/ }),

/***/ "./frontend/src/assets/images/portrait/small/avatar-s-24.jpg":
/*!*******************************************************************!*\
  !*** ./frontend/src/assets/images/portrait/small/avatar-s-24.jpg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/safeplaceworld/frontend/src/assets/images/portrait/small/avatar-s-24.jpg";

/***/ }),

/***/ "./frontend/src/assets/images/portrait/small/avatar-s-25.jpg":
/*!*******************************************************************!*\
  !*** ./frontend/src/assets/images/portrait/small/avatar-s-25.jpg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/safeplaceworld/frontend/src/assets/images/portrait/small/avatar-s-25.jpg";

/***/ }),

/***/ "./frontend/src/assets/images/portrait/small/avatar-s-4.jpg":
/*!******************************************************************!*\
  !*** ./frontend/src/assets/images/portrait/small/avatar-s-4.jpg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/safeplaceworld/frontend/src/assets/images/portrait/small/avatar-s-4.jpg";

/***/ }),

/***/ "./frontend/src/assets/images/portrait/small/avatar-s-5.jpg":
/*!******************************************************************!*\
  !*** ./frontend/src/assets/images/portrait/small/avatar-s-5.jpg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/safeplaceworld/frontend/src/assets/images/portrait/small/avatar-s-5.jpg";

/***/ }),

/***/ "./frontend/src/assets/images/portrait/small/avatar-s-7.jpg":
/*!******************************************************************!*\
  !*** ./frontend/src/assets/images/portrait/small/avatar-s-7.jpg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/safeplaceworld/frontend/src/assets/images/portrait/small/avatar-s-7.jpg";

/***/ }),

/***/ "./frontend/src/auth/jwt/useJwt.js":
/*!*****************************************!*\
  !*** ./frontend/src/auth/jwt/useJwt.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_auth_jwt_useJwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/auth/jwt/useJwt */ "./frontend/src/@core/auth/jwt/useJwt.js");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @axios */ "./frontend/src/libs/axios.js");



var _useJwt = Object(_core_auth_jwt_useJwt__WEBPACK_IMPORTED_MODULE_0__["default"])(_axios__WEBPACK_IMPORTED_MODULE_1__["default"], {}),
    jwt = _useJwt.jwt;

/* harmony default export */ __webpack_exports__["default"] = (jwt);

/***/ }),

/***/ "./frontend/src/client/router/help_requests.js":
/*!*****************************************************!*\
  !*** ./frontend/src/client/router/help_requests.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  path: '/help_requests',
  name: 'view-help-requests',
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(37), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(36)]).then(__webpack_require__.bind(null, /*! ../views/HelpRequest/index */ "./frontend/src/client/views/HelpRequest/index.vue"));
  },
  meta: {
    pageTitle: 'Help Requests',
    breadcrumb: [{
      text: 'Index',
      active: true
    }]
  }
}, {
  path: '/help_requests/create',
  name: 'create-help-requests',
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(37), __webpack_require__.e(34)]).then(__webpack_require__.bind(null, /*! ../views/HelpRequest/form */ "./frontend/src/client/views/HelpRequest/form.vue"));
  },
  meta: {
    pageTitle: 'Help Requests',
    breadcrumb: [{
      text: 'Create',
      active: true
    }]
  }
}, {
  path: '/help_request_chat/:id',
  name: 'view-help-request-chat',
  component: function component() {
    return __webpack_require__.e(/*! import() */ 35).then(__webpack_require__.bind(null, /*! ../views/HelpRequest/chat */ "./frontend/src/client/views/HelpRequest/chat.vue"));
  },
  meta: {
    pageTitle: 'Chat',
    breadcrumb: [{
      text: 'Help Request',
      active: true
    }]
  }
}]);

/***/ }),

/***/ "./frontend/src/client/router/index.js":
/*!*********************************************!*\
  !*** ./frontend/src/client/router/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./frontend/node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./frontend/node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _core_components_toastification_ToastificationContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent */ "./frontend/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var _client_router_help_requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/client/router/help_requests */ "./frontend/src/client/router/help_requests.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  mode: 'history',
  base: '/client',
  scrollBehavior: function scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  },
  routes: [{
    path: '/',
    name: 'view-home',
    component: function component() {
      return Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! ../views/Home.vue */ "./frontend/src/client/views/Home.vue"));
    },
    meta: {
      pageTitle: 'Home',
      breadcrumb: [{
        text: 'Home',
        active: true
      }]
    }
  }, {
    path: '/update-profile',
    name: 'view-update-profile',
    component: function component() {
      return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(37), __webpack_require__.e(27)]).then(__webpack_require__.bind(null, /*! ../views/Profile.vue */ "./frontend/src/client/views/Profile.vue"));
    },
    meta: {
      pageTitle: 'Profile',
      breadcrumb: [{
        text: 'Update',
        active: true
      }]
    }
  }].concat(_toConsumableArray(_client_router_help_requests__WEBPACK_IMPORTED_MODULE_3__["default"]), [{
    path: '/error-404',
    name: 'error-404',
    component: function component() {
      return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! ../views/error/Error404.vue */ "./frontend/src/client/views/error/Error404.vue"));
    },
    meta: {
      layout: 'full'
    }
  }, {
    path: '*',
    redirect: 'error-404'
  }])
});
router.beforeEach(function (to, from, next) {
  setTimeout(function () {
    if (to.name == 'error-404' || to.name == 'not-authorized' || to.name == 'view-home') {
      next();
    } else {
      var bool = false;
      var permissions = window.apex.user.permissions;
      permissions.forEach(function (entry) {
        if (to.name === entry.name) {
          bool = true;
        }
      });

      if (bool) {
        next();
      } else {
        if (from.name === null) {
          next({
            name: 'not-authorized'
          });
        } else {
          vue__WEBPACK_IMPORTED_MODULE_0___default.a.$toast({
            component: _core_components_toastification_ToastificationContent__WEBPACK_IMPORTED_MODULE_2__["default"],
            props: {
              title: 'Un-Authorized',
              icon: 'BellIcon',
              text: 'You Are Not Authorized',
              variant: 'danger'
            }
          });
        }
      }
    }
  }, 10);
}); // ? For splash screen
// Remove afterEach hook if you are not using splash screen

router.afterEach(function () {
  // Remove initial loading
  var appLoading = document.getElementById('loading-bg');

  if (appLoading) {
    appLoading.style.display = 'none';
  }
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./frontend/src/layouts/components/Navbar.vue":
/*!****************************************************!*\
  !*** ./frontend/src/layouts/components/Navbar.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_vue_vue_type_template_id_a23ed5ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=a23ed5ae& */ "./frontend/src/layouts/components/Navbar.vue?vue&type=template&id=a23ed5ae&");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js& */ "./frontend/src/layouts/components/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navbar_vue_vue_type_template_id_a23ed5ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navbar_vue_vue_type_template_id_a23ed5ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/layouts/components/Navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/layouts/components/Navbar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./frontend/src/layouts/components/Navbar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/layouts/components/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/layouts/components/Navbar.vue?vue&type=template&id=a23ed5ae&":
/*!***********************************************************************************!*\
  !*** ./frontend/src/layouts/components/Navbar.vue?vue&type=template&id=a23ed5ae& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_a23ed5ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=template&id=a23ed5ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/layouts/components/Navbar.vue?vue&type=template&id=a23ed5ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_a23ed5ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_a23ed5ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/libs/acl/config.js":
/*!*****************************************!*\
  !*** ./frontend/src/libs/acl/config.js ***!
  \*****************************************/
/*! exports provided: initialAbility, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialAbility", function() { return initialAbility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
var initialAbility = [{
  action: 'read',
  subject: 'Auth'
}];
var _ = undefined;

/***/ }),

/***/ "./frontend/src/libs/api.js":
/*!**********************************!*\
  !*** ./frontend/src/libs/api.js ***!
  \**********************************/
/*! exports provided: get, post, destroy, byMethod, interceptors, submitMultipartForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "byMethod", function() { return byMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interceptors", function() { return interceptors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitMultipartForm", function() { return submitMultipartForm; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./frontend/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./frontend/src/libs/helpers.js");


function get(url, params) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: 'GET',
    url: url,
    params: params
  });
}
function post(url, data) {
  return byMethod('POST', url, data);
}
function destroy(url, data) {
  return byMethod('DELETE', url, data);
}
function byMethod(method, url, data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: method,
    url: url,
    data: data
  });
}
function interceptors(cb) {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.interceptors.response.use(function (res) {
    return res;
  }, function (err) {
    cb(err);
    return Promise.reject(err);
  });
}
function submitMultipartForm(method, url, form) {
  byMethod(method, url, Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["objectToFormData"])(form)).then(function (_ref) {
    var data = _ref.data;

    if (data.saved) {
      cb(data);
    }
  });
}

/***/ }),

/***/ "./frontend/src/libs/axios.js":
/*!************************************!*\
  !*** ./frontend/src/libs/axios.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./frontend/node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./frontend/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
 // axios


var axiosIns = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({// You can add your headers here
  // ================================
  // baseURL: 'https://some-domain.com/api/',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});
vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$http = axiosIns;
/* harmony default export */ __webpack_exports__["default"] = (axiosIns);

/***/ }),

/***/ "./frontend/src/libs/helpers.js":
/*!**************************************!*\
  !*** ./frontend/src/libs/helpers.js ***!
  \**************************************/
/*! exports provided: copyObject, objectToFormData, formatMoney */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyObject", function() { return copyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectToFormData", function() { return objectToFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMoney", function() { return formatMoney; });
function copyObject(obj) {
  var copy = Object.assign({}, obj);
  return copy;
}
function objectToFormData(obj, form, namespace) {
  var fd = form || new FormData();

  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      var formKey = namespace ? namespace + '[' + property + ']' : property;

      if (obj[property] === Object(obj[property]) && !(obj[property] instanceof File)) {
        objectToFormData(obj[property], fd, formKey);
      } else if (obj[property] instanceof Array) {
        for (var i = 0; i < obj[property].length; i++) {
          objectToFormData(obj[property][i], fd, "".concat(formKey, "[").concat(i, "]"));
        }
      } else {
        var value = obj[property] === null ? '' : obj[property];
        fd.append(formKey, value);
      }
    }
  }

  return fd;
}
function formatMoney(value) {
  var val = (value / 1).toFixed(2).replace(",", ".");
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/***/ }),

/***/ "./frontend/src/router/index.js":
/*!**************************************!*\
  !*** ./frontend/src/router/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var router = __webpack_require__("./frontend/src sync recursive ^\\.\\/.*\\/router$")("./".concat(window.apex.user.auth_guard, "/router"))["default"];

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  components: {
    BBreadcrumb: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBreadcrumb"],
    BBreadcrumbItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBreadcrumbItem"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/AppFooter.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/AppFooter.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./frontend/node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_components_app_auto_suggest_useAutoSuggest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/app-auto-suggest/useAutoSuggest */ "./frontend/src/@core/components/app-auto-suggest/useAutoSuggest.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/router */ "./frontend/src/router/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store */ "./frontend/src/store/index.js");
/* harmony import */ var _search_and_bookmark_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../search-and-bookmark-data */ "./frontend/src/@core/layouts/components/app-navbar/search-and-bookmark-data.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BNavbarNav: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavbarNav"],
    BNavItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavItem"],
    BTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTooltip"],
    BNavItemDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavItemDropdown"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default.a,
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"]
  },
  setup: function setup() {
    var searchAndBookmarkDataPages = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["ref"])(_search_and_bookmark_data__WEBPACK_IMPORTED_MODULE_6__["default"].pages);
    var bookmarks = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["ref"])(_search_and_bookmark_data__WEBPACK_IMPORTED_MODULE_6__["default"].pages.data.filter(function (page) {
      return page.isBookmarked;
    }));
    var currentSelected = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["ref"])(-1);
    var perfectScrollbarSettings = {
      maxScrollbarLength: 60
    };

    var _useAutoSuggest = Object(_core_components_app_auto_suggest_useAutoSuggest__WEBPACK_IMPORTED_MODULE_2__["default"])({
      data: {
        pages: searchAndBookmarkDataPages.value
      },
      searchLimit: 6
    }),
        searchQuery = _useAutoSuggest.searchQuery,
        resetsearchQuery = _useAutoSuggest.resetsearchQuery,
        filteredData = _useAutoSuggest.filteredData;

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["watch"])(searchQuery, function (val) {
      _store__WEBPACK_IMPORTED_MODULE_5__["default"].commit('app/TOGGLE_OVERLAY', Boolean(val));
    });
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["watch"])(filteredData, function (val) {
      currentSelected.value = val.pages && !val.pages.length ? -1 : 0;
    });

    var suggestionSelected = function suggestionSelected() {
      var suggestion = filteredData.value.pages[currentSelected.value];
      _router__WEBPACK_IMPORTED_MODULE_4__["default"].push(suggestion.route)["catch"](function () {});
      resetsearchQuery();
    };

    var toggleBookmarked = function toggleBookmarked(item) {
      // Find Index of item/page in bookmarks' array
      var pageIndexInBookmarks = bookmarks.value.findIndex(function (i) {
        return i.route === item.route;
      }); // If index is > -1 => Item is bookmarked => Remove item from bookmarks array using index
      // Else => Item is not bookmarked => Add item to bookmarks' array

      if (pageIndexInBookmarks > -1) {
        bookmarks.value[pageIndexInBookmarks].isBookmarked = false;
        bookmarks.value.splice(pageIndexInBookmarks, 1);
      } else {
        bookmarks.value.push(item);
        bookmarks.value[bookmarks.value.length - 1].isBookmarked = true;
      }
    };

    return {
      bookmarks: bookmarks,
      perfectScrollbarSettings: perfectScrollbarSettings,
      currentSelected: currentSelected,
      suggestionSelected: suggestionSelected,
      toggleBookmarked: toggleBookmarked,
      // AutoSuggest
      searchQuery: searchQuery,
      resetsearchQuery: resetsearchQuery,
      filteredData: filteredData
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./frontend/node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BNavItemDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavItemDropdown"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMedia"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BFormSpinbutton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormSpinbutton"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default.a,
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      items: [],
      perfectScrollbarSettings: {
        maxScrollbarLength: 60,
        wheelPropagation: false
      }
    };
  },
  computed: {
    totalAmount: function totalAmount() {
      var total = 0;
      this.items.forEach(function (i) {
        total += i.price;
      });
      return total;
    }
  },
  methods: {
    fetchItems: function fetchItems() {
      var _this = this;

      this.$store.dispatch('app-ecommerce/fetchCartProducts').then(function (response) {
        _this.items = response.data.products;
      });
    },
    removeItemFromCart: function removeItemFromCart(productId) {
      var _this2 = this;

      this.$store.dispatch('app-ecommerce/removeProductFromCart', {
        productId: productId
      }).then(function () {
        var itemIndex = _this2.items.findIndex(function (p) {
          return p.id === productId;
        });

        _this2.items.splice(itemIndex, 1); // Update count in cart items state


        _this2.$store.commit('app-ecommerce/UPDATE_CART_ITEMS_COUNT', _this2.items.length);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/app-config/useAppConfig */ "./frontend/src/@core/app-config/useAppConfig.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BNavItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BNavItem"]
  },
  setup: function setup() {
    var _useAppConfig = Object(_core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_0__["default"])(),
        skin = _useAppConfig.skin;

    var isDark = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["computed"])(function () {
      return skin.value === 'dark';
    });
    return {
      skin: skin,
      isDark: isDark
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BNavItemDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavItemDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"]
  },
  // ! Need to move this computed property to comp function once we get to Vue 3
  computed: {
    currentLocale: function currentLocale() {
      var _this = this;

      return this.locales.find(function (l) {
        return l.locale === _this.$i18n.locale;
      });
    }
  },
  setup: function setup() {
    /* eslint-disable global-require */
    var locales = [{
      locale: 'en',
      img: __webpack_require__(/*! @/assets/images/flags/en.png */ "./frontend/src/assets/images/flags/en.png"),
      name: 'English'
    }, {
      locale: 'fr',
      img: __webpack_require__(/*! @/assets/images/flags/fr.png */ "./frontend/src/assets/images/flags/fr.png"),
      name: 'French'
    }, {
      locale: 'de',
      img: __webpack_require__(/*! @/assets/images/flags/de.png */ "./frontend/src/assets/images/flags/de.png"),
      name: 'German'
    }, {
      locale: 'pt',
      img: __webpack_require__(/*! @/assets/images/flags/pt.png */ "./frontend/src/assets/images/flags/pt.png"),
      name: 'Portuguese'
    }];
    /* eslint-disable global-require */

    return {
      locales: locales
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./frontend/node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BNavItemDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavItemDropdown"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMedia"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default.a,
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormCheckbox"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  setup: function setup() {
    /* eslint-disable global-require */
    var notifications = [{
      title: 'Congratulation Sam 🎉',
      avatar: __webpack_require__(/*! @/assets/images/avatars/6-small.png */ "./frontend/src/assets/images/avatars/6-small.png"),
      subtitle: 'Won the monthly best seller badge',
      type: 'light-success'
    }, {
      title: 'New message received',
      avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./frontend/src/assets/images/avatars/9-small.png"),
      subtitle: 'You have 10 unread messages',
      type: 'light-info'
    }, {
      title: 'Revised Order 👋',
      avatar: 'MD',
      subtitle: 'MD Inc. order updated',
      type: 'light-danger'
    }];
    /* eslint-disable global-require */

    var systemNotifications = [{
      title: 'Server down',
      subtitle: 'USA Server is down due to hight CPU usage',
      type: 'light-danger',
      icon: 'XIcon'
    }, {
      title: 'Sales report generated',
      subtitle: 'Last month sales report generated',
      type: 'light-success',
      icon: 'CheckIcon'
    }, {
      title: 'High memory usage',
      subtitle: 'BLR Server using high memory',
      type: 'light-warning',
      icon: 'AlertTriangleIcon'
    }];
    var perfectScrollbarSettings = {
      maxScrollbarLength: 60,
      wheelPropagation: false
    };
    return {
      notifications: notifications,
      systemNotifications: systemNotifications,
      perfectScrollbarSettings: perfectScrollbarSettings
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./frontend/node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_components_app_auto_suggest_useAutoSuggest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/app-auto-suggest/useAutoSuggest */ "./frontend/src/@core/components/app-auto-suggest/useAutoSuggest.js");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/utils/filter */ "./frontend/src/@core/utils/filter.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/router */ "./frontend/src/router/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store */ "./frontend/src/store/index.js");
/* harmony import */ var _search_and_bookmark_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../search-and-bookmark-data */ "./frontend/src/@core/layouts/components/app-navbar/search-and-bookmark-data.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  setup: function setup() {
    var showSearchBar = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(false);
    var perfectScrollbarSettings = {
      maxScrollbarLength: 60
    };

    var suggestionSelected = function suggestionSelected(grpName, suggestion) {
      // If parameter is not provided => Use current selected
      if (!suggestion) {
        // If currentSelected value is -1 => No value/item is selected (Prevent Errors)

        /* eslint-disable no-use-before-define, no-param-reassign */
        if (currentSelected.value !== -1) {
          /* eslint-disable no-use-before-define, no-param-reassign */
          var _currentSelected$valu = currentSelected.value.split('.'),
              _currentSelected$valu2 = _slicedToArray(_currentSelected$valu, 2),
              grpIndex = _currentSelected$valu2[0],
              itemIndex = _currentSelected$valu2[1];

          grpName = Object.keys(filteredData.value)[grpIndex];
          suggestion = filteredData.value[grpName][itemIndex];
          /* eslint-enable */
        }
      }

      if (grpName === 'pages') _router__WEBPACK_IMPORTED_MODULE_5__["default"].push(suggestion.route)["catch"](function () {}); // eslint-disable-next-line no-use-before-define

      resetsearchQuery();
      showSearchBar.value = false;
    };

    var _useAutoSuggest = Object(_core_components_app_auto_suggest_useAutoSuggest__WEBPACK_IMPORTED_MODULE_3__["default"])({
      data: _search_and_bookmark_data__WEBPACK_IMPORTED_MODULE_7__["default"],
      searchLimit: 4
    }),
        searchQuery = _useAutoSuggest.searchQuery,
        resetsearchQuery = _useAutoSuggest.resetsearchQuery,
        filteredData = _useAutoSuggest.filteredData;

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["watch"])(searchQuery, function (val) {
      _store__WEBPACK_IMPORTED_MODULE_6__["default"].commit('app/TOGGLE_OVERLAY', Boolean(val));
    });
    var currentSelected = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(-1);
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["watch"])(filteredData, function (val) {
      if (!Object.values(val).some(function (obj) {
        return obj.length;
      })) {
        currentSelected.value = -1;
      } else {
        // Auto Select first item if it's not item-404
        var grpIndex = null; // eslint-disable-next-line no-restricted-syntax

        var _iterator = _createForOfIteratorHelper(Object.values(val).entries()),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _slicedToArray(_step.value, 2),
                index = _step$value[0],
                grpSuggestions = _step$value[1];

            if (grpSuggestions.length) {
              grpIndex = index;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (grpIndex !== null) currentSelected.value = "".concat(grpIndex, ".0");
      }
    });

    var increaseIndex = function increaseIndex() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      /* eslint-disable no-lonely-if, no-plusplus */
      // If there's no matching items
      if (!Object.values(filteredData.value).some(function (grpItems) {
        return grpItems.length;
      })) return;

      var _currentSelected$valu3 = currentSelected.value.split('.'),
          _currentSelected$valu4 = _slicedToArray(_currentSelected$valu3, 2),
          grpIndex = _currentSelected$valu4[0],
          itemIndex = _currentSelected$valu4[1];

      var grpArr = Object.entries(filteredData.value);
      var activeGrpTotalItems = grpArr[grpIndex][1].length;

      if (val) {
        // If active item is not of last item in grp
        if (activeGrpTotalItems - 1 > itemIndex) {
          currentSelected.value = "".concat(grpIndex, ".").concat(Number(itemIndex) + 1); // If active item grp is not last in grp list
        } else if (grpIndex < grpArr.length - 1) {
          for (var i = Number(grpIndex) + 1; i < grpArr.length; i++) {
            // If navigating group have items => Then move in that group
            if (grpArr[i][1].length > 0) {
              currentSelected.value = "".concat(Number(i), ".0");
              break;
            }
          }
        }
      } else {
        // If active item is not of first item in grp
        if (Number(itemIndex)) {
          currentSelected.value = "".concat(grpIndex, ".").concat(Number(itemIndex) - 1); // If active item grp  is not first in grp list
        } else if (Number(grpIndex)) {
          for (var _i2 = Number(grpIndex) - 1; _i2 >= 0; _i2--) {
            // If navigating group have items => Then move in that group
            if (grpArr[_i2][1].length > 0) {
              currentSelected.value = "".concat(_i2, ".").concat(grpArr[_i2][1].length - 1);
              break;
            }
          }
        }
      }
      /* eslint-enable no-lonely-if, no-plusplus */

    };

    return {
      showSearchBar: showSearchBar,
      perfectScrollbarSettings: perfectScrollbarSettings,
      searchAndBookmarkData: _search_and_bookmark_data__WEBPACK_IMPORTED_MODULE_7__["default"],
      title: _core_utils_filter__WEBPACK_IMPORTED_MODULE_4__["title"],
      suggestionSelected: suggestionSelected,
      currentSelected: currentSelected,
      increaseIndex: increaseIndex,
      // AutoSuggest
      searchQuery: searchQuery,
      resetsearchQuery: resetsearchQuery,
      filteredData: filteredData
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _libs_acl_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/acl/config */ "./frontend/src/libs/acl/config.js");
/* harmony import */ var _auth_jwt_useJwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/auth/jwt/useJwt */ "./frontend/src/auth/jwt/useJwt.js");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/utils/filter */ "./frontend/src/@core/utils/filter.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BNavItemDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavItemDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BDropdownDivider: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownDivider"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"]
  },
  data: function data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      avatarText: _core_utils_filter__WEBPACK_IMPORTED_MODULE_3__["avatarText"]
    };
  },
  methods: {
    logout: function logout() {
      // Remove userData from localStorage
      // ? You just removed token from localStorage. If you like, you can also make API call to backend to blacklist used token
      localStorage.removeItem(_auth_jwt_useJwt__WEBPACK_IMPORTED_MODULE_2__["default"].jwtConfig.storageTokenKeyName);
      localStorage.removeItem(_auth_jwt_useJwt__WEBPACK_IMPORTED_MODULE_2__["default"].jwtConfig.storageRefreshTokenKeyName); // Remove userData from localStorage

      localStorage.removeItem('userData'); // Reset ability

      this.$ability.update(_libs_acl_config__WEBPACK_IMPORTED_MODULE_1__["initialAbility"]); // Redirect to login page

      this.$router.push({
        name: 'auth-login'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layouts/components/AppBreadcrumb.vue */ "./frontend/src/@core/layouts/components/AppBreadcrumb.vue");
/* harmony import */ var _core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/app-config/useAppConfig */ "./frontend/src/@core/app-config/useAppConfig.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppBreadcrumb: _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  setup: function setup() {
    var _useAppConfig = Object(_core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        routerTransition = _useAppConfig.routerTransition,
        contentWidth = _useAppConfig.contentWidth;

    return {
      routerTransition: routerTransition,
      contentWidth: contentWidth
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layouts/components/AppBreadcrumb.vue */ "./frontend/src/@core/layouts/components/AppBreadcrumb.vue");
/* harmony import */ var _core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/app-config/useAppConfig */ "./frontend/src/@core/app-config/useAppConfig.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppBreadcrumb: _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  setup: function setup() {
    var _useAppConfig = Object(_core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        routerTransition = _useAppConfig.routerTransition,
        contentWidth = _useAppConfig.contentWidth;

    return {
      routerTransition: routerTransition,
      contentWidth: contentWidth
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layouts/components/AppBreadcrumb.vue */ "./frontend/src/@core/layouts/components/AppBreadcrumb.vue");
/* harmony import */ var _core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/app-config/useAppConfig */ "./frontend/src/@core/app-config/useAppConfig.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppBreadcrumb: _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  setup: function setup() {
    var _useAppConfig = Object(_core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        routerTransition = _useAppConfig.routerTransition,
        contentWidth = _useAppConfig.contentWidth;

    return {
      routerTransition: routerTransition,
      contentWidth: contentWidth
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./frontend/node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./frontend/node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/app-config/useAppConfig */ "./frontend/src/@core/app-config/useAppConfig.js");
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @themeConfig */ "./frontend/themeConfig.js");
/* harmony import */ var _components_vertical_nav_menu_items_VerticalNavMenuItems_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/vertical-nav-menu-items/VerticalNavMenuItems.vue */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue");
/* harmony import */ var _useVerticalNavMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useVerticalNavMenu */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/useVerticalNavMenu.js");
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/libs/api */ "./frontend/src/libs/api.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import navMenuItems from '@/navigation/vertical'









/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default.a,
    VerticalNavMenuItems: _components_vertical_nav_menu_items_VerticalNavMenuItems_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BLink"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BImg"]
  },
  props: {
    isVerticalMenuActive: {
      type: Boolean,
      required: true
    },
    toggleVerticalMenuActive: {
      type: Function,
      required: true
    }
  },
  setup: function setup(props) {
    var _useVerticalNavMenu = Object(_useVerticalNavMenu__WEBPACK_IMPORTED_MODULE_7__["default"])(props),
        isMouseHovered = _useVerticalNavMenu.isMouseHovered,
        isVerticalMenuCollapsed = _useVerticalNavMenu.isVerticalMenuCollapsed,
        collapseTogglerIcon = _useVerticalNavMenu.collapseTogglerIcon,
        toggleCollapsed = _useVerticalNavMenu.toggleCollapsed,
        updateMouseHovered = _useVerticalNavMenu.updateMouseHovered;

    var _useAppConfig = Object(_core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_4__["default"])(),
        skin = _useAppConfig.skin; // Shadow bottom is UI specific and can be removed by user => It's not in `useVerticalNavMenu`


    var shallShadowBottom = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["ref"])(false);
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["provide"])('isMouseHovered', isMouseHovered);
    var perfectScrollbarSettings = {
      maxScrollbarLength: 60,
      wheelPropagation: false
    };
    var collapseTogglerIconFeather = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["computed"])(function () {
      return collapseTogglerIcon.value === 'unpinned' ? 'CircleIcon' : 'DiscIcon';
    }); // App Name

    var _$themeConfig$app = _themeConfig__WEBPACK_IMPORTED_MODULE_5__["$themeConfig"].app,
        appName = _$themeConfig$app.appName,
        appLogoImage = _$themeConfig$app.appLogoImage;
    return {
      perfectScrollbarSettings: perfectScrollbarSettings,
      isVerticalMenuCollapsed: isVerticalMenuCollapsed,
      collapseTogglerIcon: collapseTogglerIcon,
      toggleCollapsed: toggleCollapsed,
      isMouseHovered: isMouseHovered,
      updateMouseHovered: updateMouseHovered,
      collapseTogglerIconFeather: collapseTogglerIconFeather,
      // Shadow Bottom
      shallShadowBottom: shallShadowBottom,
      // Skin
      skin: skin,
      // App Name
      appName: appName,
      appLogoImage: appLogoImage
    };
  },
  data: function data() {
    return {
      navMenuItems: []
    };
  },
  created: function created() {
    var _this = this;

    Object(_libs_api__WEBPACK_IMPORTED_MODULE_8__["get"])("/".concat(window.apex.user.auth_guard, "/api/menus")).then(function (res) {
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(_this.$data, 'navMenuItems', res.data.data);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/utils */ "./frontend/src/@core/layouts/utils.js");
/* harmony import */ var _core_libs_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/libs/i18n */ "./frontend/src/@core/libs/i18n/index.js");
/* harmony import */ var _core_libs_acl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/libs/acl */ "./frontend/src/@core/libs/acl/index.js");
/* harmony import */ var _vertical_nav_menu_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vertical-nav-menu-header */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-header/index.js");
/* harmony import */ var _vertical_nav_menu_link_VerticalNavMenuLink_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vertical-nav-menu-link/VerticalNavMenuLink.vue */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue");
/* harmony import */ var _useVerticalNavMenuGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useVerticalNavMenuGroup */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/useVerticalNavMenuGroup.js");
/* harmony import */ var _mixinVerticalNavMenuGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mixinVerticalNavMenuGroup */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/mixinVerticalNavMenuGroup.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





 // Composition Function



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VerticalNavMenuGroup',
  components: {
    VerticalNavMenuHeader: _vertical_nav_menu_header__WEBPACK_IMPORTED_MODULE_4__["default"],
    VerticalNavMenuLink: _vertical_nav_menu_link_VerticalNavMenuLink_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BCollapse: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCollapse"]
  },
  mixins: [_mixinVerticalNavMenuGroup__WEBPACK_IMPORTED_MODULE_7__["default"]],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var _useVerticalNavMenuGr = Object(_useVerticalNavMenuGroup__WEBPACK_IMPORTED_MODULE_6__["default"])(props.item),
        isOpen = _useVerticalNavMenuGr.isOpen,
        isActive = _useVerticalNavMenuGr.isActive,
        updateGroupOpen = _useVerticalNavMenuGr.updateGroupOpen,
        updateIsActive = _useVerticalNavMenuGr.updateIsActive;

    var _useI18nUtils = Object(_core_libs_i18n__WEBPACK_IMPORTED_MODULE_2__["useUtils"])(),
        t = _useI18nUtils.t;

    var _useAclUtils = Object(_core_libs_acl__WEBPACK_IMPORTED_MODULE_3__["useUtils"])(),
        canViewVerticalNavMenuGroup = _useAclUtils.canViewVerticalNavMenuGroup;

    return {
      resolveNavItemComponent: _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__["resolveVerticalNavMenuItemComponent"],
      isOpen: isOpen,
      isActive: isActive,
      updateGroupOpen: updateGroupOpen,
      updateIsActive: updateIsActive,
      // ACL
      canViewVerticalNavMenuGroup: canViewVerticalNavMenuGroup,
      // i18n
      t: t
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layouts/utils */ "./frontend/src/@core/layouts/utils.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _vertical_nav_menu_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vertical-nav-menu-header */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-header/index.js");
/* harmony import */ var _vertical_nav_menu_link_VerticalNavMenuLink_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vertical-nav-menu-link/VerticalNavMenuLink.vue */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue");
/* harmony import */ var _vertical_nav_menu_group_VerticalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vertical-nav-menu-group/VerticalNavMenuGroup.vue */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue");
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VerticalNavMenuHeader: _vertical_nav_menu_header__WEBPACK_IMPORTED_MODULE_2__["default"],
    VerticalNavMenuLink: _vertical_nav_menu_link_VerticalNavMenuLink_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    VerticalNavMenuGroup: _vertical_nav_menu_group_VerticalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup: function setup() {
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["provide"])('openGroups', Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])([]));
    return {
      resolveNavItemComponent: _core_layouts_utils__WEBPACK_IMPORTED_MODULE_0__["resolveVerticalNavMenuItemComponent"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_libs_acl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/libs/acl */ "./frontend/src/@core/libs/acl/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_libs_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/libs/i18n */ "./frontend/src/@core/libs/i18n/index.js");
/* harmony import */ var _useVerticalNavMenuLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useVerticalNavMenuLink */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/useVerticalNavMenuLink.js");
/* harmony import */ var _mixinVerticalNavMenuLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mixinVerticalNavMenuLink */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/mixinVerticalNavMenuLink.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"]
  },
  mixins: [_mixinVerticalNavMenuLink__WEBPACK_IMPORTED_MODULE_4__["default"]],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var _useVerticalNavMenuLi = Object(_useVerticalNavMenuLink__WEBPACK_IMPORTED_MODULE_3__["default"])(props.item),
        isActive = _useVerticalNavMenuLi.isActive,
        linkProps = _useVerticalNavMenuLi.linkProps,
        updateIsActive = _useVerticalNavMenuLi.updateIsActive;

    var _useI18nUtils = Object(_core_libs_i18n__WEBPACK_IMPORTED_MODULE_2__["useUtils"])(),
        t = _useI18nUtils.t;

    var _useAclUtils = Object(_core_libs_acl__WEBPACK_IMPORTED_MODULE_0__["useUtils"])(),
        canViewVerticalNavMenuLink = _useAclUtils.canViewVerticalNavMenuLink;

    return {
      isActive: isActive,
      linkProps: linkProps,
      updateIsActive: updateIsActive,
      // ACL
      canViewVerticalNavMenuLink: canViewVerticalNavMenuLink,
      // i18n
      t: t
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/layouts/components/Navbar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/layouts/components/Navbar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_layouts_components_app_navbar_components_DarkToggler_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/components/app-navbar/components/DarkToggler.vue */ "./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BNavbarNav: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavbarNav"],
    BNavItemDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavItemDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BDropdownDivider: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownDivider"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    // Navbar Components
    DarkToggler: _core_layouts_components_app_navbar_components_DarkToggler_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: {
    userGuard: function userGuard() {
      var words = window.apex.user.auth_guard.replace('_', ' ').split(' ');

      for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }

      return words.join(" ");
    }
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      user_name: window.apex.user.name,
      auth: window.apex.user.auth_guard,
      photo: window.apex.user.photo
    };
  },
  methods: {
    logout: function logout() {
      window.location.href = "/".concat(window.apex.user.auth_guard, "/logout"); // console.log(window.location);
    },
    goToProfile: function goToProfile() {
      this.$router.push('/update-profile');
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=64de30c4&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=64de30c4&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul[data-v-64de30c4] {\n  list-style: none;\n}[dir] ul[data-v-64de30c4] {\n  padding: 0;\n  margin: 0;\n}\n[dir] p[data-v-64de30c4] {\n  margin: 0;\n}\n.nav-bookmar-content-overlay[data-v-64de30c4] {\n  position: fixed;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  bottom: 0;\n  -webkit-transition: all 0.7s;\n  transition: all 0.7s;\n  z-index: -1;\n}\n[dir] .nav-bookmar-content-overlay[data-v-64de30c4] {\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-transition: all 0.7s;\n}\n[dir=ltr] .nav-bookmar-content-overlay[data-v-64de30c4] {\n  left: 0;\n  right: 0;\n}\n[dir=rtl] .nav-bookmar-content-overlay[data-v-64de30c4] {\n  right: 0;\n  left: 0;\n}\n.nav-bookmar-content-overlay[data-v-64de30c4]:not(.show) {\n  pointer-events: none;\n}\n.nav-bookmar-content-overlay.show[data-v-64de30c4] {\n  z-index: 10;\n  opacity: 1;\n}\n[dir] .nav-bookmar-content-overlay.show[data-v-64de30c4] {\n  cursor: pointer;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=style&index=0&id=09965980&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=style&index=0&id=09965980&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown-cart .media .media-aside[data-v-09965980] {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=style&index=0&id=1df32828&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=style&index=0&id=1df32828&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul[data-v-1df32828] {\n  list-style: none;\n}[dir] ul[data-v-1df32828] {\n  padding: 0;\n  margin: 0;\n}\n[dir] p[data-v-1df32828] {\n  margin: 0;\n}\n\n/* .app-auto-suggest {\n  position: relative;\n}\n\n.auto-suggest-suggestions-list {\n  box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);\n  border-radius: 6px;\n  position: absolute;\n  top: calc(100% + 1rem);\n  background-color: white;\n  width: 100%;\n} */\n.suggestion-group-title[data-v-1df32828] {\n  font-weight: 500;\n}\n[dir] .suggestion-group-title[data-v-1df32828] {\n  padding: 0.75rem 1rem 0.25rem;\n}\n[dir] .suggestion-group-suggestion[data-v-1df32828] {\n  padding: 0.75rem 1rem;\n}\n[dir] .suggestion-current-selected[data-v-1df32828] {\n  background-color: #f8f8f8;\n}\n[dir] .dark-layout .suggestion-current-selected[data-v-1df32828] {\n  background-color: #161d31;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: vertical-menu.scss\n    Description: A classic vertical modern style menu with expand and collops support. It support\n    light & dark version, flipped layout, right side icons, native scroll and borders menu\n    item separation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vertical-layout.vertical-menu-modern .main-menu {\n  -webkit-transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background 0s;\n  transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background 0s;\n  -webkit-transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n[dir] .vertical-layout.vertical-menu-modern .main-menu {\n  -webkit-transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background 0s;\n          -webkit-transform: translate3d(0, 0, 0);\n                  transform: translate3d(0, 0, 0);\n}\n.vertical-layout.vertical-menu-modern .main-menu .navigation li a {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.vertical-layout.vertical-menu-modern .main-menu .navigation > li > a svg,\n.vertical-layout.vertical-menu-modern .main-menu .navigation > li > a i {\n  height: 20px;\n  width: 20px;\n  font-size: 1.45rem;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern .main-menu .navigation > li > a svg, [dir=ltr] .vertical-layout.vertical-menu-modern .main-menu .navigation > li > a i {\n  margin-right: 1.1rem;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern .main-menu .navigation > li > a svg, [dir=rtl] .vertical-layout.vertical-menu-modern .main-menu .navigation > li > a i {\n  margin-left: 1.1rem;\n}\n.vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a svg,\n.vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a i {\n  font-size: 11px;\n  height: 11px;\n  width: 11px;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a svg, [dir=ltr] .vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a i {\n  margin-right: 1.45rem;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a svg, [dir=rtl] .vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a i {\n  margin-left: 1.45rem;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu {\n  width: 260px;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation > li > a > i:before,\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation > li > a > svg:before {\n  height: 20px;\n  width: 20px;\n  font-size: 1.45rem;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 14px;\n  -webkit-transform: rotate(0deg);\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n[dir] .vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub > a:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n          -webkit-transform: rotate(0deg);\n                  transform: rotate(0deg);\n  -webkit-transition: all 0.2s ease-out;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub > a:after {\n  right: 20px;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub > a:after {\n  left: 20px;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-expanded .footer {\n  margin-left: 260px;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-expanded .footer {\n  margin-right: 260px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header {\n  width: 80px;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header {\n  float: left;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header {\n  float: right;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header .modern-nav-toggle {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header.expanded {\n  width: 260px;\n  z-index: 1000;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header.expanded .modern-nav-toggle {\n  display: block;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .navbar.fixed-top {\n  left: 80px;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .navbar.fixed-top {\n  right: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu {\n  width: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navbar-header .brand-text,\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .modern-nav-toggle {\n  display: none;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header {\n  margin-left: 2.2rem;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header {\n  margin-right: 2.2rem;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header span {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header .feather-more-horizontal {\n  display: block;\n  font-size: 1.285rem;\n  width: 18px;\n  height: 18px;\n}\n[dir] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation li:last-child {\n  margin-bottom: 1.25rem !important;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation li.active a {\n  -webkit-box-shadow: none;\n  color: #565656;\n}\n[dir] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation li.active a {\n  background: whitesmoke;\n          -webkit-box-shadow: none;\n                  box-shadow: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded {\n  width: 260px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation > li.navigation-header span {\n  display: block;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation > li.navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub > a:after {\n  content: \"\";\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  top: 14px;\n  -webkit-transform: rotate(0deg);\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n[dir] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub > a:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n          -webkit-transform: rotate(0deg);\n                  transform: rotate(0deg);\n  -webkit-transition: all 0.2s ease-out;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub > a:after {\n  right: 20px;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub > a:after {\n  left: 20px;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navbar-header .brand-text {\n  display: inline;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .modern-nav-toggle {\n  display: block;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation {\n  overflow: visible;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation > li.navigation-header span {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation > li > a {\n  text-overflow: inherit;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .app-content, [dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .footer {\n  margin-left: 80px;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .app-content, [dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .footer {\n  margin-right: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.floating-nav {\n  width: calc(100vw - (100vw - 100%) - 4.4rem - 74px);\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.navbar-static-top {\n  width: calc(100vw - (100vw - 100%) - 74px);\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.navbar-static-top {\n  left: 74px;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.navbar-static-top {\n  right: 74px;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern .toggle-icon, [dir=ltr] .vertical-layout.vertical-menu-modern .collapse-toggle-icon {\n  margin-right: 0.425rem;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern .toggle-icon, [dir=rtl] .vertical-layout.vertical-menu-modern .collapse-toggle-icon {\n  margin-left: 0.425rem;\n}\n.vertical-layout.vertical-menu-modern .toggle-icon:focus,\n.vertical-layout.vertical-menu-modern .collapse-toggle-icon:focus {\n  outline: none;\n}\n@media (min-width: 992px) {\n.vertical-layout.vertical-menu-modern .main-menu {\n    width: 260px;\n}\n}\n@media (max-width: 1199.98px) {\n.vertical-layout.vertical-menu-modern .main-menu {\n    width: 0;\n}\n.vertical-layout.vertical-menu-modern .navbar .navbar-header {\n    width: 0;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern .content, [dir=ltr] .vertical-layout.vertical-menu-modern .footer {\n    margin-left: 0;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern .content, [dir=rtl] .vertical-layout.vertical-menu-modern .footer {\n    margin-right: 0;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .app-content, [dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .footer {\n    margin-left: 0;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .app-content, [dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .footer {\n    margin-right: 0;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu {\n    width: 0;\n}\n}\n@media (max-width: 767.98px) {\n.vertical-layout.vertical-menu-modern .main-menu {\n    width: 0;\n}\n.vertical-layout.vertical-menu-modern .navbar .navbar-header {\n    width: 0;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern .content, [dir=ltr] .vertical-layout.vertical-menu-modern .footer {\n    margin-left: 0;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern .content, [dir=rtl] .vertical-layout.vertical-menu-modern .footer {\n    margin-right: 0;\n}\n}\n@-webkit-keyframes fadein {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes fadein {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-webkit-keyframes fadeout {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n@keyframes fadeout {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n[dir=ltr] .vertical-menu-modern.vertical-layout .main-menu .navigation > li > a > span {\n    -webkit-animation: none;\n    animation: none;\n}\n[dir=rtl] .vertical-menu-modern.vertical-layout .main-menu .navigation > li > a > span {\n    -webkit-animation: none;\n            animation: none;\n}\n}\n/*=========================================================================================\n    File Name: vertical-overlay-menu.scss\n    Description: A overlay style vertical menu with show and hide support. It support\n    light & dark version, filpped layout, right side icons, native scroll and borders menu\n    item seperation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n[dir=ltr] .vertical-overlay-menu .content {\n  margin-left: 0;\n}\n[dir=rtl] .vertical-overlay-menu .content {\n  margin-right: 0;\n}\n.vertical-overlay-menu .navbar .navbar-header {\n  width: 260px;\n}\n[dir=ltr] .vertical-overlay-menu .navbar .navbar-header {\n  float: left;\n}\n[dir=rtl] .vertical-overlay-menu .navbar .navbar-header {\n  float: right;\n}\n.vertical-overlay-menu .main-menu, .vertical-overlay-menu.menu-hide .main-menu {\n  opacity: 0;\n  -webkit-transform: translate3d(0, 0, 0);\n  transition: width 0.25s, opacity 0.25s, -webkit-transform 0.25s;\n  -webkit-transition: width 0.25s, opacity 0.25s, -webkit-transform 0.25s;\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n  transition: width 0.25s, opacity 0.25s, transform 0.25s, -webkit-transform 0.25s;\n  width: 260px;\n}\n[dir] .vertical-overlay-menu .main-menu, [dir] .vertical-overlay-menu.menu-hide .main-menu {\n          -webkit-transform: translate3d(0, 0, 0);\n                  transform: translate3d(0, 0, 0);\n  -webkit-transition: width 0.25s, opacity 0.25s, -webkit-transform 0.25s;\n}\n[dir=ltr] .vertical-overlay-menu .main-menu, [dir=ltr] .vertical-overlay-menu.menu-hide .main-menu {\n  left: -260px;\n}\n[dir=rtl] .vertical-overlay-menu .main-menu, [dir=rtl] .vertical-overlay-menu.menu-hide .main-menu {\n  right: -260px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg,\n.vertical-overlay-menu .main-menu .navigation > li > a > i {\n  -webkit-transition: 200ms ease all;\n  transition: 200ms ease all;\n  height: 20px;\n  width: 20px;\n}\n[dir] .vertical-overlay-menu .main-menu .navigation > li > a > svg, [dir] .vertical-overlay-menu .main-menu .navigation > li > a > i {\n  -webkit-transition: 200ms ease all;\n}\n[dir=ltr] .vertical-overlay-menu .main-menu .navigation > li > a > svg, [dir=ltr] .vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-right: 14px;\n  float: left;\n}\n[dir=rtl] .vertical-overlay-menu .main-menu .navigation > li > a > svg, [dir=rtl] .vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-left: 14px;\n  float: right;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg:before,\n.vertical-overlay-menu .main-menu .navigation > li > a > i:before {\n  -webkit-transition: 200ms ease all;\n  transition: 200ms ease all;\n  font-size: 1.429rem;\n}\n[dir] .vertical-overlay-menu .main-menu .navigation > li > a > svg:before, [dir] .vertical-overlay-menu .main-menu .navigation > li > a > i:before {\n  -webkit-transition: 200ms ease all;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  top: 14px;\n  -webkit-transform: rotate(0deg);\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n[dir] .vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n          -webkit-transform: rotate(0deg);\n                  transform: rotate(0deg);\n  -webkit-transition: all 0.2s ease-out;\n}\n[dir=ltr] .vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  right: 20px;\n}\n[dir=rtl] .vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  left: 20px;\n}\n[dir=ltr] .vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n[dir=rtl] .vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n.vertical-overlay-menu .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-overlay-menu.menu-open .main-menu {\n  opacity: 1;\n  transition: width 0.25s, opacity 0.25s, -webkit-transform 0.25s;\n  -webkit-transition: width 0.25s, opacity 0.25s, -webkit-transform 0.25s;\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n  transition: width 0.25s, opacity 0.25s, transform 0.25s, -webkit-transform 0.25s;\n}\n[dir] .vertical-overlay-menu.menu-open .main-menu {\n  -webkit-transition: width 0.25s, opacity 0.25s, -webkit-transform 0.25s;\n}\n[dir=ltr] .vertical-overlay-menu.menu-open .main-menu {\n  -webkit-transform: translate3d(260px, 0, 0);\n  transform: translate3d(260px, 0, 0);\n}\n[dir=rtl] .vertical-overlay-menu.menu-open .main-menu {\n  -webkit-transform: translate3d(-260px, 0, 0);\n          transform: translate3d(-260px, 0, 0);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=64de30c4&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=64de30c4&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Bookmarks.vue?vue&type=style&index=0&id=64de30c4&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=64de30c4&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=style&index=0&id=09965980&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=style&index=0&id=09965980&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CartDropdown.vue?vue&type=style&index=0&id=09965980&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=style&index=0&id=09965980&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=style&index=0&id=1df32828&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=style&index=0&id=1df32828&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=style&index=0&id=1df32828&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=style&index=0&id=1df32828&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=template&id=70de66ab&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=template&id=70de66ab& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.$route.meta.breadcrumb || _vm.$route.meta.pageTitle
    ? _c(
        "b-row",
        { staticClass: "content-header" },
        [
          _c(
            "b-col",
            {
              staticClass: "content-header-left mb-2",
              attrs: { cols: "12", md: "9" }
            },
            [
              _c(
                "b-row",
                { staticClass: "breadcrumbs-top" },
                [
                  _c("b-col", { attrs: { cols: "12" } }, [
                    _c(
                      "h2",
                      {
                        staticClass: "content-header-title float-left pr-1 mb-0"
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.$route.meta.pageTitle) +
                            "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "breadcrumb-wrapper" },
                      [
                        _c(
                          "b-breadcrumb",
                          [
                            _c(
                              "b-breadcrumb-item",
                              { attrs: { to: "/" } },
                              [
                                _c("feather-icon", {
                                  staticClass: "align-text-top",
                                  attrs: { icon: "HomeIcon", size: "16" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.$route.meta.breadcrumb, function(item) {
                              return _c(
                                "b-breadcrumb-item",
                                {
                                  key: item.text,
                                  attrs: { active: item.active, to: item.to }
                                },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(item.text) +
                                      "\n              "
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        )
                      ],
                      1
                    )
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/AppFooter.vue?vue&type=template&id=5db6a843&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/AppFooter.vue?vue&type=template&id=5db6a843& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("p", { staticClass: "clearfix mb-0" }, [
    _c(
      "span",
      { staticClass: "float-md-left d-block d-md-inline-block mt-25" },
      [
        _vm._v(
          "\n    COPYRIGHT  © " + _vm._s(new Date().getFullYear()) + "\n    "
        ),
        _c(
          "b-link",
          {
            staticClass: "ml-25",
            attrs: {
              href: "https://1.envato.market/pixinvent_portfolio",
              target: "_blank"
            }
          },
          [_vm._v("Pixinvent")]
        ),
        _vm._v(" "),
        _c("span", { staticClass: "d-none d-sm-inline-block" }, [
          _vm._v(", All rights Reserved")
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "span",
      { staticClass: "float-md-right d-none d-md-block" },
      [
        _vm._v("Hand-crafted & Made with\n    "),
        _c("feather-icon", {
          staticClass: "text-danger stroke-current",
          attrs: { icon: "HeartIcon", size: "21" }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=template&id=64de30c4&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=template&id=64de30c4&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-navbar-nav",
    { staticClass: "nav" },
    [
      _vm._l(_vm.bookmarks, function(bookmark, index) {
        return _c(
          "b-nav-item",
          {
            key: index,
            attrs: { id: "bookmark-" + index, to: bookmark.route }
          },
          [
            _c("feather-icon", { attrs: { icon: bookmark.icon, size: "21" } }),
            _vm._v(" "),
            _c("b-tooltip", {
              attrs: {
                triggers: "hover",
                target: "bookmark-" + index,
                title: bookmark.title,
                delay: { show: 1000, hide: 50 }
              }
            })
          ],
          1
        )
      }),
      _vm._v(" "),
      _c(
        "b-nav-item-dropdown",
        {
          attrs: { "link-classes": "bookmark-star", lazy: "" },
          on: { hidden: _vm.resetsearchQuery }
        },
        [
          _c("feather-icon", {
            staticClass: "text-warning",
            attrs: { slot: "button-content", icon: "StarIcon", size: "21" },
            slot: "button-content"
          }),
          _vm._v(" "),
          _c(
            "li",
            { staticStyle: { "min-width": "300px" } },
            [
              _c(
                "div",
                { staticClass: "p-1" },
                [
                  _c("b-form-input", {
                    attrs: {
                      id: "boomark-search-input",
                      placeholder: "Explore Vuexy...",
                      autofocus: ""
                    },
                    model: {
                      value: _vm.searchQuery,
                      callback: function($$v) {
                        _vm.searchQuery = $$v
                      },
                      expression: "searchQuery"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vue-perfect-scrollbar",
                {
                  staticClass: "search-list search-list-bookmark scroll-area",
                  class: {
                    show:
                      _vm.filteredData.pages && _vm.filteredData.pages.length
                  },
                  attrs: {
                    settings: _vm.perfectScrollbarSettings,
                    tagname: "ul"
                  }
                },
                [
                  _vm._l(_vm.filteredData.pages || _vm.bookmarks, function(
                    suggestion,
                    index
                  ) {
                    return _c(
                      "b-dropdown-item",
                      {
                        key: index,
                        staticClass:
                          "suggestion-group-suggestion cursor-pointer",
                        attrs: {
                          "link-class": "d-flex align-items-center",
                          to: suggestion.route
                        },
                        on: {
                          mouseenter: function($event) {
                            _vm.currentSelected = index
                          }
                        }
                      },
                      [
                        _c("feather-icon", {
                          staticClass: "mr-75",
                          attrs: { icon: suggestion.icon, size: "18" }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "align-middle" }, [
                          _vm._v(_vm._s(suggestion.title))
                        ]),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "ml-auto",
                          class: { "text-warning": suggestion.isBookmarked },
                          attrs: { icon: "StarIcon", size: "16" },
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              $event.preventDefault()
                              return _vm.toggleBookmarked(suggestion)
                            }
                          }
                        })
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            !(
                              _vm.filteredData.pages &&
                              _vm.filteredData.pages.length
                            ) && _vm.searchQuery,
                          expression:
                            "!(filteredData.pages && filteredData.pages.length) && searchQuery"
                        }
                      ],
                      attrs: { disabled: "" }
                    },
                    [_vm._v("\n          No Results Found.\n        ")]
                  )
                ],
                2
              )
            ],
            1
          )
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=template&id=09965980&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=template&id=09965980&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-nav-item-dropdown",
    {
      staticClass: "dropdown-cart mr-25",
      attrs: { "menu-class": "dropdown-menu-media", right: "" },
      on: { show: _vm.fetchItems },
      scopedSlots: _vm._u([
        {
          key: "button-content",
          fn: function() {
            return [
              _c("feather-icon", {
                staticClass: "text-body",
                attrs: {
                  badge: _vm.$store.state["app-ecommerce"].cartItemsCount,
                  icon: "ShoppingCartIcon",
                  size: "21"
                }
              })
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _vm._v(" "),
      _c("li", { staticClass: "dropdown-menu-header" }, [
        _c(
          "div",
          { staticClass: "dropdown-header d-flex" },
          [
            _c("h4", { staticClass: "notification-title mb-0 mr-auto" }, [
              _vm._v("\n        My Cart\n      ")
            ]),
            _vm._v(" "),
            _c("b-badge", { attrs: { pill: "", variant: "light-primary" } }, [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.$store.state["app-ecommerce"].cartItemsCount) +
                  " Items\n      "
              )
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.items.length
        ? _c(
            "vue-perfect-scrollbar",
            {
              staticClass: "scrollable-container media-list scroll-area",
              attrs: { settings: _vm.perfectScrollbarSettings, tagname: "li" }
            },
            _vm._l(_vm.items, function(item) {
              return _c(
                "b-media",
                {
                  key: item.name,
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "aside",
                        fn: function() {
                          return [
                            _c("b-img", {
                              attrs: {
                                src: item.image,
                                alt: item.name,
                                rounded: "",
                                width: "62px"
                              }
                            })
                          ]
                        },
                        proxy: true
                      }
                    ],
                    null,
                    true
                  )
                },
                [
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "cart-item-remove cursor-pointer",
                    attrs: { icon: "XIcon" },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.removeItemFromCart(item.id)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "media-heading" }, [
                    _c(
                      "h6",
                      { staticClass: "cart-item-title" },
                      [
                        _c("b-link", { staticClass: "text-body" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(item.name) +
                              "\n          "
                          )
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("small", { staticClass: "cart-item-by" }, [
                      _vm._v("By " + _vm._s(item.brand))
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "cart-item-qty ml-1" },
                    [
                      _c("b-form-spinbutton", {
                        attrs: { min: "1", size: "sm" },
                        model: {
                          value: item.qty,
                          callback: function($$v) {
                            _vm.$set(item, "qty", $$v)
                          },
                          expression: "item.qty"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("h5", { staticClass: "cart-item-price" }, [
                    _vm._v("\n        $" + _vm._s(item.price) + "\n      ")
                  ])
                ],
                1
              )
            }),
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.items.length
        ? _c(
            "li",
            { staticClass: "dropdown-menu-footer" },
            [
              _c(
                "div",
                { staticClass: "d-flex justify-content-between mb-1" },
                [
                  _c("h6", { staticClass: "font-weight-bolder mb-0" }, [
                    _vm._v("\n        Total:\n      ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "h6",
                    { staticClass: "text-primary font-weight-bolder mb-0" },
                    [
                      _vm._v(
                        "\n        $" + _vm._s(_vm.totalAmount) + "\n      "
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(255, 255, 255, 0.15)",
                      expression: "'rgba(255, 255, 255, 0.15)'",
                      modifiers: { "400": true }
                    }
                  ],
                  attrs: {
                    variant: "primary",
                    block: "",
                    to: { name: "apps-e-commerce-checkout" }
                  }
                },
                [_vm._v("\n      Checkout\n    ")]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.items.length
        ? _c("p", { staticClass: "m-0 p-1 text-center" }, [
            _vm._v("\n    Your cart is empty\n  ")
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=template&id=def79dae&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=template&id=def79dae& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-nav-item",
    {
      on: {
        click: function($event) {
          _vm.skin = _vm.isDark ? "light" : "dark"
        }
      }
    },
    [
      _c("feather-icon", {
        attrs: { size: "21", icon: (_vm.isDark ? "Sun" : "Moon") + "Icon" }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue?vue&type=template&id=e29bc1ee&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue?vue&type=template&id=e29bc1ee& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-nav-item-dropdown",
    {
      staticClass: "dropdown-language",
      attrs: { id: "dropdown-grouped", variant: "link", right: "" },
      scopedSlots: _vm._u([
        {
          key: "button-content",
          fn: function() {
            return [
              _c("b-img", {
                attrs: {
                  src: _vm.currentLocale.img,
                  height: "14px",
                  width: "22px",
                  alt: _vm.currentLocale.locale
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "ml-50 text-body" }, [
                _vm._v(_vm._s(_vm.currentLocale.name))
              ])
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _vm._v(" "),
      _vm._l(_vm.locales, function(localeObj) {
        return _c(
          "b-dropdown-item",
          {
            key: localeObj.locale,
            on: {
              click: function($event) {
                _vm.$i18n.locale = localeObj.locale
              }
            }
          },
          [
            _c("b-img", {
              attrs: {
                src: localeObj.img,
                height: "14px",
                width: "22px",
                alt: localeObj.locale
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "ml-50" }, [
              _vm._v(_vm._s(localeObj.name))
            ])
          ],
          1
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue?vue&type=template&id=3bb7c18b&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue?vue&type=template&id=3bb7c18b& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-nav-item-dropdown",
    {
      staticClass: "dropdown-notification mr-25",
      attrs: { "menu-class": "dropdown-menu-media", right: "" },
      scopedSlots: _vm._u([
        {
          key: "button-content",
          fn: function() {
            return [
              _c("feather-icon", {
                staticClass: "text-body",
                attrs: {
                  badge: "6",
                  "badge-classes": "bg-danger",
                  icon: "BellIcon",
                  size: "21"
                }
              })
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _vm._v(" "),
      _c("li", { staticClass: "dropdown-menu-header" }, [
        _c(
          "div",
          { staticClass: "dropdown-header d-flex" },
          [
            _c("h4", { staticClass: "notification-title mb-0 mr-auto" }, [
              _vm._v("\n        Notifications\n      ")
            ]),
            _vm._v(" "),
            _c("b-badge", { attrs: { pill: "", variant: "light-primary" } }, [
              _vm._v("\n        6 New\n      ")
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "li",
        { staticClass: "dropdown-menu-footer" },
        [
          _c(
            "b-button",
            {
              directives: [
                {
                  name: "ripple",
                  rawName: "v-ripple.400",
                  value: "rgba(255, 255, 255, 0.15)",
                  expression: "'rgba(255, 255, 255, 0.15)'",
                  modifiers: { "400": true }
                }
              ],
              attrs: { variant: "primary", block: "" }
            },
            [_vm._v("Read all notifications")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "vue-perfect-scrollbar",
      {
        staticClass: "scrollable-container media-list scroll-area",
        attrs: { settings: _vm.perfectScrollbarSettings, tagname: "li" }
      },
      [
        _vm._l(_vm.notifications, function(notification) {
          return _c(
            "b-link",
            { key: notification.subtitle },
            [
              _c(
                "b-media",
                {
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "aside",
                        fn: function() {
                          return [
                            _c("b-avatar", {
                              attrs: {
                                size: "32",
                                src: notification.avatar,
                                text: notification.avatar,
                                variant: notification.type
                              }
                            })
                          ]
                        },
                        proxy: true
                      }
                    ],
                    null,
                    true
                  )
                },
                [
                  _vm._v(" "),
                  _c("p", { staticClass: "media-heading" }, [
                    _c("span", { staticClass: "font-weight-bolder" }, [
                      _vm._v(
                        "\n            " +
                          _vm._s(notification.title) +
                          "\n          "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "notification-text" }, [
                    _vm._v(_vm._s(notification.subtitle))
                  ])
                ]
              )
            ],
            1
          )
        }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "media d-flex align-items-center" },
          [
            _c("h6", { staticClass: "font-weight-bolder mr-auto mb-0" }, [
              _vm._v("\n        System Notifications\n      ")
            ]),
            _vm._v(" "),
            _c("b-form-checkbox", { attrs: { checked: true, switch: "" } })
          ],
          1
        ),
        _vm._v(" "),
        _vm._l(_vm.systemNotifications, function(notification) {
          return _c(
            "b-link",
            { key: notification.subtitle },
            [
              _c(
                "b-media",
                {
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "aside",
                        fn: function() {
                          return [
                            _c(
                              "b-avatar",
                              {
                                attrs: {
                                  size: "32",
                                  variant: notification.type
                                }
                              },
                              [
                                _c("feather-icon", {
                                  attrs: { icon: notification.icon }
                                })
                              ],
                              1
                            )
                          ]
                        },
                        proxy: true
                      }
                    ],
                    null,
                    true
                  )
                },
                [
                  _vm._v(" "),
                  _c("p", { staticClass: "media-heading" }, [
                    _c("span", { staticClass: "font-weight-bolder" }, [
                      _vm._v(
                        "\n            " +
                          _vm._s(notification.title) +
                          "\n          "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "notification-text" }, [
                    _vm._v(_vm._s(notification.subtitle))
                  ])
                ]
              )
            ],
            1
          )
        })
      ],
      2
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=template&id=1df32828&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=template&id=1df32828&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("li", { staticClass: "nav-item nav-search" }, [
    _c(
      "a",
      {
        staticClass: "nav-link nav-link-search",
        attrs: { href: "javascript:void(0)" },
        on: {
          click: function($event) {
            _vm.showSearchBar = true
          }
        }
      },
      [_c("feather-icon", { attrs: { icon: "SearchIcon", size: "21" } })],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "search-input", class: { open: _vm.showSearchBar } },
      [
        _c(
          "div",
          { staticClass: "search-input-icon" },
          [_c("feather-icon", { attrs: { icon: "SearchIcon" } })],
          1
        ),
        _vm._v(" "),
        _vm.showSearchBar
          ? _c("b-form-input", {
              attrs: {
                placeholder: "Explore Vuexy",
                autofocus: "",
                autocomplete: "off"
              },
              on: {
                keyup: [
                  function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "up", 38, $event.key, [
                        "Up",
                        "ArrowUp"
                      ])
                    ) {
                      return null
                    }
                    return _vm.increaseIndex(false)
                  },
                  function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "down", 40, $event.key, [
                        "Down",
                        "ArrowDown"
                      ])
                    ) {
                      return null
                    }
                    return _vm.increaseIndex.apply(null, arguments)
                  },
                  function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "esc", 27, $event.key, [
                        "Esc",
                        "Escape"
                      ])
                    ) {
                      return null
                    }
                    _vm.showSearchBar = false
                    _vm.resetsearchQuery()
                  },
                  function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.suggestionSelected.apply(null, arguments)
                  }
                ],
                blur: function($event) {
                  $event.stopPropagation()
                  _vm.showSearchBar = false
                  _vm.resetsearchQuery()
                }
              },
              model: {
                value: _vm.searchQuery,
                callback: function($$v) {
                  _vm.searchQuery = $$v
                },
                expression: "searchQuery"
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "search-input-close",
            on: {
              click: function($event) {
                _vm.showSearchBar = false
                _vm.resetsearchQuery()
              }
            }
          },
          [_c("feather-icon", { attrs: { icon: "XIcon" } })],
          1
        ),
        _vm._v(" "),
        _c(
          "vue-perfect-scrollbar",
          {
            staticClass:
              "search-list search-list-main scroll-area overflow-hidden",
            class: { show: _vm.searchQuery },
            attrs: { settings: _vm.perfectScrollbarSettings, tagname: "ul" }
          },
          _vm._l(_vm.filteredData, function(
            suggestion_list,
            grp_name,
            grp_index
          ) {
            return _c(
              "li",
              { key: grp_index, staticClass: "suggestions-groups-list" },
              [
                _c("p", { staticClass: "suggestion-group-title" }, [
                  _c("span", [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.title(grp_name)) +
                        "\n          "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  [
                    _vm._l(suggestion_list, function(suggestion, index) {
                      return _c(
                        "li",
                        {
                          key: index,
                          staticClass:
                            "suggestion-group-suggestion cursor-pointer",
                          class: {
                            "suggestion-current-selected":
                              _vm.currentSelected === grp_index + "." + index
                          },
                          on: {
                            mouseenter: function($event) {
                              _vm.currentSelected = grp_index + "." + index
                            },
                            mousedown: function($event) {
                              $event.preventDefault()
                              return _vm.suggestionSelected(
                                grp_name,
                                suggestion
                              )
                            }
                          }
                        },
                        [
                          grp_name === "pages"
                            ? _c(
                                "b-link",
                                { staticClass: "p-0" },
                                [
                                  _c("feather-icon", {
                                    staticClass: "mr-75",
                                    attrs: { icon: suggestion.icon }
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "align-middle" }, [
                                    _vm._v(_vm._s(suggestion.title))
                                  ])
                                ],
                                1
                              )
                            : grp_name === "files"
                            ? [
                                _c(
                                  "div",
                                  { staticClass: "d-flex align-items-center" },
                                  [
                                    _c("b-img", {
                                      staticClass: "mr-1",
                                      attrs: {
                                        src: suggestion.icon,
                                        height: "32"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("div", [
                                      _c("p", [
                                        _vm._v(_vm._s(suggestion.file_name))
                                      ]),
                                      _vm._v(" "),
                                      _c("small", [
                                        _vm._v("by " + _vm._s(suggestion.from))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("small", { staticClass: "ml-auto" }, [
                                      _vm._v(_vm._s(suggestion.size))
                                    ])
                                  ],
                                  1
                                )
                              ]
                            : grp_name === "contacts"
                            ? [
                                _c(
                                  "div",
                                  { staticClass: "d-flex align-items-center" },
                                  [
                                    _c("b-avatar", {
                                      staticClass: "mr-1",
                                      attrs: { src: suggestion.img, size: "32" }
                                    }),
                                    _vm._v(" "),
                                    _c("div", [
                                      _c("p", [
                                        _vm._v(_vm._s(suggestion.name))
                                      ]),
                                      _vm._v(" "),
                                      _c("small", [
                                        _vm._v(_vm._s(suggestion.email))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("small", { staticClass: "ml-auto" }, [
                                      _vm._v(_vm._s(suggestion.time))
                                    ])
                                  ],
                                  1
                                )
                              ]
                            : _vm._e()
                        ],
                        2
                      )
                    }),
                    _vm._v(" "),
                    !suggestion_list.length && _vm.searchQuery
                      ? _c(
                          "li",
                          {
                            staticClass:
                              "suggestion-group-suggestion no-results"
                          },
                          [_c("p", [_vm._v("No Results Found.")])]
                        )
                      : _vm._e()
                  ],
                  2
                )
              ]
            )
          }),
          0
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=template&id=58cac92a&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=template&id=58cac92a& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-nav-item-dropdown",
    {
      staticClass: "dropdown-user",
      attrs: {
        right: "",
        "toggle-class": "d-flex align-items-center dropdown-user-link"
      },
      scopedSlots: _vm._u([
        {
          key: "button-content",
          fn: function() {
            return [
              _c("div", { staticClass: "d-sm-flex d-none user-nav" }, [
                _c("p", { staticClass: "user-name font-weight-bolder mb-0" }, [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.userData.fullName || _vm.userData.username) +
                      "\n      "
                  )
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "user-status" }, [
                  _vm._v(_vm._s(_vm.userData.role))
                ])
              ]),
              _vm._v(" "),
              _c(
                "b-avatar",
                {
                  staticClass: "badge-minimal",
                  attrs: {
                    size: "40",
                    src: _vm.userData.avatar,
                    variant: "light-primary",
                    badge: "",
                    "badge-variant": "success"
                  }
                },
                [
                  !_vm.userData.fullName
                    ? _c("feather-icon", {
                        attrs: { icon: "UserIcon", size: "22" }
                      })
                    : _vm._e()
                ],
                1
              )
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _vm._v(" "),
      _c(
        "b-dropdown-item",
        {
          attrs: {
            to: { name: "pages-profile" },
            "link-class": "d-flex align-items-center"
          }
        },
        [
          _c("feather-icon", {
            staticClass: "mr-50",
            attrs: { size: "16", icon: "UserIcon" }
          }),
          _vm._v(" "),
          _c("span", [_vm._v("Profile")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-dropdown-item",
        {
          attrs: {
            to: { name: "apps-email" },
            "link-class": "d-flex align-items-center"
          }
        },
        [
          _c("feather-icon", {
            staticClass: "mr-50",
            attrs: { size: "16", icon: "MailIcon" }
          }),
          _vm._v(" "),
          _c("span", [_vm._v("Inbox")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-dropdown-item",
        {
          attrs: {
            to: { name: "apps-todo" },
            "link-class": "d-flex align-items-center"
          }
        },
        [
          _c("feather-icon", {
            staticClass: "mr-50",
            attrs: { size: "16", icon: "CheckSquareIcon" }
          }),
          _vm._v(" "),
          _c("span", [_vm._v("Task")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-dropdown-item",
        {
          attrs: {
            to: { name: "apps-chat" },
            "link-class": "d-flex align-items-center"
          }
        },
        [
          _c("feather-icon", {
            staticClass: "mr-50",
            attrs: { size: "16", icon: "MessageSquareIcon" }
          }),
          _vm._v(" "),
          _c("span", [_vm._v("Chat")])
        ],
        1
      ),
      _vm._v(" "),
      _c("b-dropdown-divider"),
      _vm._v(" "),
      _c(
        "b-dropdown-item",
        {
          attrs: {
            to: { name: "pages-account-setting" },
            "link-class": "d-flex align-items-center"
          }
        },
        [
          _c("feather-icon", {
            staticClass: "mr-50",
            attrs: { size: "16", icon: "SettingsIcon" }
          }),
          _vm._v(" "),
          _c("span", [_vm._v("Settings")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-dropdown-item",
        {
          attrs: {
            to: { name: "pages-pricing" },
            "link-class": "d-flex align-items-center"
          }
        },
        [
          _c("feather-icon", {
            staticClass: "mr-50",
            attrs: { size: "16", icon: "CreditCardIcon" }
          }),
          _vm._v(" "),
          _c("span", [_vm._v("Pricing")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-dropdown-item",
        {
          attrs: {
            to: { name: "pages-faq" },
            "link-class": "d-flex align-items-center"
          }
        },
        [
          _c("feather-icon", {
            staticClass: "mr-50",
            attrs: { size: "16", icon: "HelpCircleIcon" }
          }),
          _vm._v(" "),
          _c("span", [_vm._v("FAQ")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-dropdown-item",
        {
          attrs: { "link-class": "d-flex align-items-center" },
          on: { click: _vm.logout }
        },
        [
          _c("feather-icon", {
            staticClass: "mr-50",
            attrs: { size: "16", icon: "LogOutIcon" }
          }),
          _vm._v(" "),
          _c("span", [_vm._v("Logout")])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=template&id=fef05e66&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=template&id=fef05e66& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "app-content content",
      class: [
        { "show-overlay": _vm.$store.state.app.shallShowOverlay },
        _vm.$route.meta.contentClass
      ]
    },
    [
      _c("div", { staticClass: "content-overlay" }),
      _vm._v(" "),
      _c("div", { staticClass: "header-navbar-shadow" }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "content-wrapper",
          class: _vm.contentWidth === "boxed" ? "container p-0" : null
        },
        [
          _vm._t("breadcrumb", function() {
            return [_c("app-breadcrumb")]
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "content-body" },
            [
              _c(
                "transition",
                { attrs: { name: _vm.routerTransition, mode: "out-in" } },
                [_vm._t("default")],
                2
              )
            ],
            1
          )
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=template&id=5f8a9b2b&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=template&id=5f8a9b2b& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "app-content content",
      class: [
        { "show-overlay": _vm.$store.state.app.shallShowOverlay },
        _vm.$route.meta.contentClass
      ]
    },
    [
      _c("div", { staticClass: "content-overlay" }),
      _vm._v(" "),
      _c("div", { staticClass: "header-navbar-shadow" }),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: _vm.routerTransition, mode: "out-in" } },
        [
          _c(
            "div",
            {
              staticClass: "content-area-wrapper",
              class: _vm.contentWidth === "boxed" ? "container p-0" : null
            },
            [
              _vm._t("breadcrumb", function() {
                return [_c("app-breadcrumb")]
              }),
              _vm._v(" "),
              _c("portal-target", {
                attrs: { name: "content-renderer-sidebar-left", slim: "" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "content-right" }, [
                _c("div", { staticClass: "content-wrapper" }, [
                  _c(
                    "div",
                    { staticClass: "content-body" },
                    [_vm._t("default")],
                    2
                  )
                ])
              ])
            ],
            2
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=template&id=68852ebd&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=template&id=68852ebd& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "app-content content",
      class: [
        { "show-overlay": _vm.$store.state.app.shallShowOverlay },
        _vm.$route.meta.contentClass
      ]
    },
    [
      _c("div", { staticClass: "content-overlay" }),
      _vm._v(" "),
      _c("div", { staticClass: "header-navbar-shadow" }),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: _vm.routerTransition, mode: "out-in" } },
        [
          _c(
            "div",
            {
              staticClass: "content-wrapper clearfix",
              class: _vm.contentWidth === "boxed" ? "container p-0" : null
            },
            [
              _vm._t("breadcrumb", function() {
                return [_c("app-breadcrumb")]
              }),
              _vm._v(" "),
              _c("div", { staticClass: "content-detached content-right" }, [
                _c("div", { staticClass: "content-wrapper" }, [
                  _c(
                    "div",
                    { staticClass: "content-body" },
                    [_vm._t("default")],
                    2
                  )
                ])
              ]),
              _vm._v(" "),
              _c("portal-target", {
                attrs: {
                  name: "content-renderer-sidebar-detached-left",
                  slim: ""
                }
              })
            ],
            2
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=f11d7d8c&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=f11d7d8c& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "main-menu menu-fixed menu-accordion menu-shadow",
      class: [
        {
          expanded:
            !_vm.isVerticalMenuCollapsed ||
            (_vm.isVerticalMenuCollapsed && _vm.isMouseHovered)
        },
        _vm.skin === "semi-dark" ? "menu-dark" : "menu-light"
      ],
      on: {
        mouseenter: function($event) {
          return _vm.updateMouseHovered(true)
        },
        mouseleave: function($event) {
          return _vm.updateMouseHovered(false)
        }
      }
    },
    [
      _c(
        "div",
        { staticClass: "navbar-header expanded" },
        [
          _vm._t(
            "header",
            function() {
              return [
                _c("ul", { staticClass: "nav navbar-nav flex-row" }, [
                  _c(
                    "li",
                    { staticClass: "nav-item mr-auto" },
                    [
                      _c(
                        "b-link",
                        { staticClass: "navbar-brand", attrs: { to: "/" } },
                        [
                          _c(
                            "span",
                            { staticClass: "brand-logo" },
                            [
                              _c("b-img", {
                                attrs: { src: _vm.appLogoImage, alt: "logo" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("h2", { staticClass: "brand-text" }, [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.appName) +
                                "\n            "
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item nav-toggle" },
                    [
                      _c(
                        "b-link",
                        { staticClass: "nav-link modern-nav-toggle" },
                        [
                          _c("feather-icon", {
                            staticClass: "d-block d-xl-none",
                            attrs: { icon: "XIcon", size: "20" },
                            on: { click: _vm.toggleVerticalMenuActive }
                          }),
                          _vm._v(" "),
                          _c("feather-icon", {
                            staticClass:
                              "d-none d-xl-block collapse-toggle-icon",
                            attrs: {
                              icon: _vm.collapseTogglerIconFeather,
                              size: "20"
                            },
                            on: { click: _vm.toggleCollapsed }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ]
            },
            {
              toggleVerticalMenuActive: _vm.toggleVerticalMenuActive,
              toggleCollapsed: _vm.toggleCollapsed,
              collapseTogglerIcon: _vm.collapseTogglerIcon
            }
          )
        ],
        2
      ),
      _vm._v(" "),
      _c("div", {
        staticClass: "shadow-bottom",
        class: { "d-block": _vm.shallShadowBottom }
      }),
      _vm._v(" "),
      _c(
        "vue-perfect-scrollbar",
        {
          staticClass: "main-menu-content scroll-area",
          attrs: { settings: _vm.perfectScrollbarSettings, tagname: "ul" },
          on: {
            "ps-scroll-y": function(evt) {
              _vm.shallShadowBottom = evt.srcElement.scrollTop > 0
            }
          }
        },
        [
          _c("vertical-nav-menu-items", {
            staticClass: "navigation navigation-main",
            attrs: { items: _vm.navMenuItems }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=template&id=79499ad7&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=template&id=79499ad7& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.canViewVerticalNavMenuGroup(_vm.item)
    ? _c(
        "li",
        {
          staticClass: "nav-item has-sub",
          class: {
            open: _vm.isOpen,
            disabled: _vm.item.disabled,
            "sidebar-group-active": _vm.isActive
          }
        },
        [
          _c(
            "b-link",
            {
              staticClass: "d-flex align-items-center",
              on: {
                click: function() {
                  return _vm.updateGroupOpen(!_vm.isOpen)
                }
              }
            },
            [
              _c("feather-icon", {
                attrs: { icon: _vm.item.icon || "CircleIcon" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "menu-title text-truncate" }, [
                _vm._v(_vm._s(_vm.t(_vm.item.title)))
              ]),
              _vm._v(" "),
              _vm.item.tag
                ? _c(
                    "b-badge",
                    {
                      staticClass: "mr-1 ml-auto",
                      attrs: {
                        pill: "",
                        variant: _vm.item.tagVariant || "primary"
                      }
                    },
                    [_vm._v("\n      " + _vm._s(_vm.item.tag) + "\n    ")]
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-collapse",
            {
              staticClass: "menu-content",
              attrs: { tag: "ul" },
              model: {
                value: _vm.isOpen,
                callback: function($$v) {
                  _vm.isOpen = $$v
                },
                expression: "isOpen"
              }
            },
            _vm._l(_vm.item.children, function(child) {
              return _c(_vm.resolveNavItemComponent(child), {
                key: child.header || child.title,
                ref: "groupChild",
                refInFor: true,
                tag: "component",
                attrs: { item: child }
              })
            }),
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=template&id=79ec4d77&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=template&id=79ec4d77& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    _vm._l(_vm.items, function(item) {
      return _c(_vm.resolveNavItemComponent(item), {
        key: item.header || item.title,
        tag: "component",
        attrs: { item: item }
      })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=template&id=10ffb945&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=template&id=10ffb945& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.canViewVerticalNavMenuLink(_vm.item)
    ? _c(
        "li",
        {
          staticClass: "nav-item",
          class: {
            active: _vm.isActive,
            disabled: _vm.item.disabled
          }
        },
        [
          _c(
            "b-link",
            _vm._b(
              { staticClass: "d-flex align-items-center" },
              "b-link",
              _vm.linkProps,
              false
            ),
            [
              _c("feather-icon", {
                attrs: { icon: _vm.item.icon || "CircleIcon" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "menu-title text-truncate" }, [
                _vm._v(_vm._s(_vm.t(_vm.item.title)))
              ]),
              _vm._v(" "),
              _vm.item.tag
                ? _c(
                    "b-badge",
                    {
                      staticClass: "mr-1 ml-auto",
                      attrs: {
                        pill: "",
                        variant: _vm.item.tagVariant || "primary"
                      }
                    },
                    [_vm._v("\n      " + _vm._s(_vm.item.tag) + "\n    ")]
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/layouts/components/Navbar.vue?vue&type=template&id=a23ed5ae&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/layouts/components/Navbar.vue?vue&type=template&id=a23ed5ae& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "navbar-container d-flex content align-items-center" },
    [
      _c("ul", { staticClass: "nav navbar-nav d-xl-none" }, [
        _c(
          "li",
          { staticClass: "nav-item" },
          [
            _c(
              "b-link",
              {
                staticClass: "nav-link",
                on: { click: _vm.toggleVerticalMenuActive }
              },
              [_c("feather-icon", { attrs: { icon: "MenuIcon", size: "21" } })],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex"
        },
        [_c("dark-Toggler", { staticClass: "d-none d-lg-block" })],
        1
      ),
      _vm._v(" "),
      _c(
        "b-navbar-nav",
        { staticClass: "nav align-items-center ml-auto" },
        [
          _c(
            "b-nav-item-dropdown",
            {
              staticClass: "dropdown-user",
              attrs: {
                right: "",
                "toggle-class": "d-flex align-items-center dropdown-user-link"
              },
              scopedSlots: _vm._u([
                {
                  key: "button-content",
                  fn: function() {
                    return [
                      _c("div", { staticClass: "d-sm-flex d-none user-nav" }, [
                        _c(
                          "p",
                          { staticClass: "user-name font-weight-bolder mb-0" },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.user_name) +
                                "\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "user-status" }, [
                          _vm._v(_vm._s(_vm.userGuard))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("b-avatar", {
                        staticClass: "badge-minimal",
                        attrs: {
                          size: "40",
                          variant: "light-primary",
                          badge: "",
                          src:
                            "/admin/api/attachment/" +
                            _vm.auth +
                            "_profile/" +
                            _vm.photo,
                          "badge-variant": "success"
                        }
                      })
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [
              _vm._v(" "),
              _c(
                "b-dropdown-item",
                {
                  attrs: { "link-class": "d-flex align-items-center" },
                  on: { click: _vm.goToProfile }
                },
                [
                  _c("feather-icon", {
                    staticClass: "mr-50",
                    attrs: { size: "16", icon: "UserIcon" }
                  }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Profile")])
                ],
                1
              ),
              _vm._v(" "),
              _c("b-dropdown-divider"),
              _vm._v(" "),
              _c(
                "b-dropdown-item",
                {
                  attrs: { "link-class": "d-flex align-items-center" },
                  on: { click: _vm.logout }
                },
                [
                  _c("feather-icon", {
                    staticClass: "mr-50",
                    attrs: { size: "16", icon: "LogOutIcon" }
                  }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Logout")])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);