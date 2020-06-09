import { ToastHandler } from "../utils/ToastHandler";
import { ProfileHandler } from "../utils/ProfileHandler";
import { PaymentHandler } from "../utils/PaymentHandler";
import { CircleHandler } from "../utils/CircleHandler";
import { PublishHandler } from "../utils/PublishHandler";
import { ChatroomHandler } from "../utils/ChatroomHandler";
import { DatabaseHandler } from "../utils/DatabaseHandler";

export class FamenunApi {
    appId?: string;
    debug?: boolean;

    profileHandler?: ProfileHandler;
    circleHandler?: CircleHandler;

    paymentHandler?: PaymentHandler;
    publishHandler?: PublishHandler;
    chatroomHandler?: ChatroomHandler;
    
    toastHandler?: ToastHandler;
    databaseHandler?: DatabaseHandler
}