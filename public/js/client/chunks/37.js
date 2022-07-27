(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./frontend/src/components/Form/TagInput.vue":
/*!***************************************************!*\
  !*** ./frontend/src/components/Form/TagInput.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TagInput_vue_vue_type_template_id_5b118de8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TagInput.vue?vue&type=template&id=5b118de8& */ "./frontend/src/components/Form/TagInput.vue?vue&type=template&id=5b118de8&");
/* harmony import */ var _TagInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TagInput.vue?vue&type=script&lang=js& */ "./frontend/src/components/Form/TagInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TagInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TagInput_vue_vue_type_template_id_5b118de8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TagInput_vue_vue_type_template_id_5b118de8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/components/Form/TagInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/components/Form/TagInput.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./frontend/src/components/Form/TagInput.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TagInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/components/Form/TagInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/components/Form/TagInput.vue?vue&type=template&id=5b118de8&":
/*!**********************************************************************************!*\
  !*** ./frontend/src/components/Form/TagInput.vue?vue&type=template&id=5b118de8& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_template_id_5b118de8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TagInput.vue?vue&type=template&id=5b118de8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/components/Form/TagInput.vue?vue&type=template&id=5b118de8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_template_id_5b118de8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_template_id_5b118de8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/libs/mixins.js":
/*!*************************************!*\
  !*** ./frontend/src/libs/mixins.js ***!
  \*************************************/
/*! exports provided: form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "form", function() { return form; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./frontend/src/libs/api.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./frontend/src/libs/helpers.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store */ "./frontend/src/store/index.js");
/* harmony import */ var _core_components_toastification_ToastificationContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent */ "./frontend/src/@core/components/toastification/ToastificationContent.vue");




var form = {
  data: function data() {
    return {
      form: {},
      error: {},
      isProcessing: false,
      show: false
    };
  },
  computed: {
    mode: function mode() {
      return this.$route.meta.mode;
    },
    isEdit: function isEdit() {
      return this.mode === 'edit';
    }
  },
  methods: {
    errors: function errors(key) {
      return this.error[key] ? 'error-bg' : '';
    },
    success: function success() {
      this.$toast({
        component: _core_components_toastification_ToastificationContent__WEBPACK_IMPORTED_MODULE_3__["default"],
        props: {
          title: 'Success',
          icon: 'BellIcon',
          text: this.message,
          variant: 'success'
        }
      });
    },
    deleted: function deleted() {
      var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.message;
      this.$toast({
        component: _core_components_toastification_ToastificationContent__WEBPACK_IMPORTED_MODULE_3__["default"],
        props: {
          title: 'Deleted',
          icon: 'BellIcon',
          text: msg,
          variant: 'danger'
        }
      });
    },
    clearErrors: function clearErrors() {
      this.error = {};
    },
    handleError: function handleError(error) {
      this.closeLoading();

      if (error.response.status === 422) {
        this.error = error.response.data.errors;
      }
    },
    destroy: function destroy(url, cb, data) {
      this.clearErrors();
      this.openLoading();
      Object(_api__WEBPACK_IMPORTED_MODULE_0__["byMethod"])("DELETE", url, data).then(function (_ref) {
        var data = _ref.data;

        if (data.saved) {
          cb(data);
        }
      })["catch"](this.handleError);
    },
    submit: function submit() {
      var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var cb = arguments.length > 1 ? arguments[1] : undefined;
      this.clearErrors(); // this.openLoading();

      if (file == 'file') {
        this.form = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["objectToFormData"])(this.form);
      }

      Object(_api__WEBPACK_IMPORTED_MODULE_0__["byMethod"])(this.method, this.store, this.form).then(function (_ref2) {
        var data = _ref2.data;

        if (data.saved) {
          cb(data);
        }
      })["catch"](this.handleError);
    },
    submitMultipartForm: function submitMultipartForm(form, cb) {
      var _this = this;

      this.clearErrors(); // this.openLoading();

      Object(_api__WEBPACK_IMPORTED_MODULE_0__["byMethod"])(this.method, this.store, Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["objectToFormData"])(this.form)).then(function (_ref3) {
        var data = _ref3.data;

        if (data.saved) {
          cb(data);
          return true;
        }

        return false;
      })["catch"](function (error) {
        _this.handleError(error);

        return false;
      });
    },
    openLoading: function openLoading() {
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].commit('app/UPDATE_LOADING', true);
    },
    closeLoading: function closeLoading() {
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].commit('app/UPDATE_LOADING', false);
    }
  }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/components/Form/TagInput.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/components/Form/TagInput.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./frontend/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/api */ "./frontend/src/libs/api.js");
/* harmony import */ var _core_components_toastification_ToastificationContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent */ "./frontend/src/@core/components/toastification/ToastificationContent.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'XTagInput',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    resource: String,
    column: String,
    tabindex: {
      "default": 0
    },
    positionRelative: {
      type: Boolean,
      "default": false
    },
    value: [Object, Array],
    disabled: {
      "default": false,
      type: Boolean
    },
    multiple: {
      "default": false,
      type: Boolean
    },
    removable: {
      "default": false,
      type: Boolean
    },
    name: {
      "default": 'value'
    },
    keyIndex: String,
    relation: {
      type: String,
      "default": ''
    },
    params: {
      type: [Object, Array],
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      isLoading: false,
      showDropdown: false,
      selectIndex: -1,
      search: '',
      options: []
    };
  },
  computed: {
    availableOptions: function availableOptions() {
      return this.options;
    }
  },
  methods: {
    removeVal: function removeVal() {
      var payload = {
        id: null
      };
      this.$emit('input', payload);
    },
    remove: function remove(x, i) {
      var payload = this.value;
      payload.splice(i, 1);
      this.$emit('input', payload);
    },
    onSearch: function onSearch(e) {
      this.search = event.target.value; // xhr

      this.fetch(this.search);
    },
    fetch: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["debounce"])(function (q) {
      var _this = this;

      this.isLoading = true;

      var params = _objectSpread({
        q: q,
        column: this.column
      }, this.params);

      Object(_libs_api__WEBPACK_IMPORTED_MODULE_1__["get"])("".concat(this.resource), params).then(function (res) {
        if (res.data) {
          _this.$set(_this.$data, 'options', res.data.data);
        }

        _this.isLoading = false;
      });
    }, 300),
    onUpKey: function onUpKey(e) {
      var _this2 = this;

      if (this.disabled) return;

      if (this.selectIndex > 0) {
        this.selectIndex--;

        if (this.selectIndex > 4) {
          this.$nextTick(function () {
            // todo: algo to find best scroll position
            _this2.$refs.items.scrollTop -= 28;
          });
        }
      } else {
        this.selectIndex = this.options.length - 1;
        this.$nextTick(function () {
          _this2.$refs.items.scrollTop = _this2.selectIndex * 28;
        });
      }
    },
    onDownKey: function onDownKey(e) {
      var _this3 = this;

      if (this.disabled) return;

      if (!this.showDropdown) {
        this.open();
      }

      if (this.options.length - 1 > this.selectIndex) {
        this.selectIndex++;

        if (this.selectIndex > 4) {
          this.$nextTick(function () {
            _this3.$refs.items.scrollTop += 28;
          });
        }
      } else {
        this.selectIndex = 0;
        this.$nextTick(function () {
          _this3.$refs.items.scrollTop = 0;
        });
      }
    },
    onKeydownMain: function onKeydownMain(e) {
      this.open();
    },
    select: function select(option) {
      if (this.multiple) {
        // console.log(option);
        var payload = this.value;

        if (this.value.length === 0) {
          var temp = {};

          if (this.relation == '') {
            payload.push(option);
          } else {
            temp["".concat(this.keyIndex)] = option.id;
            temp["".concat(this.relation)] = option;
            payload.push(temp);
          }

          this.$emit('input', payload);
        } else {
          var error = false;

          for (var i = 0; i < payload.length; i++) {
            if (option.id === payload[i][this.keyIndex]) {
              this.$toast({
                component: _core_components_toastification_ToastificationContent__WEBPACK_IMPORTED_MODULE_2__["default"],
                props: {
                  title: 'Alert',
                  icon: 'BellIcon',
                  text: 'Option already selected above',
                  variant: 'danger'
                }
              });
              error = true;
            }
          }

          if (!error) {
            var _temp = {};

            if (this.relation == '') {
              payload.push(option);
            } else {
              _temp["".concat(this.keyIndex)] = option.id;
              _temp["".concat(this.relation)] = option;
              payload.push(_temp);
            }

            this.$emit('input', payload);
          } else {
            return;
          }
        }
      } else {
        this.$emit('input', option);
      }

      this.close();
    },
    onEnter: function onEnter() {
      if (this.disabled) return;
      if (this.selectIndex < 0) return;
      var option = this.options[this.selectIndex];
      this.select(option);
    },
    onBlur: function onBlur() {
      this.close();
    },
    onMouse: function onMouse(index) {
      this.selectIndex = index;
    },
    close: function close() {
      this.showDropdown = false;
      this.selectIndex = -1;
      this.search = '';
      this.options = [];
    },
    open: function open() {
      var _this4 = this;

      this.showDropdown = true;
      this.$nextTick(function () {
        // cannot used key from parent due to macrotask in vue,
        // will be microtask in 2.6
        _this4.$refs.search.focus();

        if (!_this4.options.length) {
          _this4.fetch();
        }
      });
    },
    toggle: function toggle() {
      if (this.disabled) return;

      if (this.showDropdown) {
        this.close();
      } else {
        this.open();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/components/Form/TagInput.vue?vue&type=template&id=5b118de8&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/components/Form/TagInput.vue?vue&type=template&id=5b118de8& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "select-form" }, [
    _c(
      "div",
      {
        ref: "toggle",
        staticClass: "select-input",
        attrs: {
          tabindex: _vm.disabled ? -1 : _vm.tabindex,
          disabled: _vm.disabled
        },
        on: {
          click: _vm.toggle,
          keydown: function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "down", 40, $event.key, [
                "Down",
                "ArrowDown"
              ])
            ) {
              return null
            }
            $event.preventDefault()
            return _vm.onKeydownMain.apply(null, arguments)
          }
        }
      },
      [
        _vm.multiple
          ? _c("div", { staticClass: "select-text" }, [
              _vm.value && _vm.value.length
                ? _c(
                    "div",
                    { staticClass: "select-tags mb-1" },
                    _vm._l(_vm.value, function(x, i) {
                      return _c(
                        "div",
                        { staticClass: "tag tag-primary" },
                        [
                          _c("span", { staticClass: "tag-text" }, [
                            _vm._v(
                              "\n                      " +
                                _vm._s(
                                  _vm.relation === ""
                                    ? x[_vm.name]
                                    : x[_vm.relation][_vm.name]
                                ) +
                                "\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("feather-icon", {
                            attrs: { icon: "XIcon", size: "12" },
                            on: {
                              mousedown: function($event) {
                                $event.preventDefault()
                                return _vm.remove(x, i)
                              }
                            }
                          })
                        ],
                        1
                      )
                    }),
                    0
                  )
                : _vm._e()
            ])
          : _c("div", { staticClass: "select-text" }, [
              _vm._v(
                "\n            " +
                  _vm._s(
                    _vm.value && _vm.value[_vm.name]
                      ? _vm.value[_vm.name]
                      : "Select"
                  ) +
                  "\n        "
              )
            ]),
        _vm._v(" "),
        _vm.removable && _vm.value && _vm.value.id
          ? _c("span", {
              staticClass: "select-remove icon icon-trash-a",
              on: { click: _vm.removeVal }
            })
          : _c("span", {
              class: [
                "select-icon icon icon-arrow-" +
                  (_vm.showDropdown ? "up-b" : "down-b")
              ]
            })
      ]
    ),
    _vm._v(" "),
    _vm.showDropdown
      ? _c(
          "div",
          {
            staticClass: "select-dropdown",
            style: _vm.positionRelative === true ? "position:relative" : ""
          },
          [
            _c("div", { staticClass: "select-inner" }, [
              _c("div", { staticClass: "select-search-wrap" }, [
                _c("input", {
                  ref: "search",
                  staticClass: "select-search",
                  attrs: { type: "text", placeholder: "Search..." },
                  on: {
                    keydown: [
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
                        $event.preventDefault()
                        return _vm.onDownKey.apply(null, arguments)
                      },
                      function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.onEnter.apply(null, arguments)
                      },
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
                        $event.preventDefault()
                        return _vm.onUpKey.apply(null, arguments)
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
                        return _vm.onBlur.apply(null, arguments)
                      }
                    ],
                    input: _vm.onSearch,
                    blur: _vm.onBlur
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                { ref: "items", staticClass: "select-items" },
                _vm._l(_vm.availableOptions, function(option, i) {
                  return _c(
                    "div",
                    {
                      class: [
                        "select-item",
                        _vm.selectIndex === i ? "select-active" : ""
                      ],
                      on: {
                        mouseover: function($event) {
                          $event.preventDefault()
                          return _vm.onMouse(i)
                        },
                        mousedown: function($event) {
                          $event.preventDefault()
                          return _vm.select(option)
                        }
                      }
                    },
                    [_c("span", [_vm._v(_vm._s(option[_vm.name]))])]
                  )
                }),
                0
              )
            ])
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);