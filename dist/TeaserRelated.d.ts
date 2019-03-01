import { PureComponent } from "react";
export interface RelatedArticle {
    longread?: boolean;
    title: string;
    url: string;
    uuid: string;
}
export interface Props {
    items?: RelatedArticle[];
}
export default class TeaserRelated extends PureComponent<Props, any> {
    render(): JSX.Element | null;
}
declare const GlobalStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
export { GlobalStyle as TeaserRelatedStyle };
