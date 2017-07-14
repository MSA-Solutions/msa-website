webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-mainpage{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\n<video playsinline autoplay loop>\n  <source src=\"../assets/web-bg.mp4\" type=\"video/mp4\">\n</video>\n<msa-nav\n  [pageOneLocation]=\"what_page_loc\"\n  [pageTwoLocation]=\"how_page_loc\"\n  [pageThreeLocation]=\"why_page_loc\"\n  [pageFourLocation]=\"where_page_loc\"></msa-nav>\n<div id=\"Home-page\" class=\"body\">\n\n  <div class=\"msa-main\">\n\n    <div class=\"content-mainpage\">\n      <msa-logo></msa-logo>\n    </div>\n\n  </div>\n\n</div>\n<section id=\"What-page\" #whatSection class=\"what-section\">\n  <div>\n    <h2>WHAT</h2>\n    <h3>We help make ideas into reality</h3>\n    <p>MSA focuses on quick cycle software solution delivery for small, medium, and large corporations. Our team\n      delivers quick POCs (Proof of Concept)s to support ideas in a short amount of time and within our clients budget.\n      We are a full stack development shop with over 15 years of experience in Web-based solutions, Web services, and\n      Mobile technology.</p>\n    <div class=\"what-images\">\n      <div>\n        <img src=\"../assets/Think.svg\">\n        <h4>Ideation</h4>\n      </div>\n      <div>\n        <img src=\"../assets/Build.svg\">\n        <h4>Develop</h4>\n      </div>\n      <div>\n        <img src=\"../assets/Done.svg\">\n        <h4>Deliver</h4>\n      </div>\n    </div>\n    <p class=\"cite cio-cite\">Our Mission is to provide elegant and top edge solutions to our clients; by working closely\n      with their tech teams and developers on solutions architecture and UI design to deliver competitive solutions and\n      exceptional user experience the market.</p>\n\n  </div>\n  <div class=\"sub-section doted-bg\">\n    <h4>\n      Let's Talk Concept\n    </h4>\n    <p class=\"center-text\">\n      Sometimes people need assurance before they take forward steps, It's nice to have a clear understanding of the\n      feasibility and cost of your idea. We at MSA work with you to establish this clarity by analyzing your needs and\n      research the industry best practices and best technology.\n    </p>\n  </div>\n</section>\n\n<section id=\"How-page\" #howSection class=\"how-section lightGray\">\n  <div>\n    <h2>HOW</h2>\n    <p>MSA delivers all of your software technology needs. We have all the necessary skills to make any software\n      challenge into a reality. Not only will we guarantee delivery of software but we also guarantee elegance and user\n      experience satisfaction.</p>\n    <div class=\"services-container\">\n      <div>\n\n        <div class=\"service-item\">\n          <div>\n            <img src=\"../assets/prototype.svg\" width=\"75\">\n            <label>Software prototype</label>\n            <span class=\"place-holder\"></span>\n          </div>\n          <p>Testing is a major step in every product design process. However, testing solutions after development can\n            be very costly to product owners. MSA provides prototyping as a way to validate ideas and concepts before\n            spending time and money on any coding; This helps to test the user experience and make any necessary changes\n            before development.</p>\n        </div>\n\n        <div class=\"service-item\">\n          <div>\n            <img src=\"../assets/design.svg\" width=\"75\">\n            <label>Interface Design</label>\n            <span class=\"place-holder\"></span>\n          </div>\n          <p>It is important for any user interface to be well designed. MSA Offers interface design as a service to its\n            clients to help build an elegant solution that will enhance the user experience for both web and mobile. We\n            can deliver PSD or complete code based files. We also offer custom component design for clients who are\n            looking to building their component library.</p>\n        </div>\n\n        <div class=\"service-item\">\n          <div>\n            <img src=\"../assets/api.svg\" width=\"75\">\n            <label>Data Integration</label>\n            <span class=\"place-holder\"></span>\n          </div>\n          <p>MSA provides Integrating solutions with existing APIs or web services. We are also able to build APIs as\n            part of our back-end services or integrate solutions through Azure or AWS cloud services.</p>\n        </div>\n\n      </div>\n      <div>\n\n        <div class=\"service-item\">\n          <div>\n            <img src=\"../assets/app.svg\" width=\"75\">\n            <label>App Development</label>\n            <span class=\"place-holder\"></span>\n          </div>\n          <p>Whether building a stand alone app solution or adding mobile to an existing software ecosystem solution,\n            MSA can help you get there. We offer well structured and architected solutions for both iOS and Android\n            along with release support and team testing.</p>\n        </div>\n\n        <div class=\"service-item\">\n          <div>\n            <img src=\"../assets/back-end.svg\" width=\"75\">\n            <label>Back-End development</label>\n            <span class=\"place-holder\"></span>\n          </div>\n          <p>Developing a robust back-end that can handle a significant amount of user traffic and data exchange is\n            crucial to any application. MSA offers back-end development as part of its POC service or as a separate\n            service. We also provide architect service and technology stack consulting if clients prefer developing\n            solutions in-house.</p>\n        </div>\n\n        <div class=\"service-item\">\n          <div>\n            <img src=\"../assets/front-end.svg\" width=\"75\">\n            <label>Front-End development</label>\n            <span class=\"place-holder\"></span>\n          </div>\n          <p>Building well-structured user interface is essential for any web or mobile solution; especially with new\n            interface technologies emerging to the field every day. MSA works with its clients to deliver\n            well-architected code with cutting edge technology frameworks and libraries to make sure released solutions\n            are future-proof.</p>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>\n\n<section id=\"Why-page\" #whySection class=\"why-section \">\n\n  <div>\n    <h2>WHY</h2>\n    <p>\n      Ideas are moving around the world more quickly than ever, and in today's fast-paced economy it's essential for\n      businesses to have solidly reliable partners to help them stay ahead of the market curve and stand the\n      competition. Our model at MSA Solutions is simple\n    </p>\n    <h4>\n      Move fast to help clients make decisions for a better future.\n    </h4>\n    <p>Whether you are an individual or business, MAS Solutions will partner with you and become your full-stack\n      development team. We can help you move quickly on ideas by building your POC to help validate ideas and designing\n      a solid plan for future development by researching the field and planning out the technology stack and\n      architecture necessary for a robust solution.</p>\n  </div>\n  <div class=\"sub-section wp-bg\">\n    <h4>\n      Our Team\n    </h4>\n    <p class=\"center-text\">\n      MSA Solutions is always excited about new technologies and are always seeking new ways to enhance and deliver better\n      solutions and services to our clients since our success depends on our client's success.\n    </p>\n  </div>\n</section>\n\n<section id=\"Where-page\" #whereSection class=\"where-section\">\n  <div>\n    <h2>WHERE</h2>\n    <div class=\"two-columns\">\n      <div>\n        <div class=\"map-img x-10\"></div>\n        <div class=\"label-with-icon\">\n          <img src=\"../assets/location.svg\">\n          <h5>Headquarters</h5>\n        </div>\n        <div class=\"location-info\">\n          <label>Kansas City MO. </label>\n          <label>Phone number: (816) 743-4214</label>\n          <label>Email: info@msacom.co</label>\n        </div>\n      </div>\n      <div>\n        <message-form></message-form>\n      </div>\n\n    </div>\n  </div>\n</section>\n<div class=\"footer\">\n  <div class=\"social-list\"></div>\n  <div class=\"content-footer\">\n    <p>© 2017 MSA Solutions. All Rights Reserved.</p>\n  </div>\n  <div class=\"social-list\">\n    <a href=\"https://www.facebook.com/MSA-Solutions-648113892052974/\"><img src=\"../assets/facebook.svg\"></a>\n    <a href=\"https://www.linkedin.com/in/msa-solutions-868b12144/\"><img src=\"../assets/linkedin.svg\"></a>\n    <a href=\"https://www.youtube.com/channel/UCZxYZS9v6KBatxQQw3T066A\"><img src=\"../assets/youtube-play.svg\"></a>\n    <a href=\"https://twitter.com/MSA_Solutions\"><img src=\"../assets/twitter.svg\"></a>\n    <a href=\"https://github.com/MSA-Solutions\"><img src=\"../assets/github.svg\"></a>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(elRef) {
        this.elRef = elRef;
        this.what_page_loc = 0;
        this.how_page_loc = 0;
        this.why_page_loc = 0;
        this.where_page_loc = 0;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.what_page_loc = this.what_section.nativeElement.offsetTop;
        this.how_page_loc = this.how_section.nativeElement.offsetTop;
        this.why_page_loc = this.why_section.nativeElement.offsetTop;
        this.where_page_loc = this.where_section.nativeElement.offsetTop;
        this.createContactUsFormControls();
        this.createContactUsForm();
    };
    AppComponent.prototype.createContactUsFormControls = function () {
        this.clientName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(20)]);
        this.clientEmail = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern("[^ @]*@[^ @]*")]);
        this.clientMessage = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(10)]);
    };
    AppComponent.prototype.createContactUsForm = function () {
        this.contactUsForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            name: this.clientName,
            email: this.clientEmail,
            message: this.clientMessage
        });
    };
    AppComponent.prototype.onSubmit = function () {
        debugger;
        console.log("checking validation!");
        if (this.contactUsForm.valid) {
            console.log("Form Submitted!");
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('whatSection'),
    __metadata("design:type", Object)
], AppComponent.prototype, "what_section", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('howSection'),
    __metadata("design:type", Object)
], AppComponent.prototype, "how_section", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('whySection'),
    __metadata("design:type", Object)
], AppComponent.prototype, "why_section", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('whereSection'),
    __metadata("design:type", Object)
], AppComponent.prototype, "where_section", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__msa_logo_component__ = __webpack_require__("../../../../../src/app/msa-logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__msa_nav_component__ = __webpack_require__("../../../../../src/app/msa-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__message_form_component__ = __webpack_require__("../../../../../src/app/message-form.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__msa_logo_component__["a" /* MsaLogo */],
            __WEBPACK_IMPORTED_MODULE_8__msa_nav_component__["a" /* MsaNav */],
            __WEBPACK_IMPORTED_MODULE_9__message_form_component__["a" /* MessageFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* JsonpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_9__message_form_component__["a" /* MessageFormComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/message-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!submitted\">\n<h4>How can we help?</h4>\n<form (ngSubmit)=\"onSubmit()\" #messageForm=\"ngForm\">\n  <div class=\"msa-input\">\n    <label>* Name</label>\n    <input class=\"x-10\" type=\"text\" [(ngModel)]=\"message.name\" name=\"name\" required>\n  </div>\n  <div class=\"msa-input\">\n    <label>* Email</label>\n    <input class=\"x-10\" type=\"email\" [(ngModel)]=\"message.email\" name=\"email\" required>\n  </div>\n  <div class=\"msa-input\">\n    <label>* Message</label>\n    <textarea class=\"x-10\" rows=\"4\" [(ngModel)]=\"message.message\" name=\"message\" required></textarea>\n  </div>\n  <button type=\"submit\" class=\"msa-send-btn\" [disabled]=\"!messageForm.form.valid\">SEND</button>\n</form>\n</div>\n<!--<div *ngIf=\"submitted\">-->\n<div  *ngIf=\"submitted\" class=\"message-sent\">\n  <label>Thank you for contacting MSA Solutions!</label>\n  <p>Our people will get back to you as soon as possible to get more details. Meanwhile, if you would like to add anything else, please feel free to contact us at info@msacom.co</p>\n  <div>\n  <button (click)=\"submitted=false\" class=\"msa-send-btn\">SEND US ANOTHER MESSAGE</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/message-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message__ = __webpack_require__("../../../../../src/app/message.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by mohammedabdelrahman on 7/11/17.
 */



var MessageFormComponent = (function () {
    function MessageFormComponent(messsageService) {
        this.messsageService = messsageService;
        this.submitted = false;
        this.message = new __WEBPACK_IMPORTED_MODULE_2__message__["a" /* Message */]('', '', '');
    }
    MessageFormComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.message);
        this.messsageService.sendMessage(this.message).subscribe(function (message) { _this.msgForm.reset(); _this.submitted = true; }, function (error) { return console.log(error); });
    };
    return MessageFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('messageForm'),
    __metadata("design:type", Object)
], MessageFormComponent.prototype, "msgForm", void 0);
MessageFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'message-form',
        template: __webpack_require__("../../../../../src/app/message-form.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]) === "function" && _a || Object])
], MessageFormComponent);

var _a;
//# sourceMappingURL=message-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by mohammedabdelrahman on 7/11/17.
 */





var MessageService = (function () {
    function MessageService(http) {
        this.http = http;
        this.messageAPI = 'http://localhost:3000/message';
    }
    MessageService.prototype.sendMessage = function (message) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.messageAPI, { message: message }, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MessageService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    MessageService.prototype.handleError = function (error) {
        console.log(error.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.message);
    };
    return MessageService;
}());
MessageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], MessageService);

var _a;
//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ "../../../../../src/app/message.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
/**
 * Created by mohammedabdelrahman on 7/11/17.
 */
var Message = (function () {
    function Message(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }
    return Message;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ "../../../../../src/app/msa-logo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".outer-circle{\n\n}\n\n.black-box{\n  width: 150px;\n  height: 150px;\n  background-color: #0b0b0b;\n  position: relative;\n  overflow: hidden;\n}\n\n.black-box:before{\n  content: \"\";\n  width: 500px;\n  height: 500px;\n  background-color: #ffffff;\n  border-radius: 50%;\n  opacity:0.03;\n  position: absolute;\n  top: -338px;\n  left: -13px;\n}\n\n.black-box:after{\n  content: \"MSA\";\n  color: white;\n  position: absolute;\n  bottom: 0px;\n  font-family: Arial;\n  font-size: 2.3em;\n  padding-left: 10px;\n}\n\nlabel{\n  font-family: Arial;\n  font-weight: bold;\n  font-size: 1.54em;\n  letter-spacing: 0.2em;\n  text-transform: capitalize;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/msa-logo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"outer-circle\">\n<div class=\"black-box\">\n</div>\n<label>solutions</label>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/msa-logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsaLogo; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MsaLogo = (function () {
    function MsaLogo(_builder) {
        this._builder = _builder;
    }
    return MsaLogo;
}());
MsaLogo = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'msa-logo',
        template: __webpack_require__("../../../../../src/app/msa-logo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/msa-logo.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* AnimationBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* AnimationBuilder */]) === "function" && _a || Object])
], MsaLogo);

var _a;
//# sourceMappingURL=msa-logo.component.js.map

/***/ }),

/***/ "../../../../../src/app/msa-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-wrapper{\n  position: fixed;\n  background-color: #ffffff;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  z-index: 100;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  text-align: right;\n}\n\n.space-holder{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex:1;\n      -ms-flex:1;\n          flex:1;\n}\nnav{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 20px;\n}\n\n.menu-hidden-input{\n  display: none;\n\n}\n\nnav label{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 1em 0.5em;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n\n.menu-link{\n  min-width: 60px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: center;\n  transition: .4s;\n  position: relative;\n  float: right;\n  text-decoration: none;\n  color: inherit;\n}\n\n.menu-link:before,.menu-link:after{\n  content: \"\";\n  position: absolute;\n  width: 0%;\n  height: 100%;\n  transition: .4s;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n\n}\n\n.menu-link:before{\n  left: 0;\n  bottom: 0;\n\n}\n\n.menu-link:after{\n  right: 0;\n  top: 0;\n}\n\n.darkBorder .menu-link:after{\n  border-top: 3px solid #0b0b0b;\n}\n\n.darkBorder .menu-link:before{\n  border-bottom: 3px solid #0b0b0b;\n}\n\n.lightBorder .menu-link:after{\n  border-top: 3px solid #FFFFFF;\n}\n\n.lightBorder .menu-link:before{\n  border-bottom: 3px solid #FFFFFF;\n}\n\n.menu-hidden-input{\n  padding:0 10em;\n}\n\n.menu-hidden-input:checked + .menu-link{\n\n}\n\n.menu-hidden-input:checked + .menu-link:before{\n  width: 100%;\n  height: 100%;\n}\n.menu-hidden-input:checked + .menu-link:after{\n  width: 100%;\n  height: 100%;\n}\n\n.menu-hidden-input{\n\n}\n\n.menu-link {\n  cursor: pointer;\n  padding: 0.8em;\n  font-size: 1.05em;\n  font-weight: bold;\n  display: block;\n}\n\n.nav-logo{\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  margin-left: 1em;\n}\n.dark-logo:before{\n  background-color: #0b0b0b;\n}\n\n.light-logo:before{\n  background-color: #FFFFFF;\n}\n\n.nav-logo:before{\n  content: \"\";\n  margin: 10px;\n  width: 30px;\n  height: 30px;\n}\n.nav-logo:after{\n  content: \"MSA\";\n  font-size: 2.5em;\n}\n\n@media only screen and (max-width: 375px) {\n\n  .nav-wrapper{\n    position: fixed;\n    background-color: #ffffff;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    z-index: 100;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    text-align: right;\n    padding-top: 10px;\n  }\n\n  .nav-logo{\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-left: 0;\n  }\n\n  .menu-link{\n    padding: 1em 0.4em;\n    line-height: 30px;\n  }\n  nav{\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  nav label{\n    margin: 0.3em 0em;\n  }\n\n}\n\n@media only screen and (max-width: 414px) {\n\n  .nav-wrapper{\n    position: fixed;\n    background-color: #ffffff;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    z-index: 100;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    text-align: right;\n    padding-top: 10px;\n  }\n\n  .nav-logo{\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-left: 0;\n  }\n\n  .menu-link{\n    padding: 1em 0.4em;\n    line-height: 30px;\n  }\n  nav{\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  nav label{\n    margin: 0.3em 0em;\n  }\n\n}\n\n@media only screen and (max-width: 667px) {\n\n\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/msa-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div #menu class=\"nav-wrapper\" [ngStyle]=\"{'background-color':navBackgroundColor, 'color':navFontColor}\">\n  <div class=\"nav-logo\" [ngClass]=\"[(darkBorder)?'dark-logo':'light-logo']\">\n    <label></label>\n  </div>\n  <div class=\"space-holder\"></div>\n  <nav class=\"menu\" [ngClass]=\"[(darkBorder)?'darkBorder':'lightBorder']\">\n    <label><input #home type=\"radio\" name=\"menu\" class=\"menu-hidden-input\" [checked]=\"activePage === 'home'\"><a class=\"menu-link\" href=\"#Home-page\" >Home</a></label>\n    <label><input #what type=\"radio\" name=\"menu\" class=\"menu-hidden-input\" [checked]=\"activePage === 'what'\"><a class=\"menu-link\" href=\"#What-page\">What</a></label>\n    <label><input #how type=\"radio\" name=\"menu\" class=\"menu-hidden-input\" [checked]=\"activePage === 'how'\"><a class=\"menu-link\" href=\"#How-page\">How</a></label>\n    <label><input #why type=\"radio\" name=\"menu\" class=\"menu-hidden-input\" [checked]=\"activePage === 'why'\"><a class=\"menu-link\" href=\"#Why-page\">Why</a></label>\n    <label><input #where type=\"radio\" name=\"menu\" class=\"menu-hidden-input\" [checked]=\"activePage === 'where'\"><a class=\"menu-link\" href=\"#Where-page\">Where</a></label>\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/msa-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsaNav; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MsaNav = (function () {
    function MsaNav(document) {
        this.document = document;
        this.color = 255;
        this.navBackgroundColor = 'rgb(' + this.color + ',' + this.color + ',' + this.color + ')';
        this.darkBorder = true;
        this.navFontColor = 'rgb(0,0,0)';
        this.activePage = 'home';
        this.windowHeight = 0;
        this.halfWindowHeight = 0;
        this.totleHeight = 0;
    }
    MsaNav.prototype.ngOnInit = function () {
        this.windowHeight = window.screen.height;
        this.totleHeight = document.body.scrollHeight;
        this.halfWindowHeight = this.windowHeight / 2;
    };
    MsaNav.prototype.onWindowScroll = function () {
        var number = this.document.body.scrollTop;
        if (number < 255 && number > 0) {
            this.color = 255 - number;
            this.darkBorder = true;
        }
        else if (number >= 255) {
            this.darkBorder = false;
            this.color = 0;
        }
        else {
            this.darkBorder = true;
            this.color = 255;
        }
        this.navBackgroundColor = 'rgb(' + this.color + ',' + this.color + ',' + this.color + ')';
        this.navFontColor = 'rgb(' + (255 - this.color) + ',' + (255 - this.color) + ',' + (255 - this.color) + ')';
        if (number < this.halfWindowHeight) {
            this.activePage = 'home';
        }
        else if (number + (this.pageOneLocation / 2) > (this.pageOneLocation / 2) && number + (this.pageOneLocation / 2) < this.pageTwoLocation) {
            this.activePage = 'what';
        }
        else if (number + (this.pageOneLocation / 2) > this.pageTwoLocation && number + (this.pageOneLocation / 2) < this.pageThreeLocation) {
            this.activePage = 'how';
        }
        else if (number + (this.pageOneLocation / 2) > this.pageThreeLocation && number + (this.pageOneLocation / 2) < this.pageFourLocation) {
            this.activePage = 'why';
        }
        else if (number + (this.pageOneLocation / 2) > this.pageFourLocation) {
            this.activePage = 'where';
        }
    };
    return MsaNav;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], MsaNav.prototype, "pageOneLocation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], MsaNav.prototype, "pageTwoLocation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], MsaNav.prototype, "pageThreeLocation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], MsaNav.prototype, "pageFourLocation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('menu'),
    __metadata("design:type", Object)
], MsaNav.prototype, "menu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('home'),
    __metadata("design:type", Object)
], MsaNav.prototype, "homeMenu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('how'),
    __metadata("design:type", Object)
], MsaNav.prototype, "howMenu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('why'),
    __metadata("design:type", Object)
], MsaNav.prototype, "whyMenu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('where'),
    __metadata("design:type", Object)
], MsaNav.prototype, "whereMenu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('what'),
    __metadata("design:type", Object)
], MsaNav.prototype, "whatMenu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])("window:scroll", []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MsaNav.prototype, "onWindowScroll", null);
MsaNav = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'msa-nav',
        template: __webpack_require__("../../../../../src/app/msa-nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/msa-nav.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DOCUMENT */])),
    __metadata("design:paramtypes", [Object])
], MsaNav);

//# sourceMappingURL=msa-nav.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.prod.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map