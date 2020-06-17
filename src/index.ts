import { ProfileHandler } from "./handlers/ProfileHandler";
import { ToastHandler } from "./handlers/ToastHandler";
import { CircleHandler } from "./handlers/CircleHandler";
import { PaymentHandler } from "./handlers/PaymentHandler";
import { PublishHandler } from "./handlers/PublishHandler";
import { ChatroomHandler } from "./handlers/ChatroomHandler";
import { DatabaseHandler } from "./handlers/DatabaseHandler";
import { LinkHandler } from "./handlers/LinkHandler";
import { blobUrlToBase64 } from "./utils/Utility";
import { AppGalaxyHandler } from "./handlers/AppGalaxyHandler";
import { NotificationHandler } from "./handlers/NotificationHandler";

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
    databaseHandler?: DatabaseHandler
    linkHandler?: LinkHandler;
    notificationHandler?: NotificationHandler;
}

export const init = (id: string, debug?: boolean): FamenunApi => {
    return {
        appId: id,
        debug: debug,

        profileHandler: new ProfileHandler(debug),
        circleHandler: new CircleHandler(debug),

        paymentHandler: new PaymentHandler(debug),
        publishHandler: new PublishHandler(debug),
        chatroomHandler: new ChatroomHandler(debug),
        appGalaxyHandler: new AppGalaxyHandler(debug),

        toastHandler: new ToastHandler(debug),
        databaseHandler: new DatabaseHandler(debug),
        linkHandler: new LinkHandler(debug),
        notificationHandler: new NotificationHandler(debug)
    };
}

(function () {
    try {
        var win: any = window;
        win.__famenun__ = {
            init: init,
            download: (requestId: string, blobUrls: Array<string>) => {
                setTimeout(async () => {
                    const promises = new Array();
                    for(const blobUrl of blobUrls){
                        promises.push(blobUrlToBase64(blobUrl));
                    }
                    const result = await Promise.all(promises);
                    console.log(JSON.stringify({
                        id: requestId,
                        result: result
                    }));
                }, 0);
            },
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
