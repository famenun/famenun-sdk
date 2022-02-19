import { API_GET_DEVICE_INFO, API_TOGGLE_FULLSCREEN, Requestable, RequestHandler } from "./RequestHandler";

export class DeviceInfo {
    theme?: string; // dark / light / system
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
                        theme: "system"
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

    /**
    * Toogle device fullscreen mode
    */
    toggleFullscreen(fullscreen: boolean): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                if(this.requestHandler?.debug){
                    resolve();
                }else{
                    this.requestHandler?.request({
                        id: "request_id",
                        api: API_TOGGLE_FULLSCREEN,
                        data: {
                            fullscreen: fullscreen
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
            }catch(error){
                reject(error);
            }
        });
    }

}