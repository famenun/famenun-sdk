
export const API_GET_PROFILE = "API_GET_PROFILE";
export const API_CREATE_SHORTCUT = "API_CREATE_SHORTCUT";
export const API_GET_CIRCLE = "API_GET_CIRCLE";
export const API_MAKE_PAYMENT = "API_MAKE_PAYMENT";
export const API_PUBLISH = "API_PUBLISH";
export const API_OPEN_CHAT = "API_OPEN_CHAT";
export const API_GET_INSTALLED_APPS = "API_GET_INSTALLED_APPS";
export const API_OPEN_APP = "API_OPEN_APP";
export const API_OPEN_APP_PROFILE = "API_OPEN_APP_PROFILE";
export const API_SHOW_TOAST = "API_SHOW_TOAST";
export const API_INSERT_DATA = "API_INSERT_DATA";
export const API_GET_DATA = "API_GET_DATA";
export const API_OPEN_LINK = "API_OPEN_LINK";
export const API_NOTIFY = "API_NOTIFY";

const API_GET_PROFILE_RESPONSE = "API_GET_PROFILE_RESPONSE";
const API_CREATE_SHORTCUT_RESPONSE = "API_CREATE_SHORTCUT_RESPONSE";
const API_GET_CIRCLE_RESPONSE = "API_GET_CIRCLE_RESPONSE";
const API_MAKE_PAYMENT_RESPONSE = "API_MAKE_PAYMENT_RESPONSE";
const API_PUBLISH_RESPONSE = "API_PUBLISH_RESPONSE";
const API_OPEN_CHAT_RESPONSE = "API_OPEN_CHAT_RESPONSE";
const API_GET_INSTALLED_APPS_RESPONSE = "API_GET_INSTALLED_APPS_RESPONSE";
const API_OPEN_APP_RESPONSE = "API_OPEN_APP_RESPONSE";
const API_OPEN_APP_PROFILE_RESPONSE = "API_OPEN_APP_PROFILE_RESPONSE";
const API_SHOW_TOAST_RESPONSE = "API_SHOW_TOAST_RESPONSE";
const API_INSERT_DATA_RESPONSE = "API_INSERT_DATA_RESPONSE";
const API_GET_DATA_RESPONSE = "API_GET_DATA_RESPONSE";
const API_OPEN_LINK_RESPONSE = "API_OPEN_LINK_RESPONSE";
const API_NOTIFY_RESPONSE = "API_NOTIFY_RESPONSE";

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

    constructor(public debug?: boolean, ) {
        this.initConsole(this, console);
    }
    
    private initConsole(self: any, console: any): void {
        console._f_log_ = console.log.bind(console);
        console._f_logs_ = [];
        console.log = function () {
            console._f_logs_.push(Array.from(arguments));
            console._f_log_.apply(console, arguments);
            const log = console._f_logs_[console._f_logs_.length - 1];
            try {
                const requestable: Requestable = JSON.parse(log);
                if (
                    requestable.id !== undefined &&
                    requestable.id !== null &&
                    requestable.api !== undefined &&
                    requestable.api !== null
                ) {
                    switch (requestable.api) {
                        case API_GET_PROFILE_RESPONSE:
                        case API_CREATE_SHORTCUT_RESPONSE:
                        case API_GET_CIRCLE_RESPONSE:
                        case API_MAKE_PAYMENT_RESPONSE:
                        case API_PUBLISH_RESPONSE:
                        case API_OPEN_CHAT_RESPONSE:
                        case API_GET_INSTALLED_APPS_RESPONSE:
                        case API_OPEN_APP_RESPONSE:
                        case API_OPEN_APP_PROFILE_RESPONSE:
                        case API_SHOW_TOAST_RESPONSE:
                        case API_INSERT_DATA_RESPONSE:
                        case API_GET_DATA_RESPONSE:
                        case API_OPEN_LINK_RESPONSE:
                        case API_NOTIFY_RESPONSE:
                            if (self.listeners.get(requestable.id) !== undefined) {
                                self.listeners.get(requestable.id).onComplete(requestable);
                            }
                            break;
                    }
                }
            } catch (error) { }
        };

    }

    request(requestable: Requestable, onRequestCompleteListener?: OnRequestCompleteListener): void {
        if (onRequestCompleteListener !== undefined) {
            this.listeners.set(requestable.id, onRequestCompleteListener);
        }
        console.log(JSON.stringify(requestable));
    }

}