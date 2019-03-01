import TestRenderer from 'react-test-renderer';
import BreakingTeaser from '../src/BreakingTeaser';
import React from 'react';

describe('BreakingTeaser', () => {
    test('renders correctly', () => {
        let breakingTeaser = TestRenderer.create(<BreakingTeaser
            id="123"
            bookmarked={false}
            comments={99}
            description="Containers van warenhuizen als Amazon en Alibaba bevatten een veelheid aan producten die allemaal apart ingeklaard moeten worden."
            url="https://dev.fd.nl/ondernemen/1254849/douane-20-tot-30-meer-aangiftes-door-groei-in-webwinkelen"
            hashTags="#Kitchensink"
            imageUrl="https://fd-external-development.imgix.net/43ed7a431f43ef9a3d43afd82d6ccbeb82610ffa.jpg"
            alt="Douane: 20 tot 30% meer aangiftes door groei in webwinkelen"
            onBookmark={() => {}}
            subject="Monetair"
            readableAge="7 uur"
            related={[{
                longread: true,
                title: 'Als vrouw moet je altijd onafhankelijk zijn',
                url: 'https://dev.fd.nl/profiel/1235280/als-vrouw-moet-je-onafhankelijk-zijn',
                uuid: "234"
            }, {
                title: 'President van de Amerikaanse Fed hamert op onafhankelijkheid',
                url: 'https://dev.fd.nl/economie-politiek/1235274/president-van-de-amerikaanse-fed-hamert-op-onafhankelijkheid',
                uuid: "345"
            }]}
            title="Douane: 20 tot 30% meer aangiftes door groei in webwinkelen"
        />);
        expect(breakingTeaser.toJSON()).toMatchSnapshot();
    });

    test('renders bookmarked correctly', () => {
        let breakingTeaser = TestRenderer.create(<BreakingTeaser
            id="123"
            bookmarked={true}
            comments={99}
            description="Containers van warenhuizen als Amazon en Alibaba bevatten een veelheid aan producten die allemaal apart ingeklaard moeten worden."
            url="https://dev.fd.nl/ondernemen/1254849/douane-20-tot-30-meer-aangiftes-door-groei-in-webwinkelen"
            hashTags="#Kitchensink"
            imageUrl="https://fd-external-development.imgix.net/43ed7a431f43ef9a3d43afd82d6ccbeb82610ffa.jpg"
            alt="Douane: 20 tot 30% meer aangiftes door groei in webwinkelen"
            onBookmark={() => {}}
            subject="Monetair"
            readableAge="7 uur"
            related={[{
                longread: true,
                title: 'Als vrouw moet je altijd onafhankelijk zijn',
                url: 'https://dev.fd.nl/profiel/1235280/als-vrouw-moet-je-onafhankelijk-zijn',
                uuid: "234"
            }, {
                title: 'President van de Amerikaanse Fed hamert op onafhankelijkheid',
                url: 'https://dev.fd.nl/economie-politiek/1235274/president-van-de-amerikaanse-fed-hamert-op-onafhankelijkheid',
                uuid: "345"
            }]}
            title="Douane: 20 tot 30% meer aangiftes door groei in webwinkelen"
        />);
        expect(breakingTeaser.toJSON()).toMatchSnapshot();
    });
});
