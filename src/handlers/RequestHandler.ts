import { isLoadedInIframe } from "../utils/Utility";

export const API_GET_PROFILE = "API_GET_PROFILE";
export const API_CREATE_SHORTCUT = "API_CREATE_SHORTCUT";
export const API_GET_EMAIL = "API_GET_EMAIL";
export const API_GET_PHONE_NUMBER = "API_GET_PHONE_NUMBER";
export const API_GET_CLUB = "API_GET_CLUB";
export const API_MAKE_PAYMENT = "API_MAKE_PAYMENT";
export const API_BROADCAST = "API_BROADCAST";
export const API_OPEN_CHAT = "API_OPEN_CHAT";
export const API_OPEN_APP = "API_OPEN_APP";
export const API_SHOW_TOAST = "API_SHOW_TOAST";
export const API_OPEN_LINK = "API_OPEN_LINK";
export const API_CREATE_DEEP_LINK = "API_CREATE_DEEP_LINK";
export const API_NOTIFY = "API_NOTIFY";
export const API_GET_DEVICE_INFO = "API_GET_DEVICE_INFO";
export const API_HOOK = "API_HOOK";

const API_GET_PROFILE_RESPONSE = "API_GET_PROFILE_RESPONSE";
const API_CREATE_SHORTCUT_RESPONSE = "API_CREATE_SHORTCUT_RESPONSE";
const API_GET_EMAIL_RESPONSE = "API_GET_EMAIL_RESPONSE";
const API_GET_PHONE_NUMBER_RESPONSE = "API_GET_PHONE_NUMBER_RESPONSE";
const API_GET_CLUB_RESPONSE = "API_GET_CLUB_RESPONSE";
const API_MAKE_PAYMENT_RESPONSE = "API_MAKE_PAYMENT_RESPONSE";
const API_BROADCAST_RESPONSE = "API_BROADCAST_RESPONSE";
const API_OPEN_CHAT_RESPONSE = "API_OPEN_CHAT_RESPONSE";
const API_GET_INSTALLED_APPS_RESPONSE = "API_GET_INSTALLED_APPS_RESPONSE";
const API_OPEN_APP_RESPONSE = "API_OPEN_APP_RESPONSE";
const API_OPEN_APP_PROFILE_RESPONSE = "API_OPEN_APP_PROFILE_RESPONSE";
const API_SHOW_TOAST_RESPONSE = "API_SHOW_TOAST_RESPONSE";
const API_INSERT_DATA_RESPONSE = "API_INSERT_DATA_RESPONSE";
const API_GET_DATA_RESPONSE = "API_GET_DATA_RESPONSE";
const API_OPEN_LINK_RESPONSE = "API_OPEN_LINK_RESPONSE";
const API_CREATE_DEEP_LINK_RESPONSE = "API_CREATE_DEEP_LINK_RESPONSE";
const API_NOTIFY_RESPONSE = "API_NOTIFY_RESPONSE";
const API_GET_DEVICE_INFO_RESPONSE = "API_GET_DEVICE_INFO_RESPONSE";

export class Requestable {
    id!: string;
    api!: string;
    error?: boolean;
    message?: string;
    data?: any;
}

export interface OnRequestCompleteListener {
    onComplete(requestable: Requestable): void;
}

export class RequestHandler {

    private listeners: Map<string, OnRequestCompleteListener> = new Map();

    constructor(public debug?: boolean) {
        try {
            this.init(this);
        } catch (error) { }
    }

    private init(self: any): void {
        if (isLoadedInIframe()) {
            console.log("loaded in iframe ;)");
            window.onmessage = (event: any) => {
                (async () => {
                    try {
                        const requestable: Requestable = JSON.parse(event.data);
                        if (
                            requestable.id !== undefined &&
                            requestable.id !== null &&
                            requestable.api !== undefined &&
                            requestable.api !== null
                        ) {
                            switch (requestable.api) {
                                case API_GET_PROFILE_RESPONSE:
                                case API_CREATE_SHORTCUT_RESPONSE:
                                case API_GET_EMAIL_RESPONSE:
                                case API_GET_PHONE_NUMBER_RESPONSE:
                                case API_GET_CLUB_RESPONSE:
                                case API_MAKE_PAYMENT_RESPONSE:
                                case API_BROADCAST_RESPONSE:
                                case API_OPEN_CHAT_RESPONSE:
                                case API_GET_INSTALLED_APPS_RESPONSE:
                                case API_OPEN_APP_RESPONSE:
                                case API_OPEN_APP_PROFILE_RESPONSE:
                                case API_SHOW_TOAST_RESPONSE:
                                case API_OPEN_LINK_RESPONSE:
                                case API_NOTIFY_RESPONSE:
                                case API_GET_DEVICE_INFO_RESPONSE:
                                    if (self.listeners.get(requestable.id) !== undefined) {
                                        self.listeners.get(requestable.id).onComplete(requestable);
                                    }
                                    break;
                            }
                        }
                    } catch (error) {
                        console.log(error);
                    }
                })();
            };
        } else {
            console.log("loaded outside iframe ;)");
            const __famenun_logger__ = console.log;
            // @ts-ignore: 
            window.__famenun_logger_logs__ = [];
            console.log = (...args: any) => {
                let interceptable: boolean = false;
                try {
                    const requestable: Requestable = JSON.parse(args);
                    if (
                        requestable.id !== undefined &&
                        requestable.id !== null &&
                        requestable.api !== undefined &&
                        requestable.api !== null
                    ) {
                        switch (requestable.api) {
                            case API_GET_PROFILE_RESPONSE:
                            case API_CREATE_SHORTCUT_RESPONSE:
                            case API_GET_EMAIL_RESPONSE:
                            case API_GET_PHONE_NUMBER_RESPONSE:
                            case API_GET_CLUB_RESPONSE:
                            case API_MAKE_PAYMENT_RESPONSE:
                            case API_BROADCAST_RESPONSE:
                            case API_OPEN_CHAT_RESPONSE:
                            case API_GET_INSTALLED_APPS_RESPONSE:
                            case API_OPEN_APP_RESPONSE:
                            case API_OPEN_APP_PROFILE_RESPONSE:
                            case API_SHOW_TOAST_RESPONSE:
                            case API_INSERT_DATA_RESPONSE:
                            case API_GET_DATA_RESPONSE:
                            case API_OPEN_LINK_RESPONSE:
                            case API_NOTIFY_RESPONSE:
                                interceptable = true;
                                if (self.listeners.get(requestable.id) !== undefined) {
                                    self.listeners.get(requestable.id).onComplete(requestable);
                                }
                                break;
                        }
                    }
                } catch (error) { }
                if (!interceptable) {
                    // @ts-ignore: 
                    window.__famenun_logger_logs__.push(Array.from(args));
                    __famenun_logger__.apply(null, args);
                }
            }
        }
    }

    request(requestable: Requestable, onRequestCompleteListener?: OnRequestCompleteListener): void {
        if (onRequestCompleteListener !== undefined) {
            this.listeners.set(requestable.id, onRequestCompleteListener);
        }
        if (isLoadedInIframe()) {
            window.parent.postMessage(JSON.stringify(requestable), "*");
        } else {
            console.log(JSON.stringify(requestable));
        }
    }

}