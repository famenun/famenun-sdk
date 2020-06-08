
export const CURRENCY_INR = "INR";
export const CURRENCY_USD = "USD";

export class PaymentHandler {
    
    makePayment(txnId: string, txnCurrency: string, txnAmount: number, recipient: string): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    const num = Math.round(Math.random() * 100);
                    if(num % 2 == 0){
                        resolve();
                    }else{
                        reject("Failed to make payment");
                    }
                }, 3000);
            }catch(error){
                reject(error);
            }
        });
    }

}