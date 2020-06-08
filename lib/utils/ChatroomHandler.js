"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChatroomHandler {
    openChat(...users) {
        return new Promise((resolve, reject) => {
            try {
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
            catch (error) {
                reject(error);
            }
        });
    }
}
exports.ChatroomHandler = ChatroomHandler;
