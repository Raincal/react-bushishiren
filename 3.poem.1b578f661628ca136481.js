webpackJsonp([3],{107:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),u=a(o),d=n(10),l=a(d),i=n(11),r=a(i),s=n(12),f=a(s),c=n(14),m=a(c),p=n(13),v=a(p),_=n(3),h=a(_),y=n(19),C=n(40),E=n(25),N=a(E),M=n(117),P=a(M),k=function(e){function t(){return(0,r["default"])(this,t),(0,m["default"])(this,(0,l["default"])(t).apply(this,arguments))}return(0,v["default"])(t,e),(0,f["default"])(t,[{key:"toggleReply",value:function(e){$("#"+e).toggle("normal")}},{key:"createComment",value:function(e){var t=this.props,n=t.type,a=t.refe,o=this,u=this.refs.replyContent.value,d={type:n,refe:a,content:u,reply:e};this.props.createComment(d,e).then(function(){o.cancelReply(e)})}},{key:"cancelReply",value:function(e){this.refs.replyContent.value="",$("#"+e).slideUp()}},{key:"deleteComment",value:function(e){this.props.deleteComment(e)}},{key:"render",value:function(){var e=this.props.comment;return(0,u["default"])("div",{className:"comment"},void 0,(0,u["default"])(y.Link,{className:"avatar",to:"/users/"+e.author._id},void 0,(0,u["default"])("img",{src:e.author.avatar})),(0,u["default"])("div",{className:"content"},void 0,(0,u["default"])(y.Link,{className:"author",to:"/users/"+e.author._id},void 0,e.author.name),(0,u["default"])("div",{className:"metadata"},void 0,(0,u["default"])("span",{className:"date"},void 0,(0,C.idToFromNow)(e._id))),(0,u["default"])("div",{className:"text"},void 0,e.content),e.reply?(0,u["default"])("div",{className:"text "+P["default"].replyContent},void 0,(0,u["default"])(y.Link,{to:"/users/"+e.reply.author._id},void 0,e.reply.author.name,": "),e.reply.content):null,(0,u["default"])("div",{className:"actions"},void 0,N["default"].uid()===(e.author&&e.author._id)?(0,u["default"])("a",{className:"reply",onClick:this.deleteComment.bind(this,e._id)},void 0,"删除"):null,(0,u["default"])("a",{className:"reply",onClick:this.toggleReply.bind(this,e._id)},void 0,"回复"))),(0,u["default"])("form",{className:"ui reply form",id:e._id,hidden:!0},void 0,(0,u["default"])("div",{className:"field"},void 0,h["default"].createElement("textarea",{ref:"replyContent"})),(0,u["default"])("div",{className:"ui submit icon button",onClick:this.createComment.bind(this,e._id)},void 0,"留言"),(0,u["default"])("div",{className:"ui submit icon button",onClick:this.cancelReply.bind(this,e._id)},void 0,"取消")))}}]),t}(_.Component);t["default"]=k},108:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(107),u=a(o);t["default"]=u["default"]},109:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),u=a(o),d=n(17),l=a(d),i=n(10),r=a(i),s=n(11),f=a(s),c=n(12),m=a(c),p=n(14),v=a(p),_=n(13),h=a(_),y=n(3),C=a(y),E=(n(19),n(118)),N=a(E),M=n(108),P=a(M),k=(0,u["default"])("div",{className:"four wide column"}),b=(0,u["default"])("h3",{className:"ui dividing header"},void 0,"留言"),g=function(e){function t(){return(0,f["default"])(this,t),(0,v["default"])(this,(0,r["default"])(t).apply(this,arguments))}return(0,h["default"])(t,e),(0,m["default"])(t,[{key:"createComment",value:function(){var e=this,t=this.refs.content.value,n=this.props,a=n.type,o=n.refe,u={type:a,content:t,refe:o,reply:""};this.props.createComment(u).then(function(){e.refs.content.value=""})}},{key:"renderComments",value:function(){var e=this,t=this.props.comments;return t.map(function(t,n){return C["default"].createElement(P["default"],(0,l["default"])({key:n,comment:t},e.props))})}},{key:"render",value:function(){return(0,u["default"])("div",{className:N["default"].cComment},void 0,(0,u["default"])("div",{className:"ui grid"},void 0,k,(0,u["default"])("div",{className:"eight wide column"},void 0,(0,u["default"])("div",{className:"ui segment"},void 0,(0,u["default"])("div",{className:"ui minimal comments"},void 0,b,this.renderComments(),(0,u["default"])("form",{className:"ui reply form"},void 0,(0,u["default"])("div",{className:"field"},void 0,C["default"].createElement("textarea",{ref:"content"})),(0,u["default"])("div",{className:"ui submit icon button",onClick:this.createComment.bind(this)},void 0,"留言")))))))}}]),t}(y.Component);t["default"]=g},110:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(109),u=a(o);t["default"]=u["default"]},117:function(e,t){e.exports={replyContent:"Comment__replyContent___c0c52"}},118:function(e,t){e.exports={cComment:"Comments__cComment___1fb6M",replyContent:"Comments__replyContent___3Deya"}},160:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e){return{type:h,data:e}}function u(e){return function(t){return(0,m["default"])("poems/"+e).then(function(n){n.ok&&(t(o(n.data)),v["default"].uid()&&t((0,_.getPoetries)(v["default"].uid()))),t((0,_.fetchCommentsByPoemId)(e))})}}function d(){var e=arguments.length<=0||void 0===arguments[0]?C:arguments[0],t=arguments[1],n=y[t.type];return n?n(e,t):e}Object.defineProperty(t,"__esModule",{value:!0}),t.actions=t.RECEIVE_POEM=void 0;var l,i=n(58),r=a(i),s=n(17),f=a(s);t.fetchPoem=u,t["default"]=d;var c=n(49),m=a(c),p=n(25),v=a(p),_=n(95),h=t.RECEIVE_POEM="RECEIVE_POEM",y=(t.actions={fetchPoem:u,deletePoem:_.deletePoem,recommend:_.recommend,report:_.report,addPoemToPoetry:_.addPoemToPoetry,createComment:_.createComment,deleteComment:_.deleteComment},l={},(0,r["default"])(l,h,function(e,t){var n=t.data;return(0,f["default"])({},e,{poem:n})}),(0,r["default"])(l,_.RECEIVE_POETRIES,function(e,t){return(0,f["default"])({},e,{poetries:t.data})}),(0,r["default"])(l,_.RECEIVE_COMMENTS,function(e,t){var n=t.data;return(0,f["default"])({},e,{comments:n})}),(0,r["default"])(l,_.DELETE_COMMENT_BY_ID,function(e,t){return(0,f["default"])({},e,{comments:e.comments.filter(function(e){return e._id!==t.commentId})})}),l),C={poem:null,poetries:[],comments:[]}},233:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(17),u=a(o),d=n(45),l=n(160),i=n(475),r=a(i),s=(0,u["default"])({},l.actions),f=function(e){return{poem:e.poem.poem,poetries:e.poem.poetries,comments:e.poem.comments}};t["default"]=(0,d.connect)(f,s)(r["default"])},475:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(17),u=a(o),d=n(5),l=a(d),i=n(10),r=a(i),s=n(11),f=a(s),c=n(12),m=a(c),p=n(14),v=a(p),_=n(13),h=a(_),y=n(3),C=a(y),E=n(62),N=a(E),M=n(63),P=a(M),k=n(228),b=a(k),g=n(110),O=a(g),R=(0,l["default"])(N["default"],{}),I=(0,l["default"])(P["default"],{}),j=function(e){function t(){return(0,f["default"])(this,t),(0,v["default"])(this,(0,r["default"])(t).apply(this,arguments))}return(0,h["default"])(t,e),(0,m["default"])(t,[{key:"componentDidMount",value:function(){var e=this.props.params.poemid;this.props.fetchPoem(e)}},{key:"render",value:function(){var e=this.props,t=e.poem,n=e.comments,a=e.params.poemid;return(0,l["default"])("div",{},void 0,R,I,t?C["default"].createElement(b["default"],(0,u["default"])({poem:t},this.props)):null,C["default"].createElement(O["default"],(0,u["default"])({comments:n,type:"poem",refe:a},this.props)))}}]),t}(y.Component);t["default"]=j}});