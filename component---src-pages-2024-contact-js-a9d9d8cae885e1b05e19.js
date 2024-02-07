"use strict";(self.webpackChunkup_acm_algolympics=self.webpackChunkup_acm_algolympics||[]).push([[353],{4234:function(e,s,o){o.d(s,{Z:function(){return n}});var t=o(7294),l=o(5414);function n(e){var s=e.algoYear,o=e.pageName,n=e.sitePage,a=e.isIndex,i=t.createElement("title",null,o," - Algolympics ",s);return a&&(i=t.createElement("title",null,"Algolympics ",s)),t.createElement(l.q,null,t.createElement("meta",{charSet:"utf-8"}),i,t.createElement("link",{rel:"canonical",href:"https://algolympics.upacm.net"+n}),t.createElement("meta",{name:"Description",content:"The Algolympics is an annual intercollegiate programming competition open to all interested schools, colleges and universities in the Philippines, inspired by the likes of ICPC."}))}},3345:function(e,s,o){o.d(s,{Z:function(){return u}});var t=o(7294),l=o(5444),n=o(9519),a=o(8014),i=o(6266);o(664);function c(e){var s=e.isIndex,o=(0,t.useState)(!1),c=o[0],r=o[1],m=(0,t.useState)(!1),p=m[0],u=m[1];(0,t.useEffect)((function(){var e=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)/2,s=function(){window.scrollY>e!==c&&r(!c)};return document.addEventListener("scroll",s),function(){document.removeEventListener("scroll",s)}}));var d=(0,t.useCallback)((function(e){"Enter"===e.key&&u(!p)}),[p]);return t.createElement(t.Fragment,null,t.createElement("div",{className:c||!s?"header":"header top"},t.createElement("div",{className:"wrapper"},t.createElement(l.rU,{to:"/2024/"},t.createElement("div",{className:"title"},t.createElement("img",{src:(0,l.dq)(i.xn),alt:"Header"}),t.createElement("h1",null,t.createElement("span",{className:"red"},"ALGO"),t.createElement("span",{className:"yellow"},"LYM"),t.createElement("span",{className:"green"},"PICS"),t.createElement("span",{className:"blue"}," 2024")))),t.createElement("div",{role:"button",className:"navigation-icon",tabIndex:0,onClick:function(){return u(!p)},onKeyDown:d},t.createElement(n.G,{icon:a.xiG,size:"2x"})),t.createElement("div",{className:p?"navbar visible":"navbar"},t.createElement("nav",{className:"navlinks"},t.createElement(l.rU,{className:"navlink",activeClassName:"navlink",to:"/2024/mechanics/"},"Mechanics"),t.createElement(l.rU,{className:"navlink",activeClassName:"navlink",to:"/2024/problems-2024/"},"Problems"),t.createElement(l.rU,{className:"navlink",activeClassName:"navlink",to:"/2024/faq/"},"FAQ"))))),s?null:t.createElement("div",{className:"header-spacer"}))}function r(e){var s=e.type,o=e.link,n="/2024/assets/img/social/"+s+"-logo.png";return t.createElement("a",{className:"social",href:o},t.createElement("img",{src:(0,l.dq)(n),alt:"Social Logo"}))}function m(e){var s=e.type,o=e.name,n=e.link,a="/2024/assets/img/social/"+s+"-logo.png";return"#"!==n?t.createElement("a",{className:"contact",href:n},t.createElement("div",{className:"contact-logo"},t.createElement("img",{src:(0,l.dq)(a),alt:"Contact Logo"})),t.createElement("div",{className:"contact-info"},t.createElement("span",null,o))):t.createElement("div",{className:"contact"},t.createElement("div",{className:"contact-logo"},t.createElement("img",{src:(0,l.dq)(a),alt:"Contact Logo"})),t.createElement("div",{className:"contact-info"},t.createElement("span",null,o)))}function p(){var e=(new Date).getFullYear();return t.createElement("div",{className:"footer incompressible"},t.createElement("div",{className:"top"},t.createElement("div",{className:"wrapper"},t.createElement("div",{className:"contacts section"},t.createElement("h2",null,t.createElement(l.rU,{className:"contact-us-link",to:"/contact/"},"Contact Us")),i.Jx.map((function(e){return t.createElement(m,{key:e.name,link:e.link,name:e.name,type:e.type})}))),t.createElement("div",{className:"socials section"},t.createElement("h2",null,"Connect with us!"),t.createElement("div",{className:"social-links"},i.UY.map((function(e){return t.createElement(r,{key:e.type,type:e.type,link:e.link})})))))),t.createElement("div",{className:"bottom"},t.createElement("span",{className:"copyright"},"© ",e," Association for Computing Machinery - University of the Philippines Diliman Student Chapter, Inc.")))}function u(e){var s=e.isIndex,o=e.contentClass,l=e.contentId,n=e.children;return t.createElement(t.Fragment,null,t.createElement(c,{isIndex:s}),t.createElement("div",{className:"content wrapper "+o,id:l},n),t.createElement(p,null))}},7230:function(e,s,o){o.d(s,{Z:function(){return l}});var t=o(7294);function l(e){var s=e.children;return t.createElement("div",{className:"spaced-components layout"},s)}},7171:function(e,s,o){o.r(s),o.d(s,{default:function(){return u}});var t=o(7294),l=o(3345),n=o(4234),a=o(7230),i=o(5444);function c(){var e=(0,i.K2)("1751360125");return t.createElement("div",{id:"map-section"},t.createElement("h1",null,"Locate us"),t.createElement("div",{dangerouslySetInnerHTML:{__html:e.allMarkdownRemark.edges[0].node.html}}))}var r=o(6914);function m(e){var s=e.type,o=e.link,l="/2023/assets/img/social/"+s+"-logo.png";return t.createElement("a",{className:"social-item",href:o},t.createElement("img",{src:l,alt:"Social Logo"}),t.createElement("span",null,o))}function p(){return t.createElement("div",{id:"contact-social-section"},t.createElement("h1",null,"Our Socials"),t.createElement("div",{id:"social-list"},r.UY.map((function(e){return t.createElement(m,{key:e.type,type:e.type,link:e.link})}))))}function u(){return t.createElement(t.Fragment,null,t.createElement(n.Z,{algoYear:"2024",pageName:"Contact Us",sitePage:"/2024/contact/"}),t.createElement(l.Z,{isIndex:!1,contentClass:"incompressible",contentId:"contact"},t.createElement(a.Z,null,t.createElement(c,null),t.createElement(p,null))))}},6914:function(e){e.exports=JSON.parse('{"_$":{"FY":"/2023/assets/img/background.webp","wM":"/2023/assets/img/algo-brain.webp"},"mf":{"s":"/2023/assets/img/algo-intro.webp"},"KT":[{"value":"800+","description":"participants that took the challenge from the past years","staticIconSrc":"/2023/assets/img/people-icon-colored.webp"},{"value":"20+","description":"teams that made it to the top spots","staticIconSrc":"/2023/assets/img/leaderboard-icon-colored.webp"},{"value":"30+","description":"universities that joined the competition across the Philippines","staticIconSrc":"/2023/assets/img/location-icon-colored.webp"}],"GU":{"Ps":"₱ 12,000","E0":"₱ 9,000","EA":"₱ 6,000"},"s3":{"Ps":{},"E0":{},"EA":{}},"wQ":{"Ps":{"imgSrc":"","logoSrc":"/logo/upd.webp","name":"Java Nice Day","university":"University of the Philippines - Diliman Campus"},"E0":{"imgSrc":"","logoSrc":"/logo/admu.webp","name":"K","university":"Ateneo de Manila University"},"EA":{"imgSrc":"","logoSrc":"/logo/la-salle.webp","name":"Kuuhaku","university":"De La Salle University - Manila"}},"nw":[{"sponsorName":"Avaloq","staticLogoSrc":"/2023/assets/img/sponsors/avaloq/YEARLONG_Avaloq.webp","sponsorLink":"https://www.avaloq.com/"},{"sponsorName":"MSCI","staticLogoSrc":"/2023/assets/img/sponsors/msci/YEARLONG_MSCI.webp","sponsorLink":"https://www.msci.com/"},{"sponsorName":"Old St. Labs","staticLogoSrc":"/2023/assets/img/sponsors/old st.labs/YEARLONG_Old.St Labs.webp","sponsorLink":"https://www.old.st/"},{"sponsorName":"Samsung","staticLogoSrc":"/2023/assets/img/sponsors/samsung/Samsung Logo - New.webp","sponsorLink":"https://www.samsung.com/ph/"},{"sponsorName":"Supergene","staticLogoSrc":"/2023/assets/img/sponsors/supergene/ALGO_Supergene.webp","sponsorLink":"https://www.supergene.co/en/"}],"UY":[{"type":"facebook","link":"https://fb.com/upacm"},{"type":"twitter","link":"https://twitter.com/upacm"},{"type":"linkedin","link":"https://ph.linkedin.com/company/upacm"},{"type":"youtube","link":"https://www.youtube.com/user/upacmYT"}],"Jx":[{"type":"email","name":"algolympics@upacm.net","link":"mailto:algolympics@upacm.net"},{"type":"location","name":"Department of Computer Science, University of the Philippines Diliman, Quezon City, Philippines","link":"https://goo.gl/maps/FfLKMHQvFqMWxh1Q6"},{"type":"mobile","name":"0905 301 8482","link":"#"}],"S6":{"j":[{"name":"Song of GluGlu","link":"/sample-probs/song-of-gluglu.pdf"},{"name":"Party at the end of the Universe","link":"/sample-probs/party-at-the-end-of-the-universe.pdf"},{"name":"Dimensional Elevator","link":"/sample-probs/dimensional-elevator.pdf"},{"name":"Attack of the Cones","link":"/sample-probs/attack-of-the-cones.pdf"},{"name":"Starry Knight","link":"/sample-probs/starry-knight.pdf"},{"name":"Space Bar Space","link":"/sample-probs/space-bar-space.pdf"},{"name":"Alien Defense","link":"/sample-probs/alien-defense.pdf"},{"name":"Make Gawa This Program","link":"/sample-probs/make-gawa-this-program.pdf"},{"name":"Guardians of the Lunatics","link":"/sample-probs/guardians-of-the-lunatics.pdf"}],"X":[{"year":2022,"elims":{"problems":"https://codeforces.com/group/fDKsZH3HKS/contest/369721/problems","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2022/problems/finals/2022_Algolympics_Finals.pdf","solutions":"","solutionSketches":"/2022/problems/finals//2022_Algolympics__Solution_Sketches.pdf","codeSolutions":""}},{"year":2021,"elims":{"problems":"https://codeforces.com/group/fDKsZH3HKS/contest/316191/problems","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"","solutions":"","solutionSketches":"/2021/problems/finals/algolympics-2021-solution-sketches.pdf","codeSolutions":""}},{"year":2020,"elims":{"problems":"https://codeforces.com/group/fDKsZH3HKS/contest/266086/problems","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2020/problems/finals/algolympics-2020-problems.pdf","solutions":"/2020/problems/finals/algolympics-2020-solutions.pdf","solutionSketches":"/2020/problems/finals/algolympics-2020-solution-sketches.pdf","codeSolutions":"/2020/problems/finals/algolympics-2020-code-solutions.zip"}},{"year":2019,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2019/problems/finals/algolympics-2019-problems.pdf","solutions":"","solutionSketches":"/2019/problems/finals/algolympics-2019-solution-sketches.pdf","codeSolutions":""}},{"year":2018,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2018/problems/finals/algolympics-2018-problems.pdf","solutions":"","solutionSketches":"/2018/problems/finals/algolympics-2018-solution-sketches.pdf","codeSolutions":""}},{"year":2017,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2017/problems/finals/algolympics-2017-problems.pdf","solutions":"","solutionSketches":"/2017/problems/finals/algolympics-2017-solution-sketches.pdf","codeSolutions":""}},{"year":2016,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2016/problems/finals/algolympics-2016-problems.pdf","solutions":"","solutionSketches":"/2016/problems/finals/algolympics-2016-solution-sketches.pdf","codeSolutions":""}},{"year":2015,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2015/problems/finals/algolympics-2015-problems.pdf","solutions":"/2015/problems/finals/algolympics-2015-solutions.pdf","solutionSketches":"/2015/problems/finals/algolympics-2015-solution-sketches.pdf","codeSolutions":""}}]}}')},6266:function(e){e.exports=JSON.parse('{"_$":{"FY":"/2024/assets/img/background2.png","wM":"/2024/assets/img/logo.png"},"xn":"/2024/assets/img/header-icon.png","mf":{"s":"/2023/assets/img/algo-intro.webp"},"KT":[{"value":"800+","description":"participants that took the challenge from the past years","staticIconSrc":"/2023/assets/img/people-icon-colored.webp"},{"value":"20+","description":"teams that made it to the top spots","staticIconSrc":"/2023/assets/img/leaderboard-icon-colored.webp"},{"value":"30+","description":"universities that joined the competition across the Philippines","staticIconSrc":"/2023/assets/img/location-icon-colored.webp"}],"GU":{"Ps":"₱ 12,000","E0":"₱ 9,000","EA":"₱ 6,000"},"s3":{"Ps":{},"E0":{},"EA":{}},"wQ":{"Ps":{"imgSrc":"","logoSrc":"/logo/la-salle.webp","name":"Kuuhaku","university":"De La Salle University"},"E0":{"imgSrc":"","logoSrc":"/logo/admu.webp","name":"omsim.magis()","university":"Ateneo de Manila University"},"EA":{"imgSrc":"","logoSrc":"/logo/upd.webp","name":"ChambaBois","university":"University of the Philippines Diliman"}},"nw":[{"sponsorName":"Expedock","staticLogoSrc":"/2024/assets/img/sponsors/expedock/[2234A] Yearlong Logo - Expedock.png","sponsorLink":"https://www.expedock.com/"},{"sponsorName":"Insight","staticLogoSrc":"/2024/assets/img/sponsors/insight/[2234A] Semlong Logo - Insight Direct.png","sponsorLink":"https://www.insight.com/"},{"sponsorName":"Old St. Labs","staticLogoSrc":"/2024/assets/img/sponsors/old st.labs/YEARLONG_Old.St Labs.webp","sponsorLink":"https://www.old.st/"},{"sponsorName":"Navitaire","staticLogoSrc":"/2024/assets/img/sponsors/navitaire/[2234A] Yearlong Logo - Navitaire.png","sponsorLink":"https://www.navitaire.com/"},{"sponsorName":"Samsung","staticLogoSrc":"/2024/assets/img/sponsors/samsung/Samsung Logo - New.webp","sponsorLink":"https://www.samsung.com/ph/"}],"UY":[{"type":"facebook","link":"https://fb.com/upacm"},{"type":"twitter","link":"https://twitter.com/upacm"},{"type":"linkedin","link":"https://ph.linkedin.com/company/upacm"},{"type":"youtube","link":"https://www.youtube.com/user/upacmYT"}],"Jx":[{"type":"email","name":"algolympics@upacm.net","link":"mailto:algolympics@upacm.net"},{"type":"location","name":"Department of Computer Science, University of the Philippines Diliman, Quezon City, Philippines","link":"https://goo.gl/maps/FfLKMHQvFqMWxh1Q6"},{"type":"mobile","name":"0905 301 8482","link":"#"}],"S6":{"j":[{"name":"Song of GluGlu","link":"/sample-probs/song-of-gluglu.pdf"},{"name":"Party at the end of the Universe","link":"/sample-probs/party-at-the-end-of-the-universe.pdf"},{"name":"Dimensional Elevator","link":"/sample-probs/dimensional-elevator.pdf"},{"name":"Attack of the Cones","link":"/sample-probs/attack-of-the-cones.pdf"},{"name":"Starry Knight","link":"/sample-probs/starry-knight.pdf"},{"name":"Space Bar Space","link":"/sample-probs/space-bar-space.pdf"},{"name":"Alien Defense","link":"/sample-probs/alien-defense.pdf"},{"name":"Make Gawa This Program","link":"/sample-probs/make-gawa-this-program.pdf"},{"name":"Guardians of the Lunatics","link":"/sample-probs/guardians-of-the-lunatics.pdf"}],"X":[{"year":2023,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2023/problems/finals/2023_Algolympics_Finals.pdf","solutions":"","solutionSketches":"/2023/problems/finals/2023_Algolympics_Solution_Sketches.pdf","codeSolutions":""}},{"year":2022,"elims":{"problems":"https://codeforces.com/group/fDKsZH3HKS/contest/369721/problems","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2022/problems/finals/2022_Algolympics_Finals.pdf","solutions":"","solutionSketches":"/2022/problems/finals/2022_Algolympics__Solution_Sketches.pdf","codeSolutions":""}},{"year":2021,"elims":{"problems":"https://codeforces.com/group/fDKsZH3HKS/contest/316191/problems","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"","solutions":"","solutionSketches":"/2021/problems/finals/algolympics-2021-solution-sketches.pdf","codeSolutions":""}},{"year":2020,"elims":{"problems":"https://codeforces.com/group/fDKsZH3HKS/contest/266086/problems","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2020/problems/finals/algolympics-2020-problems.pdf","solutions":"/2020/problems/finals/algolympics-2020-solutions.pdf","solutionSketches":"/2020/problems/finals/algolympics-2020-solution-sketches.pdf","codeSolutions":"/2020/problems/finals/algolympics-2020-code-solutions.zip"}},{"year":2019,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2019/problems/finals/algolympics-2019-problems.pdf","solutions":"","solutionSketches":"/2019/problems/finals/algolympics-2019-solution-sketches.pdf","codeSolutions":""}},{"year":2018,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2018/problems/finals/algolympics-2018-problems.pdf","solutions":"","solutionSketches":"/2018/problems/finals/algolympics-2018-solution-sketches.pdf","codeSolutions":""}},{"year":2017,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2017/problems/finals/algolympics-2017-problems.pdf","solutions":"","solutionSketches":"/2017/problems/finals/algolympics-2017-solution-sketches.pdf","codeSolutions":""}},{"year":2016,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2016/problems/finals/algolympics-2016-problems.pdf","solutions":"","solutionSketches":"/2016/problems/finals/algolympics-2016-solution-sketches.pdf","codeSolutions":""}},{"year":2015,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2015/problems/finals/algolympics-2015-problems.pdf","solutions":"/2015/problems/finals/algolympics-2015-solutions.pdf","solutionSketches":"/2015/problems/finals/algolympics-2015-solution-sketches.pdf","codeSolutions":""}}]}}')}}]);
//# sourceMappingURL=component---src-pages-2024-contact-js-a9d9d8cae885e1b05e19.js.map