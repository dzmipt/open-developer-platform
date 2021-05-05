(self.webpackChunk=self.webpackChunk||[]).push([[814],{3905:(e,t,i)=>{"use strict";i.d(t,{Zo:()=>u,kt:()=>h});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(i),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return i?n.createElement(m,r(r({ref:t},u),{},{components:i})):n.createElement(m,r({ref:t},u))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},3919:(e,t,i)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}i.d(t,{b:()=>n,Z:()=>o})},4996:(e,t,i)=>{"use strict";i.d(t,{C:()=>a,Z:()=>r});var n=i(2263),o=i(3919);function a(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,i=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,i,n){var a=void 0===n?{}:n,r=a.forcePrependBaseUrl,s=void 0!==r&&r,l=a.absolute,c=void 0!==l&&l;if(!i)return i;if(i.startsWith("#"))return i;if((0,o.b)(i))return i;if(s)return t+i;var u=i.startsWith(t)?i:t+i.replace(/^\//,"");return c?e+u:u}(a,i,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},3070:(e,t,i)=>{"use strict";i.r(t),i.d(t,{frontMatter:()=>s,metadata:()=>l,toc:()=>c,default:()=>d});var n=i(2122),o=i(9756),a=(i(7294),i(3905)),r=i(4996),s={id:"whitesource",title:"Whitesource"},l={unversionedId:"development-infrastructure/code-validation/whitesource",id:"development-infrastructure/code-validation/whitesource",isDocsHomePage:!1,title:"Whitesource",description:"| | |",source:"@site/../docs/development-infrastructure/code-validation/whitesource.mdx",sourceDirName:"development-infrastructure/code-validation",slug:"/development-infrastructure/code-validation/whitesource",permalink:"/docs/development-infrastructure/code-validation/whitesource",editUrl:"https://github.com/finos/open-developer-platform/edit/master/website/../docs/development-infrastructure/code-validation/whitesource.mdx",version:"current",frontMatter:{id:"whitesource",title:"Whitesource"},sidebar:"mainSidebar",previous:{title:"Sonar Cloud",permalink:"/docs/development-infrastructure/code-validation/sonarcloud"},next:{title:"Project Documentation",permalink:"/docs/development-infrastructure/project-documentation"}},c=[{value:"Glossary",id:"glossary",children:[]},{value:"Features",id:"features",children:[]},{value:"WhiteSource Policies",id:"whitesource-policies",children:[]},{value:"Integration with GitHub.com",id:"integration-with-githubcom",children:[{value:"FINOS default configurations",id:"finos-default-configurations",children:[]},{value:"Enable WhiteSource scanning",id:"enable-whitesource-scanning",children:[]},{value:"Testing WhiteSource scanning",id:"testing-whitesource-scanning",children:[]},{value:"Configuring WhiteSource scanning",id:"configuring-whitesource-scanning",children:[]}]},{value:"Build integration",id:"build-integration",children:[]},{value:"Request access",id:"request-access",children:[]}],u={toc:c};function d(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("img",{height:"150px",alt:"whitesource-logo",src:(0,r.Z)("img/vendors/whitesource-logo.png")}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:"left"}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Name")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Whitesource")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Status")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Delivered")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Link")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://whitesourcesoftware.com"},"whitesourcesoftware.com"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Topics")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Legal, Security, Quality")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Languages")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Javascript")))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.whitesourcesoftware.com/"},"WhiteSource")," automatically identi\ufb01es all the open source components and dependencies in your build by constant and automatic cross-referencing of your open source components against WhiteSource\u2019s de\ufb01nitive database of open source repositories.\nWhiteSource provides a dedicated instance to validate and enforce security and legal compliance for all Symphony Software Foundation hosted projects."),(0,a.kt)("p",null,"Below are listed the main WhiteSource features that have been adopted by Foundation projects."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Check libraries for outdated versions"),(0,a.kt)("li",{parentName:"ol"},"Check libraries for security vulnerabilities"),(0,a.kt)("li",{parentName:"ol"},"Check libraries for bugs"),(0,a.kt)("li",{parentName:"ol"},"Check libraries for problematic/undefined licenses"),(0,a.kt)("li",{parentName:"ol"},"Check libraries for release activity"),(0,a.kt)("li",{parentName:"ol"},"Integration with CI environments")),(0,a.kt)("h2",{id:"glossary"},"Glossary"),(0,a.kt)("p",null,"To avoid confusion, below are listed some WhiteSource concepts that differ with the definitions used within the Foundation."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A ",(0,a.kt)("strong",{parentName:"li"},"FINOS repository")," is a Github repository hosted by the Foundation; in WhiteSource terms, this is called a project"),(0,a.kt)("li",{parentName:"ol"},"A ",(0,a.kt)("strong",{parentName:"li"},"FINOS Project")," is a logical entity that includes\na. one or more project leaders\nb. a project team\nc. one or more Foundation repositories; if one, project and repository will have the same name.\nd. In WhiteSource terms, this is called a product and can be accessed directly by the WhiteSource main menu; each ",(0,a.kt)("strong",{parentName:"li"},"WhiteSource Product")," will list below the projects included."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Foundation WhiteSoure dashboard")," - WhiteSource provides a dedicated instance for the Foundation projects that can be accessed\na. by all project leaders, to check and export project metrics\nb. by Foundation Staff, to configure Foundation WhiteSource policies"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Foundation WhiteSource policies")," - A collection of rules and workflows implemented in the WhiteSource dashboard by the Foundation team to enforce security and legal compliance; below are reported the details."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Alert")," - The visual notification that WhiteSource shows in the main dashboard when a policy violation is found")),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("img",{height:"150px",alt:"whitesource-dashboard",src:(0,r.Z)("img/vendors/whitesource-dashboard.png")}),(0,a.kt)("p",null,"WhiteSource provides the following features to Foundation project leads/committers that have been granted access:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Access the WhiteSource dashboard for one or more projects\na. Access WhiteSource Due Diligence and Risk reports\nb. Browse (and drill down) through project libraries\nc. Browse (and drill down) through licenses found in the project\nd. Check alerts and warnings triggered by policy violations"),(0,a.kt)("li",{parentName:"ol"},"Configure WhiteSource build plugins to upload project metrics"),(0,a.kt)("li",{parentName:"ol"},"Configure Travis CI (or other CI environments) to continuously\na. validate code against Foundation policies enforced by WhiteSource\nb. fail the build, if any policy violation is found\nc. upload project metrics to the WhiteSource Foundation dashboard")),(0,a.kt)("h2",{id:"whitesource-policies"},"WhiteSource Policies"),(0,a.kt)("p",null,"Below are the WhiteSource policies that have been configured by the Foundation and are enforced across all integrated projects; all libraries that are scanned in a project are matched against the following policies, in the order reported below, until a policy is matched."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"[SECURITY]"," Reject High Security Vulnerability Severity - any library that contains high level CVEs is marked as Rejected,"),(0,a.kt)("li",{parentName:"ol"},"[SECURITY]"," Reject High Security Vulnerability Score - any library that contains CVEs with score higher than 7 is marked as Rejected,"),(0,a.kt)("li",{parentName:"ol"},"[QUALITY]"," Reject High Bug Rating - any library ",(0,a.kt)("a",{parentName:"li",href:"https://www.whitesourcesoftware.com/open-source-bug-tracking/"},"high bug rating")," is marked as Rejected,"),(0,a.kt)("li",{parentName:"ol"},"[LEGAL]"," Licenses that require review - any library with unknown license is marked as Rejected,"),(0,a.kt)("li",{parentName:"ol"},"[QUALITY]"," Reassign Low Version Activity - any library with a low amount of versions released is Reassigned to the project lead for validation,"),(0,a.kt)("li",{parentName:"ol"},"[QUALITY]"," Reassign Stale (5 years) Library - any library without a release for more than 5 years is Reassigned to the project lead for validation,"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"[LEGAL] Reject Problematic (Category X license) libraries - any library using a Category X license, as indicated in our contribution legal requirements, are marked as Rejected."))),(0,a.kt)("p",null,"Note that legal policies are currently disabled due to the large amount of false positive generated by dual-licensed libraries. We are working to improve things."),(0,a.kt)("h2",{id:"integration-with-githubcom"},"Integration with GitHub.com"),(0,a.kt)("p",null,"FINOS have rolled out the ",(0,a.kt)("a",{parentName:"p",href:"https://whitesource.atlassian.net/wiki/spaces/WD/pages/697696422/WhiteSource+for+GitHub.com"},"WhiteSource integration for Github.com"),", which enables:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Automatic (and configurable) scanning of all commits on the default branch (commonly master) and Pull Requests"),(0,a.kt)("li",{parentName:"ol"},"Automatic (and configurable) scanning of all Pull Requests against the default branch (commonly master)"),(0,a.kt)("li",{parentName:"ol"},"Support for most of languages and build tools currently used in FINOS projects"),(0,a.kt)("li",{parentName:"ol"},"Creation of GitHub issues with CVE description and meta; please find the issue details on the ",(0,a.kt)("a",{parentName:"li",href:"https://whitesource.atlassian.net/wiki/spaces/WD/pages/697696422/WhiteSource+for+GitHub.com#WhiteSourceforGitHub.com-ViewingDetailsofanIssue"},"WhiteSource docs page"))),(0,a.kt)("img",{alt:"whitesource-issue",src:(0,r.Z)("img/vendors/whitesource-issue.png")}),(0,a.kt)("h3",{id:"finos-default-configurations"},"FINOS default configurations"),(0,a.kt)("p",null,"There are 2 configuration files to define at repository level, in order to enable the WhiteSource integration with GitHub.com: .whitesource file configures the bot and whitesource.config configures the WhiteSource agent."),(0,a.kt)("h4",{id:"whitesource"},".whitesource"),(0,a.kt)("p",null,"Specifies whether to use GitHub Issues or not and points to the WhiteSource agent configuration. You can copy this file definition from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/finos/project-blueprint"},"https://github.com/finos/project-blueprint")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'.whitesource\n{\n  "scanSettings": {\n    "configMode": "LOCAL"\n  },\n  "checkRunSettings": {\n    "vulnerableCheckRunConclusionLevel": "failure"\n  },\n  "issueSettings": {\n    "minSeverityLevel": "LOW"\n  }\n}\n')),(0,a.kt)("h4",{id:"whitesourceconfig"},"whitesource.config"),(0,a.kt)("p",null,"Specifies build-time configurations, including language-specific settings, file inclusions/exclusions and more. You can copy the default configuration from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/finos/project-blueprint"},"FINOS project blueprint"),". More info can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://whitesource.atlassian.net/wiki/spaces/WD/pages/489160834/Unified+Agent+Configuration+File+Parameters"},"parameters docs page")),(0,a.kt)("h3",{id:"enable-whitesource-scanning"},"Enable WhiteSource scanning"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Read the ",(0,a.kt)("a",{parentName:"li",href:"https://whitesource.atlassian.net/wiki/spaces/WD/pages/697696422/WhiteSource+for+GitHub.com"},"WhiteSource for Github.com integration")," documentation, to know what it does and how"),(0,a.kt)("li",{parentName:"ol"},"Email ",(0,a.kt)("a",{parentName:"li",href:"mailto:help@finos.org"},"help@finos.org")," to request the activation of WhiteSource integration on a FINOS hosted project\na. When enabled, the app will create a Pull Request to add a .whitesource file in the codebase root"),(0,a.kt)("li",{parentName:"ol"},"Merge the Pull Request raised on point #2")),(0,a.kt)("h3",{id:"testing-whitesource-scanning"},"Testing WhiteSource scanning"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This integration only scans for new CVEs that are introduced by a code change, therefore the build is triggered only when a build descriptor is updated, ie ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.kt)("p",{parentName:"div"},"If you'd like to be notified about new and upcoming CVEs, please email ",(0,a.kt)("a",{parentName:"p",href:"mailto:help@finos.org"},"help@finos.org")," and request email notification for new CVEs spotted on a given project."))),(0,a.kt)("p",null,"The easiest and less invasive way to test is to create a new branch, add a dependency with security vulnerabilities and commit the change; few minutes later (time depends on build complexity), the app will have created one GitHub Issue for each CVE found."),(0,a.kt)("img",{alt:"whitesource-pr-check",src:(0,r.Z)("img/vendors/whitesource-pr-check.png")}),(0,a.kt)("p",null,"If no issues are created, and want to know if the scan was performed, email ",(0,a.kt)("a",{parentName:"p",href:"mailto:help@finos.org"},"help@finos.org")," and FINOS team will help you debugging bot's execution."),(0,a.kt)("h3",{id:"configuring-whitesource-scanning"},"Configuring WhiteSource scanning"),(0,a.kt)("p",null,"False positives are expected, when enabling the WhiteSource integration, because of a long list of factors related with the (sometimes low) quality of the downstream library that you're consuming; being able to fine-tune the WhiteSource agent is very important, in particular excluding files and folders that should not be scanned, which is necessary most of the times."),(0,a.kt)("p",null,"To have the ability to exclude files and folders, you must:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Copy the FINOS blueprint ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/finos/project-blueprint/blob/master/.whitesource"},(0,a.kt)("strong",{parentName:"a"},".whitesource"))," into your GitHub repository."),(0,a.kt)("li",{parentName:"ol"},"Copy the FINOS blueprint ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/finos/project-blueprint/blob/master/whitesource.config"},(0,a.kt)("strong",{parentName:"a"},"whitesource.config"))," into your GitHub repository."),(0,a.kt)("li",{parentName:"ol"},"Configure your project ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/finos/project-blueprint/blob/master/whitesource.config#L11"},"excludes")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"whitesource.config"),"."),(0,a.kt)("li",{parentName:"ol"},"Send a Pull Request to your project which includes a change to your dependencies, and see the WhiteSource scanning in action.")),(0,a.kt)("p",null,"Please note that there may be additional configurations to apply, based on your build requirements and tools; build-specific configurations can be viewed  on ",(0,a.kt)("a",{parentName:"p",href:"https://whitesource.atlassian.net/wiki/spaces/WD/pages/804814917/Unified+Agent+Configuration+File+and+Parameters#UnifiedAgentConfigurationFileandParameters-PackageManagerDependencyResolvers"},"WhiteSource Agent docs"),", and see what applies to your project configuration."),(0,a.kt)("h2",{id:"build-integration"},"Build integration"),(0,a.kt)("p",null,"As alternative to the GitHub.com integration, WhiteSource also provides an agent (CLI tool) that can be downloaded and executed from any environment; this may be necessary in case the project's build tool or language are not supported by WhiteSource and some custom build logic must be performed to prepare for the scanning."),(0,a.kt)("p",null,"Many build servers are supported, including Travis CI, the most used tool used by FINOS hosted projects"),(0,a.kt)("p",null,"Glossary\nTo avoid confusion, below are listed some WhiteSource concepts that differ with the definitions used within the Foundation."),(0,a.kt)("p",null,"A Foundation repository is a Github repository hosted by the Foundation; in WhiteSource terms, this is called a project\nA Foundation project is a logical entity that includes\none or more project leaders\na project team\none or more Foundation repositories; if one, project and repository will have the same name.\nIn WhiteSource terms, this is called a product and can be accessed directly by the WhiteSource main menu; each WhiteSource product will list below the projects included."),(0,a.kt)("p",null,"Additionally, a convenience script has been created and saved to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/finos/contrib-toolbox/blob/master/scripts/wss-maven-scan.sh"},"https://github.com/finos/contrib-toolbox/blob/master/scripts/wss-maven-scan.sh")," which can be used for simplifying one-off scanning of projects; it requires a WhiteSource API key that must requested via ",(0,a.kt)("a",{parentName:"p",href:"mailto:help@finos.org"},"help@finos.org"),", and accepts GitHub repo coordinates, a GitHub user/org name and a GitHub repository name."),(0,a.kt)("p",null,"Below an example to submit metrics for the Open Developer Platform repo."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'export WSS_API_KEY="xxx"\ncurl -L https://raw.githubusercontent.com/finos/contrib-toolbox/master/scripts/wss-maven-scan.sh | bash -s -- finos open-developer-platform\n')),(0,a.kt)("h2",{id:"request-access"},"Request access"),(0,a.kt)("p",null,"You can request access to the FINOS WhiteSource dashboard if you're part of a FINOS project team; please send an email to ",(0,a.kt)("a",{parentName:"p",href:"mailto:help@finos.org"},"help@finos.org")," that specifies:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"the email address you'd like to use to login"),(0,a.kt)("li",{parentName:"ol"},"the Foundation project you would like to scan with WhiteSource")),(0,a.kt)("p",null,"If you login for the first time in WhiteSource and no project have been registered yet, the dashboard will look empty; ",(0,a.kt)("a",{parentName:"p",href:"https://finosfoundation.atlassian.net/wiki/spaces/FDX/pages/75530409"},"check how to configure your build")," in order to upload metrics for the first time."))}d.isMDXComponent=!0}}]);