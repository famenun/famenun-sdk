import $ from "jquery";

export const API_INSERT_DATA = "https://apps.famenun.com/insertData";
export const API_GET_DATA = "https://apps.famenun.com/getData";

export class Insertable {
    table?: string;
    id?: string;
    value?: string;
}

export class DataQuery {
    table!: string;
    /**
    * Can be 'ASC' or 'DESC'
    */
    order?: string;
    offset?: string;
    limit?: number;
}

export class DataEntity {
    id?: string;
    value?: string;
    time?: number;
}

export class DatabaseHandler {

    constructor(public debug?: boolean) { }

    /**
    * Insert data into database
    *
    * @param table - Table to categorise your data, where the data is being kept
    * @param id - unique identifier in tha table, if some value already exist that ll be overriden
    * @param data - data that you want to keep
    *
    */
    insertData(insertable: Insertable): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                if (this.debug) {
                    setTimeout(() => {
                        const num = Math.round(Math.random() * 100);
                        if (num % 2 == 0) {
                            resolve();
                        } else {
                            reject("Failed to insert data");
                        }
                    }, 3000);
                } else {
                    $.get(API_INSERT_DATA, JSON.parse(JSON.stringify(insertable)))
                        .done((data: any) => {
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

    /**
    * Get data from database
    *
    * @param table - Table to categorise your data, where the data is being kept
    * @param id - unique identifier in tha table, if some value already exist that ll be overriden
    *
    */
    getData(dataQuery: DataQuery): Promise<Array<DataEntity>> {
        return new Promise((resolve, reject) => {
            try {
                if (this.debug) {
                    setTimeout(() => {
                        const num = Math.round(Math.random() * 100);
                        if (num % 2 == 0) {
                            resolve([{
                                id: "data_id",
                                value: "this is a test value in the database",
                                time: Date.now()
                            }]);
                        } else {
                            reject("Failed to get data");
                        }
                    }, 3000);
                } else {
                    $.get(API_GET_DATA, JSON.parse(JSON.stringify(dataQuery)))
                        .done((data: any) => {
                            console.log(JSON.stringify(data));
                            resolve(data.data);
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