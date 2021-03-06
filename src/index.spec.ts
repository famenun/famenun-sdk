import * as SDK from "./index";
import { CURRENCY_INR } from "./handlers/PaymentHandler";

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
                image: "https://famenun.com/dp.png",
                name: "About me",
                path: "./aboutme.html?user=user_uid"
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
            const circle: any = await api.circleHandler?.getCircle();
            console.log(circle);
        } catch (error) {
            console.log(error);
        }

        try {
            await api.paymentHandler?.makePayment({
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
            await api.publishHandler?.publish(["file://some/file/path"]);
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
            const apps: any = await api.appGalaxyHandler?.getInstalledApps();
            console.log(apps);
        } catch (error) {
            console.log(error);
        }

        try {
            await api.appGalaxyHandler?.openApp("test_app");
            console.log("app opened");
        } catch (error) {
            console.log(error);
        }

        try {
            await api.appGalaxyHandler?.openAppProfile("test_app");
            console.log("app profile opened");
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
            await api.linkHandler?.openLink("https://legal.famenun.com/policies");
            console.log("link opened");
        } catch (error) {
            console.log(error);
        }
        
        try {
            const link = await api.linkHandler?.createDeepLink("./index.html?user=user_uid");
            console.log("link : " + link);
        } catch (error) {
            console.log(error);
        }

        try {
            await api.notificationHandler?.notify({
                title: "this is notification title",
                image: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401"
            });
            console.log("notified");
        } catch (error) {
            console.log(error);
        }

    });
});

