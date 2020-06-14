import $ from "jquery";

export const API_GET_CIRCLE = "https://apps.famenun.com/getCircle";

export class CircleHandler {
    
    constructor(public debug?: boolean) { }

    /**
    * Show prompt to user to get his circle
    */
    getCircle(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                if(this.debug){
                    setTimeout(() => {
                        const num = Math.round(Math.random() * 100);
                        if(num % 2 == 0){
                            resolve({
                                "name": "Best Friends",
                                "people": [
                                    "Aditya",
                                    "Amit",
                                    "Marshal",
                                    "Tarun"
                                ]
                            });
                        }else{
                            reject("Failed to get circle");
                        }
                    }, 3000);
                }else{
                    $.get(API_GET_CIRCLE, {}).done((data: any) => {
                        console.log(JSON.stringify(data));
                        if(!data.error){
                            resolve(data.data);
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