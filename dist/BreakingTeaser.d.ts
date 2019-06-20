import React, { PureComponent } from "react";
import { CardTypes } from "@fdmg/fd-card";
import { RelatedArticle, SourceSet, ImageType } from "@fdmg/fd-teaser";
export interface Props {
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
    image: ImageType;
    sourceSets: SourceSet[];
    readableAge: string;
    removeBookmarkTitle?: string;
    shareTitle?: string;
    subject: string;
    title: string;
    url: string;
}
export default class BreakingTeaser extends PureComponent<Props, any> {
    render(): JSX.Element;
}
export declare const BreakingTeaserStyle: import("styled-components").FlattenSimpleInterpolation;
