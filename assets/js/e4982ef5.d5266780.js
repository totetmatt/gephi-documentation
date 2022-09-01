"use strict";(self.webpackChunkgephi_documentation=self.webpackChunkgephi_documentation||[]).push([[7380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),h=u(n),c=a,g=h["".concat(p,".").concat(c)]||h[c]||d[c]||o;return n?i.createElement(g,l(l({ref:t},s),{},{components:n})):i.createElement(g,l({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var u=2;u<o;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var i=n(7462),a=(n(7294),n(3905));const o={id:"how-to-build-gephi",title:"How to build Gephi"},l=void 0,r={unversionedId:"Manuals/how-to-build-gephi",id:"Manuals/how-to-build-gephi",title:"How to build Gephi",description:"Follow this guide to start developing the Gephi source code and test your changes.",source:"@site/docs/02_Manuals/How-to-build-Gephi.md",sourceDirName:"02_Manuals",slug:"/Manuals/how-to-build-gephi",permalink:"/gephi-documentation/Manuals/how-to-build-gephi",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02_Manuals/How-to-build-Gephi.md",tags:[],version:"current",frontMatter:{id:"how-to-build-gephi",title:"How to build Gephi"},sidebar:"tutorialSidebar",previous:{title:"Developer Handbook",permalink:"/gephi-documentation/Manuals/developer-handbook"},next:{title:"Import CSV Data",permalink:"/gephi-documentation/Manuals/import-csv-data"}},p={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Netbeans Platform",id:"netbeans-platform",level:3},{value:"Gephi Architecture",id:"gephi-architecture",level:3},{value:"Build Gephi",id:"build-gephi",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Checkout and Build the sources",id:"checkout-and-build-the-sources",level:3},{value:"Run it",id:"run-it",level:3},{value:"Building Gephi in NetBeans",id:"building-gephi-in-netbeans",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Code changes not taken in account",id:"code-changes-not-taken-in-account",level:4},{value:"Building Gephi in IntelliJ IDEA",id:"building-gephi-in-intellij-idea",level:2},{value:"Troubleshooting",id:"troubleshooting-1",level:3},{value:"Debugging",id:"debugging",level:4}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Follow this guide to start developing the Gephi source code and test your changes."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("h3",{id:"netbeans-platform"},"Netbeans Platform"),(0,a.kt)("p",null,'The NetBeans Platform is a generic framework for Swing applications. It provides the "plumbing" that, before, every developer had to write themselves\u2014saving state, connecting actions to menu items, toolbar items and keyboard shortcuts; window management, and so on.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://netbeans.apache.org/kb/docs/platform/"},"Description")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://bits.netbeans.org/dev/javadoc/"},"Netbeans API Index")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://netbeans.apache.org/wiki/DevFaqIndex.asciidoc"},"FAQ"))),(0,a.kt)("h3",{id:"gephi-architecture"},"Gephi Architecture"),(0,a.kt)("p",null,"Gephi software architecture is modular and therefore each feature is split into modules. Modules depend on each other, and Gephi modules can either depend on other Gephi modules or Netbeans Platform modules. Plugins developers simply create new modules that contains their code, add dependencies to Gephi modules, and distribute their plugins by creating an NBM package. See Gephi APIs documentation to learn more about the API plugins that can be used by modules."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://gephi.org/docs/api"},"Gephi APIs documentation"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/177962/5606309/e7360250-9429-11e4-9085-d948267a3f7d.png",alt:"image"})),(0,a.kt)("h2",{id:"build-gephi"},"Build Gephi"),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Java JDK 11 or later"),(0,a.kt)("li",{parentName:"ul"},"Apache Maven version 3.2.2 or later")),(0,a.kt)("h3",{id:"checkout-and-build-the-sources"},"Checkout and Build the sources"),(0,a.kt)("p",null,"Navigate to the desired directory you wish to place the project via terminal, then clone the repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/gephi/gephi\ncd gephi \n")),(0,a.kt)("p",null,"Gephi uses Maven for building. Each module has its ",(0,a.kt)("inlineCode",{parentName:"p"},"POM.xml")," file and there is a ",(0,a.kt)("inlineCode",{parentName:"p"},"gephi-parent")," POM file that lists all the modules required to build. "),(0,a.kt)("p",null,"Run this command to build all modules. Note that this process could take some time."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mvn clean install\n")),(0,a.kt)("h3",{id:"run-it"},"Run it"),(0,a.kt)("p",null,"Once built, Gephi can be run from the ",(0,a.kt)("inlineCode",{parentName:"p"},"modules/application")," folder using a special Maven goal:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Mac/Linux:"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">> cd modules/application\n>> mvn nbm:cluster-app nbm:run-platform\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Windows:"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">> cd modules\\application\n>> mvn nbm:cluster-app nbm:run-platform\n")),(0,a.kt)("h2",{id:"building-gephi-in-netbeans"},"Building Gephi in NetBeans"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://netbeans.apache.org/"},"Apache Netbeans")," is the default IDE to develop Gephi as it natively integrates with the Netbeans Platform. Loading the project is straightforward."),(0,a.kt)("p",null,"Open Netbeans and go to ",(0,a.kt)("strong",{parentName:"p"},"File > Open Project")," to look for the Gephi folder. Then, ",(0,a.kt)("strong",{parentName:"p"},"Open Project"),'. Ensure the checkbox "Open Required Projects" is not selected.'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/gephi/gephi/raw/gh-pages/wiki/build/open.png",alt:"Opening Gephi"})),(0,a.kt)("p",null,"Right-click on the project and select ",(0,a.kt)("strong",{parentName:"p"},"Clean and Build"),". "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/gephi/gephi/raw/gh-pages/wiki/build/clean_and_build.png",alt:"Build"})),(0,a.kt)("p",null,"Next, in the ",(0,a.kt)("strong",{parentName:"p"},"Projects")," tab of the file navigator, select ",(0,a.kt)("strong",{parentName:"p"},"Gephi > Modules > gephi-app")," and open the application module."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/gephi/gephi/raw/gh-pages/wiki/build/open_app.png",alt:"Open gephi-app"})),(0,a.kt)("p",null,"Finally, select ",(0,a.kt)("strong",{parentName:"p"},"Run")," from this module."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/gephi/gephi/raw/gh-pages/wiki/build/run.png",alt:"Run"})),(0,a.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h4",{id:"code-changes-not-taken-in-account"},"Code changes not taken in account"),(0,a.kt)("p",null,"When you make code changes in a module, make sure to ",(0,a.kt)("strong",{parentName:"p"},"Clean and Build")," this module before Running Gephi again as otherwise your changes won't be taken in account."),(0,a.kt)("h2",{id:"building-gephi-in-intellij-idea"},"Building Gephi in IntelliJ IDEA"),(0,a.kt)("p",null,"As Gephi is a Maven project it is well supported by IntelliJ but requires some tweaks to work properly."),(0,a.kt)("p",null,"Open IntelliJ and open the Gephi folder. You'll be asked whether you want to Trust this Maven repository. Select ",(0,a.kt)("strong",{parentName:"p"},"Trust Project"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/gephi/gephi/raw/gh-pages/wiki/build/intellij-trust-maven.png",alt:"Trust Maven"})),(0,a.kt)("p",null,"IntelliJ then takes some time to scan the project and resolve dependencies. Once completed, you should see Gephi properly listed as a project in the Project pane."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/gephi/gephi/raw/gh-pages/wiki/build/intellij-project.png",alt:"Project loaded"})),(0,a.kt)("p",null,"Then, navigate to IntelliJ's preferences panel ",(0,a.kt)("strong",{parentName:"p"},"Build, Execution, Deployment > Build Tools > Maven > Runner")," and select the option ",(0,a.kt)("strong",{parentName:"p"},"Delegate IDE build/run actions to Maven"),". This is a critical step."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/gephi/gephi/raw/gh-pages/wiki/build/intellij-maven-delegate.png",alt:"Maven delegate config"})),(0,a.kt)("p",null,"Next in the top-level menu select ",(0,a.kt)("strong",{parentName:"p"},"Build > Build Project"),"."),(0,a.kt)("p",null,"If it fails with and error like ",(0,a.kt)("inlineCode",{parentName:"p"},"javac flag not found --release"),", you would need to fo back to  ",(0,a.kt)("strong",{parentName:"p"},"Build, Execution, Deployment > Build Tools > Maven > Runner")," and add an ",(0,a.kt)("strong",{parentName:"p"},"Environment Variables")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"JAVA_HOME=<path of the selected JDK>")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/gephi/gephi/raw/gh-pages/wiki/build/intellij-build.png",alt:"Build"})),(0,a.kt)("p",null,"Once completed, create a run configuration by following ",(0,a.kt)("strong",{parentName:"p"},"Run > Edit Configurations...")," in the top-level menu."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/gephi/gephi/raw/gh-pages/wiki/build/intellij-config.png",alt:"Build"})),(0,a.kt)("p",null,"Here, select ",(0,a.kt)("strong",{parentName:"p"},"Add new configuration")," and search for ",(0,a.kt)("strong",{parentName:"p"},"Maven"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/gephi/gephi/raw/gh-pages/wiki/build/intellij-config-add.png",alt:"Add Maven Config"})),(0,a.kt)("p",null,"Next, we'll configure two things here. Enter ",(0,a.kt)("inlineCode",{parentName:"p"},"nbm:cluster-app nbm:run-platform")," into the ",(0,a.kt)("strong",{parentName:"p"},"Command line")," field and select the ",(0,a.kt)("inlineCode",{parentName:"p"},"modules/application")," sub-directory into the ",(0,a.kt)("strong",{parentName:"p"},"Working directory")," chooser. Give Gephi as name for the configuration."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/gephi/gephi/raw/gh-pages/wiki/build/intellij-set-config.png",alt:"Set Maven Config"})),(0,a.kt)("p",null,"Finally, you can run Gephi by selecting ",(0,a.kt)("strong",{parentName:"p"},"Run > Run 'Gephi'")," from the top-level menu."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/gephi/gephi/raw/gh-pages/wiki/build/intellij-run.png",alt:"Run"})),(0,a.kt)("h3",{id:"troubleshooting-1"},"Troubleshooting"),(0,a.kt)("h4",{id:"debugging"},"Debugging"),(0,a.kt)("p",null,"At this point (IntelliJ 2021.1) debugging doesn't work out of the box. To enable debugging in IntelliJ follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Alter your Run configuration and add ",(0,a.kt)("inlineCode",{parentName:"p"}," -Dnetbeans.run.params.debug=-J-agentlib:jdwp=transport=dt_socket,suspend=n,server=n,address=8000")," to the command line, after ",(0,a.kt)("inlineCode",{parentName:"p"},"nbm:cluster-app nbm:run-platform"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a new ",(0,a.kt)("strong",{parentName:"p"},"Remote JVM Debug")," Run configuration and select ",(0,a.kt)("strong",{parentName:"p"},"Listen to Remote JVM"),". Make sure to configure 8000 as the port as well. You can name this configuration ",(0,a.kt)("strong",{parentName:"p"},"Gephi Debug"),". "))),(0,a.kt)("p",null,"Now, start the ",(0,a.kt)("strong",{parentName:"p"},"Gephi Debug")," by selecting the Debug button. The debugger starts and waits for Gephi to start as well. Then, start Gephi in Debug mode. The debugger should now log ",(0,a.kt)("inlineCode",{parentName:"p"},"Connected to the target VM, address: 'localhost:8000', transport: 'socket'")," and properly stop at your breakpoints."))}d.isMDXComponent=!0}}]);