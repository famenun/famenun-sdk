import $ from "jquery";

export const API_OPEN_LINK = "https://apps.famenun.com/openLink";

export class LinkHandler {

    constructor(public debug?: boolean) { }

    /**
    * Open link in browser
    *
    * @param link - the link to be opened
    *
    */
    openLink(link: string): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                if(this.debug){
                    setTimeout(() => {
                        const num = Math.round(Math.random() * 100);
                        if(num % 2 == 0){
                            resolve();
                        }else{
                            reject("Failed to open link");
                        }
                    }, 3000);
                }else{
                    $.get(API_OPEN_LINK, {
                        link: encodeURIComponent(link)
                    }).done((data: any) => {
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