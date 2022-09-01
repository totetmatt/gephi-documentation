"use strict";(self.webpackChunkgephi_documentation=self.webpackChunkgephi_documentation||[]).push([[2877],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=a,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={id:"generator",title:"Generator"},i=void 0,l={unversionedId:"Plugins/generator",id:"Plugins/generator",title:"Generator",description:"This HowTo shows how to create a new graph generator in Gephi.",source:"@site/docs/04_Plugins/Generator.md",sourceDirName:"04_Plugins",slug:"/Plugins/generator",permalink:"/gephi-documentation/Plugins/generator",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04_Plugins/Generator.md",tags:[],version:"current",frontMatter:{id:"generator",title:"Generator"},sidebar:"tutorialSidebar",previous:{title:"Filter",permalink:"/gephi-documentation/Plugins/filter"},next:{title:"GraphStreaming",permalink:"/gephi-documentation/Plugins/graphstreaming"}},p={},s=[{value:"Create a new Generator",id:"create-a-new-generator",level:2},{value:"Set Dependencies",id:"set-dependencies",level:3},{value:"Create Generator",id:"create-generator",level:3},{value:"Generate the graph",id:"generate-the-graph",level:3},{value:"Set LongTask",id:"set-longtask",level:3},{value:"Sample",id:"sample",level:3}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This HowTo shows how to create a new graph generator in Gephi."),(0,a.kt)("p",null,"Please look at [","[Plugin Quick Start]","] to know how to create a new Netbeans Module. When you have your plugin module, that we will call ",(0,a.kt)("em",{parentName:"p"},"MyGenerator"),", you can start this tutorial."),(0,a.kt)("h2",{id:"create-a-new-generator"},"Create a new Generator"),(0,a.kt)("h3",{id:"set-dependencies"},"Set Dependencies"),(0,a.kt)("p",null,"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"Lookup"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"GraphAPI")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"LongTaskAPI")," modules as dependencies for your plugin module ",(0,a.kt)("em",{parentName:"p"},"MyGenerator"),". See [","[How To Set Module Dependencies]","]."),(0,a.kt)("h3",{id:"create-generator"},"Create Generator"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a new class that implements ",(0,a.kt)("a",{parentName:"li",href:"https://gephi.org/docs/api/org/gephi/io/generator/spi/Generator.html"},"Generator"),". This is the place the code belongs."),(0,a.kt)("li",{parentName:"ul"},'Fill getName() method by returning a display name like "My Generator". Fill ',(0,a.kt)("inlineCode",{parentName:"li"},"getUI()")," method by returning ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),". Leaves other methods untouched for the moment."),(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"@ServiceProvider")," annotation to your builder class. Add the following line before ",(0,a.kt)("em",{parentName:"li"},"MyGenerator")," class definition, as shown below:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@ServiceProvider(service = Generator.class)\npublic class MyGenerator implements Generator {\n...\n")),(0,a.kt)("h3",{id:"generate-the-graph"},"Generate the graph"),(0,a.kt)("p",null,"Fill ",(0,a.kt)("inlineCode",{parentName:"p"},"generate()")," method by creating ",(0,a.kt)("inlineCode",{parentName:"p"},"NodeDraft")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"EdgeDraft")," elements to add to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ContainerLoader"),"."),(0,a.kt)("h3",{id:"set-longtask"},"Set LongTask"),(0,a.kt)("p",null,"To let your graph creation task be canceled and its progress watched, implement ",(0,a.kt)("inlineCode",{parentName:"p"},"LongTask")," interface on ",(0,a.kt)("em",{parentName:"p"},"MyGenerator"),".\nAdd two fields:"),(0,a.kt)("p",null,"private boolean cancel = false;\nprivate ProgressTicket progressTicket;"),(0,a.kt)("p",null,"and implement new methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public boolean cancel() {\n    cancel = true;\n    return true;\n}\n \npublic void setProgressTicket(ProgressTicket progressTicket) {\n    this.progressTicket = progressTicket;\n}\n")),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"cancel")," field to terminate your algorithm execution properly and return from ",(0,a.kt)("inlineCode",{parentName:"p"},"generate()"),"."),(0,a.kt)("h3",{id:"sample"},"Sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@ServiceProvider(service = Generator.class)\npublic class HelloWorld implements Generator {\n \n    protected ProgressTicket progress;\n    protected boolean cancel = false;\n \n    public void generate(ContainerLoader container) {\n        // create nodes\n        NodeDraft n1 = container.factory().newNodeDraft();\n        NodeDraft n2 = container.factory().newNodeDraft();\n \n        // set node labels\n        n1.setLabel("Hello");\n        n2.setLabel("World");\n \n        // create edge\n        EdgeDraft e = container.factory().newEdgeDraft();\n        e.setSource(n1);\n        e.setTarget(n2);\n \n        // fill in the graph\n        container.addNode(n1);\n        container.addNode(n2);\n        container.addEdge(e);\n    }\n \n    public String getName() {\n        return "Hello World";\n    }\n \n    public GeneratorUI getUI() {\n        return null;\n    }\n \n    public boolean cancel() {\n        cancel = true;\n        return true;\n    }\n \n    public void setProgressTicket(ProgressTicket progressTicket) {\n        this.progress = progressTicket;\n    }\n}\n')))}d.isMDXComponent=!0}}]);