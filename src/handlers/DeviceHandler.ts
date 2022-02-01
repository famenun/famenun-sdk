import { API_GET_DEVICE_INFO, Requestable, RequestHandler } from "./RequestHandler";

export class DeviceInfo {
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