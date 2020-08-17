import { ProfileHandler } from "./handlers/ProfileHandler";
import { ToastHandler } from "./handlers/ToastHandler";
import { CircleHandler } from "./handlers/CircleHandler";
import { PaymentHandler } from "./handlers/PaymentHandler";
import { PublishHandler } from "./handlers/PublishHandler";
import { ChatroomHandler } from "./handlers/ChatroomHandler";
import { LinkHandler } from "./handlers/LinkHandler";
import { AppGalaxyHandler } from "./handlers/AppGalaxyHandler";
import { NotificationHandler } from "./handlers/NotificationHandler";
import { RequestHandler } from "./handlers/RequestHandler";
import { HookHandler } from "./handlers/HookHandler";
import { PageHandler } from "./handlers/PageHandler";

export class Emitable {
    error?: boolean;
    message?: string;
    type?: string;
    data?: any;
}

export class FamenunApi {
    appId?: string;
    debug?: boolean;

    profileHandler?: ProfileHandler;
    circleHandler?: CircleHandler;

    paymentHandler?: PaymentHandler;
    publishHandler?: PublishHandler;
    chatroomHandler?: ChatroomHandler;
    appGalaxyHandler?: AppGalaxyHandler;

    toastHandler?: ToastHandler;
    linkHandler?: LinkHandler;
    notificationHandler?: NotificationHandler;
    hookHandler?: HookHandler;

    pageHandler?: PageHandler;
}

export const init = (id: string, debug?: boolean): FamenunApi => {
    const requestHandler: RequestHandler = new RequestHandler(debug);
    return {
        appId: id,
        debug: debug,

        profileHandler: new ProfileHandler(requestHandler),
        circleHandler: new CircleHandler(requestHandler),

        paymentHandler: new PaymentHandler(requestHandler),
        publishHandler: new PublishHandler(requestHandler),
        chatroomHandler: new ChatroomHandler(requestHandler),
        appGalaxyHandler: new AppGalaxyHandler(requestHandler),

        toastHandler: new ToastHandler(requestHandler),
        linkHandler: new LinkHandler(requestHandler),
        notificationHandler: new NotificationHandler(requestHandler),
        hookHandler: new HookHandler(requestHandler),

        pageHandler: new PageHandler(requestHandler)
    };
}

(function () {
    try {
        var win: any = window;
        win.__famenun__ = {
            init: init,
            emit: (emitable: Emitable) => {
                console.log(JSON.stringify(emitable));
            },
            registerHook: (code: string) => {
                var script = document.createElement("script");
                script.innerHTML = decodeURIComponent(code);
                document.body.append(script);
            }
        };
    } catch (e) { }
})();
