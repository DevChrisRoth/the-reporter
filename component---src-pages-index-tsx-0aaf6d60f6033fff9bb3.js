"use strict";(self.webpackChunkthe_reporter=self.webpackChunkthe_reporter||[]).push([[691],{6945:function(e,t,r){r.d(t,{M:function(){return a}});var l=r(7294);const a=e=>{let{children:t}=e;return l.createElement("div",{className:"flex flex-col bg-white max-w-790 w-full rounded-lg p-8 mb-8"},t)}},9996:function(e,t,r){r.d(t,{w:function(){return n}});var l=r(1883),a=r(7294);const n=()=>a.createElement("nav",{className:"bg-white h-20 p-2 flex items-center justify-center sticky top-0 border-b"},a.createElement("div",{className:"max-w-7xl w-full flex justify-between items-center"},a.createElement(l.Link,{to:"/",title:"Zurück zur Startseite "},a.createElement("img",{src:"https://github.com/DevChrisRoth/the-reporter/blob/master/static/theReporterLogo.png?raw=true",alt:"logo",className:"h-12 w-auto min-w-full"})),a.createElement("div",{className:""},a.createElement(l.Link,{to:"/",className:"pr-2",activeClassName:"underline"},"STARTSEITE"),a.createElement(l.Link,{to:"/kolumnen",activeClassName:"underline"},"KOLUMNEN")),a.createElement("div",{className:"invisible"},a.createElement(l.Link,{to:"/impressum",className:"pr-2"},"Impressum"))))},9925:function(e,t,r){r.d(t,{Q:function(){return a}});var l=r(7294);const a=()=>l.createElement("div",{className:"bg-white px-8 py-6 rounded-lg md:ml-2 w-64 h-fit"},l.createElement("h1",{className:"uppercase text-xl font-bold underline text-left"},"Über mich"),l.createElement("div",{className:"flex justify-center items-center pt-6 pb-2"},l.createElement("img",{src:"https://github.com/DevChrisRoth/the-reporter/blob/master/static/profile-pic.png?raw=true",alt:"avatar",className:"rounded-full border border-gray-300",width:75,height:75})),l.createElement("h1",{className:"text-lg font-bold text-left tracking-normal"},"Christoph Rothmann"),l.createElement("p",null,"Softwareentwickler"),l.createElement("p",{className:"text-center italic"},"\"Knowledge isn't power, unitl it's applied\""))},7077:function(e,t,r){r.r(t),r.d(t,{Head:function(){return u},default:function(){return o}});var l=r(1883),a=r(7294),n=r(6945),s=r(9996),c=r(9925);const i=e=>{let{articles:t}=e;const r=t.slice(1,4).map(((e,t)=>{return a.createElement("div",{key:t,className:"cursor-pointer flex flex-col h-full",onClick:()=>{return t=e.link,void window.open(t,"_blank");var t}},a.createElement("img",{src:e.thumbnail,alt:e.title,className:"rounded-lg object-cover h-32"}),a.createElement("div",{className:"flex flex-col"},a.createElement("div",{className:"flex flex-col justify-between"},a.createElement("h1",{className:"text-xl pt-2 whitespace-nowrap overflow-hidden text-ellipsis"},e.title),a.createElement("div",{className:"flex justify-between"},a.createElement("p",{className:"text-sm text-gray-400"},(r=e.pubDate,new Date(r).toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"}))))),a.createElement("p",{className:" text-ellipsis",dangerouslySetInnerHTML:{__html:e.description.replace(/<[^>]+>/g,"").substr(0,100)+" ..."}})));var r}));return a.createElement("div",{className:"grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-4 pt-4"},r)},m=e=>{let{newestArticle:t}=e;return a.createElement("div",{onClick:()=>{window.open(null==t?void 0:t.link,"_blank")},title:"Artikel öffnen",className:"cursor-pointer"},a.createElement("h1",{className:"pb-8"},"Neuester Blogbeitrag - Medium.com"),a.createElement("img",{src:null==t?void 0:t.thumbnail,alt:"MediumImage",height:200,className:"rounded-lg"}),a.createElement("h1",{className:"text-3xl pt-2"},null==t?void 0:t.title),a.createElement("span",null,(r=null==t?void 0:t.pubDate,new Date(r).toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"}))),a.createElement("p",{className:"pt-4 text-ellipsis",dangerouslySetInnerHTML:{__html:(null==t?void 0:t.description.replace(/<[^>]+>/g,"").substr(0,200))+" ..."}}),a.createElement("p",{className:"text-right underline pt-8"},"Mehr lesen ->"));var r};var o=()=>{const{0:e,1:t}=(0,a.useState)([]),{0:r,1:o}=(0,a.useState)(),{0:u,1:d}=(0,a.useState)(!0);return(0,a.useEffect)((()=>{fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@DevChris01").then((e=>e.json())).then((e=>{t(e.items),o(e.items[0]),d(!1)}))}),[]),a.createElement("main",null,a.createElement(s.w,null),a.createElement("div",{className:"pt-2 flex justify-center flex-col md:flex-row mx-8"},a.createElement("div",{className:"invisible"},a.createElement(c.Q,null)),a.createElement(n.M,null,u?a.createElement("div",{className:"flex justify-center flex-col items-center h-64"},a.createElement("img",{src:"https://github.com/DevChrisRoth/the-reporter/blob/master/static/loader.gif?raw=true",alt:"LoadingSpinner"})):a.createElement("div",null,a.createElement(m,{newestArticle:r}),a.createElement("div",{className:"pt-12"},a.createElement("hr",{className:"border-t-2 mb-1 border-dotted border-[#3C4043]"}),a.createElement("hr",{className:"border-t-2 mb-1 border-dotted border-[#3C4043]"}),a.createElement("hr",{className:"border-t-2 mb-1 border-dotted border-[#3C4043]"})),a.createElement("p",{className:"text-center py-2"},"Mehr Artikel"),a.createElement(i,{articles:e}),a.createElement("a",{href:"https://medium.com/@DevChris01",target:"_blank",rel:"noopener noreferrer",className:"text-center block mt-4 font-normal underline"},"Mehr ansehen"))),a.createElement(c.Q,null)),a.createElement(l.Link,{to:"/impressum",className:"flex justify-center pt-64 pb-4"},"Impressum"))};function u(){return a.createElement(a.Fragment,null,a.createElement("html",{lang:"de"}),a.createElement("title",null,"TheReporter | Startseite"))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-0aaf6d60f6033fff9bb3.js.map