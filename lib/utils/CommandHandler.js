"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FamenunAppHandler = require("@famenun/app");
class CommandHandler {
    constructor() {
        const self = this;
        const onFamenunAppListener = {
            onFamenuAppOnline(url) {
                self.webSocket = new WebSocket(url);
            }
        };
        new FamenunAppHandler(onFamenunAppListener);
    }
    execute(codeExecutionListener, command) {
        if (this.webSocket !== undefined) {
            this.webSocket.send(command);
            codeExecutionListener.onExecute();
        }
        else {
            codeExecutionListener.onError("Websocket is not connected");
        }
    }
}
exports.CommandHandler = CommandHandler;
