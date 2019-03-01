import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import uniqid from 'uniqid';
import BreakingTeaser from '../src/BreakingTeaser';

const GlobalStyle = createGlobalStyle`
    html {
        background-color: #f1ded0;
    }

    .clear.centered,
    .content-area {
        padding: 1rem 0;
        &.persoonlijk {
            background-color: white;
        }
    }
`;

class App extends PureComponent<any, any> {
    state: any = {
        bookmarked: false
    };

    onBookmark = (e: React.MouseEvent<HTMLElement>) => {
        if (e.currentTarget.classList.contains('selected')) {
            this.setState({bookmarked: false});
        } else {
            this.setState({bookmarked: true});
        }
    }

    render() {
        return(
            <>
                <GlobalStyle/>
                <BreakingTeaser
                        id={uniqid()}
                        bookmarked={this.state.bookmarked}
                        comments={99}
                        description="Containers van warenhuizen als Amazon en Alibaba bevatten een veelheid aan producten die allemaal apart ingeklaard moeten worden."
                        url="https://dev.fd.nl/ondernemen/1254849/douane-20-tot-30-meer-aangiftes-door-groei-in-webwinkelen"
                        hashTags="#Kitchensink"
                        imageUrl="https://fd-external-development.imgix.net/43ed7a431f43ef9a3d43afd82d6ccbeb82610ffa.jpg"
                        alt="Douane: 20 tot 30% meer aangiftes door groei in webwinkelen"
                        onBookmark={this.onBookmark}
                        subject="Monetair"
                        readableAge="7 uur"
                        related={[{
                            longread: true,
                            title: 'Als vrouw moet je altijd onafhankelijk zijn',
                            url: 'https://dev.fd.nl/profiel/1235280/als-vrouw-moet-je-onafhankelijk-zijn',
                            uuid: uniqid()
                        }, {
                            title: 'President van de Amerikaanse Fed hamert op onafhankelijkheid',
                            url: 'https://dev.fd.nl/economie-politiek/1235274/president-van-de-amerikaanse-fed-hamert-op-onafhankelijkheid',
                            uuid: uniqid()
                        }]}
                        title="Douane: 20 tot 30% meer aangiftes door groei in webwinkelen"
                    />
            </>
        );
    }
}

ReactDOM.render(<>
    <div>
        <App/>
    </div>
</>,
document.querySelector('.clear.centered'));

