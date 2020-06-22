import { RequestHandler, Requestable, API_MAKE_PAYMENT } from "./RequestHandler";

export const CURRENCY_INR = "INR";
export const CURRENCY_USD = "USD";

export class Payable {
    id?: string;
    cu?: string;
    am?: number;
    re?: string;
    su?: string; // the subject of the payment
}

export class PaymentHandler {
    
    constructor(public requestHandler?: RequestHandler) { }

    /**
    * Show prompt to user to make payment
    *
    * @param payable - The object with payment data
    *
    */
    makePayment(payable: Payable): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                this.requestHandler?.request({
                    id: "request_id",
                    api: API_MAKE_PAYMENT,
                    data: payable
                }, {
                    onComplete(requestable: Requestable): void {
                        if(!requestable.error){
                            resolve();
                        }else{
                            reject(requestable.message);
                        }
                    }
                });
            }catch(error){
                reject(error);
            }
        });
    }
    
}