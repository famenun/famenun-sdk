function emitFeeds(time) {
    setTimeout(() => {
        __famenun__.emit({
            error: false,
            message: "data coming from feeds hook",
            type: "HOOK_EMISSION",
            data: {
                "id": "first",
                "layout": {
                    "content": [{
                            "height": 45,
                            "flow": "horizontal",
                            "content": [{
                                    "width": 50,
                                    "type": "image",
                                    "content": "https://images.pexels.com/photos/1106452/pexels-photo-1106452.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                                    "scaling": "mother",
                                    "marginRight": 1
                                },
                                {
                                    "width": 50,
                                    "type": "image",
                                    "content": "https://images.pexels.com/photos/682375/pexels-photo-682375.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                                    "scaling": "mother",
                                    "marginLeft": 1,
                                    "cornerRadius": 50
                                }
                            ]
                        },
                        {
                            "height": 10,
                            "content": "this is a test title",
                            "fontSize": 80
                        },
                        {
                            "flow": "over",
                            "content": [{
                                    "type": "image",
                                    "content": "https://images.unsplash.com/photo-1486578077620-8a022ddd481f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                                    "scaling": "mother"
                                },
                                {
                                    "height": 15,
                                    "content": "harkal",
                                    "fontSize": 80,
                                    "color": "#1df2a1",
                                    "position": "bottom"
                                }
                            ]
                        }
                    ]
                }
            }
        });
        emitFeeds(time + 3000);
    }, time);
}
emitFeeds(0);