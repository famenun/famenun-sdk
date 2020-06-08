"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Publishable {
}
exports.Publishable = Publishable;
class PublishHandler {
    publish(publishable) {
        return new Promise((resolve, reject) => {
            try {
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
            catch (error) {
                reject(error);
            }
        });
    }
}
exports.PublishHandler = PublishHandler;
