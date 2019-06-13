(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coachDetail-coachDetail-module"],{

/***/ "./src/app/coachDetail/coachDetail.module.ts":
/*!***************************************************!*\
  !*** ./src/app/coachDetail/coachDetail.module.ts ***!
  \***************************************************/
/*! exports provided: CoachDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachDetailModule", function() { return CoachDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _coachDetail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coachDetail.page */ "./src/app/coachDetail/coachDetail.page.ts");






var CoachDetailModule = /** @class */ (function () {
    function CoachDetailModule() {
    }
    CoachDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: "",
                        component: _coachDetail_page__WEBPACK_IMPORTED_MODULE_5__["CoachDetail"]
                    }
                ])
            ],
            declarations: [_coachDetail_page__WEBPACK_IMPORTED_MODULE_5__["CoachDetail"]]
        })
    ], CoachDetailModule);
    return CoachDetailModule;
}());



/***/ }),

/***/ "./src/app/coachDetail/coachDetail.page.html":
/*!***************************************************!*\
  !*** ./src/app/coachDetail/coachDetail.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card class=\"welcome-card\">\n  <ion-img src=\"/assets/shapes.svg\"></ion-img>\n  <ion-card-header>\n    <ion-card-title\n      >{{ currentCoach.coach.username }}\n      {{ currentCoach.coach.email }}</ion-card-title\n    >\n    <ion-card-subtitle>{{ currentCoach.coach.name }}</ion-card-subtitle>\n  </ion-card-header>\n</ion-card>\n"

/***/ }),

/***/ "./src/app/coachDetail/coachDetail.page.ts":
/*!*************************************************!*\
  !*** ./src/app/coachDetail/coachDetail.page.ts ***!
  \*************************************************/
/*! exports provided: CoachDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachDetail", function() { return CoachDetail; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CoachDetail = /** @class */ (function () {
    function CoachDetail() {
    }
    CoachDetail.prototype.ngOnInit = function () {
        this.currentCoach = history.state.data;
    };
    CoachDetail = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "coachDetail",
            template: __webpack_require__(/*! ./coachDetail.page.html */ "./src/app/coachDetail/coachDetail.page.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CoachDetail);
    return CoachDetail;
}());



/***/ })

}]);
//# sourceMappingURL=coachDetail-coachDetail-module.js.map