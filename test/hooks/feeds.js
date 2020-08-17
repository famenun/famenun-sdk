(() => {
    // the test emission
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
    // story emission
    __famenun__.emit({
        error: false,
        message: "data coming from feeds hook",
        type: "HOOK_EMISSION",
        data: {
            "id": "stories",
            "layout": {
                "padding": 1,
                "flow": "horizontal",
                "content": [{
                        "padding": 1,
                        "width": 20,
                        "gravity": "center",
                        "content": [{
                                "width": 80,
                                "height": 80,
                                "type": "image",
                                "content": "https://images.financialexpress.com/2020/05/PMModiSpeech1.jpg?w=1200&h=800&imflag=true",
                                "scaling": "mother",
                                "cornerRadius": 50,
                                "onClick": "./index.html?user=Namo"
                            },
                            {
                                "height": 20,
                                "content": "Namo",
                                "gravity": "center"
                            }
                        ]
                    },
                    {
                        "padding": 1,
                        "width": 20,
                        "gravity": "center",
                        "content": [{
                                "width": 80,
                                "height": 80,
                                "type": "image",
                                "content": "https://www.sundayguardianlive.com/wp-content/uploads/2019/12/pankaj-copy-1.jpg",
                                "scaling": "mother",
                                "cornerRadius": 50,
                                "onClick": "./index.html?user=Shah"
                            },
                            {
                                "height": 20,
                                "content": "Shah",
                                "gravity": "center"
                            }
                        ]
                    },
                    {
                        "padding": 1,
                        "width": 20,
                        "gravity": "center",
                        "content": [{
                                "width": 80,
                                "height": 80,
                                "type": "image",
                                "content": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Chanakya_artistic_depiction.jpg",
                                "scaling": "mother",
                                "cornerRadius": 50,
                                "onClick": "./index.html?user=Chankya"
                            },
                            {
                                "height": 20,
                                "content": "Chankya",
                                "gravity": "center"
                            }
                        ]
                    },
                    {
                        "padding": 1,
                        "width": 20,
                        "gravity": "center",
                        "content": [{
                                "width": 80,
                                "height": 80,
                                "type": "image",
                                "content": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQd1x_gD43xV6lu9uTNNXXDb1lmET79y5oyaQ&usqp=CAU",
                                "scaling": "mother",
                                "cornerRadius": 50,
                                "onClick": "./index.html?user=Krishna"
                            },
                            {
                                "height": 20,
                                "content": "Krishna",
                                "gravity": "center"
                            }
                        ]
                    },
                    {
                        "padding": 1,
                        "width": 20,
                        "gravity": "center",
                        "content": [{
                                "width": 80,
                                "height": 80,
                                "type": "image",
                                "content": "https://images.news18.com/ibnlive/uploads/2018/04/ngryHanuman.jpg?impolicy=website&width=536&height=356",
                                "scaling": "mother",
                                "cornerRadius": 50,
                                "onClick": "./index.html?user=Hanu"
                            },
                            {
                                "height": 20,
                                "content": "Hanu",
                                "gravity": "center"
                            }
                        ]
                    }
                ]
            }
        }
    });
})();