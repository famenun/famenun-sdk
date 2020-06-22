import { RequestHandler, API_INSERT_DATA, Requestable, API_GET_DATA } from "./RequestHandler";

export class Insertable {
    key?: string;
    value?: string;
}

export class DatabaseHandler {

    constructor(public requestHandler?: RequestHandler) { }

    /**
    * Insert data into database
    *
    * @param insertable - object having data to be saved
    *
    */
    insertData(insertable: Insertable): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                if(this.requestHandler?.debug){
                    resolve();
                }else{
                    this.requestHandler?.request({
                        id: "request_id",
                        api: API_INSERT_DATA,
                        data: insertable
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
            } catch (error) {
                reject(error);
            }
        });
    }
    
    /**
    * Get data from database
    *
    * @param key - unique identifier of the data being inserted earlier
    *
    */
    getData(key: string): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                if(this.requestHandler?.debug){
                    resolve(`value of the key : ${key}`);
                }else{
                    this.requestHandler?.request({
                        id: "request_id",
                        api: API_GET_DATA,
                        data: {
                            key: key
                        }
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