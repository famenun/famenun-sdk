import { RequestHandler, Requestable, API_BROADCAST } from "./RequestHandler";
import { blobUrlToBase64 } from "../utils/Utility";

export class Broadcastable {
    text?: string; // description text in the broadcast
    files!: string[]; // files urls [can be blob-urls or remote-urls]
}

export class BroadcastHandler {

    constructor(public requestHandler?: RequestHandler) { }

    /**
    * Prompt user to broadcast
    *
    * @param broadcastable - object containg info about the broadcast files and description
    *
    */
    broadcast(broadcastable: Broadcastable): Promise<void> {
        return new Promise(async (resolve, reject) => {
            try {
                if(this.requestHandler?.debug){
                    resolve();
                }else{
                    const promises = new Array();
                    for(const file of broadcastable.files){
                        promises.push(blobUrlToBase64(file));
                    }
                    broadcastable.files = await Promise.all(promises);
                    this.requestHandler?.request({
                        id: "request_id",
                        api: API_BROADCAST,
                        data: broadcastable
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