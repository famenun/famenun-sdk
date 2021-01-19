export interface OnFamenunAppListener {
    onFamenuAppOnline(url: string): void;
}
export interface CodeExecutionListener {
    onExecute(): void;
    onError(message: string): void;
}
export declare class CommandHandler {
    private webSocket;
    constructor();
    execute(codeExecutionListener: CodeExecutionListener, command: any): void;
}
