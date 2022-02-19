import * as SDK from "./index";
import { CURRENCY_INR } from "./handlers/PaymentsHandler";

describe("SDK", () => {
    it("initailse SDk", async () => {

        const api = SDK.init(true);

        try {
            const profile: any = await api.profileHandler?.getProfile();
            console.log(profile);
        } catch (error) {
            console.log(error);
        }

        try {
            await api.profileHandler?.createShortcut({
                id: "shortcut_id",
                icon: "https://famenun.com/dp.png",
                title: "About me",
                info: "Click to know more about me",
                path: "./aboutme.html?user={uid}"
            });
            console.log("shortcut created");
        } catch (error) {
            console.log(error);
        }

        try {
            const data: any = await api.profileHandler?.getEmailAccessToken();
            console.log(data);
        } catch (error) {
            console.log(error);
        }

        try {
            const data: any = await api.profileHandler?.getPhoneNumberAccessToken();
            console.log(data);
        } catch (error) {
            console.log(error);
        }

        try {
            const circle: any = await api.clubsHandler?.getClub();
            console.log(circle);
        } catch (error) {
            console.log(error);
        }

        try {
            await api.paymentsHandler?.makePayment({
                referenceId: "txn_id", 
                currency: CURRENCY_INR, 
                amount: 21, 
                to: "aditya",
                note: "buy shots premium"
            });
            console.log("payment made");
        } catch (error) {
            console.log(error);
        }

        try {
            await api.broadcastHandler?.broadcast({
                files: ["file://some/file/path"]
            });
            console.log("broadcast made");
        } catch (error) {
            console.log(error);
        }

        try {
            await api.chatroomsHandler?.openChat(["Aditya", "Amit"]);
            console.log("chat opened");
        } catch (error) {
            console.log(error);
        }

        try {
            await api.appGalaxyHandler?.openApp({
                appId: "test_app"
            });
            console.log("app opened");
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
            await api.linksHandler?.openLink("https://legal.famenun.com/policies");
            console.log("link opened");
        } catch (error) {
            console.log(error);
        }
        
        try {
            const link = await api.linksHandler?.createDeepLink({
                path: "./index.html?user=user_uid"
            });
            console.log("link : " + link);
        } catch (error) {
            console.log(error);
        }

    });
});

