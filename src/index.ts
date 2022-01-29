import { ProfileHandler } from "./handlers/ProfileHandler";
import { ToastHandler } from "./handlers/ToastHandler";
import { ClubsHandler } from "./handlers/ClubsHandler";
import { PaymentsHandler } from "./handlers/PaymentsHandler";
import { BroadcastHandler } from "./handlers/BroadcastHandler";
import { ChatroomsHandler } from "./handlers/ChatroomsHandler";
import { LinksHandler } from "./handlers/LinksHandler";
import { AppGalaxyHandler } from "./handlers/AppGalaxyHandler";
import { NotificationsHandler } from "./handlers/NotificationsHandler";
import { RequestHandler, API_HOOK } from "./handlers/RequestHandler";
import { DeviceHandler } from "./handlers/DeviceHandler";

export class Hookable {
    id!: string;
    layout?: string;
    data?: any;
    
    resources?: string[];
    title?: string;
    action?: string; // code that needs to be run on the action button click
    actionText?: string; // the text to be shown on the button
    userPhoto?: string;
    userName?: string;
}

export class FamenunApi {
    appId?: string;
    debug?: boolean;

    profileHandler?: ProfileHandler;
    clubsHandler?: ClubsHandler;

    paymentsHandler?: PaymentsHandler;
    broadcastHandler?: BroadcastHandler;
    chatroomsHandler?: ChatroomsHandler;
    appGalaxyHandler?: AppGalaxyHandler;

    toastHandler?: ToastHandler;
    linksHandler?: LinksHandler;
    notificationsHandler?: NotificationsHandler;
    deviceHandler?: DeviceHandler;

}

export const init = (debug?: boolean): FamenunApi => {
    const requestHandler: RequestHandler = new RequestHandler(debug);

    // @ts-ignore
    if(window.__famenun_api__ === undefined){
        // @ts-ignore
        window.__famenun_api__ = {
            debug: debug,
    
            profileHandler: new ProfileHandler(requestHandler),
            clubsHandler: new ClubsHandler(requestHandler),
    
            paymentsHandler: new PaymentsHandler(requestHandler),
            broadcastHandler: new BroadcastHandler(requestHandler),
            chatroomsHandler: new ChatroomsHandler(requestHandler),
            appGalaxyHandler: new AppGalaxyHandler(requestHandler),
    
            toastHandler: new ToastHandler(requestHandler),
            linksHandler: new LinksHandler(requestHandler),
            notificationsHandler: new NotificationsHandler(requestHandler),
            deviceHandler: new DeviceHandler(requestHandler)

        }
    }
    // @ts-ignore
    return window.__famenun_api__;
}

export const runWebsite = (website: string) => {
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

                var iframe: any = document.createElement("iframe");
                iframe.id = `website-${website}`;
                iframe.style = "width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 9999;";
                iframe.src = url;
                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("hspace", "0");
                iframe.setAttribute("vspace", "0");
                document.body.append(iframe);

            } else {
                console.log(response.message);
            }
        }).catch(error => console.log(error));
}

(function () {
    try {
        const requestHandler: RequestHandler = new RequestHandler();
        var win: any = window;
        win.__famenun__ = {
            init: init,
            emit: (emitable: Hookable) => {
                requestHandler.request({
                    id: emitable.id,
                    api: API_HOOK,
                    data: emitable
                });
            },
            registerHook: (url: string) => {
                fetch(url)
                .then(res => res.text())
                .then(code => {
                    var script = document.createElement("script");
                    script.innerHTML = decodeURIComponent(code);
                    document.body.append(script);
                })
                .catch(console.error);
            },
            runWebsite: runWebsite
        };
    } catch (e) { }
})();


// TODO: add dark mode support
// TODO: don't ask for app id instead the system should set the app id
// TODO: create camera api
// TODO: move out the page handler into @famenun/web
