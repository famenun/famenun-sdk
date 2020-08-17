import { RequestHandler } from "./RequestHandler";

export class PageHandler {

    constructor(public requestHandler?: RequestHandler) { }

    run(id?: string): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                console.log(`run : ${id}`);
                // get the default/specific property of the page
                // add famenun app iframe
                var iframe = document.createElement("iframe");
                iframe.setAttribute("id", "page");
                iframe.setAttribute("sandbox", "allow-scripts allow-same-origin");
                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("hspace", "0");
                iframe.setAttribute("vspace", "0");
                iframe.setAttribute("src", "https://famenun.com/run/com.famenun.shotme");
                document.body.append(iframe);
            } catch (error) {
                reject(error);
            }
        });
    }

}
