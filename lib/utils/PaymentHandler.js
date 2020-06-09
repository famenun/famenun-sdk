"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
exports.API_OPEN_CHAT = "https://apps.famenun.com/openChat";
exports.CURRENCY_INR = "INR";
exports.CURRENCY_USD = "USD";
class Payable {
}
exports.Payable = Payable;
class PaymentHandler {
    constructor(debug) {
        this.debug = debug;
    }
    /**
    * Show prompt to user to make payment
    *
    * @param payable - The object with payment data
    *
    */
    makePayment(payable) {
        return new Promise((resolve, reject) => {
            try {
                if (this.debug) {
                    setTimeout(() => {
                        const num = Math.round(Math.random() * 100);
                        if (num % 2 == 0) {
                            resolve();
                        }
                        else {
                            reject("Failed to make payment");
                        }
                    }, 3000);
                }
                else {
                    jquery_1.default.get(exports.API_OPEN_CHAT, JSON.parse(JSON.stringify(payable))).done((data) => {
                        console.log(JSON.stringify(data));
                        if (!data.error) {
                            resolve();
                        }
                        else {
                            reject(data.message);
                        }
                    }).fail((error) => {
                        console.log(JSON.stringify(error));
                        reject(error);
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
