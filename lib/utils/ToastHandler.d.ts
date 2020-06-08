export declare const API_TOAST = "https://apps.famenun.com/showToast";
export declare class ToastHandler {
    debug?: boolean | undefined;
    constructor(debug?: boolean | undefined);
    /**
    * Show a small toast message to user.
    *
    * @param message - The message you want to show to the user
    *
    */
    showToast(message: string): Promise<void>;
}
