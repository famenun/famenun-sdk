"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
exports.API_OPEN_CHAT = "https://apps.famenun.com/openChat";
class ChatroomHandler {
    constructor(debug) {
        this.debug = debug;
    }
    /**
    * Open Famenun chat with @param users
    *
    * @param users - The people with whom you want to open chat
    *
    */
    openChat(...users) {
        return new Promise((resolve, reject) => {
            try {
                if (this.debug) {
                    setTimeout(() => {
                        const num = Math.round(Math.random() * 100);
                        if (num % 2 == 0) {
                            console.log(users);
                            resolve();
                        }
                        else {
                            reject("Failed to open chat");
                        }
                    }, 3000);
                }
                else {
                    jquery_1.default.get(exports.API_OPEN_CHAT, { "users": users }).done((data) => {
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
exports.ChatroomHandler = ChatroomHandler;
