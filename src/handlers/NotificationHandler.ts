import $ from "jquery";

export const API_NOTIFY = "https://apps.famenun.com/notify";

export class Notifiable {
    title?: string;
    body?: string;
    image?: string;
    path?: string;
}

export class NotificationHandler {

    constructor(public debug?: boolean) { }

    /**
    * Open link in browser
    *
    * @param notifiable - object containing notification data
    *
    */
    notify(notifiable: Notifiable): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                if(this.debug){
                    setTimeout(() => {
                        const num = Math.round(Math.random() * 100);
                        if(num % 2 == 0){
                            resolve();
                        }else{
                            reject("Failed to notify");
                        }
                    }, 3000);
                }else{
                    $.get(API_NOTIFY, JSON.parse(JSON.stringify(notifiable))).done((data: any) => {
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