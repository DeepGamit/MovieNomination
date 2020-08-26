(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/loading.26ef8bb4.gif"},54:function(e,t,a){e.exports=a(84)},59:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(9),r=a.n(o),l=(a(59),a(60),a(12)),c=a(13),s=a(16),m=a(15),u=a(89),d=a(88),p=a(87),h=a(47),v=a(42),g=a(48),f=a(11),E=a(86),b=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).handleOnClick=function(t){e.props.addNomination(e.props.movie)},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"displayMovie"},i.a.createElement("li",null,this.props.movie.Title," ("+this.props.movie.Year+")"),"\xa0\xa0\xa0",void 0===this.props.pageState.nominations.find((function(t){return t.imdbID===e.props.movie.imdbID}))?i.a.createElement(E.a,{variant:"light",size:"sm",onClick:this.handleOnClick},"Nominate"):i.a.createElement(E.a,{variant:"light",size:"sm",disabled:!0},"Nominate"))}}]),a}(n.Component),O=Object(f.b)((function(e){return{pageState:e.pageState}}),{addNomination:function(e){return function(t){t({type:"ADD_NOMINATION",payload:e})}}})(b),N=a(44),y=a.n(N),S=a(27),j=a.n(S),k=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).handleOnClick=function(t){e.props.deleteNomination(e.props.movie)},e}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"displayNomination"},i.a.createElement("li",null,this.props.movie.Title," ("+this.props.movie.Year+")"),"\xa0\xa0\xa0",i.a.createElement(E.a,{variant:"dark",size:"sm",onClick:this.handleOnClick},"Remove"))}}]),a}(n.Component),I=Object(f.b)((function(e){return{pageState:e.pageState}}),{deleteNomination:function(e){return function(t){t({type:"DELETE_NOMINATION",payload:e})}}})(k),w=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleOnChange=function(e){var t=e.target.value;""===t?n.setState({keyword:t,movies:[],error:"",isLoading:!1}):n.setState({keyword:t,isLoading:!0,error:""},(function(){n.fetchMovies(t)}))},n.fetchMovies=function(e){var t="https://www.omdbapi.com/?s=".concat(e,"&apikey=4646bbea");y.a.get(t).then((function(e){console.log(e),"True"===e.data.Response?n.setState({movies:e.data.Search,error:"",isLoading:!1}):n.setState({movies:[],error:e.data.Error,isLoading:!1})})).catch((function(e){console.log(e)}))},n.handleOnSubmit=function(e){e.preventDefault()},n.renderResult=function(){var e=n.state,t=e.movies,a=e.keyword,o=e.error;return void 0!==t?i.a.createElement("div",{className:"resultContainer"},i.a.createElement("h3",null,'Results for "',a,'"'),i.a.createElement("ul",null,t.map((function(e){return i.a.createElement(i.a.Fragment,{key:e.imdbID},i.a.createElement(O,{movie:e}))})))):"Too many results."===o?i.a.createElement("img",{src:j.a,alt:"loader"}):void 0},n.renderNomination=function(){var e=n.props.pageState.nominations;if(void 0!==e)return i.a.createElement("div",null,i.a.createElement("ul",null,e.map((function(e){return i.a.createElement(i.a.Fragment,{key:e.imdbID},i.a.createElement(I,{movie:e}))}))))},n.state={movies:[],error:"",keyword:"",isLoading:!1,showAlert:!1},n}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"searchContainer"},this.props.pageState.nominations.length>=5&&i.a.createElement(u.a,{variant:"warning"},i.a.createElement(u.a.Heading,null,"Alert Banner"),i.a.createElement("p",null,"You have nominated 5 Movies")),i.a.createElement(d.a,{onSubmit:this.handleOnSubmit},i.a.createElement(p.a,{className:"mb-4"},i.a.createElement(p.a.Prepend,null,i.a.createElement(p.a.Text,null,i.a.createElement(v.a,{icon:g.a}))),i.a.createElement(h.a,{type:"text",placeholder:"Movie Title",onChange:this.handleOnChange})))),i.a.createElement("div",{className:"comboContainer"},""!==this.state.keyword&&this.renderResult(),i.a.createElement("div",{className:"nominationContainer"},i.a.createElement("h3",null,"Your Nomination List"),this.props.pageState.nominations.length?this.renderNomination():i.a.createElement("div",null,i.a.createElement("p",null,"No movies added."),i.a.createElement("p",null,"Please search for the movie and add to your nomination list")))),this.state.error&&i.a.createElement("h3",{className:"message"},this.state.error),i.a.createElement("img",{src:j.a,className:"loading ".concat(this.state.isLoading?"show":"hide"),alt:"loading"}))}}]),a}(n.Component),C=Object(f.b)((function(e){return{pageState:e.pageState}}))(w);var D=function(){return i.a.createElement("div",{id:"main"},i.a.createElement("h1",null," The Shoppies"),i.a.createElement(C,null))},T=a(10),A=a(49),M=a(17),L=a(28),R={nominations:null===localStorage.getItem("nominations")?[]:JSON.parse(localStorage.getItem("nominations"))},J=Object(T.combineReducers)({pageState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_NOMINATION":var a=[].concat(Object(L.a)(e.nominations),[t.payload]);return localStorage.setItem("nominations",JSON.stringify(a)),Object(M.a)(Object(M.a)({},e),{},{nominations:[].concat(Object(L.a)(e.nominations),[t.payload])});case"DELETE_NOMINATION":var n=e.nominations.filter((function(e){return e.imdbID!==t.payload.imdbID}));return localStorage.setItem("nominations",JSON.stringify(n)),Object(M.a)(Object(M.a)({},e),{},{nominations:n});default:return e}}}),x=a(50),Y=[A.a],_=Object(T.createStore)(J,{},Object(x.composeWithDevTools)(T.applyMiddleware.apply(void 0,Y)));r.a.render(i.a.createElement(f.a,{store:_},i.a.createElement(D,null)),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.8d68b080.chunk.js.map