import { RequestHandler, Requestable, API_OPEN_CHAT } from "./RequestHandler";

export class ChatroomHandler {
    
    constructor(public requestHandler?: RequestHandler) { }

    /**
    * Open Famenun chat with @param users
    *
    * @param users - The people with whom you want to open chat
    *
    */
    openChat(...users: Array<string>): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                if(this.requestHandler?.debug){
                    resolve();
                }else{
                    this.requestHandler?.request({
                        id: "request_id",
                        api: API_OPEN_CHAT,
                        data: users
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
            }catch(error){
                reject(error);
            }
        });
    }
    
}