(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(36)},29:function(e,t,n){},31:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(19),i=n.n(s),c=(n(29),n(2)),o=n.n(c),u=n(8),d=n(3),h=n(6),l=n(5),p=n(1),m=n(4),g=(n(31),n(22)),b=n(10),f=n(11),v=n(20),j=n(14),w=window.chrome,_=function(e){function t(e){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object(d.a)(this,t),(n=Object(l.a)(this,Object(p.a)(t).call(this,a))).status=e,n.message="InstagramError ".concat(e,": ").concat(a),n}return Object(m.a)(t,e),t}(Object(f.a)(Error)),O=function(e){function t(){return Object(d.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),t}(Object(f.a)(Error)),k=function(e){function t(){return Object(d.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),t}(Object(f.a)(Error)),x=new function e(){var t=this;Object(d.a)(this,e),this._currend_id="",this._instaweb_dev_id="jfeioppjmfoialcnpnecpgdajnionodc",this._instaweb_id="njonkbhnmmjgancfbncekpgkmidhbbpo",this.isStopped=!1,this.isConnected=!1,this._check_working_id=function(){return new Promise(function(e,n){setTimeout(function(){return n(new k("Cant find any working extension"))},500),w.runtime.sendMessage(t._instaweb_id,{method:"ping"},null,function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=n.status,r=n.pong;return"ok"===a&&r&&e(t._instaweb_id)}),w.runtime.sendMessage(t._instaweb_dev_id,{method:"ping"},null,function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=n.status,r=n.pong;return"ok"===a&&r&&e(t._instaweb_dev_id)})})},this.init=Object(u.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t._check_working_id();case 3:t._currend_id=e.sent,t.isConnected=!0,e.next=13;break;case 7:if(e.prev=7,e.t0=e.catch(0),!(e.t0 instanceof O)){e.next=12;break}return t.isConnected=!1,e.abrupt("return");case 12:throw e.t0;case 13:case"end":return e.stop()}},e,null,[[0,7]])})),this.start=function(){return t.isStopped=!1},this.kill=function(){return t.isStopped=!0},this.request=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new Promise(function(a,r){var s=!t.isStopped;return n&&!s&&t.start(),t.isStopped?r(new Error("Request was killed")):t.isConnected?(setTimeout(function(){return r(new O("Request timeout"))},1e4),console.log("send_message",t._currend_id,e),w.runtime.sendMessage(t._currend_id,e,null,function(t){if(!t)return r(new k);var n=t.status,s=t.error;console.log("request",e.method,"->",n,t),"ok"!==n?r(new _(n,s)):a(t)}),void(n&&!s&&t.kill())):r(new k)})},this.request_generator=function(){var e=Object(j.a)(o.a.mark(function e(t){var n,a,r,s,i,c,u,d=arguments;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.method,a=t.params,r=d.length>1&&void 0!==d[1]?d[1]:1/0,s=[],i=this.page_generator({method:n,params:a});case 4:return c=i.next(),u=c.users,console.log("users",u),s=[].concat(Object(b.a)(s),Object(b.a)(u)),e.next=9,u;case 9:if(!(e.sent||s.length>r)){e.next=12;break}return e.abrupt("return",s);case 12:e.next=4;break;case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.page_generator=function(){var e=Object(j.a)(o.a.mark(function e(t){var n,a,r,s,i,c,u,d;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.method,a=t.params,r=a;case 2:return s={method:n,params:r},e.next=5,Object(v.a)(this.request(s));case 5:return i=e.sent,c=i.big_list,u=i.next_max_id,d=Object(g.a)(i,["big_list","next_max_id"]),console.log("big_list",c,"next_max_id",u),e.next=12,d;case 12:if(!e.sent&&u){e.next=15;break}return e.abrupt("return");case 15:r=[].concat(Object(b.a)(a),[u]);case 16:e.next=2;break;case 17:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},y=function(e){function t(){return Object(d.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"dialog-list"},this.props.threads.map(function(t){return r.a.createElement("div",{key:t.thread_id,className:"dialog-list-item"},r.a.createElement("div",{onClick:function(){return e.props.selectThread(t)}},t.thread_title))}))}}]),t}(a.Component),T=n(13),E=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isTyping:!1,messages:[]},n}return Object(m.a)(t,e),Object(h.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.messages.map(function(e){return new T.Message({id:e.item_id,message:e.text||e.item_type,sender:e.user_id})});this.setState({messages:t})}},{key:"render",value:function(){return this.props.isLoading?r.a.createElement("div",{className:"dialog"},"Loading..."):r.a.createElement("div",null,r.a.createElement(T.ChatFeed,{messages:this.state.messages,isTyping:this.state.isTyping,showSenderName:!0,bubblesCentered:!1,bubbleStyles:{text:{fontSize:20},chatbubble:{borderRadius:30,padding:20}}}))}}]),t}(a.Component),C=n(21),S=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={isTyping:!1,text:""},n.sendMessageRef=r.a.createRef(),n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(C.a)({},a,r))},n}return Object(m.a)(t,e),Object(h.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({selectedThread:e.selectedThread})}},{key:"render",value:function(){var e=this,t=this.state,n=t.selectedThread,a=t.text;return r.a.createElement("div",{className:"dialog-send-message"},r.a.createElement("input",{type:"text",name:"text",onChange:this.handleChange,value:this.state.text}),r.a.createElement("button",{onClick:function(){return e.props.sendMessage(n,a)}},"Send"))}}]),t}(a.Component),M=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={threads:[],messages:[],selectedThread:null,isLoading:!1},n.loadThread=function(){var e=Object(u.a)(o.a.mark(function e(t){var a,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,x.request({method:"get_thread",params:[t.thread_id]},!0);case 3:a=e.sent,r=a.thread.items,console.log("messages",r),n.setState({isLoading:!1,selectedThread:t,messages:r.reverse()});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.sendMessage=function(){var e=Object(u.a)(o.a.mark(function e(t,a){var r,s,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),console.log("send dm",a),r=["text",{thread:t.thread_id,text:a}],console.log("send dm params",r),e.next=6,x.request({method:"send_direct_item",params:r},!0);case 6:s=e.sent,i=s.status,console.log("status",i),n.loadThread(t);case 10:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),n}return Object(m.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark(function e(){var t,n,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return window.instagram=x,e.next=3,x.init();case 3:return e.next=5,x.request({method:"get_inbox",params:[]},!0);case 5:t=e.sent,n=t.inbox.threads,console.log("threads",n),a=n[0],this.setState({threads:n}),this.loadThread(a);case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,{threads:this.state.threads,selectedThread:this.state.selectedThread,selectThread:this.loadThread}),r.a.createElement("div",{className:"dialog"},r.a.createElement(E,{isLoading:this.state.isLoading,selectedThread:this.state.selectedThread,messages:this.state.messages}),r.a.createElement(S,{selectedThread:this.state.selectedThread,sendMessage:this.sendMessage})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.887e5675.chunk.js.map