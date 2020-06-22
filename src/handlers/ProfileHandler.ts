import { Requestable, RequestHandler, API_GET_PROFILE, API_CREATE_SHORTCUT } from "./RequestHandler";
import { blobUrlToBase64 } from "../utils/Utility";

export class ProfileShortcut {
    dp!: string; // dp of the shortcut
    na!: string; // name of the shortcut
    /**
     * syntax of the path can have wild card for uid. for ex. "./profile.html?user={uid}"
     */
    pa!: string; // path that must be opened when user clicks the shortcut
}

export class ProfileHandler {

    constructor(public requestHandler?: RequestHandler) { }

    /**
    * Get currently logged in user's Profile.
    */
    getProfile(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                if(this.requestHandler?.debug){
                    resolve({
                        "id": "user_uid",
                        "dp": "user_dp",
                        "na": "user name"
                    });
                }else{
                    this.requestHandler?.request({
                        id: "request_id",
                        api: API_GET_PROFILE
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
    * Create shortcut in profile
    */
    createShortcut(profileShortcut: ProfileShortcut): Promise<void> {
        return new Promise(async (resolve, reject) => {
            try {
                if(this.requestHandler?.debug){
                    resolve();
                }else{
                    profileShortcut.dp = await blobUrlToBase64(profileShortcut.dp);
                    this.requestHandler?.request({
                        id: "request_id",
                        api: API_CREATE_SHORTCUT,
                        data: profileShortcut
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