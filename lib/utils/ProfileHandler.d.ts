export declare const API_GET_PROFILE = "https://apps.famenun.com/getProfile";
export declare class ProfileHandler {
    debug?: boolean | undefined;
    constructor(debug?: boolean | undefined);
    /**
    * Get currently logged in user's Profile.
    */
    getProfile(): Promise<any>;
}
