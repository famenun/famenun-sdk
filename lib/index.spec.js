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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
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
            yield ((_d = api.hookHandler) === null || _d === void 0 ? void 0 : _d.registerHook({
                id: "feeds_hook",
                pa: "./feeds.hook.js",
                do: "feeds"
            }));
            console.log("hook registered");
        }
        catch (error) {
            console.log(error);
        }
        try {
            yield ((_e = api.paymentHandler) === null || _e === void 0 ? void 0 : _e.makePayment({
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
            yield ((_f = api.publishHandler) === null || _f === void 0 ? void 0 : _f.publish({
                "ab": "this is a test broadcast"
            }));
            console.log("broadcast made");
        }
        catch (error) {
            console.log(error);
        }
        try {
            yield ((_g = api.chatroomHandler) === null || _g === void 0 ? void 0 : _g.openChat("Aditya", "Amit"));
            console.log("chat opened");
        }
        catch (error) {
            console.log(error);
        }
        try {
            yield ((_h = api.toastHandler) === null || _h === void 0 ? void 0 : _h.showToast("This is a toast"));
            console.log("Toast made");
        }
        catch (error) {
            console.log(error);
        }
        try {
            yield ((_j = api.databaseHandler) === null || _j === void 0 ? void 0 : _j.insertData({
                key: "first_entry",
                value: "this is a test entry"
            }));
            console.log("Data inserted");
        }
        catch (error) {
            console.log(error);
        }
        try {
            const data = yield ((_k = api.databaseHandler) === null || _k === void 0 ? void 0 : _k.getData("first_entry"));
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
    }));
});
