(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{40:function(e,t,n){e.exports=n(74)},45:function(e,t,n){},46:function(e,t,n){},64:function(e,t,n){},70:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(33),i=n.n(r),l=(n(45),n(5)),c=n(10),o=n(13),u=n(11),h=n(12),m=(n(46),n(16)),g=n(18),v=n.n(g),p=function e(){var t=this;Object(l.a)(this,e),this.signup=function(e){var n=e.username,a=e.password;return t.service.post("/signup",{username:n,password:a}).then((function(e){return e.data}))},this.login=function(e){var n=e.username,a=e.password;return t.service.post("/login",{username:n,password:a}).then((function(e){return e.data}))},this.logout=function(){return t.service.post("/logout").then((function(e){return e.data}))},this.loggedin=function(){return t.service.get("/loggedin").then((function(e){return e.data}))},this.service=v.a.create({baseURL:"".concat("https://suma-voluntariado.herokuapp.com/api","/auth"),withCredentials:!0})},d=n(35),f=n(8),E=(n(64),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleLogout=function(e){n.props.logout()},n.state={loggedInUser:null},n.authServices=new p,n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(d.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"render",value:function(){return this.state.loggedInUser?s.a.createElement("nav",{className:"navbar"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement("span",null,"+SUMA")),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("span",null,"Bienvenido, ",s.a.createElement(f.b,{className:"nav-links",to:"/profile"},this.state.loggedInUser.username))),s.a.createElement("li",null,s.a.createElement(f.b,{className:"nav-links",to:"/",onClick:this.handleLogout},"Logout")))):s.a.createElement("div",null,s.a.createElement("nav",{className:"navbar"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement("span",null,"+SUMA")),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(f.b,{className:"nav-links",to:"/signup"},"Reg\xedstrate")),s.a.createElement("li",null,s.a.createElement(f.b,{className:"nav-links",to:"/login"},"Inicia sesi\xf3n")))))}}]),t}(s.a.Component)),b=n(17),S=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,a=t.name,s=t.value;n.setState(Object(b.a)({},a,s))},n.handleSubmit=function(e){e.preventDefault(),n.postUser()},n.postUser=function(){n.authServices.signup(n.state).then((function(e){n.setState({username:"",password:""}),n.props.setUser(e)})).catch((function(e){n.setState({username:n.state.username,password:n.state.password,error:!0})}))},n.state={username:"",password:""},n.authServices=new p,n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Registro de usuarios"),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("label",null,"Usuario"),s.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange}),s.a.createElement("label",null,"Contrase\xf1a"),s.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),s.a.createElement("input",{type:"submit",value:"Registrarse"})),s.a.createElement("h1",null,this.state.error?"Error":""))}}]),t}(s.a.Component),w=n(76),U=n(77),O=(n(70),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,a=t.name,s=t.value;n.setState(Object(b.a)({},a,s))},n.handleSubmit=function(e){e.preventDefault(),n.postUser()},n.postUser=function(){n.authServices.login(n.state).then((function(e){console.log(e),n.setState({username:"",password:""}),n.props.setUser(e),n.props.history.push("/")})).catch((function(e){n.setState({username:n.state.username,password:n.state.password,error:!0})}))},n.state={username:"",password:""},n.authServices=new p,n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"loginPage"},s.a.createElement("div",{className:"loginForm"},s.a.createElement("h1",null,"\xa1Nos encanta que vuelvas!"),s.a.createElement(w.a,{onSubmit:this.handleSubmit},s.a.createElement(w.a.Group,{className:"formControl"},s.a.createElement(w.a.Label,null,"Usuario"),s.a.createElement(w.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,required:!0})),s.a.createElement(w.a.Group,{className:"formControl"},s.a.createElement(w.a.Label,null,"Contrase\xf1a"),s.a.createElement(w.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,required:!0})),s.a.createElement(U.a,{type:"submit"},"Iniciar sesi\xf3n")),s.a.createElement("span",{className:"linkSignUp"},"\xbfA\xfan no tienes una cuenta? ",s.a.createElement(f.b,{to:"/signup"},"Reg\xedstrate")),s.a.createElement("h1",null,this.state.error?"Error":"")))}}]),t}(s.a.Component)),j=n(39),C=function e(){var t=this;Object(l.a)(this,e),this.getAllActivities=function(){return t.service.get("/all").then((function(e){return e.data}))},this.getActivityDetails=function(e){return t.service.get("/".concat(e)).then((function(e){return e.data}))},this.createActivity=function(e){return t.service.post("/new",e).then((function(e){return e.data}))},this.service=v.a.create({baseURL:"".concat("https://suma-voluntariado.herokuapp.com/api","/activities"),withCredentials:!0})},A=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).getAllActivities=function(){var e=[];0===n.state.allActivities.length&&n.activitiesServices.getAllActivities().then((function(e){return n.setState({allActivities:e.allActivities})})).then(e=Object(j.a)(new Set(n.state.allActivities.map((function(e){return e.category}))))).then(n.setState({allCategories:e})).catch((function(e){return console.log(e)}))},n.componentDidMount=function(){return n.getAllActivities()},n.state={loggedInUser:null,allActivities:[],allCategories:[]},n.activitiesServices=new C,n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Est\xe1s en la Home"),this.state.allActivities.length?s.a.createElement("ul",null,this.state.allActivities.map((function(e){return s.a.createElement("li",null,s.a.createElement(f.b,{to:"/activities/".concat(e._id),key:e._id},e.title))}))):s.a.createElement("p",null,"CARGANDO..."))}}]),t}(s.a.Component),I=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){return n.fetchUser()},n.setUser=function(e){n.setState({loggedInUser:e})},n.logout=function(){n.authServices.logout().then((function(){n.setState({loggedInUser:null})}))},n.state={loggedInUser:null},n.authServices=new p,n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"fetchUser",value:function(){var e=this;return this.authServices.loggedin().then((function(t){e.setState({loggedInUser:t})})).catch((function(t){e.setState({loggedInUser:!1})}))}},{key:"render",value:function(){var e=this;return this.state.loggedInUser?s.a.createElement("div",{className:"App"},s.a.createElement(E,{userInSession:this.state.loggedInUser,logout:this.logout}),s.a.createElement(A,{userInSession:this.state.loggedInUser})):s.a.createElement("div",{className:"App"},s.a.createElement(E,{userInSession:this.state.loggedInUser,logout:this.logout}),s.a.createElement(m.c,null,s.a.createElement(m.a,{exact:!0,path:"/signup",render:function(){return s.a.createElement(S,{setUser:e.setUser})}}),s.a.createElement(m.a,{exact:!0,path:"/login",render:function(){return s.a.createElement(O,{setUser:e.setUser})}})))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(73);i.a.render(s.a.createElement(f.a,null,s.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.f512933d.chunk.js.map