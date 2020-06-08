export declare class Publishable {
    ab?: string;
    fi?: Array<any>;
    mo?: number;
    ve?: any;
}
export declare class PublishHandler {
    publish(publishable: Publishable): Promise<void>;
}
