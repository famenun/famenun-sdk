import { RequestHandler, Requestable, API_BROADCAST } from "./RequestHandler";
import { blobUrlToBase64 } from "../utils/Utility";

export class BroadcastHandler {

    constructor(public requestHandler?: RequestHandler) { }

    /**
    * Prompt user to broadcast
    *
    * @param files - files to be broadcasted
    *
    */
    broadcast(files: Array<string>): Promise<void> {
        return new Promise(async (resolve, reject) => {
            try {
                if(this.requestHandler?.debug){
                    resolve();
                }else{
                    const promises = new Array();
                    for(const file of files){
                        promises.push(blobUrlToBase64(file));
                    }
                    const result = await Promise.all(promises);
                    this.requestHandler?.request({
                        id: "request_id",
                        api: API_BROADCAST,
                        data: {
                            files: result
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