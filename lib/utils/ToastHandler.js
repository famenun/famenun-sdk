"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
exports.API_TOAST = "https://apps.famenun.com/showToast";
class ToastHandler {
    constructor(debug) {
        this.debug = debug;
    }
    /**
    * Show a small toast message to user.
    *
    * @param message - The message you want to show to the user
    *
    */
    showToast(message) {
        return new Promise((resolve, reject) => {
            try {
                if (this.debug) {
                    setTimeout(() => {
                        const num = Math.round(Math.random() * 100);
                        if (num % 2 == 0) {
                            resolve();
                        }
                        else {
                            reject("Failed to show toast");
                        }
                    }, 3000);
                }
                else {
                    jquery_1.default.get(exports.API_TOAST, { "message": message }).done((data) => {
                        console.log(JSON.stringify(data));
                        resolve();
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
exports.ToastHandler = ToastHandler;
