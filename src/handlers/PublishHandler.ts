import { RequestHandler, Requestable, API_PUBLISH } from "./RequestHandler";
import { blobUrlToBase64 } from "../utils/Utility";

export class PublishHandler {

    constructor(public requestHandler?: RequestHandler) { }

    /**
    * Prompt user to publish broadcast
    *
    * @param files - files to be published
    *
    */
    publish(files: Array<string>): Promise<void> {
        return new Promise(async (resolve, reject) => {
            try {
                const promises = new Array();
                for(const file of files){
                    promises.push(blobUrlToBase64(file));
                }
                const result = await Promise.all(promises);
                this.requestHandler?.request({
                    id: "request_id",
                    api: API_PUBLISH,
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
            } catch (error) {
                reject(error);
            }
        });
    }
    
}