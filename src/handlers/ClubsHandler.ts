import { RequestHandler, Requestable, API_GET_CLUB } from "./RequestHandler";

export class ClubsHandler {
    
    constructor(public requestHandler?: RequestHandler) { }

    /**
    * Show prompt to user to get his circle
    */
    getClub(): Promise<string[]> {
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
                        api: API_GET_CLUB
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