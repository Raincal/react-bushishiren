webpackJsonp([11],{245:function(e,n,t){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function a(e){return{type:_,data:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){return(0,s.default)("announcements?limit="+e+"&lastId="+n).then(function(e){e.ok&&t(a(e.data))})}}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments[1],t=v[n.type];return t?t(e,n):e}Object.defineProperty(n,"__esModule",{value:!0}),n.actions=n.RECEIVE_ANNOUNCEMENTS=void 0;var r=t(33),c=u(r),l=t(11),f=u(l);n.getAnnouncements=o,n.default=d;var i=t(30),s=u(i),_=n.RECEIVE_ANNOUNCEMENTS="RECEIVE_ANNOUNCEMENTS",v=(n.actions={getAnnouncements:o},(0,c.default)({},_,function(e,n){return(0,f.default)({},e,{announcements:n.data})})),m={announcements:[]}},464:function(e,n,t){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var a=t(4),o=u(a),d=t(3),r=(u(d),t(771)),c=u(r),l=t(54),f=u(l),i=function(e){var n=e.announcement;return(0,o.default)("div",{className:c.default.cAnnouncement},void 0,(0,o.default)("div",{className:"ui grid"},void 0,(0,o.default)(f.default,{url:"/users/"+n.author._id,src:n.author.avatar}),(0,o.default)("div",{className:"eight wide column"},void 0,(0,o.default)("div",{className:"ui segment"},void 0,(0,o.default)("div",{className:c.default.content,dangerouslySetInnerHTML:{__html:n.content}})))))};n.default=i},465:function(e,n,t){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var a=t(464),o=u(a);n.default=o.default},483:function(e,n,t){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var a=t(4),o=u(a),d=t(5),r=u(d),c=t(6),l=u(c),f=t(7),i=u(f),s=t(9),_=u(s),v=t(8),m=u(v),p=t(3),N=(u(p),t(43)),E=u(N),M=t(44),h=u(M),A=t(465),g=u(A),y=(0,o.default)(E.default,{}),C=(0,o.default)(h.default,{}),O=function(e){function n(){return(0,l.default)(this,n),(0,_.default)(this,(n.__proto__||(0,r.default)(n)).apply(this,arguments))}return(0,m.default)(n,e),(0,i.default)(n,[{key:"componentDidMount",value:function(){var e=this.props.getAnnouncements;e()}},{key:"render",value:function(){var e=this.props.announcements;if(e.length>0)var n=e.map(function(e,n){return(0,o.default)(g.default,{announcement:e},n)});return(0,o.default)("div",{},void 0,y,C,n)}}]),n}(p.Component);n.default=O},484:function(e,n,t){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var a=t(11),o=u(a),d=t(32),r=t(245),c=t(483),l=u(c),f=(0,o.default)({},r.actions),i=function(e){return{announcements:e.announcements.announcements}};n.default=(0,d.connect)(i,f)(l.default)},771:function(e,n){e.exports={cAnnouncement:"Announcement__cAnnouncement___2jvqN",content:"Announcement__content___2mlCA"}}});