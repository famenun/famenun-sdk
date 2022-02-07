"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runWebsite = exports.init = exports.FamenunApi = exports.Hookable = void 0;
const ProfileHandler_1 = require("./handlers/ProfileHandler");
const ToastHandler_1 = require("./handlers/ToastHandler");
const ClubsHandler_1 = require("./handlers/ClubsHandler");
const PaymentsHandler_1 = require("./handlers/PaymentsHandler");
const BroadcastHandler_1 = require("./handlers/BroadcastHandler");
const ChatroomsHandler_1 = require("./handlers/ChatroomsHandler");
const LinksHandler_1 = require("./handlers/LinksHandler");
const AppGalaxyHandler_1 = require("./handlers/AppGalaxyHandler");
const NotificationsHandler_1 = require("./handlers/NotificationsHandler");
const RequestHandler_1 = require("./handlers/RequestHandler");
const DeviceHandler_1 = require("./handlers/DeviceHandler");
const LocationHandler_1 = require("./handlers/LocationHandler");
const ShareHandler_1 = require("./handlers/ShareHandler");
class Hookable {
}
exports.Hookable = Hookable;
class FamenunApi {
}
exports.FamenunApi = FamenunApi;
const init = (debug) => {
    const requestHandler = new RequestHandler_1.RequestHandler(debug);
    // @ts-ignore
    if (window.__famenun_api__ === undefined) {
        // @ts-ignore
        window.__famenun_api__ = {
            debug: debug,
            appGalaxyHandler: new AppGalaxyHandler_1.AppGalaxyHandler(requestHandler),
            broadcastHandler: new BroadcastHandler_1.BroadcastHandler(requestHandler),
            chatroomsHandler: new ChatroomsHandler_1.ChatroomsHandler(requestHandler),
            clubsHandler: new ClubsHandler_1.ClubsHandler(requestHandler),
            deviceHandler: new DeviceHandler_1.DeviceHandler(requestHandler),
            linksHandler: new LinksHandler_1.LinksHandler(requestHandler),
            locationHandler: new LocationHandler_1.LocationHandler(requestHandler),
            notificationsHandler: new NotificationsHandler_1.NotificationsHandler(requestHandler),
            paymentsHandler: new PaymentsHandler_1.PaymentsHandler(requestHandler),
            profileHandler: new ProfileHandler_1.ProfileHandler(requestHandler),
            shareHandler: new ShareHandler_1.ShareHandler(requestHandler),
            toastHandler: new ToastHandler_1.ToastHandler(requestHandler)
        };
    }
    // @ts-ignore
    return window.__famenun_api__;
};
exports.init = init;
const runWebsite = (website) => {
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
exports.runWebsite = runWebsite;
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
            registerHook: (url) => {
                fetch(url)
                    .then(res => res.text())
                    .then(code => {
                    var script = document.createElement("script");
                    script.innerHTML = code;
                    document.body.append(script);
                })
                    .catch(console.error);
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
