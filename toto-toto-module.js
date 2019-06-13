(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["toto-toto-module"],{

/***/ "./src/app/toto/toto.module.ts":
/*!*************************************!*\
  !*** ./src/app/toto/toto.module.ts ***!
  \*************************************/
/*! exports provided: TotoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotoPageModule", function() { return TotoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _toto_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toto.page */ "./src/app/toto/toto.page.ts");






var TotoPageModule = /** @class */ (function () {
    function TotoPageModule() {
    }
    TotoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: "",
                        component: _toto_page__WEBPACK_IMPORTED_MODULE_5__["TotoPage"]
                    }
                ])
            ],
            declarations: [_toto_page__WEBPACK_IMPORTED_MODULE_5__["TotoPage"]]
        })
    ], TotoPageModule);
    return TotoPageModule;
}());



/***/ }),

/***/ "./src/app/toto/toto.page.html":
/*!*************************************!*\
  !*** ./src/app/toto/toto.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card class=\"welcome-card\">\n  <ion-img src=\"/assets/shapes.svg\"></ion-img>\n  <ion-card-header>\n    <ion-card-subtitle>Page de test</ion-card-subtitle>\n  </ion-card-header>\n</ion-card>\n"

/***/ }),

/***/ "./src/app/toto/toto.page.ts":
/*!***********************************!*\
  !*** ./src/app/toto/toto.page.ts ***!
  \***********************************/
/*! exports provided: TotoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotoPage", function() { return TotoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TotoPage = /** @class */ (function () {
    function TotoPage() {
    }
    TotoPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    TotoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "toto",
            template: __webpack_require__(/*! ./toto.page.html */ "./src/app/toto/toto.page.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TotoPage);
    return TotoPage;
}());



/***/ })

}]);
//# sourceMappingURL=toto-toto-module.js.map