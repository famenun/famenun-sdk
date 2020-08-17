import { ProfileHandler } from "./handlers/ProfileHandler";
import { ToastHandler } from "./handlers/ToastHandler";
import { CircleHandler } from "./handlers/CircleHandler";
import { PaymentHandler } from "./handlers/PaymentHandler";
import { PublishHandler } from "./handlers/PublishHandler";
import { ChatroomHandler } from "./handlers/ChatroomHandler";
import { LinkHandler } from "./handlers/LinkHandler";
import { AppGalaxyHandler } from "./handlers/AppGalaxyHandler";
import { NotificationHandler } from "./handlers/NotificationHandler";
import { HookHandler } from "./handlers/HookHandler";
import { PageHandler } from "./handlers/PageHandler";
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
    linkHandler?: LinkHandler;
    notificationHandler?: NotificationHandler;
    hookHandler?: HookHandler;
    pageHandler?: PageHandler;
}
export declare const init: (id: string, debug?: boolean | undefined) => FamenunApi;
