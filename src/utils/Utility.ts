import { emit } from "cluster";

export const mapFromObject = (object: any): Map<string, any> => {
    const map: Map<string, any> = new Map();
    if (object !== undefined) {
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                map.set(key, object[key]);
            };
        }
    }
    return map;
}

export const objectFromMap = (map: any): any => {
    const object: any = {};
    map.forEach((value: any, key: string) => {
        object[key] = value;
    });
    return object;
}


export const blobUrlToBase64 = (blobUrl: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        try {
            const request = new XMLHttpRequest();
            request.open('GET', blobUrl, true);
            request.responseType = 'blob';
            request.onload = function () {
                const reader = new FileReader();
                reader.readAsDataURL(request.response);
                reader.onerror = (error: any) => {
                    reject(error);
                };
                reader.onload = (event: any) => {
                    resolve(event.target.result);
                };
            };
            request.send();
        } catch (error) {
            reject(error);
        }
    })
}

export const resolveImage = (img: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        try {
            if (img.startsWith("blob")) {
                const base64 = await blobUrlToBase64(img);
                resolve(base64);
            }else if (img.startsWith("file") || img.startsWith("http")) {
                fetch(img)
                    .then(res => res.blob()) 
                    .then(async blob => {
                        let objectURL = URL.createObjectURL(blob);
                        const base64 = await blobUrlToBase64(objectURL);
                        resolve(base64);
                    }).catch(error => {
                        resolve(undefined);
                    });
            }else{
                resolve(undefined);
            }
        } catch (error) {
            resolve(undefined);
        }
    })
}