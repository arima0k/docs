"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2048],{4907:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(6687);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2048:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});a(6687);var n=a(4907);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i={slug:"/paper/updating"},p="Updating Paper",l={unversionedId:"paper/how-to/update",id:"paper/how-to/update",title:"Updating Paper",description:"Updating Paper is an important part of running every server. With new features and fixes coming",source:"@site/docs/paper/how-to/update.md",sourceDirName:"paper/how-to",slug:"/paper/updating",permalink:"/paper/updating",draft:!1,editUrl:"https://github.com/PaperMC/docs/blob/main/docs/paper/how-to/update.md",tags:[],version:"current",lastUpdatedBy:"Evan McCarthy",lastUpdatedAt:1646787673,formattedLastUpdatedAt:"3/9/2022",frontMatter:{slug:"/paper/updating"},sidebar:"docs",previous:{title:"Configuring Anti-Xray",permalink:"/paper/anti-xray"},next:{title:"Aikar's Flags",permalink:"/paper/aikars-flags"}},s={},u=[{value:"Step 1. Backup",id:"step-1-backup",level:2},{value:"Step 2. Update Plugins",id:"step-2-update-plugins",level:2},{value:"Step 3. Update Paper",id:"step-3-update-paper",level:2}],d={toc:u};function c(e){var t=e.components,a=o(e,["components"]);return(0,n.kt)("wrapper",r({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",r({},{id:"updating-paper"}),"Updating Paper"),(0,n.kt)("p",null,"Updating Paper is an important part of running every server. With new features and fixes coming\nevery day, we recommend updating at least once per week to keep your server patched for the latest\nbugs. Installing updates is very simple, but it's important to know how to do it correctly."),(0,n.kt)("div",r({},{className:"admonition admonition-caution alert alert--warning"}),(0,n.kt)("div",r({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",r({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",r({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,n.kt)("path",r({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Don't replace any JAR in a running server")),(0,n.kt)("div",r({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Unless you know exactly what and why you're doing what you're doing, it's never a good idea to\nreplace any JAR in a running server, be that plugins, or Paper itself."))),(0,n.kt)("h2",r({},{id:"step-1-backup"}),"Step 1. Backup"),(0,n.kt)("p",null,"This is the most important step, and yet the most frequently skipped. While it is unlikely that\nupdating Paper itself will cause any issues requiring you to restore from a backup, plugin\nmalfunctions or other accidents might! Updating is a great time to work in a backup. Having\nfunctioning backups is essential to every server, big or small."),(0,n.kt)("p",null,"If you don't already have a backup plan in place, see ","[Backup and Recovery]"," where we walk through\nmultiple different backup or recovery strategies."),(0,n.kt)("h2",r({},{id:"step-2-update-plugins"}),"Step 2. Update Plugins"),(0,n.kt)("p",null,"Just like it's important to update Paper, it's equally important to keep plugins up to date. You\nnever know what plugin authors may be working on, be it bugfixes or new features."),(0,n.kt)("p",null,"A little known feature of Paper servers is the ",(0,n.kt)("inlineCode",{parentName:"p"},"update")," folder. Here's how you use it."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a folder called ",(0,n.kt)("inlineCode",{parentName:"li"},"update")," within the ",(0,n.kt)("inlineCode",{parentName:"li"},"plugins")," folder."),(0,n.kt)("li",{parentName:"ol"},"One by one, download plugins you would like to update and put them in the ",(0,n.kt)("inlineCode",{parentName:"li"},"update")," folder."),(0,n.kt)("li",{parentName:"ol"},"Restart your server, do not remove or modify any plugins outside the ",(0,n.kt)("inlineCode",{parentName:"li"},"update")," folder.")),(0,n.kt)("p",null,"By doing this, you are able to update all of your plugins at the same time without having the server\noff, or replacing plugin JARs while the server is running. You do not need to restart your server\nbefore updating Paper itself. This feature allows you to update both Paper and plugins all at the\nsame time, without needing any additional downtime."),(0,n.kt)("h2",r({},{id:"step-3-update-paper"}),"Step 3. Update Paper"),(0,n.kt)("div",r({},{className:"admonition admonition-tip alert alert--success"}),(0,n.kt)("div",r({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",r({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",r({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,n.kt)("path",r({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,n.kt)("div",r({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"If you are using a shared host, your host may provide a built-in way to update! Consult their\ndocumentation before continuing."))),(0,n.kt)("p",null,"Updating Paper itself is very simple."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Download a new JAR from ",(0,n.kt)("a",r({parentName:"li"},{href:"https://papermc.io/downloads"}),"our downloads page")),(0,n.kt)("li",{parentName:"ol"},"Stop your server. It is not recommended and may cause issues to replace your Paper JAR while the\nserver is running."),(0,n.kt)("li",{parentName:"ol"},"Replace your old Paper JAR file with the new one."),(0,n.kt)("li",{parentName:"ol"},"Start your server. Watch the startup log to ensure everything goes to plan. If there are any\nplugin conflicts or issues, you will see them here.")),(0,n.kt)("p",null,"To minimize downtime caused by updates, some server owners will, rather than replacing their server\nJAR, upload a new one and set their start script to use the new one on the next restart. Both of\nthese are valid update strategies."),(0,n.kt)("div",r({},{className:"admonition admonition-caution alert alert--warning"}),(0,n.kt)("div",r({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",r({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",r({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,n.kt)("path",r({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Automatic Updates")),(0,n.kt)("div",r({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"While it may be convenient to install updates automatically (and Paper's ","[downloads api]"," allows you\nto with ease), doing so is not recommended by Paper due to the possibility of plugin conflicts or\nother issues that you may not know about. Always be present during updates, and keep a careful watch\non your server's log after the fact."),(0,n.kt)("p",{parentName:"div"},"If you do choose to automatically install updates, ensure you have a functioning backup strategy in\nplace!"))))}c.isMDXComponent=!0}}]);