(this.webpackJsonpcompany_repo_finder=this.webpackJsonpcompany_repo_finder||[]).push([[0],{22:function(e,t,n){e.exports=n(32)},27:function(e,t,n){},28:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),o=n.n(c),i=(n(27),n(1)),m=n(2),s=n(3),l=n(4),u=(n(28),n(12)),p=function(e){return r.a.createElement("div",{id:"cc"},r.a.createElement("div",{id:"commit-card"},r.a.createElement("p",{id:"commit-user"},r.a.createElement(u.a,{size:"15"})," ",e.commit.commit.author.name),r.a.createElement("p",{id:"date"}," ",function(e){var t=e.commit.commit.committer.date.slice(0,4),n=e.commit.commit.committer.date.slice(5,7),a=e.commit.commit.committer.date.slice(8,10);return n<10&&(n=n=e.commit.commit.committer.date[6]),"".concat(n,"/").concat(a,"/").concat(t)}(e))),r.a.createElement("p",{id:"message"}," ",e.commit.commit.message),r.a.createElement("p",null,e.commit.sha))},h=function(e){return r.a.createElement(r.a.Fragment,null,function(e){return e.commits.map((function(e){return r.a.createElement(p,{commit:e})}))}(e))},d=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={commits:[],clicked:!1},e}return Object(m.a)(n,[{key:"getTheCommits",value:function(e,t){var n=this,a="https://api.github.com/repos/".concat(e,"/").concat(t,"/commits");fetch(a).then((function(e){return e.json()})).then((function(e){return n.setState({commits:e,clicked:!n.state.clicked})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"repo-card"},r.a.createElement("div",{id:"logo"},r.a.createElement("h2",null,this.props.repo.name),r.a.createElement("img",{id:"avatar",alt:"logo for the company",src:this.props.repo.owner.avatar_url})),r.a.createElement("div",{id:"language"},r.a.createElement("span",null,"\u25cb ",this.props.repo.language),r.a.createElement("span",null,"\u2606 ",this.props.repo.stargazers_count)),r.a.createElement("p",null,"Description: ",this.props.repo.description),r.a.createElement("button",{id:"repo-button",onClick:function(){return e.getTheCommits(e.props.company,e.props.repo.name)}},!1===this.state.clicked?"See Recent Commits":"Close"),!0===this.state.clicked?r.a.createElement(h,{commits:this.state.commits}):null))}}]),n}(a.Component),f=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,e.props.repos.sort((function(e,t){return t.stargazers_count-e.stargazers_count})).map((function(t){return r.a.createElement(d,{repo:t,company:e.props.company})}))))}}]),n}(a.Component),E=n(8),v=function(){return r.a.createElement("div",{id:"fetch"},r.a.createElement("h1",null,"Enter a company and wait while we get those repos. ",r.a.createElement(E.a,{size:"100"})))},g=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={company:"",companyResp:{},repos:[],show:!1},e.changeCompany=function(t){var n=t.target.value;e.setState({company:n})},e}return Object(m.a)(n,[{key:"fetchTheRepos",value:function(e){var t=this;e.preventDefault(),fetch("https://api.github.com/orgs/".concat(this.state.company,"/repos")).then((function(e){return e.json()})).then((function(e){t.setState({repos:e})})),this.setState({show:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"main"},r.a.createElement("div",{id:"header"},r.a.createElement("div",{id:"netflix-title"},"Github ".concat(this.state.company," Repos")," ",r.a.createElement(E.a,{size:"40"}))),r.a.createElement("form",{id:"form",onSubmit:function(t){return e.fetchTheRepos(t)}},r.a.createElement("label",{for:"fname"},"Enter a Company Name: "),r.a.createElement("input",{onChange:this.changeCompany,value:this.state.company}),r.a.createElement("button",{id:"search"},"Search"),r.a.createElement("p",null,'Hint: Enter full company name without spaces, ie. "jpmorganchase" ')),0!==this.state.repos.length?r.a.createElement(f,{company:this.state.company,repos:this.state.repos}):r.a.createElement(v,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.d6a9b14c.chunk.js.map