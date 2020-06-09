"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
exports.API_PUBLISH = "https://apps.famenun.com/publish";
class Publishable {
}
exports.Publishable = Publishable;
class PublishHandler {
    constructor(debug) {
        this.debug = debug;
    }
    /**
    * Prompt user to publish @param publishable
    *
    * @param publishable - the Object with data that you want to publish
    *
    */
    publish(publishable) {
        return new Promise((resolve, reject) => {
            try {
                if (this.debug) {
                    setTimeout(() => {
                        const num = Math.round(Math.random() * 100);
                        if (num % 2 == 0) {
                            console.log(publishable);
                            resolve();
                        }
                        else {
                            reject("Failed to pulish");
                        }
                    }, 3000);
                }
                else {
                    jquery_1.default.get(exports.API_PUBLISH, JSON.parse(JSON.stringify(publishable))).done((data) => {
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
exports.PublishHandler = PublishHandler;
