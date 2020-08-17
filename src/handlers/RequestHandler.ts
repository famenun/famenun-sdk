
export const API_GET_PROFILE = "API_GET_PROFILE";
export const API_CREATE_SHORTCUT = "API_CREATE_SHORTCUT";
export const API_GET_EMAIL = "API_GET_EMAIL";
export const API_GET_PHONE_NUMBER = "API_GET_PHONE_NUMBER";
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
export const API_CREATE_DEEP_LINK = "API_CREATE_DEEP_LINK";
export const API_NOTIFY = "API_NOTIFY";

const API_GET_PROFILE_RESPONSE = "API_GET_PROFILE_RESPONSE";
const API_CREATE_SHORTCUT_RESPONSE = "API_CREATE_SHORTCUT_RESPONSE";
const API_GET_EMAIL_RESPONSE = "API_GET_EMAIL_RESPONSE";
const API_GET_PHONE_NUMBER_RESPONSE = "API_GET_PHONE_NUMBER_RESPONSE";
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
export const API_CREATE_DEEP_LINK_RESPONSE = "API_CREATE_DEEP_LINK_RESPONSE";
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
        try {
            this.initConsole(this, window, console);
        } catch (error) { }
    }

    private initConsole(self: any, window: any, console: any): void {
        window.__SDK_API_log_messages__ = [];
        window.__SDK_API_log_errors__ = [];
        console._f_logger_ = console.log.bind(console);
        console._f_logs_ = [];
        console.log = (...args: any) => {
            window.__SDK_API_log_messages__.push(args);
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
                            interceptable = true;
                            if (self.listeners.get(requestable.id) !== undefined) {
                                self.listeners.get(requestable.id).onComplete(requestable);
                            }
                            break;
                    }
                }
            } catch (error) {
                window.__SDK_API_log_errors__.push(error);
            }
            if (!interceptable) {
                console._f_logs_.push(Array.from(args));
                console._f_logger_.apply(console, args);
            }
        };
        // here we should also be setting up the window message listner
        window.onmessage = (event: any) => {
            (async () => {
                try {
                    window.__SDK_API_log_messages__.push(event.data);
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
                            case API_GET_CIRCLE_RESPONSE:
                            case API_MAKE_PAYMENT_RESPONSE:
                            case API_PUBLISH_RESPONSE:
                            case API_OPEN_CHAT_RESPONSE:
                            case API_GET_INSTALLED_APPS_RESPONSE:
                            case API_OPEN_APP_RESPONSE:
                            case API_OPEN_APP_PROFILE_RESPONSE:
                            case API_SHOW_TOAST_RESPONSE:
                            case API_OPEN_LINK_RESPONSE:
                            case API_NOTIFY_RESPONSE:
                                if (self.listeners.get(requestable.id) !== undefined) {
                                    self.listeners.get(requestable.id).onComplete(requestable);
                                }
                                break;
                        }
                    }
                } catch (error) {
                    window.__SDK_API_log_errors__.push(error);
                }
            })();
        };
    }

    request(requestable: Requestable, onRequestCompleteListener?: OnRequestCompleteListener): void {
        if (onRequestCompleteListener !== undefined) {
            this.listeners.set(requestable.id, onRequestCompleteListener);
        }
        console.log(JSON.stringify(requestable));
        window.top.postMessage(JSON.stringify(requestable), "*");
    }

}