import $ from "jquery";

export const API_PUBLISH = "https://apps.famenun.com/publish";

export class Publishable {
    ab?: string;
    fi?: Array<any>;
    mo?: number; 
    ve?: any;
    pr?: boolean;
}

export class PublishHandler {

    constructor(public debug?: boolean) { }

    /**
    * Prompt user to publish @param publishable
    *
    * @param publishable - the Object with data that you want to publish
    *
    */
    publish(publishable: Publishable): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                if(this.debug){
                    setTimeout(() => {
                        const num = Math.round(Math.random() * 100);
                        if(num % 2 == 0){
                            console.log(publishable);
                            resolve();
                        }else{
                            reject("Failed to pulish");
                        }
                    }, 3000);
                }else{
                    $.get(API_PUBLISH, JSON.parse(JSON.stringify(publishable))).done((data: any) => {
                        console.log(JSON.stringify(data));
                        if(!data.error){
                            resolve();
                        }else{
                            reject(data.message);
                        }
                    }).fail((error: any) => {
                        console.log(JSON.stringify(error));
                        reject(error);
                    });
                }
            }catch(error){
                reject(error);
            }
        });
    }
    
}