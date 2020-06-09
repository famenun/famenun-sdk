"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
exports.API_GET_CIRCLE = "https://apps.famenun.com/getCircle";
class CircleHandler {
    constructor(debug) {
        this.debug = debug;
    }
    /**
    * Show prompt to user to get his circle
    */
    getCircle() {
        return new Promise((resolve, reject) => {
            try {
                if (this.debug) {
                    setTimeout(() => {
                        const num = Math.round(Math.random() * 100);
                        if (num % 2 == 0) {
                            resolve({
                                "name": "Best Friends",
                                "people": [
                                    "Aditya",
                                    "Amit",
                                    "Marshal",
                                    "Tarun"
                                ]
                            });
                        }
                        else {
                            reject("Failed to get circle");
                        }
                    }, 3000);
                }
                else {
                    jquery_1.default.get(exports.API_GET_CIRCLE, {}).done((data) => {
                        console.log(JSON.stringify(data));
                        if (!data.error) {
                            resolve(data.data);
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
exports.CircleHandler = CircleHandler;
