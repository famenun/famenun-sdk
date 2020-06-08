"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CURRENCY_INR = "INR";
exports.CURRENCY_USD = "USD";
class PaymentHandler {
    makePayment(txnId, txnCurrency, txnAmount, recipient) {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    const num = Math.round(Math.random() * 100);
                    if (num % 2 == 0) {
                        resolve();
                    }
                    else {
                        reject("Failed to make payment");
                    }
                }, 3000);
            }
            catch (error) {
                reject(error);
            }
        });
    }
}
exports.PaymentHandler = PaymentHandler;
