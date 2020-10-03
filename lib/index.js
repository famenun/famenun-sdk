"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProfileHandler_1 = require("./handlers/ProfileHandler");
const ToastHandler_1 = require("./handlers/ToastHandler");
const CircleHandler_1 = require("./handlers/CircleHandler");
const PaymentHandler_1 = require("./handlers/PaymentHandler");
const PublishHandler_1 = require("./handlers/PublishHandler");
const ChatroomHandler_1 = require("./handlers/ChatroomHandler");
const LinkHandler_1 = require("./handlers/LinkHandler");
const AppGalaxyHandler_1 = require("./handlers/AppGalaxyHandler");
const NotificationHandler_1 = require("./handlers/NotificationHandler");
const RequestHandler_1 = require("./handlers/RequestHandler");
const HookHandler_1 = require("./handlers/HookHandler");
const PageHandler_1 = require("./handlers/PageHandler");
class Hookable {
}
exports.Hookable = Hookable;
class FamenunApi {
}
exports.FamenunApi = FamenunApi;
exports.init = (debug) => {
    const requestHandler = new RequestHandler_1.RequestHandler(debug);
    return {
        debug: debug,
        profileHandler: new ProfileHandler_1.ProfileHandler(requestHandler),
        circleHandler: new CircleHandler_1.CircleHandler(requestHandler),
        paymentHandler: new PaymentHandler_1.PaymentHandler(requestHandler),
        publishHandler: new PublishHandler_1.PublishHandler(requestHandler),
        chatroomHandler: new ChatroomHandler_1.ChatroomHandler(requestHandler),
        appGalaxyHandler: new AppGalaxyHandler_1.AppGalaxyHandler(requestHandler),
        toastHandler: new ToastHandler_1.ToastHandler(requestHandler),
        linkHandler: new LinkHandler_1.LinkHandler(requestHandler),
        notificationHandler: new NotificationHandler_1.NotificationHandler(requestHandler),
        hookHandler: new HookHandler_1.HookHandler(requestHandler),
        pageHandler: new PageHandler_1.PageHandler(requestHandler)
    };
};
exports.runWebsite = (website) => {
    let domain = new URL(window.location.href).host;
    domain = domain === "pages.famenun.com" ? website : domain;
    fetch(`https://api.famenun.com/getWebsite?website=${website}&domain=${domain}`)
        .then(res => res.json())
        .then(response => {
        if (!response.error) {
            const websiteObject = response.data;
            const url = `https://famenun.com/run/${websiteObject.ap}?entry=${encodeURIComponent(websiteObject.pa)}`;
            var style = document.createElement("style");
            style.innerHTML = "*{margin: 0px; padding: 0px;} html, body {width: 100%; height: 100%; overflow:hidden; }";
            document.head.appendChild(style);
            var iframe = document.createElement("iframe");
            iframe.id = `website-${website}`;
            iframe.style = "width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 9999;";
            iframe.src = url;
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("hspace", "0");
            iframe.setAttribute("vspace", "0");
            document.body.append(iframe);
        }
        else {
            console.log(response.message);
        }
    }).catch(error => console.log(error));
};
(function () {
    try {
        const requestHandler = new RequestHandler_1.RequestHandler();
        var win = window;
        win.__famenun__ = {
            init: exports.init,
            emit: (emitable) => {
                requestHandler.request({
                    id: emitable.id,
                    api: RequestHandler_1.API_HOOK,
                    data: emitable
                });
            },
            registerHook: (code) => {
                var script = document.createElement("script");
                script.innerHTML = decodeURIComponent(code);
                document.body.append(script);
            },
            runWebsite: exports.runWebsite
        };
    }
    catch (e) { }
})();
// TODO: add dark mode support
// TODO: don't ask for app id instead the system should set the app id
// TODO: create camera api
// TODO: move out the page handler into @famenun/web
