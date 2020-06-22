import { RequestHandler, Requestable, API_SHOW_TOAST } from "./RequestHandler";

export class ToastHandler {

    constructor(public requestHandler?: RequestHandler) { }

    /**
    * Show a small toast message to user.
    *
    * @param message - The message you want to show to the user
    *
    */
    showToast(message: string): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                if(this.requestHandler?.debug){
                    resolve();
                }else{
                    this.requestHandler?.request({
                        id: "request_id",
                        api: API_SHOW_TOAST,
                        data: {
                            message: message
                        }
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