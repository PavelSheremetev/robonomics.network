(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"6tRk":function(t,o,i){"use strict";i("yXV3"),i("mRH6");var e=i("rePB"),n={data:function(){return{isActive:!1}},props:{link:{type:String},icon:{type:String},image:{type:String},button:{type:String},orientation:{type:String,default:"gorizontal"},back:{type:String,default:"white",validator:function(t){return-1!==["white","gradient","transparent"].indexOf(t)}},imageSize:{type:String,default:"small",validator:function(t){return-1!==["small","big"].indexOf(t)}},popup:{type:Boolean,default:!1},imageRound:{type:Boolean,default:!0},classList:{type:String}},computed:{classes:function(){var t;return t={},Object(e.a)(t,"card-icon",this.icon),Object(e.a)(t,"card-image",this.image),Object(e.a)(t,"card-link",this.link||this.popup),Object(e.a)(t,"oldy","transparent"!=this.back),Object(e.a)(t,"oldy__link",this.link||this.popup||"transparent"!=this.back),Object(e.a)(t,"card-".concat(this.back),!0),Object(e.a)(t,"card-imageSize-".concat(this.imageSize),this.icon||this.image),Object(e.a)(t,"".concat(this.orientation),!0),Object(e.a)(t,"card-popup",this.popup),Object(e.a)(t,"active",this.isActive),Object(e.a)(t,"".concat(this.classList),!0),t}}},a=(i("E4Hk"),i("KHd+")),s=Object(a.a)(n,(function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{staticClass:"card",class:t.classes,attrs:{tabindex:"0"},on:{focusin:function(o){t.isActive=!0},focusout:function(o){t.isActive=!1}}},[t.icon?i("div",{staticClass:"icon"},[i("img",{attrs:{alt:"",src:t.icon}})]):t._e(),t.image?i("div",{staticClass:"image",class:{imageRound:t.imageRound}},[i("g-image",{attrs:{alt:"",src:t.image}})],1):t._e(),i("div",{staticClass:"content"},[t._t("default")],2),t.link?i("g-link",{staticClass:"link",attrs:{to:t.link}},[t._v("Link")]):t._e()],1)}),[],!1,null,null,null);o.a=s.exports},E4Hk:function(t,o,i){"use strict";i("F22k")},F22k:function(t,o,i){},Kn2e:function(t,o,i){"use strict";i("yXV3"),i("mRH6");var e=i("rePB"),n={props:{link:{type:String,default:!1},label:{type:String,default:!1},button:{type:String,default:"border",validator:function(t){return-1!==["border","primary","block"].indexOf(t)}},scale:{type:String,default:"1"}},computed:{classes:function(){var t;return t={},Object(e.a)(t,"button",!0),Object(e.a)(t,"".concat(this.button),!0),t},src:function(){return this.link?this.link:"#"}}},a=i("KHd+"),s=Object(a.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("g-link",{class:this.classes,style:{transform:"scale("+this.scale+")"},attrs:{to:this.src}},[this._v(this._s(this.label))])}),[],!1,null,null,null);o.a=s.exports},UQSp:function(t,o,i){"use strict";o.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},Z6tk:function(t,o,i){"use strict";i.r(o);var e=i("KHd+"),n=i("6tRk"),a=i("Kn2e"),s=i("UQSp"),c=i("Kw5r");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}c.a.config.optionMergeStrategies;var l={Card:n.a,Button:a.a,VueRemarkRoot:s.a},p=function(t){var o=t.options.components=t.options.components||{},i=t.options.computed=t.options.computed||{};Object.keys(l).forEach((function(t){"object"===r(l[t])&&"function"==typeof l[t].render||"function"==typeof l[t]&&"function"==typeof l[t].options.render?o[t]=l[t]:i[t]=function(){return l[t]}}))},u=c.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",b={excerpt:null,title:"Say hello to Robonomics 🎉",published:!0,description:"Meet Robonomics network – secure, сost-effective, and futuristic IoT platform for connecting robotics under Polkadot and Ethereum control",abstract:"Meet Robonomics network – secure, сost-effective, and futuristic IoT platform for connecting robotics under Polkadot and Ethereum control"};var f=function(t){t.options[d]&&(t.options[d]=b),c.a.util.defineReactive(t.options,d,b),t.options.computed=u.computed({$frontmatter:function(){return t.options[d]}},t.options.computed)},g=Object(e.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("VueRemarkRoot",[e("p",[e("a",{attrs:{href:"https://blog.aira.life/robonomics-can-72f631824670",target:"_blank",rel:"nofollow noopener noreferrer"}},[e("g-image",{attrs:{src:i("kySn"),alt:'"What Robonomics can do?"'}})],1)]),e("section",{staticClass:"layout__text"},[e("Card",{attrs:{icon:"/land/icon-presentation.png",link:"https://static.robonomics.network/docs/presentations/Robonomics.Keypoint.updated.August.2020.pdf"}},[e("h3",{attrs:{id:"what-is-robonomics-network"}},[t._v("What is Robonomics Network?")]),e("p",[t._v("View Keypoint presentation")])]),e("Card",{attrs:{icon:"/land/icon-coding.png",link:"https://wiki.robonomics.network/docs/r-and-d-based-on-robonomics-network/"}},[e("h3",{attrs:{id:"research--development"}},[t._v("Research & Development")]),e("p",[t._v("Conducted on Robonomics Network")])]),e("Card",{attrs:{icon:"/land/icon-money.png",link:"/blog/community-incentive-program/"}},[e("h3",{attrs:{id:"robonomics-incentive-program"}},[t._v("Robonomics Incentive Program")]),e("p",[t._v("Robonomics has Incentive Program for Developers, Ambassadors & Influencers")])])],1),e("section",{staticClass:"layout__text"},[e("h2",{attrs:{id:"enjoy-the-latest-ama-session"}},[t._v("Enjoy the latest AMA session!")]),e("div",{staticClass:"youtube-embed"},[e("div",{staticStyle:{width:"100%",margin:"0 auto"}},[e("div",{staticStyle:{position:"relative","padding-bottom":"56.25%","padding-top":"25px",height:"0"}},[e("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.youtube-nocookie.com/embed/IEgvXcj3nSo",allow:"autoplay; encrypted-media",allowfullscreen:""}})])])])]),e("section",{staticClass:"layout__text"},[e("Card",{attrs:{link:"https://discourse.robonomics.network/",back:"gradient"}},[e("h3",{attrs:{id:"want-to-talk-with-core-robonomics-dao-developers"}},[t._v("Want to talk with core Robonomics DAO developers?")]),e("Button",{attrs:{link:"https://discourse.robonomics.network/",label:"Visit Robonomics Network forum"}})],1)],1),e("h2",{attrs:{id:"how-can-i-use-the-robonomics"}},[t._v("How can I use the Robonomics?")]),e("section",{staticClass:"grid-4"},[e("Card",{attrs:{icon:"/land/icon-wiki.png",link:"https://wiki.robonomics.network/docs/"}},[e("h3",{attrs:{id:"robonomics-wiki"}},[t._v("Robonomics Wiki")]),e("p",[t._v("For IoT & Robotics developers")])]),e("Card",{attrs:{icon:"/land/icon-kuka.png",link:"https://wiki.robonomics.network/docs/kuka/"}},[e("h3",{attrs:{id:"launch-kuka-manipulator"}},[t._v("Launch Kuka manipulator")]),e("p",[t._v("Under Robonomics Network control")])]),e("Card",{attrs:{icon:"/land/icon-application.png",link:"https://dapp.robonomics.network/#/"}},[e("h3",{attrs:{id:"robonomics-dapp"}},[t._v("Robonomics DAPP")]),e("p",[t._v("Made for connecting IoT & Robotics under Robonomics control smoothly")])]),e("Card",{attrs:{icon:"/land/icon-rws.png",link:"https://share.hsforms.com/1rlIfFL6ZSriaOjtf4NAGPw535vx?sidebar&__hstc=136840367.cb56ffd63c4554e84a6b795a22bdcfee.1602671793634.1605539005983.1605618482734.17&__hssc=136840367.2.1605618482734&__hsfp=1772620931"}},[e("h3",{attrs:{id:"sign-up-for-rws-beta"}},[t._v("Sign up for RWS beta")])]),e("Card",{attrs:{icon:"/land/icon-github.png",link:"https://github.com/airalab/robonomics"}},[e("h3",{attrs:{id:"github"}},[t._v("Github")])]),e("Card",{attrs:{icon:"/land/icon-twitter.png",link:"https://twitter.com/AIRA_Robonomics"}},[e("h3",{attrs:{id:"twitter"}},[t._v("Twitter")])]),e("Card",{attrs:{icon:"/land/icon-youtube.png",link:"https://www.youtube.com/c/Airalab"}},[e("h3",{attrs:{id:"youtube"}},[t._v("YouTube")])]),e("Card",{attrs:{icon:"/land/icon-telegram.png",link:"https://t.me/robonomics"}},[e("h3",{attrs:{id:"telegram"}},[t._v("Telegram")])])],1)])}),[],!1,null,null,null);"function"==typeof p&&p(g),"function"==typeof f&&f(g);o.default=g.exports},kySn:function(t,o){t.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/robonomics-can.42db587.5f7e63b20216eb84a8502df9d28af630.jpg",size:{width:2560,height:1152},sizes:"(max-width: 2560px) 100vw, 2560px",srcset:["/assets/static/robonomics-can.82a2fbd.5f7e63b20216eb84a8502df9d28af630.jpg 480w","/assets/static/robonomics-can.cbab2cf.5f7e63b20216eb84a8502df9d28af630.jpg 1024w","/assets/static/robonomics-can.2665e34.5f7e63b20216eb84a8502df9d28af630.jpg 1920w","/assets/static/robonomics-can.42db587.5f7e63b20216eb84a8502df9d28af630.jpg 2560w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 2560 1152' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-3f64eb5f1fe7b689511a2af4a6ec874c'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-3f64eb5f1fe7b689511a2af4a6ec874c)' width='2560' height='1152' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAdAEADASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAwQGBQL/xAAvEAACAQIEBAQGAgMAAAAAAAABAgMEEQAFEiEGEzFBFCJRYRUjMnGBkSQzg7HR/8QAGgEAAgIDAAAAAAAAAAAAAAAAAgMEBgEFB//EAC0RAAECBQEGBQUBAAAAAAAAAAECEQADBCExEgUTQVFhcQYUIkLwM3KBobGR/9oADAMBAAIRAxEAPwAeFczlkiplMMkcblwut1uB1xt5blNRWwTVYW2X01vEyjcpc2Fh3/5hWrpstlpY0FbS1UpbzwEA6RfYi/XF7n1cv6QUyiWFjln%2bdxHL6Wgnkb/Q6UjUcYdvnYxg%2bNn0w3nhD2Unyiz%2bYg2/WNqNNcgHbvjrLMqoa3MaOCbwtMjSCMTPGLQrfr22xYjhXL4pHVM%2bppADbWvKsf3LgN8KUkTlEk9CYyqmXWp1UyAGd7pHXiRE7QUFLUSutTVtT2F1AgaW47/T0thrh7h18%2bzGopqKqjVYlD8yVGGoFgvQXI3OKKk4cpEBdOI6anci12EZsD/kOMSCd%2bFuI54MszeNodIVquKJXDCwbYXPew69sK82ZgXuVFwHDg/n2ue14aii3Il%2baQGdiQoOeXuYdTbvE7OpgzOShI1SrKYtWny6t%2b/4OGXopUkkiYwiZFZzHfzaVAJPsNwLnqduuBOsUxkrJZR41pb/ANe5BuS1%2b2/bBpkgE9XKlY7yBBGj6CGlUkEqTfYe3e2CXMqRNASRp4%2blTu6eOGYn%2b4BgEopN05SX%2b5PJXDOQP5kiDcPQ08uZwNmMn8FG%2bZDqI5lwbbdCAQLg4BQNDGH58IqG1Kqh9QXvc3Uix6YTwSCorqddENYVi5gkMfKUg2NwDtf83wM%2biWFTFynJXptqKWbkRf43OHS9oony5MmoISJQUB6XdySxtzOTBJFtnstGIyY3LIvUlDr0gjfc/fbHGnlyNGSQyErcjc29Rg8mZZizySCrVJHqPFFkiW4b2ve3fCjNPJI0lTOZpXOouVCk/e2HUiahISmaOAcu9%2bP46/qI1cqlmI1SVh3NtLW7t%2bo1cryupzSVoqVDK6jU1iBYe1%2b/piozPKIaiSlFRk0eWjl9YX%2bttNyG9xsD/vEnlWc1mV83wTqjSCxYrcjYi/4vhP4jmlRlEFHVZlUSGKRpFmv8wX2Iu17jr%2b8VrbFL4gqaopoyhMoMxdQV1xa5tjHIxs9mVGyqalacCpZzYEZLN0bPWK6XhygiVlR5pQq7OXO%2b1/TEWOgwLXXc4D4jUcvTcg2uT06%2bne1sFxP8O0G06QzjtGbr1Eabktl2fAuP8iDtaopJ5QaRLZezco//2Q==' /%3e%3c/svg%3e"}}}]);