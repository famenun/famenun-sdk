export declare const CURRENCY_INR = "INR";
export declare const CURRENCY_USD = "USD";
export declare class PaymentHandler {
    makePayment(txnId: string, txnCurrency: string, txnAmount: number, recipient: string): Promise<void>;
}
