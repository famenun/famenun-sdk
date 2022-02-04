import { API_SHARE, Requestable, RequestHandler } from "./RequestHandler";

export class Shareable {
    text?: string;
}

export class ShareHandler {

    constructor(public requestHandler?: RequestHandler) { }

    /**
    * Share text to OS native apps
    */
    share(shareable: Shareable): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                if(this.requestHandler?.debug){
                    resolve();
                }else{
                    this.requestHandler?.request({
                        id: "request_id",
                        api: API_SHARE,
                        data: shareable
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