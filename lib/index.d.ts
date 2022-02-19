import { ProfileHandler } from "./handlers/ProfileHandler";
import { ToastHandler } from "./handlers/ToastHandler";
import { ClubsHandler } from "./handlers/ClubsHandler";
import { PaymentsHandler } from "./handlers/PaymentsHandler";
import { BroadcastHandler } from "./handlers/BroadcastHandler";
import { ChatroomsHandler } from "./handlers/ChatroomsHandler";
import { LinksHandler } from "./handlers/LinksHandler";
import { AppGalaxyHandler } from "./handlers/AppGalaxyHandler";
import { DeviceHandler } from "./handlers/DeviceHandler";
import { LocationHandler } from "./handlers/LocationHandler";
import { ShareHandler } from "./handlers/ShareHandler";
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
    appGalaxyHandler?: AppGalaxyHandler;
    broadcastHandler?: BroadcastHandler;
    chatroomsHandler?: ChatroomsHandler;
    clubsHandler?: ClubsHandler;
    deviceHandler?: DeviceHandler;
    linksHandler?: LinksHandler;
    locationHandler?: LocationHandler;
    paymentsHandler?: PaymentsHandler;
    profileHandler?: ProfileHandler;
    shareHandler?: ShareHandler;
    toastHandler?: ToastHandler;
}
export declare const init: (debug?: boolean | undefined) => FamenunApi;
export declare const runWebsite: (website: string) => void;
