import { ProfileHandler } from "./utils/ProfileHandler";
import { ToastHandler } from "./utils/ToastHandler";
import { FamenunApi } from "./models/FamenunApi";
import { CircleHandler } from "./utils/CircleHandler";
import { PaymentHandler } from "./utils/PaymentHandler";
import { PublishHandler } from "./utils/PublishHandler";
import { ChatroomHandler } from "./utils/ChatroomHandler";

export const init = (id: string, debug?: boolean): FamenunApi => {
    return {
        appId: id,
        debug: debug,

        profileHandler: new ProfileHandler(),
        circleHandler: new CircleHandler(),

        paymentHandler: new PaymentHandler(),
        publishHandler: new PublishHandler(),
        chatroomHandler: new ChatroomHandler(),

        toastHandler: new ToastHandler(debug)
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
