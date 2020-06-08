import $ from "jquery";

export const API_TOAST = "https://apps.famenun.com/showToast";

export class ToastHandler {

    constructor(public debug?: boolean) { }

    /**
    * Show a small toast message to user.
    *
    * @param message - The message you want to show to the user
    *
    */
    showToast(message: string): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                if(this.debug){
                    setTimeout(() => {
                        const num = Math.round(Math.random() * 100);
                        if(num % 2 == 0){
                            resolve();
                        }else{
                            reject("Failed to show toast");
                        }
                    }, 3000);
                }else{
                    $.get(API_TOAST, { "message": message }).done((data: any) => {
                        console.log(JSON.stringify(data));
                        resolve();
                    }).fail((error: any) => {
                        console.log(JSON.stringify(error));
                        reject(error);
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    }

}