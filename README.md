> :exclamation: **DEPRECATED** :exclamation: : Superseded by @fdmg/design-system. See: https://github.com/FDMediagroep/fd-design-system

[![Build Status](https://travis-ci.org/FDMediagroep/fd-ts-react-breaking-teaser.svg?branch=master)](https://travis-ci.org/FDMediagroep/fd-ts-react-breaking-teaser)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fd-ts-react-breaking-teaser/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fd-ts-react-breaking-teaser?branch=master)
[![npm version](https://badge.fury.io/js/%40fdmg%2Ffd-breaking-teaser.svg)](https://badge.fury.io/js/%40fdmg%2Ffd-breaking-teaser)

# fd-breaking-teaser

FD-themed breaking teaser.

# Installation

-   Run `npm i -D @fdmg/fd-breaking-teaser`

# Demo

To run the demo, check-out this repository and run `npm run build-demo`.
After the build succeeded you can open `dist/demo.html` with your webbrowser.

-   [Demo](http://static.fd.nl/react/breaking-teaser/demo.html)

# Usage

```
import BreakingTeaser from '@fdmg/fd-breaking-teaser';
...
<BreakingTeaser
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
            title: '‘Als vrouw moet je altijd onafhankelijk zijn’',
            url: 'https://dev.fd.nl/profiel/1235280/als-vrouw-moet-je-onafhankelijk-zijn',
            uuid: "234"
        }, {
            title: 'President van de Amerikaanse Fed hamert op onafhankelijkheid',
            url: 'https://dev.fd.nl/economie-politiek/1235274/president-van-de-amerikaanse-fed-hamert-op-onafhankelijkheid',
            uuid: "345"
        }]}
        title="Douane: 20 tot 30% meer aangiftes door groei in webwinkelen"
    />
```
