(self.webpackChunk=self.webpackChunk||[]).push([[628],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3919:(e,t,r)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>a})},4996:(e,t,r)=>{"use strict";r.d(t,{C:()=>o,Z:()=>i});var n=r(2263),a=r(3919);function o(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,c=void 0!==i&&i,l=o.absolute,s=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(c)return t+r;var p=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+p:p}(o,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},3215:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>c,metadata:()=>l,toc:()=>s,default:()=>u});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=r(4996),c={id:"coverityscan",title:"Coverity Scan"},l={unversionedId:"development-infrastructure/code-validation/coverityscan",id:"development-infrastructure/code-validation/coverityscan",isDocsHomePage:!1,title:"Coverity Scan",description:"| | |",source:"@site/../docs/development-infrastructure/code-validation/coverityscan.mdx",sourceDirName:"development-infrastructure/code-validation",slug:"/development-infrastructure/code-validation/coverityscan",permalink:"/docs/development-infrastructure/code-validation/coverityscan",editUrl:"https://github.com/finos/open-developer-platform/edit/master/website/../docs/development-infrastructure/code-validation/coverityscan.mdx",version:"current",frontMatter:{id:"coverityscan",title:"Coverity Scan"},sidebar:"mainSidebar",previous:{title:"Code Climate",permalink:"/docs/development-infrastructure/code-validation/codeclimate"},next:{title:"Node Security",permalink:"/docs/development-infrastructure/code-validation/nodesecurity"}},s=[{value:"Request access",id:"request-access",children:[]}],p={toc:s};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{height:"150px",alt:"coverity-logo",src:(0,i.Z)("img/vendors/coverity-logo.png")}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:"left"}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Name")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Coverity")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Status")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Delivered")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Link")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://scan.coverity.com"},"scan.coverity.com"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Topics")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Security,Quality")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Languages")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Java, Javascript, C#, Python")))),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://scan.coverity.com/"},"Coverity Scan")," service was initiated with the U.S. Department of Homeland Security as the largest public-private sector research project in the world, focused on open source software quality and security; it is now a free service to the open source community."),(0,o.kt)("p",null,"Below are listed the main CoverityScan features that have been adopted by Foundation projects."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Integration with CI environments"),(0,o.kt)("li",{parentName:"ol"},"Scans code for security vulnerabilities"),(0,o.kt)("li",{parentName:"ol"},"Scans code for bad practices"),(0,o.kt)("li",{parentName:"ol"},"Scans code for bugs")),(0,o.kt)("p",null,"Please note that Coverity applies ",(0,o.kt)("a",{parentName:"p",href:"https://scan.coverity.com/faq#frequency"},"frequency build limits"),"; the build configuration (and/or branching strategy) must be adapted to avoid high submission rate."),(0,o.kt)("img",{alt:"coverity-dashboard",src:(0,i.Z)("img/vendors/coverity-dashboard.png")}),(0,o.kt)("img",{alt:"coverity-metrics",src:(0,i.Z)("img/vendors/coverity-metrics.png")}),(0,o.kt)("h2",{id:"request-access"},"Request access"),(0,o.kt)("p",null,"CoverityScan provides a Github signup that grants access to a personal dashboard and register a new Github project."),(0,o.kt)("img",{alt:"coverity-new-project",src:(0,i.Z)("img/vendors/coverity-new-project.png")}))}u.isMDXComponent=!0}}]);