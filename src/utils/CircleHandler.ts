

export class CircleHandler {
    
    getCircle(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
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
            }catch(error){
                reject(error);
            }
        });
    }
    
}