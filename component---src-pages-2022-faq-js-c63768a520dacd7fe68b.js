"use strict";(self.webpackChunkup_acm_algolympics=self.webpackChunkup_acm_algolympics||[]).push([[624],{6779:function(e,t,n){n.d(t,{Z:function(){return o}});var s=n(7294),a=n(5414);function o(e){var t=e.algoYear,n=e.pageName,o=e.sitePage,l=e.isIndex,i=s.createElement("title",null,n," - Algolympics ",t);return l&&(i=s.createElement("title",null,"Algolympics ",t)),s.createElement(a.q,null,s.createElement("meta",{charSet:"utf-8"}),i,s.createElement("link",{rel:"canonical",href:"https://algolympics.upacm.net"+o}),s.createElement("meta",{name:"Description",content:"The Algolympics is an annual intercollegiate programming competition open to all interested schools, colleges and universities in the Philippines, inspired by the likes of ICPC."}))}},1790:function(e,t,n){n.d(t,{Z:function(){return f}});var s=n(7294),a=n(5444),o=n(9519),l=n(8014),i=n.p+"static/header-icon-5efa5d7da7ec5912aab5573ebd78012a.png",r=n(664);function c(e){var t=e.name,n=e.links,i=(0,s.useState)(!1),r=i[0],c=i[1],m=(0,s.useCallback)((function(e){"Enter"===e.key&&c(!r)}),[r]);return s.createElement("div",{className:"nav-dropdown navlink-outer"},s.createElement("div",{role:"button",className:"nav-dropdown-button",tabIndex:0,onClick:function(){return c(!r)},onKeyDown:m},s.createElement("span",{className:"navlink"},t," ",s.createElement(o.G,{icon:l.eW2}))),s.createElement("div",{className:r?"nav-dropdown-content visible":"nav-dropdown-content"},n.map((function(e,t){var n=e.label,o=e.href;return e.external?s.createElement("a",{key:t,href:o,className:"nav-dropdown-link"},n):s.createElement(a.rU,{key:t,to:o,className:"nav-dropdown-link",activeClassName:"nav-dropdown-link",onClick:function(){return c(!1)}},n)}))))}function m(e){var t=e.isIndex,n=(0,s.useState)(!1),m=n[0],p=n[1],u=(0,s.useState)(!1),d=u[0],g=u[1];(0,s.useEffect)((function(){var e=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)/2,t=function(){window.scrollY>e!==m&&p(!m)};return document.addEventListener("scroll",t),function(){document.removeEventListener("scroll",t)}}));var f=(0,s.useCallback)((function(e){"Enter"===e.key&&g(!d)}),[d]);return s.createElement(s.Fragment,null,s.createElement("div",{className:m||!t?"header":"header top"},s.createElement("div",{className:"wrapper"},s.createElement(a.rU,{to:"/2022/"},s.createElement("div",{className:"title"},s.createElement("img",{src:i,alt:"Header"}),s.createElement("h1",null,s.createElement("span",{className:"red"},"ALGO"),s.createElement("span",{className:"yellow"},"LYM"),s.createElement("span",{className:"green"},"PICS"),s.createElement("span",{className:"blue"},"2022")))),s.createElement("div",{role:"button",className:"navigation-icon",tabIndex:0,onClick:function(){return g(!d)},onKeyDown:f},s.createElement(o.G,{icon:l.xiG,size:"2x"})),s.createElement("div",{className:d?"navbar visible":"navbar"},s.createElement("nav",{className:"navlinks"},s.createElement(a.rU,{className:"navlink",activeClassName:"navlink",to:"/2022/mechanics/"},"Mechanics"),s.createElement(a.rU,{className:"navlink",activeClassName:"navlink",to:"/2022/problems-2022/"},"Problems"),s.createElement(a.rU,{className:"navlink",activeClassName:"navlink",to:"/2022/faq/"},"FAQ"),s.createElement(c,{name:"Archive",links:r.j.map((function(e){return{label:""+e.year,href:e.link,external:e.external}}))}),s.createElement("a",{className:"navlink",href:"http://upacm.net"},"UP ACM"))))),t?null:s.createElement("div",{className:"header-spacer"}))}var p=n(910);function u(e){var t=e.type,n=e.link,a="/2022/assets/img/social/"+t+"-logo.png";return s.createElement("a",{className:"social",href:n},s.createElement("img",{src:a,alt:"Social Logo"}))}function d(e){var t=e.type,n=e.name,a=e.link,o="/2022/assets/img/social/"+t+"-logo.png";return"#"!==a?s.createElement("a",{className:"contact",href:a},s.createElement("div",{className:"contact-logo"},s.createElement("img",{src:o,alt:"Contact Logo"})),s.createElement("div",{className:"contact-info"},s.createElement("span",null,n))):s.createElement("div",{className:"contact"},s.createElement("div",{className:"contact-logo"},s.createElement("img",{src:o,alt:"Contact Logo"})),s.createElement("div",{className:"contact-info"},s.createElement("span",null,n)))}function g(){var e=(new Date).getFullYear();return s.createElement("div",{className:"footer incompressible"},s.createElement("div",{className:"top"},s.createElement("div",{className:"wrapper"},s.createElement("div",{className:"other-links section"},s.createElement("h2",null,"UP ACM"),s.createElement("a",{className:"other-link",href:"http://upacm.net"},"Website"),s.createElement("a",{className:"other-link",href:"https://upacm.github.io/acm-website/automaton/"},"Automaton"),s.createElement("a",{className:"other-link",href:"http://upacm.net/privacy-policy"},"Privacy Policy")),s.createElement("div",{className:"contacts section"},s.createElement("h2",null,s.createElement(a.rU,{className:"contact-us-link",to:"/contact/"},"Contact Us")),p.Jx.map((function(e){return s.createElement(d,{key:e.name,link:e.link,name:e.name,type:e.type})}))),s.createElement("div",{className:"socials section"},s.createElement("h2",null,"Connect with us!"),s.createElement("div",{className:"social-links"},p.UY.map((function(e){return s.createElement(u,{key:e.type,type:e.type,link:e.link})})))))),s.createElement("div",{className:"bottom"},s.createElement("span",{className:"copyright"},"© ",e," Association for Computing Machinery - University of the Philippines Diliman Student Chapter, Inc.")))}function f(e){var t=e.isIndex,n=e.contentClass,a=e.contentId,o=e.children;return s.createElement(s.Fragment,null,s.createElement(m,{isIndex:t}),s.createElement("div",{className:"content wrapper "+n,id:a},o),s.createElement(g,null))}},9702:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var s=n(7294),a=n(1790),o=n(6779);function l(e){var t=e.data;return s.createElement(s.Fragment,null,s.createElement(o.Z,{algoYear:"2022",pageName:"FAQs",sitePage:"/2022/faq/"}),s.createElement(a.Z,{isIndex:!1,contentClass:"index",contentId:"faq"},s.createElement("div",{id:"faq-layout",className:"md-layout"},s.createElement("h1",{id:"page-title"},"Frequently Asked Questions"),s.createElement("div",{dangerouslySetInnerHTML:{__html:t.allMarkdownRemark.edges[0].node.html}}))))}},910:function(e){e.exports=JSON.parse('{"_$":{"FY":"/2022/assets/img/background.webp","wM":"/2022/assets/img/algo-brain.webp"},"mf":{"s":"/2022/assets/img/algo-intro.webp"},"KT":[{"value":"700+","description":"participants that took the challenge from the past years","staticIconSrc":"/2022/assets/img/people-icon-colored.png"},{"value":"20+","description":"teams that made it to the top spots","staticIconSrc":"/2022/assets/img/leaderboard-icon-colored.png"},{"value":"30+","description":"universities that joined the competition across the Philippines","staticIconSrc":"/2022/assets/img/location-icon-colored.png"}],"GU":{"Ps":"₱ 12,000","E0":"₱ 9,000","EA":"₱ 6,000"},"s3":{"Ps":{},"E0":{},"EA":{}},"wQ":{"Ps":{"imgSrc":"/2022/assets/img/previous-winners/algo-2021-1st.webp","logoSrc":"/logo/upd.webp","name":"Kirk","university":"University of the Philippines - Diliman Campus"},"E0":{"imgSrc":"/2022/assets/img/previous-winners/algo-2021-2nd.webp","logoSrc":"/logo/admu.webp","name":"KFC","university":"Ateneo de Manila University"},"EA":{"imgSrc":"/2022/assets/img/previous-winners/algo-2021-3rd.webp","logoSrc":"/logo/admu.webp","name":"¯＼_(ツ)_／¯","university":"Ateneo de Manila University"}},"nw":[{"sponsorName":"Freelancer","staticLogoSrc":"/2022/assets/img/sponsors/freelancer/FLN_LOGO_DIGITAL.png","sponsorLink":"https://www.freelancer.ph/"},{"sponsorName":"Expedock","staticLogoSrc":"/2022/assets/img/sponsors/expedock/Expedock Logo-Black.png","sponsorLink":"https://www.expedock.com/"},{"sponsorName":"White Widget","staticLogoSrc":"/2022/assets/img/sponsors/whiteWidget/logo-web-copy-1.png","sponsorLink":"https://whitewidget.com/"},{"sponsorName":"Navitaire","staticLogoSrc":"/2022/assets/img/sponsors/navitaire/navitaire-amadeus-rgb.png","sponsorLink":"https://www.navitaire.com/"},{"sponsorName":"Course Hero","staticLogoSrc":"/2022/assets/img/sponsors/courseHero/Blue_Horizontal.png","sponsorLink":"https://www.coursehero.com/"},{"sponsorName":"Orange and Bronze","staticLogoSrc":"/2022/assets/img/sponsors/orangeAndBronze/O_BLogoRGB-HorizontalVersion2020.png","sponsorLink":"https://www.orangeandbronze.com/"},{"sponsorName":"Sammsung","staticLogoSrc":"/2022/assets/img/sponsors/samsung/Samsung Logo - New.png","sponsorLink":"https://www.samsung.com/ph/"}],"UY":[{"type":"facebook","link":"https://fb.com/upacm"},{"type":"twitter","link":"https://twitter.com/upacm"},{"type":"linkedin","link":"https://ph.linkedin.com/company/upacm"},{"type":"youtube","link":"https://www.youtube.com/user/upacmYT"}],"Jx":[{"type":"email","name":"algolympics@upacm.net","link":"#"},{"type":"location","name":"Department of Computer Science, University of the Philippines Diliman, Quezon City, Philippines","link":"https://goo.gl/maps/FfLKMHQvFqMWxh1Q6"},{"type":"mobile","name":"0905 301 8482","link":"#"}],"S6":{"j":[{"name":"Santa\'s List","link":"/sample-probs/santas-list.pdf","background":"/2022/problems/sample/sample-bg.png"},{"name":"Make an Entrance","link":"/sample-probs/make-an-entrance.pdf","background":"/2022/problems/sample/sample-bg.png"},{"name":"Incomplete Model Kits","link":"/sample-probs/incomplete-model-kits.pdf","background":"/2022/problems/sample/sample-bg.png"},{"name":"Alien Defense","link":"/sample-probs/alien-defense.pdf","background":"/2022/problems/sample/sample-bg.png"},{"name":"Make Gawa This Program","link":"/sample-probs/make-gawa-this-program.pdf","background":"/2022/problems/sample/sample-bg.png"},{"name":"Guardians of the Lunatics","link":"/sample-probs/guardians-of-the-lunatics.pdf","background":"/2022/problems/sample/sample-bg.png"}],"X":[{"year":2021,"elims":{"problems":"https://codeforces.com/group/fDKsZH3HKS/contest/316191/problems","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"","solutions":"","solutionSketches":"/2021/problems/finals/algolympics-2021-solution-sketches.pdf","codeSolutions":""}},{"year":2020,"elims":{"problems":"https://codeforces.com/group/fDKsZH3HKS/contest/266086/problems","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2020/problems/finals/algolympics-2020-problems.pdf","solutions":"/2020/problems/finals/algolympics-2020-solutions.pdf","solutionSketches":"/2020/problems/finals/algolympics-2020-solution-sketches.pdf","codeSolutions":"/2020/problems/finals/algolympics-2020-code-solutions.zip"}},{"year":2019,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2019/problems/finals/algolympics-2019-problems.pdf","solutions":"","solutionSketches":"/2019/problems/finals/algolympics-2019-solution-sketches.pdf","codeSolutions":""}},{"year":2018,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2018/problems/finals/algolympics-2018-problems.pdf","solutions":"","solutionSketches":"/2018/problems/finals/algolympics-2018-solution-sketches.pdf","codeSolutions":""}},{"year":2017,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2017/problems/finals/algolympics-2017-problems.pdf","solutions":"","solutionSketches":"/2017/problems/finals/algolympics-2017-solution-sketches.pdf","codeSolutions":""}},{"year":2016,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2016/problems/finals/algolympics-2016-problems.pdf","solutions":"","solutionSketches":"/2016/problems/finals/algolympics-2016-solution-sketches.pdf","codeSolutions":""}},{"year":2015,"elims":{"problems":"","solutions":"","solutionSketches":"","codeSolutions":""},"finals":{"problems":"/2015/problems/finals/algolympics-2015-problems.pdf","solutions":"/2015/problems/finals/algolympics-2015-solutions.pdf","solutionSketches":"/2015/problems/finals/algolympics-2015-solution-sketches.pdf","codeSolutions":""}}]}}')}}]);
//# sourceMappingURL=component---src-pages-2022-faq-js-c63768a520dacd7fe68b.js.map