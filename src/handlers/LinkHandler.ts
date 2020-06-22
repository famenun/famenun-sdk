import { RequestHandler, Requestable, API_OPEN_LINK } from "./RequestHandler";

export class LinkHandler {

    constructor(public requestHandler?: RequestHandler) { }

    /**
    * Open link in browser
    *
    * @param link - the link to be opened
    *
    */
    openLink(link: string): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                this.requestHandler?.request({
                    id: "request_id",
                    api: API_OPEN_LINK,
                    data: {
                        link: link
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