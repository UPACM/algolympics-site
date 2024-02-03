"use strict";(self.webpackChunkup_acm_algolympics=self.webpackChunkup_acm_algolympics||[]).push([[507],{4234:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),s=n(5414);function l(e){var t=e.algoYear,n=e.pageName,l=e.sitePage,o=e.isIndex,i=a.createElement("title",null,n," - Algolympics ",t);return o&&(i=a.createElement("title",null,"Algolympics ",t)),a.createElement(s.q,null,a.createElement("meta",{charSet:"utf-8"}),i,a.createElement("link",{rel:"canonical",href:"https://algolympics.upacm.net"+l}),a.createElement("meta",{name:"Description",content:"The Algolympics is an annual intercollegiate programming competition open to all interested schools, colleges and universities in the Philippines, inspired by the likes of ICPC."}))}},3345:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(7294),s=n(5444),l=n(9519),o=n(8014),i=n(6266),c=n(664);function r(e){var t=e.name,n=e.links,i=(0,a.useState)(!1),c=i[0],r=i[1],m=(0,a.useCallback)((function(e){"Enter"===e.key&&r(!c)}),[c]);return a.createElement("div",{className:"nav-dropdown navlink-outer"},a.createElement("div",{role:"button",className:"nav-dropdown-button",tabIndex:0,onClick:function(){return r(!c)},onKeyDown:m},a.createElement("span",{className:"navlink"},t," ",a.createElement(l.G,{icon:o.eW2}))),a.createElement("div",{className:c?"nav-dropdown-content visible":"nav-dropdown-content"},n.map((function(e,t){var n=e.label,l=e.href;return e.external?a.createElement("a",{key:t,href:l,className:"nav-dropdown-link"},n):a.createElement(s.rU,{key:t,to:l,className:"nav-dropdown-link",activeClassName:"nav-dropdown-link",onClick:function(){return r(!1)}},n)}))))}function m(e){var t=e.isIndex,n=(0,a.useState)(!1),m=n[0],p=n[1],u=(0,a.useState)(!1),d=u[0],g=u[1];(0,a.useEffect)((function(){var e=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)/2,t=function(){window.scrollY>e!==m&&p(!m)};return document.addEventListener("scroll",t),function(){document.removeEventListener("scroll",t)}}));var f=(0,a.useCallback)((function(e){"Enter"===e.key&&g(!d)}),[d]);return a.createElement(a.Fragment,null,a.createElement("div",{className:m||!t?"header":"header top"},a.createElement("div",{className:"wrapper"},a.createElement(s.rU,{to:"/2024/"},a.createElement("div",{className:"title"},a.createElement("img",{src:(0,s.dq)(i.xn),alt:"Header"}),a.createElement("h1",null,a.createElement("span",{className:"red"},"ALGO"),a.createElement("span",{className:"yellow"},"LYM"),a.createElement("span",{className:"green"},"PICS"),a.createElement("span",{className:"blue"}," 2024")))),a.createElement("div",{role:"button",className:"navigation-icon",tabIndex:0,onClick:function(){return g(!d)},onKeyDown:f},a.createElement(l.G,{icon:o.xiG,size:"2x"})),a.createElement("div",{className:d?"navbar visible":"navbar"},a.createElement("nav",{className:"navlinks"},a.createElement(s.rU,{className:"navlink",activeClassName:"navlink",to:"/2024/mechanics/"},"Mechanics"),a.createElement(s.rU,{className:"navlink",activeClassName:"navlink",to:"/2024/problems-2024/"},"Problems"),a.createElement(s.rU,{className:"navlink",activeClassName:"navlink",to:"/2024/faq/"},"FAQ"),a.createElement(r,{name:"Archive",links:c.j.map((function(e){return{label:""+e.year,href:e.link,external:e.external}}))}),a.createElement("a",{className:"navlink",href:"http://upacm.net"},"UP ACM"))))),t?null:a.createElement("div",{className:"header-spacer"}))}function p(e){var t=e.type,n=e.link,s="/2024/assets/img/social/"+t+"-logo.png";return a.createElement("a",{className:"social",href:n},a.createElement("img",{src:s,alt:"Social Logo"}))}function u(e){var t=e.type,n=e.name,l=e.link,o="/2024/assets/img/social/"+t+"-logo.png";return"#"!==l?a.createElement("a",{className:"contact",href:l},a.createElement("div",{className:"contact-logo"},a.createElement("img",{src:(0,s.dq)(o),alt:"Contact Logo"})),a.createElement("div",{className:"contact-info"},a.createElement("span",null,n))):a.createElement("div",{className:"contact"},a.createElement("div",{className:"contact-logo"},a.createElement("img",{src:(0,s.dq)(o),alt:"Contact Logo"})),a.createElement("div",{className:"contact-info"},a.createElement("span",null,n)))}function d(){var e=(new Date).getFullYear();return a.createElement("div",{className:"footer incompressible"},a.createElement("div",{className:"top"},a.createElement("div",{className:"wrapper"},a.createElement("div",{className:"other-links section"},a.createElement("h2",null,"UP ACM"),a.createElement("a",{className:"other-link",href:"http://upacm.net"},"Website"),a.createElement("a",{className:"other-link",href:"https://upacm.github.io/acm-website/automaton/"},"Automaton"),a.createElement("a",{className:"other-link",href:"http://upacm.net/privacy-policy"},"Privacy Policy")),a.createElement("div",{className:"contacts section"},a.createElement("h2",null,a.createElement(s.rU,{className:"contact-us-link",to:"/contact/"},"Contact Us")),i.Jx.map((function(e){return a.createElement(u,{key:e.name,link:e.link,name:e.name,type:e.type})}))),a.createElement("div",{className:"socials section"},a.createElement("h2",null,"Connect with us!"),a.createElement("div",{className:"social-links"},i.UY.map((function(e){return a.createElement(p,{key:e.type,type:e.type,link:e.link})})))))),a.createElement("div",{className:"bottom"},a.createElement("span",{className:"copyright"},"© ",e," Association for Computing Machinery - University of the Philippines Diliman Student Chapter, Inc.")))}function g(e){var t=e.isIndex,n=e.contentClass,s=e.contentId,l=e.children;return a.createElement(a.Fragment,null,a.createElement(m,{isIndex:t}),a.createElement("div",{className:"content wrapper "+n,id:s},l),a.createElement(d,null))}},7230:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294);function s(e){var t=e.children;return a.createElement("div",{className:"spaced-components layout"},t)}},5123:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(7294),s=n(3345),l=n(4234),o=n(7230),i=n(5444),c=n(6266);function r(){var e=(0,a.useState)(!1),t=e[0],n=e[1];return(0,a.useEffect)((function(){var e=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),a=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)/2,s=function(){window.scrollY>a!==t&&n(!t);var s=100*window.scrollY/e;s=String(s)+"%",document.getElementById("landing-image").style.objectPosition="center "+s};return document.addEventListener("scroll",s),function(){document.removeEventListener("scroll",s)}})),a.createElement(a.Fragment,null,a.createElement("img",{id:"landing-image",alt:"Landing",className:t?"scrolled incompressible":"incompressible",src:(0,i.dq)(c._$.FY)}),a.createElement("div",{class:"scrollable-indicator"}),a.createElement("div",{id:"landing-text",className:"incompressible"},a.createElement("div",{className:"wrapper"},a.createElement("img",{src:(0,i.dq)(c._$.wM),alt:"Big Algolympics Logo"}),a.createElement("h1",null,"ALGOLYPMICS 2024"))),a.createElement("div",{id:"landing-spacer"}))}var m=n(3284),p=n.n(m);function u(){(0,a.useEffect)((function(){p().init(),p().refresh()}));var e=(0,i.K2)("805024111");return a.createElement("div",{id:"algo-intro-section",className:"index-section"},a.createElement("div",{className:"title-container"},a.createElement("h1",{"data-aos":"fade-up","data-aos-delay":"80","data-aos-duration":"650"},"What is Algolympics?")),a.createElement("img",{id:"intro-image",src:(0,i.dq)(c.mf.s),alt:"Intro","data-aos":"fade-up","data-aos-delay":"80","data-aos-duration":"650"}),a.createElement("div",{id:"intro-md",dangerouslySetInnerHTML:{__html:e.allMarkdownRemark.edges[0].node.html},"data-aos":"fade-up","data-aos-delay":"80","data-aos-duration":"650"}))}function d(e){var t=e.value,n=e.desc,s=e.iconSrc;return e.isSpecial?a.createElement("div",{className:"number special"},a.createElement("div",{className:"val-container","data-aos":"fade-up","data-aos-delay":"0","data-aos-duration":"650"},a.createElement("img",{className:"icon",src:(0,i.dq)(s),alt:"Icon"}),a.createElement("h1",{className:"value"},t)),a.createElement("p",{className:"description","data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"650"},n)):a.createElement("div",{className:"number","data-aos":"fade-up","data-aos-delay":"80","data-aos-duration":"650"},a.createElement("div",{className:"val-container"},a.createElement("img",{className:"icon",src:(0,i.dq)(s),alt:"Icon"}),a.createElement("h1",{className:"value"},t)),a.createElement("p",{className:"description"},n))}function g(){return a.createElement("div",{id:"numbers-section",className:"index-section"},c.KT.map((function(e,t){return a.createElement(d,{key:t,iconSrc:e.staticIconSrc,value:e.value,desc:e.description})})),a.createElement(d,{isSpecial:!0,iconSrc:"/2024/assets/img/algolympics-logo-white.webp",value:"One goal",desc:"Be the best team to win the competition."}))}function f(e){var t=e.winnerData;return a.createElement("div",{className:"winner"},a.createElement("img",{className:"winner-pic",src:(0,i.dq)(t.imgSrc),alt:""}),a.createElement("img",{className:"school-logo",src:(0,i.dq)(t.logoSrc),alt:""}),a.createElement("p",{className:"team-name"},t.name),a.createElement("p",{className:"team-school"},t.university))}function E(e){var t=e.place,n=e.prize,s=(e.winner,e.prevWinner),l="",o="",c="100";switch(t){case"first":l="1st place",o="/2023/assets/img/trophy-gold.webp";break;case"second":l="2nd place",o="/2023/assets/img/trophy-silver.webp",c="200";break;case"third":l="3rd place",o="/2023/assets/img/trophy-bronze.webp",c="300"}return a.createElement("div",{className:"banner",id:t,"data-aos":"fade-up","data-aos-delay":c,"data-aos-duration":"650"},a.createElement("img",{className:"trophy-img",alt:"Trophy",src:(0,i.dq)(o)}),a.createElement("div",{className:"banner-content"},a.createElement("div",{className:"prize"},a.createElement("h2",null,l),a.createElement("p",null,n)),a.createElement(f,{winnerData:s})))}function h(){return a.createElement("div",{id:"prizes-list",className:"index-section"},a.createElement("h1",null,"Last Year's Winners"),a.createElement("div",{id:"prizes-section",className:"index-section"},a.createElement(E,{place:"second",prize:c.GU.E0,prevWinner:c.wQ.E0,winner:c.s3.E0}),a.createElement(E,{place:"first",prize:c.GU.Ps,prevWinner:c.wQ.Ps,winner:c.s3.Ps}),a.createElement(E,{place:"third",prize:c.GU.EA,prevWinner:c.wQ.EA,winner:c.s3.EA})))}function v(e){var t=e.staticLogoSrc,n=e.sponsorLink;return a.createElement("a",{className:"sponsor",href:n},a.createElement("img",{src:(0,i.dq)(t),alt:"Static Logo"}))}function b(){return a.createElement("div",{id:"sponsors-section",className:"index-section"},a.createElement("h1",null,"Our Sponsors"),a.createElement("div",{id:"sponsors-container"},c.nw.map((function(e,t){return a.createElement(v,{key:t,staticLogoSrc:e.staticLogoSrc,sponsorLink:e.sponsorLink})}))))}function k(){return a.createElement(a.Fragment,null,a.createElement(l.Z,{algoYear:"2024",sitePage:"/2024/",isIndex:!0}),a.createElement(s.Z,{isIndex:!0,contentClass:"incompressible",contentId:"landing"},a.createElement(r,null),a.createElement(o.Z,null,a.createElement(u,null),a.createElement(g,null),a.createElement(h,null),a.createElement(b,null))))}},6266:function(e){e.exports=JSON.parse('{"_$":{"FY":"/2024/assets/img/background2.png","wM":"/2024/assets/img/logo.png"},"xn":"/2024/assets/img/header-icon.png","mf":{"s":"/2023/assets/img/algo-intro.webp"},"KT":[{"value":"800+","description":"participants that took the challenge from the past years","staticIconSrc":"/2023/assets/img/people-icon-colored.webp"},{"value":"20+","description":"teams that made it to the top spots","staticIconSrc":"/2023/assets/img/leaderboard-icon-colored.webp"},{"value":"30+","description":"universities that joined the competition across the Philippines","staticIconSrc":"/2023/assets/img/location-icon-colored.webp"}],"GU":{"Ps":"₱ 12,000","E0":"₱ 9,000","EA":"₱ 6,000"},"s3":{"Ps":{},"E0":{},"EA":{}},"wQ":{"Ps":{"imgSrc":"","logoSrc":"/logo/upd.webp","name":"Java Nice Day","university":"University of the Philippines - Diliman Campus"},"E0":{"imgSrc":"","logoSrc":"/logo/admu.webp","name":"K","university":"Ateneo de Manila University"},"EA":{"imgSrc":"","logoSrc":"/logo/la-salle.webp","name":"Kuuhaku","university":"De La Salle University - Manila"}},"nw":[{"sponsorName":"Avaloq","staticLogoSrc":"/2023/assets/img/sponsors/avaloq/YEARLONG_Avaloq.webp","sponsorLink":"https://www.avaloq.com/"},{"sponsorName":"MSCI","staticLogoSrc":"/2023/assets/img/sponsors/msci/YEARLONG_MSCI.webp","sponsorLink":"https://www.msci.com/"},{"sponsorName":"Old St. Labs","staticLogoSrc":"/2023/assets/img/sponsors/old st.labs/YEARLONG_Old.St Labs.webp","sponsorLink":"https://www.old.st/"},{"sponsorName":"Samsung","staticLogoSrc":"/2023/assets/img/sponsors/samsung/Samsung Logo - New.webp","sponsorLink":"https://www.samsung.com/ph/"},{"sponsorName":"Supergene","staticLogoSrc":"/2023/assets/img/sponsors/supergene/ALGO_Supergene.webp","sponsorLink":"https://www.supergene.co/en/"}],"UY":[{"type":"facebook","link":"https://fb.com/upacm"},{"type":"twitter","link":"https://twitter.com/upacm"},{"type":"linkedin","link":"https://ph.linkedin.com/company/upacm"},{"type":"youtube","link":"https://www.youtube.com/user/upacmYT"}],"Jx":[{"type":"email","name":"algolympics@upacm.net","link":"mailto:algolympics@upacm.net"},{"type":"location","name":"Department of Computer Science, University of the Philippines Diliman, Quezon City, Philippines","link":"https://goo.gl/maps/FfLKMHQvFqMWxh1Q6"},{"type":"mobile","name":"0905 301 8482","link":"#"}],"S6":{"j":[{"name":"Song of GluGlu","link":"/sample-probs/song-of-gluglu.pdf"},{"name":"Party at the end of the Universe","link":"/sample-probs/party-at-the-end-of-the-universe.pdf"},{"name":"Dimensional Elevator","link":"/sample-probs/dimensional-elevator.pdf"},{"name":"Attack of the Cones","link":"/sample-probs/attack-of-the-cones.pdf"},{"name":"Starry Knight","link":"/sample-probs/starry-knight.pdf"},{"name":"Space Bar Space","link":"/sample-probs/space-bar-space.pdf"},{"name":"Alien Defense","link":"/sample-probs/alien-defense.pdf"},{"name":"Make Gawa This Program","link":"/sample-probs/make-gawa-this-program.pdf"},{"name":"Guardians of the Lunatics","link":"/sample-probs/guardians-of-the-lunatics.pdf"}],"X":[{"year":2022,"elims":{"problems":"https://codeforces.com/group/fDKsZH3HKS/contest/369721/problems","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2022/problems/finals/2022_Algolympics_Finals.pdf","solutions":"","solutionSketches":"/2022/problems/finals//2022_Algolympics__Solution_Sketches.pdf","codeSolutions":""}},{"year":2021,"elims":{"problems":"https://codeforces.com/group/fDKsZH3HKS/contest/316191/problems","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"","solutions":"","solutionSketches":"/2021/problems/finals/algolympics-2021-solution-sketches.pdf","codeSolutions":""}},{"year":2020,"elims":{"problems":"https://codeforces.com/group/fDKsZH3HKS/contest/266086/problems","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2020/problems/finals/algolympics-2020-problems.pdf","solutions":"/2020/problems/finals/algolympics-2020-solutions.pdf","solutionSketches":"/2020/problems/finals/algolympics-2020-solution-sketches.pdf","codeSolutions":"/2020/problems/finals/algolympics-2020-code-solutions.zip"}},{"year":2019,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2019/problems/finals/algolympics-2019-problems.pdf","solutions":"","solutionSketches":"/2019/problems/finals/algolympics-2019-solution-sketches.pdf","codeSolutions":""}},{"year":2018,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2018/problems/finals/algolympics-2018-problems.pdf","solutions":"","solutionSketches":"/2018/problems/finals/algolympics-2018-solution-sketches.pdf","codeSolutions":""}},{"year":2017,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2017/problems/finals/algolympics-2017-problems.pdf","solutions":"","solutionSketches":"/2017/problems/finals/algolympics-2017-solution-sketches.pdf","codeSolutions":""}},{"year":2016,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2016/problems/finals/algolympics-2016-problems.pdf","solutions":"","solutionSketches":"/2016/problems/finals/algolympics-2016-solution-sketches.pdf","codeSolutions":""}},{"year":2015,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2015/problems/finals/algolympics-2015-problems.pdf","solutions":"/2015/problems/finals/algolympics-2015-solutions.pdf","solutionSketches":"/2015/problems/finals/algolympics-2015-solution-sketches.pdf","codeSolutions":""}}]}}')}}]);
//# sourceMappingURL=component---src-pages-2024-index-js-67e8f1aa0764962405eb.js.map