import { Requestable, RequestHandler, API_GET_PROFILE, API_CREATE_SHORTCUT, API_GET_EMAIL, API_GET_PHONE_NUMBER } from "./RequestHandler";
import { blobUrlToBase64, resolveImage } from "../utils/Utility";

export class ProfileShortcut {
    image!: string; // dp of the shortcut
    name!: string; // name of the shortcut
    path!: string; // path that must be opened when user clicks the shortcut
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
                        "accessToken": "uid_access_token",
                        "uId": "user_uid",
                        "dp": "user_dp",
                        "name": "user name"
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
                    profileShortcut.image = await resolveImage(profileShortcut.image);
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

    /**
    * Get verified email access token
    */
    getEmailAccessToken(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                if(this.requestHandler?.debug){
                    resolve({
                        "accessToken": "email_access_token"
                    });
                }else{
                    this.requestHandler?.request({
                        id: "request_id",
                        api: API_GET_EMAIL
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
    * Get verified email access token
    */
    getPhoneNumberAccessToken(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                if(this.requestHandler?.debug){
                    resolve({
                        "accessToken": "phone_access_token"
                    });
                }else{
                    this.requestHandler?.request({
                        id: "request_id",
                        api: API_GET_PHONE_NUMBER
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