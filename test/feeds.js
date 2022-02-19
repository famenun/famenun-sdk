const temp = {
    id: "feeds_id",
    layout: "feeds|story|gems",
    dp: "https://exmaple.com/dp.jpg",
    username: "username of the person who ",
    description: "this is a title",
    data: [{
        type: "image|video",
        thumb: "https://example.com/thumbnail.jpg",
        url: "https://example.com/resource.jpg.mp4"
    }],
    action: "./index.html?src=article_id",
    reacts: true | false,
    notes: true | false
}

(() => {
    setTimeout(() => {
        __famenun__.emit({
            id: "bio",
            layout: "banner",
            data: {
                title: "Update your bio",
                background: "https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_960_720.jpg",
                path: "./index.html"
            }
        });
    }, 5000);
    setTimeout(() => {
        __famenun__.emit({
            id: "settings",
            layout: "banner",
            data: {
                title: "Review your settings",
                background: "#2196F3",
                path: "./index.html"
            }
        });
    }, 10000);
    setTimeout(() => {
        __famenun__.emit({
            id: "tales",
            layout: "banner",
            data: {
                title: "Watch your friends tales",
                background: "https://cdn.pixabay.com/photo/2020/03/16/14/58/people-4937226_960_720.jpg",
                path: "./index.html"
            }
        });
    }, 15000);
})();