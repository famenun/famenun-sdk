import { RequestHandler, Requestable, API_OPEN_APP } from "./RequestHandler";

export class AppGalaxyHandler {

    constructor(public requestHandler?: RequestHandler) { }

    /**
    * Open app
    * @param app is the id of the app to be opened
    */
    openApp(app: string): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                if(this.requestHandler?.debug){
                    resolve();
                }else{
                    this.requestHandler?.request({
                        id: "request_id",
                        api: API_OPEN_APP,
                        data: {
                            app: app
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