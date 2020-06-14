import $ from "jquery";

export const API_MAKE_PAYMENT = "https://apps.famenun.com/makePayment";
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
    
    constructor(public debug?: boolean) { }

    /**
    * Show prompt to user to make payment
    *
    * @param payable - The object with payment data
    *
    */
    makePayment(payable: Payable): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                if(this.debug){
                    setTimeout(() => {
                        const num = Math.round(Math.random() * 100);
                        if(num % 2 == 0){
                            resolve();
                        }else{
                            reject("Failed to make payment");
                        }
                    }, 3000);
                }else{
                    $.get(API_MAKE_PAYMENT, JSON.parse(JSON.stringify(payable))).done((data: any) => {
                        console.log(JSON.stringify(data));
                        if(!data.error){
                            resolve();
                        }else{
                            reject(data.message);
                        }
                    }).fail((error: any) => {
                        console.log(JSON.stringify(error));
                        reject(error);
                    });
                }
            }catch(error){
                reject(error);
            }
        });
    }

}