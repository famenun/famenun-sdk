import { RequestHandler, Requestable, API_GET_LOCATION } from "./RequestHandler";

export class Notifiable {
    title?: string;
    description?: string;
    image?: string;
    path?: string;
}

export class LocationHandler {

    constructor(public requestHandler?: RequestHandler) { }

    /**
    * Open link in browser
    *
    * @param notifiable - object containing notification data
    *
    */
    getLocation(): Promise<{lat: number, lng: number}> {
        return new Promise((resolve, reject) => {
            try {
                if(this.requestHandler?.debug){
                    resolve({
                        lat: 0,
                        lng: 0 
                    });
                }else{
                    this.requestHandler?.request({
                        id: "location_request_id",
                        api: API_GET_LOCATION,
                        data: {}
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