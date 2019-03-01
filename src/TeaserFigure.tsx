import React, { PureComponent } from "react";

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
    render() {
        return (
            <>
                <figure>
                    <picture>
                        {this.props.sourceSets ? this.props.sourceSets.map((srcSet) => <source key={srcSet.media} media={srcSet.media} srcSet={srcSet.srcSet}/>) : null}
                        {this.props.image ? <img src={this.props.image.src} alt={this.props.image.alt} title={this.props.image ? this.props.image.title : ''}/> : null}
                    </picture>
                    {this.props.figCaption ? <figcaption>{this.props.figCaption}</figcaption> : null}
                </figure>
            </>
        );
    }
}
