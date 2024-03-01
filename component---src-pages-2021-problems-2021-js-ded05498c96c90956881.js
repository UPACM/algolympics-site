"use strict";(self.webpackChunkup_acm_algolympics=self.webpackChunkup_acm_algolympics||[]).push([[29],{7698:function(e,s,t){t.d(s,{A:function(){return a}});var l=t(6540),n=t(3673);function a(e){let{algoYear:s,pageName:t,sitePage:a,isIndex:o}=e;var i=l.createElement("title",null,t," - Algolympics ",s);return o&&(i=l.createElement("title",null,"Algolympics ",s)),l.createElement(n.m,null,l.createElement("meta",{charSet:"utf-8"}),i,l.createElement("link",{rel:"canonical",href:"https://algolympics.upacm.net"+a}),l.createElement("meta",{name:"Description",content:"The Algolympics is an annual intercollegiate programming competition open to all interested schools, colleges and universities in the Philippines, inspired by the likes of ICPC."}))}},2186:function(e,s,t){t.d(s,{A:function(){return b}});var l=t(6540),n=t(1015),a=t(3821),o=t(7749),i=t.p+"static/header-icon-5efa5d7da7ec5912aab5573ebd78012a.png",r=t(704);function c(e){let{name:s,links:t}=e;const{0:i,1:r}=(0,l.useState)(!1),c=(0,l.useCallback)((e=>{"Enter"===e.key&&r(!i)}),[i]);return l.createElement("div",{className:"nav-dropdown navlink-outer"},l.createElement("div",{role:"button",className:"nav-dropdown-button",tabIndex:0,onClick:()=>r(!i),onKeyDown:c},l.createElement("span",{className:"navlink"},s," ",l.createElement(a.g,{icon:o.xBV}))),l.createElement("div",{className:i?"nav-dropdown-content visible":"nav-dropdown-content"},t.map(((e,s)=>{let{label:t,href:a,external:o}=e;return o?l.createElement("a",{key:s,href:a,className:"nav-dropdown-link"},t):l.createElement(n.N_,{key:s,to:a,className:"nav-dropdown-link",activeClassName:"nav-dropdown-link",onClick:()=>r(!1)},t)}))))}function m(e){let{isIndex:s}=e;const{0:t,1:m}=(0,l.useState)(!1),{0:p,1:u}=(0,l.useState)(!1);(0,l.useEffect)((()=>{const e=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)/2,s=()=>{window.scrollY>e!==t&&m(!t)};return document.addEventListener("scroll",s),()=>{document.removeEventListener("scroll",s)}}));const d=(0,l.useCallback)((e=>{"Enter"===e.key&&u(!p)}),[p]);return l.createElement(l.Fragment,null,l.createElement("div",{className:t||!s?"header":"header top"},l.createElement("div",{className:"wrapper"},l.createElement(n.N_,{to:"/2021/"},l.createElement("div",{className:"title"},l.createElement("img",{src:i,alt:"Header"}),l.createElement("h1",null,l.createElement("span",{className:"red"},"ALGO"),l.createElement("span",{className:"yellow"},"LYM"),l.createElement("span",{className:"green"},"PICS"),l.createElement("span",{className:"blue"},"2021")))),l.createElement("div",{role:"button",className:"navigation-icon",tabIndex:0,onClick:()=>u(!p),onKeyDown:d},l.createElement(a.g,{icon:o.ckx,size:"2x"})),l.createElement("div",{className:p?"navbar visible":"navbar"},l.createElement("nav",{className:"navlinks"},l.createElement(n.N_,{className:"navlink live",activeClassName:"navlink live",to:"/2021/live/"},"LIVE"),l.createElement(n.N_,{className:"navlink",activeClassName:"navlink",to:"/2021/mechanics/"},"Mechanics"),l.createElement(n.N_,{className:"navlink",activeClassName:"navlink",to:"/2021/problems-2021/"},"Problems"),l.createElement(n.N_,{className:"navlink",activeClassName:"navlink",to:"/2021/faq/"},"FAQ"),l.createElement(c,{name:"Archive",links:r.e.map((e=>{let{year:s,link:t,external:l}=e;return{label:""+s,href:t,external:l}}))}),l.createElement("a",{className:"navlink",href:"http://upacm.net"},"UP ACM"))))),s?null:l.createElement("div",{className:"header-spacer"}))}var p=t(2518);function u(e){let{type:s,link:t}=e;var n="/2021/assets/img/social/"+s+"-logo.png";return l.createElement("a",{className:"social",href:t},l.createElement("img",{src:n,alt:"Social Logo"}))}function d(e){let{type:s,name:t,link:n}=e;var a="/2021/assets/img/social/"+s+"-logo.png";return"#"!==n?l.createElement("a",{className:"contact",href:n},l.createElement("img",{src:a,alt:"Contact Logo"}),l.createElement("span",null,t)):l.createElement("div",{className:"contact"},l.createElement("img",{src:a,alt:"Contact Logo"}),l.createElement("span",null,t))}function g(){let e=(new Date).getFullYear();return l.createElement("div",{className:"footer incompressible"},l.createElement("div",{className:"top"},l.createElement("div",{className:"wrapper"},l.createElement("div",{className:"other-links section"},l.createElement("h2",null,"UPACM"),l.createElement("a",{className:"other-link",href:"http://upacm.net"},"Website"),l.createElement("a",{className:"other-link",href:"https://upacm.github.io/acm-website/automaton/"},"Automaton"),l.createElement("a",{className:"other-link",href:"http://upacm.net/privacy-policy"},"Privacy Policy")),l.createElement("div",{className:"contacts section"},l.createElement("h2",null,l.createElement(n.N_,{to:"/contact/"},"Contact Us")),p.M3.map((e=>l.createElement(d,{key:e.name,link:e.link,name:e.name,type:e.type})))),l.createElement("div",{className:"socials section"},l.createElement("h2",null,"Connect with us!"),l.createElement("div",{className:"social-links"},p.V$.map((e=>l.createElement(u,{key:e.type,type:e.type,link:e.link}))))))),l.createElement("div",{className:"bottom"},l.createElement("span",{className:"copyright"},"© ",e," Association for Computing Machinery - University of the Philippines Diliman Student Chapter, Inc.")))}function b(e){let{isIndex:s,contentClass:t,contentId:n,children:a}=e;return l.createElement(l.Fragment,null,l.createElement(m,{isIndex:s}),l.createElement("div",{className:"content wrapper "+t,id:n},a),l.createElement(g,null))}},7361:function(e,s,t){t.d(s,{A:function(){return n}});var l=t(6540);function n(e){let{children:s}=e;return l.createElement("div",{className:"spaced-components layout"},s)}},3287:function(e,s,t){t.r(s),t.d(s,{default:function(){return b}});var l=t(6540),n=t(2186),a=t(7698),o=t(7361),i=t(4506),r=t(2518);function c(e){let{year:s,elimsFiles:t,finalsFiles:n}=e,a=t.problems,o=t.solutionSketches,i=t.solutions,r=t.codeSolutions,c=n.problems,m=n.solutionSketches,p=n.solutions,u=n.codeSolutions;return l.createElement("div",{className:s<2020?"probset old":"probset"},l.createElement("h2",null,"Algolympics ",s),l.createElement("div",{class:"downloads"},l.createElement("div",{class:"download-section elims"},l.createElement("h3",null,"Elims"),l.createElement("div",{class:"files"},l.createElement("a",{href:a,className:""===a?"problems unavailable":"problems"},"Problems"),l.createElement("a",{href:o,className:""===o?"solution-sketches unavailable":"solution-sketches"},"Solution Sketches"),l.createElement("a",{href:i,className:""===i?"solutions unavailable":"solutions"},"Solutions"),l.createElement("a",{href:r,className:""===r?"code-solutions unavailable":"code-solutions"},"Code Solutions"))),l.createElement("div",{class:"download-section finals"},l.createElement("h3",null,"Finals"),l.createElement("div",{class:"files"},l.createElement("a",{href:c,className:""===c?"problems unavailable":"problems"},"Problems"),l.createElement("a",{href:m,className:""===m?"solution-sketches unavailable":"solution-sketches"},"Solution Sketches"),l.createElement("a",{href:p,className:""===p?"solutions unavailable":"solutions"},"Solutions"),l.createElement("a",{href:u,className:""===u?"code-solutions unavailable":"code-solutions"},"Code Solutions")))))}function m(){let e=(0,i.A)(r.Bk.k);return e.sort(((e,s)=>e.year<s.year?1:e.year>s.year?-1:0)),l.createElement("div",{id:"prev-algo-probsets-section",className:"incompressible"},l.createElement("h1",null,"Previous Problem Sets"),l.createElement("div",{id:"probsets"},e.map((e=>l.createElement(c,{key:e.year,year:e.year,elimsFiles:e.elims,finalsFiles:e.finals})))))}function p(e){let{name:s,link:t,background:n}=e;return l.createElement("a",{className:"sample-problem",href:t},l.createElement("span",null,s))}function u(){return l.createElement("div",{id:"sample-problems-section",className:"incompressible"},l.createElement("h1",null,"Sample Problems"),l.createElement("div",{id:"samples"},r.Bk.c.map((e=>l.createElement(p,{key:e.name,name:e.name,link:e.link,background:e.background})))))}var d=t(1015);function g(){const e=(0,d.GR)("1031098317");return l.createElement("div",{id:"practice-recommendations-section",className:"incompressible"},l.createElement("div",{className:"title-container"},l.createElement("h1",null,"Recommendations")),l.createElement("div",{id:"recommendations-md",dangerouslySetInnerHTML:{__html:e.allMarkdownRemark.edges[0].node.html}}))}function b(){return l.createElement(l.Fragment,null,l.createElement(a.A,{algoYear:"2021",pageName:"Problem Sets",sitePage:"/2021/problems-2021/"}),l.createElement(n.A,{isIndex:!1,contentClass:"incompressible",contentId:"problems"},l.createElement(o.A,null,l.createElement(u,null),l.createElement(m,null),l.createElement(g,null))))}},2518:function(e){e.exports=JSON.parse('{"XS":"2021-03-20T12:59:59.999+08:00","c9":"2021-03-20T17:59:59.999+08:00","Yl":{"_Z":"/2021/assets/img/background.webp","D5":"/2021/assets/img/algo-brain.webp"},"Lv":{"s":"/2021/assets/img/algo-intro.webp"},"nL":[{"value":"700+","description":"participants that took the challenge from the past six years","staticIconSrc":"/2021/assets/img/people-icon-colored.png"},{"value":"23","description":"teams that made it to the top spots","staticIconSrc":"/2021/assets/img/leaderboard-icon-colored.png"},{"value":"30+","description":"universities that joined the competition across Luzon","staticIconSrc":"/2021/assets/img/location-icon-colored.png"}],"kJ":{"$1":"₱ 12,000","Rc":"₱ 9,000","it":"₱ 6,000"},"Z3":{"$1":{"imgSrc":"/2021/assets/img/winners/algo-2021-1st.webp","logoSrc":"/logo/upd.webp","name":"Kirk","university":"University of the Philippines - Diliman Campus"},"Rc":{"imgSrc":"/2021/assets/img/winners/algo-2021-2nd.webp","logoSrc":"/logo/admu.webp","name":"KFC","university":"Ateneo de Manila University"},"it":{"imgSrc":"/2021/assets/img/winners/algo-2021-3rd.webp","logoSrc":"/logo/admu.webp","name":"¯＼_(ツ)_／¯","university":"Ateneo de Manila University"}},"Ow":{"$1":{"logoSrc":"/2020/assets/img/logo/admu.webp","profileSrc":"/2020/assets/img/winners/bruh-group-photo.webp","name":"bruh","university":"Ateneo De Manila University","members":["","",""],"link":"#"},"Rc":{"logoSrc":"/2020/assets/img/logo/upd.webp","profileSrc":"/2020/assets/img/winners/dai-gurren-group-photo.webp","name":"Dai-Gurren","university":"University of the Philippines - Diliman Campus","members":["","",""],"link":"#"},"it":{"logoSrc":"/2020/assets/img/logo/admu.webp","profileSrc":"/2020/assets/img/winners/blossom-group-photo.webp","name":"Blossom","university":"Ateneo De Manila University","members":["","",""],"link":"#"}},"uP":[{"sponsorName":"Navitaire","staticLogoSrc":"/2021/assets/img/sponsors/navitaire/navitaire-amadeus-rgb.png","staticLogoSrcAlt":"/2021/assets/img/sponsors/navitaire/navitaire-amadeus-white.png","sponsorLink":"https://www.navitaire.com/"},{"sponsorName":"Calibr8","staticLogoSrc":"/2021/assets/img/sponsors/calibr8/calibr8-full-logo-transparent.png","staticLogoSrcAlt":"/2021/assets/img/sponsors/calibr8/calibr8-full-logo-white-transparent.png","sponsorLink":"http://www.calibr8digital.com/"},{"sponsorName":"FlexisourceIT","staticLogoSrc":"/2021/assets/img/sponsors/flexisourceIT/flexisourceit-color.png","staticLogoSrcAlt":"/2021/assets/img/sponsors/flexisourceIT/flexisourceit-white-horizontal.png","sponsorLink":"https://flexisourceit.com.au/"}],"V$":[{"type":"facebook","link":"https://fb.com/upacm"},{"type":"twitter","link":"https://twitter.com/upacm"},{"type":"linkedin","link":"https://ph.linkedin.com/company/upacm"},{"type":"youtube","link":"https://www.youtube.com/user/upacmYT"}],"M3":[{"type":"email","name":"algolympics@upacm.net","link":"#"},{"type":"location","name":"Department of Computer Science, University of the Philippines Diliman, Quezon City, Philippines","link":"https://goo.gl/maps/FfLKMHQvFqMWxh1Q6"},{"type":"mobile","name":"0920 859 5727 / 0905 301 8482","link":"#"}],"Bk":{"c":[{"name":"Santa\'s List","link":"/sample-probs/santas-list.pdf","background":"/2021/problems/sample/sample-bg.png"},{"name":"Make an Entrance","link":"/sample-probs/make-an-entrance.pdf","background":"/2021/problems/sample/sample-bg.png"},{"name":"Incomplete Model Kits","link":"/sample-probs/incomplete-model-kits.pdf","background":"/2021/problems/sample/sample-bg.png"},{"name":"Alien Defense","link":"/sample-probs/alien-defense.pdf","background":"/2021/problems/sample/sample-bg.png"},{"name":"Make Gawa This Program","link":"/sample-probs/make-gawa-this-program.pdf","background":"/2021/problems/sample/sample-bg.png"},{"name":"Guardians of the Lunatics","link":"/sample-probs/guardians-of-the-lunatics.pdf","background":"/2021/problems/sample/sample-bg.png"}],"k":[{"year":2021,"elims":{"problems":"https://codeforces.com/group/fDKsZH3HKS/contest/316191/problems","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"","solutions":"","solutionSketches":"/2021/problems/finals/algolympics-2021-solution-sketches.pdf","codeSolutions":""}},{"year":2020,"elims":{"problems":"https://codeforces.com/group/fDKsZH3HKS/contest/266086/problems","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2020/problems/finals/algolympics-2020-problems.pdf","solutions":"/2020/problems/finals/algolympics-2020-solutions.pdf","solutionSketches":"/2020/problems/finals/algolympics-2020-solution-sketches.pdf","codeSolutions":"/2020/problems/finals/algolympics-2020-code-solutions.zip"}},{"year":2019,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2019/problems/finals/algolympics-2019-problems.pdf","solutions":"","solutionSketches":"/2019/problems/finals/algolympics-2019-solution-sketches.pdf","codeSolutions":""}},{"year":2018,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2018/problems/finals/algolympics-2018-problems.pdf","solutions":"","solutionSketches":"/2018/problems/finals/algolympics-2018-solution-sketches.pdf","codeSolutions":""}},{"year":2017,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2017/problems/finals/algolympics-2017-problems.pdf","solutions":"","solutionSketches":"/2017/problems/finals/algolympics-2017-solution-sketches.pdf","codeSolutions":""}},{"year":2016,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2016/problems/finals/algolympics-2016-problems.pdf","solutions":"","solutionSketches":"/2016/problems/finals/algolympics-2016-solution-sketches.pdf","codeSolutions":""}},{"year":2015,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2015/problems/finals/algolympics-2015-problems.pdf","solutions":"/2015/problems/finals/algolympics-2015-solutions.pdf","solutionSketches":"/2015/problems/finals/algolympics-2015-solution-sketches.pdf","codeSolutions":""}}]}}')}}]);
//# sourceMappingURL=component---src-pages-2021-problems-2021-js-ded05498c96c90956881.js.map