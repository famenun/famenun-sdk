import { ProfileHandler } from "./handlers/ProfileHandler";
import { ToastHandler } from "./handlers/ToastHandler";
import { CircleHandler } from "./handlers/CircleHandler";
import { PaymentHandler } from "./handlers/PaymentHandler";
import { PublishHandler } from "./handlers/PublishHandler";
import { ChatroomHandler } from "./handlers/ChatroomHandler";
import { DatabaseHandler } from "./handlers/DatabaseHandler";
import { HookHandler } from "./handlers/HookHandler";
import { blobUrlToBase64 } from "./utils/Utility";

export class FamenunApi {
    appId?: string;
    debug?: boolean;

    profileHandler?: ProfileHandler;
    circleHandler?: CircleHandler;

    hookHandler?: HookHandler;

    paymentHandler?: PaymentHandler;
    publishHandler?: PublishHandler;
    chatroomHandler?: ChatroomHandler;

    toastHandler?: ToastHandler;
    databaseHandler?: DatabaseHandler
}

export const init = (id: string, debug?: boolean): FamenunApi => {
    return {
        appId: id,
        debug: debug,

        profileHandler: new ProfileHandler(debug),
        circleHandler: new CircleHandler(debug),

        hookHandler: new HookHandler(debug),

        paymentHandler: new PaymentHandler(debug),
        publishHandler: new PublishHandler(debug),
        chatroomHandler: new ChatroomHandler(debug),

        toastHandler: new ToastHandler(debug),

        databaseHandler: new DatabaseHandler(debug)
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
            }
        };
    } catch (e) { }
})();
