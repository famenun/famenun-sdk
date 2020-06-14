import { ProfileHandler } from "./handlers/ProfileHandler";
import { ToastHandler } from "./handlers/ToastHandler";
import { CircleHandler } from "./handlers/CircleHandler";
import { PaymentHandler } from "./handlers/PaymentHandler";
import { PublishHandler } from "./handlers/PublishHandler";
import { ChatroomHandler } from "./handlers/ChatroomHandler";
import { DatabaseHandler } from "./handlers/DatabaseHandler";
import { HookHandler } from "./handlers/HookHandler";
export declare class FamenunApi {
    appId?: string;
    debug?: boolean;
    profileHandler?: ProfileHandler;
    circleHandler?: CircleHandler;
    hookHandler?: HookHandler;
    paymentHandler?: PaymentHandler;
    publishHandler?: PublishHandler;
    chatroomHandler?: ChatroomHandler;
    toastHandler?: ToastHandler;
    databaseHandler?: DatabaseHandler;
}
export declare const init: (id: string, debug?: boolean | undefined) => FamenunApi;
