(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{157:function(e,t,a){},225:function(e,t,a){e.exports=a(463)},230:function(e,t,a){},231:function(e,t,a){},249:function(e,t,a){},256:function(e,t,a){},257:function(e,t,a){},258:function(e,t,a){},455:function(e,t,a){},456:function(e,t,a){},461:function(e,t,a){},463:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(37),c=a.n(i),l=(a(230),a(6)),s=a(8),o=a(10),u=a(9),m=a(11),h=(a(231),a(54)),d=a(40),p=a.n(d),g=function e(){var t=this;Object(l.a)(this,e),this.signup=function(e){var a=e.username,n=e.password,r=e.email,i=e.role;return t.service.post("/signup",{username:a,password:n,email:r,role:i}).then((function(e){return e.data}))},this.login=function(e){var a=e.username,n=e.password;return t.service.post("/login",{username:a,password:n}).then((function(e){return e.data}))},this.logout=function(){return t.service.post("/logout").then((function(e){return e.data}))},this.loggedin=function(){return t.service.get("/loggedin").then((function(e){return e.data}))},this.service=p.a.create({baseURL:"".concat("https://suma-voluntariado.herokuapp.com/api","/auth"),withCredentials:!0})},v=a(7),E=a(46),f=a(223),b=a(45),y=(a(249),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleLogout=function(e){a.props.logout()},a.authServices=new g,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.userInSession?r.a.createElement(E.a,{sticky:"top",bg:"light",expand:"lg"},r.a.createElement(E.a.Brand,{className:"navbar-brand"},r.a.createElement(v.b,{to:"/home"},r.a.createElement("img",{className:"navbar-logo",src:"https://res.cloudinary.com/yelpcampagb/image/upload/v1583620107/ironhack-project3/inemcz4pjwjcfqppheev.png",alt:"SUMA logo"}))),r.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(b.a,{className:"mr-auto"},r.a.createElement(b.a.Link,{as:v.b,to:"/home"},"Home"),r.a.createElement(b.a.Link,{as:v.b,to:"/categories"},"Categor\xedas"),r.a.createElement(b.a.Link,{as:v.b,to:"/activities"},"Actividades")),"organization"===this.props.userInSession.role?r.a.createElement(r.a.Fragment,null,r.a.createElement(v.b,{to:"/organizations/new",className:"navLink-create"},"Crear organizaci\xf3n"),r.a.createElement(v.b,{to:"/activities/new",className:"navLink-create"},"Crear actividad")):r.a.createElement("span",null),r.a.createElement(f.a,{className:"navbar-dropdown",alignRight:!0,title:this.props.userInSession.username},r.a.createElement(v.b,{to:"/users/".concat(this.props.userInSession._id),className:"navbar-userLink"},"Mi perfil"),r.a.createElement(v.b,{to:"/",onClick:this.handleLogout,className:"navbar-userLink"},"Logout")),r.a.createElement("span",{className:"navbar-avatar"},r.a.createElement("img",{src:this.props.userInSession.imgPath,alt:""})))):r.a.createElement(E.a,{sticky:"top",bg:"light",expand:"lg"},r.a.createElement(E.a.Brand,{className:"navbar-brand"},r.a.createElement(v.b,{to:"/"},r.a.createElement("img",{className:"navbar-logo",src:"https://res.cloudinary.com/yelpcampagb/image/upload/v1583620107/ironhack-project3/inemcz4pjwjcfqppheev.png",alt:"SUMA logo"}))),r.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(b.a,{className:"mr-auto"},r.a.createElement(b.a.Link,{as:v.b,to:"/"},"Home"),r.a.createElement(b.a.Link,{as:v.b,to:"/categories"},"Categor\xedas"),r.a.createElement(b.a.Link,{as:v.b,to:"/activities"},"Actividades")),r.a.createElement(v.b,{to:"/signup",className:"navLink"},"Reg\xedstrate"),r.a.createElement(v.b,{to:"/login",className:"navLink navLink-right"},"Inicia sesi\xf3n")))}}]),t}(r.a.Component)),w=a(69),C=a(59),O=a(24),j=(a(256),function(){return r.a.createElement(w.a,{fluid:!0},r.a.createElement(C.a,{className:"footer"},r.a.createElement(O.a,null,r.a.createElement("img",{src:"https://res.cloudinary.com/yelpcampagb/image/upload/v1583620107/ironhack-project3/inemcz4pjwjcfqppheev.png",alt:""})),r.a.createElement(O.a,{xs:6},r.a.createElement(v.b,{to:"#"},"Qui\xe9nes somos"),r.a.createElement(v.b,{to:"#"},"Preguntas frecuentes"),r.a.createElement(v.b,{to:"#"},"Contacto")),r.a.createElement(O.a,null,"Social")))}),S=a(43),A=a(465),k=a(52),N=(a(157),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(S.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault(),a.postUser()},a.postUser=function(){a.authServices.signup(a.state).then((function(e){a.setState({username:"",password:""}),a.props.setUser(e)})).catch((function(e){a.setState({username:a.state.username,password:a.state.password,error:!0})}))},a.state={username:"",password:"",email:"",role:""},a.authServices=new g,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(w.a,{fluid:!0},r.a.createElement(C.a,null,r.a.createElement(O.a,{xs:{span:3,offset:2},className:"signupForm"},r.a.createElement("h1",null,"\xa1\xdanete y suma!"),r.a.createElement(A.a,{onSubmit:this.handleSubmit},r.a.createElement(A.a.Group,null,r.a.createElement(A.a.Label,null,"Soy:"),r.a.createElement(A.a.Control,{as:"select",name:"role",onChange:this.handleChange,required:!0},r.a.createElement("option",{value:"volunteer"},"Voluntario"),r.a.createElement("option",{value:"organization"},"Organizaci\xf3n"))),r.a.createElement(A.a.Group,null,r.a.createElement(A.a.Label,null,"Email:"),r.a.createElement(A.a.Control,{type:"email",name:"email",value:this.state.email,onChange:this.handleChange,required:!0})),r.a.createElement(A.a.Group,null,r.a.createElement(A.a.Label,null,"Usuario:"),r.a.createElement(A.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,required:!0})),r.a.createElement(A.a.Group,null,r.a.createElement(A.a.Label,null,"Contrase\xf1a:"),r.a.createElement(A.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,required:!0})),r.a.createElement(A.a.Group,{className:"signupBtn"},r.a.createElement(k.a,{type:"submit"},"Registrarse"))),r.a.createElement("div",{className:"loginLnk"},r.a.createElement("span",null,"\xbfYa tienes una cuenta? ",r.a.createElement(v.b,{to:"/login"},"Inicia sesi\xf3n")),r.a.createElement("h1",null,this.state.error?"Error":""))),r.a.createElement(O.a,{xs:{span:5,offset:2}},r.a.createElement("img",{className:"loginImg",src:"https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",alt:""}))))}}]),t}(r.a.Component)),U=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(S.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault(),a.postUser()},a.postUser=function(){a.authServices.login(a.state).then((function(e){a.setState({username:"",password:""},(function(){a.props.setUser(e)}))})).catch((function(e){a.setState({username:a.state.username,password:a.state.password,error:!0})}))},a.state={username:"",password:""},a.authServices=new g,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(w.a,{fluid:!0},r.a.createElement(C.a,null,r.a.createElement(O.a,{xs:{span:3,offset:2},className:"loginForm"},r.a.createElement("h1",null,"\xa1Nos encanta que vuelvas!"),r.a.createElement(A.a,{onSubmit:this.handleSubmit},r.a.createElement(A.a.Group,null,r.a.createElement(A.a.Label,null,"Usuario:"),r.a.createElement(A.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,required:!0})),r.a.createElement(A.a.Group,null,r.a.createElement(A.a.Label,null,"Contrase\xf1a:"),r.a.createElement(A.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,required:!0})),r.a.createElement(A.a.Group,{className:"loginBtn"},r.a.createElement(k.a,{type:"submit"},"Iniciar sesi\xf3n"))),r.a.createElement("div",{className:"signupLnk"},r.a.createElement("span",{className:"lnk"},"\xbfA\xfan no tienes una cuenta? ",r.a.createElement(v.b,{to:"/signup"},"Reg\xedstrate")),r.a.createElement("h1",null,this.state.error?"Error":""))),r.a.createElement(O.a,{xs:{span:5,offset:2}},r.a.createElement("img",{className:"loginImg",src:"https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",alt:""}))))}}]),t}(r.a.Component),x=a(143),z=a(112),L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({searchTerm:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.setState({redirect:"/activities/search/".concat(a.state.searchTerm)})},a.state={searchTerm:"",redirect:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement(h.a,{to:this.state.redirect}):r.a.createElement(x.a,{className:"mb-3"},r.a.createElement(z.a,{type:"text",name:"query",value:this.state.searchTerm,onChange:this.handleChange,placeholder:"Busca tu actividad de voluntariado"}),r.a.createElement(x.a.Append,null,r.a.createElement(k.a,{type:"submit",variant:"outline-secondary",onClick:function(t){return e.handleSubmit(t)}},"Buscar")))}}]),t}(r.a.Component),I=function(e){function t(e){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(L,null)}}]),t}(r.a.Component),P=a(224),D=a(70),q=function e(){var t=this;Object(l.a)(this,e),this.getAllActivities=function(){return t.service.get("/all").then((function(e){return e.data}))},this.getActivitiesByTerm=function(e){return t.service.get("/search/".concat(e)).then((function(e){return e.data}))},this.getActivityDetails=function(e){return t.service.get("/".concat(e)).then((function(e){return e.data}))},this.getActivitiesByCategory=function(e){return t.service.get("/categories/".concat(e)).then((function(e){return e.data}))},this.createActivity=function(e){return t.service.post("/new",e).then((function(e){return e.data}))},this.updateActivity=function(e,a){return t.service.put("/".concat(e),a).then((function(e){return e.data}))},this.addParticipant=function(e,a){return t.service.put("/".concat(e,"/participants/add"),a).then((function(e){return e.data}))},this.service=p.a.create({baseURL:"".concat("https://suma-voluntariado.herokuapp.com/api","/activities"),withCredentials:!0})},M=a(74),F=(a(257),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.category;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{className:"categoryCard"},r.a.createElement(M.a.Img,{variant:"top",src:e.imgPath}),r.a.createElement(M.a.Body,null,r.a.createElement(M.a.Title,null,e.name.charAt(0).toUpperCase()+e.name.slice(1)),r.a.createElement(M.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),r.a.createElement(v.b,{to:"/categories/".concat(e.name)},r.a.createElement(k.a,{variant:"primary"},"Ver actividades")))))}}]),t}(r.a.Component)),R=(a(258),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getAllActivities=function(){0===a.state.allActivities.length&&a.activitiesServices.getAllActivities().then((function(e){var t=Object(P.a)(new Set(e.map((function(e){return JSON.stringify(e.category)})))).map((function(e){return JSON.parse(e)}));a.setState({allActivities:e,allCategories:t})})).catch((function(e){return console.log(e)}))},a.componentDidMount=function(){a.getAllActivities()},a.state={loggedInUser:null,allActivities:[],allCategories:[]},a.activitiesServices=new q,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(w.a,null,r.a.createElement("h1",null,"Voluntariado por categor\xedas"),this.state.allCategories.length?r.a.createElement("div",{className:"categoryList"},this.state.allCategories.map((function(e,t){return r.a.createElement(F,{key:t,category:e})}))):r.a.createElement(D.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Cargando...")))}}]),t}(r.a.Component)),B=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getActivitiesByCategory=function(){0===a.state.activities.length&&a.activitiesServices.getActivitiesByCategory(a.props.match.params.name).then((function(e){return a.setState({activities:e})})).catch((function(e){return console.log(e)}))},a.componentDidMount=function(){a.getActivitiesByCategory()},a.state={activities:[]},a.activitiesServices=new q,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.match.params.name;return r.a.createElement("div",null,r.a.createElement("h1",null,"Actividades por categor\xeda: ",e.charAt(0).toUpperCase()+e.slice(1)),this.state.activities.length?r.a.createElement("div",{className:"activitiesList"},this.state.activities.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(v.b,{to:"/activities/details/".concat(e._id),key:t},e.title))}))):r.a.createElement(D.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Cargando...")))}}]),t}(r.a.Component),G=a(218),T=a.n(G),_=a(221),H=function e(){var t=this;Object(l.a)(this,e),this.getAllUsers=function(){return t.service.get("/all").then((function(e){return e.data}))},this.getUserDetails=function(e){return t.service.get("/".concat(e)).then((function(e){return e.data}))},this.updateUser=function(e,a){return t.service.put("/".concat(e),a).then((function(e){return e.data}))},this.updateUserFav=function(e,a){return t.service.put("/".concat(e,"/favActivities/add"),a).then((function(e){return e.data}))},this.service=p.a.create({baseURL:"".concat("https://suma-voluntariado.herokuapp.com/api","/users"),withCredentials:!0})},W=a(73),J=a(145),Y=a.n(J);Y.a.setApiKey("AIzaSyAlNRGTWqFk5o74Z4HdZxIUsXF2DNL_-h8"),Y.a.enableDebug();var Z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).onInfoWindowClose=function(e){},a.state={mapPosition:{lat:a.props.center.lat,lng:a.props.center.lng},markerPosition:{lat:a.props.center.lat,lng:a.props.center.lng}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=Object(W.withScriptjs)(Object(W.withGoogleMap)((function(t){return r.a.createElement(W.GoogleMap,{google:e.props.google,defaultZoom:e.props.zoom,defaultCenter:{lat:e.state.mapPosition.lat,lng:e.state.mapPosition.lng}},r.a.createElement(W.Marker,{google:e.props.google,name:"",draggable:!1,position:{lat:e.state.markerPosition.lat,lng:e.state.markerPosition.lng}}),r.a.createElement(W.Marker,null))})));return void 0!==this.props.center.lat?r.a.createElement("div",null,r.a.createElement(t,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAlNRGTWqFk5o74Z4HdZxIUsXF2DNL_-h8&libraries=places",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:this.props.height}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})})):r.a.createElement("div",{style:{height:this.props.height}})}}]),t}(r.a.Component),V=(a(455),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){a.getSpecificActivity()},a.getSpecificActivity=function(){a.state.specificActivity||a.activitiesServices.getActivityDetails(a.props.match.params.id).then((function(e){return a.setState({specificActivity:e},(function(){a.userIsParticipant(),a.activityIsFav()}))})).catch((function(e){return console.log(e)}))},a.userIsParticipant=function(){var e=!1;e=void 0!==a.state.specificActivity.participants.find((function(e){return e._id===a.props.loggedInUser._id})),a.setState({userIsParticipant:e})},a.activityIsFav=function(){var e=!1;e=void 0!==a.props.loggedInUser.favActivities.find((function(e){return e===a.state.specificActivity._id})),a.setState({activityIsFav:e})},a.addActivityToFav=function(){a.usersServices.updateUserFav(a.props.loggedInUser._id,{favActivities:a.state.specificActivity._id}).then((function(){return a.setState({activityIsFav:!0})})).catch((function(e){return console.log(e)}))},a.addParticipant=function(){a.activitiesServices.addParticipant(a.state.specificActivity._id,{newParticipant:a.props.loggedInUser._id}).then((function(e){return a.setState({specificActivity:e,userIsParticipant:!0})})).catch((function(e){return console.log(e)}))},a.state={specificActivity:null},a.activitiesServices=new q,a.usersServices=new H,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.specificActivity;return r.a.createElement("div",null,this.state.specificActivity?r.a.createElement(w.a,{className:"activityDetails"},r.a.createElement(C.a,{className:"activityDetails-mainInfo"},r.a.createElement(O.a,{xs:8,className:"leftSide"},r.a.createElement("h1",null,this.state.specificActivity.title),r.a.createElement("h5",{className:"activityDetails-category"},"Categor\xeda: ",r.a.createElement(_.a,{pill:!0,variant:"info"},e.category.name)),r.a.createElement("div",{className:"activityDetails-activityImg"},r.a.createElement("img",{src:e.imgPath,alt:"imagen de la actividad",className:"activityDetails-img"})),r.a.createElement("h5",null,"Descripci\xf3n de la actividad:"),r.a.createElement("p",null,e.description),r.a.createElement("h5",null,"Requerimientos:"),r.a.createElement("p",null,e.requirements)),r.a.createElement(O.a,{className:"rightSide"},r.a.createElement("img",{src:e.organization.imgPath,alt:"logo de ".concat(e.organization.name),className:"activityDetails-logo"}),r.a.createElement("div",null,r.a.createElement("h5",{className:"activityDetails-organization"},r.a.createElement("strong",null,e.organization.name)),r.a.createElement("h5",null,"Fechas y horas de la actividad:"),r.a.createElement("ul",null,e.dates.map((function(t,a){return r.a.createElement("li",{key:a},T()(t).format("DD/MM/YYYY")," - ",e.time)})))),r.a.createElement("div",null,r.a.createElement("h5",null,"M\xedn. participantes: ",e.minParticipants),r.a.createElement("h5",null,"M\xe1x. participantes: ",e.maxParticipants),r.a.createElement("h5",null,"Plazas vacantes: ",e.maxParticipants-e.participants.length)))),r.a.createElement(C.a,{className:"activityDetails-buttons"},r.a.createElement(O.a,{xs:1},this.state.activityIsFav?r.a.createElement("button",{variant:"light",className:"activityDetails-addFavButton ".concat(this.state.activityIsFav?"disabled":""),onClick:this.addActivityToFav,disabled:!0},"\u2665"):r.a.createElement("button",{className:"activityDetails-addFavButton",onClick:this.addActivityToFav},"\u2661")),r.a.createElement(O.a,null,this.state.userIsParticipant?r.a.createElement("span",{className:"activityDetails-alreadyParticipant"},"Est\xe1s apuntado a esta actividad"):r.a.createElement(k.a,{onClick:this.addParticipant},"\xa1Me apunto!")),r.a.createElement(O.a,{xs:4,className:"activityDetails-share"},r.a.createElement("h6",null,"Comp\xe1rtelo:"),r.a.createElement("span",null,r.a.createElement("iframe",{src:"https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Flocalhost%3A3000%2Factivities%2F5e6401261068a419c58a5fc7&layout=button&size=large&width=103&height=28&appId",width:"103",height:"28",style:{border:"none",overflow:"hidden"},scrolling:"no",allow:"encrypted-media"})),r.a.createElement("span",null,r.a.createElement("a",{href:"https://twitter.com/share?ref_src=twsrc%5Etfw",className:"twitter-share-button","data-size":"large","data-lang":"es","data-show-count":"false"},r.a.createElement("img",{src:"https://res.cloudinary.com/yelpcampagb/image/upload/v1583674364/ironhack-project3/ery9xhqd2w0efipacfkw.png",alt:"twiteer button"})),r.a.createElement("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charSet:"utf-8"})))),r.a.createElement(C.a,{className:"activityDetails-participants"},r.a.createElement(O.a,null,r.a.createElement("h6",null,"Participantes:"),e.participants.map((function(e,t){return r.a.createElement(v.b,{to:"/users/".concat(e._id),className:"activityDetails-partipant",key:t},r.a.createElement("img",{src:e.imgPath,alt:"user image"}),e.username)})))),r.a.createElement(C.a,{className:"activityDetails-map"},r.a.createElement(O.a,null,r.a.createElement("h5",null,r.a.createElement("strong",null,"Lugar:")," ",e.location),r.a.createElement(Z,{google:this.props.google,center:{lat:e.coord.lat,lng:e.coord.lng},height:"300px",zoom:15})))):r.a.createElement(D.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Cargando...")))}}]),t}(r.a.Component)),Q=a(60),X=a(33),K=function e(){var t=this;Object(l.a)(this,e),this.getAllOrganizations=function(){return t.service.get("/all").then((function(e){return e.data}))},this.getOrganizationDetails=function(e){return t.service.get("/".concat(e)).then((function(e){return e.data}))},this.getOrganizationByUser=function(e){return t.service.get("/createdByUser/".concat(e)).then((function(e){return e.data}))},this.createOrganization=function(e){return t.service.post("/new",e).then((function(e){return e.data}))},this.service=p.a.create({baseURL:"".concat("https://suma-voluntariado.herokuapp.com/api","/organizations"),withCredentials:!0})},$=function e(){var t=this;Object(l.a)(this,e),this.handleUpload=function(e){return t.service.post("/upload",e).then((function(e){return e.data}))},this.service=p.a.create({baseURL:"".concat("https://suma-voluntariado.herokuapp.com/api","/files"),withCredentials:!0})},ee=(a(456),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState({newOrganization:Object(Q.a)({},a.state.newOrganization,Object(S.a)({},n,r))})},a.handleFileUpload=function(e){var t=new FormData;t.append("imgPath",e.target.files[0]),a.filesServices.handleUpload(t).then((function(e){console.log("Subida de archivo finalizada! La URL de Cloudinary es: ",e.secure_url),a.setState({newOrganization:Object(Q.a)({},a.state.newOrganization,{imgPath:e.secure_url})})})).catch((function(e){return console.log(e)}))},a.handleSubmit=function(e){e.preventDefault(),a.createOrganization()},a.closeModal=function(){return a.setState({showModal:!1})},a.openModal=function(){return a.setState({showModal:!0})},a.state={newOrganization:{name:"",address:"",email:"",webpage:"",phone:"",description:"",imgPath:"",user:a.props.loggedInUser._id},showModal:!1},a.organizationsServices=new K,a.filesServices=new $,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"createOrganization",value:function(){var e=this;this.organizationsServices.createOrganization(this.state.newOrganization).then((function(){return e.setState({newOrganization:{name:"",address:"",email:"",webpage:"",phone:"",description:"",imgPath:""},showModal:!0})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(w.a,{className:"newOrganization"},r.a.createElement("h1",null,"Da de alta tu organizaci\xf3n:"),r.a.createElement(A.a,{onSubmit:this.handleSubmit},r.a.createElement(A.a.Row,null,r.a.createElement(A.a.Group,{as:O.a},r.a.createElement(A.a.Label,null,"Nombre:"),r.a.createElement(A.a.Control,{type:"text",name:"name",value:this.state.newOrganization.name,onChange:this.handleChange,placeholder:"",required:!0}))),r.a.createElement(A.a.Group,null,r.a.createElement(A.a.Label,null,"Direcci\xf3n:"),r.a.createElement(A.a.Control,{type:"text",name:"address",value:this.state.newOrganization.address,onChange:this.handleChange,placeholder:"",required:!0})),r.a.createElement(A.a.Row,null,r.a.createElement(A.a.Group,{as:O.a},r.a.createElement(A.a.Label,null,"Email:"),r.a.createElement(A.a.Control,{type:"email",name:"email",value:this.state.newOrganization.email,onChange:this.handleChange,placeholder:"",required:!0})),r.a.createElement(A.a.Group,{as:O.a},r.a.createElement(A.a.Label,null,"P\xe1gina web:"),r.a.createElement(A.a.Control,{type:"text",name:"webpage",value:this.state.newOrganization.webpage,onChange:this.handleChange,placeholder:""})),r.a.createElement(A.a.Group,{as:O.a},r.a.createElement(A.a.Label,null,"Tel\xe9fono:"),r.a.createElement(A.a.Control,{name:"phone",value:this.state.newOrganization.phone,onChange:this.handleChange,required:!0}))),r.a.createElement(A.a.Row,null,r.a.createElement(A.a.Group,{as:O.a},r.a.createElement(A.a.Label,null,"Descripci\xf3n:"),r.a.createElement(A.a.Control,{as:"textarea",rows:"6",name:"description",value:this.state.newOrganization.description,onChange:this.handleChange,required:!0}))),r.a.createElement(A.a.Row,null,r.a.createElement(A.a.Group,{as:O.a},r.a.createElement(A.a.Label,null,"Imagen o logo de la organizaci\xf3n:"),r.a.createElement(A.a.Control,{type:"file",name:"imgPath",onChange:this.handleFileUpload})),r.a.createElement("div",{as:O.a,className:"formButton"},r.a.createElement(k.a,{variant:"primary",type:"submit"},"Crear organizaci\xf3n")))),r.a.createElement("div",{className:"imgPreview"},r.a.createElement("img",{src:this.state.newOrganization.imgPath,alt:""})),r.a.createElement(X.a,{show:this.state.showModal,onHide:this.closeModal},r.a.createElement(X.a.Header,{closeButton:!0},r.a.createElement(X.a.Title,null,"Organizaci\xf3n creada")),r.a.createElement(X.a.Body,null,"Tu organizaci\xf3n ya est\xe1 dada de alta. Ahora puedes empezar a crear las actividades."),r.a.createElement(X.a.Footer,null,r.a.createElement(k.a,{variant:"secondary",onClick:this.closeModal},"Cerrar"))))}}]),t}(r.a.Component)),te=a(115),ae=a.n(te),ne=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({location:e})},a.handleSelect=function(e){Object(te.geocodeByAddress)(e).then((function(e){return Object(te.getLatLng)(e[0])})).then((function(t){return a.setState({location:e,coord:{lat:t.lat,lng:t.lng}},(function(){return a.props.selectLocation(a.state)}))})).catch((function(e){return console.error("Error",e)}))},a.state={location:"",coord:{lat:"",lng:""}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(ae.a,{value:this.state.location,onChange:this.handleChange,onSelect:this.handleSelect},(function(e){var t=e.getInputProps,a=e.suggestions,n=e.getSuggestionItemProps,i=e.loading;return r.a.createElement("div",null,r.a.createElement(A.a.Control,Object.assign({type:"text",name:"location"},t({placeholder:"Busca la direcci\xf3n",className:"location-search-input"}))),r.a.createElement("div",{className:"autocomplete-dropdown-container"},i&&r.a.createElement("div",null,"Cargando..."),a.map((function(e){var t=e.active?"suggestion-item--active":"suggestion-item",a=e.active?{backgroundColor:"rgb(234, 242, 255)",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return r.a.createElement("div",n(e,{className:t,style:a}),r.a.createElement("span",null,e.description))}))))}))}}]),t}(r.a.Component),re=(a(461),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){return a.fetchOrganization()},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState({newActivity:Object(Q.a)({},a.state.newActivity,Object(S.a)({},n,r))})},a.handleFileUpload=function(e){var t=new FormData;t.append("imgPath",e.target.files[0]),a.filesServices.handleUpload(t).then((function(e){console.log("Subida de archivo finalizada! La URL de Cloudinary es: ",e.secure_url),a.setState({newActivity:Object(Q.a)({},a.state.newActivity,{imgPath:e.secure_url})})})).catch((function(e){return console.log(e)}))},a.handleSubmit=function(e){e.preventDefault(),a.createActivity()},a.updateStateWithLocation=function(e){a.setState({newActivity:Object(Q.a)({},a.state.newActivity,{location:e.location,coord:{lat:e.coord.lat,lng:e.coord.lng}})})},a.closeModal=function(){return a.setState({showModal:!1})},a.openModal=function(){return a.setState({showModal:!0})},a.state={newActivity:{title:"",category:"",description:"",dates:"",time:"",location:"",coord:{lat:null,lng:null},minParticipants:"",maxParticipants:"",requirements:"",imgPath:"",organization:""},userOrganization:"",showModal:!1},a.activitiesServices=new q,a.organizationsServices=new K,a.filesServices=new $,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"fetchOrganization",value:function(){var e=this;this.organizationsServices.getOrganizationByUser(this.props.loggedInUser._id).then((function(t){return e.setState({newActivity:{organization:t[0]._id},userOrganization:t[0]})})).catch((function(e){return console.log(e)}))}},{key:"createActivity",value:function(){var e=this;this.activitiesServices.createActivity(this.state.newActivity).then((function(){return e.setState({newActivity:{title:"",category:"",description:"",date:"",time:"",location:"",minParticipants:"",maxParticipants:"",requirements:"",imgPath:"",organization:""},showModal:!0})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement(w.a,{className:"newActivity"},r.a.createElement("h1",null,"Da de alta una actividad:"),r.a.createElement(A.a,{onSubmit:this.handleSubmit},r.a.createElement(A.a.Row,null,r.a.createElement(A.a.Group,{as:O.a,xs:7},r.a.createElement(A.a.Label,null,"T\xedtulo:"),r.a.createElement(A.a.Control,{type:"text",name:"title",value:this.state.newActivity.title,onChange:this.handleChange,placeholder:"",required:!0})),r.a.createElement(A.a.Group,{as:O.a,xs:5},r.a.createElement(A.a.Label,null,"Organizaci\xf3n:"),r.a.createElement(A.a.Control,{name:"organization",value:this.state.userOrganization.name,disabled:!0}))),r.a.createElement(A.a.Row,null,r.a.createElement(A.a.Group,{as:O.a,xs:4},r.a.createElement(A.a.Label,null,"Categor\xeda:"),r.a.createElement(A.a.Control,{as:"select",name:"category",value:this.state.newActivity.category,onChange:this.handleChange,required:!0},r.a.createElement("option",{value:"",disabled:!0,defaultValue:!0},"Selecciona una categor\xeda"),r.a.createElement("option",{value:"ambiental"},"Ambiental"),r.a.createElement("option",{value:"comunitario"},"Comunitario"),r.a.createElement("option",{value:"cultural"},"Cultural"),r.a.createElement("option",{value:"deportivo"},"Deportivo"),r.a.createElement("option",{value:"educativo"},"Educativo"),r.a.createElement("option",{value:"ocio y tiempo libre"},"Ocio y tiempo libre"),r.a.createElement("option",{value:"proteccion civil"},"Protecci\xf3n civil"),r.a.createElement("option",{value:"social"},"Social"),r.a.createElement("option",{value:"socio-sanitario"},"Socio-sanitario"),r.a.createElement("option",{value:"otro"},"Otro"))),r.a.createElement(A.a.Group,{as:O.a,xs:4},r.a.createElement(A.a.Label,null,"Fecha:"),r.a.createElement(A.a.Control,{type:"date",name:"dates",value:this.state.newActivity.dates,onChange:this.handleChange,placeholder:"",required:!0})),r.a.createElement(A.a.Group,{as:O.a,xs:4},r.a.createElement(A.a.Label,null,"Hora:"),r.a.createElement(A.a.Control,{type:"text",name:"time",value:this.state.newActivity.time,onChange:this.handleChange,placeholder:"10:00 h - 13:00 h"}))),r.a.createElement(A.a.Row,null,r.a.createElement(A.a.Group,{as:O.a,xs:6},r.a.createElement(A.a.Label,null,"Descripci\xf3n:"),r.a.createElement(A.a.Control,{as:"textarea",rows:"5",name:"description",value:this.state.newActivity.description,onChange:this.handleChange,placeholder:"Indica aqu\xed la descripci\xf3n de la actividad, en qu\xe9 consiste y todos aquellos datos que sean de inter\xe9s",required:!0})),r.a.createElement(A.a.Group,{as:O.a,xs:6},r.a.createElement(A.a.Label,null,"Requerimientos:"),r.a.createElement(A.a.Control,{as:"textarea",rows:"5",name:"requirements",value:this.state.newActivity.requirements,onChange:this.handleChange,placeholder:"Indica aqu\xed los requerimientos necesarios para poder ejercer como voluntario en esta actividad",required:!0}))),r.a.createElement(A.a.Row,null,r.a.createElement(A.a.Group,{as:O.a,xs:12},r.a.createElement(A.a.Label,null,"Ubicaci\xf3n:"),r.a.createElement(ne,{selectLocation:function(t){return e.updateStateWithLocation(t)}}))),r.a.createElement(A.a.Row,null,r.a.createElement(A.a.Group,{as:O.a,xs:3},r.a.createElement(A.a.Label,null,"N\xfamero m\xednimo de participantes:"),r.a.createElement(A.a.Control,{type:"number",min:"1",max:"100",name:"minParticipants",value:this.state.newActivity.minParticipants,onChange:this.handleChange,required:!0})),r.a.createElement(A.a.Group,{as:O.a,xs:3},r.a.createElement(A.a.Label,null,"N\xfamero m\xe1ximo de participantes:"),r.a.createElement(A.a.Control,{type:"number",min:"1",max:"100",name:"maxParticipants",value:this.state.newActivity.maxParticipants,onChange:this.handleChange,required:!0}))),r.a.createElement(A.a.Row,null,r.a.createElement(A.a.Group,{as:O.a},r.a.createElement(A.a.Label,null,"Imagen de la actividad:"),r.a.createElement(A.a.Control,{type:"file",name:"imgPath",onChange:this.handleFileUpload})),r.a.createElement("div",{as:O.a,className:"formButton"},r.a.createElement(k.a,{variant:"primary",type:"submit"},"Crear actividad")))),r.a.createElement("div",{className:"imgPreview"},r.a.createElement("img",{src:this.state.newActivity.imgPath,alt:""})),r.a.createElement(X.a,{show:this.state.showModal,onHide:this.closeModal},r.a.createElement(X.a.Header,{closeButton:!0},r.a.createElement(X.a.Title,null,"Actividad creada")),r.a.createElement(X.a.Body,null,"Tu actividad ya est\xe1 creada y lista para recibir voluntarios!"),r.a.createElement(X.a.Footer,null,r.a.createElement(k.a,{variant:"secondary",onClick:this.closeModal},"Cerrar"))))}}]),t}(r.a.Component)),ie=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){a.getSearchResults()},a.getSearchResults=function(){console.log(a.props),0===a.state.searchResult.length&&a.activitiesServices.getActivitiesByTerm(a.props.match.params.searchTerm).then((function(e){a.setState({searchResult:e})})).catch((function(e){return console.log(e)}))},a.state={searchResult:[]},a.activitiesServices=new q,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.searchResult?r.a.createElement("div",null,this.state.searchResult.map((function(e){return r.a.createElement("h1",null,"Holi")}))):r.a.createElement("h1",null,"Buscando...")}}]),t}(r.a.Component),ce=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){return a.fetchUser()},a.setUser=function(e){a.setState({loggedInUser:e})},a.logout=function(){a.authServices.logout().then((function(){a.setState({loggedInUser:null})}))},a.state={loggedInUser:null},a.authServices=new g,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"fetchUser",value:function(){var e=this;return this.authServices.loggedin().then((function(t){e.setState({loggedInUser:t})})).catch((function(t){e.setState({loggedInUser:!1})}))}},{key:"render",value:function(){var e=this,t=this.state.loggedInUser;return r.a.createElement("div",{className:"App"},r.a.createElement(y,{userInSession:this.state.loggedInUser,logout:this.logout}),t?r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{to:"/home"}),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/home",component:I}),r.a.createElement(h.b,{exact:!0,path:"/categories",render:function(){return r.a.createElement(R,e.state)}}),r.a.createElement(h.b,{exact:!0,path:"/categories/:name",render:function(e){return r.a.createElement(B,e)}}),r.a.createElement(h.b,{exact:!0,path:"/activities/details/:id",render:function(t){return r.a.createElement(V,Object.assign({},t,{loggedInUser:e.state.loggedInUser}))}}),r.a.createElement(h.b,{exact:!0,path:"/activities/search/:searchTerm",render:function(t){return r.a.createElement(ie,Object.assign({},t,{loggedInUser:e.state.loggedInUser}))}}),r.a.createElement(h.b,{exact:!0,path:"/organizations/new",render:function(t){return r.a.createElement(ee,Object.assign({},t,{loggedInUser:e.state.loggedInUser}))}}),r.a.createElement(h.b,{exact:!0,path:"/activities/new",render:function(t){return r.a.createElement(re,Object.assign({},t,{loggedInUser:e.state.loggedInUser}))}})),r.a.createElement(j,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(U,{setUser:function(t){return e.setUser(t)}})}}),r.a.createElement(h.b,{exact:!0,path:"/signup",render:function(){return r.a.createElement(N,{setUser:function(t){return e.setUser(t)}})}}),r.a.createElement(h.b,{exact:!0,path:"/home",component:I}),r.a.createElement(h.b,{exact:!0,path:"/categories",render:function(){return r.a.createElement(R,e.state)}}),r.a.createElement(h.b,{exact:!0,path:"/categories/:name",render:function(e){return r.a.createElement(B,e)}}),r.a.createElement(h.b,{exact:!0,path:"/activities/:id",render:function(t){return r.a.createElement(V,Object.assign({},t,{loggedInUser:e.state.loggedInUser}))}})),r.a.createElement(j,null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(462);c.a.render(r.a.createElement(v.a,null,r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[225,1,2]]]);
//# sourceMappingURL=main.078e4a9d.chunk.js.map