(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coachs-coachs-module"],{

/***/ "./src/app/coachs/coachs.module.ts":
/*!*****************************************!*\
  !*** ./src/app/coachs/coachs.module.ts ***!
  \*****************************************/
/*! exports provided: CoachsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachsModule", function() { return CoachsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _coachs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coachs.page */ "./src/app/coachs/coachs.page.ts");






var CoachsModule = /** @class */ (function () {
    function CoachsModule() {
    }
    CoachsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: "",
                        component: _coachs_page__WEBPACK_IMPORTED_MODULE_5__["CoachsPage"]
                    }
                ])
            ],
            declarations: [_coachs_page__WEBPACK_IMPORTED_MODULE_5__["CoachsPage"]]
        })
    ], CoachsModule);
    return CoachsModule;
}());



/***/ }),

/***/ "./src/app/coachs/coachs.page.html":
/*!*****************************************!*\
  !*** ./src/app/coachs/coachs.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Coachs\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of coachsList\" (click)=\"getItem(item)\">\n      <ion-icon name=\"contact\"></ion-icon>\n      <ion-label> {{ item.name }} {{ item.firstname }} </ion-label>\n    </ion-item>\n  </ion-list>\n  <!--\n    <div *ngIf=\"selectedItem\" padding>\n      You navigated here from <b>{{selectedItem.title }}</b>\n    </div>\n  -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/coachs/coachs.page.scss":
/*!*****************************************!*\
  !*** ./src/app/coachs/coachs.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvYWNocy9jb2FjaHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/coachs/coachs.page.ts":
/*!***************************************!*\
  !*** ./src/app/coachs/coachs.page.ts ***!
  \***************************************/
/*! exports provided: CoachsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachsPage", function() { return CoachsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CoachsPage = /** @class */ (function () {
    function CoachsPage(router) {
        this.router = router;
    }
    CoachsPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getSampleData()];
                    case 1:
                        _a.coachsList = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CoachsPage.prototype.getItem = function (coach) {
        this.router.navigate(["/coachDetail"], { state: { data: { coach: coach } } });
    };
    CoachsPage.prototype.getSampleData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var sampleData, parsedData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/users")];
                    case 1:
                        sampleData = _a.sent();
                        return [4 /*yield*/, sampleData.json()];
                    case 2:
                        parsedData = _a.sent();
                        return [2 /*return*/, parsedData];
                }
            });
        });
    };
    CoachsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "coachs",
            template: __webpack_require__(/*! ./coachs.page.html */ "./src/app/coachs/coachs.page.html"),
            styles: [__webpack_require__(/*! ./coachs.page.scss */ "./src/app/coachs/coachs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CoachsPage);
    return CoachsPage;
}());



/***/ })

}]);
//# sourceMappingURL=coachs-coachs-module.js.map