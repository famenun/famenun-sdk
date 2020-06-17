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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const SDK = __importStar(require("./index"));
const PaymentHandler_1 = require("./handlers/PaymentHandler");
describe("SDK", () => {
    it("initailse SDk", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        const api = SDK.init("app_id", true);
        try {
            const profile = yield ((_a = api.profileHandler) === null || _a === void 0 ? void 0 : _a.getProfile());
            console.log(profile);
        }
        catch (error) {
            console.log(error);
        }
        try {
            yield ((_b = api.profileHandler) === null || _b === void 0 ? void 0 : _b.createShortcut({
                dp: "https://famenun.com/dp.png",
                na: "About me",
                pa: "./aboutme.html?user={uid}"
            }));
            console.log("shortcut created");
        }
        catch (error) {
            console.log(error);
        }
        try {
            const circle = yield ((_c = api.circleHandler) === null || _c === void 0 ? void 0 : _c.getCircle());
            console.log(circle);
        }
        catch (error) {
            console.log(error);
        }
        try {
            yield ((_d = api.paymentHandler) === null || _d === void 0 ? void 0 : _d.makePayment({
                id: "txn_id",
                cu: PaymentHandler_1.CURRENCY_INR,
                am: 21,
                re: "aditya",
                su: "buy shots premium"
            }));
            console.log("payment made");
        }
        catch (error) {
            console.log(error);
        }
        try {
            yield ((_e = api.publishHandler) === null || _e === void 0 ? void 0 : _e.publish(["file://some/file/path"]));
            console.log("broadcast made");
        }
        catch (error) {
            console.log(error);
        }
        try {
            yield ((_f = api.chatroomHandler) === null || _f === void 0 ? void 0 : _f.openChat("Aditya", "Amit"));
            console.log("chat opened");
        }
        catch (error) {
            console.log(error);
        }
        try {
            const apps = yield ((_g = api.appGalaxyHandler) === null || _g === void 0 ? void 0 : _g.getInstalledApps());
            console.log(apps);
        }
        catch (error) {
            console.log(error);
        }
        try {
            yield ((_h = api.appGalaxyHandler) === null || _h === void 0 ? void 0 : _h.openApp("test_app"));
            console.log("app opened");
        }
        catch (error) {
            console.log(error);
        }
        try {
            yield ((_j = api.appGalaxyHandler) === null || _j === void 0 ? void 0 : _j.openAppProfile("test_app"));
            console.log("app profile opened");
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
            yield ((_l = api.databaseHandler) === null || _l === void 0 ? void 0 : _l.insertData({
                key: "first_entry",
                value: "this is a test entry"
            }));
            console.log("Data inserted");
        }
        catch (error) {
            console.log(error);
        }
        try {
            const data = yield ((_m = api.databaseHandler) === null || _m === void 0 ? void 0 : _m.getData("first_entry"));
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
        try {
            yield ((_o = api.linkHandler) === null || _o === void 0 ? void 0 : _o.openLink("https://legal.famenun.com/policies"));
            console.log("link opened");
        }
        catch (error) {
            console.log(error);
        }
        try {
            yield ((_p = api.notificationHandler) === null || _p === void 0 ? void 0 : _p.notify({
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
