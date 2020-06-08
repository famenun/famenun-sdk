"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProfileHandler_1 = require("./utils/ProfileHandler");
const ToastHandler_1 = require("./utils/ToastHandler");
const CircleHandler_1 = require("./utils/CircleHandler");
const PaymentHandler_1 = require("./utils/PaymentHandler");
const PublishHandler_1 = require("./utils/PublishHandler");
const ChatroomHandler_1 = require("./utils/ChatroomHandler");
exports.init = (id, debug) => {
    return {
        appId: id,
        debug: debug,
        profileHandler: new ProfileHandler_1.ProfileHandler(),
        circleHandler: new CircleHandler_1.CircleHandler(),
        paymentHandler: new PaymentHandler_1.PaymentHandler(),
        publishHandler: new PublishHandler_1.PublishHandler(),
        chatroomHandler: new ChatroomHandler_1.ChatroomHandler(),
        toastHandler: new ToastHandler_1.ToastHandler(debug)
    };
};
(function () {
    try {
        var win = window;
        win.__famenun__ = {
            init: exports.init
        };
    }
    catch (e) { }
})();
