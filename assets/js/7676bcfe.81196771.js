"use strict";(self.webpackChunkgephi_documentation=self.webpackChunkgephi_documentation||[]).push([[659],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={id:"add-a-submenu",title:"Add a submenu"},i=void 0,l={unversionedId:"Plugins/add-a-submenu",id:"Plugins/add-a-submenu",title:"Add a submenu",description:"From a plugin it is easy to add a menu in the menubar, for instance in Plugins. If you wanna add your action in a already existing menu, like Generate, don't follow this HowTo but look more how to create a new Generator, as the submenus may be created dynamically.",source:"@site/docs/04_Plugins/Add-a-submenu.md",sourceDirName:"04_Plugins",slug:"/Plugins/add-a-submenu",permalink:"/gephi-documentation/Plugins/add-a-submenu",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04_Plugins/Add-a-submenu.md",tags:[],version:"current",frontMatter:{id:"add-a-submenu",title:"Add a submenu"},sidebar:"tutorialSidebar",previous:{title:"Add a module panel",permalink:"/gephi-documentation/Plugins/add-a-module-panel"},next:{title:"Build a plugin without Gephi source code",permalink:"/gephi-documentation/Plugins/build-a-plugin-without-gephi-source-code"}},u={},s=[{value:"Create Action and Menu",id:"create-action-and-menu",level:2},{value:"Fill Action",id:"fill-action",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"From a plugin it is easy to add a menu in the menubar, for instance in ",(0,r.kt)("strong",{parentName:"p"},"Plugins"),". If you wanna add your action in a already existing menu, like ",(0,r.kt)("strong",{parentName:"p"},"Generate"),", don't follow this HowTo but look more how to create a new Generator, as the submenus may be created dynamically. "),(0,r.kt)("h2",{id:"create-action-and-menu"},"Create Action and Menu"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1"),": Right click on your module and select ",(0,r.kt)("strong",{parentName:"li"},"New > Other...")," and find ",(0,r.kt)("strong",{parentName:"li"},"Action")," like showed in the step 1 below. The action wizard will create everything necessary to register your action in the system and create the submenu.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/197285/5655118/77effff6-96ca-11e4-8a14-923e41cabee0.png",alt:"addsubmenu-new-action"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2"),": Then click on ",(0,r.kt)("strong",{parentName:"li"},"Next"),", be sure ",(0,r.kt)("strong",{parentName:"li"},"Always Enabled")," is checked and ",(0,r.kt)("strong",{parentName:"li"},"Next")," again."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3"),": In the ",(0,r.kt)("strong",{parentName:"li"},"Menu")," option, select where you want your submenu to be put. Select ",(0,r.kt)("strong",{parentName:"li"},"Plugins")," to be put in this menu.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/197285/5655120/78224dbc-96ca-11e4-8deb-04f3f52d3de0.png",alt:"addsubmenu-new-action-gui"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4"),": Click on ",(0,r.kt)("strong",{parentName:"li"},"Next")," and fill the class name, as well as the display name.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/197285/5655121/7827d8c2-96ca-11e4-8d80-506e5ee48d4f.png",alt:"addsubmenu-new-action-name"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 5"),": Finally, click on ",(0,r.kt)("strong",{parentName:"li"},"Next")," to create the file.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/197285/5655119/781fd820-96ca-11e4-883c-4ea57cf1eaaf.png",alt:"addsubmenu-new-action-result"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Result")),(0,r.kt)("h2",{id:"fill-action"},"Fill Action"),(0,r.kt)("p",null,"The precedent step created the ",(0,r.kt)("strong",{parentName:"p"},"MyAction.java")," file in your module. Implement something in the action to be executed when users click on the menu. In the example below an empty dialog is showed, using ",(0,r.kt)("strong",{parentName:"p"},"Dialogs API"),". Include ",(0,r.kt)("strong",{parentName:"p"},"Dialogs API")," as a dependency of your module if you want to use it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public final class MyAction implements ActionListener {\n \n   public void actionPerformed(ActionEvent e) {\n      //Do something - for instance display a dialog\n      DialogDescriptor dd = new DialogDescriptor(new JPanel(), "My Dialog", false, null);\n      DialogDisplayer.getDefault().notify(dd);\n   }\n}\n')))}p.isMDXComponent=!0}}]);