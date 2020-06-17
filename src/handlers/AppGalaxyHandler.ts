import $ from "jquery";

export const API_GET_INSTALLED_APPS = "https://apps.famenun.com/getInstalledApps";
export const API_OPEN_APP = "https://apps.famenun.com/openApp";
export const API_OPEN_APP_PROFILE = "https://apps.famenun.com/openAppProfile";

export class AppGalaxyHandler {

    constructor(public debug?: boolean) { }

    /**
    * Get All Installed Apps of the user
    */
    getInstalledApps(): Promise<Array<any>> {
        return new Promise((resolve, reject) => {
            try {
                if(this.debug){
                    setTimeout(() => {
                        const num = Math.round(Math.random() * 100);
                        if(num % 2 == 0){
                            resolve([{
                                "id": "app01",
                                "name": "App One"
                            }]);
                        }else{
                            reject("Failed to get apps");
                        }
                    }, 3000);
                }else{
                    $.get(API_GET_INSTALLED_APPS, {}).done((data: any) => {
                        console.log(JSON.stringify(data));
                        resolve();
                    }).fail((error: any) => {
                        console.log(JSON.stringify(error));
                        reject(error);
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
                if(this.debug){
                    setTimeout(() => {
                        const num = Math.round(Math.random() * 100);
                        if(num % 2 == 0){
                            resolve();
                        }else{
                            reject("Failed to open app");
                        }
                    }, 3000);
                }else{
                    $.get(API_OPEN_APP, {
                        app: app
                    }).done((data: any) => {
                        console.log(JSON.stringify(data));
                        resolve();
                    }).fail((error: any) => {
                        console.log(JSON.stringify(error));
                        reject(error);
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
                if(this.debug){
                    setTimeout(() => {
                        const num = Math.round(Math.random() * 100);
                        if(num % 2 == 0){
                            resolve();
                        }else{
                            reject("Failed to open app profile");
                        }
                    }, 3000);
                }else{
                    $.get(API_OPEN_APP_PROFILE, {
                        app: app
                    }).done((data: any) => {
                        console.log(JSON.stringify(data));
                        resolve();
                    }).fail((error: any) => {
                        console.log(JSON.stringify(error));
                        reject(error);
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    }

}