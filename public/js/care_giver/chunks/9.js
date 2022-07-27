(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./frontend/src/admin/views/Settings/Roles/form.vue":
/*!**********************************************************!*\
  !*** ./frontend/src/admin/views/Settings/Roles/form.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_dfaa4a72_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=dfaa4a72&scoped=true& */ "./frontend/src/admin/views/Settings/Roles/form.vue?vue&type=template&id=dfaa4a72&scoped=true&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./frontend/src/admin/views/Settings/Roles/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_dfaa4a72_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_dfaa4a72_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "dfaa4a72",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/admin/views/Settings/Roles/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/admin/views/Settings/Roles/form.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./frontend/src/admin/views/Settings/Roles/form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/admin/views/Settings/Roles/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/admin/views/Settings/Roles/form.vue?vue&type=template&id=dfaa4a72&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./frontend/src/admin/views/Settings/Roles/form.vue?vue&type=template&id=dfaa4a72&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_dfaa4a72_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=dfaa4a72&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/admin/views/Settings/Roles/form.vue?vue&type=template&id=dfaa4a72&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_dfaa4a72_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_dfaa4a72_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/admin/views/Settings/Roles/form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/admin/views/Settings/Roles/form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./frontend/node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _libs_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/libs/mixins */ "./frontend/src/libs/mixins.js");
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/libs/api */ "./frontend/src/libs/api.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





function initialize(to) {
  var urls = {
    'add': "/admin/api/role_permission/create",
    'edit': "/admin/api/role_permission/".concat(to.params.id, "/edit")
  };
  return urls[to.meta.mode] || urls['add'];
}

function titleCase(value) {
  var testString = value; // var titleCaseString
  // = testString
  // .replace(/(_|-)/g, ' ')
  // .trim()
  // .replace(/\w\S*/g, function(str) {
  //     return str.charAt(0).toUpperCase() + str.substr(1)
  // })
  // .replace(/([a-z])([A-Z])/g, '$1 $2')
  // .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')

  return testString;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_libs_mixins__WEBPACK_IMPORTED_MODULE_2__["form"]],
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BLink"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BFormCheckboxGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormCheckboxGroup"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"]
  },
  data: function data() {
    return {
      show: false,
      resource: '/roles',
      store: '/admin/api/role_permission',
      method: 'POST',
      title: 'Add',
      message: 'New Role Added',
      permissions: []
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    Object(_libs_api__WEBPACK_IMPORTED_MODULE_3__["get"])(initialize(to)).then(function (res) {
      next(function (vm) {
        return vm.setData(res);
      });
    });
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var _this = this;

    Object(_libs_api__WEBPACK_IMPORTED_MODULE_3__["get"])(initialize(to)).then(function (res) {
      _this.setData(res);

      next();
    });
  },
  methods: {
    setData: function setData(res) {
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(this.$data, 'form', res.data.form);
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(this.$data, 'permissions', res.data.permissions);

      if (this.$route.meta.mode === 'edit') {
        this.store = "/admin/api/role_permission/".concat(this.$route.params.id, "?_method=PUT");
        this.title = 'Edit';
        this.message = 'Role has been updated';
      }

      this.show = true;
    },
    formSubmitted: function formSubmitted() {
      var _this2 = this;

      this.submit(this.form, function (res) {
        _this2.success();

        _this2.successfull(res);
      });
    },
    successfull: function successfull(res) {
      this.$router.push("".concat(this.resource));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/admin/views/Settings/Roles/form.vue?vue&type=template&id=dfaa4a72&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/admin/views/Settings/Roles/form.vue?vue&type=template&id=dfaa4a72&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _vm.show
    ? _c(
        "div",
        [
          _c(
            "b-card",
            {
              attrs: {
                title:
                  _vm.$route.meta.mode && _vm.$route.meta.mode === "edit"
                    ? "Edit Role"
                    : "Add New Role"
              }
            },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            label: "Role Name",
                            "label-for": "mc-role-name"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "mc-role-name",
                              placeholder: "Role Name"
                            },
                            model: {
                              value: _vm.form.name,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "name", $$v)
                              },
                              expression: "form.name"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { md: "12" } },
                    [
                      _c(
                        "b-card",
                        { attrs: { title: "Permissions" } },
                        [
                          _c("b-form-checkbox-group", {
                            staticClass: "demo-inline-spacing",
                            attrs: {
                              options: _vm.permissions,
                              "value-field": "name",
                              "text-field": "name",
                              "disabled-field": "notEnabled"
                            },
                            model: {
                              value: _vm.form.permissions,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "permissions", $$v)
                              },
                              expression: "form.permissions"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
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
                          staticClass: "mr-1",
                          attrs: { type: "submit", variant: "primary" },
                          on: { click: _vm.formSubmitted }
                        },
                        [
                          _vm._v(
                            "\n                    Submit\n                "
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
                              value: "rgba(186, 191, 199, 0.15)",
                              expression: "'rgba(186, 191, 199, 0.15)'",
                              modifiers: { "400": true }
                            }
                          ],
                          attrs: {
                            type: "reset",
                            variant: "outline-secondary",
                            to: { path: "/roles" }
                          }
                        },
                        [
                          _vm._v(
                            "\n                    Cancel\n                "
                          )
                        ]
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
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);