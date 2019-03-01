import React, { PureComponent } from "react";
import { createGlobalStyle } from "styled-components";

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
    render() {
        if (!this.props.items) { return null; }
        return (
            <>
                <GlobalStyle/>
                <nav className="related">
                    {this.props.items.map((item: RelatedArticle) => {
                        return (
                            <a key={item.uuid} className={`related-link${item.longread ? ' longread' : ''}`} href={item.url}>
                                <span className="related-title">{item.title}</span>
                                <i className="icon-chevron-right"/>
                            </a>
                        );
                    })}
                </nav>
            </>
        );
    }
}

const GlobalStyle = createGlobalStyle`
.related {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    @media only screen and (min-width: 641px) {
        font-size: 1.0625rem;
    }
    a {
        color: #191919;
        text-decoration: none;
    }
    .related-link {
        margin: initial; // Reset for fd.screen.scss
        background: initial; // Reset for fd.screen.scss
        box-shadow: initial; // Reset for fd.screen.scss
        font-family: 'ProximaNovaRegular', sans-serif;
        border-top: 1px solid rgba(0,0,0,0.1);
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 10px;
        @media only screen and (min-width: 641px) {
            padding: 12px;
        }
        @media only screen and (min-width: 861px) {
            padding: 12px 15px;
        }
        i {
            color: #677381;
        }
        &:hover {
            &, i {
                color: #49a4a2;
            }

            &.longread {
                &, i {
                    color: #f05031;
                }
            }
        }
    }
}
`;

export {GlobalStyle as TeaserRelatedStyle};
