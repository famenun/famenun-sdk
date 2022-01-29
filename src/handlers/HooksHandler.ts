

export class Hookable {
    id?: string; // if defined only then reactions & comments ll be enabled else not
    layout?: "feeds" | "story" | "gem";
    dp?: string; // dp of the user
    username?: string; // user name to be displayed
    description?: string; // text info about the feed
    data?: {type?: "image" | "video", thum?: string, url?: string}[]; // containing files info
    action?: {path?: string, text?: string}; // path of the app which ll be opened on click this can be remote url as well
    expiry?: number; // for how long this content can be cached by famenun. default is 24 hrs
}