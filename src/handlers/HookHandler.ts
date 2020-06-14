import $ from "jquery";

export const API_REGISTER_HOOK = "https://apps.famenun.com/registerHook";

export class Hookable {
    id?: string; // unique identifier of the hook
    pa?: string; // path of the hook js file relative to manifest file
    do?: string; // domain of the hook which can be feeds, explore, notifications, chatroom, profile
}

export class HookHandler {

    constructor(public debug?: boolean) { }

    /**
    * Register a hook to push data later int heir respective domains
    *
    * @param hookable - the hook you want to register
    *
    */
    registerHook(hookable: Hookable): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                if(this.debug){
                    setTimeout(() => {
                        const num = Math.round(Math.random() * 100);
                        if(num % 2 == 0){
                            resolve();
                        }else{
                            reject("Failed to register hook");
                        }
                    }, 3000);
                }else{
                    $.get(API_REGISTER_HOOK, JSON.parse(JSON.stringify(hookable))).done((data: any) => {
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