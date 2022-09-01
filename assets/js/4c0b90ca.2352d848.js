"use strict";(self.webpackChunkgephi_documentation=self.webpackChunkgephi_documentation||[]).push([[7888],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8044:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const i={id:"import-csv-data",title:"Import CSV Data"},r=void 0,l={unversionedId:"Manuals/import-csv-data",id:"Manuals/import-csv-data",title:"Import CSV Data",description:"Introduction",source:"@site/docs/02_Manuals/Import-CSV-Data.md",sourceDirName:"02_Manuals",slug:"/Manuals/import-csv-data",permalink:"/gephi-documentation/Manuals/import-csv-data",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02_Manuals/Import-CSV-Data.md",tags:[],version:"current",frontMatter:{id:"import-csv-data",title:"Import CSV Data"},sidebar:"tutorialSidebar",previous:{title:"How to build Gephi",permalink:"/gephi-documentation/Manuals/how-to-build-gephi"},next:{title:"Import Dynamic Data",permalink:"/gephi-documentation/Manuals/import-dynamic-data"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Launching the import CSV wizard and first step",id:"launching-the-import-csv-wizard-and-first-step",level:2},{value:"Last step - Choosing columns details and table specific options",id:"last-step---choosing-columns-details-and-table-specific-options",level:2},{value:"Importing to nodes table",id:"importing-to-nodes-table",level:3},{value:"Importing to edges table",id:"importing-to-edges-table",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This manual shows what steps are necessary to import CSV files into Gephi with data laboratory, which will expect that each row of the file is a node or an edge."),(0,o.kt)("p",null,"Note that the import can be done at any moment, the workspace does not need to be empty. You should know some general aspects of the import process: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You may choose which columns to import. The only exceptions are 'Source' and 'Target' for edges tables, which are mandatory and can't be deselected"),(0,o.kt)("li",{parentName:"ul"},"If a column title already exists in the workspace you will be able to use it but the data type of the column can't be changed, and imported data will be parsed to fit the existing column type"),(0,o.kt)("li",{parentName:"ul"},"Data for each row and column will be parsed to the given/existing column data type when possible. If this is not possible for a given cell, then it will be set to a null value"),(0,o.kt)("li",{parentName:"ul"},"You can choose what table to import the rows to (nodes or edges), but the behaviour and requirements are different. Be aware of what options you have selected before executing the import process")),(0,o.kt)("p",null,"Next we'll learn how to use the import wizard to customize the data to our needs based on the options available. "),(0,o.kt)("h2",{id:"launching-the-import-csv-wizard-and-first-step"},"Launching the import CSV wizard and first step"),(0,o.kt)("p",null,"Start by clicking 'Import CSV' button in Data Laboratory as shown in the picture "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/197285/5621089/42079e06-9532-11e4-8060-c8331475fad6.png",alt:"launch-import-csv-wizard"})),(0,o.kt)("p",null,"Then the import wizard will open and you are presented with some generic, table independent options. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/197285/5621090/4c450e1c-9532-11e4-98f1-f14a5f17b55f.png",alt:"import-csv-step1"})),(0,o.kt)("p",null,"In this step you will indicate the format of the CSV file and can preview the resulting table."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First specify a CSV file that is not empty"),(0,o.kt)("li",{parentName:"ul"},"Then choose the values separator from some common options and the encoding/charset of the file"),(0,o.kt)("li",{parentName:"ul"},"Finally select the table to import the rows and columns of the file. Edges table files require, at minimum, columns labeled 'Source' and 'Target' (which can be case insensitive)")),(0,o.kt)("h2",{id:"last-step---choosing-columns-details-and-table-specific-options"},"Last step - Choosing columns details and table specific options"),(0,o.kt)("p",null,"This final step offers some common options and behaviour descriptions for both nodes tables or edges tables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can mark what columns to use and select their type when they don't exist yet"),(0,o.kt)("li",{parentName:"ul"},"If no node/edge Id column is provided or it is empty for some row, an automatic id will be assigned")),(0,o.kt)("h3",{id:"importing-to-nodes-table"},"Importing to nodes table"),(0,o.kt)("p",null,"When importing to nodes table you can also indicate if you want to update a node's data instead of creating a new node when a node with that id already exists."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/197285/5621094/520d375c-9532-11e4-9779-a77ee3474fa3.png",alt:"import-csv-step2-nodes"})),(0,o.kt)("h3",{id:"importing-to-edges-table"},"Importing to edges table"),(0,o.kt)("p",null,"In case of importing to edges table, the behaviour is a bit different:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"'Source' and 'Target' node Ids are mandatory for all rows"),(0,o.kt)("li",{parentName:"ul"},"Edge type is optional and its default is 'Directed'")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/197285/5621096/5661d20e-9532-11e4-8c8d-e3dcfb779c70.png",alt:"import-csv-step2-edges"})))}u.isMDXComponent=!0}}]);