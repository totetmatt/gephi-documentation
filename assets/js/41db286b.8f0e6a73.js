"use strict";(self.webpackChunkgephi_documentation=self.webpackChunkgephi_documentation||[]).push([[24],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=s(i),h=o,m=c["".concat(u,".").concat(h)]||c[h]||d[h]||a;return i?n.createElement(m,l(l({ref:t},p),{},{components:i})):n.createElement(m,l({ref:t},p))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,l=new Array(a);l[0]=c;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var s=2;s<a;s++)l[s]=i[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},450:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var n=i(7462),o=(i(7294),i(3905));const a={id:"build-a-plugin-without-gephi-source-code",title:"Build a plugin without Gephi source code"},l=void 0,r={unversionedId:"Plugins/build-a-plugin-without-gephi-source-code",id:"Plugins/build-a-plugin-without-gephi-source-code",title:"Build a plugin without Gephi source code",description:"It is possible to build a plugin using only binary installation of Gephi. The principle is to compile the plugin using the Gephi binary installation as a NetBeans platform.",source:"@site/docs/04_Plugins/Build-a-plugin-without-Gephi-source-code.md",sourceDirName:"04_Plugins",slug:"/Plugins/build-a-plugin-without-gephi-source-code",permalink:"/gephi-documentation/Plugins/build-a-plugin-without-gephi-source-code",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04_Plugins/Build-a-plugin-without-Gephi-source-code.md",tags:[],version:"current",frontMatter:{id:"build-a-plugin-without-gephi-source-code",title:"Build a plugin without Gephi source code"},sidebar:"tutorialSidebar",previous:{title:"Add a submenu",permalink:"/gephi-documentation/Plugins/add-a-submenu"},next:{title:"Code Sharing Strategy",permalink:"/gephi-documentation/Plugins/code-sharing-strategy"}},u={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Registering Gephi as a NetBeans Platform",id:"registering-gephi-as-a-netbeans-platform",level:2},{value:"Build a Plugin",id:"build-a-plugin",level:2},{value:"Creation of a Module Suite",id:"creation-of-a-module-suite",level:3},{value:"Creation of a Module",id:"creation-of-a-module",level:3},{value:"Add the Gephi Dependencies",id:"add-the-gephi-dependencies",level:3},{value:"TroubleShootings",id:"troubleshootings",level:2},{value:"The Gephi SPI/API is not seen when editing and compiling",id:"the-gephi-spiapi-is-not-seen-when-editing-and-compiling",level:3},{value:"Module Version not compatible",id:"module-version-not-compatible",level:3}],p={toc:s};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It is possible to build a plugin using only binary installation of Gephi. The principle is to compile the plugin using the Gephi binary installation as a NetBeans platform. "),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"First, you need a Gephi binary installation, such as the one that can be downloaded at ",(0,o.kt)("a",{parentName:"p",href:"https://gephi.org"},"https://gephi.org")),(0,o.kt)("h2",{id:"registering-gephi-as-a-netbeans-platform"},"Registering Gephi as a NetBeans Platform"),(0,o.kt)("p",null,'Open the "Tools|NetBeans Platforms" dialog, click on "Add Platform...", and choose the directory containing the Gephi binary installation. Note that when the NetBeans IDE detects a NetBeans Platform in a directory, the "Platform Name" label is filled with the identifier of this platform.'),(0,o.kt)("p",null,"By example, in the next picture, a Gephi installation was found in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/gephi-0.8-beta")," directory."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/197285/5655242/ff7f1a8c-96cb-11e4-9e83-6d2b110d31f9.png",alt:"addnetbeansplatform"})),(0,o.kt)("p",null,"Click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Next"),' button, and change the platform name if required. In that example, it was required to change the platform name to "Gephi 0.8 beta", since the Gephi 0.8 alpha and beta have the same identifier, namely "Gephi 0.8 alpha".'),(0,o.kt)("p",null,"As you can see, two Gephi platforms have been registered."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/197285/5655241/ff7ec96a-96cb-11e4-9b15-113c6e7148d0.png",alt:"addnetbeansplatformdone"})),(0,o.kt)("h2",{id:"build-a-plugin"},"Build a Plugin"),(0,o.kt)("p",null,"To build a plugin, it requires to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a module suite, event if your suite contains only one plugin, and make this suite use the Gephi platform;"),(0,o.kt)("li",{parentName:"ol"},"Create a plugin in the module suite."),(0,o.kt)("li",{parentName:"ol"},"Add as dependencies of your modules the NetBeans and Gephi modules containing the functionalities required.")),(0,o.kt)("h3",{id:"creation-of-a-module-suite"},"Creation of a Module Suite"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Click on "New|New Project";',(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},'In Categories, choose "NetBeans Modules, and "Module Suite" in projects, then click on the ',(0,o.kt)("inlineCode",{parentName:"li"},"Next")," button;"),(0,o.kt)("li",{parentName:"ol"},"Configure the name, locations at your will."),(0,o.kt)("li",{parentName:"ol"},"Choose the NetBeans Plaform you want to use. Here, you have to choose one of the Gephi platforms you have previously registered.")))),(0,o.kt)("h3",{id:"creation-of-a-module"},"Creation of a Module"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Click on "New|New Project";',(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},'In Categories, choose "NetBeans Modules, and "Module" in projects, then click on the ',(0,o.kt)("inlineCode",{parentName:"li"},"Next")," button;"),(0,o.kt)("li",{parentName:"ol"},"Configure the name, locations at your will. Add the new module to the module suite created in the previous step.")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/197285/5655243/ff849110-96cb-11e4-9311-323c9d31adbd.png",alt:"gephimoduleend"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Display after the creation of the module suite and the module")),(0,o.kt)("h3",{id:"add-the-gephi-dependencies"},"Add the Gephi Dependencies"),(0,o.kt)("p",null,"When some Gephi SPI/API are required by your module:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'In the Projects window, right-click on the "Libraries" item in the module tree.;'),(0,o.kt)("li",{parentName:"ol"},'Select the "Add Module Dependency";'),(0,o.kt)("li",{parentName:"ol"},"In the Filter textfield, enter a part or the totality of the interface/class required by your module."),(0,o.kt)("li",{parentName:"ol"},"Select in the Module pane the module containing the interface/class required.")),(0,o.kt)("h2",{id:"troubleshootings"},"TroubleShootings"),(0,o.kt)("h3",{id:"the-gephi-spiapi-is-not-seen-when-editing-and-compiling"},"The Gephi SPI/API is not seen when editing and compiling"),(0,o.kt)("p",null,"If the interfaces and classes are not seen by the editor and the compiler, please process the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Check the suite is using Gephi as its NetBeans platform by :",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},'Right-click on the suite project, click on the "Properties" item;'),(0,o.kt)("li",{parentName:"ol"},'In Categories, choose "Libraries". In the right pane, check whether the NetBeans Platform is using a Gephi installation, and change the platform if Gephi is not selected.'),(0,o.kt)("li",{parentName:"ol"},"In the Platform Modules tree, check the box for the gephi suite of modules, so that all the modules composing Gephi are used when compiling your module.")))),(0,o.kt)("h3",{id:"module-version-not-compatible"},"Module Version not compatible"),(0,o.kt)("p",null,'If an error message similar to "Cannot compile against a module: org-gephi-data-attributes-api.jar because of dependency: org.gephi.data.attributes.api > 0.8", it means the configuration of your module is requiring a Gephi module more recent than those provided by the Gephi platform used. A solution is to open the "Module Dependencies" dialog by doing:'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Right click on the module, choose the "Properties" item;'),(0,o.kt)("li",{parentName:"ol"},'In Categories, click on "Libraries";'),(0,o.kt)("li",{parentName:"ol"},'In the "Module Dependencies" tab, select the module causing problem, and edit the requirements on its version number.')))}d.isMDXComponent=!0}}]);