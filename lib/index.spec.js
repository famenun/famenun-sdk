"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const SDK = __importStar(require("./index"));
const PaymentsHandler_1 = require("./handlers/PaymentsHandler");
describe("SDK", () => {
    it("initailse SDk", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const api = SDK.init(true);
        try {
            const profile = yield ((_a = api.profileHandler) === null || _a === void 0 ? void 0 : _a.getProfile());
            console.log(profile);
        }
        catch (error) {
            console.log(error);
        }
        try {
            yield ((_b = api.profileHandler) === null || _b === void 0 ? void 0 : _b.createShortcut({
                id: "shortcut_id",
                icon: "https://famenun.com/dp.png",
                title: "About me",
                info: "Click to know more about me",
                path: "./aboutme.html?user={uid}"
            }));
            console.log("shortcut created");
        }
        catch (error) {
            console.log(error);
        }
        try {
            const data = yield ((_c = api.profileHandler) === null || _c === void 0 ? void 0 : _c.getEmailAccessToken());
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
        try {
            const data = yield ((_d = api.profileHandler) === null || _d === void 0 ? void 0 : _d.getPhoneNumberAccessToken());
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
        try {
            const circle = yield ((_e = api.clubsHandler) === null || _e === void 0 ? void 0 : _e.getClub());
            console.log(circle);
        }
        catch (error) {
            console.log(error);
        }
        try {
            yield ((_f = api.paymentsHandler) === null || _f === void 0 ? void 0 : _f.makePayment({
                referenceId: "txn_id",
                currency: PaymentsHandler_1.CURRENCY_INR,
                amount: 21,
                to: "aditya",
                note: "buy shots premium"
            }));
            console.log("payment made");
        }
        catch (error) {
            console.log(error);
        }
        try {
            yield ((_g = api.broadcastHandler) === null || _g === void 0 ? void 0 : _g.broadcast({
                files: ["file://some/file/path"]
            }));
            console.log("broadcast made");
        }
        catch (error) {
            console.log(error);
        }
        try {
            yield ((_h = api.chatroomsHandler) === null || _h === void 0 ? void 0 : _h.openChat(["Aditya", "Amit"]));
            console.log("chat opened");
        }
        catch (error) {
            console.log(error);
        }
        try {
            yield ((_j = api.appGalaxyHandler) === null || _j === void 0 ? void 0 : _j.openApp({
                appId: "test_app"
            }));
            console.log("app opened");
        }
        catch (error) {
            console.log(error);
        }
        try {
            yield ((_k = api.toastHandler) === null || _k === void 0 ? void 0 : _k.showToast("This is a toast"));
            console.log("Toast made");
        }
        catch (error) {
            console.log(error);
        }
        try {
            yield ((_l = api.linksHandler) === null || _l === void 0 ? void 0 : _l.openLink("https://legal.famenun.com/policies"));
            console.log("link opened");
        }
        catch (error) {
            console.log(error);
        }
        try {
            const link = yield ((_m = api.linksHandler) === null || _m === void 0 ? void 0 : _m.createDeepLink({
                path: "./index.html?user=user_uid"
            }));
            console.log("link : " + link);
        }
        catch (error) {
            console.log(error);
        }
        try {
            yield ((_o = api.notificationsHandler) === null || _o === void 0 ? void 0 : _o.notify({
                title: "this is notification title",
                image: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401"
            }));
            console.log("notified");
        }
        catch (error) {
            console.log(error);
        }
    }));
});
