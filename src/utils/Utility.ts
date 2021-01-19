
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


export const blobUrlToBase64 = (url: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        try {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                const reader: any = new FileReader();
                reader.onerror = reject;
                reader.onloadend = function () {
                    resolve(reader.result.toString());
                }
                reader.readAsDataURL(xhr.response);
            };
            xhr.open('GET', url);
            xhr.responseType = 'blob';
            xhr.send();
        } catch (error) {
            reject(error);
        }
    })
}

export const resolveImage = (img: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        try {
            if (img.startsWith("data")) {
                resolve(img);
            } else {
                fetch(img)
                    .then(res => res.blob())
                    .then(async blob => {
                        let objectURL = URL.createObjectURL(blob);
                        const base64 = await blobUrlToBase64(objectURL);
                        resolve(base64);
                    }).catch(error => {
                        resolve(undefined);
                    });
            }
        } catch (error) {
            resolve(undefined);
        }
    })
}

export const isLoadedInIframe = (): boolean => {
    try {
        return window.self !== window.top;
    } catch (error) {
        console.log(error);
        return true;
    }
}