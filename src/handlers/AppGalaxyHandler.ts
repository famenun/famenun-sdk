import { RequestHandler, Requestable, API_OPEN_APP } from "./RequestHandler";

export class Openable {
    appId!: string; // app id
    path?: string; // path needs to be opened
}

export class AppGalaxyHandler {

    constructor(public requestHandler?: RequestHandler) { }

    /**
    * Open app
    * @param openable is the config object containing app id and the path needs to be opened
    */
    openApp(openable: Openable): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                if(this.requestHandler?.debug){
                    resolve();
                }else{
                    this.requestHandler?.request({
                        id: "request_id",
                        api: API_OPEN_APP,
                        data: openable
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