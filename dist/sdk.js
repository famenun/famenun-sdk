/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ProfileHandler_1 = __webpack_require__(1);
const ToastHandler_1 = __webpack_require__(4);
const CircleHandler_1 = __webpack_require__(5);
const PaymentHandler_1 = __webpack_require__(6);
const PublishHandler_1 = __webpack_require__(7);
const ChatroomHandler_1 = __webpack_require__(8);
const DatabaseHandler_1 = __webpack_require__(9);
const LinkHandler_1 = __webpack_require__(10);
const AppGalaxyHandler_1 = __webpack_require__(11);
const NotificationHandler_1 = __webpack_require__(12);
const RequestHandler_1 = __webpack_require__(2);
class Emitable {
}
exports.Emitable = Emitable;
class FamenunApi {
}
exports.FamenunApi = FamenunApi;
exports.init = (id, debug) => {
    const requestHandler = new RequestHandler_1.RequestHandler(debug);
    return {
        appId: id,
        debug: debug,
        profileHandler: new ProfileHandler_1.ProfileHandler(requestHandler),
        circleHandler: new CircleHandler_1.CircleHandler(requestHandler),
        paymentHandler: new PaymentHandler_1.PaymentHandler(requestHandler),
        publishHandler: new PublishHandler_1.PublishHandler(requestHandler),
        chatroomHandler: new ChatroomHandler_1.ChatroomHandler(requestHandler),
        appGalaxyHandler: new AppGalaxyHandler_1.AppGalaxyHandler(requestHandler),
        toastHandler: new ToastHandler_1.ToastHandler(requestHandler),
        databaseHandler: new DatabaseHandler_1.DatabaseHandler(requestHandler),
        linkHandler: new LinkHandler_1.LinkHandler(requestHandler),
        notificationHandler: new NotificationHandler_1.NotificationHandler(requestHandler)
    };
};
(function () {
    try {
        var win = window;
        win.__famenun__ = {
            init: exports.init,
            emit: (emitable) => {
                console.log(JSON.stringify(emitable));
            },
            registerHook: (code) => {
                var script = document.createElement("script");
                script.innerHTML = decodeURIComponent(code);
                document.body.append(script);
            }
        };
    }
    catch (e) { }
})();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const RequestHandler_1 = __webpack_require__(2);
const Utility_1 = __webpack_require__(3);
class ProfileShortcut {
}
exports.ProfileShortcut = ProfileShortcut;
class ProfileHandler {
    constructor(requestHandler) {
        this.requestHandler = requestHandler;
    }
    /**
    * Get currently logged in user's Profile.
    */
    getProfile() {
        return new Promise((resolve, reject) => {
            var _a, _b;
            try {
                if ((_a = this.requestHandler) === null || _a === void 0 ? void 0 : _a.debug) {
                    resolve({
                        "id": "user_uid",
                        "dp": "user_dp",
                        "na": "user name"
                    });
                }
                else {
                    (_b = this.requestHandler) === null || _b === void 0 ? void 0 : _b.request({
                        id: "request_id",
                        api: RequestHandler_1.API_GET_PROFILE
                    }, {
                        onComplete(requestable) {
                            if (!requestable.error) {
                                resolve(requestable.data);
                            }
                            else {
                                reject(requestable.message);
                            }
                        }
                    });
                }
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
    * Create shortcut in profile
    */
    createShortcut(profileShortcut) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                if ((_a = this.requestHandler) === null || _a === void 0 ? void 0 : _a.debug) {
                    resolve();
                }
                else {
                    profileShortcut.dp = yield Utility_1.blobUrlToBase64(profileShortcut.dp);
                    (_b = this.requestHandler) === null || _b === void 0 ? void 0 : _b.request({
                        id: "request_id",
                        api: RequestHandler_1.API_CREATE_SHORTCUT,
                        data: profileShortcut
                    }, {
                        onComplete(requestable) {
                            if (!requestable.error) {
                                resolve();
                            }
                            else {
                                reject(requestable.message);
                            }
                        }
                    });
                }
            }
            catch (error) {
                reject(error);
            }
        }));
    }
}
exports.ProfileHandler = ProfileHandler;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.API_GET_PROFILE = "API_GET_PROFILE";
exports.API_CREATE_SHORTCUT = "API_CREATE_SHORTCUT";
exports.API_GET_CIRCLE = "API_GET_CIRCLE";
exports.API_MAKE_PAYMENT = "API_MAKE_PAYMENT";
exports.API_PUBLISH = "API_PUBLISH";
exports.API_OPEN_CHAT = "API_OPEN_CHAT";
exports.API_GET_INSTALLED_APPS = "API_GET_INSTALLED_APPS";
exports.API_OPEN_APP = "API_OPEN_APP";
exports.API_OPEN_APP_PROFILE = "API_OPEN_APP_PROFILE";
exports.API_SHOW_TOAST = "API_SHOW_TOAST";
exports.API_INSERT_DATA = "API_INSERT_DATA";
exports.API_GET_DATA = "API_GET_DATA";
exports.API_OPEN_LINK = "API_OPEN_LINK";
exports.API_NOTIFY = "API_NOTIFY";
const API_GET_PROFILE_RESPONSE = "API_GET_PROFILE_RESPONSE";
const API_CREATE_SHORTCUT_RESPONSE = "API_CREATE_SHORTCUT_RESPONSE";
const API_GET_CIRCLE_RESPONSE = "API_GET_CIRCLE_RESPONSE";
const API_MAKE_PAYMENT_RESPONSE = "API_MAKE_PAYMENT_RESPONSE";
const API_PUBLISH_RESPONSE = "API_PUBLISH_RESPONSE";
const API_OPEN_CHAT_RESPONSE = "API_OPEN_CHAT_RESPONSE";
const API_GET_INSTALLED_APPS_RESPONSE = "API_GET_INSTALLED_APPS_RESPONSE";
const API_OPEN_APP_RESPONSE = "API_OPEN_APP_RESPONSE";
const API_OPEN_APP_PROFILE_RESPONSE = "API_OPEN_APP_PROFILE_RESPONSE";
const API_SHOW_TOAST_RESPONSE = "API_SHOW_TOAST_RESPONSE";
const API_INSERT_DATA_RESPONSE = "API_INSERT_DATA_RESPONSE";
const API_GET_DATA_RESPONSE = "API_GET_DATA_RESPONSE";
const API_OPEN_LINK_RESPONSE = "API_OPEN_LINK_RESPONSE";
const API_NOTIFY_RESPONSE = "API_NOTIFY_RESPONSE";
class Requestable {
}
exports.Requestable = Requestable;
class RequestHandler {
    constructor(debug) {
        this.debug = debug;
        this.listeners = new Map();
        this.initConsole(this, console);
    }
    initConsole(self, console) {
        console._f_log_ = console.log.bind(console);
        console._f_logs_ = [];
        console.log = function () {
            console._f_logs_.push(Array.from(arguments));
            console._f_log_.apply(console, arguments);
            const log = console._f_logs_[console._f_logs_.length - 1];
            try {
                const requestable = JSON.parse(log);
                if (requestable.id !== undefined &&
                    requestable.id !== null &&
                    requestable.api !== undefined &&
                    requestable.api !== null) {
                    switch (requestable.api) {
                        case API_GET_PROFILE_RESPONSE:
                        case API_CREATE_SHORTCUT_RESPONSE:
                        case API_GET_CIRCLE_RESPONSE:
                        case API_MAKE_PAYMENT_RESPONSE:
                        case API_PUBLISH_RESPONSE:
                        case API_OPEN_CHAT_RESPONSE:
                        case API_GET_INSTALLED_APPS_RESPONSE:
                        case API_OPEN_APP_RESPONSE:
                        case API_OPEN_APP_PROFILE_RESPONSE:
                        case API_SHOW_TOAST_RESPONSE:
                        case API_INSERT_DATA_RESPONSE:
                        case API_GET_DATA_RESPONSE:
                        case API_OPEN_LINK_RESPONSE:
                        case API_NOTIFY_RESPONSE:
                            if (self.listeners.get(requestable.id) !== undefined) {
                                self.listeners.get(requestable.id).onComplete(requestable);
                            }
                            break;
                    }
                }
            }
            catch (error) { }
        };
    }
    request(requestable, onRequestCompleteListener) {
        if (onRequestCompleteListener !== undefined) {
            this.listeners.set(requestable.id, onRequestCompleteListener);
        }
        console.log(JSON.stringify(requestable));
    }
}
exports.RequestHandler = RequestHandler;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.mapFromObject = (object) => {
    const map = new Map();
    if (object !== undefined) {
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                map.set(key, object[key]);
            }
            ;
        }
    }
    return map;
};
exports.objectFromMap = (map) => {
    const object = {};
    map.forEach((value, key) => {
        object[key] = value;
    });
    return object;
};
exports.blobUrlToBase64 = (blobUrl) => {
    return new Promise((resolve, reject) => {
        try {
            const request = new XMLHttpRequest();
            request.open('GET', blobUrl, true);
            request.responseType = 'blob';
            request.onload = function () {
                const reader = new FileReader();
                reader.readAsDataURL(request.response);
                reader.onerror = (error) => {
                    reject(error);
                };
                reader.onload = (event) => {
                    resolve(event.target.result);
                };
            };
            request.send();
        }
        catch (error) {
            reject(error);
        }
    });
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const RequestHandler_1 = __webpack_require__(2);
class ToastHandler {
    constructor(requestHandler) {
        this.requestHandler = requestHandler;
    }
    /**
    * Show a small toast message to user.
    *
    * @param message - The message you want to show to the user
    *
    */
    showToast(message) {
        return new Promise((resolve, reject) => {
            var _a, _b;
            try {
                if ((_a = this.requestHandler) === null || _a === void 0 ? void 0 : _a.debug) {
                    resolve();
                }
                else {
                    (_b = this.requestHandler) === null || _b === void 0 ? void 0 : _b.request({
                        id: "request_id",
                        api: RequestHandler_1.API_SHOW_TOAST,
                        data: {
                            message: message
                        }
                    }, {
                        onComplete(requestable) {
                            if (!requestable.error) {
                                resolve();
                            }
                            else {
                                reject(requestable.message);
                            }
                        }
                    });
                }
            }
            catch (error) {
                reject(error);
            }
        });
    }
}
exports.ToastHandler = ToastHandler;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const RequestHandler_1 = __webpack_require__(2);
class CircleHandler {
    constructor(requestHandler) {
        this.requestHandler = requestHandler;
    }
    /**
    * Show prompt to user to get his circle
    */
    getCircle() {
        return new Promise((resolve, reject) => {
            var _a, _b;
            try {
                if ((_a = this.requestHandler) === null || _a === void 0 ? void 0 : _a.debug) {
                    resolve([
                        "friend_uid_01",
                        "friend_uid_02"
                    ]);
                }
                else {
                    (_b = this.requestHandler) === null || _b === void 0 ? void 0 : _b.request({
                        id: "request_id",
                        api: RequestHandler_1.API_GET_CIRCLE
                    }, {
                        onComplete(requestable) {
                            if (!requestable.error) {
                                resolve(requestable.data);
                            }
                            else {
                                reject(requestable.message);
                            }
                        }
                    });
                }
            }
            catch (error) {
                reject(error);
            }
        });
    }
}
exports.CircleHandler = CircleHandler;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const RequestHandler_1 = __webpack_require__(2);
exports.CURRENCY_INR = "INR";
exports.CURRENCY_USD = "USD";
class Payable {
}
exports.Payable = Payable;
class PaymentHandler {
    constructor(requestHandler) {
        this.requestHandler = requestHandler;
    }
    /**
    * Show prompt to user to make payment
    *
    * @param payable - The object with payment data
    *
    */
    makePayment(payable) {
        return new Promise((resolve, reject) => {
            var _a, _b;
            try {
                if ((_a = this.requestHandler) === null || _a === void 0 ? void 0 : _a.debug) {
                    resolve();
                }
                else {
                    (_b = this.requestHandler) === null || _b === void 0 ? void 0 : _b.request({
                        id: "request_id",
                        api: RequestHandler_1.API_MAKE_PAYMENT,
                        data: payable
                    }, {
                        onComplete(requestable) {
                            if (!requestable.error) {
                                resolve();
                            }
                            else {
                                reject(requestable.message);
                            }
                        }
                    });
                }
            }
            catch (error) {
                reject(error);
            }
        });
    }
}
exports.PaymentHandler = PaymentHandler;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const RequestHandler_1 = __webpack_require__(2);
const Utility_1 = __webpack_require__(3);
class PublishHandler {
    constructor(requestHandler) {
        this.requestHandler = requestHandler;
    }
    /**
    * Prompt user to publish broadcast
    *
    * @param files - files to be published
    *
    */
    publish(files) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                if ((_a = this.requestHandler) === null || _a === void 0 ? void 0 : _a.debug) {
                    resolve();
                }
                else {
                    const promises = new Array();
                    for (const file of files) {
                        promises.push(Utility_1.blobUrlToBase64(file));
                    }
                    const result = yield Promise.all(promises);
                    (_b = this.requestHandler) === null || _b === void 0 ? void 0 : _b.request({
                        id: "request_id",
                        api: RequestHandler_1.API_PUBLISH,
                        data: {
                            files: result
                        }
                    }, {
                        onComplete(requestable) {
                            if (!requestable.error) {
                                resolve();
                            }
                            else {
                                reject(requestable.message);
                            }
                        }
                    });
                }
            }
            catch (error) {
                reject(error);
            }
        }));
    }
}
exports.PublishHandler = PublishHandler;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const RequestHandler_1 = __webpack_require__(2);
class ChatroomHandler {
    constructor(requestHandler) {
        this.requestHandler = requestHandler;
    }
    /**
    * Open Famenun chat with @param users
    *
    * @param users - The people with whom you want to open chat
    *
    */
    openChat(...users) {
        return new Promise((resolve, reject) => {
            var _a, _b;
            try {
                if ((_a = this.requestHandler) === null || _a === void 0 ? void 0 : _a.debug) {
                    resolve();
                }
                else {
                    (_b = this.requestHandler) === null || _b === void 0 ? void 0 : _b.request({
                        id: "request_id",
                        api: RequestHandler_1.API_OPEN_CHAT,
                        data: users
                    }, {
                        onComplete(requestable) {
                            if (!requestable.error) {
                                resolve();
                            }
                            else {
                                reject(requestable.message);
                            }
                        }
                    });
                }
            }
            catch (error) {
                reject(error);
            }
        });
    }
}
exports.ChatroomHandler = ChatroomHandler;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const RequestHandler_1 = __webpack_require__(2);
class Insertable {
}
exports.Insertable = Insertable;
class DatabaseHandler {
    constructor(requestHandler) {
        this.requestHandler = requestHandler;
    }
    /**
    * Insert data into database
    *
    * @param insertable - object having data to be saved
    *
    */
    insertData(insertable) {
        return new Promise((resolve, reject) => {
            var _a, _b;
            try {
                if ((_a = this.requestHandler) === null || _a === void 0 ? void 0 : _a.debug) {
                    resolve();
                }
                else {
                    (_b = this.requestHandler) === null || _b === void 0 ? void 0 : _b.request({
                        id: "request_id",
                        api: RequestHandler_1.API_INSERT_DATA,
                        data: insertable
                    }, {
                        onComplete(requestable) {
                            if (!requestable.error) {
                                resolve();
                            }
                            else {
                                reject(requestable.message);
                            }
                        }
                    });
                }
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
    * Get data from database
    *
    * @param key - unique identifier of the data being inserted earlier
    *
    */
    getData(key) {
        return new Promise((resolve, reject) => {
            var _a, _b;
            try {
                if ((_a = this.requestHandler) === null || _a === void 0 ? void 0 : _a.debug) {
                    resolve(`value of the key : ${key}`);
                }
                else {
                    (_b = this.requestHandler) === null || _b === void 0 ? void 0 : _b.request({
                        id: "request_id",
                        api: RequestHandler_1.API_GET_DATA,
                        data: {
                            key: key
                        }
                    }, {
                        onComplete(requestable) {
                            if (!requestable.error) {
                                resolve(requestable.data);
                            }
                            else {
                                reject(requestable.message);
                            }
                        }
                    });
                }
            }
            catch (error) {
                reject(error);
            }
        });
    }
}
exports.DatabaseHandler = DatabaseHandler;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const RequestHandler_1 = __webpack_require__(2);
class LinkHandler {
    constructor(requestHandler) {
        this.requestHandler = requestHandler;
    }
    /**
    * Open link in browser
    *
    * @param link - the link to be opened
    *
    */
    openLink(link) {
        return new Promise((resolve, reject) => {
            var _a, _b;
            try {
                if ((_a = this.requestHandler) === null || _a === void 0 ? void 0 : _a.debug) {
                    resolve();
                }
                else {
                    (_b = this.requestHandler) === null || _b === void 0 ? void 0 : _b.request({
                        id: "request_id",
                        api: RequestHandler_1.API_OPEN_LINK,
                        data: {
                            link: link
                        }
                    }, {
                        onComplete(requestable) {
                            if (!requestable.error) {
                                resolve();
                            }
                            else {
                                reject(requestable.message);
                            }
                        }
                    });
                }
            }
            catch (error) {
                reject(error);
            }
        });
    }
}
exports.LinkHandler = LinkHandler;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const RequestHandler_1 = __webpack_require__(2);
class AppGalaxyHandler {
    constructor(requestHandler) {
        this.requestHandler = requestHandler;
    }
    /**
    * Get All Installed Apps of the user
    */
    getInstalledApps() {
        return new Promise((resolve, reject) => {
            var _a, _b;
            try {
                if ((_a = this.requestHandler) === null || _a === void 0 ? void 0 : _a.debug) {
                    resolve([
                        {
                            "id": "com.example.app",
                            "version": "1.0.0",
                            "name": "Test App",
                        }
                    ]);
                }
                else {
                    (_b = this.requestHandler) === null || _b === void 0 ? void 0 : _b.request({
                        id: "request_id",
                        api: RequestHandler_1.API_GET_INSTALLED_APPS
                    }, {
                        onComplete(requestable) {
                            if (!requestable.error) {
                                resolve(requestable.data);
                            }
                            else {
                                reject(requestable.message);
                            }
                        }
                    });
                }
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
    * Open app
    * @param app is the id of the app to be opened
    */
    openApp(app) {
        return new Promise((resolve, reject) => {
            var _a, _b;
            try {
                if ((_a = this.requestHandler) === null || _a === void 0 ? void 0 : _a.debug) {
                    resolve();
                }
                else {
                    (_b = this.requestHandler) === null || _b === void 0 ? void 0 : _b.request({
                        id: "request_id",
                        api: RequestHandler_1.API_OPEN_APP,
                        data: {
                            app: app
                        }
                    }, {
                        onComplete(requestable) {
                            if (!requestable.error) {
                                resolve();
                            }
                            else {
                                reject(requestable.message);
                            }
                        }
                    });
                }
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
    * Open app profile in app galaxy
    * @param app is the id of the app
    */
    openAppProfile(app) {
        return new Promise((resolve, reject) => {
            var _a, _b;
            try {
                if ((_a = this.requestHandler) === null || _a === void 0 ? void 0 : _a.debug) {
                    resolve();
                }
                else {
                    (_b = this.requestHandler) === null || _b === void 0 ? void 0 : _b.request({
                        id: "request_id",
                        api: RequestHandler_1.API_OPEN_APP_PROFILE,
                        data: {
                            app: app
                        }
                    }, {
                        onComplete(requestable) {
                            if (!requestable.error) {
                                resolve();
                            }
                            else {
                                reject(requestable.message);
                            }
                        }
                    });
                }
            }
            catch (error) {
                reject(error);
            }
        });
    }
}
exports.AppGalaxyHandler = AppGalaxyHandler;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const RequestHandler_1 = __webpack_require__(2);
class Notifiable {
}
exports.Notifiable = Notifiable;
class NotificationHandler {
    constructor(requestHandler) {
        this.requestHandler = requestHandler;
    }
    /**
    * Open link in browser
    *
    * @param notifiable - object containing notification data
    *
    */
    notify(notifiable) {
        return new Promise((resolve, reject) => {
            var _a, _b;
            try {
                if ((_a = this.requestHandler) === null || _a === void 0 ? void 0 : _a.debug) {
                    resolve();
                }
                else {
                    (_b = this.requestHandler) === null || _b === void 0 ? void 0 : _b.request({
                        id: "request_id",
                        api: RequestHandler_1.API_NOTIFY,
                        data: notifiable
                    }, {
                        onComplete(requestable) {
                            if (!requestable.error) {
                                resolve();
                            }
                            else {
                                reject(requestable.message);
                            }
                        }
                    });
                }
            }
            catch (error) {
                reject(error);
            }
        });
    }
}
exports.NotificationHandler = NotificationHandler;


/***/ })
/******/ ]);