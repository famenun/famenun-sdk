import { ProfileHandler } from "./handlers/ProfileHandler";
import { ToastHandler } from "./handlers/ToastHandler";
import { CircleHandler } from "./handlers/CircleHandler";
import { PaymentHandler } from "./handlers/PaymentHandler";
import { PublishHandler } from "./handlers/PublishHandler";
import { ChatroomHandler } from "./handlers/ChatroomHandler";
import { DatabaseHandler } from "./handlers/DatabaseHandler";
import { LinkHandler } from "./handlers/LinkHandler";
import { AppGalaxyHandler } from "./handlers/AppGalaxyHandler";
import { NotificationHandler } from "./handlers/NotificationHandler";
export declare class Emitable {
    error?: boolean;
    message?: string;
    type?: string;
    data?: any;
}
export declare class FamenunApi {
    appId?: string;
    debug?: boolean;
    profileHandler?: ProfileHandler;
    circleHandler?: CircleHandler;
    paymentHandler?: PaymentHandler;
    publishHandler?: PublishHandler;
    chatroomHandler?: ChatroomHandler;
    appGalaxyHandler?: AppGalaxyHandler;
    toastHandler?: ToastHandler;
    databaseHandler?: DatabaseHandler;
    linkHandler?: LinkHandler;
    notificationHandler?: NotificationHandler;
}
export declare const init: (id: string, debug?: boolean | undefined) => FamenunApi;
