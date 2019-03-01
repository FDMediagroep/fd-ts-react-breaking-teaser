import { PureComponent } from "react";
interface SourceSetType {
    media: string;
    srcSet: string;
}
interface ImageType {
    alt: string;
    title?: string;
    src: string;
}
export interface Props {
    sourceSets?: SourceSetType[];
    image?: ImageType;
    figCaption?: string;
}
export default class TeaserFigure extends PureComponent<Props, any> {
    render(): JSX.Element;
}
export {};
