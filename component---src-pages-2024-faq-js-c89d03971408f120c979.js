"use strict";(self.webpackChunkup_acm_algolympics=self.webpackChunkup_acm_algolympics||[]).push([[506],{4234:function(e,t,s){s.d(t,{Z:function(){return l}});var n=s(7294),a=s(5414);function l(e){var t=e.algoYear,s=e.pageName,l=e.sitePage,o=e.isIndex,i=n.createElement("title",null,s," - Algolympics ",t);return o&&(i=n.createElement("title",null,"Algolympics ",t)),n.createElement(a.q,null,n.createElement("meta",{charSet:"utf-8"}),i,n.createElement("link",{rel:"canonical",href:"https://algolympics.upacm.net"+l}),n.createElement("meta",{name:"Description",content:"The Algolympics is an annual intercollegiate programming competition open to all interested schools, colleges and universities in the Philippines, inspired by the likes of ICPC."}))}},3345:function(e,t,s){s.d(t,{Z:function(){return f}});var n=s(7294),a=s(5444),l=s(9519),o=s(8014),i=s(6266),c=s(664);function r(e){var t=e.name,s=e.links,i=(0,n.useState)(!1),c=i[0],r=i[1],m=(0,n.useCallback)((function(e){"Enter"===e.key&&r(!c)}),[c]);return n.createElement("div",{className:"nav-dropdown navlink-outer"},n.createElement("div",{role:"button",className:"nav-dropdown-button",tabIndex:0,onClick:function(){return r(!c)},onKeyDown:m},n.createElement("span",{className:"navlink"},t," ",n.createElement(l.G,{icon:o.eW2}))),n.createElement("div",{className:c?"nav-dropdown-content visible":"nav-dropdown-content"},s.map((function(e,t){var s=e.label,l=e.href;return e.external?n.createElement("a",{key:t,href:l,className:"nav-dropdown-link"},s):n.createElement(a.rU,{key:t,to:l,className:"nav-dropdown-link",activeClassName:"nav-dropdown-link",onClick:function(){return r(!1)}},s)}))))}function m(e){var t=e.isIndex,s=(0,n.useState)(!1),m=s[0],p=s[1],u=(0,n.useState)(!1),d=u[0],f=u[1];(0,n.useEffect)((function(){var e=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)/2,t=function(){window.scrollY>e!==m&&p(!m)};return document.addEventListener("scroll",t),function(){document.removeEventListener("scroll",t)}}));var g=(0,n.useCallback)((function(e){"Enter"===e.key&&f(!d)}),[d]);return n.createElement(n.Fragment,null,n.createElement("div",{className:m||!t?"header":"header top"},n.createElement("div",{className:"wrapper"},n.createElement(a.rU,{to:"/2024/"},n.createElement("div",{className:"title"},n.createElement("img",{src:(0,a.dq)(i.xn),alt:"Header"}),n.createElement("h1",null,n.createElement("span",{className:"red"},"ALGO"),n.createElement("span",{className:"yellow"},"LYM"),n.createElement("span",{className:"green"},"PICS"),n.createElement("span",{className:"blue"}," 2024")))),n.createElement("div",{role:"button",className:"navigation-icon",tabIndex:0,onClick:function(){return f(!d)},onKeyDown:g},n.createElement(l.G,{icon:o.xiG,size:"2x"})),n.createElement("div",{className:d?"navbar visible":"navbar"},n.createElement("nav",{className:"navlinks"},n.createElement(a.rU,{className:"navlink",activeClassName:"navlink",to:"/2024/mechanics/"},"Mechanics"),n.createElement(a.rU,{className:"navlink",activeClassName:"navlink",to:"/2024/problems-2024/"},"Problems"),n.createElement(a.rU,{className:"navlink",activeClassName:"navlink",to:"/2024/faq/"},"FAQ"),n.createElement(r,{name:"Archive",links:c.j.map((function(e){return{label:""+e.year,href:e.link,external:e.external}}))}),n.createElement("a",{className:"navlink",href:"http://upacm.net"},"UP ACM"))))),t?null:n.createElement("div",{className:"header-spacer"}))}function p(e){var t=e.type,s=e.link,a="/2024/assets/img/social/"+t+"-logo.png";return n.createElement("a",{className:"social",href:s},n.createElement("img",{src:a,alt:"Social Logo"}))}function u(e){var t=e.type,s=e.name,l=e.link,o="/2024/assets/img/social/"+t+"-logo.png";return"#"!==l?n.createElement("a",{className:"contact",href:l},n.createElement("div",{className:"contact-logo"},n.createElement("img",{src:(0,a.dq)(o),alt:"Contact Logo"})),n.createElement("div",{className:"contact-info"},n.createElement("span",null,s))):n.createElement("div",{className:"contact"},n.createElement("div",{className:"contact-logo"},n.createElement("img",{src:(0,a.dq)(o),alt:"Contact Logo"})),n.createElement("div",{className:"contact-info"},n.createElement("span",null,s)))}function d(){var e=(new Date).getFullYear();return n.createElement("div",{className:"footer incompressible"},n.createElement("div",{className:"top"},n.createElement("div",{className:"wrapper"},n.createElement("div",{className:"other-links section"},n.createElement("h2",null,"UP ACM"),n.createElement("a",{className:"other-link",href:"http://upacm.net"},"Website"),n.createElement("a",{className:"other-link",href:"https://upacm.github.io/acm-website/automaton/"},"Automaton"),n.createElement("a",{className:"other-link",href:"http://upacm.net/privacy-policy"},"Privacy Policy")),n.createElement("div",{className:"contacts section"},n.createElement("h2",null,n.createElement(a.rU,{className:"contact-us-link",to:"/contact/"},"Contact Us")),i.Jx.map((function(e){return n.createElement(u,{key:e.name,link:e.link,name:e.name,type:e.type})}))),n.createElement("div",{className:"socials section"},n.createElement("h2",null,"Connect with us!"),n.createElement("div",{className:"social-links"},i.UY.map((function(e){return n.createElement(p,{key:e.type,type:e.type,link:e.link})})))))),n.createElement("div",{className:"bottom"},n.createElement("span",{className:"copyright"},"© ",e," Association for Computing Machinery - University of the Philippines Diliman Student Chapter, Inc.")))}function f(e){var t=e.isIndex,s=e.contentClass,a=e.contentId,l=e.children;return n.createElement(n.Fragment,null,n.createElement(m,{isIndex:t}),n.createElement("div",{className:"content wrapper "+s,id:a},l),n.createElement(d,null))}},2118:function(e,t,s){s.r(t),s.d(t,{default:function(){return o}});var n=s(7294),a=s(3345),l=s(4234);function o(e){var t=e.data;return n.createElement(n.Fragment,null,n.createElement(l.Z,{algoYear:"2023",pageName:"FAQs",sitePage:"/2023/faq/"}),n.createElement(a.Z,{isIndex:!1,contentClass:"index",contentId:"faq"},n.createElement("div",{id:"faq-layout",className:"md-layout"},n.createElement("h1",{id:"page-title"},"Frequently Asked Questions"),n.createElement("div",{dangerouslySetInnerHTML:{__html:t.allMarkdownRemark.edges[0].node.html}}))))}},6266:function(e){e.exports=JSON.parse('{"_$":{"FY":"/2024/assets/img/background2.png","wM":"/2024/assets/img/logo.png"},"xn":"/2024/assets/img/header-icon.png","mf":{"s":"/2023/assets/img/algo-intro.webp"},"KT":[{"value":"800+","description":"participants that took the challenge from the past years","staticIconSrc":"/2023/assets/img/people-icon-colored.webp"},{"value":"20+","description":"teams that made it to the top spots","staticIconSrc":"/2023/assets/img/leaderboard-icon-colored.webp"},{"value":"30+","description":"universities that joined the competition across the Philippines","staticIconSrc":"/2023/assets/img/location-icon-colored.webp"}],"GU":{"Ps":"₱ 12,000","E0":"₱ 9,000","EA":"₱ 6,000"},"s3":{"Ps":{},"E0":{},"EA":{}},"wQ":{"Ps":{"imgSrc":"","logoSrc":"/logo/upd.webp","name":"Java Nice Day","university":"University of the Philippines - Diliman Campus"},"E0":{"imgSrc":"","logoSrc":"/logo/admu.webp","name":"K","university":"Ateneo de Manila University"},"EA":{"imgSrc":"","logoSrc":"/logo/la-salle.webp","name":"Kuuhaku","university":"De La Salle University - Manila"}},"nw":[{"sponsorName":"Avaloq","staticLogoSrc":"/2023/assets/img/sponsors/avaloq/YEARLONG_Avaloq.webp","sponsorLink":"https://www.avaloq.com/"},{"sponsorName":"MSCI","staticLogoSrc":"/2023/assets/img/sponsors/msci/YEARLONG_MSCI.webp","sponsorLink":"https://www.msci.com/"},{"sponsorName":"Old St. Labs","staticLogoSrc":"/2023/assets/img/sponsors/old st.labs/YEARLONG_Old.St Labs.webp","sponsorLink":"https://www.old.st/"},{"sponsorName":"Samsung","staticLogoSrc":"/2023/assets/img/sponsors/samsung/Samsung Logo - New.webp","sponsorLink":"https://www.samsung.com/ph/"},{"sponsorName":"Supergene","staticLogoSrc":"/2023/assets/img/sponsors/supergene/ALGO_Supergene.webp","sponsorLink":"https://www.supergene.co/en/"}],"UY":[{"type":"facebook","link":"https://fb.com/upacm"},{"type":"twitter","link":"https://twitter.com/upacm"},{"type":"linkedin","link":"https://ph.linkedin.com/company/upacm"},{"type":"youtube","link":"https://www.youtube.com/user/upacmYT"}],"Jx":[{"type":"email","name":"algolympics@upacm.net","link":"mailto:algolympics@upacm.net"},{"type":"location","name":"Department of Computer Science, University of the Philippines Diliman, Quezon City, Philippines","link":"https://goo.gl/maps/FfLKMHQvFqMWxh1Q6"},{"type":"mobile","name":"0905 301 8482","link":"#"}],"S6":{"j":[{"name":"Song of GluGlu","link":"/sample-probs/song-of-gluglu.pdf"},{"name":"Party at the end of the Universe","link":"/sample-probs/party-at-the-end-of-the-universe.pdf"},{"name":"Dimensional Elevator","link":"/sample-probs/dimensional-elevator.pdf"},{"name":"Attack of the Cones","link":"/sample-probs/attack-of-the-cones.pdf"},{"name":"Starry Knight","link":"/sample-probs/starry-knight.pdf"},{"name":"Space Bar Space","link":"/sample-probs/space-bar-space.pdf"},{"name":"Alien Defense","link":"/sample-probs/alien-defense.pdf"},{"name":"Make Gawa This Program","link":"/sample-probs/make-gawa-this-program.pdf"},{"name":"Guardians of the Lunatics","link":"/sample-probs/guardians-of-the-lunatics.pdf"}],"X":[{"year":2022,"elims":{"problems":"https://codeforces.com/group/fDKsZH3HKS/contest/369721/problems","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2022/problems/finals/2022_Algolympics_Finals.pdf","solutions":"","solutionSketches":"/2022/problems/finals//2022_Algolympics__Solution_Sketches.pdf","codeSolutions":""}},{"year":2021,"elims":{"problems":"https://codeforces.com/group/fDKsZH3HKS/contest/316191/problems","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"","solutions":"","solutionSketches":"/2021/problems/finals/algolympics-2021-solution-sketches.pdf","codeSolutions":""}},{"year":2020,"elims":{"problems":"https://codeforces.com/group/fDKsZH3HKS/contest/266086/problems","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2020/problems/finals/algolympics-2020-problems.pdf","solutions":"/2020/problems/finals/algolympics-2020-solutions.pdf","solutionSketches":"/2020/problems/finals/algolympics-2020-solution-sketches.pdf","codeSolutions":"/2020/problems/finals/algolympics-2020-code-solutions.zip"}},{"year":2019,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2019/problems/finals/algolympics-2019-problems.pdf","solutions":"","solutionSketches":"/2019/problems/finals/algolympics-2019-solution-sketches.pdf","codeSolutions":""}},{"year":2018,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2018/problems/finals/algolympics-2018-problems.pdf","solutions":"","solutionSketches":"/2018/problems/finals/algolympics-2018-solution-sketches.pdf","codeSolutions":""}},{"year":2017,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2017/problems/finals/algolympics-2017-problems.pdf","solutions":"","solutionSketches":"/2017/problems/finals/algolympics-2017-solution-sketches.pdf","codeSolutions":""}},{"year":2016,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2016/problems/finals/algolympics-2016-problems.pdf","solutions":"","solutionSketches":"/2016/problems/finals/algolympics-2016-solution-sketches.pdf","codeSolutions":""}},{"year":2015,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2015/problems/finals/algolympics-2015-problems.pdf","solutions":"/2015/problems/finals/algolympics-2015-solutions.pdf","solutionSketches":"/2015/problems/finals/algolympics-2015-solution-sketches.pdf","codeSolutions":""}}]}}')}}]);
//# sourceMappingURL=component---src-pages-2024-faq-js-c89d03971408f120c979.js.map