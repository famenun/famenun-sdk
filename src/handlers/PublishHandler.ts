import $ from "jquery";

export const API_PUBLISH = "https://apps.famenun.com/publish";

export class PublishHandler {

    constructor(public debug?: boolean) { }

    /**
    * Prompt user to publish broadcast
    *
    * @param files - files to be published
    *
    */
    publish(files: Array<string>): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                console.log(JSON.stringify(files));
                if (this.debug) {
                    setTimeout(() => {
                        const num = Math.round(Math.random() * 100);
                        if (num % 2 == 0) {
                            console.log(files);
                            resolve();
                        } else {
                            reject("Failed to pulish");
                        }
                    }, 3000);
                } else {
                    $.get(API_PUBLISH, {
                        files: files
                    }).done((data: any) => {
                        console.log(JSON.stringify(data));
                        if (!data.error) {
                            resolve();
                        } else {
                            reject(data.message);
                        }
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