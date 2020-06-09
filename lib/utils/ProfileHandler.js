"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
exports.API_GET_PROFILE = "https://apps.famenun.com/getProfile";
class ProfileHandler {
    constructor(debug) {
        this.debug = debug;
    }
    /**
    * Get currently logged in user's Profile.
    */
    getProfile() {
        return new Promise((resolve, reject) => {
            try {
                if (this.debug) {
                    setTimeout(() => {
                        const num = Math.round(Math.random() * 100);
                        if (num % 2 == 0) {
                            resolve({
                                "id": "user_id",
                                "na": "User Name",
                                "dp": "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401"
                            });
                        }
                        else {
                            reject("Failed to get profile");
                        }
                    }, 3000);
                }
                else {
                    jquery_1.default.get(exports.API_GET_PROFILE, {}).done((data) => {
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
exports.ProfileHandler = ProfileHandler;
