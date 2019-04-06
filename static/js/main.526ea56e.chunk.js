(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(39)},24:function(e,t,n){},26:function(e,t,n){},36:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(14),o=n.n(l),i=(n(24),n(26),n(3)),c=n(4),s=n(6),h=n(5),u=n(7),m=n(42),d=n(41),p=n(40),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"postFooter"},r.a.createElement("hr",null),r.a.createElement(p.a,{to:"/blog"},"Back to blog posts "),r.a.createElement("span",{style:{float:"right"}},"Send me feedback"," ",r.a.createElement("a",{href:"https://twitter.com/iShivangiDas",target:"_blank",id:"twitter",title:"Twitter",rel:"noopener noreferrer"}," ","@iShivangiDas",r.a.createElement("i",{className:"icon-twitter","aria-hidden":"true"}))))}}]),t}(a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"My relationship with React"),r.a.createElement("small",null,"March 31, 2019"),r.a.createElement("article",null,r.a.createElement("p",null,"I started learning React out of curiosity seeing the amazing things people in my Twitter feed were building with it. A typical case of what millennials call FOMO. (I wonder if I need a hashtag there.)"),r.a.createElement("hr",null),r.a.createElement("h3",null,"The fun stuff"),r.a.createElement("p",null,"With React I had the opportunity to use JavaScript in its raw form. I have been using jQuery for 4 years (don't cringe) and had almost forgotten how powerful JavaScript is on its own. I enjoyed trying out Next.js, Gatsby, and other ready-to-deploy tools(?). Was awestruck by create-react-app and it's amazing developer Dan Abramov."),r.a.createElement("hr",null),r.a.createElement("h3",null,"Resources"),r.a.createElement("ul",null,r.a.createElement("li",null,"The"," ",r.a.createElement("a",{href:"https://facebook.github.io/create-react-app/",target:"_blank",rel:"noopener noreferrer"},"create-react-app")," ","documentation is amazing"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://scrimba.com/p/p7P5Hd/cBv8ruL",target:"_blank",rel:"noopener noreferrer"},"This tutorial on Scrimba")),r.a.createElement("li",null,"Learnt Hooks from"," ",r.a.createElement("a",{href:"https://www.youtube.com/watch?v=dpw9EHDh2bM",target:"_blank",rel:"noopener noreferrer"},"this talk")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://egghead.io/courses/getting-started-with-redux",target:"_blank",rel:"noopener noreferrer"},"Redux by Dan Abramov")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://learnredux.com/",target:"_blank",rel:"noopener noreferrer"},"Redux by Wes Bos")),r.a.createElement("li",null,"A little help from"," ",r.a.createElement("a",{href:"https://www.freecodecamp.org/",target:"_blank",rel:"noopener noreferrer"},"FreeCodeCamp"))),r.a.createElement("hr",null),r.a.createElement("h3",null,"Things I love to hate"),r.a.createElement("p",null,"Will someone please tell me how to deal with client-side routing?! It has been annoying me for weeks now! I ended up using"," ",r.a.createElement("code",null,"hashHistory")," for this blog. You can see the ugliness in the address bar."),r.a.createElement("hr",null),r.a.createElement("h3",null,"Side-effects"),r.a.createElement("p",null,"As a side-effect of learning React, I have been receiving multiple interview calls.",r.a.createElement("br",null),"I had started this blog with React then moved to plain HTML5/ CSS3/ JavaScript because who wants to use so many technologies for a simple static site. However, I started missing the amazing state management facility and again switched to React."),r.a.createElement("hr",null),r.a.createElement("h3",null,"Verdict"),r.a.createElement("p",null,"I love how well-thought out the whole eco-system is. You need it, they got it. However, I remain skeptical about the fact that it is owned by Facebook.")),r.a.createElement(f,null))}}]),t}(a.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Service Workers"),r.a.createElement("small",null,"April 6, 2019"),r.a.createElement("article",null,r.a.createElement("p",null,"You might have come across Progressive Web App (PWA) or heard Offline-first development. Even if you haven't, well, welcome! Let me tell you."),r.a.createElement("hr",null),r.a.createElement("h3",null,"Resources"),r.a.createElement("ul",null,r.a.createElement("li",null,"The"," ",r.a.createElement("a",{href:"https://developers.google.com/web/fundamentals/primers/service-workers/",target:"_blank",rel:"noopener noreferrer"},"Google docs")," ","explain it best. Highly recommend going there instead of my trials and tribulations here.")),r.a.createElement("hr",null),r.a.createElement("h3",null,"First Encounter"),r.a.createElement("p",null,"I have learnt so much because of using ",r.a.createElement("code",null,"create-react-app"),". This environment has an option to register for Service workers which led me to find out what they were to begin with. Service worker is a script that moderates between your app, the browser and the network. This allows one to cache resources and use them instead of making multiple requests to fetch every time. However, its most fascinating application is when the internet is not there at all. Normally, we come across the T-rex, Downasaur (yes, that is its name). Since there is a service worker in between the browser and the internet cosily caching all the resources you asked for, it goes ahead and serves them. And your site runs offline!"),r.a.createElement("hr",null),r.a.createElement("h3",null,"Initial frustration"),r.a.createElement("p",null,"All was good, till I discovered new additions to my site were not showing up at all. Worked in incognito mode"," ",r.a.createElement("code",null,"(CTRL + SHIFT + N)")," only. Turns out once a service worker is registered, it keeps serving the cached pages till all instances (tabs) of the website/app are closed. Not refreshed, closed! ",r.a.createElement("br",null),"From the docs, I came across the fact the if there was a change in the serviceWorker.js file, it would tell the browser about the new service worker and allow fetching the resources again. However, when the new service worker is registered, the old one continues to work and is only replaced on refreshing the page. ",r.a.createElement("br",null),"There are ways to let the users know about this. Refer"," ",r.a.createElement("a",{href:"https://github.com/shivangidas/blog/blob/master/src/serviceWorker.js",target:"_blank",rel:"noopener noreferrer"},"my code")," ","for more info."),r.a.createElement("hr",null),r.a.createElement("h3",null,"Happy Side-effects"),r.a.createElement("p",null,"Service worker satisfies one of the"," ",r.a.createElement("a",{href:"https://developers.google.com/web/progressive-web-apps/checklist",target:"_blank",rel:"noopener noreferrer"},"conditions")," ","to allow users to add the site to their home screen on phone and desktop. This means your website can run like a native app (almost) with the heavy lifting being done by the underlying OS."),r.a.createElement("hr",null),r.a.createElement("h3",null,"Verdict"),r.a.createElement("p",null,"I love that my blog feels like a native app, too, and runs smoothly in bad connection. Now we are supporting 'no internet'. What's next in store?")),r.a.createElement(f,null))}}]),t}(a.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("p",null,"I enjoy coding and I love reading. Might as well share these things.")}}]),t}(a.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement(w,null),r.a.createElement("ul",null,r.a.createElement("li",{key:"2"},r.a.createElement(p.a,{to:"/ServiceWorkers"},"Service Workers")," ",r.a.createElement("small",null,"April 4, 2019"),r.a.createElement("br",null),r.a.createElement("small",null,"Did you know this blog runs offline, too?")),r.a.createElement("hr",null),r.a.createElement("li",{key:"1"},r.a.createElement(p.a,{to:"/ReactAndMe"},"My relationship with React")," ",r.a.createElement("small",null,"March 31, 2019"),r.a.createElement("br",null),r.a.createElement("small",null,"It has been bittersweet."))))}}]),t}(a.Component),v=n(10),y=n(15),k=n.n(y),j=(n(34),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).state={loading:!0,list:[],lightTheme:!0},e.handleThemeChange=e.handleThemeChange.bind(Object(v.a)(Object(v.a)(e))),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleThemeChange",value:function(){this.state.lightTheme?(document.body.classList.remove("light"),document.body.classList.add("dark"),this.setState({lightTheme:!1})):(document.body.classList.remove("dark"),document.body.classList.add("light"),this.setState({lightTheme:!0}))}},{key:"render",value:function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement("h2",null,r.a.createElement(p.a,{to:"/blog"},"Shivangi's blog "),r.a.createElement(k.a,{defaultChecked:this.state.lightTheme,icons:!1,className:"toggleButton",onChange:this.handleThemeChange})))}}]),t}(a.Component)),O=(n(36),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("center",null,r.a.createElement("div",null,r.a.createElement("a",{href:"https://tinyletter.com/shivangi",target:"_blank",rel:"noopener noreferrer"},"Join the newsletter"," ",r.a.createElement("i",{className:"icon-mail4","aria-hidden":"true"}))),r.a.createElement("div",{id:"copyright"},r.a.createElement("span",null,"Shivangi Das"),"\xa0 \xa9 \xa0",r.a.createElement("span",null,"2019")),r.a.createElement("div",{id:"contactIcons"},r.a.createElement("a",{href:"https://in.linkedin.com/in/shivangi-das-49736058",target:"_blank",id:"linkedIn",title:"LinkedIn",rel:"noopener noreferrer"},r.a.createElement("i",{className:"icon-linkedin","aria-hidden":"true"})),"\xa0",r.a.createElement("a",{href:"https://github.com/shivangidas",target:"_blank",id:"github",title:"Github",rel:"noopener noreferrer"},r.a.createElement("i",{className:"icon-github","aria-hidden":"true"})),"\xa0",r.a.createElement("a",{href:"https://twitter.com/iShivangiDas",target:"_blank",id:"twitter",title:"Twitter",rel:"noopener noreferrer"},r.a.createElement("i",{className:"icon-twitter","aria-hidden":"true"})))))}}]),t}(a.Component)),S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("main",null,r.a.createElement(j,null),r.a.createElement(d.a,{exact:!0,path:["/","/blog"],component:E}),r.a.createElement(d.a,{path:"/ReactAndMe",component:g}),r.a.createElement(d.a,{path:"/ServiceWorkers",component:b})),r.a.createElement("div",{id:"snackbar"},"Some text some message.."),r.a.createElement(O,null)))}}]),t}(a.Component);function T(e){var t=document.getElementById("snackbar");t.className="show",t.textContent=e,setTimeout(function(){t.className=t.className.replace("show","")},5e3)}var I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),T("New content is available! Close all tabs for this page and open again."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),T("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(S,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/blog",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/blog","/service-worker.js");I?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode."),T("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA"),T("This web app is being served cache-first by a service worker")})):C(t,e)})}}()}},[[18,2,1]]]);
//# sourceMappingURL=main.526ea56e.chunk.js.map