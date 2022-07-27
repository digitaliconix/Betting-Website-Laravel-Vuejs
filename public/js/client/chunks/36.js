(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

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

/***/ "./frontend/src/client/views/HelpRequest/index.vue":
/*!*********************************************************!*\
  !*** ./frontend/src/client/views/HelpRequest/index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_8485af54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=8485af54&scoped=true& */ "./frontend/src/client/views/HelpRequest/index.vue?vue&type=template&id=8485af54&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./frontend/src/client/views/HelpRequest/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_8485af54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_8485af54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8485af54",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/client/views/HelpRequest/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/client/views/HelpRequest/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./frontend/src/client/views/HelpRequest/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/client/views/HelpRequest/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/client/views/HelpRequest/index.vue?vue&type=template&id=8485af54&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./frontend/src/client/views/HelpRequest/index.vue?vue&type=template&id=8485af54&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8485af54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=8485af54&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/client/views/HelpRequest/index.vue?vue&type=template&id=8485af54&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8485af54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8485af54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/client/views/HelpRequest/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/client/views/HelpRequest/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _components_Table_Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Table/Panel */ "./frontend/src/components/Table/Panel.vue");
/* harmony import */ var _core_components_toastification_ToastificationContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent */ "./frontend/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var _libs_api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/libs/api.js */ "./frontend/src/libs/api.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _libs_mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/libs/mixins */ "./frontend/src/libs/mixins.js");
/* harmony import */ var _components_Form_TagInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Form/TagInput */ "./frontend/src/components/Form/TagInput.vue");
/* harmony import */ var _core_components_b_card_actions_BCardActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/components/b-card-actions/BCardActions */ "./frontend/src/@core/components/b-card-actions/BCardActions.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue */ "./frontend/node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_8__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCardActions: _core_components_b_card_actions_BCardActions__WEBPACK_IMPORTED_MODULE_7__["default"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BModal"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTooltip"],
    Panel: _components_Table_Panel__WEBPACK_IMPORTED_MODULE_1__["default"],
    XTagInput: _components_Form_TagInput__WEBPACK_IMPORTED_MODULE_6__["default"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"]
  },
  directives: {
    'b-modal': bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["VBModal"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  name: "Index",
  mixins: [_libs_mixins__WEBPACK_IMPORTED_MODULE_5__["form"]],
  data: function data() {
    return {
      model: {
        message: ''
      },
      messageModal: false,
      additionalParams: {},
      urlApi: "/client/api/help_requests",
      resource: "/help_requests",
      panel_sort_enabled: true,
      columns: [{
        label: 'ID',
        field: 'id'
      }, {
        label: 'Help Type',
        displayText: 'help_type',
        field: 'title'
      }, {
        label: 'Service Type',
        displayText: 'help_type_service',
        field: 'title'
      }, // {
      //     label: 'User',
      //     displayText: 'user',
      //     field: 'name',
      // },
      {
        label: 'Status',
        displayText: 'status',
        field: 'title'
      }, {
        label: 'Created At',
        field: 'created_at',
        format: 'formatDate'
      }, {
        label: 'Action',
        field: 'action',
        action: true
      }]
    };
  },
  methods: {
    openMessage: function openMessage(item) {
      this.model = item;
      this.messageModal = true;
    },
    goToChat: function goToChat(item) {
      this.$router.push("/help_request_chat/".concat(item.id));
    },
    // onHelpTypeUpdated(e){
    //     Vue.set(this.$data.form,'help_type',e);
    //     Vue.set(this.$data.additionalParams,'help_type_id',e.id);
    // },
    // onHelpTypeServiceUpdated(e){
    //     Vue.set(this.$data.form,'help_type_service',e);
    //     Vue.set(this.$data.additionalParams,'help_type_service_id',e.id);
    // },
    // onHelpRequestStatusUpdated(e){
    //     Vue.set(this.$data.form,'status',e);
    //     Vue.set(this.$data.additionalParams,'status_id',e.id);
    // },
    Search: function Search() {
      this.openLoading();
      this.$refs.panel.reload();
      this.closeLoading();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/client/views/HelpRequest/index.vue?vue&type=template&id=8485af54&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/client/views/HelpRequest/index.vue?vue&type=template&id=8485af54&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-card",
        [
          _c(
            "b-row",
            [
              _c("b-col", { attrs: { cols: "6" } }, [
                _c("h3", [_vm._v("Help Requests")])
              ]),
              _vm._v(" "),
              _c(
                "b-col",
                { staticClass: "text-right", attrs: { cols: "6" } },
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
                      staticClass: "mr-1 mb-1",
                      attrs: {
                        type: "submit",
                        variant: "primary",
                        to: { name: "create-help-requests" }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Create\n                    "
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("panel", {
            ref: "panel",
            attrs: {
              "url-api": _vm.urlApi,
              columns: _vm.columns,
              resource: _vm.resource,
              "sort-enabled": _vm.panel_sort_enabled,
              "additional-params": _vm.additionalParams
            },
            scopedSlots: _vm._u([
              {
                key: "action",
                fn: function(props) {
                  return _c(
                    "div",
                    { staticClass: "text-nowrap" },
                    [
                      props.item.message
                        ? [
                            _c("feather-icon", {
                              staticClass: "cursor-pointer",
                              attrs: {
                                id:
                                  "help-request-row-" +
                                  props.item.id +
                                  "-edit-icon",
                                icon: "MessageSquareIcon",
                                size: "16"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.openMessage(props.item)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("b-tooltip", {
                              staticClass: "cursor-pointer",
                              attrs: {
                                target:
                                  "help-request-row-" +
                                  props.item.id +
                                  "-edit-icon",
                                title: "Show Message"
                              }
                            }),
                            _vm._v(" "),
                            props.item.status_id == 2
                              ? _c("feather-icon", {
                                  staticClass: "cursor-pointer",
                                  attrs: {
                                    id:
                                      "help-request-row-" +
                                      props.item.id +
                                      "-message-icon",
                                    icon: "MessageCircleIcon",
                                    size: "16"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.goToChat(props.item)
                                    }
                                  }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _c("b-tooltip", {
                              staticClass: "cursor-pointer",
                              attrs: {
                                target:
                                  "help-request-row-" +
                                  props.item.id +
                                  "-message-icon",
                                title: "Chat"
                              }
                            })
                          ]
                        : [
                            _vm._v(
                              "\n                        No Message\n                    "
                            )
                          ]
                    ],
                    2
                  )
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "modal-prevent-closing",
            title: "Detail",
            centered: "",
            "ok-only": "",
            "ok-title": "Close"
          },
          model: {
            value: _vm.messageModal,
            callback: function($$v) {
              _vm.messageModal = $$v
            },
            expression: "messageModal"
          }
        },
        [
          _c("b-card-text", [
            _vm._v(
              "\n                Message : " +
                _vm._s(_vm.model.message) +
                "\n            "
            )
          ])
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