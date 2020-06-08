export class ProfileHandler {
    
    getProfile(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    const num = Math.round(Math.random() * 100);
                    if(num % 2 == 0){
                        resolve({
                            "name": "Harkal",
                            "city": "Udaipur"
                        });
                    }else{
                        reject("Failed to get profile");
                    }
                }, 3000);
            }catch(error){
                reject(error);
            }
        });
    }

}