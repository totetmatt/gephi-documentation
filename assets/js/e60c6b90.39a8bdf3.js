"use strict";(self.webpackChunkgephi_documentation=self.webpackChunkgephi_documentation||[]).push([[7634],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=r.createContext({}),o=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=o(a),c=l,g=m["".concat(u,".").concat(c)]||m[c]||d[c]||i;return a?r.createElement(g,n(n({ref:t},p),{},{components:a})):r.createElement(g,n({ref:t},p))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,n=new Array(i);n[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:l,n[1]=s;for(var o=2;o<i;o++)n[o]=a[o];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9673:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=a(7462),l=(a(7294),a(3905));const i={id:"de\u0301marrage-rapide-(fr)",title:"De\u0301marrage rapide (FR)"},n="Tutoriel Gephi <br/> D\xe9marrage rapide",s={unversionedId:"Plugins/de\u0301marrage-rapide-(fr)",id:"Plugins/de\u0301marrage-rapide-(fr)",title:"De\u0301marrage rapide (FR)",description:"Bienvenue sur ce tutoriel. Vous apprendrez ici les \xe9tapes fondamentales pour visualiser et manipuler un r\xe9seau dans Gephi.",source:"@site/docs/04_Plugins/De\u0301marrage-rapide-(FR).md",sourceDirName:"04_Plugins",slug:"/Plugins/de\u0301marrage-rapide-(fr)",permalink:"/gephi-documentation/Plugins/de\u0301marrage-rapide-(fr)",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04_Plugins/De\u0301marrage-rapide-(FR).md",tags:[],version:"current",frontMatter:{id:"de\u0301marrage-rapide-(fr)",title:"De\u0301marrage rapide (FR)"},sidebar:"tutorialSidebar",previous:{title:"Code Sharing Strategy",permalink:"/gephi-documentation/Plugins/code-sharing-strategy"},next:{title:"Export",permalink:"/gephi-documentation/Plugins/export"}},u={},o=[{value:"Ouverture d\u2019un fichier graphe",id:"ouverture-dun-fichier-graphe",level:2},{value:"Rapport d\u2019import",id:"rapport-dimport",level:2},{value:"Affichage du graphe",id:"affichage-du-graphe",level:2},{value:"Visualisation du graphe",id:"visualisation-du-graphe",level:2},{value:"Spatialisation du graphe",id:"spatialisation-du-graphe",level:2},{value:"Contr\xf4le de la spatialisation",id:"contr\xf4le-de-la-spatialisation",level:2},{value:"Affichage du graphe spatialis\xe9",id:"affichage-du-graphe-spatialis\xe9",level:2},{value:"Classement (par couleur)",id:"classement-par-couleur-1",level:2},{value:"Configuration des couleurs",id:"configuration-des-couleurs",level:2},{value:"Tableau des r\xe9sultats du classement",id:"tableau-des-r\xe9sultats-du-classement",level:2},{value:"M\xe9triques",id:"m\xe9triques-1",level:2},{value:"Configuration des m\xe9triques",id:"configuration-des-m\xe9triques",level:2},{value:"R\xe9sultat des m\xe9triques",id:"r\xe9sultat-des-m\xe9triques",level:2},{value:"Classement (par taille)",id:"classement-par-taille-1",level:2},{value:"Graphe avec diff\xe9renciation de couleurs et de tailles",id:"graphe-avec-diff\xe9renciation-de-couleurs-et-de-tailles",level:2},{value:"Nouvelle spatialisation",id:"nouvelle-spatialisation-1",level:2},{value:"Affichage des labels",id:"affichage-des-labels-1",level:2},{value:"D\xe9tection de communaut\xe9",id:"d\xe9tection-de-communaut\xe9-1",level:2},{value:"Partition",id:"partition-1",level:2},{value:"Nouvelle apparence du r\xe9seau",id:"nouvelle-apparence-du-r\xe9seau",level:2},{value:"Filtrage",id:"filtrage-1",level:2},{value:"R\xe9seau filtr\xe9",id:"r\xe9seau-filtr\xe9",level:2},{value:"Pr\xe9visualisation",id:"pr\xe9visualisation-1",level:2},{value:"Pr\xe9visualisation du graphe",id:"pr\xe9visualisation-du-graphe",level:2},{value:"Export au format SVG",id:"export-au-format-svg",level:2},{value:"Enregistrement du projet",id:"enregistrement-du-projet",level:2}],p=(d="STRONG",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var d;const m={toc:o};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tutoriel-gephi--d\xe9marrage-rapide"},"Tutoriel Gephi ",(0,l.kt)("br",null)," D\xe9marrage rapide"),(0,l.kt)("p",null,"Bienvenue sur ce tutoriel. Vous apprendrez ici les \xe9tapes fondamentales pour visualiser et manipuler un r\xe9seau dans Gephi.  "),(0,l.kt)("p",null,"Ce tutoriel se base sur la version 0.7alpha2 de Gephi.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://gephi.org/users/download/"},"T\xe9l\xe9charger Gephi"),"  "),(0,l.kt)("h1",{id:"import-de-fichiers"},"Import de fichiers"),(0,l.kt)("h2",{id:"ouverture-dun-fichier-graphe"},"Ouverture d\u2019un fichier graphe"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"T\xe9l\xe9chargez le fichier ",(0,l.kt)("a",{parentName:"li",href:"https://gephi.org/datasets/LesMiserables.gexf"},"LesMiserables.gexf"),"  "),(0,l.kt)("li",{parentName:"ul"},"Dans la barre de menu, allez dans le menu ",(0,l.kt)("strong",{parentName:"li"},"Fichier")," et ",(0,l.kt)("strong",{parentName:"li"},"Ouvrir..."),"  ")),(0,l.kt)("p",null,"~~ Image : tutorial_quickstart1_FR ~~  "),(0,l.kt)(p,{mdxType:"STRONG"},"Format des graphes"),"- GEXF - GraphML - Pajek NET - GDF - GML - Tulip TLP - CSV - ZIP compress\xe9",(0,l.kt)("h2",{id:"rapport-dimport"},"Rapport d\u2019import"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"Lorsque votre fichier s\u2019ouvre, le rapport r\xe9capitule les donn\xe9es trouv\xe9es et les probl\xe8mes rencontr\xe9s."),(0,l.kt)("ul",null,(0,l.kt)("li",null,"Nombre de noeuds"),(0,l.kt)("li",null,"Nombre de liens"),(0,l.kt)("li",null,"Type de graphe"))),"* Cliquez sur **OK** pour valider et visualiser le graphe.",(0,l.kt)("p",null,"~~ Image : tutorial_quickstart2_FR ~~  "),(0,l.kt)("h2",{id:"affichage-du-graphe"},"Affichage du graphe"),(0,l.kt)("p",null,"Nous avons import\xe9 le fichier de donn\xe9es LesMiserables.gexf",(0,l.kt)("sup",null,"1"),". Il s\u2019agit du r\xe9seau pond\xe9r\xe9 des apparitions simultan\xe9es des personnages du roman ",(0,l.kt)("em",{parentName:"p"},"Les Mis\xe9rables")," de Victor Hugo.",(0,l.kt)("br",{parentName:"p"}),"\n","~~ Image : ? ~~  "),(0,l.kt)("p",null,"Les noeuds sont d\u2019abord plac\xe9s de mani\xe8re al\xe9atoire, la pr\xe9sentation que vous voyez peut donc diff\xe9rer l\xe9g\xe8rement.  "),(0,l.kt)("cite",null,(0,l.kt)("sup",null,"1"),"D. E. Knuth, The Stanford GraphBase: A Platform for Combinatorial Computing, Addison-Wesley, Reading, MA (1993)"),(0,l.kt)("h1",{id:"visualisation"},"Visualisation"),(0,l.kt)("h2",{id:"visualisation-du-graphe"},"Visualisation du graphe"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"Utilisez votre souris pour vous d\xe9placer dans la visualisation et modifier son \xe9chelle."),(0,l.kt)("ul",null,(0,l.kt)("li",null,"Zoom : Molette de la souris"),"~~ Image : ? ~~",(0,l.kt)("li",null,"Panoramique : Glisser \xe0 droite"),"~~ Image : ? ~~")),"* L\u2019**\xe9chelle du poids des liens** se trouve en bas de la fen\xeatre.",(0,l.kt)("p",null,"~~ Image : gephi_configure_labels__bisFR ~~"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Si vous ne voyez plus votre graphe, r\xe9initialisez l\u2019\xe9chelle.  ")),(0,l.kt)("p",null,"~~ Image : ? ~~  "),(0,l.kt)("h1",{id:"spatialisation"},"Spatialisation"),(0,l.kt)("h2",{id:"spatialisation-du-graphe"},"Spatialisation du graphe"),(0,l.kt)("p",null,"La fonction principale des algorithmes de spatialisation est de d\xe9finir la forme du graphe.  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Rep\xe9rez le module ",(0,l.kt)("strong",{parentName:"li"},"Spatialisation")," dans le volet \xe0 gauche de l\u2019\xe9cran.  "),(0,l.kt)("li",{parentName:"ul"},"S\xe9lectionnez ",(0,l.kt)("strong",{parentName:"li"},"Force Atlas"),".",(0,l.kt)("br",{parentName:"li"}),"Vous pouvez voir les propri\xe9t\xe9s de la spatialisation sous son nom. Conservez les valeurs.  "),(0,l.kt)("li",{parentName:"ul"},"Pour lancer l\u2019algorithme, cliquez sur ",(0,l.kt)("strong",{parentName:"li"},"Ex\xe9cuter"),".  ")),(0,l.kt)(p,{mdxType:"STRONG"},"Algorithmes de spatialisation"),"La spatialisation des graphes est g\xe9n\xe9ralement r\xe9alis\xe9e \xe0 partir d\u2019algorithmes bas\xe9s sur les forces. Ils suivent un principe simple : les noeuds reli\xe9s s\u2019attirent et les noeuds non reli\xe9s se repoussent.",(0,l.kt)("h2",{id:"contr\xf4le-de-la-spatialisation"},"Contr\xf4le de la spatialisation"),(0,l.kt)("p",null,"Les propri\xe9t\xe9s de spatialisation vous permettent de contr\xf4ler l\u2019algorithme afin de g\xe9n\xe9rer une repr\xe9sentation esth\xe9tique.",(0,l.kt)("br",{parentName:"p"}),"\n","~~ Image : tutorial_quickstart9_FR ~~"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pour agrandir le graphe, r\xe9glez la ",(0,l.kt)("strong",{parentName:"li"},"Force de r\xe9pulsion")," sur 10 000.  "),(0,l.kt)("li",{parentName:"ul"},"Pour valider la valeur modifi\xe9e, appuyez sur la touche ",(0,l.kt)("strong",{parentName:"li"},"Entr\xe9e")," de votre clavier.  "),(0,l.kt)("li",{parentName:"ul"},"Vous pouvez maintenant ",(0,l.kt)("strong",{parentName:"li"},"Arr\xeater")," l\u2019algorithme.  ")),(0,l.kt)("h2",{id:"affichage-du-graphe-spatialis\xe9"},"Affichage du graphe spatialis\xe9"),(0,l.kt)("p",null,"~~ Image : ? ~~  "),(0,l.kt)("h1",{id:"classement-par-couleur"},"Classement (par couleur)"),(0,l.kt)("h2",{id:"classement-par-couleur-1"},"Classement (par couleur)"),(0,l.kt)("p",null,"Le module ",(0,l.kt)("strong",{parentName:"p"},"Classement")," vous permet de configurer la couleur et la taille d\u2019un noeud.  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cliquez sur le module ",(0,l.kt)("strong",{parentName:"li"},"Classement")," en haut \xe0 gauche de l\u2019\xe9cran.  "),(0,l.kt)("li",{parentName:"ul"},"S\xe9lectionnez ",(0,l.kt)("strong",{parentName:"li"},"Degr\xe9")," comme param\xe8tre de classement.  ")),(0,l.kt)("p",null,"~~ Image : tutorial_quickstart12_FR ~~  "),(0,l.kt)("p",null,"Le panneau de configuration suivant s\u2019affiche :",(0,l.kt)("br",{parentName:"p"}),"\n","~~ Image : tutorial_quickstart13_FR ~~  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cliquez sur ",(0,l.kt)("strong",{parentName:"li"},"Appliquer")," pour afficher le r\xe9sultat.  ")),(0,l.kt)("h2",{id:"configuration-des-couleurs"},"Configuration des couleurs"),(0,l.kt)("p",null,"~~ Image : tutorial_quickstart13_FR ~~  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"D\xe9placez la souris sur le curseur de d\xe9grad\xe9.",(0,l.kt)("br",{parentName:"li"}),"~~ Image : ? ~~  "),(0,l.kt)("li",{parentName:"ul"},"Pour configurer la couleur, double-cliquez sur les triangles.",(0,l.kt)("br",{parentName:"li"}),"~~ Image : ? ~~  ")),(0,l.kt)(p,{mdxType:"STRONG"},"Palette"),"Pour utiliser la palette, double-cliquez sur le volet. ~~ Image : tutorial_quickstart17_FR + ? ~~",(0,l.kt)("h2",{id:"tableau-des-r\xe9sultats-du-classement"},"Tableau des r\xe9sultats du classement"),(0,l.kt)("p",null,"Vous pouvez voir les valeurs du classement en affichant le tableau des r\xe9sultats. Le noeud Valjean poss\xe8de 36 liens et est le plus connect\xe9 du r\xe9seau.  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Activez l\u2019affichage des r\xe9sultats sous forme de tableau.  "),(0,l.kt)("li",{parentName:"ul"},"Cliquez \xe0 nouveau sur le bouton ",(0,l.kt)("strong",{parentName:"li"},"Appliquer"),".  ")),(0,l.kt)("p",null,"~~ Image : tutorial_quickstart18_FR ~~  "),(0,l.kt)("h1",{id:"m\xe9triques"},"M\xe9triques"),(0,l.kt)("h2",{id:"m\xe9triques-1"},"M\xe9triques"),(0,l.kt)("p",null,"Nous allons calculer la longueur de chemin moyenne pour le r\xe9seau. Cela permet de calculer la longueur du chemin entre toutes les paires de noeuds et de fournir des informations sur la distance entre les noeuds.  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Dans le volet droit, cliquez sur le module ",(0,l.kt)("strong",{parentName:"li"},"Statistiques"),".  "),(0,l.kt)("li",{parentName:"ul"},"Cliquez sur ",(0,l.kt)("strong",{parentName:"li"},"Ex\xe9cuter")," en face de ",(0,l.kt)("strong",{parentName:"li"},"Plus courts chemins"),".  ")),(0,l.kt)("p",null,"~~ Image : tutorial_quickstart19_FR ~~"),(0,l.kt)(p,{mdxType:"STRONG"},"M\xe9triques disponibles"),"- Diam\xe8tre - Plus courts chemins - Coefficient de Clustering - PageRank - HITS - Betweeness Centrality - Closeness Centrality - Excentricit\xe9 - D\xe9tection de communaut\xe9 (Modularit\xe9)",(0,l.kt)("h2",{id:"configuration-des-m\xe9triques"},"Configuration des m\xe9triques"),(0,l.kt)("p",null,"Le panneau de configuration s\u2019affiche.",(0,l.kt)("br",{parentName:"p"}),"\n","~~ Image : tutorial_quickstart20_FR ~~",(0,l.kt)("br",{parentName:"p"}),"\n","Pour calculer la m\xe9trique, s\xe9lectionnez ",(0,l.kt)("strong",{parentName:"p"},"Dirig\xe9"),", puis cliquez sur ",(0,l.kt)("strong",{parentName:"p"},"OK"),".  "),(0,l.kt)("h2",{id:"r\xe9sultat-des-m\xe9triques"},"R\xe9sultat des m\xe9triques"),(0,l.kt)("p",null,"\xc0 la fin du traitement, le r\xe9sultat de la m\xe9trique est affich\xe9 dans un rapport.",(0,l.kt)("br",{parentName:"p"}),"\n","~~ Image : tutorial_quickstart21 ~~  "),(0,l.kt)("h1",{id:"classement-par-taille"},"Classement (par taille)"),(0,l.kt)("h2",{id:"classement-par-taille-1"},"Classement (par taille)"),(0,l.kt)("p",null,"Les m\xe9triques g\xe9n\xe8rent des rapports g\xe9n\xe9raux ainsi que les r\xe9sultats pour chaque noeud.",(0,l.kt)("br",{parentName:"p"}),"\n","Ainsi, trois nouvelles valeurs ont \xe9t\xe9 cr\xe9\xe9es par l\u2019algorithme ",(0,l.kt)("strong",{parentName:"p"},"Plus courts chemins"),".  "),(0,l.kt)("ul",null,(0,l.kt)("li",null,"**Betweeness Centrality**"),(0,l.kt)("li",null,"**Closeness Centrality**"),(0,l.kt)("li",null,"**Excentricit\xe9**")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Retournez sur l\u2019onglet ",(0,l.kt)("strong",{parentName:"li"},"Classement"),".  "),(0,l.kt)("li",{parentName:"ul"},"S\xe9lectionnez ",(0,l.kt)("strong",{parentName:"li"},"Betweeness Centrality")," dans la liste d\xe9roulante.",(0,l.kt)("br",{parentName:"li"}),"~~ Image : tutorial_quickstart22_FR ~~",(0,l.kt)("br",{parentName:"li"}),"Cette m\xe9trique fait ressortir les noeuds les plus importants dont la fr\xe9quence est la plus \xe9lev\xe9e.  ")),(0,l.kt)("p",null,"\xc0 pr\xe9sent, param\xe9trez la taille des noeuds. L\u2019indicateur de ",(0,l.kt)("strong",{parentName:"p"},"Degree")," (Degr\xe9) est toujours repr\xe9sent\xe9 par des couleurs.  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pour d\xe9finir la taille, s\xe9lectionnez l\u2019ic\xf4ne en forme de diamant dans la barre d\u2019outils.  "),(0,l.kt)("li",{parentName:"ul"},"D\xe9finissez la taille minimale sur 10 et la taille maximale sur 50.",(0,l.kt)("br",{parentName:"li"}),"~~ Image : tutorial_quickstart23_FR ~~  "),(0,l.kt)("li",{parentName:"ul"},"Pour voir le r\xe9sultat, cliquez sur ",(0,l.kt)("strong",{parentName:"li"},"Appliquer"),".  ")),(0,l.kt)("h2",{id:"graphe-avec-diff\xe9renciation-de-couleurs-et-de-tailles"},"Graphe avec diff\xe9renciation de couleurs et de tailles"),(0,l.kt)("p",null,"~~ Image : ?  ~~",(0,l.kt)("br",{parentName:"p"}),"\n","Couleur : Degree (Degr\xe9)",(0,l.kt)("br",{parentName:"p"}),"\n","Taille : M\xe9trique ",(0,l.kt)("strong",{parentName:"p"},"Betweeness Centrality"),"  "),(0,l.kt)("h1",{id:"nouvelle-spatialisation"},"Nouvelle spatialisation"),(0,l.kt)("h2",{id:"nouvelle-spatialisation-1"},"Nouvelle spatialisation"),(0,l.kt)("p",null,"La spatialisation n\u2019est pas totalement satisfaisante. En effet, des noeuds de grande taille chevauchent parfois des noeuds plus petits.",(0,l.kt)("br",{parentName:"p"}),"\n","L\u2019algorithme ",(0,l.kt)("strong",{parentName:"p"},"Force Atlas")," dispose d\u2019une option qui permet de prendre la taille des noeuds en consid\xe9ration lors de la spatialisation.  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Retournez sur le volet ",(0,l.kt)("strong",{parentName:"li"},"Spatialisation"),".  "),(0,l.kt)("li",{parentName:"ul"},"Cochez l\u2019option ",(0,l.kt)("strong",{parentName:"li"},"Ajustement par taille"),", puis ex\xe9cutez \xe0 nouveau l\u2019algorithme pendant quelques instants.  "),(0,l.kt)("li",{parentName:"ul"},"Les noeuds ne se chevauchent plus d\xe9sormais.  ")),(0,l.kt)("p",null,"~~ Image : tutorial_quickstart26_FR ~~"),(0,l.kt)("h1",{id:"affichage-des-labels"},"Affichage des labels"),(0,l.kt)("h2",{id:"affichage-des-labels-1"},"Affichage des labels"),(0,l.kt)("p",null,"Explorons le r\xe9seau plus en d\xe9tails maintenant que les couleurs et la taille mettent en valeur les noeuds importants.",(0,l.kt)("br",{parentName:"p"}),"\n","~~ Image : tutorial_quickstart27_FR ~~  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Affichez les labels des noeuds.",(0,l.kt)("br",{parentName:"li"}),"~~ Image : tutorial_quickstart ~~"),(0,l.kt)("li",{parentName:"ul"},"Param\xe9trez l\u2019affichage des labels afin que leur taille soit proportionnelle \xe0 celle des noeuds.",(0,l.kt)("br",{parentName:"li"}),"~~ Image : gephi_configure_labels__bisbisFR ~~  "),(0,l.kt)("li",{parentName:"ul"},"Pour r\xe9gler la taille des labels, faites glisser le curseur de l\u2019\xe9chelle.",(0,l.kt)("br",{parentName:"li"}),"~~ Image : gephi_configure_labels__bisbisbisFR ~~  ")),(0,l.kt)("h1",{id:"d\xe9tection-de-communaut\xe9"},"D\xe9tection de communaut\xe9"),(0,l.kt)("h2",{id:"d\xe9tection-de-communaut\xe9-1"},"D\xe9tection de communaut\xe9"),(0,l.kt)("p",null,"La capacit\xe9 \xe0 d\xe9tecter et \xe0 \xe9tudier les communaut\xe9s est essentielle \xe0 l\u2019analyse du r\xe9seau. Dans notre exemple, nous souhaitons colorer les groupes de noeuds.",(0,l.kt)("br",{parentName:"p"}),"\n","Gephi utilise la m\xe9thode Louvain",(0,l.kt)("sup",null,"1"),", disponible dans le volet ",(0,l.kt)("strong",{parentName:"p"},"Statistiques"),".",(0,l.kt)("br",{parentName:"p"}),"\n","Cliquez sur ",(0,l.kt)("strong",{parentName:"p"},"Ex\xe9cuter")," en regard de la ligne ",(0,l.kt)("strong",{parentName:"p"},"Modularit\xe9"),".",(0,l.kt)("br",{parentName:"p"}),"\n","~~ Image : tutorial_quickstart28_FR ~~  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"S\xe9lectionnez ",(0,l.kt)("strong",{parentName:"li"},"Al\xe9atoire")," dans le volet.  "),(0,l.kt)("li",{parentName:"ul"},"Pour lancer la d\xe9tection, cliquez sur ",(0,l.kt)("strong",{parentName:"li"},"OK"),".\n~~ Image : tutorial_quickstart29_FR ~~  ")),(0,l.kt)("cite",null,(0,l.kt)("sup",null,"1"),"Blondel V, Guillaume J, Lambiotte R, Mech E (2008) Fast unfolding of communities in large networks. J Stat Mech : Theory Exp 2008:P10008. (http://findcommunities.googlepages.com)"),(0,l.kt)("h1",{id:"partition"},"Partition"),(0,l.kt)("h2",{id:"partition-1"},"Partition"),(0,l.kt)("p",null,"L\u2019algorithme de d\xe9tection de communaut\xe9 a cr\xe9\xe9 une valeur de ",(0,l.kt)("strong",{parentName:"p"},"Modularity Class")," (classe de modularit\xe9) pour chaque noeud.",(0,l.kt)("br",{parentName:"p"}),"\n","Le module ",(0,l.kt)("strong",{parentName:"p"},"Partition")," peut utiliser ces nouvelles donn\xe9es pour colorer les communaut\xe9s.  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Dans le volet gauche, cliquez sur le module ",(0,l.kt)("strong",{parentName:"li"},"Partition"),".  "),(0,l.kt)("li",{parentName:"ul"},"Pour remplir la liste de partitions, cliquez sur le bouton ",(0,l.kt)("strong",{parentName:"li"},"Rafra\xeechir"),".",(0,l.kt)("br",{parentName:"li"}),"~~ Image : tutorial_quickstart30_FR ~~  ")),(0,l.kt)(p,{mdxType:"STRONG"},"Comment visualiser les colonnes affichant les noeuds et les liens ?"),"Pour afficher les colonnes et les valeurs des noeuds et des liens, consultez le **Tableau de donn\xe9es**. Pour actualiser le tableau, cliquez sur l\u2019onglet **Laboratoire des donn\xe9es**, puis cliquez sur **Noeuds**.",(0,l.kt)("br",null),"* Dans la liste de partitions, s\xe9lectionnez **Modularity Class** (classe de modularit\xe9). Dans l\u2019exemple ci-dessous, neuf communaut\xe9s ont \xe9t\xe9 trouv\xe9es. Le nombre de communaut\xe9s est variable. Une couleur a \xe9t\xe9 d\xe9finie au hasard pour chaque identifiant de communaut\xe9. ~~ Image : tutorial_quickstart31_FR ~~ * Pour afficher les noeuds en couleur, cliquez sur **Appliquer**. Pour acc\xe9der \xe0 la fonction **G\xe9n\xe9rer les couleurs al\xe9atoirement**, cliquez sur le volet \xe0 l\u2019aide du bouton droit de la souris. ~~ Image : tutorial_quickstart33_FR ~~",(0,l.kt)("h2",{id:"nouvelle-apparence-du-r\xe9seau"},"Nouvelle apparence du r\xe9seau"),(0,l.kt)("p",null,"~~ Image : ? ~~  "),(0,l.kt)("h1",{id:"filtrage"},"Filtrage"),(0,l.kt)("h2",{id:"filtrage-1"},"Filtrage"),(0,l.kt)("p",null,"Le filtrage constitue la derni\xe8re manipulation. Il est possible de cr\xe9er des filtres permettant de masquer certains noeuds et liens du r\xe9seau. Dans cet exemple, nous allons cr\xe9er un filtre afin de supprimer les feuilles, c\u2019est-\xe0-dire les noeuds \xe0 lien unique.",(0,l.kt)("br",{parentName:"p"}),"\n","~~ Image : tutorial_quickstart34_FR ~~  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Dans le volet droit, cliquez sur le module ",(0,l.kt)("strong",{parentName:"li"},"Filtres"),".  "),(0,l.kt)("li",{parentName:"ul"},"Dans la cat\xe9gorie ",(0,l.kt)("strong",{parentName:"li"},"Topologie"),", s\xe9lectionnez ",(0,l.kt)("strong",{parentName:"li"},"Plage de degr\xe9s"),".",(0,l.kt)("br",{parentName:"li"}),"~~ Image : tutorial_quickstart35_FR ~~  "),(0,l.kt)("li",{parentName:"ul"},"Sous ",(0,l.kt)("strong",{parentName:"li"},"Requ\xeates"),", faites glisser l\u2019option sur ",(0,l.kt)("strong",{parentName:"li"},"Glissez")," le filtre ici.",(0,l.kt)("br",{parentName:"li"}),"~~ Image : tutorial_quickstart36_FR ~~  "),(0,l.kt)("li",{parentName:"ul"},"Pour activer le filtre, cliquez sur ",(0,l.kt)("strong",{parentName:"li"},"Plage de degr\xe9s"),". Le volet des param\xe8tres s\u2019affiche.",(0,l.kt)("br",{parentName:"li"}),"~~ Image : tutorial_quickstart37_FR ~~",(0,l.kt)("br",{parentName:"li"}),"Ce volet comprend un curseur de r\xe9glage de la plage de degr\xe9s ainsi qu\u2019un graphique repr\xe9sentant les donn\xe9es, ici la r\xe9partition par degr\xe9s.",(0,l.kt)("br",{parentName:"li"}),"~~ Image : tutorial_quickstart39_FR ~~  "),(0,l.kt)("li",{parentName:"ul"},"D\xe9placez le curseur de gauche afin de r\xe9gler le degr\xe9 minimum sur 2.  "),(0,l.kt)("li",{parentName:"ul"},"Pour appliquer le filtre, cliquez sur le bouton ",(0,l.kt)("strong",{parentName:"li"},"Filtrer"),".",(0,l.kt)("br",{parentName:"li"}),"Les noeuds dont le degr\xe9 est inf\xe9rieur \xe0 2 sont d\xe9sormais masqu\xe9s.  ")),(0,l.kt)(p,{mdxType:"STRONG"},"Astuce"),"Pour modifier les limites des degr\xe9s, double-cliquez sur les valeurs correspondantes. ~~ Image : ? ~~",(0,l.kt)("h2",{id:"r\xe9seau-filtr\xe9"},"R\xe9seau filtr\xe9"),(0,l.kt)("p",null,"~~ Image : ? ~~",(0,l.kt)("br",{parentName:"p"}),"\n","La manipulation est termin\xe9e. Nous allons \xe0 pr\xe9sent pr\xe9visualiser la mod\xe9lisation et pr\xe9parer l\u2019export.  "),(0,l.kt)("h1",{id:"pr\xe9visualisation"},"Pr\xe9visualisation"),(0,l.kt)("h2",{id:"pr\xe9visualisation-1"},"Pr\xe9visualisation"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"Avant d\u2019exporter le graphe au format SVG ou PDF, allez sur la **Pr\xe9visualisation** pour :"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"obtenir un aper\xe7u exact du graphe ;"),(0,l.kt)("li",null,"y apporter la touche finale."))),"* Dans le ruban, s\xe9lectionnez l\u2019onglet **Pr\xe9visualisation** : ~~ Image : tutorial_quickstart41_FR ~~ * Pour afficher la pr\xe9visualisation, cliquez sur **Rafra\xeechir**. ~~ Image : tutorial_quickstart_preview_FR ~~",(0,l.kt)(p,{mdxType:"STRONG"},"Astuce"),"Si le graphe est trop grand, vous pouvez afficher un graphe partiel en d\xe9pla\xe7ant le curseur du **Ratio** \xe0 50 % ou \xe0 25 %.",(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Dans la cat\xe9gorie ",(0,l.kt)("strong",{parentName:"li"},"Labels de noeud"),", activez la case \xe0 cocher ",(0,l.kt)("strong",{parentName:"li"},"Afficher les labels"),".  "),(0,l.kt)("li",{parentName:"ul"},"Cliquez sur ",(0,l.kt)("strong",{parentName:"li"},"Pr\xe9visualiser"),".",(0,l.kt)("br",{parentName:"li"}),"~~ Image : tutorial_quickstart44_FR ~~",(0,l.kt)("br",{parentName:"li"}),"Dans les ",(0,l.kt)("strong",{parentName:"li"},"Param\xe8tres d\u2019aper\xe7u"),", cliquez sur la liste de ",(0,l.kt)("strong",{parentName:"li"},"R\xe9glages")," pr\xe9d\xe9finis et essayez diff\xe9rentes configurations.  ")),(0,l.kt)("h2",{id:"pr\xe9visualisation-du-graphe"},"Pr\xe9visualisation du graphe"),(0,l.kt)("p",null,"~~ Image : ~~  "),(0,l.kt)("h1",{id:"export"},"Export"),(0,l.kt)("h2",{id:"export-au-format-svg"},"Export au format SVG"),(0,l.kt)("p",null,"\xc0 partir de la ",(0,l.kt)("strong",{parentName:"p"},"Pr\xe9visualisation"),", cliquez sur ",(0,l.kt)("strong",{parentName:"p"},"SVG")," en face de ",(0,l.kt)("strong",{parentName:"p"},"Export"),".",(0,l.kt)("br",{parentName:"p"}),"\n","~~ Image : tutorial_quickstart43_FR ~~  "),(0,l.kt)("p",null,"Tout comme les PDF, les fichiers SVG sont des graphiques vectoriels. Les images peuvent facilement \xeatre redimensionn\xe9es. Il est donc possible de les imprimer ou de les int\xe9grer \xe0 des pr\xe9sentations en haute r\xe9solution.  "),(0,l.kt)("p",null,"Les fichiers SVG peuvent \xeatre modifi\xe9s \xe0 l\u2019aide du logiciel Inkscape ou Adobe Illustrator.",(0,l.kt)("br",{parentName:"p"}),"\n","~~ Image : ~~  "),(0,l.kt)(p,{mdxType:"STRONG"},"Captures d\u2019\xe9cran en haute r\xe9solution"),"Si vous pr\xe9f\xe9rez uniquement les captures d\u2019\xe9cran au format PNG en haute r\xe9solution, cliquez sur l\u2019ic\xf4ne ~~ Image : ? ~~ situ\xe9e sous l\u2019aper\xe7u, dans la barre des param\xe8tres d\u2019aper\xe7u.",(0,l.kt)("h1",{id:"enregistrement"},"Enregistrement"),(0,l.kt)("h2",{id:"enregistrement-du-projet"},"Enregistrement du projet"),(0,l.kt)("p",null,"L\u2019enregistrement de votre projet regroupe l\u2019ensemble des donn\xe9es et des r\xe9sultats dans un fichier de session unique.",(0,l.kt)("br",{parentName:"p"}),"\n","~~ Image : tutorial_quickstart48_FR ~~",(0,l.kt)("br",{parentName:"p"}),"\n","~~ Image : ? ~~",(0,l.kt)("br",{parentName:"p"}),"\n","Si vous n\u2019avez pas suivi toutes les \xe9tapes, vous pouvez t\xe9l\xe9charger la session :",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://gephi.org/datasets/lesmiserables.gml.zip"},"https://gephi.org/datasets/lesmiserables.gml.zip")),(0,l.kt)("h1",{id:"conclusion"},"Conclusion"),(0,l.kt)("p",null,"Ce tutoriel vous a pr\xe9sent\xe9 les manipulations de base permettant d\u2019ouvrir, de visualiser, de manipuler et de g\xe9n\xe9rer un fichier de r\xe9seau avec Gephi.",(0,l.kt)("br",{parentName:"p"}),"\n","~~ Images : ??? ~~",(0,l.kt)("br",{parentName:"p"}),"\n","Pour en savoir plus :  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://gephi.org/"},"Site Web Gephi"),"  "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://wiki.gephi.org/"},"Wiki Gephi"),"  "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://wiki.gephi.org/"},"Forum Gephi"),"  ")),(0,l.kt)("p",null,"Ces pages sont disponibles uniquement en anglais.  "),(0,l.kt)("p",null,"Derni\xe8re mise \xe0 jour le 5 mars 2010"))}c.isMDXComponent=!0}}]);