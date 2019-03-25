import React, { PureComponent } from "react";
import { createGlobalStyle } from "styled-components";
import Card, { getAllCardStyles, CardTypes } from "@fdmg/fd-card";
import TypoGraphy, { getAllTextStyles } from "@fdmg/fd-typography";
import {
    RelatedArticle,
    SourceSet,
    TeaserFigure,
    TeaserFigureStyle,
    TeaserRelated,
    TeaserRelatedStyle,
    ImageType} from "@fdmg/fd-teaser";

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
    render() {
        return (
            <>
                <GlobalStyle/>
                <Card cardStyle={this.props.cardStyle ? this.props.cardStyle : 'default'} className={`fd-breaking-teaser${this.props.className ? ` ${this.props.className}` : ''}`}>
                    <div className="top-bar">
                        <span>Breaking</span>
                        <span className="icons">
                            <a className="share-social" href="javascript: void(0);">
                                <i
                                    data-url={this.props.url}
                                    data-id={this.props.id}
                                    data-title={this.props.title}
                                    data-section={this.props.subject}
                                    data-hashtags={this.props.hashTags}
                                    className="share-social icon-share-alt"
                                    title={this.props.shareTitle ? this.props.shareTitle : 'Delen'}
                                />
                            </a>
                            <a
                                href="javascript: void(0);"
                                className={`favorite${this.props.bookmarked ? ' selected' : ''}`}
                                data-key={this.props.id}
                                data-addurl='/add-favorite'
                                data-deleteurl='/delete-favorite'
                                data-title={this.props.title}
                                data-url={this.props.url}
                                data-articleid={this.props.id}
                                title="Bewaren"
                                id={`favorite${this.props.id}`}
                                onClick={this.props.onBookmark}
                            >
                                <i className="icon-bookmark" title={this.props.bookmarkTitle ? this.props.bookmarkTitle : 'Bewaren'}/>
                                <i className="icon-bookmark1" title={this.props.removeBookmarkTitle ? this.props.removeBookmarkTitle : 'Verwijder van bewaarlijst'}/>
                            </a>
                            <a className="comments-link" href={`${this.props.url}#comments`}>
                                {this.props.comments ? (
                                    <>
                                        <i className="icon-comment-alt"/>
                                        <span className="comments-count">{this.props.comments}</span>
                                        <span className="comments-suffix">{this.props.comments > 1 ? 'reacties' : 'reactie'}</span>
                                    </>
                                ) : null}
                            </a>
                        </span>
                    </div>
                    <a className="teaser-link" href={this.props.url}>
                        <TeaserFigure
                            image={this.props.image}
                            sourceSets={this.props.sourceSets}
                        />

                        <div className="text-container">
                            <TypoGraphy textStyle="breaking-teaser-h"><h2>{this.props.title}</h2></TypoGraphy>
                            {this.props.description ? <p className="intro">{this.props.description}</p> : null}
                        </div>

                    </a>
                    <TeaserRelated items={this.props.related}/>
                </Card>
            </>
        );
    }
}

const GlobalStyle = createGlobalStyle`
.fd-breaking-teaser {
    font-family: 'ProximaNovaRegular', Helvetica, sans-serif;

    .top-bar,
    .breaking-teaser-h,
    .intro {
        padding: 0 10px;
        @media only screen and (min-width: 641px) {
            padding: 0 12px;
        }
        @media only screen and (min-width: 861px) {
            padding: 0 15px;
        }
    }

    a {
        text-decoration: none;
        color: #191919;
    }

    .top-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #c60f0f;
        color: #ffffff;
        font-family: 'ProximaNovaBold', sans-serif;
        min-height: 44px;
        line-height: 1.1em;
        font-size: 1rem;
        @media only screen and (min-width: 641px) {
            font-size: 1.125rem;
        }

        i {
            cursor: pointer;
            padding: .5rem;
        }

        .share-social {
            color: #ffffff;
        }

        .favorite {
            color: #ffffff;
            padding: 0;
            .icon-bookmark1 {
                display: none;
            }
            &.selected {
                .icon-bookmark {
                    display: none;
                }
                .icon-bookmark1 {
                    display: initial;
                }
            }
        }

        .comments-link {
            display: inline-flex;
            align-items: center;
            color: #ffffff;
            font-family: 'ProximaNovaRegular', sans-serif;
            i {
                padding-right: 0;
            }
            span {
                font-size: 0.8125rem;
                cursor: pointer;
            }
            .comments-count,
            .comments-suffix {
                margin-left: .2rem;
            }
            .comments-suffix {
                @media only screen and (max-width: 640px) {
                    display: none;
                }
            }
        }
    }

    figure {
        margin: 0;
        img {
            width: 100%;
        }
        line-height: 0;
    }

    .teaser-link {
        &:hover {
            .breaking-teaser-h {
                color: #49a4a2;
            }
        }
    }

    .text-container {
        padding-top: 15px;
        padding-bottom: 15px;
        .intro {
            margin: 0;
        }
    }
}
`;

export const BreakingTeaserStyle = createGlobalStyle`
${getAllCardStyles().globalStyle.rules}
${getAllTextStyles(['breaking-teaser-h']).globalStyle.rules}
${(TeaserFigureStyle as any).globalStyle.rules}
${(TeaserRelatedStyle as any).globalStyle.rules}
${(GlobalStyle as any).globalStyle.rules}
`;
