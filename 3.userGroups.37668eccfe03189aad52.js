webpackJsonp([3],{111:function(e,t,a){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(4),i=u(n),r=a(5),o=u(r),d=a(6),s=u(d),l=a(7),f=u(l),c=a(9),_=u(c),p=a(8),v=u(p),m=a(3),h=(u(m),a(16)),g=a(19),N=u(g),U=a(36),C=a(67),E=(u(C),a(130)),y=u(E),M=a(54),k=u(M),b=(0,i.default)("div",{className:"text"}),O=(0,i.default)("i",{className:"dropdown icon"}),S=(0,i.default)("div",{className:"divider"}),w=function(e){function t(){return(0,s.default)(this,t),(0,_.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){$(".ui.dropdown").dropdown(),$(".ui.dropdown .item").removeClass("active")}},{key:"isMaster",value:function(){var e=this.props.group;return N.default.uid()===(e.master&&e.master._id)}},{key:"render",value:function(){var e=this.props,t=e.group,a=e.recommend,u=e.report,n=e.joinGroup,r=e.leaveGroup;return(0,i.default)("div",{className:y.default.cGroup},void 0,(0,i.default)("div",{className:"ui grid","v-show":"group.master"},void 0,(0,i.default)(k.default,{url:"/users/"+t.master._id,src:t.master.avatar}),(0,i.default)("div",{className:"eight wide column"},void 0,(0,i.default)("div",{className:"ui segment"},void 0,(0,i.default)(h.Link,{to:"/groups/"+t._id},void 0,t.cover?(0,i.default)("img",{className:y.default.photo,src:t.cover}):null),(0,i.default)("h3",{className:"title"},void 0,(0,i.default)(h.Link,{to:"/groups/"+t._id},void 0,t.name)),(0,i.default)("pre",{className:"content"},void 0,t.description),(0,i.default)("div",{},void 0,(0,i.default)("span",{className:y.default.tag},void 0,(0,U.idToFromNow)(t._id)),(0,i.default)("span",{className:"tag right "+y.default.rightTag},void 0,(0,i.default)(h.Link,{to:"/groups/"+t._id},void 0,"成员(",t.memberCount,") "),(0,i.default)("div",{className:"ui inline dropdown"},void 0,b,O,this.isMaster()?(0,i.default)("div",{className:"menu"},void 0,(0,i.default)("div",{className:"item","data-text":"",onClick:function(){return a("group",t._id)}},void 0,"推荐置顶"),(0,i.default)("div",{className:"item","data-text":"",onClick:function(){return u("group",t._id)}},void 0,"举报"),S,(0,i.default)(h.Link,{className:"item "+y.default.edit,"data-text":"",to:"/groups/"+t._id+"/edit"},void 0,"编辑")):(0,i.default)("div",{className:"menu"},void 0,(0,i.default)("div",{className:"item","data-text":"",onClick:function(){return a("group",t._id)}},void 0,"推荐置顶"),(0,i.default)("div",{className:"item","data-text":"",onClick:function(){return u("group",t._id)}},void 0,"举报"),t.hasJoined?(0,i.default)("div",{className:"item","data-text":"",onClick:function(){return r(t._id)}},void 0,"退出诗社"):(0,i.default)("div",{className:"item","data-text":"",onClick:function(){return n(t._id)}},void 0,"申请加入")))))))))}}]),t}(m.Component);t.default=w},112:function(e,t,a){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(111),i=u(n);t.default=i.default},115:function(e,t,a){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(4),i=u(n),r=a(5),o=u(r),d=a(6),s=u(d),l=a(7),f=u(l),c=a(9),_=u(c),p=a(8),v=u(p),m=a(3),h=(u(m),a(16)),g=a(19),N=u(g),U=a(132),C=u(U),E=(0,i.default)("i",{className:"write icon"}),y=(0,i.default)("i",{className:"send icon"}),M=(0,i.default)("i",{className:"plus icon"}),k=(0,i.default)("i",{className:"minus icon"}),b=function(e){function t(){return(0,s.default)(this,t),(0,_.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,f.default)(t,[{key:"genderMapping",value:function(e){var t={M:"男",F:"女",X:"保密"};return t[e]}},{key:"render",value:function(){var e=this.props.user;return(0,i.default)("div",{className:C.default.cUserCard},void 0,(0,i.default)("div",{className:"ui cards "+C.default.userCard},void 0,(0,i.default)("div",{className:"card"},void 0,(0,i.default)("div",{className:"content"},void 0,(0,i.default)("div",{className:C.default.userInfo},void 0,(0,i.default)("img",{src:e.avatar}),(0,i.default)("div",{className:C.default.info},void 0,(0,i.default)("p",{className:"name"},void 0,e.name),(0,i.default)("p",{className:"meta"},void 0,this.genderMapping.call(this,e.gender)))),(0,i.default)("div",{className:"description"},void 0,e.bio)),N.default.uid()===e._id?(0,i.default)("div",{className:"extra content"},void 0,(0,i.default)(h.Link,{to:"/users/"+e._id+"/edit"},void 0,E,"编辑个人资料")):(0,i.default)("div",{className:"extra content"},void 0,(0,i.default)(h.Link,{to:"/users/"+e._id+"/message"},void 0,y,"私信"),e.hasFollowed?(0,i.default)("a",{className:"right floated",onClick:function(){return unfollow(e._id)}},void 0,k,"取消关注"):(0,i.default)("a",{className:"right floated",onClick:function(){return follow(e._id)}},void 0,M,"关注")))))}}]),t}(m.Component);t.default=b},116:function(e,t,a){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(115),i=u(n);t.default=i.default},117:function(e,t,a){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(4),i=u(n),r=a(5),o=u(r),d=a(6),s=u(d),l=a(7),f=u(l),c=a(9),_=u(c),p=a(8),v=u(p),m=a(3),h=(u(m),a(16)),g=a(19),N=u(g),U=a(133),C=(u(U),function(e){function t(){return(0,s.default)(this,t),(0,_.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.getUnreadMessagesCount,a=e.getUnreadNotificationsCount,u=e.params.uid;N.default.uid()==u&&(t(),a())}},{key:"render",value:function(){var e=this.props,t=e.messagesUnread,a=e.notificationsUnread,u=e.params.uid,n="/users/"+u;return(0,i.default)("div",{className:"c-user-menu"},void 0,(0,i.default)("div",{className:"ui vertical right tabular menu"},void 0,(0,i.default)(h.Link,{className:"item",activeClassName:"active",to:""+n},void 0,"诗"),(0,i.default)(h.Link,{className:"item",activeClassName:"active",to:n+"/poetries"},void 0,"诗集"),(0,i.default)(h.Link,{className:"item",activeClassName:"active",to:n+"/groups"},void 0,"诗社"),(0,i.default)(h.Link,{className:"item",activeClassName:"active",to:n+"/archive"},void 0,"归档"),N.default.uid()===u?(0,i.default)(h.Link,{className:"item",activeClassName:"active",to:n+"/messages"},void 0,t>0?(0,i.default)("div",{className:"ui button label"},void 0,t):null,"私信"):null,N.default.uid()===u?(0,i.default)(h.Link,{className:"item",activeClassName:"active",to:n+"/notifications"},void 0,a>0?(0,i.default)("div",{className:"ui button label"},void 0,a):null,"通知"):null))}}]),t}(m.Component));t.default=C},118:function(e,t,a){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(117),i=u(n);t.default=i.default},119:function(e,t,a){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(4),i=u(n),r=a(5),o=u(r),d=a(6),s=u(d),l=a(7),f=u(l),c=a(9),_=u(c),p=a(8),v=u(p),m=a(3),h=u(m),g=a(134),N=u(g),U=a(116),C=u(U),E=a(118),y=u(E),M=function(e){function t(e){(0,s.default)(this,t);var a=(0,_.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return a.handleScroll=function(e){var t=e.srcElement.body.scrollTop;t>117?a.setState({top:10}):a.setState({top:127-t})},a.state={top:127},a}return(0,v.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props.user;return(0,i.default)("div",{className:N.default.cSideMenu,style:{top:this.state.top}},void 0,(0,i.default)("div",{className:"ui grid",style:{width:"100%"}},void 0,(0,i.default)("div",{className:"four wide column "+N.default.cSideMenuContainer},void 0,e?(0,i.default)(C.default,{user:e}):null,h.default.createElement(y.default,this.props))))}}]),t}(m.Component);t.default=M},120:function(e,t,a){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(119),i=u(n);t.default=i.default},130:function(e,t){e.exports={tag:"Group__tag___2QmKz",cGroup:"Group__cGroup___3jrLe",photo:"Group__photo___19Ah9",rightTag:"Group__rightTag___bdnl1 Group__tag___2QmKz",edit:"Group__edit___1dbjK"}},132:function(e,t){e.exports={cUserCard:"UserCard__cUserCard___2xX3x",userCard:"UserCard__userCard___5qT8W",userInfo:"UserCard__userInfo___2BfeU",info:"UserCard__info___2Y5_K",name:"UserCard__name___2kfqA"}},133:function(e,t){e.exports={cSideMenu:"UserMenu__cSideMenu___2tXLP",four:"UserMenu__four___1UpY7",wide:"UserMenu__wide___lMi_b",column:"UserMenu__column___2E9Ib"}},134:function(e,t){e.exports={cSideMenu:"UserSideMenu__cSideMenu___2t3Uz",cSideMenuContainer:"UserSideMenu__cSideMenuContainer___1HXuQ"}},137:function(e,t,a){!function(t,u){e.exports=u(a(3))}(this,function(e){return function(e){function t(u){if(a[u])return a[u].exports;var n=a[u]={exports:{},id:u,loaded:!1};return e[u].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var u=t[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}return function(t,a,u){return a&&e(t.prototype,a),u&&e(t,u),t}}(),o=function(e,t,a){for(var u=!0;u;){var n=e,i=t,r=a;o=s=d=void 0,u=!1,null===n&&(n=Function.prototype);var o=Object.getOwnPropertyDescriptor(n,i);if(void 0!==o){if("value"in o)return o.value;var d=o.get;if(void 0===d)return;return d.call(r)}var s=Object.getPrototypeOf(n);if(null===s)return;e=s,t=i,a=r,u=!0}},d=a(1),s=u(d),l=function(e){function t(e){n(this,t),o(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state={width:0,left:0}}return i(t,e),r(t,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.animate.bind(this),this.props.speed)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"animate",value:function(){if(this.props.active!==!0)return!1;var e=this.state,t=e.left,a=e.width;0===t&&a<100?a+=4:a<=100&&t<100?(t+=4,a-=4):100===t&&0===a&&(t=0),this.setState({left:t,width:a})}},{key:"render",value:function(){var e={display:this.props.active?"block":"none",position:"fixed",top:"0px",left:this.state.left+"%",right:"0px",width:this.state.width+"%",height:this.props.height,backgroundColor:this.props.color,zIndex:800};return s.default.createElement("div",{style:e})}}]),t}(s.default.Component);t.default=l,l.defaultProps={active:!1,speed:20,color:"#60d778",height:"2px"},l.propTypes={active:s.default.PropTypes.bool,speed:s.default.PropTypes.number,color:s.default.PropTypes.string,height:s.default.PropTypes.string},e.exports=t.default},function(t,a){t.exports=e}])})},174:function(e,t,a){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments[1],a=E[t.type];return a?a(e,t):e}Object.defineProperty(t,"__esModule",{value:!0}),t.actions=t.getUnreadNotificationsCount=t.getUnreadMessagesCount=t.getUser=t.RECEIVE_UNREAD_NOTIFICATIONS_COUNT=t.RECEIVE_UNREAD_MESSAGE_COUNT=t.RECEIVE_USER=void 0;var i,r=a(33),o=u(r),d=a(11),s=u(d);t.default=n;var l=a(30),f=u(l),c=a(60),_=t.RECEIVE_USER="RECEIVE_USER",p=t.RECEIVE_UNREAD_MESSAGE_COUNT="RECEIVE_UNREAD_MESSAGE_COUNT",v=t.RECEIVE_UNREAD_NOTIFICATIONS_COUNT="RECEIVE_UNREAD_NOTIFICATIONS_COUNT",m=function(e){return{type:"RECEIVE_USER",data:e}},h=t.getUser=function(e){return function(t){return(0,f.default)("users/"+e).then(function(e){e.ok&&t(m(e.data))})}},g=function(e){return{type:"RECEIVE_UNREAD_MESSAGE_COUNT",data:e}},N=t.getUnreadMessagesCount=function(){return function(e){return(0,f.default)("messages/unread").then(function(t){t.ok&&e(g(t.data))})}},U=function(e){return{type:"RECEIVE_UNREAD_NOTIFICATIONS_COUNT",data:e}},C=t.getUnreadNotificationsCount=function(){return function(e){return(0,f.default)("notifications/unread").then(function(t){t.ok&&e(U(t.data))})}},E=(t.actions={getGroups:c.getGroups,getUser:h,getUnreadMessagesCount:N,getUnreadNotificationsCount:C,recommend:c.recommend,report:c.report},i={},(0,o.default)(i,c.REQUEST_GROUPS,function(e,t){return(0,s.default)({},e,{isFetching:!0})}),(0,o.default)(i,c.RECEIVE_GROUPS,function(e,t){return(0,s.default)({},e,{groups:t.data,isFetching:!1})}),(0,o.default)(i,_,function(e,t){return(0,s.default)({},e,{user:t.data})}),(0,o.default)(i,p,function(e,t){return(0,s.default)({},e,{messagesUnread:t.data})}),(0,o.default)(i,v,function(e,t){return(0,s.default)({},e,{notificationsUnread:t.data})}),i),y={groups:[],isFetching:!1,user:null,messagesUnread:0,notificationsUnread:0}},254:function(e,t,a){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(11),i=u(n),r=a(32),o=a(174),d=a(523),s=u(d),l=(0,i.default)({},o.actions),f=function(e){var t=e.userGroups;return{isFetching:t.isFetching,user:t.user,messagesUnread:t.messagesUnread,notificationsUnread:t.notificationsUnread,groups:t.groups}};t.default=(0,r.connect)(f,l)(s.default)},523:function(e,t,a){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(4),i=u(n),r=a(11),o=u(r),d=a(5),s=u(d),l=a(6),f=u(l),c=a(7),_=u(c),p=a(9),v=u(p),m=a(8),h=u(m),g=a(3),N=u(g),U=a(43),C=u(U),E=a(44),y=u(E),M=a(120),k=u(M),b=a(112),O=u(b),S=a(137),w=u(S),G=a(789),x=u(G),I=(0,i.default)(w.default,{active:!0}),T=(0,i.default)(C.default,{}),P=(0,i.default)(y.default,{}),R=function(e){function t(){return(0,f.default)(this,t),(0,v.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,_.default)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.getGroups,a=e.getUser,u=e.params.uid;t(u),a(u)}},{key:"renderGroups",value:function(){var e=this,t=this.props,a=t.isFetching,u=t.groups;return a?I:u.map(function(t,a){return t.group?N.default.createElement(O.default,(0,o.default)({key:a,group:t.group},e.props)):null})}},{key:"render",value:function(){return(0,i.default)("div",{className:x.default.vUserGroups},void 0,T,P,this.renderGroups(),N.default.createElement(k.default,this.props))}}]),t}(g.Component);t.default=R},789:function(e,t){e.exports={vUserGroups:"UserGroups__vUserGroups___2i9A9",photo:"UserGroups__photo___kfcjC",title:"UserGroups__title___25u1y",avatar:"UserGroups__avatar___2PQP_",tag:"UserGroups__tag___OxiVD",right:"UserGroups__right___2rGHO"}}});