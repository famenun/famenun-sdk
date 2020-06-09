export declare const API_GET_CIRCLE = "https://apps.famenun.com/getCircle";
export declare class CircleHandler {
    debug?: boolean | undefined;
    constructor(debug?: boolean | undefined);
    /**
    * Show prompt to user to get his circle
    */
    getCircle(): Promise<any>;
}
