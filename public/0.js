(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site_modules/brands/components/Product.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/site_modules/brands/components/Product.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["product"],
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("settingsStoreIndex", {
    layout: "getLayout"
  }))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site_modules/brands/components/Product.vue?vue&type=template&id=ce2b7812&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/site_modules/brands/components/Product.vue?vue&type=template&id=ce2b7812& ***!
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
  return _vm.layout == "list"
    ? _c("div", { staticClass: "product product-list" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-6 col-lg-3" }, [
            _c(
              "figure",
              { staticClass: "product-media" },
              [
                _c(
                  "router-link",
                  { attrs: { to: "product/" + _vm.product.slug } },
                  [
                    _c("img", {
                      staticClass: "product-image",
                      attrs: {
                        src: "/storage/products/" + _vm.product.image,
                        alt: _vm.product.name
                      }
                    })
                  ]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6 col-lg-3 order-lg-last" }, [
            _c("div", { staticClass: "product-list-action" }, [
              _c("div", { staticClass: "product-price" }, [
                _vm._v(
                  "\n                     $ " +
                    _vm._s(_vm.product.price) +
                    "\n                 "
                )
              ]),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _vm._m(2)
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-6" }, [
            _c("div", { staticClass: "product-body product-action-inner" }, [
              _vm._m(3),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "product-cat" },
                _vm._l(_vm.product.categories, function(cat) {
                  return _c(
                    "router-link",
                    { key: cat.id, attrs: { to: "/category/" + cat.slug } },
                    [_vm._v(" " + _vm._s(cat.name) + " ")]
                  )
                }),
                1
              ),
              _vm._v(" "),
              _c(
                "h3",
                { staticClass: "product-title" },
                [
                  _c(
                    "router-link",
                    { attrs: { to: "/product/" + _vm.product.slug } },
                    [_vm._v(" " + _vm._s(_vm.product.name) + " ")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "product-content" }, [
                _c("p", [_vm._v("  " + _vm._s(_vm.product.description) + "  ")])
              ])
            ])
          ])
        ])
      ])
    : _c("div", { class: _vm.layout }, [
        _c("div", { staticClass: "product product-7 text-center" }, [
          _c(
            "figure",
            { staticClass: "product-media" },
            [
              _c("span", { staticClass: "product-label label-new" }, [
                _vm._v("New")
              ]),
              _vm._v(" "),
              _c(
                "router-link",
                { attrs: { to: "/product/" + _vm.product.slug } },
                [
                  _c("img", {
                    staticClass: "product-image",
                    attrs: {
                      src: "/storage/products/" + _vm.product.image,
                      alt: _vm.product.name
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _vm._m(4),
              _vm._v(" "),
              _vm._m(5)
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "product-body" }, [
            _c(
              "div",
              { staticClass: "product-cat" },
              _vm._l(_vm.product.categories, function(cat) {
                return _c(
                  "router-link",
                  { key: cat.id, attrs: { to: "/category/" + cat.slug } },
                  [_vm._v(" " + _vm._s(cat.name) + " ")]
                )
              }),
              1
            ),
            _vm._v(" "),
            _c(
              "h3",
              { staticClass: "product-title" },
              [
                _c(
                  "router-link",
                  { attrs: { to: "/product/" + _vm.product.slug } },
                  [_vm._v(" " + _vm._s(_vm.product.name) + " ")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "product-price" }, [
              _vm._v(
                "\n                 $ " +
                  _vm._s(_vm.product.price) +
                  "\n             "
              )
            ]),
            _vm._v(" "),
            _vm._m(6)
          ])
        ])
      ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ratings-container" }, [
      _c("div", { staticClass: "ratings" }, [
        _c("div", { staticClass: "ratings-val", staticStyle: { width: "20%" } })
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "ratings-text" }, [_vm._v("( 2 Reviews )")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "product-action" }, [
      _c(
        "button",
        {
          staticClass: "btn-product btn-quickview",
          attrs: { title: "Quick view" }
        },
        [_c("span", [_vm._v("quick view")])]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn-product btn-compare",
          attrs: { href: "#", title: "Compare" }
        },
        [_c("span", [_vm._v("compare")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "btn-product btn-cart", attrs: { href: "#" } },
      [_c("span", [_vm._v("add to cart")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "btn-product btn-wishlist",
        attrs: { href: "#", title: "Add to wishlist" }
      },
      [_c("span", [_vm._v("add to wishlist")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "product-action-vertical" }, [
      _c(
        "a",
        {
          staticClass: "btn-product-icon btn-wishlist btn-expandable",
          attrs: { href: "#" }
        },
        [_c("span", [_vm._v("add to wishlist")])]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn-product-icon btn-quickview  btn-expandable",
          attrs: { href: "/assets/popup/quickView.html", title: "Quick view" }
        },
        [_c("span", [_vm._v("Quick view")])]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn-product-icon btn-compare",
          attrs: { href: "#", title: "Compare" }
        },
        [_c("span", [_vm._v("Compare")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "product-action" }, [
      _c("a", { staticClass: "btn-product btn-cart", attrs: { href: "#" } }, [
        _c("span", [_vm._v("add to cart")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ratings-container" }, [
      _c("div", { staticClass: "ratings" }, [
        _c("div", { staticClass: "ratings-val", staticStyle: { width: "20%" } })
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "ratings-text" }, [_vm._v("( 3 Reviews )")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/site_modules/brands/components/Product.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/site_modules/brands/components/Product.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_ce2b7812___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=ce2b7812& */ "./resources/js/site_modules/brands/components/Product.vue?vue&type=template&id=ce2b7812&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/site_modules/brands/components/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_ce2b7812___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_ce2b7812___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/site_modules/brands/components/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/site_modules/brands/components/Product.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/site_modules/brands/components/Product.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site_modules/brands/components/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/site_modules/brands/components/Product.vue?vue&type=template&id=ce2b7812&":
/*!************************************************************************************************!*\
  !*** ./resources/js/site_modules/brands/components/Product.vue?vue&type=template&id=ce2b7812& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_ce2b7812___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=ce2b7812& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site_modules/brands/components/Product.vue?vue&type=template&id=ce2b7812&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_ce2b7812___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_ce2b7812___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);