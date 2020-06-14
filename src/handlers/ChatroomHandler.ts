import $ from "jquery";

export const API_OPEN_CHAT = "https://apps.famenun.com/openChat";

export class ChatroomHandler {
    
    constructor(public debug?: boolean) { }

    /**
    * Open Famenun chat with @param users
    *
    * @param users - The people with whom you want to open chat
    *
    */
    openChat(...users: Array<string>): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                if(this.debug){
                    setTimeout(() => {
                        const num = Math.round(Math.random() * 100);
                        if(num % 2 == 0){
                            console.log(users);
                            resolve();
                        }else{
                            reject("Failed to open chat");
                        }
                    }, 3000);
                }else{
                    $.get(API_OPEN_CHAT, { "users": users }).done((data: any) => {
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