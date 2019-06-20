module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){e.exports=t(1)},function(e,n,t){"use strict";var r,a=this&&this.__extends||(r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),i=this&&this.__makeTemplateObject||function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n};Object.defineProperty(n,"__esModule",{value:!0});var s=o(t(2)),l=t(3),c=o(t(4)),f=o(t(5)),p=t(6),d=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return a(n,e),n.prototype.render=function(){return s.default.createElement(s.default.Fragment,null,s.default.createElement(y,null),s.default.createElement(c.default,{cardStyle:this.props.cardStyle?this.props.cardStyle:"default",className:"fd-breaking-teaser"+(this.props.className?" "+this.props.className:"")},s.default.createElement("div",{className:"top-bar"},s.default.createElement("span",null,"Breaking"),s.default.createElement("span",{className:"icons"},s.default.createElement("a",{className:"share-social",href:"javascript: void(0);"},s.default.createElement("i",{"data-url":this.props.url,"data-id":this.props.id,"data-title":this.props.title,"data-section":this.props.subject,"data-hashtags":this.props.hashTags,className:"share-social icon-share-alt",title:this.props.shareTitle?this.props.shareTitle:"Delen"})),s.default.createElement("a",{href:"javascript: void(0);",className:"favorite"+(this.props.bookmarked?" selected":""),"data-key":this.props.id,"data-addurl":"/add-favorite","data-deleteurl":"/delete-favorite","data-title":this.props.title,"data-url":this.props.url,"data-articleid":this.props.id,title:"Bewaren",id:"favorite"+this.props.id,onClick:this.props.onBookmark},s.default.createElement("i",{className:"icon-bookmark",title:this.props.bookmarkTitle?this.props.bookmarkTitle:"Bewaren"}),s.default.createElement("i",{className:"icon-bookmark1",title:this.props.removeBookmarkTitle?this.props.removeBookmarkTitle:"Verwijder van bewaarlijst"})),s.default.createElement("a",{className:"comments-link",href:this.props.url+"#comments"},this.props.comments?s.default.createElement(s.default.Fragment,null,s.default.createElement("i",{className:"icon-comment-alt"}),s.default.createElement("span",{className:"comments-count"},this.props.comments),s.default.createElement("span",{className:"comments-suffix"},this.props.comments>1?"reacties":"reactie")):null))),s.default.createElement("a",{className:"teaser-link",href:this.props.url},s.default.createElement(p.TeaserFigure,{image:this.props.image,sourceSets:this.props.sourceSets}),s.default.createElement("div",{className:"text-container"},s.default.createElement(f.default,{textStyle:"breaking-teaser-h"},s.default.createElement("h2",null,this.props.title)),this.props.description?s.default.createElement("p",{className:"intro"},this.props.description):null)),s.default.createElement(p.TeaserRelated,{items:this.props.related})))},n}(s.PureComponent);n.default=d;var m,u,h,g=l.css(m||(m=i(["\n.fd-breaking-teaser {\n    font-family: 'ProximaNovaRegular', Helvetica, sans-serif;\n\n    .top-bar,\n    .breaking-teaser-h,\n    .intro {\n        padding: 0 10px;\n        @media only screen and (min-width: 641px) {\n            padding: 0 12px;\n        }\n        @media only screen and (min-width: 861px) {\n            padding: 0 15px;\n        }\n    }\n\n    a {\n        text-decoration: none;\n        color: #191919;\n    }\n\n    .top-bar {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        user-select: none;\n        background-color: #c60f0f;\n        color: #ffffff;\n        font-family: 'ProximaNovaBold', sans-serif;\n        min-height: 44px;\n        line-height: 1.1em;\n        font-size: 1rem;\n        @media only screen and (min-width: 641px) {\n            font-size: 1.125rem;\n        }\n\n        i {\n            cursor: pointer;\n            padding: .5rem;\n        }\n\n        .share-social {\n            color: #ffffff;\n        }\n\n        .favorite {\n            color: #ffffff;\n            padding: 0;\n            .icon-bookmark1 {\n                display: none;\n            }\n            &.selected {\n                .icon-bookmark {\n                    display: none;\n                }\n                .icon-bookmark1 {\n                    display: initial;\n                }\n            }\n        }\n\n        .comments-link {\n            display: inline-flex;\n            align-items: center;\n            color: #ffffff;\n            font-family: 'ProximaNovaRegular', sans-serif;\n            i {\n                padding-right: 0;\n            }\n            span {\n                font-size: 0.8125rem;\n                cursor: pointer;\n            }\n            .comments-count,\n            .comments-suffix {\n                margin-left: .2rem;\n            }\n            .comments-suffix {\n                @media only screen and (max-width: 640px) {\n                    display: none;\n                }\n            }\n        }\n    }\n\n    figure {\n        margin: 0;\n        img {\n            width: 100%;\n        }\n        line-height: 0;\n    }\n\n    .teaser-link {\n        &:hover {\n            .breaking-teaser-h {\n                color: #49a4a2;\n            }\n        }\n    }\n\n    .text-container {\n        padding-top: 15px;\n        padding-bottom: 15px;\n        .intro {\n            margin: 0;\n        }\n    }\n}\n"],["\n.fd-breaking-teaser {\n    font-family: 'ProximaNovaRegular', Helvetica, sans-serif;\n\n    .top-bar,\n    .breaking-teaser-h,\n    .intro {\n        padding: 0 10px;\n        @media only screen and (min-width: 641px) {\n            padding: 0 12px;\n        }\n        @media only screen and (min-width: 861px) {\n            padding: 0 15px;\n        }\n    }\n\n    a {\n        text-decoration: none;\n        color: #191919;\n    }\n\n    .top-bar {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        user-select: none;\n        background-color: #c60f0f;\n        color: #ffffff;\n        font-family: 'ProximaNovaBold', sans-serif;\n        min-height: 44px;\n        line-height: 1.1em;\n        font-size: 1rem;\n        @media only screen and (min-width: 641px) {\n            font-size: 1.125rem;\n        }\n\n        i {\n            cursor: pointer;\n            padding: .5rem;\n        }\n\n        .share-social {\n            color: #ffffff;\n        }\n\n        .favorite {\n            color: #ffffff;\n            padding: 0;\n            .icon-bookmark1 {\n                display: none;\n            }\n            &.selected {\n                .icon-bookmark {\n                    display: none;\n                }\n                .icon-bookmark1 {\n                    display: initial;\n                }\n            }\n        }\n\n        .comments-link {\n            display: inline-flex;\n            align-items: center;\n            color: #ffffff;\n            font-family: 'ProximaNovaRegular', sans-serif;\n            i {\n                padding-right: 0;\n            }\n            span {\n                font-size: 0.8125rem;\n                cursor: pointer;\n            }\n            .comments-count,\n            .comments-suffix {\n                margin-left: .2rem;\n            }\n            .comments-suffix {\n                @media only screen and (max-width: 640px) {\n                    display: none;\n                }\n            }\n        }\n    }\n\n    figure {\n        margin: 0;\n        img {\n            width: 100%;\n        }\n        line-height: 0;\n    }\n\n    .teaser-link {\n        &:hover {\n            .breaking-teaser-h {\n                color: #49a4a2;\n            }\n        }\n    }\n\n    .text-container {\n        padding-top: 15px;\n        padding-bottom: 15px;\n        .intro {\n            margin: 0;\n        }\n    }\n}\n"]))),y=l.createGlobalStyle(u||(u=i(["",""],["",""])),g);n.BreakingTeaserStyle=l.css(h||(h=i(["\n","\n","\n","\n","\n","\n"],["\n","\n","\n","\n","\n","\n"])),c.getAllCardStyles(),f.getAllTextStyles(["breaking-teaser-h"]),p.TeaserFigureStyle,p.TeaserRelatedStyle,g)},function(e,n){e.exports=require("react")},function(e,n){e.exports=require("styled-components")},function(e,n){e.exports=require("@fdmg/fd-card")},function(e,n){e.exports=require("@fdmg/fd-typography")},function(e,n){e.exports=require("@fdmg/fd-teaser")}]);