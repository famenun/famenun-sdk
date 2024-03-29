import { Requestable, RequestHandler, API_GET_PROFILE, API_CREATE_SHORTCUT, API_GET_EMAIL, API_GET_PHONE_NUMBER } from "./RequestHandler";
import { resolveImage } from "../utils/Utility";

export class Shortcutable {
    id!: string; // shortcut id
    icon!: string; // dp of the shortcut
    title!: string; // name of the shortcut
    info!: string; // short helpful description about the shortcut functionality | not more than 51 chars
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
    createShortcut(shortcutable: Shortcutable): Promise<void> {
        return new Promise(async (resolve, reject) => {
            try {
                if(this.requestHandler?.debug){
                    resolve();
                }else{
                    shortcutable.icon = await resolveImage(shortcutable.icon);
                    this.requestHandler?.request({
                        id: "request_id",
                        api: API_CREATE_SHORTCUT,
                        data: shortcutable
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
    * Get verified mobile number access token
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