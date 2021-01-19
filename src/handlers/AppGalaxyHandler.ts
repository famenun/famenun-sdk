import { RequestHandler, API_GET_INSTALLED_APPS, Requestable, API_OPEN_APP, API_OPEN_APP_PROFILE } from "./RequestHandler";

export class AppGalaxyHandler {

    constructor(public requestHandler?: RequestHandler) { }

    /**
    * Get All Installed Apps of the user
    */
    getInstalledApps(): Promise<Array<any>> {
        return new Promise((resolve, reject) => {
            try {
                if(this.requestHandler?.debug){
                    resolve([
                        {
                            "id": "com.example.app",
                            "version": "1.0.0",
                            "name": "Test App",
                        }
                    ]);
                }else{
                    this.requestHandler?.request({
                        id: "request_id",
                        api: API_GET_INSTALLED_APPS
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
    
    /**
    * Open app profile in app galaxy
    * @param app is the id of the app
    */
    openAppProfile(app: string): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                if(this.requestHandler?.debug){
                    resolve();
                }else{
                    this.requestHandler?.request({
                        id: "request_id",
                        api: API_OPEN_APP_PROFILE,
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