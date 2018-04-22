webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/aanimation/aanimation.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card\" [@trig]=\"state\" (click)=\"animateMe()\"></div>"

/***/ }),

/***/ "../../../../../src/app/aanimation/aanimation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "canvas {\n  background-color: #ddd; }\n\n.card {\n  width: 300px;\n  height: 300px;\n  background-color: black; }\n\n.card1 {\n  background-color: pink; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/aanimation/aanimation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AanimationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AanimationComponent = /** @class */ (function () {
    function AanimationComponent() {
        this.state = "small";
        this.class = "card";
    }
    AanimationComponent.prototype.animateMe = function () {
        if (this.state == "small") {
            this.state = "large";
        }
        else {
            this.state = "small";
        }
    };
    AanimationComponent.prototype.ngOnInit = function () {
    };
    AanimationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-aanimation',
            template: __webpack_require__("../../../../../src/app/aanimation/aanimation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/aanimation/aanimation.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('trig', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('small', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        transform: 'scale(0.2)',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('large', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        transform: 'scale(2)',
                        background: 'red'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('small <=> large', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms ease')),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AanimationComponent);
    return AanimationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Hi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAIN</p>\n  <p>\n  Hi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAIN</p>\n  <p>\n  Hi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAIN</p>\n\n  <p>\n  Hi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAIN</p>\n  <p>\n  Hi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAINHi AGAIN Hi AGAIN</p>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.nav-link {\r\n\tfont-size: 2em;\r\n\tfont-family: fantasy;\r\n}\r\n.col-md-2 {\r\n\ttext-align: center;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tdisplay: inline-block;\r\n}\r\n.navbar-nav {\r\n \tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n.row {\r\n\topacity: 1;\r\n}\r\n.logopic {\r\n\tbackground-image:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Svg Vector Icons %3A http%3A%2F%2Fwww.onlinewebfonts.com%2Ficon --%3E%0D%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%3Csvg version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22 viewBox%3D%220 0 1000 1000%22 enable-background%3D%22new 0 0 1000 1000%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cmetadata%3E Svg Vector Icons %3A http%3A%2F%2Fwww.onlinewebfonts.com%2Ficon %3C%2Fmetadata%3E%0D%3Cg%3E%3Cg transform%3D%22translate(0.000000%2C511.000000) scale(0.100000%2C-0.100000)%22%3E%3Cpath d%3D%22M3104.5%2C4949.8C2843.1%2C4781%2C2412.7%2C4223%2C2169.8%2C3735c-325.3-654.8-313-1136.6%2C35-1309.5c193.5-96.8%2C352.1-53.5%2C533.3%2C148.2c189.4%2C214.1%2C436.5%2C786.5%2C572.4%2C1328.1c22.7%2C88.5%2C43.2%2C164.7%2C47.4%2C168.8c4.1%2C4.1%2C70-152.4%2C146.2-348l142.1-354.2l-74.1-121.5c-103-177.1-210-463.3-259.4-712.4c-37.1-179.1-43.2-263.5-37.1-512.7c8.2-255.3%2C18.5-321.2%2C65.9-461.2c100.9-292.4%2C257.4-473.6%2C535.3-613.6c162.7-82.4%2C481.8-162.7%2C660.9-164.7c175-2.1%2C278%2C37.1%2C393.3%2C150.3l84.4%2C82.4l53.5-70c119.4-158.5%2C325.3-197.7%2C663-127.7c560%2C115.3%2C877.1%2C418%2C978%2C932.7c37.1%2C183.3%2C14.4%2C667.1-39.1%2C883.3c-51.5%2C208-162.7%2C485.9-249.1%2C628l-65.9%2C107.1l140%2C354.2c78.3%2C195.6%2C144.1%2C352.1%2C148.3%2C348c4.1-2.1%2C32.9-109.1%2C65.9-236.8c94.7-360.3%2C177.1-584.8%2C319.1-875.1c240.9-492.1%2C477.7-669.2%2C741.2-547.7c107.1%2C49.4%2C181.2%2C119.4%2C240.9%2C230.6c41.2%2C78.2%2C47.4%2C117.4%2C45.3%2C306.8c-2.1%2C259.4-53.5%2C442.7-224.4%2C786.5c-185.3%2C374.7-413.8%2C702.1-689.8%2C992.4c-265.6%2C282.1-407.7%2C335.6-613.6%2C236.8c-183.3-90.6-488-426.2-716.5-790.7c-51.5-84.4-96.8-154.4-100.9-154.4c-2.1%2C0-59.7%2C24.7-125.6%2C53.5c-183.3%2C80.3-407.7%2C131.8-584.8%2C131.8c-177.1%2C0-401.5-51.5-584.8-131.8c-65.9-28.8-123.5-53.5-127.7-53.5c-2.1%2C0-41.2%2C57.6-84.4%2C129.7c-131.8%2C216.2-370.6%2C518.9-510.6%2C648.6C3454.6%2C5015.7%2C3279.6%2C5061%2C3104.5%2C4949.8z M4356.4%2C2614.9c61.8-57.6%2C78.2-144.1%2C39.1-220.3c-63.8-123.5-203.8-144.1-302.7-45.3c-94.7%2C96.8-70%2C238.8%2C51.5%2C298.6C4218.5%2C2687%2C4292.6%2C2674.6%2C4356.4%2C2614.9z M5915.1%2C2594.3c49.4-53.5%2C55.6-76.2%2C45.3-137.9c-28.8-187.4-265.6-228.6-354.2-61.8c-39.1%2C76.2-22.7%2C162.7%2C39.1%2C218.3C5738%2C2699.3%2C5824.5%2C2693.2%2C5915.1%2C2594.3z M5241.8%2C1389.8l-240.9-243l-240.9%2C243l-243%2C240.9h483.9h483.9L5241.8%2C1389.8z%22%2F%3E%3Cpath d%3D%22M2777.2%2C1558.6c-331.5-76.2-669.2-189.4-895.7-300.6C891.1%2C776.2%2C1395.6%2C152.3%2C3030.4-158.6c1060.4-203.8%2C2575.8-220.3%2C3700-41.2C7897.9-14.4%2C8624.8%2C339.7%2C8624.8%2C724.7c0%2C323.3-529.2%2C638.3-1402.2%2C831.8c-286.2%2C63.8-286.2%2C63.8-286.2%2C12.4c0-59.7-74.1-247.1-142.1-352.1l-57.6-92.7L6957%2C1081c243-47.4%2C448.9-121.5%2C479.7-173c78.2-123.5-245-236.8-891.6-315c-430.3-51.5-885.4-74.1-1544.3-74.1c-1116%2C0-1999.3%2C90.6-2322.6%2C236.8c-179.1%2C82.4-170.9%2C154.4%2C26.8%2C232.7c65.9%2C26.8%2C218.3%2C67.9%2C339.7%2C92.7l220.3%2C43.2l-57.7%2C92.7c-67.9%2C105-142.1%2C292.4-142.1%2C352.1C3065.4%2C1620.4%2C3046.9%2C1620.4%2C2777.2%2C1558.6z%22%2F%3E%3Cpath d%3D%22M2468.3-751.6c0-8.2-102.9-792.7-230.6-1741.9c-261.5-1954-257.4-1803.7-67.9-1873.7c175-65.9%2C868.9-234.7%2C1194.2-290.3c572.4-96.8%2C817.4-119.4%2C1492.8-129.7c741.2-12.3%2C1148.9%2C14.4%2C1781%2C119.4c370.6%2C61.8%2C1062.5%2C228.6%2C1256%2C300.6c187.4%2C70%2C193.6-82.4-70%2C1884c-127.6%2C955.4-236.8%2C1739.9-240.9%2C1744c-6.2%2C6.2-131.8-18.5-282.1-55.6c-698-164.7-1367.2-232.7-2299.9-232.7c-996.6%2C0-1881.9%2C100.9-2495.5%2C282.1C2484.8-739.2%2C2468.3-741.3%2C2468.3-751.6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%0D%3C%2Fsvg%3E\");\r\n\twidth: 100px;\r\n\theight: 100px;\r\n\tpadding: 0;\r\n    margin: auto;\r\n-webkit-animation: hatrick 3s;\r\n        animation: hatrick 3s;\r\n\r\n}\r\n@-webkit-keyframes hatrick {\r\n\t0%{\r\n\t\topacity: 0;\r\n\t\t-webkit-transform: rotate(-180deg) translateX(100px) translateY(100px);\r\n\t\t        transform: rotate(-180deg) translateX(100px) translateY(100px);\r\n\t\t\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\t-webkit-transform: rotate(0deg) translateX(0px) translateY(0px);\r\n\t\t        transform: rotate(0deg) translateX(0px) translateY(0px);\r\n\t\t\r\n\t}\r\n}\r\n@keyframes hatrick {\r\n\t0%{\r\n\t\topacity: 0;\r\n\t\t-webkit-transform: rotate(-180deg) translateX(100px) translateY(100px);\r\n\t\t        transform: rotate(-180deg) translateX(100px) translateY(100px);\r\n\t\t\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\t-webkit-transform: rotate(0deg) translateX(0px) translateY(0px);\r\n\t\t        transform: rotate(0deg) translateX(0px) translateY(0px);\r\n\t\t\r\n\t}\r\n}\r\na{\r\n\tdisplay: inline-block;\r\n}\r\n.line {\r\n\t    border: 0;\r\n\t    margin: 50px;\r\n    height: 2px;\r\n    background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0)), color-stop(rgba(0, 0, 0, 0.75)), to(rgba(0, 0, 0, 0)));\r\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));\r\n}\r\n.logo2 {\r\n\tdisplay: inline-block;\r\n\ttext-align: center;\r\n\tfont-size: 3em;\r\n\tfont-family: fantasy;\r\n\tmargin-top: 1%;\r\n}\r\n.container {\r\n\t background-color: white;\r\n\t\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n<div class=\"row\">\n\t\n\t\t<div class=\"col-md-12\"> \n\t\t<div class=\"logo2 col-md-6\"> HaTrick </div>\n\t\t<div class=\"logopic col-md-6\"></div>\n\t\t</div>\n\t\t\t\n\n\t<div class=\"navbar navbar-light col-md-12 \">\n\t\t<div class=\"navbar-nav col-md-12\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-3\"></div>\n\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"Works\">Works</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"About\">About</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t<a class=\"nav-link\"  routerLink=\"Contacts\">Contacts</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3\"></div>\n\t\t\t</div>\n\n\t\t<div class=\"line\"></div>\n\t\t</div>\n\t</div>\t\n\n</div>\n\n<div class=\"container\">\n\t<div class=\"row\">\n\t<div class=\"col-md-12\">\n\n\t<router-outlet></router-outlet>\t\n<div class=\"line\"></div>\n\t</div>\n\n</div>\n</div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contacts_contacts_component__ = __webpack_require__("../../../../../src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__works_works_component__ = __webpack_require__("../../../../../src/app/works/works.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__plate_plate_component__ = __webpack_require__("../../../../../src/app/plate/plate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layout_layout_component__ = __webpack_require__("../../../../../src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__grid_flex_grid_flex_component__ = __webpack_require__("../../../../../src/app/grid-flex/grid-flex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__daynight_daynight_component__ = __webpack_require__("../../../../../src/app/daynight/daynight.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aanimation_aanimation_component__ = __webpack_require__("../../../../../src/app/aanimation/aanimation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__random_quote_random_quote_component__ = __webpack_require__("../../../../../src/app/random-quote/random-quote.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__quoteservise_service__ = __webpack_require__("../../../../../src/app/quoteservise.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: 'About', component: __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */] },
    { path: 'Contacts', component: __WEBPACK_IMPORTED_MODULE_6__contacts_contacts_component__["a" /* ContactsComponent */] },
    { path: 'Works', component: __WEBPACK_IMPORTED_MODULE_7__works_works_component__["a" /* WorksComponent */] },
    { path: 'Works/DayNight', component: __WEBPACK_IMPORTED_MODULE_11__daynight_daynight_component__["a" /* DaynightComponent */] },
    { path: 'Works/RandomQuotes', component: __WEBPACK_IMPORTED_MODULE_14__random_quote_random_quote_component__["a" /* RandomQuoteComponent */] },
    { path: 'Works/To-Dolist', component: __WEBPACK_IMPORTED_MODULE_9__layout_layout_component__["a" /* LayoutComponent */] },
    { path: 'Works/Grid-Flex', component: __WEBPACK_IMPORTED_MODULE_10__grid_flex_grid_flex_component__["a" /* GridFlexComponent */] },
    { path: '', redirectTo: 'Works', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__works_works_component__["a" /* WorksComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_6__contacts_contacts_component__["a" /* ContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__works_works_component__["a" /* WorksComponent */],
                __WEBPACK_IMPORTED_MODULE_8__plate_plate_component__["a" /* PlateComponent */],
                __WEBPACK_IMPORTED_MODULE_9__layout_layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_10__grid_flex_grid_flex_component__["a" /* GridFlexComponent */],
                __WEBPACK_IMPORTED_MODULE_11__daynight_daynight_component__["a" /* DaynightComponent */],
                __WEBPACK_IMPORTED_MODULE_12__aanimation_aanimation_component__["a" /* AanimationComponent */],
                __WEBPACK_IMPORTED_MODULE_14__random_quote_random_quote_component__["a" /* RandomQuoteComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__quoteservise_service__["a" /* QuoteserviseService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Quote; });
var Quote = /** @class */ (function () {
    function Quote(quote, author) {
        this.quote = quote;
        this.author = author;
    }
    return Quote;
}());



/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gmail{\r\nfont-family: fantasy;\r\nfont-size: 1.5em;\r\ndisplay: inline-block;\r\n}\r\n.skype {\r\nfont-family: fantasy;\r\nfont-size: 1.5em;\r\ndisplay: inline-block;\r\n}\r\n.facebook {\r\n\tfont-family: fantasy;\r\n\tfont-size: 1.5em;\r\n\tdisplay: inline-block;\r\n}\r\nimg {\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tdisplay: block;\r\n}\r\na {\r\n\ttext-align: center;\r\n\tdisplay: block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n<div class=\"col-md=4\">\n<img src=\"/assets/skype.svg\">\n<a class=\"skype\">HaTrick</a>\n<br>\n<img src=\"/assets/facebook.svg\">\n<a class=\"facebook\">www.facebook.com/lhatrickl</a>\n<br>\n<img src=\"/assets/mail.svg\">\n\n<a class=\"gmail\">lhatr1ckl@gmail.com</a>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contacts',
            template: __webpack_require__("../../../../../src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contacts/contacts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/daynight/daynight.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n\t<div class=\"col-md-4\"></div>\n<div class=\"wrapper col-md-4\">\n  <div class=\"toggle\">\n    <input class=\"toggle-input\" type=\"checkbox\"  [disabled]=\"tr\" (click)=\"changetime()\"/>\n    <div class=\"toggle-bg\"></div>\n    <div class=\"toggle-switch\">\n      <div class=\"toggle-switch-figure\"></div>\n      <div class=\"toggle-switch-figureAlt\"></div>\n    </div>  \n  </div>\n</div>\n<div class=\"col-md-4\"></div>\n\n\n<div class=\"{{daylight}} col-md-6\">\n\t<div class=\"cloud\"></div>\n\t<div class=\"cloud a\"></div>\n\t<div class=\"cloud b\"></div>\n\t<div class=\"cloud c\"></div>\n\t<div class=\"{{land}}\">\n\t\t<div class=\"tree\"></div>\n\t\t<div class=\"tree a\"></div>\n\t\t<div class=\"tree b\"></div>\n\t\t<div class=\"tree c\"></div>\n\t\t<div class=\"tree d\"></div>\n\t</div>\n\t<div class=\"{{star}}\"></div>\n\t<div class=\"{{star}} a\"></div>\n\t<div class=\"{{star}} b\"></div>\n\t<div class=\"{{star}} c\"></div>\n\t<div class=\"{{star}} d\"></div>\n\t<div class=\"{{star}} e\"></div>\n\t<div class=\"{{star}} f\"></div>\n\t<div class=\"{{star}} g\"></div>\n\t<div class=\"{{star}} h\"></div>\n\t<div class=\"{{star}} k\"></div>\n\t<div class=\"{{star}} j\"></div>\n\t<div class=\"{{star}} p\"></div>\n\t<div class=\"{{star}} m\"></div>\n\t<div class=\"{{star}} z\"></div>\n\t<div class=\"{{star}} x\"></div>\n\t<div class=\"{{star}} s\"></div>\n\t<div class=\"wind\"></div>\n<div class=\"swirly-wind\">\n  <span></span>\n  <span></span>\n  <span></span>\n</div>\n<div class=\"swirly-wind a\"></div>\n<div class=\"swirly-wind b\"></div>\n\t<div class=\"{{time}}\">\n\t\t<div class=\"sun\"></div>\n\t\t<div class=\"sun a\"></div>\n\t\t<div class=\"moon\"></div>\n\t\t<div class=\"moon a\"></div>\n\t</div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/daynight/daynight.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sun {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  background-color: #ffa;\n  position: absolute;\n  top: -35px;\n  left: -35px; }\n\n.sun.a {\n  bottom: -35px;\n  right: -35px;\n  left: auto;\n  top: auto; }\n\n.moon {\n  position: absolute;\n  top: -35px;\n  right: -35px;\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  -webkit-box-shadow: 15px -15px 0 0 white;\n          box-shadow: 15px -15px 0 0 white; }\n\n.moon.a {\n  bottom: -35px;\n  left: -35px;\n  top: auto;\n  right: auto; }\n\n.cloud::before {\n  content: '';\n  width: 35px;\n  height: 30px;\n  background-color: #fff;\n  margin-left: -20px;\n  margin-top: 10px;\n  display: block;\n  border-radius: 50%; }\n\n.cloud::after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background-color: #fff;\n  position: absolute;\n  right: -10px;\n  top: 17px;\n  border-radius: 50%; }\n\n.cloud {\n  width: 50px;\n  height: 45px;\n  border-radius: 50%;\n  background-color: #fff;\n  position: absolute;\n  top: 20px;\n  left: -20%;\n  border: 0.3px solid black;\n  -webkit-animation-name: cloud;\n          animation-name: cloud;\n  -webkit-animation-duration: 70s;\n          animation-duration: 70s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  z-index: 1; }\n\n.cloud.a {\n  top: 150px;\n  -webkit-animation-duration: 55s;\n          animation-duration: 55s; }\n\n.cloud.b {\n  top: 100px;\n  left: -15%;\n  -webkit-animation-duration: 38s;\n          animation-duration: 38s; }\n\n.cloud.c {\n  top: 250px;\n  left: -10%;\n  -webkit-animation-duration: 25s;\n          animation-duration: 25s; }\n\n.tree {\n  width: 10px;\n  height: 40px;\n  background-color: #766257;\n  left: 200px;\n  position: absolute; }\n\n.tree::before {\n  content: '';\n  position: absolute;\n  bottom: 125%;\n  left: -7px;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 20px 43px 20px;\n  border-color: transparent transparent #bfde3b transparent;\n  z-index: 1;\n  -webkit-animation-name: windy;\n          animation-name: windy;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n.tree::after {\n  content: '';\n  position: absolute;\n  bottom: 100%;\n  left: -25px;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 30px 60px 30px;\n  border-color: transparent transparent #93ae29 transparent; }\n\n.tree.a {\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  left: 250px; }\n\n.tree.b {\n  -webkit-transform: scale(0.75);\n          transform: scale(0.75);\n  left: 280px; }\n\n.tree.c {\n  -webkit-transform: scale(1.5);\n          transform: scale(1.5);\n  left: 450px;\n  top: 100px; }\n\n.tree.d {\n  -webkit-transform: scale(1.25);\n          transform: scale(1.25);\n  left: 530px;\n  top: 80px;\n  z-index: 0; }\n\n.star::before {\n  content: '';\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background-color: #fff;\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  -webkit-animation-name: blinker;\n          animation-name: blinker;\n  -webkit-animation-duration: 20s;\n          animation-duration: 20s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; }\n\n.star::after {\n  content: '';\n  width: 2px;\n  height: 2px;\n  border-radius: 50%;\n  background-color: #fff;\n  position: absolute;\n  left: -200px;\n  top: 50px;\n  -webkit-animation-name: blinker;\n          animation-name: blinker;\n  -webkit-animation-duration: 10s;\n          animation-duration: 10s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; }\n\n.star.a {\n  top: 30px;\n  left: 90%; }\n\n.star.b {\n  top: 120px;\n  left: 70%; }\n\n.star.c {\n  top: 140px;\n  left: 25%; }\n\n.star.e {\n  top: 100px;\n  left: 77%; }\n\n.star.f {\n  top: 80px;\n  left: 42%; }\n\n.star.g {\n  top: 100px;\n  left: 65%; }\n\n.star.d {\n  top: 130px;\n  left: 15%; }\n\n.star.h {\n  top: 460px;\n  left: 40%; }\n\n.star.k {\n  top: 240px;\n  left: 60%; }\n\n.star.j {\n  top: 270px;\n  left: 70%; }\n\n.star.p {\n  top: 350px;\n  left: 30%; }\n\n.star.m {\n  top: 340px;\n  left: 40%; }\n\n.star.z {\n  top: 290px;\n  left: 10%; }\n\n.star.x {\n  top: 150px;\n  left: 90%; }\n\n.star.s {\n  top: 330px;\n  left: 70%; }\n\n.eclipse {\n  width: 600px;\n  height: 600px;\n  position: absolute;\n  left: 60%;\n  top: 20%;\n  -webkit-animation-name: time;\n          animation-name: time;\n  -webkit-animation-duration: 4s;\n          animation-duration: 4s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  z-index: 0;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear; }\n\n.eclipse2 {\n  width: 600px;\n  height: 600px;\n  position: absolute;\n  left: 60%;\n  top: 20%;\n  -webkit-animation-name: time2;\n          animation-name: time2;\n  -webkit-animation-duration: 4s;\n          animation-duration: 4s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  z-index: 0;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear; }\n\n@-webkit-keyframes time {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg); } }\n\n@keyframes time {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg); } }\n\n@-webkit-keyframes time2 {\n  0% {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg); }\n  100% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); } }\n\n@keyframes time2 {\n  0% {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg); }\n  100% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); } }\n\n.canvas {\n  width: 600px;\n  height: 600px;\n  border: 1px solid #000;\n  margin: 0 auto;\n  position: relative;\n  background: #70c4c6;\n  -webkit-animation-name: daylight;\n          animation-name: daylight;\n  -webkit-animation-duration: 2.5s;\n          animation-duration: 2.5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  overflow: hidden;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear; }\n\n.canvas2 {\n  width: 600px;\n  height: 600px;\n  border: 1px solid #000;\n  margin: 0 auto;\n  position: relative;\n  background: #70c4c6;\n  -webkit-animation-name: daylight2;\n          animation-name: daylight2;\n  -webkit-animation-duration: 2.5s;\n          animation-duration: 2.5s;\n  overflow: hidden;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear; }\n\n@-webkit-keyframes daylight {\n  0% {\n    background-color: #70c4c6; }\n  80% {\n    background-color: #524b64; }\n  100% {\n    background-color: #354a4a; } }\n\n@keyframes daylight {\n  0% {\n    background-color: #70c4c6; }\n  80% {\n    background-color: #524b64; }\n  100% {\n    background-color: #354a4a; } }\n\n@-webkit-keyframes daylight2 {\n  0% {\n    background-color: #354a4a; }\n  80% {\n    background-color: #e2b553; }\n  100% {\n    background-color: #70c4c6; } }\n\n@keyframes daylight2 {\n  0% {\n    background-color: #354a4a; }\n  80% {\n    background-color: #e2b553; }\n  100% {\n    background-color: #70c4c6; } }\n\n.land::before {\n  width: 100%;\n  height: 200px;\n  content: '';\n  position: absolute;\n  left: 40%;\n  top: 20%;\n  border-radius: 50%;\n  background-color: #96be29;\n  border: 1px solid black;\n  -webkit-transform: rotate(-15deg);\n          transform: rotate(-15deg);\n  -webkit-animation-name: land;\n          animation-name: land;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n.land2::before {\n  width: 100%;\n  height: 200px;\n  content: '';\n  position: absolute;\n  left: 40%;\n  top: 20%;\n  border-radius: 50%;\n  background-color: #96be29;\n  border: 1px solid black;\n  -webkit-transform: rotate(-15deg);\n          transform: rotate(-15deg);\n  -webkit-animation-name: land1;\n          animation-name: land1;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n.land {\n  width: 100%;\n  height: 320px;\n  position: absolute;\n  left: -50px;\n  bottom: -120px;\n  background-color: #83a81c;\n  border-radius: 50%;\n  z-index: 1;\n  border: 1px solid black;\n  -webkit-animation-name: land;\n          animation-name: land;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n.land2 {\n  width: 100%;\n  height: 320px;\n  position: absolute;\n  left: -50px;\n  bottom: -120px;\n  background-color: #83a81c;\n  border-radius: 50%;\n  z-index: 1;\n  border: 1px solid black;\n  -webkit-animation-name: land1;\n          animation-name: land1;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes land {\n  0% {\n    background-color: #A3E263; }\n  100% {\n    background-color: #354723; } }\n\n@keyframes land {\n  0% {\n    background-color: #A3E263; }\n  100% {\n    background-color: #354723; } }\n\n@-webkit-keyframes land1 {\n  0% {\n    background-color: #354723; }\n  100% {\n    background-color: #A3E263; } }\n\n@keyframes land1 {\n  0% {\n    background-color: #354723; }\n  100% {\n    background-color: #A3E263; } }\n\n@-webkit-keyframes cloud {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  100% {\n    -webkit-transform: translateX(850px);\n            transform: translateX(850px); } }\n\n@keyframes cloud {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  100% {\n    -webkit-transform: translateX(850px);\n            transform: translateX(850px); } }\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.star {\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background-color: #fff;\n  position: absolute;\n  top: 50px;\n  left: 100px;\n  -webkit-animation-name: fader;\n          animation-name: fader;\n  -webkit-animation-duration: 2.5s;\n          animation-duration: 2.5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n.star2 {\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background-color: #fff;\n  position: absolute;\n  top: 50px;\n  left: 100px;\n  -webkit-animation-name: fader2;\n          animation-name: fader2;\n  -webkit-animation-duration: 2.5s;\n          animation-duration: 2.5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes fader {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fader {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes fader2 {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fader2 {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes blinker {\n  0% {\n    opacity: 0; }\n  18% {\n    opacity: 0; }\n  25% {\n    opacity: 1; }\n  40% {\n    opacity: 0; }\n  60% {\n    opacity: 1; }\n  70% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n@keyframes blinker {\n  0% {\n    opacity: 0; }\n  18% {\n    opacity: 0; }\n  25% {\n    opacity: 1; }\n  40% {\n    opacity: 0; }\n  60% {\n    opacity: 1; }\n  70% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes blinker-1 {\n  0% {\n    opacity: 0; }\n  30% {\n    opacity: 0; }\n  40% {\n    opacity: 1; }\n  60% {\n    opacity: 1; }\n  80% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n@keyframes blinker-1 {\n  0% {\n    opacity: 0; }\n  30% {\n    opacity: 0; }\n  40% {\n    opacity: 1; }\n  60% {\n    opacity: 1; }\n  80% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes windy {\n  15% {\n    -webkit-transform: translateX(5px);\n            transform: translateX(5px);\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg); }\n  80% {\n    -webkit-transform: translateX(7px);\n            transform: translateX(7px);\n    -webkit-transform: rotate(7deg);\n            transform: rotate(7deg); }\n  80% {\n    -webkit-transform: translateX(5px);\n            transform: translateX(5px);\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg); } }\n\n@keyframes windy {\n  15% {\n    -webkit-transform: translateX(5px);\n            transform: translateX(5px);\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg); }\n  80% {\n    -webkit-transform: translateX(7px);\n            transform: translateX(7px);\n    -webkit-transform: rotate(7deg);\n            transform: rotate(7deg); }\n  80% {\n    -webkit-transform: translateX(5px);\n            transform: translateX(5px);\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg); } }\n\n@-webkit-keyframes wind {\n  0% {\n    left: -800px;\n    opacity: 0; }\n  15% {\n    opacity: 1; }\n  70% {\n    left: 800px;\n    opacity: 1; }\n  80% {\n    left: 800px;\n    opacity: 0; }\n  100% {\n    left: -1000px;\n    opacity: 0; } }\n\n@keyframes wind {\n  0% {\n    left: -800px;\n    opacity: 0; }\n  15% {\n    opacity: 1; }\n  70% {\n    left: 800px;\n    opacity: 1; }\n  80% {\n    left: 800px;\n    opacity: 0; }\n  100% {\n    left: -1000px;\n    opacity: 0; } }\n\n@-webkit-keyframes snowday {\n  0% {\n    top: 0; }\n  100% {\n    top: 100%; } }\n\n@keyframes snowday {\n  0% {\n    top: 0; }\n  100% {\n    top: 100%; } }\n\n.snow {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #fff;\n  position: absolute;\n  top: 0; }\n\n.snow.fall {\n  -webkit-animation-name: snowday;\n          animation-name: snowday;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s; }\n\n.toggle {\n  position: relative;\n  display: inline-block;\n  width: 100px;\n  margin-left: 100px;\n  padding: 4px;\n  border-radius: 40px; }\n\n.toggle:before,\n.toggle:after {\n  content: '';\n  display: table; }\n\n.toggle:after {\n  clear: both; }\n\n.toggle-bg {\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  width: 100%;\n  height: 100%;\n  background-color: #C0E6F6;\n  border-radius: 40px;\n  border: 4px solid #81C0D5;\n  -webkit-transition: all 5s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  transition: all 5s cubic-bezier(0.25, 0.46, 0.45, 0.94); }\n\n.toggle-input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 1px solid red;\n  border-radius: 40px;\n  z-index: 2;\n  opacity: 0; }\n\n.toggle-switch {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  margin-left: 50px;\n  background-color: #F5EB42;\n  border: 4px solid #E4C74D;\n  border-radius: 50%;\n  -webkit-transition: all 4.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  transition: all 4.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); }\n\n.toggle-switch-figure {\n  position: absolute;\n  bottom: -14px;\n  left: -50px;\n  display: block;\n  width: 80px;\n  height: 30px;\n  border: 8px solid #D4D4D2;\n  border-radius: 20px;\n  background-color: #fff;\n  -webkit-transform: scale(0.4);\n          transform: scale(0.4);\n  -webkit-transition: all 0.12s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  transition: all 0.12s cubic-bezier(0.25, 0.46, 0.45, 0.94); }\n\n.toggle-switch-figure:after {\n    content: '';\n    display: block;\n    position: relative;\n    top: -65px;\n    right: -42px;\n    width: 15px;\n    height: 15px;\n    border: 8px solid #D4D4D2;\n    border-radius: 100%;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n    -webkit-transform: rotateZ(70deg);\n            transform: rotateZ(70deg);\n    background-color: #fff; }\n\n.toggle-switch-figure:before {\n    content: '';\n    display: block;\n    position: relative;\n    top: -25px;\n    right: -10px;\n    width: 30px;\n    height: 30px;\n    border: 8px solid #D4D4D2;\n    border-radius: 100%;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n    -webkit-transform: rotateZ(30deg);\n            transform: rotateZ(30deg);\n    background-color: #fff; }\n\n.toggle-switch-figureAlt {\n  content: '';\n  position: absolute;\n  top: 5px;\n  left: 2px;\n  width: 2px;\n  height: 2px;\n  background-color: #EFEEDA;\n  border-radius: 100%;\n  border: 4px solid #DEE1C5;\n  -webkit-box-shadow: 42px -7px 0 -3px #FCFCFC,\r 75px -10px 0 -3px #FCFCFC,\r 54px 4px 0 -4px #FCFCFC,\r 83px 7px 0 -2px #FCFCFC,\r 63px 18px 0 -4px #FCFCFC,\r 44px 28px 0 -2px #FCFCFC,\r 78px 23px 0 -3px #FCFCFC;\n          box-shadow: 42px -7px 0 -3px #FCFCFC,\r 75px -10px 0 -3px #FCFCFC,\r 54px 4px 0 -4px #FCFCFC,\r 83px 7px 0 -2px #FCFCFC,\r 63px 18px 0 -4px #FCFCFC,\r 44px 28px 0 -2px #FCFCFC,\r 78px 23px 0 -3px #FCFCFC;\n  -webkit-transition: all 0.12s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  transition: all 0.12s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n\n.toggle-switch-figureAlt:before {\n  content: '';\n  position: absolute;\n  top: -6px;\n  left: 18px;\n  width: 7px;\n  height: 7px;\n  background-color: #EFEEDA;\n  border-radius: 100%;\n  border: 4px solid #DEE1C5; }\n\n.toggle-switch-figureAlt:after {\n  content: '';\n  position: absolute;\n  top: 19px;\n  left: 15px;\n  width: 2px;\n  height: 2px;\n  background-color: #EFEEDA;\n  border-radius: 100%;\n  border: 4px solid #DEE1C5; }\n\n.toggle-input:checked ~ .toggle-switch {\n  margin-left: 0;\n  border-color: #DEE1C5;\n  background-color: #FFFDF2; }\n\n.toggle-input:checked ~ .toggle-bg {\n  background-color: #484848;\n  border-color: #202020; }\n\n.toggle-input:checked ~ .toggle-switch .toggle-switch-figure {\n  margin-left: 40px;\n  opacity: 0;\n  -webkit-transform: scale(0.1);\n          transform: scale(0.1); }\n\n.toggle-input:checked ~ .toggle-switch .toggle-switch-figureAlt {\n  -webkit-transform: scale(1);\n          transform: scale(1); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/daynight/daynight.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DaynightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DaynightComponent = /** @class */ (function () {
    function DaynightComponent() {
        this.time = "eclipse2";
        this.daylight = "canvas2";
        this.star = "star2";
        this.land = "land2";
        this.tr = false;
    }
    DaynightComponent.prototype.changetime = function () {
        var _this = this;
        if (this.time == "eclipse") {
            this.time = "eclipse2";
            this.daylight = "canvas2";
            this.star = "star2";
            this.land = "land2";
            this.tr = true;
            setTimeout(function () { _this.tr = false; }, 4500);
        }
        else if (this.time == "eclipse2") {
            this.time = "eclipse";
            this.daylight = "canvas";
            this.star = "star";
            this.land = "land";
            this.tr = true;
            setTimeout(function () { _this.tr = false; }, 4500);
        }
    };
    DaynightComponent.prototype.ngOnInit = function () {
    };
    DaynightComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-daynight',
            template: __webpack_require__("../../../../../src/app/daynight/daynight.component.html"),
            styles: [__webpack_require__("../../../../../src/app/daynight/daynight.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DaynightComponent);
    return DaynightComponent;
}());



/***/ }),

/***/ "../../../../../src/app/grid-flex/grid-flex.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 3fr 3fr 3fr 1fr;\r\n      grid-template-columns: 3fr 3fr 3fr 1fr;\r\n  grid-auto-rows: minmax(100px, auto);\r\n  grid-auto-columns: minmax(100px, 200px);\r\n  text-align: center;\r\n  font-size: 130%;\r\n  grid-gap: 10px;\r\n}\r\n.one {\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 2;\r\n  grid-column: 1 / 3;\r\n  -ms-grid-row: 1;\r\n  grid-row: 1;\r\n  background-color: #FFE4C4;\r\n  opacity: .9;\r\n  border: 1px solid black;\r\n}\r\n.two { \r\n-ms-grid-row: 2; \r\n-ms-grid-row-span: 3; \r\ngrid-row: 2 / 5;\r\n  -ms-grid-column: 1;\r\n  grid-column: 1;\r\n    background-color: #FFE4C4;\r\n  opacity: .9;\r\n  border: 1px solid black;\r\n}\r\n.three {\r\n  \r\n    -ms-grid-column: 2;\r\n  \r\n    -ms-grid-column-span: 2;\r\n  \r\n    grid-column: 2 / 4;\r\n  -ms-grid-row: 2;\r\n  -ms-grid-row-span: 1;\r\n  grid-row: 2 / 3;\r\n    background-color: #FFE4C4;\r\n  opacity: .9;\r\n  border: 1px solid black;\r\n}\r\n.four {\r\n  -ms-grid-column: 3;\r\n  grid-column: 3;\r\n  -ms-grid-row: 3;\r\n  grid-row: 3;\r\n    background-color: #FFE4C4;\r\n  opacity: .9;\r\n  border: 1px solid black;\r\n}\r\n.five {\r\n  -ms-grid-column: 2;\r\n  grid-column: 2;\r\n  -ms-grid-row: 4;\r\n  grid-row: 4;\r\n    background-color: #FFE4C4;\r\n  opacity: .9;\r\n  border: 1px solid black;\r\n}\r\n.six {\r\n  -ms-grid-column: 3;\r\n  grid-column: 3;\r\n  -ms-grid-row: 4;\r\n  grid-row: 4;\r\n    background-color: #FFE4C4;\r\n  opacity: .9;\r\n  border: 1px solid black;\r\n}\r\n.seven {\r\n\t-ms-grid-column: 4;\r\n\t-ms-grid-column-span: 1;\r\n\tgrid-column: 4 / 5;\r\n\t-ms-grid-row: 1;\r\n\t-ms-grid-row-span: 4;\r\n\tgrid-row: 1 / 5;\r\n\t    background-color: #FFE4C4;\r\n  opacity: .9;\r\n  border: 1px solid black;\r\n  -webkit-writing-mode: vertical-rl;\r\n      -ms-writing-mode: tb-rl;\r\n          writing-mode: vertical-rl;\r\n}\r\n@media only screen and (max-width: 1200px) {\r\n    .six {\r\n          -ms-grid-column: 3;\r\n          -ms-grid-column-span: 1;\r\n          grid-column: 3 / 4;\r\n  \t\t\t-ms-grid-row: 1;\r\n  \t\t\t-ms-grid-row-span: 1;\r\n  \t\t\tgrid-row: 1 / 2;\r\n    }\r\n}\r\n@media only screen and (max-width: 1000px) {\r\n    .six {\r\n          -ms-grid-column: 2;\r\n          -ms-grid-column-span: 1;\r\n          grid-column: 2 / 3;\r\n  \t\t\t-ms-grid-row: 3;\r\n  \t\t\t-ms-grid-row-span: 1;\r\n  \t\t\tgrid-row: 3 / 4;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/grid-flex/grid-flex.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h2>Here for each element I describe what role they have to play on template, and make it all came true with CSS Grid system.</h2>\n\n\n<div class=\"wrapper\">\n  <div class=\"one\">1.Wanna be long and low</div>\n  <div class=\"two\">2. ¯\\_(ツ)_/¯ </div>\n  <div class=\"three\">3. Can't be longer than 200px</div>\n  <div class=\"four\">4. Casual</div>\n  <div class=\"five\">5. Wanna stay here</div>\n  <div class=\"six\">6. Wanna jump around depending on window size</div>\n  <div class=\"seven\">7. Wanna be tall and thin</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/grid-flex/grid-flex.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridFlexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridFlexComponent = /** @class */ (function () {
    function GridFlexComponent() {
    }
    GridFlexComponent.prototype.ngOnInit = function () {
    };
    GridFlexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-grid-flex',
            template: __webpack_require__("../../../../../src/app/grid-flex/grid-flex.component.html"),
            styles: [__webpack_require__("../../../../../src/app/grid-flex/grid-flex.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GridFlexComponent);
    return GridFlexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grids {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 1fr 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    -ms-grid-rows: 1fr 1fr 1fr;\r\n        grid-template-rows: 1fr 1fr 1fr;\r\n    grid-auto-columns: minmax(100px, auto);\r\n    grid-auto-rows: minmax(100px, auto);\r\n}\r\n\r\n.btn-success{\r\n\t-ms-grid-row: 1;\r\n\t-ms-grid-row-span: 1;\r\n\tgrid-row: 1 / 2;\r\n\t-ms-grid-column: 3;\r\n\t-ms-grid-column-span: 1;\r\n\tgrid-column: 3 / 4;\r\n}\r\n\r\n.item {\r\n\t-ms-grid-column: 1;\r\n\t-ms-grid-column-span: 2;\r\n\tgrid-column: 1 / 3;\r\n\t-webkit-animation: fade 1s;\r\n\t        animation: fade 1s;\r\n}\r\n\r\n@-webkit-keyframes fade {\r\n\t0%{\r\n\t\topacity: 0;\r\n\t\tmargin-left: -20px;\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\tmargin-left: 0px;\r\n\t}\r\n}\r\n\r\n@keyframes fade {\r\n\t0%{\r\n\t\topacity: 0;\r\n\t\tmargin-left: -20px;\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\tmargin-left: 0px;\r\n\t}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Simple to-do list</p>\n\n\n<div class=\"container\">\n<div class=\"row\">\n<div class=\"grids\">\n\t<input (keydown)=\"onKeydown($event)\" [(ngModel)]=\"username\" class=\"col-md-10\">\n<button (keyup)=\"add()\" class=\"btn btn-success\" (click)=\"add()\" class=\"col-md-2\"> ENTER </button>\n<div  class=\"item\" *ngFor=\"let list of arr\" >{{list.txtName}}<button class=\"btn btn-warning\" (click)=\"del(list.txtName)\">DEL</button></div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
        this.arr = [];
        this.del = function (txtName) {
            for (var i = 0; i < this.arr.length; i++) {
                if (this.arr[i]["txtName"] == txtName) {
                    return this.arr.splice(i, 1);
                }
            }
        };
    }
    LayoutComponent.prototype.add = function () {
        if (this.arr.indexOf({ txtName: this.username }) === -1) {
            if (this.username !== "") {
                this.arr.push({ txtName: this.username });
                this.username = "";
            }
        }
    };
    LayoutComponent.prototype.onKeydown = function (event) {
        if (event.key === "Enter") {
            this.add();
            this.username = "";
        }
    };
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../src/app/layout/layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/plate/plate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gas {\r\n\tdisplay: inline-block;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tmargin-bottom: 10px;\r\n\twidth: 210px;\r\n\t\tcursor: pointer;\r\n}\r\n\r\nimg {\r\n\twidth: 100%;\r\n\theight: 200px;\r\n}\r\n\r\n.card-title {\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.card-text {\r\n\ttext-align: center;\r\n\tvisibility: hidden;\r\n\tposition: absolute;\r\n\tcolor: black;\r\n\tfont-size: 120%;\r\n\tfont-family: fantasy;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.gas:hover .card-img-top {\r\n\t-webkit-animation: key1 150s;\r\n\t        animation: key1 150s;\r\n\r\n}\r\n\r\n.gas:hover .card-text {\r\n\tvisibility: visible;\r\n\t-webkit-animation: key 1s;\r\n\t        animation: key 1s;\r\n}\r\n\r\n@-webkit-keyframes key {\r\n0% {\r\n\topacity: 0;\r\n}\t\r\n100% {\r\n\topacity: 1;\r\n}\r\n}\r\n\r\n@keyframes key {\r\n0% {\r\n\topacity: 0;\r\n}\t\r\n100% {\r\n\topacity: 1;\r\n}\r\n}\r\n\r\n@-webkit-keyframes key1 {\r\n0% {\r\n\topacity: 1;\r\n}\t\r\n1% {\r\n\topacity: 0.3;\r\n}\r\n100% {\r\n\topacity: 0.3;\r\n}\r\n}\r\n\r\n@keyframes key1 {\r\n0% {\r\n\topacity: 1;\r\n}\t\r\n1% {\r\n\topacity: 0.3;\r\n}\r\n100% {\r\n\topacity: 0.3;\r\n}\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/plate/plate.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"gas col-sm-12 col-lg-3\" routerLink={{theme.link}}>\n\n<div class=\"card-title\">{{theme.name}}</div>\n<div class=\"card\" >\n\n  <img class=\"card-img-top\" src={{theme.src}} alt=\"Card image cap\">\n  <div class=\"card-text\">{{theme.info}}</div>\n  \n    \n    \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/plate/plate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlateComponent = /** @class */ (function () {
    function PlateComponent() {
    }
    PlateComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PlateComponent.prototype, "theme", void 0);
    PlateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-plate',
            template: __webpack_require__("../../../../../src/app/plate/plate.component.html"),
            styles: [__webpack_require__("../../../../../src/app/plate/plate.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlateComponent);
    return PlateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quoteservise.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteserviseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuoteserviseService = /** @class */ (function () {
    function QuoteserviseService(http) {
        this.http = http;
    }
    QuoteserviseService.prototype.getRandomQuote = function () {
        return this.http.get("https://talaikis.com/api/quotes/random/");
    };
    QuoteserviseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QuoteserviseService);
    return QuoteserviseService;
}());



/***/ }),

/***/ "../../../../../src/app/random-quote/random-quote.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cont\">\n<div class=\"empty\"></div>\n\t\t<div class=\"{{quota}}\"> {{quot}}</div>\n<div class=\"{{auth}}\"> {{author}}</div>\n\n\n<button (click)=\"change()\" (click)=\"gotQuote()\" class=\"btn btn-success\">GET QUOTE</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/random-quote/random-quote.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cont {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr 1fr 1fr;\n      grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-auto-columns: minmax(100px, 200px);\n  grid-auto-rows: minmax(100px, auto);\n  text-align: center; }\n\n.empty {\n  -ms-grid-column: 2;\n  -ms-grid-column-span: 2;\n  grid-column: 2 / 4;\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 5;\n  grid-row: 1 / 6;\n  border-radius: 1%;\n  background-color: #006622; }\n\n@media only screen and (max-width: 700px) {\n  .empty {\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 4;\n    grid-column: 1 / 5;\n    -ms-grid-row: 1;\n    -ms-grid-row-span: 5;\n    grid-row: 1 / 6;\n    border-radius: 1%;\n    background-color: #006622; }\n  .quote {\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 4;\n    grid-column: 1 / 5;\n    -ms-grid-row: 1;\n    -ms-grid-row-span: 3;\n    grid-row: 1 / 4;\n    color: white;\n    height: minmax(400px, auto);\n    font-size: 5px; }\n  .btn {\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 4;\n    grid-column: 1 / 5;\n    -ms-grid-row: 5;\n    -ms-grid-row-span: 1;\n    grid-row: 5 / 6; } }\n\n.quote {\n  -ms-grid-column: 2;\n  -ms-grid-column-span: 2;\n  grid-column: 2 / 4;\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 3;\n  grid-row: 1 / 4;\n  margin-top: 100px;\n  color: white;\n  font-size: 20px;\n  height: 400px; }\n\n.auth {\n  -ms-grid-column: 3;\n  -ms-grid-column-span: 1;\n  grid-column: 3 / 4;\n  -ms-grid-row: 4;\n  -ms-grid-row-span: 1;\n  grid-row: 4 / 5;\n  -webkit-animation-name: qu;\n          animation-name: qu;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  color: white; }\n\n.auth1 {\n  -ms-grid-column: 3;\n  -ms-grid-column-span: 1;\n  grid-column: 3 / 4;\n  -ms-grid-row: 4;\n  -ms-grid-row-span: 1;\n  grid-row: 4 / 5;\n  -webkit-animation-name: quq;\n          animation-name: quq;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  color: white; }\n\n@-webkit-keyframes qu {\n  0% {\n    opacity: 0; }\n  30% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes qu {\n  0% {\n    opacity: 0; }\n  30% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes quq {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes quq {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.btn {\n  -ms-grid-column: 2;\n  -ms-grid-column-span: 2;\n  grid-column: 2 / 4;\n  -ms-grid-row: 5;\n  -ms-grid-row-span: 1;\n  grid-row: 5 / 6; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/random-quote/random-quote.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomQuoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quoteservise_service__ = __webpack_require__("../../../../../src/app/quoteservise.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class__ = __webpack_require__("../../../../../src/app/class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RandomQuoteComponent = /** @class */ (function () {
    function RandomQuoteComponent(Quoteservise) {
        this.Quoteservise = Quoteservise;
        this.quote = new __WEBPACK_IMPORTED_MODULE_2__class__["a" /* Quote */]("", "");
        this.auth = "auth";
        this.quota = "quote";
        this.photo = "";
    }
    RandomQuoteComponent.prototype.change = function () {
        if (this.auth == "auth") {
            this.auth = "auth1";
        }
        else if (this.auth == "auth1") {
            this.auth = "auth";
        }
    };
    RandomQuoteComponent.prototype.gotQuote = function () {
        var _this = this;
        this.Quoteservise.getRandomQuote().subscribe(function (data) {
            _this.quote = new __WEBPACK_IMPORTED_MODULE_2__class__["a" /* Quote */](data.quote, data.author);
            _this.author = _this.quote.author;
            _this.quot = _this.quote.quote;
        });
    };
    RandomQuoteComponent.prototype.ngOnInit = function () {
    };
    RandomQuoteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-random-quote',
            template: __webpack_require__("../../../../../src/app/random-quote/random-quote.component.html"),
            styles: [__webpack_require__("../../../../../src/app/random-quote/random-quote.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__quoteservise_service__["a" /* QuoteserviseService */]])
    ], RandomQuoteComponent);
    return RandomQuoteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/works/works.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n\tdisplay: -ms-grid;\r\n\tdisplay: grid;\r\n}\r\n.item1 {\r\n\theight: 1500px;\r\n\twidth: 1500px;\r\n\tcolor: purple;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/works/works.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var WorksComponent = /** @class */ (function () {
    function WorksComponent() {
        this.themes = [
            { name: "CSS flexbox layout", info: " CSSJust an experiment with CSSJust an experiment with CSSJust an experiment with CSS", src: "https://cdn.pixabay.com/photo/2017/11/16/09/13/monogram-2953818__340.png" },
            { name: "CSS flexbox layout", info: "Just an experiment with CSS", src: "https://cdn.pixabay.com/photo/2017/11/16/09/13/monogram-2953818__340.png" },
            { name: "card3", info: "Just an experiment with CSS", src: "https://cdn.pixabay.com/photo/2017/11/16/09/13/monogram-2953818__340.png" },
            { name: "Random Quote App", link: "RandomQuotes", info: "Simple Random Quote generator", src: "../assets/quote.svg" },
            { name: "Day/Night", link: "DayNight", info: "Day time switching animation", src: "data:image/jpeg;base64,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" },
            { name: "Grid is good", link: "Grid-Flex", info: "My local experiments with CSS Grid", src: "https://www.servage.net/blog/wp-content/uploads/2016/03/css-flexbox.png" },
            { name: "To Do List", link: "To-Dolist", info: "To Do List App", src: "data:image/png;base64,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" }
        ];
    }
    WorksComponent.prototype.ngOnInit = function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    };
    WorksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-works',
            template: '<app-plate *ngFor="let theme of themes" [theme]="theme"></app-plate>',
            styles: [__webpack_require__("../../../../../src/app/works/works.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorksComponent);
    return WorksComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map