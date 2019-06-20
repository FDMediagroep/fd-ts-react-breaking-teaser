module.exports=function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){e.exports=t(1)},function(e,n,t){"use strict";var a=this&&this.__makeTemplateObject||function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n};Object.defineProperty(n,"__esModule",{value:!0});var o=r(t(2)),l=t(3),s=i(t(4)),f=i(t(5)),c=t(6);n.default=function(e){return o.default.createElement(o.default.Fragment,null,o.default.createElement(g,null),o.default.createElement(s.default,{cardStyle:e.cardStyle?e.cardStyle:"default",className:"fd-breaking-teaser"+(e.className?" "+e.className:"")},o.default.createElement("div",{className:"top-bar"},o.default.createElement("span",null,"Breaking"),o.default.createElement("span",{className:"icons"},o.default.createElement("a",{className:"share-social",href:"javascript: void(0);"},o.default.createElement("i",{"data-url":e.url,"data-id":e.id,"data-title":e.title,"data-section":e.subject,"data-hashtags":e.hashTags,className:"share-social icon-share-alt",title:e.shareTitle?e.shareTitle:"Delen"})),o.default.createElement("a",{href:"javascript: void(0);",className:"favorite"+(e.bookmarked?" selected":""),"data-key":e.id,"data-addurl":"/add-favorite","data-deleteurl":"/delete-favorite","data-title":e.title,"data-url":e.url,"data-articleid":e.id,title:"Bewaren",id:"favorite"+e.id,onClick:e.onBookmark},o.default.createElement("i",{className:"icon-bookmark",title:e.bookmarkTitle?e.bookmarkTitle:"Bewaren"}),o.default.createElement("i",{className:"icon-bookmark1",title:e.removeBookmarkTitle?e.removeBookmarkTitle:"Verwijder van bewaarlijst"})),o.default.createElement("a",{className:"comments-link",href:e.url+"#comments"},e.comments?o.default.createElement(o.default.Fragment,null,o.default.createElement("i",{className:"icon-comment-alt"}),o.default.createElement("span",{className:"comments-count"},e.comments),o.default.createElement("span",{className:"comments-suffix"},e.comments>1?"reacties":"reactie")):null))),o.default.createElement("a",{className:"teaser-link",href:e.url},o.default.createElement(c.TeaserFigure,{image:e.image,sourceSets:e.sourceSets}),o.default.createElement("div",{className:"text-container"},o.default.createElement(f.default,{textStyle:"breaking-teaser-h"},o.default.createElement("h2",null,e.title)),e.description?o.default.createElement("p",{className:"intro"},e.description):null)),o.default.createElement(c.TeaserRelated,{items:e.related})))};var d=l.css(m||(m=a(["\n.fd-breaking-teaser {\n    font-family: 'ProximaNovaRegular', Helvetica, sans-serif;\n\n    .top-bar,\n    .breaking-teaser-h,\n    .intro {\n        padding: 0 10px;\n        @media only screen and (min-width: 641px) {\n            padding: 0 12px;\n        }\n        @media only screen and (min-width: 861px) {\n            padding: 0 15px;\n        }\n    }\n\n    a {\n        text-decoration: none;\n        color: #191919;\n    }\n\n    .top-bar {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        user-select: none;\n        background-color: #c60f0f;\n        color: #ffffff;\n        font-family: 'ProximaNovaBold', sans-serif;\n        min-height: 44px;\n        line-height: 1.1em;\n        font-size: 1rem;\n        @media only screen and (min-width: 641px) {\n            font-size: 1.125rem;\n        }\n\n        i {\n            cursor: pointer;\n            padding: .5rem;\n        }\n\n        .share-social {\n            color: #ffffff;\n        }\n\n        .favorite {\n            color: #ffffff;\n            padding: 0;\n            .icon-bookmark1 {\n                display: none;\n            }\n            &.selected {\n                .icon-bookmark {\n                    display: none;\n                }\n                .icon-bookmark1 {\n                    display: initial;\n                }\n            }\n        }\n\n        .comments-link {\n            display: inline-flex;\n            align-items: center;\n            color: #ffffff;\n            font-family: 'ProximaNovaRegular', sans-serif;\n            i {\n                padding-right: 0;\n            }\n            span {\n                font-size: 0.8125rem;\n                cursor: pointer;\n            }\n            .comments-count,\n            .comments-suffix {\n                margin-left: .2rem;\n            }\n            .comments-suffix {\n                @media only screen and (max-width: 640px) {\n                    display: none;\n                }\n            }\n        }\n    }\n\n    figure {\n        margin: 0;\n        img {\n            width: 100%;\n        }\n        line-height: 0;\n    }\n\n    .teaser-link {\n        &:hover {\n            .breaking-teaser-h {\n                color: #49a4a2;\n            }\n        }\n    }\n\n    .text-container {\n        padding-top: 15px;\n        padding-bottom: 15px;\n        .intro {\n            margin: 0;\n        }\n    }\n}\n"],["\n.fd-breaking-teaser {\n    font-family: 'ProximaNovaRegular', Helvetica, sans-serif;\n\n    .top-bar,\n    .breaking-teaser-h,\n    .intro {\n        padding: 0 10px;\n        @media only screen and (min-width: 641px) {\n            padding: 0 12px;\n        }\n        @media only screen and (min-width: 861px) {\n            padding: 0 15px;\n        }\n    }\n\n    a {\n        text-decoration: none;\n        color: #191919;\n    }\n\n    .top-bar {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        user-select: none;\n        background-color: #c60f0f;\n        color: #ffffff;\n        font-family: 'ProximaNovaBold', sans-serif;\n        min-height: 44px;\n        line-height: 1.1em;\n        font-size: 1rem;\n        @media only screen and (min-width: 641px) {\n            font-size: 1.125rem;\n        }\n\n        i {\n            cursor: pointer;\n            padding: .5rem;\n        }\n\n        .share-social {\n            color: #ffffff;\n        }\n\n        .favorite {\n            color: #ffffff;\n            padding: 0;\n            .icon-bookmark1 {\n                display: none;\n            }\n            &.selected {\n                .icon-bookmark {\n                    display: none;\n                }\n                .icon-bookmark1 {\n                    display: initial;\n                }\n            }\n        }\n\n        .comments-link {\n            display: inline-flex;\n            align-items: center;\n            color: #ffffff;\n            font-family: 'ProximaNovaRegular', sans-serif;\n            i {\n                padding-right: 0;\n            }\n            span {\n                font-size: 0.8125rem;\n                cursor: pointer;\n            }\n            .comments-count,\n            .comments-suffix {\n                margin-left: .2rem;\n            }\n            .comments-suffix {\n                @media only screen and (max-width: 640px) {\n                    display: none;\n                }\n            }\n        }\n    }\n\n    figure {\n        margin: 0;\n        img {\n            width: 100%;\n        }\n        line-height: 0;\n    }\n\n    .teaser-link {\n        &:hover {\n            .breaking-teaser-h {\n                color: #49a4a2;\n            }\n        }\n    }\n\n    .text-container {\n        padding-top: 15px;\n        padding-bottom: 15px;\n        .intro {\n            margin: 0;\n        }\n    }\n}\n"])));n.BreakingTeaserStyle=l.css(u||(u=a(["\n","\n","\n","\n","\n","\n"],["\n","\n","\n","\n","\n","\n"])),s.getAllCardStyles(),f.getAllTextStyles(["breaking-teaser-h"]),c.TeaserFigureStyle,c.TeaserRelatedStyle,d);var m,u,p,g=l.createGlobalStyle(p||(p=a(["",""],["",""])),n.BreakingTeaserStyle)},function(e,n){e.exports=require("react")},function(e,n){e.exports=require("styled-components")},function(e,n){e.exports=require("@fdmg/fd-card")},function(e,n){e.exports=require("@fdmg/fd-typography")},function(e,n){e.exports=require("@fdmg/fd-teaser")}]);