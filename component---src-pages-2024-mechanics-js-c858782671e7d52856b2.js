"use strict";(self.webpackChunkup_acm_algolympics=self.webpackChunkup_acm_algolympics||[]).push([[149],{4234:function(e,s,t){t.d(s,{Z:function(){return l}});var o=t(7294),n=t(5414);function l(e){var s=e.algoYear,t=e.pageName,l=e.sitePage,a=e.isIndex,i=o.createElement("title",null,t," - Algolympics ",s);return a&&(i=o.createElement("title",null,"Algolympics ",s)),o.createElement(n.q,null,o.createElement("meta",{charSet:"utf-8"}),i,o.createElement("link",{rel:"canonical",href:"https://algolympics.upacm.net"+l}),o.createElement("meta",{name:"Description",content:"The Algolympics is an annual intercollegiate programming competition open to all interested schools, colleges and universities in the Philippines, inspired by the likes of ICPC."}))}},3345:function(e,s,t){t.d(s,{Z:function(){return u}});var o=t(7294),n=t(5444),l=t(9519),a=t(8014),i=t(6266);t(664);function c(e){var s=e.isIndex,t=(0,o.useState)(!1),c=t[0],r=t[1],m=(0,o.useState)(!1),p=m[0],u=m[1];(0,o.useEffect)((function(){var e=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)/2,s=function(){window.scrollY>e!==c&&r(!c)};return document.addEventListener("scroll",s),function(){document.removeEventListener("scroll",s)}}));var d=(0,o.useCallback)((function(e){"Enter"===e.key&&u(!p)}),[p]);return o.createElement(o.Fragment,null,o.createElement("div",{className:c||!s?"header":"header top"},o.createElement("div",{className:"wrapper"},o.createElement(n.rU,{to:"/2024/"},o.createElement("div",{className:"title"},o.createElement("img",{src:(0,n.dq)(i.xn),alt:"Header"}),o.createElement("h1",null,o.createElement("span",{className:"red"},"ALGO"),o.createElement("span",{className:"yellow"},"LYM"),o.createElement("span",{className:"green"},"PICS"),o.createElement("span",{className:"blue"}," 2024")))),o.createElement("div",{role:"button",className:"navigation-icon",tabIndex:0,onClick:function(){return u(!p)},onKeyDown:d},o.createElement(l.G,{icon:a.xiG,size:"2x"})),o.createElement("div",{className:p?"navbar visible":"navbar"},o.createElement("nav",{className:"navlinks"},o.createElement(n.rU,{className:"navlink",activeClassName:"navlink",to:"/2024/mechanics/"},"Mechanics"),o.createElement(n.rU,{className:"navlink",activeClassName:"navlink",to:"/2024/problems-2024/"},"Problems"),o.createElement(n.rU,{className:"navlink",activeClassName:"navlink",to:"/2024/faq/"},"FAQ"))))),s?null:o.createElement("div",{className:"header-spacer"}))}function r(e){var s=e.type,t=e.link,l="/2024/assets/img/social/"+s+"-logo.png";return o.createElement("a",{className:"social",href:t},o.createElement("img",{src:(0,n.dq)(l),alt:"Social Logo"}))}function m(e){var s=e.type,t=e.name,l=e.link,a="/2024/assets/img/social/"+s+"-logo.png";return"#"!==l?o.createElement("a",{className:"contact",href:l},o.createElement("div",{className:"contact-logo"},o.createElement("img",{src:(0,n.dq)(a),alt:"Contact Logo"})),o.createElement("div",{className:"contact-info"},o.createElement("span",null,t))):o.createElement("div",{className:"contact"},o.createElement("div",{className:"contact-logo"},o.createElement("img",{src:(0,n.dq)(a),alt:"Contact Logo"})),o.createElement("div",{className:"contact-info"},o.createElement("span",null,t)))}function p(){var e=(new Date).getFullYear();return o.createElement("div",{className:"footer incompressible"},o.createElement("div",{className:"top"},o.createElement("div",{className:"wrapper"},o.createElement("div",{className:"contacts section"},o.createElement("h2",null,o.createElement(n.rU,{className:"contact-us-link",to:"/contact/"},"Contact Us")),i.Jx.map((function(e){return o.createElement(m,{key:e.name,link:e.link,name:e.name,type:e.type})}))),o.createElement("div",{className:"socials section"},o.createElement("h2",null,"Connect with us!"),o.createElement("div",{className:"social-links"},i.UY.map((function(e){return o.createElement(r,{key:e.type,type:e.type,link:e.link})})))))),o.createElement("div",{className:"bottom"},o.createElement("span",{className:"copyright"},"© ",e," Association for Computing Machinery - University of the Philippines Diliman Student Chapter, Inc.")))}function u(e){var s=e.isIndex,t=e.contentClass,n=e.contentId,l=e.children;return o.createElement(o.Fragment,null,o.createElement(c,{isIndex:s}),o.createElement("div",{className:"content wrapper "+t,id:n},l),o.createElement(p,null))}},6137:function(e,s,t){t.r(s),t.d(s,{default:function(){return a}});var o=t(7294),n=t(3345),l=t(4234);function a(e){var s=e.data;return o.createElement(o.Fragment,null,o.createElement(l.Z,{algoYear:"2024",pageName:"Mechanics",sitePage:"/2024/mechanics/"}),o.createElement(n.Z,{isIndex:!1,contentClass:"index",contentId:"mechanics"},o.createElement("div",{id:"mechanics-layout",className:"md-layout"},o.createElement("h1",{id:"page-title"},"Mechanics"),o.createElement("div",{dangerouslySetInnerHTML:{__html:s.allMarkdownRemark.edges[0].node.html}}))))}},6266:function(e){e.exports=JSON.parse('{"_$":{"FY":"/2024/assets/img/background2.png","wM":"/2024/assets/img/logo.png"},"xn":"/2024/assets/img/header-icon.png","mf":{"s":"/2023/assets/img/algo-intro.webp"},"KT":[{"value":"800+","description":"participants that took the challenge from the past years","staticIconSrc":"/2023/assets/img/people-icon-colored.webp"},{"value":"20+","description":"teams that made it to the top spots","staticIconSrc":"/2023/assets/img/leaderboard-icon-colored.webp"},{"value":"30+","description":"universities that joined the competition across the Philippines","staticIconSrc":"/2023/assets/img/location-icon-colored.webp"}],"GU":{"Ps":"₱ 12,000","E0":"₱ 9,000","EA":"₱ 6,000"},"s3":{"Ps":{},"E0":{},"EA":{}},"wQ":{"Ps":{"imgSrc":"","logoSrc":"/logo/la-salle.webp","name":"Kuuhaku","university":"De La Salle University"},"E0":{"imgSrc":"","logoSrc":"/logo/admu.webp","name":"omsim.magis()","university":"Ateneo de Manila University"},"EA":{"imgSrc":"","logoSrc":"/logo/upd.webp","name":"ChambaBois","university":"University of the Philippines Diliman"}},"nw":[{"sponsorName":"Expedock","staticLogoSrc":"/2024/assets/img/sponsors/expedock/[2234A] Yearlong Logo - Expedock.png","sponsorLink":"https://www.expedock.com/"},{"sponsorName":"Insight","staticLogoSrc":"/2024/assets/img/sponsors/insight/[2234A] Semlong Logo - Insight Direct.png","sponsorLink":"https://www.insight.com/"},{"sponsorName":"Old St. Labs","staticLogoSrc":"/2024/assets/img/sponsors/old st.labs/YEARLONG_Old.St Labs.webp","sponsorLink":"https://www.old.st/"},{"sponsorName":"Navitaire","staticLogoSrc":"/2024/assets/img/sponsors/navitaire/[2234A] Yearlong Logo - Navitaire.png","sponsorLink":"https://www.supergene.co/en/"},{"sponsorName":"Samsung","staticLogoSrc":"/2024/assets/img/sponsors/samsung/Samsung Logo - New.webp","sponsorLink":"https://www.samsung.com/ph/"}],"UY":[{"type":"facebook","link":"https://fb.com/upacm"},{"type":"twitter","link":"https://twitter.com/upacm"},{"type":"linkedin","link":"https://ph.linkedin.com/company/upacm"},{"type":"youtube","link":"https://www.youtube.com/user/upacmYT"}],"Jx":[{"type":"email","name":"algolympics@upacm.net","link":"mailto:algolympics@upacm.net"},{"type":"location","name":"Department of Computer Science, University of the Philippines Diliman, Quezon City, Philippines","link":"https://goo.gl/maps/FfLKMHQvFqMWxh1Q6"},{"type":"mobile","name":"0905 301 8482","link":"#"}],"S6":{"j":[{"name":"Song of GluGlu","link":"/sample-probs/song-of-gluglu.pdf"},{"name":"Party at the end of the Universe","link":"/sample-probs/party-at-the-end-of-the-universe.pdf"},{"name":"Dimensional Elevator","link":"/sample-probs/dimensional-elevator.pdf"},{"name":"Attack of the Cones","link":"/sample-probs/attack-of-the-cones.pdf"},{"name":"Starry Knight","link":"/sample-probs/starry-knight.pdf"},{"name":"Space Bar Space","link":"/sample-probs/space-bar-space.pdf"},{"name":"Alien Defense","link":"/sample-probs/alien-defense.pdf"},{"name":"Make Gawa This Program","link":"/sample-probs/make-gawa-this-program.pdf"},{"name":"Guardians of the Lunatics","link":"/sample-probs/guardians-of-the-lunatics.pdf"}],"X":[{"year":2023,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2023/problems/finals/2023_Algolympics_Finals.pdf","solutions":"","solutionSketches":"/2023/problems/finals/2023_Algolympics_Solution_Sketches.pdf","codeSolutions":""}},{"year":2022,"elims":{"problems":"https://codeforces.com/group/fDKsZH3HKS/contest/369721/problems","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2022/problems/finals/2022_Algolympics_Finals.pdf","solutions":"","solutionSketches":"/2022/problems/finals/2022_Algolympics__Solution_Sketches.pdf","codeSolutions":""}},{"year":2021,"elims":{"problems":"https://codeforces.com/group/fDKsZH3HKS/contest/316191/problems","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"","solutions":"","solutionSketches":"/2021/problems/finals/algolympics-2021-solution-sketches.pdf","codeSolutions":""}},{"year":2020,"elims":{"problems":"https://codeforces.com/group/fDKsZH3HKS/contest/266086/problems","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2020/problems/finals/algolympics-2020-problems.pdf","solutions":"/2020/problems/finals/algolympics-2020-solutions.pdf","solutionSketches":"/2020/problems/finals/algolympics-2020-solution-sketches.pdf","codeSolutions":"/2020/problems/finals/algolympics-2020-code-solutions.zip"}},{"year":2019,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2019/problems/finals/algolympics-2019-problems.pdf","solutions":"","solutionSketches":"/2019/problems/finals/algolympics-2019-solution-sketches.pdf","codeSolutions":""}},{"year":2018,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2018/problems/finals/algolympics-2018-problems.pdf","solutions":"","solutionSketches":"/2018/problems/finals/algolympics-2018-solution-sketches.pdf","codeSolutions":""}},{"year":2017,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2017/problems/finals/algolympics-2017-problems.pdf","solutions":"","solutionSketches":"/2017/problems/finals/algolympics-2017-solution-sketches.pdf","codeSolutions":""}},{"year":2016,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2016/problems/finals/algolympics-2016-problems.pdf","solutions":"","solutionSketches":"/2016/problems/finals/algolympics-2016-solution-sketches.pdf","codeSolutions":""}},{"year":2015,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2015/problems/finals/algolympics-2015-problems.pdf","solutions":"/2015/problems/finals/algolympics-2015-solutions.pdf","solutionSketches":"/2015/problems/finals/algolympics-2015-solution-sketches.pdf","codeSolutions":""}}]}}')}}]);
//# sourceMappingURL=component---src-pages-2024-mechanics-js-c858782671e7d52856b2.js.map