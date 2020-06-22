"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProfileHandler_1 = require("./handlers/ProfileHandler");
const ToastHandler_1 = require("./handlers/ToastHandler");
const CircleHandler_1 = require("./handlers/CircleHandler");
const PaymentHandler_1 = require("./handlers/PaymentHandler");
const PublishHandler_1 = require("./handlers/PublishHandler");
const ChatroomHandler_1 = require("./handlers/ChatroomHandler");
const DatabaseHandler_1 = require("./handlers/DatabaseHandler");
const LinkHandler_1 = require("./handlers/LinkHandler");
const AppGalaxyHandler_1 = require("./handlers/AppGalaxyHandler");
const NotificationHandler_1 = require("./handlers/NotificationHandler");
const RequestHandler_1 = require("./handlers/RequestHandler");
class Emitable {
}
exports.Emitable = Emitable;
class FamenunApi {
}
exports.FamenunApi = FamenunApi;
exports.init = (id, debug) => {
    const requestHandler = new RequestHandler_1.RequestHandler(debug);
    return {
        appId: id,
        debug: debug,
        profileHandler: new ProfileHandler_1.ProfileHandler(requestHandler),
        circleHandler: new CircleHandler_1.CircleHandler(requestHandler),
        paymentHandler: new PaymentHandler_1.PaymentHandler(requestHandler),
        publishHandler: new PublishHandler_1.PublishHandler(requestHandler),
        chatroomHandler: new ChatroomHandler_1.ChatroomHandler(requestHandler),
        appGalaxyHandler: new AppGalaxyHandler_1.AppGalaxyHandler(requestHandler),
        toastHandler: new ToastHandler_1.ToastHandler(requestHandler),
        databaseHandler: new DatabaseHandler_1.DatabaseHandler(requestHandler),
        linkHandler: new LinkHandler_1.LinkHandler(requestHandler),
        notificationHandler: new NotificationHandler_1.NotificationHandler(requestHandler)
    };
};
(function () {
    try {
        var win = window;
        win.__famenun__ = {
            init: exports.init,
            emit: (emitable) => {
                console.log(JSON.stringify(emitable));
            },
            registerHook: (code) => {
                var script = document.createElement("script");
                script.innerHTML = decodeURIComponent(code);
                document.body.append(script);
            },
            logListeners: [],
            onLog: (listener) => {
                win.__famenun__.logListeners.push(listener);
            }
        };
    }
    catch (e) { }
})();
