import { ProfileHandler } from "./handlers/ProfileHandler";
import { ToastHandler } from "./handlers/ToastHandler";
import { ClubsHandler } from "./handlers/ClubsHandler";
import { PaymentsHandler } from "./handlers/PaymentsHandler";
import { BroadcastHandler } from "./handlers/BroadcastHandler";
import { ChatroomsHandler } from "./handlers/ChatroomsHandler";
import { LinksHandler } from "./handlers/LinksHandler";
import { AppGalaxyHandler } from "./handlers/AppGalaxyHandler";
import { NotificationsHandler } from "./handlers/NotificationsHandler";
import { DeviceHandler } from "./handlers/DeviceHandler";
export declare class Hookable {
    id: string;
    layout?: string;
    data?: any;
    resources?: string[];
    title?: string;
    action?: string;
    actionText?: string;
    userPhoto?: string;
    userName?: string;
}
export declare class FamenunApi {
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
export declare const init: (debug?: boolean | undefined) => FamenunApi;
export declare const runWebsite: (website: string) => void;
