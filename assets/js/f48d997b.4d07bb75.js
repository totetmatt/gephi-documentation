"use strict";(self.webpackChunkgephi_documentation=self.webpackChunkgephi_documentation||[]).push([[2875],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(7462),o=(n(7294),n(3905));const r={id:"troubleshooting",title:"Troubleshooting",tags:["Troubleshooting","Startup"]},a=void 0,l={unversionedId:"Software/troubleshooting",id:"Software/troubleshooting",title:"Troubleshooting",description:"Memory issues",source:"@site/docs/06_Software/01-Troubleshooting.md",sourceDirName:"06_Software",slug:"/Software/troubleshooting",permalink:"/gephi-documentation/Software/troubleshooting",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06_Software/01-Troubleshooting.md",tags:[{label:"Troubleshooting",permalink:"/gephi-documentation/tags/troubleshooting"},{label:"Startup",permalink:"/gephi-documentation/tags/startup"}],version:"current",sidebarPosition:1,frontMatter:{id:"troubleshooting",title:"Troubleshooting",tags:["Troubleshooting","Startup"]},sidebar:"tutorialSidebar",previous:{title:"Software",permalink:"/gephi-documentation/category/software"},next:{title:"Graphical User Interface",permalink:"/gephi-documentation/Software/gui"}},s={},p=[{value:"Memory issues",id:"memory-issues",level:2},{value:"How to edit gephi.conf:",id:"how-to-edit-gephiconf",level:3},{value:"64-bit",id:"64-bit",level:3},{value:"Where are user files?",id:"where-are-user-files",level:2},{value:"Linux issues",id:"linux-issues",level:2},{value:"Select Sun JRE on Ubuntu",id:"select-sun-jre-on-ubuntu",level:3},{value:"Improve text rendering",id:"improve-text-rendering",level:3},{value:"Mac OS X issues",id:"mac-os-x-issues",level:2},{value:"Improve text rendering",id:"improve-text-rendering-1",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"memory-issues"},"Memory issues"),(0,o.kt)("p",null,"Memory available to Gephi is determined by Java. Less or more memory can be allocated by configuring Gephi's startup settings. If too little memory is allocated, Gephi will stop running when it reached the limit and you will loose your current work. If too much memory is set, Java will not be able to start and return ",(0,o.kt)("strong",{parentName:"p"},"JVM Creation failed")," message. By default, maximum memory is set to 256mo or 512mo."),(0,o.kt)("p",null,"To modify memory settings, you need to edit Gephi settings file. Modify the value after the ",(0,o.kt)("inlineCode",{parentName:"p"},"-Xmx")," option to change the maximum heap space. For example, to use a heap size between 256 and 1024 MB, change the options to ",(0,o.kt)("inlineCode",{parentName:"p"},"-Xms256m")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"-Xmx1024m"),". If you have Gephi open, you must close and reopen Gephi before new options take effect. On computers with 2GB of memory, you can set ",(0,o.kt)("inlineCode",{parentName:"p"},"-Xmx1400")," to get maximum performance."),(0,o.kt)("h3",{id:"how-to-edit-gephiconf"},"How to edit gephi.conf:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"On ",(0,o.kt)("strong",{parentName:"li"},"Windows"),", go to the Gephi folder in Start menu and click on Startup Settings. Edit this file with Notepad or WordPad. Alternatively, go to ",(0,o.kt)("inlineCode",{parentName:"li"},"C:\\Program Files\\Gephi\\etc\\gephi.conf")," and edit file manually."),(0,o.kt)("li",{parentName:"ul"},"On ",(0,o.kt)("strong",{parentName:"li"},"Mac OS X"),", right-click on Gephi application icon and select Show Package Contents to open a new Finder window displaying a Contents folder. Open the Contents folder, and then open the ",(0,o.kt)("inlineCode",{parentName:"li"},"Resources/gephi/etc")," folder, in which the gephi.conf file resides. Use TextEdit to edit the file."),(0,o.kt)("li",{parentName:"ul"},"On ",(0,o.kt)("strong",{parentName:"li"},"Linux"),", go into your application directory and then into the ",(0,o.kt)("inlineCode",{parentName:"li"},"etc")," folder. Edit the file with a text editor.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To use Gephi with more than ~1.5GB of memory, which could happen with very large graphs, you need to use A 64-bit version of Java. See following section.")),(0,o.kt)("h3",{id:"64-bit"},"64-bit"),(0,o.kt)("p",null,"Gephi has been successfully tested on 64-bit architecture (AMD64, Intel Core 2 Duo, Intel Core i7), 64 bits OS (Windows Vista 64-bit, Windows 7 64-bit) and 64-bit version of Java (JVM 64-Bit Server). To use more than ~1.5GB of memory in Gephi, which could happen with very large graphs, you need to have a 64-bit architecture, OS and a 64-bit JVM. A compatible 64-bit JRE or JDK can be downloaded from Java website."),(0,o.kt)("p",null,"When multiple JRE or JDK are installed on the same machine, you can specify to Gephi to use a particular path. Edit ",(0,o.kt)("inlineCode",{parentName:"p"},"gephi.conf")," as described in the upper section, uncomment the jdkhome line and set the JRE or JDK path."),(0,o.kt)("h2",{id:"where-are-user-files"},"Where are user files?"),(0,o.kt)("p",null,"Locate and delete gephi user directory to clean your installation."),(0,o.kt)("p",null,"On Windows 2K/XP, user directory is located in"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Documents and Settings\\username\\Application Data\\.gephi")),(0,o.kt)("p",null,"On Windows Vista/Seven, user directory is located in"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Users\\username\\AppData\\Roaming\\.gephi"),(0,o.kt)("br",{parentName:"p"}),"\n","(the logs files are under  ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Users\\username\\AppData\\Roaming\\.gephi\\{gephiVersion}\\dev\\var\\log\\messages.log")),(0,o.kt)("p",null,"On Mac OS X, user directory is located in"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/Users/username/Library/Application\\ Support/gephi")),(0,o.kt)("p",null,"On Linux, user directory is located in"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/home/username/.gephi")),(0,o.kt)("h2",{id:"linux-issues"},"Linux issues"),(0,o.kt)("h3",{id:"select-sun-jre-on-ubuntu"},"Select Sun JRE on Ubuntu"),(0,o.kt)("p",null,"After installing the Sun Java package, remember to run in command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo update-alternatives --config java\nsudo update-alternatives --config javac\n")),(0,o.kt)("p",null,"In both cases select the option that has a path with java-6-sun in it."),(0,o.kt)("h3",{id:"improve-text-rendering"},"Improve text rendering"),(0,o.kt)("p",null,"Add the following JVM parameter in the Gephi configuration file:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-J-Dawt.useSystemAAFontSettings=on")),(0,o.kt)("p",null,"Or add it to your environment variables:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'export _JAVA_OPTIONS="-Dawt.useSystemAAFontSettings=on"')),(0,o.kt)("h2",{id:"mac-os-x-issues"},"Mac OS X issues"),(0,o.kt)("h3",{id:"improve-text-rendering-1"},"Improve text rendering"),(0,o.kt)("p",null,"Add the following JVM parameter in the Gephi configuration file:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-J-Dapple.awt.graphics.UseQuartz=true")))}c.isMDXComponent=!0}}]);