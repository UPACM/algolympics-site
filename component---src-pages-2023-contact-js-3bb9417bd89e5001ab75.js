"use strict";(self.webpackChunkup_acm_algolympics=self.webpackChunkup_acm_algolympics||[]).push([[763],{2260:function(e,t,s){s.d(t,{A:function(){return a}});var n=s(6540),l=s(3673);function a(e){let{algoYear:t,pageName:s,sitePage:a,isIndex:o}=e;var i=n.createElement("title",null,s," - Algolympics ",t);return o&&(i=n.createElement("title",null,"Algolympics ",t)),n.createElement(l.m,null,n.createElement("meta",{charSet:"utf-8"}),i,n.createElement("link",{rel:"canonical",href:"https://algolympics.upacm.net"+a}),n.createElement("meta",{name:"Description",content:"The Algolympics is an annual intercollegiate programming competition open to all interested schools, colleges and universities in the Philippines, inspired by the likes of ICPC."}))}},2836:function(e,t,s){s.d(t,{A:function(){return h}});var n=s(6540),l=s(1015),a=s(3821),o=s(7749),i=s.p+"static/header-icon-5efa5d7da7ec5912aab5573ebd78012a.png",c=s(704);function r(e){let{name:t,links:s}=e;const{0:i,1:c}=(0,n.useState)(!1),r=(0,n.useCallback)((e=>{"Enter"===e.key&&c(!i)}),[i]);return n.createElement("div",{className:"nav-dropdown navlink-outer"},n.createElement("div",{role:"button",className:"nav-dropdown-button",tabIndex:0,onClick:()=>c(!i),onKeyDown:r},n.createElement("span",{className:"navlink"},t," ",n.createElement(a.g,{icon:o.xBV}))),n.createElement("div",{className:i?"nav-dropdown-content visible":"nav-dropdown-content"},s.map(((e,t)=>{let{label:s,href:a,external:o}=e;return o?n.createElement("a",{key:t,href:a,className:"nav-dropdown-link"},s):n.createElement(l.N_,{key:t,to:a,className:"nav-dropdown-link",activeClassName:"nav-dropdown-link",onClick:()=>c(!1)},s)}))))}function m(e){let{isIndex:t}=e;const{0:s,1:m}=(0,n.useState)(!1),{0:p,1:u}=(0,n.useState)(!1);(0,n.useEffect)((()=>{const e=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)/2,t=()=>{window.scrollY>e!==s&&m(!s)};return document.addEventListener("scroll",t),()=>{document.removeEventListener("scroll",t)}}));const d=(0,n.useCallback)((e=>{"Enter"===e.key&&u(!p)}),[p]);return n.createElement(n.Fragment,null,n.createElement("div",{className:s||!t?"header":"header top"},n.createElement("div",{className:"wrapper"},n.createElement(l.N_,{to:"/2023/"},n.createElement("div",{className:"title"},n.createElement("img",{src:i,alt:"Header"}),n.createElement("h1",null,n.createElement("span",{className:"red"},"ALGO"),n.createElement("span",{className:"yellow"},"LYM"),n.createElement("span",{className:"green"},"PICS"),n.createElement("span",{className:"blue"}," 2023")))),n.createElement("div",{role:"button",className:"navigation-icon",tabIndex:0,onClick:()=>u(!p),onKeyDown:d},n.createElement(a.g,{icon:o.ckx,size:"2x"})),n.createElement("div",{className:p?"navbar visible":"navbar"},n.createElement("nav",{className:"navlinks"},n.createElement(l.N_,{className:"navlink",activeClassName:"navlink",to:"/2023/mechanics/"},"Mechanics"),n.createElement(l.N_,{className:"navlink",activeClassName:"navlink",to:"/2023/problems-2023/"},"Problems"),n.createElement(l.N_,{className:"navlink",activeClassName:"navlink",to:"/2023/faq/"},"FAQ"),n.createElement(r,{name:"Archive",links:c.e.map((e=>{let{year:t,link:s,external:n}=e;return{label:""+t,href:s,external:n}}))}),n.createElement("a",{className:"navlink",href:"http://upacm.net"},"UP ACM"))))),t?null:n.createElement("div",{className:"header-spacer"}))}var p=s(8644);function u(e){let{type:t,link:s}=e;var l="/2023/assets/img/social/"+t+"-logo.png";return n.createElement("a",{className:"social",href:s},n.createElement("img",{src:l,alt:"Social Logo"}))}function d(e){let{type:t,name:s,link:l}=e;var a="/2023/assets/img/social/"+t+"-logo.png";return"#"!==l?n.createElement("a",{className:"contact",href:l},n.createElement("div",{className:"contact-logo"},n.createElement("img",{src:a,alt:"Contact Logo"})),n.createElement("div",{className:"contact-info"},n.createElement("span",null,s))):n.createElement("div",{className:"contact"},n.createElement("div",{className:"contact-logo"},n.createElement("img",{src:a,alt:"Contact Logo"})),n.createElement("div",{className:"contact-info"},n.createElement("span",null,s)))}function g(){let e=(new Date).getFullYear();return n.createElement("div",{className:"footer incompressible"},n.createElement("div",{className:"top"},n.createElement("div",{className:"wrapper"},n.createElement("div",{className:"other-links section"},n.createElement("h2",null,"UP ACM"),n.createElement("a",{className:"other-link",href:"http://upacm.net"},"Website"),n.createElement("a",{className:"other-link",href:"https://upacm.github.io/acm-website/automaton/"},"Automaton"),n.createElement("a",{className:"other-link",href:"http://upacm.net/privacy-policy"},"Privacy Policy")),n.createElement("div",{className:"contacts section"},n.createElement("h2",null,n.createElement(l.N_,{className:"contact-us-link",to:"/contact/"},"Contact Us")),p.M3.map((e=>n.createElement(d,{key:e.name,link:e.link,name:e.name,type:e.type})))),n.createElement("div",{className:"socials section"},n.createElement("h2",null,"Connect with us!"),n.createElement("div",{className:"social-links"},p.V$.map((e=>n.createElement(u,{key:e.type,type:e.type,link:e.link}))))))),n.createElement("div",{className:"bottom"},n.createElement("span",{className:"copyright"},"© ",e," Association for Computing Machinery - University of the Philippines Diliman Student Chapter, Inc.")))}function h(e){let{isIndex:t,contentClass:s,contentId:l,children:a}=e;return n.createElement(n.Fragment,null,n.createElement(m,{isIndex:t}),n.createElement("div",{className:"content wrapper "+s,id:l},a),n.createElement(g,null))}},1111:function(e,t,s){s.d(t,{A:function(){return l}});var n=s(6540);function l(e){let{children:t}=e;return n.createElement("div",{className:"spaced-components layout"},t)}},3160:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var n=s(6540),l=s(2836),a=s(2260),o=s(1111),i=s(1015);function c(){const e=(0,i.GR)("1751360125");return n.createElement("div",{id:"map-section"},n.createElement("h1",null,"Locate us"),n.createElement("div",{dangerouslySetInnerHTML:{__html:e.allMarkdownRemark.edges[0].node.html}}))}var r=s(8644);function m(e){let{type:t,link:s}=e;var l="/2023/assets/img/social/"+t+"-logo.png";return n.createElement("a",{className:"social-item",href:s},n.createElement("img",{src:l,alt:"Social Logo"}),n.createElement("span",null,s))}function p(){return n.createElement("div",{id:"contact-social-section"},n.createElement("h1",null,"Our Socials"),n.createElement("div",{id:"social-list"},r.V$.map((e=>n.createElement(m,{key:e.type,type:e.type,link:e.link})))))}function u(){return n.createElement(n.Fragment,null,n.createElement(a.A,{algoYear:"2023",pageName:"Contact Us",sitePage:"/2023/contact/"}),n.createElement(l.A,{isIndex:!1,contentClass:"incompressible",contentId:"contact"},n.createElement(o.A,null,n.createElement(c,null),n.createElement(p,null))))}},8644:function(e){e.exports=JSON.parse('{"Yl":{"_Z":"/2023/assets/img/background.webp","D5":"/2023/assets/img/algo-brain.webp"},"Lv":{"s":"/2023/assets/img/algo-intro.webp"},"nL":[{"value":"800+","description":"participants that took the challenge from the past years","staticIconSrc":"/2023/assets/img/people-icon-colored.webp"},{"value":"20+","description":"teams that made it to the top spots","staticIconSrc":"/2023/assets/img/leaderboard-icon-colored.webp"},{"value":"30+","description":"universities that joined the competition across the Philippines","staticIconSrc":"/2023/assets/img/location-icon-colored.webp"}],"kJ":{"$1":"₱ 12,000","Rc":"₱ 9,000","it":"₱ 6,000"},"Z3":{"$1":{},"Rc":{},"it":{}},"Ow":{"$1":{"imgSrc":"","logoSrc":"/logo/upd.webp","name":"Java Nice Day","university":"University of the Philippines - Diliman Campus"},"Rc":{"imgSrc":"","logoSrc":"/logo/admu.webp","name":"K","university":"Ateneo de Manila University"},"it":{"imgSrc":"","logoSrc":"/logo/la-salle.webp","name":"Kuuhaku","university":"De La Salle University - Manila"}},"uP":[{"sponsorName":"Avaloq","staticLogoSrc":"/2023/assets/img/sponsors/avaloq/YEARLONG_Avaloq.webp","sponsorLink":"https://www.avaloq.com/"},{"sponsorName":"MSCI","staticLogoSrc":"/2023/assets/img/sponsors/msci/YEARLONG_MSCI.webp","sponsorLink":"https://www.msci.com/"},{"sponsorName":"Old St. Labs","staticLogoSrc":"/2023/assets/img/sponsors/old st.labs/YEARLONG_Old.St Labs.webp","sponsorLink":"https://www.old.st/"},{"sponsorName":"Samsung","staticLogoSrc":"/2023/assets/img/sponsors/samsung/Samsung Logo - New.webp","sponsorLink":"https://www.samsung.com/ph/"},{"sponsorName":"Supergene","staticLogoSrc":"/2023/assets/img/sponsors/supergene/ALGO_Supergene.webp","sponsorLink":"https://www.supergene.co/en/"}],"V$":[{"type":"facebook","link":"https://fb.com/upacm"},{"type":"twitter","link":"https://twitter.com/upacm"},{"type":"linkedin","link":"https://ph.linkedin.com/company/upacm"},{"type":"youtube","link":"https://www.youtube.com/user/upacmYT"}],"M3":[{"type":"email","name":"algolympics@upacm.net","link":"mailto:algolympics@upacm.net"},{"type":"location","name":"Department of Computer Science, University of the Philippines Diliman, Quezon City, Philippines","link":"https://goo.gl/maps/FfLKMHQvFqMWxh1Q6"},{"type":"mobile","name":"0905 301 8482","link":"#"}],"Bk":{"c":[{"name":"Song of GluGlu","link":"/sample-probs/song-of-gluglu.pdf"},{"name":"Party at the end of the Universe","link":"/sample-probs/party-at-the-end-of-the-universe.pdf"},{"name":"Dimensional Elevator","link":"/sample-probs/dimensional-elevator.pdf"},{"name":"Attack of the Cones","link":"/sample-probs/attack-of-the-cones.pdf"},{"name":"Starry Knight","link":"/sample-probs/starry-knight.pdf"},{"name":"Space Bar Space","link":"/sample-probs/space-bar-space.pdf"},{"name":"Alien Defense","link":"/sample-probs/alien-defense.pdf"},{"name":"Make Gawa This Program","link":"/sample-probs/make-gawa-this-program.pdf"},{"name":"Guardians of the Lunatics","link":"/sample-probs/guardians-of-the-lunatics.pdf"}],"k":[{"year":2022,"elims":{"problems":"https://codeforces.com/group/fDKsZH3HKS/contest/369721/problems","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2022/problems/finals/2022_Algolympics_Finals.pdf","solutions":"","solutionSketches":"/2022/problems/finals//2022_Algolympics__Solution_Sketches.pdf","codeSolutions":""}},{"year":2021,"elims":{"problems":"https://codeforces.com/group/fDKsZH3HKS/contest/316191/problems","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"","solutions":"","solutionSketches":"/2021/problems/finals/algolympics-2021-solution-sketches.pdf","codeSolutions":""}},{"year":2020,"elims":{"problems":"https://codeforces.com/group/fDKsZH3HKS/contest/266086/problems","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2020/problems/finals/algolympics-2020-problems.pdf","solutions":"/2020/problems/finals/algolympics-2020-solutions.pdf","solutionSketches":"/2020/problems/finals/algolympics-2020-solution-sketches.pdf","codeSolutions":"/2020/problems/finals/algolympics-2020-code-solutions.zip"}},{"year":2019,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2019/problems/finals/algolympics-2019-problems.pdf","solutions":"","solutionSketches":"/2019/problems/finals/algolympics-2019-solution-sketches.pdf","codeSolutions":""}},{"year":2018,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2018/problems/finals/algolympics-2018-problems.pdf","solutions":"","solutionSketches":"/2018/problems/finals/algolympics-2018-solution-sketches.pdf","codeSolutions":""}},{"year":2017,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2017/problems/finals/algolympics-2017-problems.pdf","solutions":"","solutionSketches":"/2017/problems/finals/algolympics-2017-solution-sketches.pdf","codeSolutions":""}},{"year":2016,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2016/problems/finals/algolympics-2016-problems.pdf","solutions":"","solutionSketches":"/2016/problems/finals/algolympics-2016-solution-sketches.pdf","codeSolutions":""}},{"year":2015,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2015/problems/finals/algolympics-2015-problems.pdf","solutions":"/2015/problems/finals/algolympics-2015-solutions.pdf","solutionSketches":"/2015/problems/finals/algolympics-2015-solution-sketches.pdf","codeSolutions":""}}]}}')}}]);
//# sourceMappingURL=component---src-pages-2023-contact-js-3bb9417bd89e5001ab75.js.map