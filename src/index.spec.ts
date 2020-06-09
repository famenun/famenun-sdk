import * as SDK from "./index";
import { CURRENCY_INR } from "./utils/PaymentHandler";

describe("SDK", () => {
    it("initailse SDk", async () => {

        const api = SDK.init("app_id", true);

        try {
            const profile: any = await api.profileHandler?.getProfile();
            console.log(profile);
        } catch (error) {
            console.log(error);
        }

        try {
            const circle: any = await api.circleHandler?.getCircle();
            console.log(circle);
        } catch (error) {
            console.log(error);
        }

        try {
            await api.paymentHandler?.makePayment({
                id: "txn_id", 
                cu: CURRENCY_INR, 
                am: 21, 
                re: "aditya"
            });
            console.log("payment made");
        } catch (error) {
            console.log(error);
        }

        try {
            await api.publishHandler?.publish({
                "ab": "this is a test broadcast"
            });
            console.log("broadcast made");
        } catch (error) {
            console.log(error);
        }

        try {
            await api.chatroomHandler?.openChat("Aditya", "Amit");
            console.log("chat opened");
        } catch (error) {
            console.log(error);
        }

        try {
            await api.toastHandler?.showToast("This is a toast");
            console.log("Toast made");
        } catch (error) {
            console.log(error);
        }

        try {
            await api.databaseHandler?.insertData({
                table: "feeds",
                id: "first_entry",
                value: "this is a test entry"
            });
            console.log("Data inserted");
        } catch (error) {
            console.log(error);
        }

        try {
            const data = await  api.databaseHandler?.getData({
                table: "feeds"
            });
            console.log(data);
        } catch (error) {
            console.log(error);
        }

    });
});

