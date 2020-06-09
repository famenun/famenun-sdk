import { ProfileHandler } from "./utils/ProfileHandler";
import { ToastHandler } from "./utils/ToastHandler";
import { FamenunApi } from "./models/FamenunApi";
import { CircleHandler } from "./utils/CircleHandler";
import { PaymentHandler } from "./utils/PaymentHandler";
import { PublishHandler } from "./utils/PublishHandler";
import { ChatroomHandler } from "./utils/ChatroomHandler";
import { DatabaseHandler } from "./utils/DatabaseHandler";

export const init = (id: string, debug?: boolean): FamenunApi => {
    return {
        appId: id,
        debug: debug,

        profileHandler: new ProfileHandler(debug),
        circleHandler: new CircleHandler(debug),

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
            init: init
        };
    }catch(e){ }
})();
