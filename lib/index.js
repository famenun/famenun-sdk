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
Object.defineProperty(exports, "__esModule", { value: true });
const ProfileHandler_1 = require("./handlers/ProfileHandler");
const ToastHandler_1 = require("./handlers/ToastHandler");
const CircleHandler_1 = require("./handlers/CircleHandler");
const PaymentHandler_1 = require("./handlers/PaymentHandler");
const PublishHandler_1 = require("./handlers/PublishHandler");
const ChatroomHandler_1 = require("./handlers/ChatroomHandler");
const DatabaseHandler_1 = require("./handlers/DatabaseHandler");
const LinkHandler_1 = require("./handlers/LinkHandler");
const Utility_1 = require("./utils/Utility");
const AppGalaxyHandler_1 = require("./handlers/AppGalaxyHandler");
const NotificationHandler_1 = require("./handlers/NotificationHandler");
class Emitable {
}
exports.Emitable = Emitable;
class FamenunApi {
}
exports.FamenunApi = FamenunApi;
exports.init = (id, debug) => {
    return {
        appId: id,
        debug: debug,
        profileHandler: new ProfileHandler_1.ProfileHandler(debug),
        circleHandler: new CircleHandler_1.CircleHandler(debug),
        paymentHandler: new PaymentHandler_1.PaymentHandler(debug),
        publishHandler: new PublishHandler_1.PublishHandler(debug),
        chatroomHandler: new ChatroomHandler_1.ChatroomHandler(debug),
        appGalaxyHandler: new AppGalaxyHandler_1.AppGalaxyHandler(debug),
        toastHandler: new ToastHandler_1.ToastHandler(debug),
        databaseHandler: new DatabaseHandler_1.DatabaseHandler(debug),
        linkHandler: new LinkHandler_1.LinkHandler(debug),
        notificationHandler: new NotificationHandler_1.NotificationHandler(debug)
    };
};
(function () {
    try {
        var win = window;
        win.__famenun__ = {
            init: exports.init,
            download: (requestId, blobUrls) => {
                setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                    const promises = new Array();
                    for (const blobUrl of blobUrls) {
                        promises.push(Utility_1.blobUrlToBase64(blobUrl));
                    }
                    const result = yield Promise.all(promises);
                    console.log(JSON.stringify({
                        id: requestId,
                        result: result
                    }));
                }), 0);
            },
            emit: (emitable) => {
                console.log(JSON.stringify(emitable));
            },
            registerHook: (code) => {
                var script = document.createElement("script");
                script.innerHTML = decodeURIComponent(code);
                document.body.append(script);
            }
        };
    }
    catch (e) { }
})();
