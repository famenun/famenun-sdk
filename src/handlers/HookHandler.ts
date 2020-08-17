import { RequestHandler } from "./RequestHandler";

export class FView {


    /**
     * identifier of the view
     */
    id!: string;
    /**
     * can be @container or @image
     */
    type?: string;
    /**
     * can be mother or content or any numeric value which ll signify the % of mother
     */
    width?: number;
    /**
     * can be mother or content or any numeric value which ll signify the % of mother
     */
    height?: number;
    /**
     * degree of rotation
     */
    rotate?: number;
    /**
     * degree of rotation on X axis
     */
    rotateX?: number;
    /**
     * degree of rotation on Y axis
     */
    rotateY?: number;

    scale?: number;
    scaleX?: number;
    scaleY?: number;

    padding?: number;
    paddingLeft?: number;
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;

    margin?: number;
    marginLeft?: number;
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;

    cornerRadius?: number;
    /**
     * alignment of this view relative to mother view
     * it can be left, top right, bottom, center
     */
    position?: string;
    /**
     * alignment of this view relative to mother view
     * it can be left, top right, bottom, center
     */
    gravity?: string;

    /**
     * it can be anything or array
     * and ll contain data according to the @type
     */
    content?: any;








    flow?: string;
    fontSize?: number;
    fontColor?: string;







    /**
     * image scaling can be mother or content
     */
    scaling?: string;

}

export class HookHandler {

    constructor(public requestHandler?: RequestHandler) { }

    private setContent(availableWidth: number, fView: FView): HTMLElement | any {
        if (fView.type !== undefined && fView.type === "image") {
            const image: HTMLElement = this.generateStyle(availableWidth, document.createElement("img"), fView);
            image.style.objectFit = fView.scaling === "content" ? 'contain' : 'cover';
            image.setAttribute("src", fView.content);
            return image;
        } else {
            if(fView.content !== undefined){
                if(Array.isArray(fView.content)) {
                    let containerElement: HTMLElement;
                    if (fView.flow !== undefined && fView.flow === "over") {
                        const div: HTMLElement = this.generateStyle(availableWidth, document.createElement("div"), fView);
                        div.style.display = 'grid';
                        div.style.gridTemplateColumns = '1fr';
                        containerElement = div;
                    } else {
                        const div: HTMLElement = this.generateStyle(availableWidth, document.createElement("div"), fView);
                        containerElement = div;
                    }
                    const fViews: Array<FView> = JSON.parse(JSON.stringify(fView.content));
                    let consumedWidth: number = 0;
                    let consumedHeight: number = 0;
                    let flow: string = "vertical";
                    if (fView.flow != null) {
                        if(fView.flow === "over"){
                            flow = "over";
                        }
                        if(fView.flow === "horizontal"){
                            flow = "horizontal";
                        }
                    }
                    for (const fView1 of fViews) {
                        if(flow === "horizontal"){
                            if(fView1.width !== undefined && fView1.width !== 0){
                                consumedWidth = consumedWidth + fView1.width;
                            }else{
                                fView1.width = 100 - consumedWidth > 100 ? 100 : 100 - consumedWidth;
                            }
                        }
                        if(flow === "vertical"){
                            if(fView1.height !== undefined && fView1.height !== 0){
                                consumedHeight = consumedHeight + fView1.height;
                            }else{
                                fView1.height = 100 - consumedHeight > 100 ? 100 : 100 - consumedHeight;
                            }
                        }
                        containerElement.append(this.setContent(Number(containerElement.style.width.split("px")[0]), fView1));
                    }
                    return containerElement;
                }else{
                    const textElement: HTMLElement = this.generateStyle(availableWidth, document.createElement("div"), fView);
                    textElement.innerText = fView.content;
                    if(fView.fontSize !== undefined && fView.fontSize != 0){
                        textElement.style.fontSize = `${fView.fontSize * Number(textElement.style.height.split("px")[0]) * 0.01 * 0.5}px`;
                    }
                    if(fView.fontColor != undefined){
                        textElement.style.color = fView.fontColor;
                    }
                    return textElement;
                }
            }
        }
    }

    private generateStyle(availableWidth: number, element: HTMLElement, fView: FView): HTMLElement {
        element.style.display = 'flex';
        element.style.gridRowStart = '1';
        element.style.gridColumnStart = '1';
        const style: any = element.style;
        style.contain = 'content';
        
        element.style.flexFlow = fView.flow === 'horizontal' ? 'row' : 'column';
        // element.style.flex = fView.width !== undefined && fView.width !== 0 ? `${fView.width / 100}` : `1`;
        element.style.width = fView.width !== undefined && fView.width !== 0 ? `${availableWidth * fView.width * 0.01}px` : `${availableWidth}px`;
        if(fView.height !== undefined && fView.height !== 0){
            element.style.height = `${availableWidth * fView.height * 0.01}px`;
        }

        // margin
        const marginLeft = fView.marginLeft !== undefined && fView.marginLeft !== 0 ? fView.marginLeft : fView.margin !== undefined ? fView.margin : 0;
        const marginTop = fView.marginTop !== undefined && fView.marginTop !== 0 ? fView.marginTop : fView.margin !== undefined ? fView.margin : 0;
        const marginRight = fView.marginRight !== undefined && fView.marginRight !== 0 ? fView.marginRight : fView.margin !== undefined ? fView.margin : 0;
        const marginBottom = fView.marginBottom !== undefined && fView.marginBottom !== 0 ? fView.marginBottom : fView.margin !== undefined ? fView.margin : 0;

        element.style.marginLeft = `${marginLeft * availableWidth * 0.01}px`;
        element.style.marginTop = `${marginTop * availableWidth * 0.01}px`;
        element.style.marginRight = `${marginRight * availableWidth * 0.01}px`;
        element.style.marginBottom = `${marginBottom * availableWidth * 0.01}px`;

        // padding
        const paddingLeft = fView.paddingLeft !== undefined && fView.paddingLeft !== 0 ? fView.paddingLeft : fView.padding !== undefined ? fView.padding : 0;
        const paddingTop = fView.paddingTop !== undefined && fView.paddingTop !== 0 ? fView.paddingTop : fView.padding !== undefined ? fView.padding : 0;
        const paddingRight = fView.paddingRight !== undefined && fView.paddingRight !== 0 ? fView.paddingRight : fView.padding !== undefined ? fView.padding : 0;
        const paddingBottom = fView.paddingBottom !== undefined && fView.paddingBottom !== 0 ? fView.paddingBottom : fView.padding !== undefined ? fView.padding : 0;

        element.style.paddingLeft = `${paddingLeft * availableWidth * 0.01}px`;
        element.style.marginTop = `${paddingTop * availableWidth * 0.01}px`;
        element.style.marginRight = `${paddingRight * availableWidth * 0.01}px`;
        element.style.marginBottom = `${paddingBottom * availableWidth * 0.01}px`;

        // scale
        const scaleX = fView.scaleX != 0 ? fView.scaleX : fView.scale != 0 ? fView.scale : 1;
        const scaleY = fView.scaleY != 0 ? fView.scaleY : fView.scale != 0 ? fView.scale : 1;

        element.style.transform = `scale(${scaleX}, ${scaleY})`;

        // rotation
        const rotateX = fView.rotateX != 0 ? fView.rotateX : fView.rotate;
        const rotateY = fView.rotateY != 0 ? fView.rotateY : fView.rotate;

        element.style.transform = `${element.style.transform} rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        const borderRadius = fView.cornerRadius !== undefined ? fView.cornerRadius : 0;
        element.style.borderRadius = `${borderRadius * availableWidth * 0.01}px`;

        // position
        element.style.alignSelf = 'center';
        if (fView.position != undefined) {
            switch (fView.position) {
                case "left":
                    break;
                case "leftTop":
                    break;
                case "top":
                    break;
                case "topRight":
                    break;
                case "right":
                    break;
                case "rightBottom":
                    break;
                case "bottom":
                    break;
                case "bottomLeft":
                    break;
                case "centerVertical":
                    break;
                case "centerHorizontal":
                    break;
            }
        }

        // position
        element.style.alignItems = 'center';
        element.style.justifyContent = 'center';
        element.style.textAlign = 'center';
        if (fView.gravity != undefined) {
            switch (fView.gravity) {
                case "left":
                    break;
                case "leftTop":
                    break;
                case "top":
                    break;
                case "topRight":
                    break;
                case "right":
                    break;
                case "rightBottom":
                    break;
                case "bottom":
                    break;
                case "bottomLeft":
                    break;
                case "centerVertical":
                    break;
                case "centerHorizontal":
                    break;
            }
        }

        return element;
    }

    fViewToHtml(rootView: HTMLElement, fView: FView): HTMLElement {
        const element: HTMLElement = this.setContent(rootView.offsetWidth, fView);
        if(Number(element.style.height.split("px")[0]) > rootView.offsetWidth){
            element.style.height = `${rootView.offsetWidth}px`;
        }
        return element;
    }

}