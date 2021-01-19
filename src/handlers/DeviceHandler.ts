import { API_GET_DEVICE_INFO, Requestable, RequestHandler } from "./RequestHandler";

export class DeviceInfo {
    id?: string; // unqiue identifier of the device
    ip?: string; // network ip of the user
    app?: string; // famenun android/ios else browser name
    os?: string; // android ios ubuntu windows
    theme?: string; // dark / light / system
    notificationAccessToken?: string; // notification access token
}

export class DeviceHandler {

    constructor(public requestHandler?: RequestHandler) { }

    /**
    * Get basic data about the device on which the app is being used
    */
    getDeviceInfo(): Promise<DeviceInfo> {
        return new Promise((resolve, reject) => {
            try {
                if(this.requestHandler?.debug){
                    resolve({
                        id: "test_device_id",
                        ip: "1.2.3.4",
                        app: "Famenun Web",
                        os: "Famenun Web OS",
                        theme: "system",
                        notificationAccessToken: "test_notification_access_token"
                    });
                }else{
                    this.requestHandler?.request({
                        id: "request_id",
                        api: API_GET_DEVICE_INFO
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
            }catch(error){
                reject(error);
            }
        });
    }

}