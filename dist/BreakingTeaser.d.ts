import React, { PureComponent } from "react";
import { CardTypes } from "@fdmg/fd-card";
import { RelatedArticle } from "./TeaserRelated";
export interface Props {
    alt: string;
    bookmarked?: boolean;
    bookmarkTitle?: string;
    cardStyle?: CardTypes;
    className?: string;
    comments?: number;
    cropRectangle?: string;
    description?: string;
    hashTags?: string;
    onBookmark?: (e: React.MouseEvent<HTMLElement>) => void;
    related?: RelatedArticle[];
    id: string;
    imageUrl: string;
    readableAge: string;
    removeBookmarkTitle?: string;
    shareTitle?: string;
    subject: string;
    title: string;
    url: string;
}
export default class BreakingTeaser extends PureComponent<Props, any> {
    state: any;
    render(): JSX.Element;
}
export declare const BreakingTeaserStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
