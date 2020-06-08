
export class Publishable {
    ab?: string;
    fi?: Array<any>;
    mo?: number; 
    ve?: any;
}

export class PublishHandler {
    
    publish(publishable: Publishable): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    const num = Math.round(Math.random() * 100);
                    if(num % 2 == 0){
                        console.log(publishable);
                        resolve();
                    }else{
                        reject("Failed to pulish");
                    }
                }, 3000);
            }catch(error){
                reject(error);
            }
        });
    }
    
}