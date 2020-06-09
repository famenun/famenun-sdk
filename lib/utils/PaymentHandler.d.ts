export declare const API_OPEN_CHAT = "https://apps.famenun.com/openChat";
export declare const CURRENCY_INR = "INR";
export declare const CURRENCY_USD = "USD";
export declare class Payable {
    id?: string;
    cu?: string;
    am?: number;
    re?: string;
}
export declare class PaymentHandler {
    debug?: boolean | undefined;
    constructor(debug?: boolean | undefined);
    /**
    * Show prompt to user to make payment
    *
    * @param payable - The object with payment data
    *
    */
    makePayment(payable: Payable): Promise<void>;
}
