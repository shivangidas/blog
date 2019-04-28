(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n.p+"static/media/blogger.56733db5.PNG"},19:function(e,t,n){e.exports=n(42)},25:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},39:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(14),o=n.n(r),i=(n(25),n(27),n(29),n(2)),c=n(3),s=n(6),u=n(4),h=n(5),m=n(45),d=n(44),p=n(43),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"postFooter"},l.a.createElement("hr",null),l.a.createElement(p.a,{to:"/blog"},"Back to blog posts "),l.a.createElement("span",{style:{float:"right"}},"Send me feedback"," ",l.a.createElement("a",{href:"https://twitter.com/iShivangiDas",target:"_blank",id:"twitter",title:"Twitter",rel:"noopener noreferrer"}," ","@iShivangiDas",l.a.createElement("i",{className:"icon-twitter","aria-hidden":"true"}))))}}]),t}(a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"My relationship with React"),l.a.createElement("small",null,"March 31, 2019"),l.a.createElement("article",null,l.a.createElement("p",null,"I started learning React out of curiosity seeing the amazing things people in my Twitter feed were building with it. A typical case of what millennials call FOMO. (I wonder if I need a hashtag there.)"),l.a.createElement("hr",null),l.a.createElement("h3",null,"The fun stuff"),l.a.createElement("p",null,"With React I had the opportunity to use JavaScript in its raw form. I have been using jQuery for 4 years (don't cringe) and had almost forgotten how powerful JavaScript is on its own. I enjoyed trying out Next.js, Gatsby, and other ready-to-deploy tools(?). Was awestruck by create-react-app and it's amazing developer Dan Abramov."),l.a.createElement("hr",null),l.a.createElement("h3",null,"Resources"),l.a.createElement("ul",null,l.a.createElement("li",null,"The"," ",l.a.createElement("a",{href:"https://facebook.github.io/create-react-app/",target:"_blank",rel:"noopener noreferrer"},"create-react-app")," ","documentation is amazing"),l.a.createElement("li",null,l.a.createElement("a",{href:"https://scrimba.com/p/p7P5Hd/cBv8ruL",target:"_blank",rel:"noopener noreferrer"},"This tutorial on Scrimba")),l.a.createElement("li",null,"Learnt Hooks from"," ",l.a.createElement("a",{href:"https://www.youtube.com/watch?v=dpw9EHDh2bM",target:"_blank",rel:"noopener noreferrer"},"this talk")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://egghead.io/courses/getting-started-with-redux",target:"_blank",rel:"noopener noreferrer"},"Redux by Dan Abramov")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://learnredux.com/",target:"_blank",rel:"noopener noreferrer"},"Redux by Wes Bos")),l.a.createElement("li",null,"A little help from"," ",l.a.createElement("a",{href:"https://www.freecodecamp.org/",target:"_blank",rel:"noopener noreferrer"},"FreeCodeCamp"))),l.a.createElement("hr",null),l.a.createElement("h3",null,"Things I love to hate"),l.a.createElement("p",null,"Will someone please tell me how to deal with client-side routing?! It has been annoying me for weeks now! I ended up using"," ",l.a.createElement("code",null,"hashHistory")," for this blog. You can see the ugliness in the address bar."),l.a.createElement("hr",null),l.a.createElement("h3",null,"Side-effects"),l.a.createElement("p",null,"As a side-effect of learning React, I have been receiving multiple interview calls.",l.a.createElement("br",null),"I had started this blog with React then moved to plain HTML5/ CSS3/ JavaScript because who wants to use so many technologies for a simple static site. However, I started missing the amazing state management facility and again switched to React."),l.a.createElement("hr",null),l.a.createElement("h3",null,"Verdict"),l.a.createElement("p",null,"I love how well-thought out the whole eco-system is. You need it, they got it. However, I remain skeptical about the fact that it is owned by Facebook.")),l.a.createElement(g,null))}}]),t}(a.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Service Workers"),l.a.createElement("small",null,"April 6, 2019"),l.a.createElement("article",null,l.a.createElement("p",null,"You might have come across Progressive Web App (PWA) or heard Offline-first development. Even if you haven't, well, welcome! Let me tell you."),l.a.createElement("hr",null),l.a.createElement("h3",null,"Resources"),l.a.createElement("ul",null,l.a.createElement("li",null,"The"," ",l.a.createElement("a",{href:"https://developers.google.com/web/fundamentals/primers/service-workers/",target:"_blank",rel:"noopener noreferrer"},"Google docs")," ","explain it best. Highly recommend going there instead of my trials and tribulations here.")),l.a.createElement("hr",null),l.a.createElement("h3",null,"First Encounter"),l.a.createElement("p",null,"I have learnt so much because of using ",l.a.createElement("code",null,"create-react-app"),". This environment has an option to register for Service workers which led me to find out what they were to begin with. Service worker is a script that moderates between your app, the browser and the network. This allows one to cache resources and use them instead of making multiple requests to fetch every time. However, its most fascinating application is when the internet is not there at all. Normally, we come across the T-rex, Downasaur (yes, that is its name). Since there is a service worker in between the browser and the internet cosily caching all the resources you asked for, it goes ahead and serves them. And your site runs offline!"),l.a.createElement("hr",null),l.a.createElement("h3",null,"Initial frustration"),l.a.createElement("p",null,"All was good, till I discovered new additions to my site were not showing up at all. Worked in incognito mode"," ",l.a.createElement("code",null,"(CTRL + SHIFT + N)")," only. Turns out once a service worker is registered, it keeps serving the cached pages till all instances (tabs) of the website/app are closed. Not refreshed, closed! ",l.a.createElement("br",null),"From the docs, I came across the fact the if there was a change in the serviceWorker.js file, it would tell the browser about the new service worker and allow fetching the resources again. However, when the new service worker is registered, the old one continues to work and is only replaced on refreshing the page. ",l.a.createElement("br",null),"There are ways to let the users know about this. Refer"," ",l.a.createElement("a",{href:"https://github.com/shivangidas/blog/blob/master/src/serviceWorker.js",target:"_blank",rel:"noopener noreferrer"},"my code")," ","for more info."),l.a.createElement("hr",null),l.a.createElement("h3",null,"Happy Side-effects"),l.a.createElement("p",null,"Service worker satisfies one of the"," ",l.a.createElement("a",{href:"https://developers.google.com/web/progressive-web-apps/checklist",target:"_blank",rel:"noopener noreferrer"},"conditions")," ","to allow users to add the site to their home screen on phone and desktop. This means your website can run like a native app (almost) with the heavy lifting being done by the underlying OS."),l.a.createElement("hr",null),l.a.createElement("h3",null,"Verdict"),l.a.createElement("p",null,"I love that my blog feels like a native app, too, and runs smoothly in bad connection. Now we are supporting 'no internet'. What's next in store?")),l.a.createElement(g,null))}}]),t}(a.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props;return l.a.createElement("figure",null,l.a.createElement("img",{src:e.src,alt:e.alt,height:e.height?e.height:"",width:e.width?e.width:""}),l.a.createElement("figcaption",null,e.caption?e.caption:""))}}]),t}(l.a.Component),w=n(15),y=n.n(w),v=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"What's in a name?"),l.a.createElement("small",null,"April 15, 2019"),l.a.createElement("article",null,l.a.createElement("p",null,"In machine learning, when a model learns the training data too well and fails with new data, we call it overfitting. This blog is overfitted to my needs and hence I decided to name it so."),l.a.createElement("hr",null),l.a.createElement("h3",null,"Resources"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Overfitting",target:"_blank",rel:"noopener noreferrer"},"Wikipedia's explanation")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.coursera.org/lecture/machine-learning/the-problem-of-overfitting-ACpTQ",target:"_blank",rel:"noopener noreferrer"},"Andrew Ng's explaination"))),l.a.createElement("hr",null),l.a.createElement("h3",null,"Why does this blog exist?"),l.a.createElement("p",null,"I decided to start this blog because of the following reasons:",l.a.createElement("ul",null,l.a.createElement("li",null,"Whenever I am asked the same questions by different people about the same topic, I know that topic needs a blog."),l.a.createElement("li",null,"Blogging helps me understand things."),l.a.createElement("li",null,"It also helps to remember complex topics."),l.a.createElement("li",null,"Most importantly because I can and it is fun!"))),l.a.createElement("hr",null),l.a.createElement("h3",null,"Why did I move from blogger?"),l.a.createElement("p",null,"Because I hate these",l.a.createElement(E,{src:y.a,alt:"alignment issues in blogger",caption:"Alignment issues!",width:"100%",height:"auto"})),l.a.createElement("hr",null),l.a.createElement("h3",null,"Verdict"),l.a.createElement("p",null,"This blog is mostly for me: to clarify my doubts, to make things easier for me, or to express my opinion. I include resources in every post for people who may stumble upon my blog. However, sometimes maybe our doubts will match and Overfitted's post may end up fitting your needs. Cheers to that!"," ",l.a.createElement("span",{role:"img","aria-label":"cheers"},"\ud83c\udf7b"))),l.a.createElement(g,null))}}]),t}(a.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props;return l.a.createElement("pre",null,l.a.createElement("code",{className:e.language},e.codeString))}}]),t}(l.a.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Python tidbits"),l.a.createElement("small",null,"April 22, 2019"),l.a.createElement("article",null,l.a.createElement("p",null,"I coded in Python in the deeplearning.ai specialization on Coursera but only recently took up learning Python as a stand alone programming language. Well, actually part of it, a very little part. Here's everything I liked and disliked. Mostly liked, because (spoiler) Python is pretty awesome."),l.a.createElement("hr",null),l.a.createElement("h3",null,"Resources"),l.a.createElement("ul",null,l.a.createElement("li",null,"Kaggle's"," ",l.a.createElement("a",{href:"https://www.kaggle.com/learn/python",target:"_blank",rel:"noopener noreferrer"},"micro-course on Python"))),l.a.createElement("hr",null),l.a.createElement("h3",null,"No declaration!"),l.a.createElement("p",null,"I love JavaScript for its simple ",l.a.createElement("code",null,"var")," (and now"," ",l.a.createElement("code",null,"let")," and ",l.a.createElement("code",null,"const"),") used for variable declaration. However, Python won me over with it's no declaration required at all. Way to keep it simple!"),l.a.createElement("hr",null),l.a.createElement("p",null,"There's some fun with operator overloading"),l.a.createElement(k,{codeString:'a = 2 * 3\n#output 6\nb = "2" * 3\n#output 222',language:"language-python"}),l.a.createElement("hr",null),l.a.createElement("p",null,"Floor division is something I had not seen before."),l.a.createElement(k,{codeString:"a = 9 / 2\n#output 4.5 #normal division\nb = 9 // 2\n#output 4 #floor division",language:"language-python"}),l.a.createElement("hr",null),"Ask for help with ",l.a.createElement("code",null,"help")," function.",l.a.createElement("br",null),"User defined functions, written with docstring, show up nicely when you call ",l.a.createElement("code",null,"help(user_function)"),". Docstring are triple quoted strings.",l.a.createElement(k,{language:"language-python",codeString:'def sum(a,b):\n\t"""Finds some of two numbers\n\tsample: sum(3,3)\n\toutput: 6""" \n\treturn a + b\nhelp(sum)\n#output\nHelp on function sum in module __main__:\n\n  sum(a, b)\n\t  Finds some of two numbers\n\t  sample: sum(3, 3)\n\t  output: 6'}),"There's an option to define functions having arguments with default values.",l.a.createElement(k,{codeString:"def what_to_eat(food = 'chicken'):",language:"language-python"}),"* ",l.a.createElement("code",null,"None")," is kinda like ",l.a.createElement("code",null,"null"),".",l.a.createElement("br",null),"* lambda functions are one line functions written as shown",l.a.createElement(k,{codeString:"mod_5 = lambda x: x % 5\nmod_5(23)\n#output 3",language:"language-python"}),l.a.createElement("hr",null),"The logical operators are simple ",l.a.createElement("code",null,"and"),", ",l.a.createElement("code",null,"or"),","," ",l.a.createElement("code",null,"not")," instead of &&, ||, !. Could Python get any cooler?",l.a.createElement("br",null),"However, there's the case of else if, it has been shortened to"," ",l.a.createElement("code",null,"elif"),".",l.a.createElement("hr",null),'Lists in Python are like arrays that have amazing slicing options with ":".',l.a.createElement(k,{codeString:"a = [1,2,7,3,4,9]\na[: 2] #output [1,2]\nb = [1,2,7,3,4,9]\nb[2:] #output [7, 3, 4, 9]\nc = [1,2,7,3,4,9]\nc[1:-1] #output [2, 7, 3, 4]\n#lists are mutable, hence they were defined multiple times here to show the slicing options.",language:"language-python"})," They come with every function imaginable. If you don't find one, there's probably a library/module out there that will help you out like numpy, pandas, scikit-learn.",l.a.createElement("br",null),"* Tuples are immutable lists declared with () or no braces at all.",l.a.createElement(k,{language:"language-python",codeString:"a = 1,2,3\nb = 4, 5\na, b = b, a\nprint(a)\n#output (4,5)"}),l.a.createElement("hr",null),"Loops can get pretty crazy with list comprehensions. Refer"," ",l.a.createElement("a",{href:"https://www.kaggle.com/colinmorris/loops-and-list-comprehensions",target:"_blank",rel:"noopener noreferrer"}," ","this on Kaggle")," ","because I cannot do justice to it.",l.a.createElement(k,{language:"language-python",codeString:"a = [10,20,7,3,2,6,13]\nb = [x for x in a if x >= 7]\nprint(b)\n#output [10, 20, 7, 13]"}),l.a.createElement("hr",null),"* Dictionary is like json, comes with key-value pairs. ",l.a.createElement("br",null)," * Strings ",l.a.createElement("code",null,"str")," are immutable, they can be treated like list of char. ",l.a.createElement("br",null)," * str.format is worth it's weight in gold.",l.a.createElement(k,{language:"language-python",codeString:"a = 'Python'\n'Oh {}, thou art amazing.'.format(a)\n#output 'Oh Python, thou art amazing.'"}),l.a.createElement("hr",null),"To use libraries other amazing people have built for Python, use"," ",l.a.createElement("code",null,"import"),l.a.createElement(k,{language:"language-python",codeString:"import pandas as pd"}),"Pandas helps with data manipulation and makes it readable."," ",l.a.createElement("a",{href:"https://www.kaggle.com/learn/pandas",target:"_blank",rel:"noopener noreferrer"}," ","Refer this"," "),"if you want to know more."),l.a.createElement(g,null))}}]),t}(a.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("p",null,"Personal blog by"," ",l.a.createElement("a",{href:"https://twitter.com/iShivangiDas",target:"_blank",rel:"noopener noreferrer"},"Shivangi Das"),". ",l.a.createElement("br",null),"I enjoy coding and love reading.")}}]),t}(a.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("section",null,l.a.createElement(j,null),l.a.createElement("ul",null,l.a.createElement("li",{key:"4"},l.a.createElement(p.a,{to:"/Python"},"Python tidbits")," ",l.a.createElement("small",null,"April 22, 2019"),l.a.createElement("br",null),l.a.createElement("small",null,"My notes on Python. As seen on Kaggle.")),l.a.createElement("hr",null),l.a.createElement("li",{key:"3"},l.a.createElement(p.a,{to:"/Overfitted"},"What's in a name?")," ",l.a.createElement("small",null,"April 15, 2019"),l.a.createElement("br",null),l.a.createElement("small",null,"Why is this blog called Overfitted? Why does it even exist?")),l.a.createElement("hr",null),l.a.createElement("li",{key:"2"},l.a.createElement(p.a,{to:"/ServiceWorkers"},"Service Workers")," ",l.a.createElement("small",null,"April 4, 2019"),l.a.createElement("br",null),l.a.createElement("small",null,"Did you know this blog runs offline, too?")),l.a.createElement("hr",null),l.a.createElement("li",{key:"1"},l.a.createElement(p.a,{to:"/ReactAndMe"},"My relationship with React")," ",l.a.createElement("small",null,"March 31, 2019"),l.a.createElement("br",null),l.a.createElement("small",null,"It has been bittersweet."))))}}]),t}(a.Component),I=n(10),T=n(16),C=n.n(T),W=(n(37),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={loading:!0,list:[],lightTheme:!0},e.handleThemeChange=e.handleThemeChange.bind(Object(I.a)(Object(I.a)(e))),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleThemeChange",value:function(){this.state.lightTheme?(document.body.classList.remove("light"),document.body.classList.add("dark"),this.setState({lightTheme:!1})):(document.body.classList.remove("dark"),document.body.classList.add("light"),this.setState({lightTheme:!0}))}},{key:"render",value:function(){return l.a.createElement("header",{className:"App-header"},l.a.createElement("h2",null,l.a.createElement(p.a,{to:"/blog"},"Overfitted "),l.a.createElement(C.a,{defaultChecked:this.state.lightTheme,icons:!1,className:"toggleButton",onChange:this.handleThemeChange})))}}]),t}(a.Component)),_=(n(39),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",null,l.a.createElement("center",null,l.a.createElement("div",null,l.a.createElement("a",{href:"https://tinyletter.com/shivangi",target:"_blank",rel:"noopener noreferrer"},"Join the newsletter"," ",l.a.createElement("i",{className:"icon-mail4","aria-hidden":"true"}))),l.a.createElement("div",{id:"copyright"},l.a.createElement("span",null,"Shivangi Das"),"\xa0 \xa9 \xa0",l.a.createElement("span",null,"2019")),l.a.createElement("div",{id:"contactIcons"},l.a.createElement("a",{href:"https://in.linkedin.com/in/shivangi-das-49736058",target:"_blank",id:"linkedIn",title:"LinkedIn",rel:"noopener noreferrer"},l.a.createElement("i",{className:"icon-linkedin","aria-hidden":"true"})),"\xa0",l.a.createElement("a",{href:"https://github.com/shivangidas",target:"_blank",id:"github",title:"Github",rel:"noopener noreferrer"},l.a.createElement("i",{className:"icon-github","aria-hidden":"true"})),"\xa0",l.a.createElement("a",{href:"https://twitter.com/iShivangiDas",target:"_blank",id:"twitter",title:"Twitter",rel:"noopener noreferrer"},l.a.createElement("i",{className:"icon-twitter","aria-hidden":"true"})))))}}]),t}(a.Component)),A=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(m.a,null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("main",null,l.a.createElement(W,null),l.a.createElement(d.a,{exact:!0,path:["/","/blog"],component:S}),l.a.createElement(d.a,{path:"/ReactAndMe",component:f}),l.a.createElement(d.a,{path:"/ServiceWorkers",component:b}),l.a.createElement(d.a,{path:"/Overfitted",component:v}),l.a.createElement(d.a,{path:"/Python",component:O})),l.a.createElement("div",{id:"snackbar"},"Some text some message.."),l.a.createElement(_,null)))}}]),t}(a.Component);function N(e){var t=document.getElementById("snackbar");t.className="show",t.textContent=e,setTimeout(function(){t.className=t.className.replace("show","")},5e3)}var x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),N("New content is available! Close all tabs for this page and open again."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),N("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(l.a.createElement(A,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/blog",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/blog","/service-worker.js");x?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):P(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode."),N("No internet connection found. The app is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA"),N("This web app is being served cache-first by a service worker")})):P(t,e)})}}()}},[[19,2,1]]]);
//# sourceMappingURL=main.0e820dae.chunk.js.map