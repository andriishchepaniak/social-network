(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{25:function(e,t,a){},31:function(e,t,a){},36:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var s=a(0),n=(a(30),a(31),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))}),c=a(13),r=a(18),i=a(4),o="ADD_POST",l="UPDATE_NEW_POST_TEXT",d={newsData:[{id:1,author:"Author 1",text:"Some text 1",date:"date 1"},{id:2,author:"Author 2",text:"Some text 2",date:"date 2"},{id:3,author:"Author 3",text:"Some text 3",date:"date 3"},{id:4,author:"Author 4",text:"Some text 4",date:"date 4"}],textarea:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var a="";a=(a=(new Date).toLocaleTimeString())+"       "+(new Date).toLocaleDateString();var s={id:e.newsData.length+1,author:"me",text:e.textarea,date:a};return Object(i.a)(Object(i.a)({},e),{},{newsData:[s].concat(Object(r.a)(e.newsData)),textarea:""});case l:return Object(i.a)(Object(i.a)({},e),{},{textarea:t.newText});default:return e}},u="SEND_MESSAGE",j="UPDATE_NEW_MESSAGE_TEXT",b={usersDialogs:[{id:1,firstName:"First 1",lastName:"Last 1"},{id:2,firstName:"First 2",lastName:"Last 2"},{id:3,firstName:"First 3",lastName:"Last 3"},{id:4,firstName:"First 4",lastName:"Last 4"}],messages:[{id:1,message:"Some message 1"},{id:2,message:"Some message 2"},{id:3,message:"Some message 3"},{id:4,message:"Some message 4"},{id:5,message:"Some message 5"},{id:6,message:"Some message 6"}],messageText:""},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var a={id:e.messages.length+1,message:e.messageText};return Object(i.a)(Object(i.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[a]),messageText:""});case j:return Object(i.a)(Object(i.a)({},e),{},{messageText:t.newMessageText});default:return e}},x={newsData:[{id:1,author:"Author 1",text:"Some text 1",date:"date 1"},{id:2,author:"Author 2",text:"Some text 2",date:"date 2"},{id:3,author:"Author 3",text:"Some text 3",date:"date 3"},{id:4,author:"Author 4",text:"Some text 4",date:"date 4"}]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;return t.type,e},f="FOLLOW",O="UNFOLLOW",v={users:[{id:1,fullName:"SomeOne",avatarUrl:"https://storage.jewheart.com/content/users/avatars/2536/avatar_2536_500.jpg?1558625366",status:"Some text",followed:!0,location:{country:"Ukraine",city:"Lviv"}},{id:2,fullName:"SomeOne Two",avatarUrl:"https://storage.jewheart.com/content/users/avatars/2536/avatar_2536_500.jpg?1558625366",status:"Some text two",followed:!1,location:{country:"Ukraine",city:"Lviv"}},{id:3,fullName:"SomeOne three",avatarUrl:"https://storage.jewheart.com/content/users/avatars/2536/avatar_2536_500.jpg?1558625366",status:"Some text three",followed:!0,location:{country:"Ukraine",city:"Lviv"}},{id:4,fullName:"SomeOne four",avatarUrl:"https://storage.jewheart.com/content/users/avatars/2536/avatar_2536_500.jpg?1558625366",status:"Some text",followed:!0,location:{country:"Ukraine",city:"Lviv"}}]},p=function(e){return{type:f,userId:e}},N=function(e){return{type:O,userId:e}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case O:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});default:return e}},S=Object(c.b)({profilePage:m,dialogsPage:h,newsPage:g,usersPage:w}),y=Object(c.c)(S),T=a(1),P=a.n(T),k=a(15),F=a.n(k),D=function(e){return Object(s.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-white",children:Object(s.jsxs)("div",{class:"container-fluid",children:[Object(s.jsx)("a",{class:"navbar-brand",href:"#",children:"SOCIAL NETWORK"}),Object(s.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{class:"navbar-toggler-icon"})})]})})},G=a(10),U=(a(36),function(){return Object(s.jsxs)("ul",{className:"nav flex-column navigation",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(G.b,{className:"nav-link",to:"/news",children:"News"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(G.b,{className:"nav-link",to:"/profile",children:"Profile"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(G.b,{className:"nav-link",to:"/friends",children:"Friends"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(G.b,{className:"nav-link",to:"/dialogs",children:"Dialogs"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(G.b,{className:"nav-link",to:"/users",children:"Users"})})]})}),L=(a(41),function(e){return Object(s.jsx)(G.b,{className:"link",to:"/dialogs/"+e.id,children:Object(s.jsx)("div",{className:"card mt-3 btn btn-outline-info",children:Object(s.jsxs)("div",{className:"media item",children:[Object(s.jsx)("img",{src:"https://img.favpng.com/21/4/9/portable-network-graphics-avatar-computer-icons-image-social-media-png-favpng-r3ez8qWcYdM8jGVn2b5TGhvS8.jpg",className:"rounded-circle mt-1 ml-1",alt:"Generic placeholder image"}),Object(s.jsxs)("div",{className:"nav-link mt-2 ml-2 text",children:[e.firstName,e.lastName," "]})]})})})}),M=(a(25),function(e){return Object(s.jsx)("div",{className:"messages mt-2 float-none",children:Object(s.jsxs)("div",{className:"media item ",children:[Object(s.jsx)("img",{src:"https://img.favpng.com/21/4/9/portable-network-graphics-avatar-computer-icons-image-social-media-png-favpng-r3ez8qWcYdM8jGVn2b5TGhvS8.jpg",className:"rounded-circle mt-1 ml-1",alt:"Generic placeholder image"}),Object(s.jsxs)("div",{className:"mt-2 ml-2",children:[" ",e.message," "]})]})})}),A=function(e){return Object(s.jsx)("div",{className:"messages mt-2 float-none",children:Object(s.jsxs)("div",{className:"media item ",children:[Object(s.jsxs)("div",{className:"mt-2 ml-2",children:[" ",e.message," "]}),Object(s.jsx)("img",{src:"https://img.favpng.com/21/4/9/portable-network-graphics-avatar-computer-icons-image-social-media-png-favpng-r3ez8qWcYdM8jGVn2b5TGhvS8.jpg",className:"rounded-circle mt-1 ml-1",alt:"Generic placeholder image"})]})})},_=(a(42),function(e){var t=e.dialogItems,a=e.messages,n=e.newMessageText;return Object(s.jsxs)("div",{className:"row justify-content-between",children:[Object(s.jsxs)("div",{className:"col-md-5",children:[t," "]}),Object(s.jsx)("div",{className:"col-md-5 justify-content-center",children:Object(s.jsxs)("div",{className:"align-bottom",children:[a,Object(s.jsxs)("div",{className:"input-group mt-3",children:[Object(s.jsx)("textarea",{id:"message-textarea",onChange:function(t){e.updateMessageText(t.target.value)},value:n,className:"form-control",placeholder:"Enter your message"}),Object(s.jsx)("div",{className:"input-group-append",children:Object(s.jsx)("button",{onClick:function(){e.sendMessage()},className:"btn btn-outline-info",type:"button",children:"Send"})})]})]})})]})}),E=a(8),C=Object(E.b)((function(e){return{dialogItems:e.dialogsPage.usersDialogs.map((function(e){return Object(s.jsx)(L,{id:e.id,firstName:e.firstName+e.id,lastName:e.lastName+e.id})})),messages:e.dialogsPage.messages.map((function(e){return e.id%2===0?Object(s.jsx)(M,{message:e.message+e.id}):Object(s.jsx)(A,{message:e.message+e.id})})),newMessageText:e.dialogsPage.messageText}}),(function(e){return{updateMessageText:function(t){e({type:j,newMessageText:t})},sendMessage:function(){e({type:u})}}}))(_),W=a(3),I=(a(43),function(e){return Object(s.jsxs)("div",{className:"row justify-content-around header-profile bg-white",children:[Object(s.jsx)("div",{className:"col-md-3 mr-5",children:Object(s.jsx)("img",{src:"https://img.favpng.com/21/4/9/portable-network-graphics-avatar-computer-icons-image-social-media-png-favpng-r3ez8qWcYdM8jGVn2b5TGhvS8.jpg",className:"rounded-circle mt-3 ml-3",alt:"Generic placeholder image"})}),Object(s.jsxs)("div",{className:"col-md-3 mt-5",children:[Object(s.jsxs)("h2",{children:[e.firstName," ",e.lastName]}),Object(s.jsxs)("h4",{children:["Age: ",e.age]}),Object(s.jsxs)("h4",{children:["Email: ",e.email]})]})]})}),q=(a(44),a(45),function(e){return Object(s.jsx)("div",{className:"card mt-3",children:Object(s.jsxs)("div",{className:"media post",children:[Object(s.jsx)("img",{src:"https://img.favpng.com/21/4/9/portable-network-graphics-avatar-computer-icons-image-social-media-png-favpng-r3ez8qWcYdM8jGVn2b5TGhvS8.jpg",className:"rounded-circle mt-3 ml-3",alt:"Generic placeholder image"}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("div",{className:"card-title",children:Object(s.jsx)("h5",{className:"card-title",children:e.author})}),Object(s.jsx)("p",{className:"card-text",children:e.text}),Object(s.jsx)("p",{className:"card-text",children:Object(s.jsx)("small",{className:"text-muted",children:e.date})})]})]})})}),z=function(e){var t=e.newPostText;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{for:"exampleFormControlTextarea1",children:Object(s.jsx)("h2",{children:"My Posts"})}),Object(s.jsx)("textarea",{onChange:function(t){var a=t.target.value;e.updateNewPost(a)},value:t,className:"form-control newPost-textarea",id:"exampleFormControlTextarea1",rows:"3"}),Object(s.jsx)("button",{onClick:function(){e.addPost()},type:"submit",className:"btn btn-outline-info mt-2",children:"Publish"})]}),Object(s.jsxs)("div",{className:"posts",children:[" ",e.myPosts," "]})]})},V=Object(E.b)((function(e){return{myPosts:e.profilePage.newsData.map((function(e){return Object(s.jsx)(q,{author:e.author+e.id,text:e.text+e.id,date:"Posted at "+e.date})})),newPostText:e.profilePage.textarea}}),(function(e){return{updateNewPost:function(t){e({type:l,newText:t})},addPost:function(){e({type:o})}}}))(z),Y=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)(I,{firstName:"Andrew",lastName:"Shchepaniak",age:"20",email:"some@gmail.com"}),Object(s.jsx)(V,{})]})},B=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("form",{class:"d-flex",children:[Object(s.jsx)("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(s.jsx)("button",{class:"btn btn-outline-success",type:"submit",children:"Search"})]}),e.posts]})},J=Object(E.b)((function(e){return{posts:e.newsPage.newsData.map((function(e){return Object(s.jsx)(q,{author:e.author+e.id,text:e.text+e.id,date:"Posted on "+e.date+e.id})}))}}),(function(e){return{}}))(B),X=(a(46),function(e){return Object(s.jsx)("div",{className:"card mb-3 pt-3 rounded-pill",children:Object(s.jsxs)("div",{className:"media user",children:[Object(s.jsx)("img",{src:e.avatarUrl,className:"rounded-circle mb-3 ml-3",alt:"Generic placeholder image"}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("div",{className:"card-title",children:Object(s.jsx)("h5",{className:"card-title",children:e.fullName})}),Object(s.jsx)("p",{className:"card-text",children:e.status}),Object(s.jsx)("p",{className:"card-text",children:Object(s.jsxs)("small",{className:"text-muted",children:["location: ",e.location.city+",  "+e.location.country]})}),Object(s.jsx)("div",{children:e.followed?Object(s.jsx)("button",{onClick:function(){var t;t=e.id,e.unFollow(t)},type:"button",className:"btn btn-outline-info",children:"UnFollow"}):Object(s.jsx)("button",{onClick:function(){var t;t=e.id,e.follow(t)},type:"button",className:"btn btn-outline-info",children:"Follow"})})]})]})})}),K=function(e){var t=e.users.map((function(t){return Object(s.jsx)(X,{id:t.id,avatarUrl:t.avatarUrl,fullName:t.fullName,status:t.status,location:t.location,followed:t.followed,follow:e.follow,unFollow:e.unFollow})}));return Object(s.jsx)("div",{children:t})},R=Object(E.b)((function(e){return{users:e.usersPage.users}}),(function(e){return{follow:function(t){e(p(t))},unFollow:function(t){e(N(t))}}}))(K),H=a(27),Q=function(e){var t=e.users.map((function(t){return Object(s.jsx)(X,{id:t.id,avatarUrl:t.avatarUrl,fullName:t.fullName,status:t.status,location:t.location,followed:t.followed,follow:e.follow,unFollow:e.unFollow})}));return Object(s.jsx)("div",{children:t})},Z=Object(E.b)((function(e){var t,a=[],s=Object(H.a)(e.usersPage.users);try{for(s.s();!(t=s.n()).done;){var n=t.value;!0===n.followed&&a.push(n)}}catch(c){s.e(c)}finally{s.f()}return{users:a}}),(function(e){return{follow:function(t){e(p(t))},unFollow:function(t){e(N(t))}}}))(Q),$=function(e){return Object(s.jsxs)(G.a,{children:[Object(s.jsx)(D,{}),Object(s.jsx)("div",{className:"container mt-3",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-md-3",children:Object(s.jsx)(U,{})}),Object(s.jsxs)("div",{className:"col-md-7",children:[Object(s.jsx)(W.a,{path:"/news",render:function(){return Object(s.jsx)(J,{})}}),Object(s.jsx)(W.a,{path:"/profile",render:function(){return Object(s.jsx)(Y,{})}}),Object(s.jsx)(W.a,{path:"/friends",render:function(){return Object(s.jsx)(Z,{})}}),Object(s.jsx)(W.a,{path:"/dialogs",render:function(){return Object(s.jsx)(C,{})}}),Object(s.jsx)(W.a,{path:"/users",render:function(){return Object(s.jsx)(R,{})}})]}),Object(s.jsx)("div",{className:"col-md-2"})]})})]})};window.store=y,F.a.render(Object(s.jsx)(P.a.StrictMode,{children:Object(s.jsx)(E.a,{store:y,children:Object(s.jsx)($,{})})}),document.getElementById("root")),n()}},[[47,1,2]]]);
//# sourceMappingURL=main.2e270be6.chunk.js.map