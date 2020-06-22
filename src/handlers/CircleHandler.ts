import { RequestHandler, Requestable, API_GET_CIRCLE } from "./RequestHandler";

export class CircleHandler {
    
    constructor(public requestHandler?: RequestHandler) { }

    /**
    * Show prompt to user to get his circle
    */
    getCircle(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                if(this.requestHandler?.debug){
                    resolve([
                        "friend_uid_01",
                        "friend_uid_02"
                    ]);
                }else{
                    this.requestHandler?.request({
                        id: "request_id",
                        api: API_GET_CIRCLE
                    }, {
                        onComplete(requestable: Requestable): void {
                            if(!requestable.error){
                                resolve(requestable.data);
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