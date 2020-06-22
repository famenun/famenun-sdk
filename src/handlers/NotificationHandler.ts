import { RequestHandler, Requestable, API_NOTIFY } from "./RequestHandler";

export class Notifiable {
    title?: string;
    body?: string;
    image?: string;
    path?: string;
}

export class NotificationHandler {

    constructor(public requestHandler?: RequestHandler) { }

    /**
    * Open link in browser
    *
    * @param notifiable - object containing notification data
    *
    */
    notify(notifiable: Notifiable): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                if(this.requestHandler?.debug){
                    resolve();
                }else{
                    this.requestHandler?.request({
                        id: "request_id",
                        api: API_NOTIFY,
                        data: notifiable
                    }, {
                        onComplete(requestable: Requestable): void {
                            if(!requestable.error){
                                resolve();
                            }else{
                                reject(requestable.message);
                            }
                        }
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    }
    
}