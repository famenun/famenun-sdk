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
const PaymentHandler_1 = require("./utils/PaymentHandler");
describe("SDK", () => {
    it("initailse SDk", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f;
        const api = SDK.init("app_id");
        try {
            const profile = yield ((_a = api.profileHandler) === null || _a === void 0 ? void 0 : _a.getProfile());
            console.log(profile);
        }
        catch (error) {
            console.log(error);
        }
        try {
            const circle = yield ((_b = api.circleHandler) === null || _b === void 0 ? void 0 : _b.getCircle());
            console.log(circle);
        }
        catch (error) {
            console.log(error);
        }
        try {
            yield ((_c = api.paymentHandler) === null || _c === void 0 ? void 0 : _c.makePayment("txn_id", PaymentHandler_1.CURRENCY_INR, 21, "aditya"));
            console.log("payment made");
        }
        catch (error) {
            console.log(error);
        }
        try {
            yield ((_d = api.publishHandler) === null || _d === void 0 ? void 0 : _d.publish({
                "ab": "this is a test broadcast"
            }));
            console.log("broadcast made");
        }
        catch (error) {
            console.log(error);
        }
        try {
            yield ((_e = api.chatroomHandler) === null || _e === void 0 ? void 0 : _e.openChat("Aditya", "Amit"));
            console.log("chat opened");
        }
        catch (error) {
            console.log(error);
        }
        try {
            (_f = api.toastHandler) === null || _f === void 0 ? void 0 : _f.showToast("This is a toast");
            console.log("Toast made");
        }
        catch (error) {
            console.log(error);
        }
    }));
});
