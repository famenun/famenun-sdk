import { RequestHandler, Requestable, API_OPEN_CHAT, API_SEND_MESSAGE } from "./RequestHandler";

export class ChatroomsHandler {
    
    constructor(public requestHandler?: RequestHandler) { }

    /**
    * Open Famenun chat with @param users
    *
    * @param users - The people with whom you want to open chat
    *
    */
    openChat(users: string[]): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                if(this.requestHandler?.debug){
                    resolve();
                }else{
                    this.requestHandler?.request({
                        id: "request_id",
                        api: API_OPEN_CHAT,
                        data: users
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
    * Get chatroom acess token
    *
    * Using this token app can send direct mesage to the user in their chatroom
    *
    */
    sendMessage(): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                if(this.requestHandler?.debug){
                    resolve("chatroom_access_token");
                }else{
                    this.requestHandler?.request({
                        id: "request_id",
                        api: API_SEND_MESSAGE
                    }, {
                        onComplete(requestable: Requestable): void {
                            if(!requestable.error){
                                resolve(requestable.data.accessToken);
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
