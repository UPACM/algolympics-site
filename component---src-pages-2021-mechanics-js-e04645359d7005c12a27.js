"use strict";(self.webpackChunkup_acm_algolympics=self.webpackChunkup_acm_algolympics||[]).push([[458],{7698:function(e,t,s){s.d(t,{A:function(){return l}});var n=s(6540),a=s(3673);function l(e){let{algoYear:t,pageName:s,sitePage:l,isIndex:o}=e;var i=n.createElement("title",null,s," - Algolympics ",t);return o&&(i=n.createElement("title",null,"Algolympics ",t)),n.createElement(a.m,null,n.createElement("meta",{charSet:"utf-8"}),i,n.createElement("link",{rel:"canonical",href:"https://algolympics.upacm.net"+l}),n.createElement("meta",{name:"Description",content:"The Algolympics is an annual intercollegiate programming competition open to all interested schools, colleges and universities in the Philippines, inspired by the likes of ICPC."}))}},2186:function(e,t,s){s.d(t,{A:function(){return b}});var n=s(6540),a=s(1015),l=s(3821),o=s(7749),i=s.p+"static/header-icon-5efa5d7da7ec5912aab5573ebd78012a.png",c=s(704);function r(e){let{name:t,links:s}=e;const{0:i,1:c}=(0,n.useState)(!1),r=(0,n.useCallback)((e=>{"Enter"===e.key&&c(!i)}),[i]);return n.createElement("div",{className:"nav-dropdown navlink-outer"},n.createElement("div",{role:"button",className:"nav-dropdown-button",tabIndex:0,onClick:()=>c(!i),onKeyDown:r},n.createElement("span",{className:"navlink"},t," ",n.createElement(l.g,{icon:o.xBV}))),n.createElement("div",{className:i?"nav-dropdown-content visible":"nav-dropdown-content"},s.map(((e,t)=>{let{label:s,href:l,external:o}=e;return o?n.createElement("a",{key:t,href:l,className:"nav-dropdown-link"},s):n.createElement(a.N_,{key:t,to:l,className:"nav-dropdown-link",activeClassName:"nav-dropdown-link",onClick:()=>c(!1)},s)}))))}function m(e){let{isIndex:t}=e;const{0:s,1:m}=(0,n.useState)(!1),{0:p,1:u}=(0,n.useState)(!1);(0,n.useEffect)((()=>{const e=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)/2,t=()=>{window.scrollY>e!==s&&m(!s)};return document.addEventListener("scroll",t),()=>{document.removeEventListener("scroll",t)}}));const d=(0,n.useCallback)((e=>{"Enter"===e.key&&u(!p)}),[p]);return n.createElement(n.Fragment,null,n.createElement("div",{className:s||!t?"header":"header top"},n.createElement("div",{className:"wrapper"},n.createElement(a.N_,{to:"/2021/"},n.createElement("div",{className:"title"},n.createElement("img",{src:i,alt:"Header"}),n.createElement("h1",null,n.createElement("span",{className:"red"},"ALGO"),n.createElement("span",{className:"yellow"},"LYM"),n.createElement("span",{className:"green"},"PICS"),n.createElement("span",{className:"blue"},"2021")))),n.createElement("div",{role:"button",className:"navigation-icon",tabIndex:0,onClick:()=>u(!p),onKeyDown:d},n.createElement(l.g,{icon:o.ckx,size:"2x"})),n.createElement("div",{className:p?"navbar visible":"navbar"},n.createElement("nav",{className:"navlinks"},n.createElement(a.N_,{className:"navlink live",activeClassName:"navlink live",to:"/2021/live/"},"LIVE"),n.createElement(a.N_,{className:"navlink",activeClassName:"navlink",to:"/2021/mechanics/"},"Mechanics"),n.createElement(a.N_,{className:"navlink",activeClassName:"navlink",to:"/2021/problems-2021/"},"Problems"),n.createElement(a.N_,{className:"navlink",activeClassName:"navlink",to:"/2021/faq/"},"FAQ"),n.createElement(r,{name:"Archive",links:c.e.map((e=>{let{year:t,link:s,external:n}=e;return{label:""+t,href:s,external:n}}))}),n.createElement("a",{className:"navlink",href:"http://upacm.net"},"UP ACM"))))),t?null:n.createElement("div",{className:"header-spacer"}))}var p=s(2518);function u(e){let{type:t,link:s}=e;var a="/2021/assets/img/social/"+t+"-logo.png";return n.createElement("a",{className:"social",href:s},n.createElement("img",{src:a,alt:"Social Logo"}))}function d(e){let{type:t,name:s,link:a}=e;var l="/2021/assets/img/social/"+t+"-logo.png";return"#"!==a?n.createElement("a",{className:"contact",href:a},n.createElement("img",{src:l,alt:"Contact Logo"}),n.createElement("span",null,s)):n.createElement("div",{className:"contact"},n.createElement("img",{src:l,alt:"Contact Logo"}),n.createElement("span",null,s))}function g(){let e=(new Date).getFullYear();return n.createElement("div",{className:"footer incompressible"},n.createElement("div",{className:"top"},n.createElement("div",{className:"wrapper"},n.createElement("div",{className:"other-links section"},n.createElement("h2",null,"UPACM"),n.createElement("a",{className:"other-link",href:"http://upacm.net"},"Website"),n.createElement("a",{className:"other-link",href:"https://upacm.github.io/acm-website/automaton/"},"Automaton"),n.createElement("a",{className:"other-link",href:"http://upacm.net/privacy-policy"},"Privacy Policy")),n.createElement("div",{className:"contacts section"},n.createElement("h2",null,n.createElement(a.N_,{to:"/contact/"},"Contact Us")),p.M3.map((e=>n.createElement(d,{key:e.name,link:e.link,name:e.name,type:e.type})))),n.createElement("div",{className:"socials section"},n.createElement("h2",null,"Connect with us!"),n.createElement("div",{className:"social-links"},p.V$.map((e=>n.createElement(u,{key:e.type,type:e.type,link:e.link}))))))),n.createElement("div",{className:"bottom"},n.createElement("span",{className:"copyright"},"© ",e," Association for Computing Machinery - University of the Philippines Diliman Student Chapter, Inc.")))}function b(e){let{isIndex:t,contentClass:s,contentId:a,children:l}=e;return n.createElement(n.Fragment,null,n.createElement(m,{isIndex:t}),n.createElement("div",{className:"content wrapper "+s,id:a},l),n.createElement(g,null))}},8037:function(e,t,s){s.r(t),s.d(t,{default:function(){return o}});var n=s(6540),a=s(2186),l=s(7698);function o(e){let{data:t}=e;return n.createElement(n.Fragment,null,n.createElement(l.A,{algoYear:"2021",pageName:"Mechanics",sitePage:"/2021/mechanics/"}),n.createElement(a.A,{isIndex:!1,contentClass:"index",contentId:"mechanics"},n.createElement("div",{id:"mechanics-layout",className:"md-layout"},n.createElement("h1",{id:"page-title"},"Mechanics"),n.createElement("div",{dangerouslySetInnerHTML:{__html:t.allMarkdownRemark.edges[0].node.html}}))))}},2518:function(e){e.exports=JSON.parse('{"XS":"2021-03-20T12:59:59.999+08:00","c9":"2021-03-20T17:59:59.999+08:00","Yl":{"_Z":"/2021/assets/img/background.webp","D5":"/2021/assets/img/algo-brain.webp"},"Lv":{"s":"/2021/assets/img/algo-intro.webp"},"nL":[{"value":"700+","description":"participants that took the challenge from the past six years","staticIconSrc":"/2021/assets/img/people-icon-colored.png"},{"value":"23","description":"teams that made it to the top spots","staticIconSrc":"/2021/assets/img/leaderboard-icon-colored.png"},{"value":"30+","description":"universities that joined the competition across Luzon","staticIconSrc":"/2021/assets/img/location-icon-colored.png"}],"kJ":{"$1":"₱ 12,000","Rc":"₱ 9,000","it":"₱ 6,000"},"Z3":{"$1":{"imgSrc":"/2021/assets/img/winners/algo-2021-1st.webp","logoSrc":"/logo/upd.webp","name":"Kirk","university":"University of the Philippines - Diliman Campus"},"Rc":{"imgSrc":"/2021/assets/img/winners/algo-2021-2nd.webp","logoSrc":"/logo/admu.webp","name":"KFC","university":"Ateneo de Manila University"},"it":{"imgSrc":"/2021/assets/img/winners/algo-2021-3rd.webp","logoSrc":"/logo/admu.webp","name":"¯＼_(ツ)_／¯","university":"Ateneo de Manila University"}},"Ow":{"$1":{"logoSrc":"/2020/assets/img/logo/admu.webp","profileSrc":"/2020/assets/img/winners/bruh-group-photo.webp","name":"bruh","university":"Ateneo De Manila University","members":["","",""],"link":"#"},"Rc":{"logoSrc":"/2020/assets/img/logo/upd.webp","profileSrc":"/2020/assets/img/winners/dai-gurren-group-photo.webp","name":"Dai-Gurren","university":"University of the Philippines - Diliman Campus","members":["","",""],"link":"#"},"it":{"logoSrc":"/2020/assets/img/logo/admu.webp","profileSrc":"/2020/assets/img/winners/blossom-group-photo.webp","name":"Blossom","university":"Ateneo De Manila University","members":["","",""],"link":"#"}},"uP":[{"sponsorName":"Navitaire","staticLogoSrc":"/2021/assets/img/sponsors/navitaire/navitaire-amadeus-rgb.png","staticLogoSrcAlt":"/2021/assets/img/sponsors/navitaire/navitaire-amadeus-white.png","sponsorLink":"https://www.navitaire.com/"},{"sponsorName":"Calibr8","staticLogoSrc":"/2021/assets/img/sponsors/calibr8/calibr8-full-logo-transparent.png","staticLogoSrcAlt":"/2021/assets/img/sponsors/calibr8/calibr8-full-logo-white-transparent.png","sponsorLink":"http://www.calibr8digital.com/"},{"sponsorName":"FlexisourceIT","staticLogoSrc":"/2021/assets/img/sponsors/flexisourceIT/flexisourceit-color.png","staticLogoSrcAlt":"/2021/assets/img/sponsors/flexisourceIT/flexisourceit-white-horizontal.png","sponsorLink":"https://flexisourceit.com.au/"}],"V$":[{"type":"facebook","link":"https://fb.com/upacm"},{"type":"twitter","link":"https://twitter.com/upacm"},{"type":"linkedin","link":"https://ph.linkedin.com/company/upacm"},{"type":"youtube","link":"https://www.youtube.com/user/upacmYT"}],"M3":[{"type":"email","name":"algolympics@upacm.net","link":"#"},{"type":"location","name":"Department of Computer Science, University of the Philippines Diliman, Quezon City, Philippines","link":"https://goo.gl/maps/FfLKMHQvFqMWxh1Q6"},{"type":"mobile","name":"0920 859 5727 / 0905 301 8482","link":"#"}],"Bk":{"c":[{"name":"Santa\'s List","link":"/sample-probs/santas-list.pdf","background":"/2021/problems/sample/sample-bg.png"},{"name":"Make an Entrance","link":"/sample-probs/make-an-entrance.pdf","background":"/2021/problems/sample/sample-bg.png"},{"name":"Incomplete Model Kits","link":"/sample-probs/incomplete-model-kits.pdf","background":"/2021/problems/sample/sample-bg.png"},{"name":"Alien Defense","link":"/sample-probs/alien-defense.pdf","background":"/2021/problems/sample/sample-bg.png"},{"name":"Make Gawa This Program","link":"/sample-probs/make-gawa-this-program.pdf","background":"/2021/problems/sample/sample-bg.png"},{"name":"Guardians of the Lunatics","link":"/sample-probs/guardians-of-the-lunatics.pdf","background":"/2021/problems/sample/sample-bg.png"}],"k":[{"year":2021,"elims":{"problems":"https://codeforces.com/group/fDKsZH3HKS/contest/316191/problems","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"","solutions":"","solutionSketches":"/2021/problems/finals/algolympics-2021-solution-sketches.pdf","codeSolutions":""}},{"year":2020,"elims":{"problems":"https://codeforces.com/group/fDKsZH3HKS/contest/266086/problems","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2020/problems/finals/algolympics-2020-problems.pdf","solutions":"/2020/problems/finals/algolympics-2020-solutions.pdf","solutionSketches":"/2020/problems/finals/algolympics-2020-solution-sketches.pdf","codeSolutions":"/2020/problems/finals/algolympics-2020-code-solutions.zip"}},{"year":2019,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2019/problems/finals/algolympics-2019-problems.pdf","solutions":"","solutionSketches":"/2019/problems/finals/algolympics-2019-solution-sketches.pdf","codeSolutions":""}},{"year":2018,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2018/problems/finals/algolympics-2018-problems.pdf","solutions":"","solutionSketches":"/2018/problems/finals/algolympics-2018-solution-sketches.pdf","codeSolutions":""}},{"year":2017,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2017/problems/finals/algolympics-2017-problems.pdf","solutions":"","solutionSketches":"/2017/problems/finals/algolympics-2017-solution-sketches.pdf","codeSolutions":""}},{"year":2016,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2016/problems/finals/algolympics-2016-problems.pdf","solutions":"","solutionSketches":"/2016/problems/finals/algolympics-2016-solution-sketches.pdf","codeSolutions":""}},{"year":2015,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2015/problems/finals/algolympics-2015-problems.pdf","solutions":"/2015/problems/finals/algolympics-2015-solutions.pdf","solutionSketches":"/2015/problems/finals/algolympics-2015-solution-sketches.pdf","codeSolutions":""}}]}}')}}]);
//# sourceMappingURL=component---src-pages-2021-mechanics-js-e04645359d7005c12a27.js.map