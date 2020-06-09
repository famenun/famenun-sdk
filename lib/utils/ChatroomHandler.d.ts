export declare const API_OPEN_CHAT = "https://apps.famenun.com/openChat";
export declare class ChatroomHandler {
    debug?: boolean | undefined;
    constructor(debug?: boolean | undefined);
    /**
    * Open Famenun chat with @param users
    *
    * @param users - The people with whom you want to open chat
    *
    */
    openChat(...users: Array<string>): Promise<void>;
}
