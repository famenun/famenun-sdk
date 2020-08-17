import { RequestHandler, Requestable, API_OPEN_LINK, API_CREATE_DEEP_LINK } from "./RequestHandler";

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
                if(this.requestHandler?.debug){
                    resolve();
                }else{
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
                }
            } catch (error) {
                reject(error);
            }
        });
    }

    /**
    * Create short link for your app
    *
    * @param path - the path of your app that ll be opened on click
    *
    */
    createDeepLink(path: string): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                if(this.requestHandler?.debug){
                    resolve("https://l.famenun.com/cjinr8u");
                }else{
                    this.requestHandler?.request({
                        id: "request_id",
                        api: API_CREATE_DEEP_LINK,
                        data: {
                            path: path
                        }
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
            } catch (error) {
                reject(error);
            }
        });
    }
    
}