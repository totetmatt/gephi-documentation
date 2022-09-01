"use strict";(self.webpackChunkgephi_documentation=self.webpackChunkgephi_documentation||[]).push([[2247],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(g,i(i({ref:t},s),{},{components:a})):n.createElement(g,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4033:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={id:"extend-data-laboratory",title:"Extend Data Laboratory"},i=void 0,l={unversionedId:"Plugins/extend-data-laboratory",id:"Plugins/extend-data-laboratory",title:"Extend Data Laboratory",description:"Introduction",source:"@site/docs/04_Plugins/Extend-Data-Laboratory.md",sourceDirName:"04_Plugins",slug:"/Plugins/extend-data-laboratory",permalink:"/gephi-documentation/Plugins/extend-data-laboratory",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04_Plugins/Extend-Data-Laboratory.md",tags:[],version:"current",frontMatter:{id:"extend-data-laboratory",title:"Extend Data Laboratory"},sidebar:"tutorialSidebar",previous:{title:"Export",permalink:"/gephi-documentation/Plugins/export"},next:{title:"Filter",permalink:"/gephi-documentation/Plugins/filter"}},p={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Where each type of manipulator appears in Gephi desktop application",id:"where-each-type-of-manipulator-appears-in-gephi-desktop-application",level:3},{value:"The Manipulator interface",id:"the-manipulator-interface",level:3},{value:"Create a new Manipulator",id:"create-a-new-manipulator",level:2},{value:"Setting up our data",id:"setting-up-our-data",level:3},{value:"Name and description",id:"name-and-description",level:3},{value:"Determining if our manipulator should be eligible to execute",id:"determining-if-our-manipulator-should-be-eligible-to-execute",level:3},{value:"Provide an UI",id:"provide-an-ui",level:3},{value:"Ordering and classifying manipulators",id:"ordering-and-classifying-manipulators",level:3},{value:"Optional icon",id:"optional-icon",level:3},{value:"Executing the final action",id:"executing-the-final-action",level:3},{value:"Complete code for Group nodes manipulator",id:"complete-code-for-group-nodes-manipulator",level:3},{value:"Nodes and edges manipulators",id:"nodes-and-edges-manipulators",level:2},{value:"AttributeColumnsManipulators",id:"attributecolumnsmanipulators",level:2},{value:"Builders (how to get our plugins to appear in data laboratory perspective)",id:"builders-how-to-get-our-plugins-to-appear-in-data-laboratory-perspective",level:2},{value:"Providing a GUI",id:"providing-a-gui",level:2},{value:"Manipulators Summary",id:"manipulators-summary",level:2}],s={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Data Laboratory section of Gephi provides a good amount of basic and common features to manipulate the graph. But data laboratory can be extended with new features as plugins easily through Data Laboratory API/SPI. All Gephi's default data laboratory features are in ",(0,r.kt)("strong",{parentName:"p"},"Data Laboratory Plugin"),". ",(0,r.kt)("strong",{parentName:"p"},"Simple and complex examples can be found in this module"),"."),(0,r.kt)("p",null,"For this tutorial, the ",(0,r.kt)("strong",{parentName:"p"},"SPI")," packages (",(0,r.kt)("inlineCode",{parentName:"p"},"org.gephi.datalab.spi"),") are the most interesting, while ",(0,r.kt)("inlineCode",{parentName:"p"},"org.gephi.datalab.api")," only contains several controllers that expose general features to be used by plugins or other parts of gephi."),(0,r.kt)("p",null,"Data Laboratory SPI may seem big, but all interfaces to implement are mostly the same with small changes necessary to define different types of features. ",(0,r.kt)("strong",{parentName:"p"},"Once you know how to create some kind of feature, it is simple to create others"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"From now on, we will call data laboratory features 'manipulators' since they manipulate graph data/elements.")),(0,r.kt)("h3",{id:"where-each-type-of-manipulator-appears-in-gephi-desktop-application"},"Where each type of manipulator appears in Gephi desktop application"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/197285/5622447/0cc75486-9544-11e4-83c9-f2c25c9eaec3.png",alt:"800px-data-lab-overview"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/197285/5622445/0cc19c30-9544-11e4-95a1-6041c38c0878.png",alt:"merge-strategies"})),(0,r.kt)("h3",{id:"the-manipulator-interface"},"The Manipulator interface"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"http://gephi.org/docs/api/org/gephi/datalab/spi/Manipulator.html"},"Manipulator")," interface is the part that most of the interfaces that you will implement share in common. Also, all kinds of manipulators can provide an optional GUI just by returning an implementation of the ",(0,r.kt)("a",{parentName:"p",href:"https://gephi.org/docs/api/org/gephi/datalab/spi/ManipulatorUI.html"},"ManipulatorUI")," interface."),(0,r.kt)("p",null,"The interfaces that extend Manipulator to provide specific types of manipulators are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://gephi.org/docs/toolkit/org/gephi/datalab/spi/nodes/NodesManipulator.html"},"NodesManipulator")," - Defines a context menu action to manipulate one or more selected nodes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://gephi.org/docs/toolkit/org/gephi/datalab/spi/edges/EdgesManipulator.html"},"EdgesManipulator")," - Defines a context menu action to manipulate one or more selected edges."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://gephi.org/docs/toolkit/org/gephi/datalab/spi/general/GeneralActionsManipulator.html"},"GeneralActionsManipulator")," - Defines a general action not related to any specific graph element. ",(0,r.kt)("a",{parentName:"li",href:"http://gephi.org/docs/toolkit/org/gephi/datalab/spi/general/PluginGeneralActionsManipulator.html"},"PluginGeneralActionsManipulator")," is the same but appears in a plugin button that displays a list of general actions (use this when the tool bar does not have enough space for more general actions)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://gephi.org/docs/toolkit/org/gephi/datalab/spi/values/AttributeValueManipulator.html"},"AttributeValueManipulator")," - Defines a context menu action that manipulates a single cell data (pair of AttributeRow and AttributeColumn)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://gephi.org/docs/toolkit/org/gephi/datalab/spi/columns/merge/AttributeColumnsMergeStrategy.html"},"AttributeColumnsMergeStrategy")," - Defines an strategy"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gephi.org/docs/api/org/gephi/datalab/spi/rows/merge/AttributeRowsMergeStrategy.html"},"AttributeRowsMergeStrategy")," - A very special type of manipulator that defines strategies for merging rows to be used by a nodes/edges manipulator or other parts (does not have a place in Data Laboratory GUI by itself but it is currently used by MergeNodes manipulator).")),(0,r.kt)("p",null,"Only ",(0,r.kt)("a",{parentName:"p",href:"http://gephi.org/docs/toolkit/org/gephi/datalab/spi/columns/AttributeColumnsManipulator.html"},"AttributeColumnsManipulator")," is a bit different from ",(0,r.kt)("inlineCode",{parentName:"p"},"Manipulator")," because its workflow is not the same as all the previous manipulators, and therefore provides its unique interface plus a ",(0,r.kt)("a",{parentName:"p",href:"http://gephi.org/docs/toolkit/org/gephi/datalab/spi/columns/AttributeColumnsManipulatorUI.html"},"AttributeColumnsManipulatorUI"),"."),(0,r.kt)("h2",{id:"create-a-new-manipulator"},"Create a new Manipulator"),(0,r.kt)("p",null,"Once we understand the interfaces that define our manipulators, we can create some sample features."),(0,r.kt)("h3",{id:"setting-up-our-data"},"Setting up our data"),(0,r.kt)("p",null,"Here is where manipulators that need some ",(0,r.kt)("strong",{parentName:"p"},"initial data")," (like nodes, edges or columns) get it. This method ",(0,r.kt)("strong",{parentName:"p"},"varies for each type of manipulator")," but is always called before any other method."),(0,r.kt)("p",null,"Code example for a nodes manipulator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public void setup(Node[] nodes, Node clickedNode) {\n    this.nodes=nodes;//Keep the needed data for future operations.\n}\n")),(0,r.kt)("p",null,"In this case, setup receives an array of nodes (selected nodes at right click) and the specific clicked node."),(0,r.kt)("h3",{id:"name-and-description"},"Name and description"),(0,r.kt)("p",null,"Simply define a name an a description (optional) of what our manipulator does."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public String getName() {\n    return NbBundle.getMessage(Group.class, "Group.name");//Localized name for nodes grouping action\n}\n \npublic String getDescription() {\n    return null;//No description\n}\n')),(0,r.kt)("h3",{id:"determining-if-our-manipulator-should-be-eligible-to-execute"},"Determining if our manipulator should be eligible to execute"),(0,r.kt)("p",null,"In determinate conditions we would not like our manipulator to be executed, so we declare it with a boolean. ",(0,r.kt)("strong",{parentName:"p"},"The moment this is called, setup has already been called"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public boolean canExecute() {\n    return nodes.length == 1;//This manipulator will only be executed with a single node selection\n}\n")),(0,r.kt)("h3",{id:"provide-an-ui"},"Provide an UI"),(0,r.kt)("p",null,"Here we can return our GUI if desired. We will talk about ManipulatorUIs later."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public ManipulatorUI getUI(){\n    return new MyUI();//It is not necessary to pass this class to the UI now because ManipulatorUI will be set up later.\n    //return null if no GUI\n}\n")),(0,r.kt)("h3",{id:"ordering-and-classifying-manipulators"},"Ordering and classifying manipulators"),(0,r.kt)("p",null,"In order to declare the position in a group of manipulators that our manipulator has to appear, we have to provide a number identifying the category(type) and position."),(0,r.kt)("p",null,"Order of appearance is determined first by the type number and then by position number. Often consecutive elements are given numbers with considerable separation to be able to insert new categories between them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public int getType() {\n    return 300;//Will appear in the same category as other manipulators that also return 300\n}\n \npublic int getPosition() {\n    return 0;//Will appear in its category before manipulators with a position of 1 or more\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"These are the only methods that could be called before setup and therefore should not depend on context data"),"."),(0,r.kt)("h3",{id:"optional-icon"},"Optional icon"),(0,r.kt)("p",null,"Just return an icon for the feature or null."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public Icon getIcon() {\n    return ImageUtilities.loadImageIcon("org/gephi/datalab/plugin/manipulators/resources/group.png", true);\n}\n')),(0,r.kt)("h3",{id:"executing-the-final-action"},"Executing the final action"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This is where our feature does the work")," once it has been chosen and preferences (if any) have been chosen with or without a GUI."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"public void execute() {\n    for(Node node:nodes){\n        //Do something with the nodes\n    }\n}\n")),(0,r.kt)("h3",{id:"complete-code-for-group-nodes-manipulator"},"Complete code for Group nodes manipulator"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Group extends BasicNodesManipulator {\n    private Node[] nodes;\n \n    public void setup(Node[] nodes, Node clickedNode) {\n        this.nodes=nodes;\n    }\n \n    public void execute() {\n        GraphElementsController gec = Lookup.getDefault().lookup(GraphElementsController.class);\n        gec.groupNodes(nodes);\n    }\n \n    public String getName() {\n        return NbBundle.getMessage(Group.class, "Group.name");\n    }\n \n    public String getDescription() {\n        return "";\n    }\n \n    public boolean canExecute() {\n        GraphElementsController gec = Lookup.getDefault().lookup(GraphElementsController.class);\n        return gec.canGroupNodes(nodes);\n    }\n \n    public ManipulatorUI getUI() {\n        return null;\n    }\n \n    public int getType() {\n        return 300;\n    }\n \n    public int getPosition() {\n        return 0;\n    }\n \n    public Icon getIcon() {\n        return ImageUtilities.loadImageIcon("org/gephi/datalab/plugin/manipulators/resources/group.png", true);\n    }\n}\n')),(0,r.kt)("h2",{id:"nodes-and-edges-manipulators"},"Nodes and edges manipulators"),(0,r.kt)("p",null,"Both of these types of manipulators are shown as context menu actions in a popup menu, and benefit from some special settings defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ContextMenuItemManipulator")," interface. Their principal extra feature is the possibility to have subitems, as can be observed in the next image."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/197285/5622444/0c847346-9544-11e4-8687-0b02a461bab2.png",alt:"sub-items"})),(0,r.kt)("p",null,"It defines 3 methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public ContextMenuItemManipulator[] getSubItems() {\n        return null;//Return subitems \n}\n")),(0,r.kt)("p",null,"Note that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Most nodes/edges manipulators won't need to have subitems."),(0,r.kt)("li",{parentName:"ul"},"Subitems can also return more subitems."),(0,r.kt)("li",{parentName:"ul"},"Subitems will be set up with the proper data like their parents."),(0,r.kt)("li",{parentName:"ul"},"If a item/subitem returns subitems, it will never be executed, their subitems will."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"execute")," method of the specific clicked subitem will be called.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public boolean isAvailable() {\n    return true;//Indicates if a subitem has to appear in the menu at all (enabled or not)\n}    \n \npublic Integer getMnemonicKey() {\n    return null;//Shorcut associated key for this item\n}\n")),(0,r.kt)("p",null,"Most manipulators won't need this, so a simple class like the following can be extended by all your manipulators to avoid repeating code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public abstract class BasicNodesManipulator implements NodesManipulator{\n \n    public boolean isAvailable() {\n        return true;\n    }\n \n    public ContextMenuItemManipulator[] getSubItems() {\n        return null;\n    }\n \n    public Integer getMnemonicKey() {\n        return null;\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Visualization API has an SPI for adding context menu actions (GraphContextMenuItem) to nodes like DataLaboratory does with NodesManipulator. Note that they share the interface ContextMenuItemManipulator from Data Laboratory API, so they are compatible, being possible to reuse actions on nodes for Overview and Data Laboratory.")),(0,r.kt)("h2",{id:"attributecolumnsmanipulators"},"AttributeColumnsManipulators"),(0,r.kt)("p",null,"What makes different these manipulators is that, instead oh having data set up and then ",(0,r.kt)("inlineCode",{parentName:"p"},"canExecute")," being called, eligibility is tested for every column and is later executed for the selected column (showing first the UI if necessary)."),(0,r.kt)("p",null,"Here is a complete example of a real feature (columns duplication):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class DuplicateColumn implements AttributeColumnsManipulator {\n    private String title;\n    private AttributeType columnType;\n \n    public void execute(AttributeTable table, AttributeColumn column) {\n        Lookup.getDefault().lookup(AttributeColumnsController.class).duplicateColumn(table, column, title, columnType);\n    }\n \n    public String getName() {\n        return NbBundle.getMessage(DuplicateColumn.class, "DuplicateColumn.name");\n    }\n \n    public String getDescription() {\n        return "";\n    }\n \n    public boolean canManipulateColumn(AttributeTable table, AttributeColumn column) {\n        return true;\n    }\n \n    public AttributeColumnsManipulatorUI getUI(AttributeTable table,AttributeColumn column) {\n        return new DuplicateColumnUI();\n    }\n \n    public int getType() {\n        return 0;\n    }\n \n    public int getPosition() {\n        return 400;\n    }\n \n    public Image getIcon() {\n        return ImageUtilities.loadImage("org/gephi/datalab/plugin/manipulators/resources/table-duplicate-column.png");\n    }\n \n    public String getTitle() {\n        return title;\n    }\n \n    public void setTitle(String title) {\n        this.title = title;\n    }\n \n    public AttributeType getColumnType() {\n        return columnType;\n    }\n \n    public void setColumnType(AttributeType columnType) {\n        this.columnType = columnType;\n    }\n}\n')),(0,r.kt)("p",null,"Column type and title are set through ",(0,r.kt)("inlineCode",{parentName:"p"},"DuplicateColumnUI"),"."),(0,r.kt)("h2",{id:"builders-how-to-get-our-plugins-to-appear-in-data-laboratory-perspective"},"Builders (how to get our plugins to appear in data laboratory perspective)"),(0,r.kt)("p",null,"Like in other parts of Gephi, api/spi implementations are exposed with Netbeans Lookup API."),(0,r.kt)("p",null,"This is done with the [","[@ServiceProvider]","] annotation. Since this annotation returns a singleton of the service, in order to help the programmer avoid problems with previously set up data, some of the manipulators require a builder that returns instances of the manipulator as the service."),(0,r.kt)("p",null,"But other manipulators are directly exposed as the service with the annotation."),(0,r.kt)("p",null,"For example, to declare a ",(0,r.kt)("inlineCode",{parentName:"p"},"GeneralActionsManipulator"),", it is sufficient with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@ServiceProvider(service = GeneralActionsManipulator.class)\npublic class AddEdgeToGraph implements GeneralActionsManipulator {\n...\n")),(0,r.kt)("p",null,"But for a ",(0,r.kt)("inlineCode",{parentName:"p"},"NodesManipulator")," you need to create a builder and give it the annotation (not to the manipulator):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@ServiceProvider(service=NodesManipulatorBuilder.class)\npublic class SetNodesSizeBuilder implements NodesManipulatorBuilder {\n    public NodesManipulator getNodesManipulator() {\n        return new SetNodesSize();\n    }\n}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Manipulator type"),(0,r.kt)("th",{parentName:"tr",align:null},"Needs a builder"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AttributeColumnsManipulator"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GeneralActionsManipulator"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AttributeColumnsMergeStrategy"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EdgesManipulator"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NodesManipulator"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AttributeRowsMergeStrategy"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AttributeValueManipulator"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713")))),(0,r.kt)("h2",{id:"providing-a-gui"},"Providing a GUI"),(0,r.kt)("p",null,"When your feature needs a GUI you only need to return a ",(0,r.kt)("a",{parentName:"p",href:"http://gephi.org/docs/api/org/gephi/datalab/spi/ManipulatorUI.html"},"ManipulatorUI")," implementation capable of configuring your feature extra data. Let's see what each method should do with an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class MyManipulatorUI extends JPanel implements ManipulatorUI {\n    private MyManipulator manipulator;\n    private DialogControls dialogControls;\n \n    void setup(Manipulator m, DialogControls dialogControls){\n        //Receive our manipulator instance:\n        manipulator = (MyManipulator) m; //We know the type of manipulator we are going to receive so cast is safe\n        //And an object to control the dialog if necessary \n        //(for now it only is able to enable/disable the Ok button of the dialog for validation purposes)\n        this.dialogControls = dialogControls;\n    }\n \n    void unSetup(){\n        //Called when the dialog is closed, canceled or accepted. Pass necessary data to the manipulator:\n        manipulator.setSomeOption(someValue);\n        ...\n    }\n \n    String getDisplayName(){\n        //Provide title for the dialog:\n        return manipulator.getName();//For example, the manipulator name\n    }\n \n    public JPanel getSettingsPanel(){\n        //Provide the JPanel to create the UI dialog\n        //A good practice is to extend JPanel and just return this object\n        return this;\n    }\n \n    /**\n     * Indicates if the created dialog has to be modal\n     */\n    public boolean isModal(){\n        return true;\n    }\n}\n")),(0,r.kt)("h2",{id:"manipulators-summary"},"Manipulators Summary"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/197285/5622446/0cc4e6a6-9544-11e4-8678-662dea3eaec7.png",alt:"manipulators"})))}d.isMDXComponent=!0}}]);