(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{20:function(e,t,a){},24:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);for(var s=a(0),c=(a(19),a(20),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),i(e),r(e)}))}),i={_state:{profilePage:{newsData:[{id:1,author:"Author 1",text:"Some text 1",date:"date 1"},{id:2,author:"Author 2",text:"Some text 2",date:"date 2"},{id:3,author:"Author 3",text:"Some text 3",date:"date 3"},{id:4,author:"Author 4",text:"Some text 4",date:"date 4"}],textarea:""},newsPage:{newsData:[{id:1,author:"Author 1",text:"Some text 1",date:"date 1"},{id:2,author:"Author 2",text:"Some text 2",date:"date 2"},{id:3,author:"Author 3",text:"Some text 3",date:"date 3"},{id:4,author:"Author 4",text:"Some text 4",date:"date 4"}]},dialogsPage:{usersDialogs:[{id:1,firstName:"First 1",lastName:"Last 1"},{id:2,firstName:"First 2",lastName:"Last 2"},{id:3,firstName:"First 3",lastName:"Last 3"},{id:4,firstName:"First 4",lastName:"Last 4"}],messages:[{id:1,message:"Some message 1"},{id:2,message:"Some message 2"},{id:3,message:"Some message 3"},{id:4,message:"Some message 4"},{id:5,message:"Some message 5"},{id:6,message:"Some message 6"}]}},getState:function(){return this._state},_callSubscriber:function(){console.log("state was changed")},subscribe:function(e){this._callSubscriber=e},addPost:function(){var e="";e=(e=(new Date).toLocaleTimeString())+"       "+(new Date).toLocaleDateString();var t={id:this._state.profilePage.newsData.length+1,author:"me",text:this._state.profilePage.textarea,date:e};this._state.profilePage.newsData.push(t),this._state.profilePage.textarea="",this._callSubscriber(this._state)},changeTextArea:function(e){this._state.profilePage.textarea=e,this._callSubscriber(this._state)}},r=a(1),n=a.n(r),l=a(15),o=a.n(l),d=function(e){return Object(s.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(s.jsxs)("div",{class:"container-fluid",children:[Object(s.jsx)("a",{class:"navbar-brand",href:"#",children:"SOCIAL NETWORK"}),Object(s.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{class:"navbar-toggler-icon"})})]})})},m=a(7),j=(a(24),function(){return Object(s.jsxs)("ul",{className:"nav flex-column navigation",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(m.b,{className:"nav-link active",to:"/news",children:"News"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(m.b,{className:"nav-link",to:"/profile",children:"Profile"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(m.b,{className:"nav-link",to:"/friends",children:"Friends"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(m.b,{className:"nav-link",to:"/dialogs",children:"Dialogs"})})]})}),b=(a(30),function(e){return Object(s.jsx)("div",{className:"card mt-3",children:Object(s.jsxs)("div",{className:"media post",children:[Object(s.jsx)("img",{src:"https://img.favpng.com/21/4/9/portable-network-graphics-avatar-computer-icons-image-social-media-png-favpng-r3ez8qWcYdM8jGVn2b5TGhvS8.jpg",className:"rounded-circle mt-3 ml-3",alt:"Generic placeholder image"}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("div",{className:"card-title",children:Object(s.jsx)("h5",{className:"card-title",children:e.author})}),Object(s.jsx)("p",{className:"card-text",children:e.text}),Object(s.jsx)("p",{className:"card-text",children:Object(s.jsx)("small",{className:"text-muted",children:e.date})})]})]})})}),h=function(e){var t=e.posts.map((function(e){return Object(s.jsx)(b,{author:e.author+e.id,text:e.text+e.id,date:"Posted on "+e.date+e.id})}));return Object(s.jsxs)("div",{children:[Object(s.jsxs)("form",{class:"d-flex",children:[Object(s.jsx)("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(s.jsx)("button",{class:"btn btn-outline-success",type:"submit",children:"Search"})]}),t]})},g=(a(31),function(e){return Object(s.jsx)(m.b,{className:"link",to:"/dialogs/"+e.id,children:Object(s.jsx)("div",{className:"card mt-3 btn btn-outline-info",children:Object(s.jsxs)("div",{className:"media item",children:[Object(s.jsx)("img",{src:"https://img.favpng.com/21/4/9/portable-network-graphics-avatar-computer-icons-image-social-media-png-favpng-r3ez8qWcYdM8jGVn2b5TGhvS8.jpg",className:"rounded-circle mt-1 ml-1",alt:"Generic placeholder image"}),Object(s.jsxs)("div",{className:"nav-link mt-2 ml-2 text",children:[e.firstName,e.lastName," "]})]})})})}),u=function(e){return Object(s.jsx)("div",{className:"messages mt-2 float-none",children:Object(s.jsxs)("div",{className:"media item ",children:[Object(s.jsx)("img",{src:"https://img.favpng.com/21/4/9/portable-network-graphics-avatar-computer-icons-image-social-media-png-favpng-r3ez8qWcYdM8jGVn2b5TGhvS8.jpg",className:"rounded-circle mt-1 ml-1",alt:"Generic placeholder image"}),Object(s.jsxs)("div",{className:"mt-2 ml-2",children:[" ",e.message," "]})]})})},x=function(e){return Object(s.jsx)("div",{className:"messages mt-2 float-none",children:Object(s.jsxs)("div",{className:"media item ",children:[Object(s.jsxs)("div",{className:"mt-2 ml-2",children:[" ",e.message," "]}),Object(s.jsx)("img",{src:"https://img.favpng.com/21/4/9/portable-network-graphics-avatar-computer-icons-image-social-media-png-favpng-r3ez8qWcYdM8jGVn2b5TGhvS8.jpg",className:"rounded-circle mt-1 ml-1",alt:"Generic placeholder image"})]})})},p=function(e){var t=e.usersDialogs.map((function(e){return Object(s.jsx)(g,{id:e.id,firstName:e.firstName+e.id,lastName:e.lastName+e.id})})),a=e.messages.map((function(e){return e.id%2===0?Object(s.jsx)(u,{message:e.message+e.id}):Object(s.jsx)(x,{message:e.message+e.id})}));return Object(s.jsxs)("div",{className:"row justify-content-between",children:[Object(s.jsxs)("div",{className:"col-md-5",children:[" ",t," "]}),Object(s.jsxs)("div",{className:"col-md-5 justify-content-center",children:[a,Object(s.jsxs)("div",{class:"input-group mt-3",children:[Object(s.jsx)("input",{type:"text",class:"form-control",placeholder:"Enter your message","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),Object(s.jsx)("div",{class:"input-group-append",children:Object(s.jsx)("button",{class:"btn btn-outline-secondary",type:"button",children:"Send"})})]})]})]})},f=a(2),v=[],O=0;O<4;O++)v[O]={id:O+1,firstName:"First ",lastName:"Last "};for(var N=[],S=0;S<10;S++)N[S]={id:S+1,message:"Some message ",date:"date "};for(var w=[],P=0;P<4;P++)w[P]={id:P+1,author:"Author ",text:"Some text ",date:"date "};a(32);var A=function(e){return Object(s.jsxs)("div",{className:"row justify-content-around header-profile",children:[Object(s.jsx)("div",{className:"col-md-3 mr-5",children:Object(s.jsx)("img",{src:"https://img.favpng.com/21/4/9/portable-network-graphics-avatar-computer-icons-image-social-media-png-favpng-r3ez8qWcYdM8jGVn2b5TGhvS8.jpg",className:"rounded-circle mt-3 ml-3",alt:"Generic placeholder image"})}),Object(s.jsxs)("div",{className:"col-md-3 mt-5",children:[Object(s.jsxs)("h2",{children:[e.firstName," ",e.lastName]}),Object(s.jsxs)("h4",{children:["Age: ",e.age]}),Object(s.jsxs)("h4",{children:["Email: ",e.email]})]})]})},T=function(e){var t=e.state.newsData.map((function(e){return Object(s.jsx)(b,{author:e.author+e.id,text:e.text+e.id,date:"Posted at "+e.date})})),a=n.a.createRef();return Object(s.jsxs)("div",{children:[Object(s.jsx)(A,{firstName:"Andrew",lastName:"Shchepaniak",age:"20",email:"some@gmail.com"}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{for:"exampleFormControlTextarea1",children:Object(s.jsx)("h2",{children:"My Posts"})}),Object(s.jsx)("textarea",{onChange:function(){var t=a.current.value;e.changeTextArea(t)},value:e.state.textarea,className:"form-control",ref:a,id:"exampleFormControlTextarea1",rows:"3"}),Object(s.jsx)("button",{onClick:function(){e.addPost()},type:"submit",className:"btn btn-primary mt-2",children:"Publish"})]}),Object(s.jsxs)("div",{className:"posts",children:[" ",t," "]})]})},k=function(e){return Object(s.jsxs)(m.a,{children:[Object(s.jsx)(d,{}),Object(s.jsx)("div",{className:"container mt-3",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-md-3",children:Object(s.jsx)(j,{})}),Object(s.jsxs)("div",{className:"col-md-7",children:[Object(s.jsx)(f.a,{path:"/news",render:function(){return Object(s.jsx)(h,{posts:e.state.newsPage.newsData})}}),Object(s.jsx)(f.a,{path:"/profile",render:function(){return Object(s.jsx)(T,{changeTextArea:e.changeTextArea,addPost:e.addPost,state:e.state.profilePage})}}),Object(s.jsx)(f.a,{path:"/dialogs",render:function(){return Object(s.jsx)(p,{usersDialogs:e.state.dialogsPage.usersDialogs,messages:e.state.dialogsPage.messages})}})]}),Object(s.jsx)("div",{className:"col-md-2"})]})})]})},y=function(e){o.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(k,{changeTextArea:i.changeTextArea.bind(i),addPost:i.addPost.bind(i),state:i.getState()})}),document.getElementById("root"))};y(i.getState()),i.subscribe(y),c()}},[[33,1,2]]]);
//# sourceMappingURL=main.f62adece.chunk.js.map