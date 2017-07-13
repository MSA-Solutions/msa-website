webpackJsonp([2],{

/***/ "../../../../../src/assets/car-bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "car-bg.6546ba8477219887f4f0.jpg";

/***/ }),

/***/ "../../../../../src/assets/doted-pattren.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAABdJREFUGBljYKA9SEtLk6S9LaTZgO4mAObKApcVvk87AAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../../../../src/assets/map-kcmo.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "map-kcmo.a82491aac9bf3c12517b.png";

/***/ }),

/***/ "../../../../../src/assets/wp-bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "wp-bg.1ff0469591361e4d0a2c.jpg";

/***/ }),

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body, html {\n  font-family: Arial;\n  height: 100%;\n  padding: 0px;\n  margin: 0px;\n}\n\n.body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n}\np{\n\n  line-height: 150%;\n}\n\nh2 {\n  text-align: center;\n  font-size: 250%;\n  padding: 30px 0 10px 0;\n  margin: 0;\n}\n\nh3 {\n  text-align: center;\n  font-size: 190%;\n  padding: 5px 0 10px 0;\n  margin: 0;\n  font-weight: lighter;\n}\n\nh4 {\n  text-align: center;\n  font-size: 150%;\n  padding: 5px 0 10px 0;\n  margin: 0;\n  font-weight: bold;\n}\n\nh5 {\n  font-size: 100%;\n  font-weight: bold;\n  margin: 15px 0;\n}\n\n.msa-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: #0b0b0b;\n  min-height: 100px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.content-footer {\n  -webkit-box-flex:1;\n      -ms-flex:1;\n          flex:1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 20px 30px;\n  color: #FFFFFF;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.content-footer p{\n  text-align: center;\n}\n\nvideo {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  z-index: -100;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%);\n  background-size: cover;\n  transition: 1s opacity;\n}\n\nsection {\n  width: 100%;\n  min-height: 100%;\n  background-color: white;\n  border-bottom: 1px solid #e2e2e2;\n  font-size: 1.3em;\n}\n\nsection > div {\n  padding: 4em 8em;\n}\n\n.two-columns {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 85%;\n  margin-top: 50px;\n}\n\n.two-columns > div {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0 2em;\n}\n\n.msa-input {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.msa-input label {\n  float: left;\n  padding-bottom: 10px;\n}\n\n.msa-input input, .msa-input textarea {\n  border: 1px solid #b3b3b3;\n  border-radius: 4px;\n  line-height: 35px;\n  font-size: 1.1em;\n  padding: 2px 5px;\n}\n\n.msa-input textarea {\n  resize: none;\n}\n\n.x-1 {\n  width: 10%;\n}\n\n.x-2 {\n  width: 20%;\n}\n\n.x-3 {\n  width: 30%;\n}\n\n.x-4 {\n  width: 40%;\n}\n\n.x-5 {\n  width: 50%;\n}\n\n.x-6 {\n  width: 60%;\n}\n\n.x-7 {\n  width: 70%;\n}\n\n.x-8 {\n  width: 80%;\n}\n\n.x-9 {\n  width: 90%;\n}\n\n.x-10 {\n  width: 100%;\n}\n\n.darkGray {\n  background-color: #e9e9e9;\n}\n\n.lightGray {\n  background-color: #efefef;\n}\n\n.msa-send-btn {\n  border: 1px solid #0b0b0b;\n  padding: 10px 20px;\n  font-size: 1em;\n  background-color: #0b0b0b;\n  color: #FFFFFF;\n  font-weight: bold;\n  float: right;\n  cursor: pointer; /* Safari */\n  transition: background-color 2s, border 2s, color 2s;\n}\n\n.map-img {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/map-kcmo.png") + ");\n  background-repeat: no-repeat;\n  background-size: 100% auto;\n  height: 200px;\n}\n\n.where-section {\n  background-color: #f9f9f9;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/doted-pattren.png") + ");\n  background-repeat: repeat;\n}\n\n.what-images {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding-top: 40px;\n  padding-bottom: 20px;\n}\n\n.what-images div {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  text-align: center;\n  color: #525252;\n}\n\n.cite {\n  padding-left: 180px;\n  padding-right: 75px;\n  position: relative;\n  font-style: italic;\n  font-size: 95%;\n  color: #6d6d6d;\n  font-family: Tahoma;\n}\n\n.cite:before {\n  content: \"\";\n  border-left: 4px solid #919191;\n  position: absolute;\n  left: 150px;\n  top: 0px;\n  height: 100%;\n}\n\n.cio-cite:after {\n  font-family: Arial;\n  content: \"Mohammed Abdelrahman, MSA CEO, 2017\";\n  position: absolute;\n  left: 50px;\n  top: 0px;\n  height: 100%;\n  font-size: 73%;\n  width: 80px;\n\n}\n\n.sub-section {\n  background-color: #0b0b0b;\n  color: #e2e2e2;\n}\n\n.doted-bg {\n  position: relative;\n}\n\n.doted-bg::before {\n  content: \"\";\n  background-image: url(" + __webpack_require__("../../../../../src/assets/car-bg.jpg") + ");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 100% auto;\n  opacity: 0.25;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  position: absolute;\n}\n\n.wp-bg {\n  position: relative;\n}\n\n.wp-bg::before {\n  content: \"\";\n  background-image: url(" + __webpack_require__("../../../../../src/assets/wp-bg.jpg") + ");\n  background-repeat: no-repeat;\n  background-position: center top;\n  opacity: 0.25;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  position: absolute;\n}\n\n.center-text {\n  text-align: center;\n}\n\n.services-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.services-container > div {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.service-item {\n  margin: 30px 20px;\n  font-size: 80%;\n  line-height: 175%;\n}\n\n.service-item > div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.service-item > div label {\n  font-family: Tahoma;\n  font-size: 1.3em;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding-left: 20px;\n}\n\n.label-with-icon{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding-top: 20px;\n\n}\n\n.label-with-icon > img{\n  margin-right: 20px;\n\n}\n\n.label-with-icon > h5{\n  font-size: 150%;\n}\n\n.location-info{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 60px;\n}\n\n.location-info label{\n padding-bottom: 10px;\n  font-size: 90%;\n}\n\n.social-list{\n  -webkit-box-flex:1;\n      -ms-flex:1;\n          flex:1;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  text-align: right;\n  padding-right: 30px;\n}\n\n.social-list img{\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\nbutton:disabled,\nbutton[disabled]{\n  border: 3px solid #0b0b0b;\n  padding: 10px 20px;\n  font-size: 1em;\n  background-color: #ffffff;\n  color: #0b0b0b;\n  font-weight: bold;\n  float: right;\n}\n\n.message-sent{\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n\n.message-sent label{\n  font-size: 130%;\n  font-weight: bold;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.message-sent p{\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.message-sent > div{\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n@media only screen and (max-width: 375px) {\n\n  html,body,section{\n  }\n\n  video {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    min-width: 100%;\n    min-height: 100%;\n    width: auto;\n    height: auto;\n    z-index: -100;\n    -webkit-transform: translateX(-50%) translateY(-50%);\n            transform: translateX(-50%) translateY(-50%);\n    background-size: cover;\n    transition: 1s opacity;\n  }\n\n  .what-images{\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n\n  section > div {\n    padding: 2em 2em 4em 2em;\n  }\n\n  .cite {\n    padding-left: 0px;\n    padding-right: 0px;\n    position: relative;\n    font-style: italic;\n    font-size: 95%;\n    color: #6d6d6d;\n    font-family: Tahoma;\n  }\n\n  .cite:before {\n    content: \"\";\n    border-left: 4px solid #919191;\n    position: absolute;\n    left: -20px;\n    top: 0px;\n    height: 100%;\n  }\n\n  .cio-cite:after {\n    font-family: Arial;\n    content: \"Mohammed Abdelrahman, MSA CEO, 2017\";\n    position: absolute;\n    left: 0px;\n    top: 100%;\n    bottom: 0px;\n    height: 100%;\n    font-size: 73%;\n    width: 100%;\n\n  }\n  .doted-bg::before {\n    background-size:auto 100% ;\n  }\n\n  .services-container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n\n  .service-item {\n    margin: 20px 0 0 0;\n    font-size: 80%;\n    line-height: 175%;\n  }\n  .service-item p {\n    padding: 15px 0 0 0;\n    margin: 0 0 0 0;\n  }\n\n  .service-item > div label {\n    font-family: Tahoma;\n    font-size: 1.5em;\n    font-weight: bold;\n    text-transform: uppercase;\n    padding-left: 20px;\n  }\n\n  .service-item img{\n    min-height: 75px;\n    min-width: 75px;\n  }\n\n  .two-columns {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n\n  .two-columns > div{\n    padding: 20px 0;\n\n  }\n  .where-section{\n    padding: 40px 0;\n  }\n  .where-section div{\n    padding: 0;\n    width: 100%;\n  }\n\n  .where-section h4{\n    padding-top: 20px;\n    margin-top: 20px;\n    border-top: 1px solid #525252;\n  }\n\n  .where-section div label{\n    padding: 10px 20px;\n    font-size: 100%;\n  }\n  .label-with-icon img{\n    min-width: 60px;\n    min-height: 60px;\n    margin: 20px 20px;\n  }\n\n  .label-with-icon h5{\n    font-size: 2em;\n  }\n\n  .label-with-icon{\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  form{\n    padding: 0 30px;\n  }\n\n  .msa-input input, .msa-input textarea{\n    padding-right: 0;\n    padding-left: 0;\n  }\n\n  .footer{\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n\n  .content-footer{\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n\n  .social-list{\n    padding: 20px 0 0 0;\n    width: 100%;\n    text-align: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n}\n\n@media only screen and (max-width: 414px) {\n\n  html,body,section{\n  }\n\n  video {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    min-width: 100%;\n    min-height: 100%;\n    width: auto;\n    height: auto;\n    z-index: -100;\n    -webkit-transform: translateX(-50%) translateY(-50%);\n            transform: translateX(-50%) translateY(-50%);\n    background-size: cover;\n    transition: 1s opacity;\n  }\n\n  .what-images{\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n\n  section > div {\n    padding: 2em 2em 4em 2em;\n  }\n\n  .cite {\n    padding-left: 0px;\n    padding-right: 0px;\n    position: relative;\n    font-style: italic;\n    font-size: 95%;\n    color: #6d6d6d;\n    font-family: Tahoma;\n  }\n\n  .cite:before {\n    content: \"\";\n    border-left: 4px solid #919191;\n    position: absolute;\n    left: -20px;\n    top: 0px;\n    height: 100%;\n  }\n\n  .cio-cite:after {\n    font-family: Arial;\n    content: \"Mohammed Abdelrahman, MSA CEO, 2017\";\n    position: absolute;\n    left: 0px;\n    top: 100%;\n    bottom: 0px;\n    height: 100%;\n    font-size: 73%;\n    width: 100%;\n\n  }\n  .doted-bg::before {\n    background-size:auto 100% ;\n  }\n\n  .services-container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n\n  .service-item {\n    margin: 20px 0 0 0;\n    font-size: 80%;\n    line-height: 175%;\n  }\n  .service-item p {\n    padding: 15px 0 0 0;\n    margin: 0 0 0 0;\n  }\n\n  .service-item > div label {\n    font-family: Tahoma;\n    font-size: 1.5em;\n    font-weight: bold;\n    text-transform: uppercase;\n    padding-left: 20px;\n  }\n\n  .service-item img{\n    min-height: 75px;\n    min-width: 75px;\n  }\n\n  .two-columns {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n\n  .two-columns > div{\n    padding: 20px 0;\n\n  }\n  .where-section{\n    padding: 40px 0;\n  }\n  .where-section div{\n    padding: 0;\n    width: 100%;\n  }\n\n  .where-section h4{\n    padding-top: 20px;\n    margin-top: 20px;\n    border-top: 1px solid #525252;\n  }\n\n  .where-section div label{\n    padding: 10px 20px;\n    font-size: 100%;\n  }\n  .label-with-icon img{\n    min-width: 60px;\n    min-height: 60px;\n    margin: 20px 20px;\n  }\n\n  .label-with-icon h5{\n    font-size: 2em;\n  }\n\n  .label-with-icon{\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  form{\n    padding: 0 30px;\n  }\n\n  .msa-input input, .msa-input textarea{\n    padding-right: 0;\n    padding-left: 0;\n  }\n\n  .footer{\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n\n  .content-footer{\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n\n  .social-list{\n    padding: 20px 0 0 0;\n    width: 100%;\n    text-align: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n\n}\n\n@media only screen and (max-width: 667px) {\n\n  .two-columns {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n\n  .two-columns > div{\n    width: 100%;\n  }\n\n  .services-container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n\n  section > div {\n    padding: 4em 2em 4em 2em;\n  }\n\n  .footer{\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n\n  .content-footer{\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n\n  .social-list{\n    padding: 20px 0 0 0;\n    width: 100%;\n    text-align: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n\n  .map-img{\n    background-position: center;\n  }\n\n}\n\n@media only screen and (max-width: 736px) {\n\n  .two-columns {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n\n  .two-columns > div{\n    width: 100%;\n  }\n\n  .services-container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n\n  section > div {\n    padding: 4em 2em 4em 2em;\n  }\n\n  .footer{\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n\n  .content-footer{\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n\n  .social-list{\n    padding: 20px 0 0 0;\n    width: 100%;\n    text-align: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n\n  .map-img{\n    background-position: center;\n  }\n\n}\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map