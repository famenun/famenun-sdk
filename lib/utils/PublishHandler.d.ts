export declare const API_PUBLISH = "https://apps.famenun.com/publish";
export declare class Publishable {
    ab?: string;
    fi?: Array<any>;
    mo?: number;
    ve?: any;
    pr?: boolean;
}
export declare class PublishHandler {
    debug?: boolean | undefined;
    constructor(debug?: boolean | undefined);
    /**
    * Prompt user to publish @param publishable
    *
    * @param publishable - the Object with data that you want to publish
    *
    */
    publish(publishable: Publishable): Promise<void>;
}
