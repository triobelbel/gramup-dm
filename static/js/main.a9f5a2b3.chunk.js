(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(43)},31:function(e,t,n){},33:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(21),i=n.n(s),c=(n(31),n(1)),o=n.n(c),u=n(6),d=n(3),l=n(7),h=n(5),p=n(2),m=n(4),f=(n(33),n(9)),g=n.n(f),b=n(24),v=n(11),w=n(12),_=n(22),j=n(16),O=window.chrome,x=function(e){function t(e){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object(d.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,a))).status=e,n.message="InstagramError ".concat(e,": ").concat(a),n}return Object(m.a)(t,e),t}(Object(w.a)(Error)),k=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),t}(Object(w.a)(Error)),y=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),t}(Object(w.a)(Error)),E=new function e(){var t=this;Object(d.a)(this,e),this._currend_id="",this._instaweb_dev_id="jfeioppjmfoialcnpnecpgdajnionodc",this._instaweb_id="njonkbhnmmjgancfbncekpgkmidhbbpo",this.isStopped=!1,this.isConnected=!1,this._check_working_id=function(){return new Promise(function(e,n){setTimeout(function(){return n(new y("Cant find any working extension"))},500),O.runtime.sendMessage(t._instaweb_id,{method:"ping"},null,function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=n.status,r=n.pong;return"ok"===a&&r&&e(t._instaweb_id)}),O.runtime.sendMessage(t._instaweb_dev_id,{method:"ping"},null,function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=n.status,r=n.pong;return"ok"===a&&r&&e(t._instaweb_dev_id)})})},this.init=Object(u.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t._check_working_id();case 3:t._currend_id=e.sent,t.isConnected=!0,e.next=13;break;case 7:if(e.prev=7,e.t0=e.catch(0),!(e.t0 instanceof k)){e.next=12;break}return t.isConnected=!1,e.abrupt("return");case 12:throw e.t0;case 13:case"end":return e.stop()}},e,null,[[0,7]])})),this.start=function(){return t.isStopped=!1},this.kill=function(){return t.isStopped=!0},this.request=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new Promise(function(a,r){var s=!t.isStopped;return n&&!s&&t.start(),t.isStopped?r(new Error("Request was killed")):t.isConnected?(setTimeout(function(){return r(new k("Request timeout"))},1e4),console.log("send_message",t._currend_id,e),O.runtime.sendMessage(t._currend_id,e,null,function(t){if(!t)return r(new y);var n=t.status,s=t.error;console.log("request",e.method,"->",n,t),"ok"!==n?r(new x(n,s)):a(t)}),void(n&&!s&&t.kill())):r(new y)})},this.request_generator=function(){var e=Object(j.a)(o.a.mark(function e(t){var n,a,r,s,i,c,u,d=arguments;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.method,a=t.params,r=d.length>1&&void 0!==d[1]?d[1]:1/0,s=[],i=this.page_generator({method:n,params:a});case 4:return c=i.next(),u=c.users,console.log("users",u),s=[].concat(Object(v.a)(s),Object(v.a)(u)),e.next=9,u;case 9:if(!(e.sent||s.length>r)){e.next=12;break}return e.abrupt("return",s);case 12:e.next=4;break;case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.page_generator=function(){var e=Object(j.a)(o.a.mark(function e(t){var n,a,r,s,i,c,u,d;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.method,a=t.params,r=a;case 2:return s={method:n,params:r},e.next=5,Object(_.a)(this.request(s));case 5:return i=e.sent,c=i.big_list,u=i.next_max_id,d=Object(b.a)(i,["big_list","next_max_id"]),console.log("big_list",c,"next_max_id",u),e.next=12,d;case 12:if(!e.sent&&u){e.next=15;break}return e.abrupt("return");case 15:r=[].concat(Object(v.a)(a),[u]);case 16:e.next=2;break;case 17:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},T=function(){var e=Object(u.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E.request({method:"get_user_info",params:[t]},!0));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E.request({method:"get_inbox",params:[]},!0));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(u.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",{thread:null});case 2:return e.abrupt("return",E.request({method:"get_thread",params:[t]},!0));case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(u.a)(o.a.mark(function e(t,n){var a,r,s,i,c,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.thread,r=t.users,!(s=t.username)){e.next=7;break}return e.next=4,T(s);case 4:i=e.sent,c=i.user.pk,r=[c];case 7:return u=["text",{text:n,users:r,thread:a}],e.abrupt("return",E.request({method:"send_direct_item",params:u},!0));case 9:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),N=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.selectedThread,a=t.threads;return r.a.createElement("div",{className:"dialog-list"},r.a.createElement("div",{className:n?"dialog-list-item":"dialog-list-item active",onClick:function(){return e.props.selectThread()}},"New message"),a.map(function(t){return r.a.createElement("div",{key:t.thread_id,className:n&&t.thread_id===n.thread_id?"dialog-list-item active":"dialog-list-item",onClick:function(){return e.props.selectThread(t.thread_id)}},t.thread_title)}))}}]),t}(a.Component),q=n(15),L=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isTyping:!1,messages:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this,n=e.messages.map(function(e){return new q.Message({id:e.user_id===t.props.me?0:e.user_id,message:e.text||e.item_type})});console.log("me",this.props.me),this.setState({messages:n})}},{key:"render",value:function(){return this.props.isLoading?r.a.createElement("div",{className:"dialog"},r.a.createElement("h1",null,"Loading...")):r.a.createElement("div",null,r.a.createElement(q.ChatFeed,{messages:this.state.messages,isTyping:this.state.isTyping,showSenderName:!0,bubblesCentered:!1,bubbleStyles:{text:{fontSize:20},chatbubble:{borderRadius:30,padding:20}}}))}}]),t}(a.Component),R=n(23),A=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={isTyping:!1,text:"",username:""},n.sendMessageRef=r.a.createRef(),n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(R.a)({},a,r))},n.submitMessage=function(e){e.preventDefault();var t=n.state.text;if(t){var a=n.props.selectedThread;if(a)n.props.sendMessage({thread:a.thread_id},t),g()("reachGoal","dm-message-sent",{thread:a.thread_id});else{var r=n.state.username;n.props.sendMessage({username:r},t),g()("reachGoal","dm-message-sent",{username:r})}n.setState({text:""})}},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.selectedThread;return r.a.createElement("div",{className:"dialog-send-message"},r.a.createElement("form",{onSubmit:this.submitMessage},!e&&r.a.createElement(a.Fragment,null,r.a.createElement("input",{type:"text",name:"username",placeholder:"@username",onChange:this.handleChange,value:this.state.username})),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"text",className:"message-text",onChange:this.handleChange,value:this.state.text}),r.a.createElement("button",{onClick:this.submitMessage},"Send")))}}]),t}(a.Component),B=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={threads:[],messages:[],selectedThread:null,isLoading:!1,autoScroll:!0},n.messagesEnd=r.a.createRef(),n.scrollToBottom=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(n.state.autoScroll||e){var t=n.messagesEnd.current;t.parentNode.scrollTop=t.offsetTop}},n.loadThread=function(){var e=Object(u.a)(o.a.mark(function e(t){var a,r,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return n.setState({isLoading:!1,selectedThread:null,messages:[]}),e.abrupt("return");case 3:return n.setState({isLoading:!0}),e.next=6,C(t);case 6:a=e.sent,r=a.thread,s=r.items,console.log("messages",s),n.setState({isLoading:!1,selectedThread:r,messages:s.reverse()},function(){return n.scrollToBottom()});case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.sendMessage=function(){var e=Object(u.a)(o.a.mark(function e(t,a){var r,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),console.log("send dm",a),e.next=4,M(t,a);case 4:r=e.sent,"ok"!==(s=r.status)&&alert("Error sending: status="+s),console.log("status",s),t.thread&&n.loadThread(t.thread);case 9:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark(function e(){var t,n,a,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.init();case 2:return e.next=4,S();case 4:t=e.sent,n=t.viewer,a=t.inbox.threads,console.log("threads",a),r=n.pk,this.setState({me:r,threads:a});case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.me,n=e.isLoading,a=e.threads,s=e.selectedThread,i=e.messages;return r.a.createElement("div",{className:"App"},r.a.createElement(N,{threads:a,selectedThread:s,selectThread:this.loadThread}),r.a.createElement("div",{className:"dialog"},!!s&&r.a.createElement(L,{me:t,isLoading:n,selectedThread:s,messages:i}),r.a.createElement(A,{selectedThread:s,sendMessage:this.sendMessage}),r.a.createElement("div",{style:{float:"left",clear:"both"},ref:this.messagesEnd})),r.a.createElement(f.YMInitializer,{accounts:[53083903]}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.a9f5a2b3.chunk.js.map