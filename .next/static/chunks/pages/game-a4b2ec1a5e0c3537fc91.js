_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"07wX":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game",function(){return n("OzVs")}])},OzVs:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),a=n.n(r),c=n("HaE+"),o=n("1OyB"),s=n("vuIU"),u=n("JX7q"),i=n("Ji7U"),p=n("md7G"),f=n("foSv"),h=n("nKUr"),l=n("q1tI"),d=n("/MKj"),y=n("vDqi"),m=n.n(y),j=n("BXF7");function b(t,e,n){var r={serverID:t,hostname:e,guestname:"unset",finalLog:"",nowturnplayer:n,guestSetUpFinished:!1};j.a.doc(t).set(r)}function O(t,e){j.a.doc(t).update({guestname:e})}function g(t,e,r){console.log("game create");m.a.post("./php/setup/game_create.php",n("s4NR").stringify({gameId:t,hostName:e,guestName:r})).then((function(t){})).catch((function(t){}))}function v(t,e){m.a.post("./php/setup/deck_create.php",n("s4NR").stringify({gameId:t,whoseDeck:e})).then((function(t){})).catch((function(t){}))}var S=n("zlyb"),x=n("3gD8"),R=n("rePB");function D(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var k=function(t){Object(i.a)(r,t);var e=D(r);function r(t){var n;return Object(o.a)(this,r),n=e.call(this,t),Object(R.a)(Object(u.a)(n),"cardStyle",{paddingTop:"15px",alignItems:"flex-start"}),n.id=t.id,n.name=t.name,n.doMouseEnter=n.doMouseEnter.bind(Object(u.a)(n)),n.onContextMenu=n.onContextMenu.bind(Object(u.a)(n)),n}return Object(s.a)(r,[{key:"onContextMenu",value:function(t){var e=this;if(t.preventDefault(),this.props.gameStatus.nowTurnPlayer==this.props.gameStatus.you){m.a.post("./php/action/card_play.php",n("s4NR").stringify({gameId:this.props.gameStatus.gameID,whom:this.props.gameStatus.you,cardName:this.props.name,cardId:this.props.id,actionPlayed:this.props.turnSwitch.actionSwitch})).then((function(t){"play cancel"!=t.data&&(j.a.doc(e.props.gameStatus.gameID).update({finalLog:e.props.id}),"play action"==t.data&&e.props.dispatch({type:"ACTIONPLAYED"}))})).catch((function(t){}))}}},{key:"doMouseEnter",value:function(){var t=Object(c.a)(a.a.mark((function t(){var e=this;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"./php/action/textget.php","http://localhost/wizard-contest3/php/action/textget.php",m.a.post("./php/action/textget.php",n("s4NR").stringify({cardName:this.props.name})).then((function(t){var n,r=t.data;n=null!=r[6]?r[6]:"";var a="".concat(r[0],"\n\u30bf\u30a4\u30d7\uff1a").concat(r[1],"\n\u8cfc\u5165\u8cbb\u7528\uff1a").concat(r[2],"\n\u6d88\u8cbb\u30de\u30ca\uff1a").concat(r[3],"\n\u7372\u5f97\u8cbb\u7528\uff1a").concat(r[4],"\n\u7372\u5f97\u30de\u30ca\uff1a").concat(r[5],"\n").concat(n);return e.props.dispatch({type:"TEXTUPDATE",text:a})})).catch((function(t){}));case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(h.jsx)("div",{className:"cards",onMouseEnter:this.doMouseEnter,onContextMenu:this.onContextMenu,style:this.cardStyle,id:this.id,children:this.name})}}]),r}(l.Component),N=k=Object(d.b)((function(t){return t}))(k);function w(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var I=function(t){Object(i.a)(n,t);var e=w(n);function n(t){return Object(o.a)(this,n),e.call(this,t)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{id:"your_hand",className:"mains",children:this.props.yourStatus.yourHand.map((function(t){return Object(h.jsx)(N,{id:t.id,name:t.name},t.id)}))})}}]),n}(l.Component),U=I=Object(d.b)((function(t){return t}))(I);function E(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var T=function(t){Object(i.a)(r,t);var e=E(r);function r(t){var n;return Object(o.a)(this,r),n=e.call(this,t),Object(R.a)(Object(u.a)(n),"cardStyle",{paddingTop:"15px",alignItems:"flex-start"}),n.id=t.id,n.name=t.name,n.doMouseEnter=n.doMouseEnter.bind(Object(u.a)(n)),n}return Object(s.a)(r,[{key:"doMouseEnter",value:function(){var t=this;m.a.post("./php/action/textget.php",n("s4NR").stringify({cardName:this.props.name})).then((function(e){var n,r=e.data;n=null!=r[6]?r[6]:"";var a="".concat(r[0],"\n\u30bf\u30a4\u30d7\uff1a").concat(r[1],"\n\u8cfc\u5165\u8cbb\u7528\uff1a").concat(r[2],"\n\u6d88\u8cbb\u30de\u30ca\uff1a").concat(r[3],"\n\u7372\u5f97\u8cbb\u7528\uff1a").concat(r[4],"\n\u7372\u5f97\u30de\u30ca\uff1a").concat(r[5],"\n").concat(n);return t.props.dispatch({type:"TEXTUPDATE",text:a})})).catch((function(t){}))}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"cards",onMouseEnter:this.doMouseEnter,style:this.cardStyle,id:this.id,children:this.name})}}]),r}(l.Component),_=T=Object(d.b)((function(t){return t}))(T);function P(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var A=function(t){Object(i.a)(n,t);var e=P(n);function n(t){var r;return Object(o.a)(this,n),r=e.call(this,t),Object(R.a)(Object(u.a)(r),"cardStyle",{paddingTop:"15px",alignItems:"flex-start"}),r}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{id:"your_field",className:"mains",children:this.props.yourStatus.yourArchi.map((function(t){return Object(h.jsx)(_,{id:t.id,name:t.name},t.id)}))})}}]),n}(l.Component),C=A=Object(d.b)((function(t){return t}))(A);function M(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var L=function(t){Object(i.a)(n,t);var e=M(n);function n(t){var r;return Object(o.a)(this,n),r=e.call(this,t),Object(R.a)(Object(u.a)(r),"cardStyle",{paddingTop:"15px",alignItems:"flex-start"}),r}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"cards",style:this.cardStyle})}}]),n}(l.Component),Y=L=Object(d.b)((function(t){return t}))(L);function F(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var H=function(t){Object(i.a)(n,t);var e=F(n);function n(t){var r;return Object(o.a)(this,n),r=e.call(this,t),Object(R.a)(Object(u.a)(r),"cardStyle",{paddingTop:"15px",alignItems:"flex-start"}),r}return Object(s.a)(n,[{key:"render",value:function(){for(var t=[],e=0;e<this.props.enemyStatus.enemyHandNum;e++)t.push(Object(h.jsx)(Y,{},e));return Object(h.jsx)("div",{id:"enemy_hand",className:"mains",children:t})}},{key:"componentDidMount",value:function(){}}]),n}(l.Component),z=H=Object(d.b)((function(t){return t}))(H);function G(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var V=function(t){Object(i.a)(n,t);var e=G(n);function n(t){var r;return Object(o.a)(this,n),r=e.call(this,t),Object(R.a)(Object(u.a)(r),"cardStyle",{paddingTop:"15px",alignItems:"flex-start"}),r}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{id:"enemy_field",className:"mains",children:this.props.enemyStatus.enemyArchi.map((function(t){return Object(h.jsx)(_,{id:t.id,name:t.name},t.id)}))})}}]),n}(l.Component),B=V=Object(d.b)((function(t){return t}))(V);function X(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var q=function(t){Object(i.a)(r,t);var e=X(r);function r(t){var n;return Object(o.a)(this,r),n=e.call(this,t),Object(R.a)(Object(u.a)(n),"cardStyle",{paddingTop:"15px",alignItems:"flex-start"}),n.id=t.id,n.name=t.name,n.doMouseEnter=n.doMouseEnter.bind(Object(u.a)(n)),n.onContextMenu=n.onContextMenu.bind(Object(u.a)(n)),n}return Object(s.a)(r,[{key:"onContextMenu",value:function(t){var e=this;if(t.preventDefault(),this.props.gameStatus.nowTurnPlayer==this.props.gameStatus.you&&0==this.props.turnSwitch.buySwitch){m.a.post("./php/action/card_buy.php",n("s4NR").stringify(Object(R.a)({gameId:this.props.gameStatus.gameID,whom:this.props.gameStatus.you,cardName:this.props.name},"cardName",this.props.name))).then((function(t){"buy cancel"!=t.data&&(j.a.doc(e.props.gameStatus.gameID).update({finalLog:e.props.name+"\u3092\u8cfc\u5165\u3002"}),e.props.dispatch({type:"BUYPLAYED"}))})).catch((function(t){}))}}},{key:"doMouseEnter",value:function(){var t=Object(c.a)(a.a.mark((function t(){var e=this;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"./php/action/textget.php","http://localhost/wizard-contest3/php/action/textget.php",m.a.post("./php/action/textget.php",n("s4NR").stringify({cardName:this.props.name})).then((function(t){var n,r=t.data;n=null!=r[6]?r[6]:"";var a="".concat(r[0],"\n\u30bf\u30a4\u30d7\uff1a").concat(r[1],"\n\u8cfc\u5165\u8cbb\u7528\uff1a").concat(r[2],"\n\u6d88\u8cbb\u30de\u30ca\uff1a").concat(r[3],"\n\u7372\u5f97\u8cbb\u7528\uff1a").concat(r[4],"\n\u7372\u5f97\u30de\u30ca\uff1a").concat(r[5],"\n").concat(n);return e.props.dispatch({type:"TEXTUPDATE",text:a})})).catch((function(t){}));case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(h.jsx)("div",{className:"cards",onMouseEnter:this.doMouseEnter,onContextMenu:this.onContextMenu,style:this.cardStyle,children:this.name})}}]),r}(l.Component),J=q=Object(d.b)((function(t){return t}))(q);function K(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var W=function(t){Object(i.a)(n,t);var e=K(n);function n(t){return Object(o.a)(this,n),e.call(this,t)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{id:"market",className:"mains",children:[Object(h.jsx)("div",{id:"market_top",children:this.props.market.marketTopArr.map((function(t){return Object(h.jsx)(J,{name:t.name,id:t.id},t.id)}))}),Object(h.jsx)("div",{id:"market_bottom",children:this.props.market.marketBottomArr.map((function(t){return Object(h.jsx)(J,{name:t.name,id:t.id},t.id)}))})]})}}]),n}(l.Component),Q=W=Object(d.b)((function(t){return t}))(W);function Z(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var $=function(t){Object(i.a)(n,t);var e=Z(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{id:"left_area",children:[Object(h.jsx)(U,{}),Object(h.jsx)(C,{}),Object(h.jsx)(z,{}),Object(h.jsx)(B,{}),Object(h.jsx)(Q,{})]})}}]),n}(l.Component),tt=$=Object(d.b)((function(t){return t}))($);function et(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var nt=function(t){Object(i.a)(n,t);var e=et(n);function n(t){var r;return Object(o.a)(this,n),r=e.call(this,t),Object(R.a)(Object(u.a)(r),"numStyle",{fontSize:"20px"}),Object(R.a)(Object(u.a)(r),"boxesStyle",{width:"100%",height:"50%",display:"flex",justifyContent:"space-around",alignItems:"center"}),Object(R.a)(Object(u.a)(r),"decksStyle",{width:"100%",height:"50%",display:"flex",justifyContent:"space-around",alignItems:"center"}),Object(R.a)(Object(u.a)(r),"infoStyle",{display:"flex",justifyContent:"center",alignItems:"center",width:"50pt",height:"50pt"}),r}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{id:"your_info",className:"mains",children:[Object(h.jsxs)("div",{style:this.boxesStyle,children:[Object(h.jsx)("div",{style:this.infoStyle,id:"your_victory_point",className:"info_text",children:this.props.yourStatus.yourVicPnt}),Object(h.jsx)("div",{style:this.infoStyle,id:"your_mana",className:"info_text",children:this.props.yourStatus.yourMana}),Object(h.jsx)("div",{style:this.infoStyle,id:"your_gold",className:"info_text",children:this.props.yourStatus.yourGold})]}),Object(h.jsxs)("div",{style:this.decksStyle,children:[Object(h.jsxs)("div",{id:"your_deck",className:"decks",children:["\xd7",Object(h.jsx)("span",{style:this.numStyle,children:this.props.yourStatus.yourDeckNum})]}),Object(h.jsxs)("div",{id:"your_trash",className:"decks",children:["\xd7",Object(h.jsx)("span",{style:this.numStyle,children:this.props.yourStatus.yourTrashNum})]})]})]})}}]),n}(l.Component),rt=nt=Object(d.b)((function(t){return t}))(nt);function at(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var ct=function(t){Object(i.a)(n,t);var e=at(n);function n(t){var r;return Object(o.a)(this,n),r=e.call(this,t),Object(R.a)(Object(u.a)(r),"numStyle",{fontSize:"20px"}),Object(R.a)(Object(u.a)(r),"boxesStyle",{width:"100%",height:"50%",display:"flex",justifyContent:"space-around",alignItems:"center"}),Object(R.a)(Object(u.a)(r),"decksStyle",{width:"100%",height:"50%",display:"flex",justifyContent:"space-around",alignItems:"center"}),Object(R.a)(Object(u.a)(r),"infoStyle",{display:"flex",justifyContent:"center",alignItems:"center",width:"50pt",height:"50pt"}),r}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{id:"enemy_info",className:"mains",children:[Object(h.jsxs)("div",{style:this.decksStyle,children:[Object(h.jsxs)("div",{id:"enemy_deck",className:"decks",children:["\xd7",Object(h.jsx)("span",{style:this.numStyle,children:this.props.enemyStatus.enemyDeckNum})]}),Object(h.jsxs)("div",{id:"enemy_trash",className:"decks",children:["\xd7",Object(h.jsx)("span",{style:this.numStyle,children:this.props.enemyStatus.enemyTrashNum})]})]}),Object(h.jsxs)("div",{style:this.boxesStyle,children:[Object(h.jsx)("div",{style:this.infoStyle,id:"enemy_victory_point",className:"info_text",children:this.props.enemyStatus.enemyVicPnt}),Object(h.jsx)("div",{style:this.infoStyle,id:"enemy_mana",className:"info_text",children:this.props.enemyStatus.enemyMana}),Object(h.jsx)("div",{style:this.infoStyle,id:"enemy_gold",className:"info_text",children:this.props.enemyStatus.enemyGold})]})]})}}]),n}(l.Component),ot=ct=Object(d.b)((function(t){return t}))(ct);function st(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var ut=function(t){Object(i.a)(r,t);var e=st(r);function r(t){var n;return Object(o.a)(this,r),(n=e.call(this,t)).nextTurn=n.nextTurn.bind(Object(u.a)(n)),n}return Object(s.a)(r,[{key:"nextTurn",value:function(){var t=this;if(this.props.gameStatus.nowTurnPlayer==this.props.gameStatus.you)if(this.props.yourStatus.yourVicPnt>=10)j.a.doc(this.props.gameStatus.gameID).update({finalLog:this.props.gameStatus.you+"win!"});else{m.a.post("./php/action/turnend_reset.php",n("s4NR").stringify({gameId:this.props.gameStatus.gameID,whom:this.props.gameStatus.you})).then((function(){var e=t.props.gameStatus.enemyName+"\u306e\u30bf\u30fc\u30f3";j.a.doc(t.props.gameStatus.gameID).update({finalLog:e,nowturnplayer:t.props.gameStatus.enemy}),t.props.dispatch({type:"TURNPASSED"})})).catch((function(t){}))}}},{key:"render",value:function(){return Object(h.jsx)("div",{id:"turnend_box",onClick:this.nextTurn,children:this.props.otherInfo.turnendText})}},{key:"componentDidMount",value:function(){var t,e;"host"==this.props.gameStatus.nowTurnPlayer&&"host"==this.props.gameStatus.you?(t=this.props.gameStatus.yourName,e="\u30bf\u30fc\u30f3\u3092\u7d42\u4e86\u3059\u308b"):"host"==this.props.gameStatus.nowTurnPlayer&&"guest"==this.props.gameStatus.you||"guest"==this.props.gameStatus.nowTurnPlayer&&"host"==this.props.gameStatus.you?(t=this.props.gameStatus.enemyName,e=""):"guest"==this.props.gameStatus.nowTurnPlayer&&"guest"==this.props.gameStatus.you&&(t=this.props.gameStatus.yourName,e="\u30bf\u30fc\u30f3\u3092\u7d42\u4e86\u3059\u308b"),this.props.dispatch({type:"FIRSTPLAYERSET",name:t,text:e})}}]),r}(l.Component),it=ut=Object(d.b)((function(t){return t}))(ut),pt=n("YFqc"),ft=n.n(pt);function ht(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var lt=function(t){Object(i.a)(n,t);var e=ht(n);function n(t){return Object(o.a)(this,n),e.call(this,t)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{id:"leave_box",children:Object(h.jsx)(ft.a,{href:"/",children:"\u9000\u5ba4\u3059\u308b"})})}}]),n}(l.Component);function dt(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var yt=function(t){Object(i.a)(n,t);var e=dt(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t;return t="\u3042\u306a\u305f\u306e\u52dd\u3061\uff01"==this.props.otherInfo.turnendText||"\u5bfe\u6226\u76f8\u624b\u306e\u52dd\u3061\u2026"==this.props.otherInfo.turnendText?Object(h.jsx)(lt,{}):Object(h.jsx)(it,{}),Object(h.jsxs)("div",{id:"right_area",children:[Object(h.jsx)(rt,{}),t,Object(h.jsx)(ot,{})]})}}]),n}(l.Component),mt=yt=Object(d.b)((function(t){return t}))(yt);function jt(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var bt=function(t){Object(i.a)(n,t);var e=jt(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{id:"turn_box",children:this.props.otherInfo.turnPlayerText})}}]),n}(l.Component),Ot=bt=Object(d.b)((function(t){return t}))(bt);function gt(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var vt=function(t){Object(i.a)(n,t);var e=gt(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{id:"cardtext_box",children:this.props.otherInfo.text})}}]),n}(l.Component),St=vt=Object(d.b)((function(t){return t}))(vt);function xt(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var Rt=function(t){Object(i.a)(n,t);var e=xt(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{id:"log_box",children:this.props.otherInfo.logs.map((function(t,e){return Object(h.jsx)("p",{children:t},e)}))})}}]),n}(l.Component),Dt=Rt=Object(d.b)((function(t){return t}))(Rt);function kt(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var Nt=function(t){Object(i.a)(n,t);var e=kt(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{id:"sub_box",children:[Object(h.jsx)(Ot,{}),Object(h.jsx)(St,{}),Object(h.jsx)(Dt,{})]})}}]),n}(l.Component);function wt(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var It=function(t){Object(i.a)(r,t);var e=wt(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(s.a)(r,[{key:"handUpdate",value:function(t,e,r){var a=this;m.a.post("./php/update/hand_update.php",n("s4NR").stringify({gameId:t,whoseHand:e})).then((function(t){return"you"==r?a.props.dispatch({type:"YOURHANDUPDATE",newHand:t.data}):"enemy"==r?a.props.dispatch({type:"ENEMYHANDUPDATE",newHand:t.data.length}):void 0})).catch((function(t){}))}},{key:"archiUpdate",value:function(t,e,r){var a=this;m.a.post("./php/update/archi_update.php",n("s4NR").stringify({gameId:t,whoseArchi:e})).then((function(t){return"you"==r?a.props.dispatch({type:"YOURARCHIUPDATE",newArchi:t.data}):"enemy"==r?a.props.dispatch({type:"ENEMYARCHIUPDATE",newArchi:t.data}):void 0})).catch((function(t){}))}},{key:"infoUpdate",value:function(t,e,r){var a=this;m.a.post("./php/update/info_update.php",n("s4NR").stringify({gameId:t,whoseInfo:e})).then((function(t){var e=t.data;return"you"==r?a.props.dispatch({type:"YOURINFOUPDATE",yourDeckNum:e.deck,yourTrashNum:e.trash,yourVicPnt:e.point,yourMana:e.mana,yourGold:e.gold}):"enemy"==r?a.props.dispatch({type:"ENEMYINFOUPDATE",enemyDeckNum:e.deck,enemyTrashNum:e.trash,enemyVicPnt:e.point,enemyMana:e.mana,enemyGold:e.gold}):void 0})).catch((function(t){}))}},{key:"allUpdate",value:function(t,e,n){this.handUpdate(t,e,n),this.archiUpdate(t,e,n),this.infoUpdate(t,e,n)}},{key:"render",value:function(){return Object(h.jsxs)("div",{id:"box_box",children:[S.a,x.a,Object(h.jsxs)("div",{id:"main_box",children:[Object(h.jsx)(tt,{}),Object(h.jsx)(mt,{})]}),Object(h.jsx)(Nt,{})]})}},{key:"componentDidMount",value:function(){var t=Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.allUpdate(this.props.gameStatus.gameID,this.props.gameStatus.you,"you");case 2:return t.next=4,this.allUpdate(this.props.gameStatus.gameID,this.props.gameStatus.enemy,"enemy");case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),r}(l.Component),Ut=It=Object(d.b)((function(t){return t}))(It);function Et(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var Tt=function(t){Object(i.a)(n,t);var e=Et(n);function n(t){return Object(o.a)(this,n),e.call(this,t)}return Object(s.a)(n,[{key:"render",value:function(){var t;return t="unset"!=this.props.gameStatus.enemyName?"\u5bfe\u6226\u76f8\u624b\u3092\u63a2\u3057\u3066\u3044\u307e\u3059\u3002":"\u5bfe\u6226\u76f8\u624b\u3092\u5f85\u3063\u3066\u3044\u307e\u3059\u3002",Object(h.jsx)("div",{children:t})}}]),n}(l.Component),_t=Tt=Object(d.b)((function(t){return t}))(Tt);function Pt(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var At=function(t){Object(i.a)(r,t);var e=Pt(r);function r(t){var n;return Object(o.a)(this,r),(n=e.call(this,t)).state={guestSetUpFinished:!1},n.entry=n.entry.bind(Object(u.a)(n)),n}return Object(s.a)(r,[{key:"entry",value:function(){var t=Object(c.a)(a.a.mark((function t(){var e,r,o,s,u,i,p,f,h=this;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=!1,t.next=3,j.a.get().then((function(t){t.docs.map((function(t){return t.data()})).forEach((function(t){"unset"==t.guestname&&(e=!0,r=t.serverID,o=t.nowturnplayer)}))}));case 3:if(0!=e){t.next=16;break}return r=Math.floor(1e6*Math.random()),s=Math.floor(2*Math.random()),u=0==s?"host":"guest",i=String(r),t.next=10,b(i,this.props.gameStatus.yourName,u);case 10:return t.next=12,this.props.dispatch({type:"YOUAREHOST",gameId:i,nowTurnPlayer:u});case 12:p=!1,j.a.doc(this.props.gameStatus.gameID).onSnapshot(function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=p){t.next=11;break}if("unset"==e.data().guestname){t.next=9;break}return p=!0,g(h.props.gameStatus.gameID,h.props.gameStatus.yourName,e.data().guestname),t.next=6,v(h.props.gameStatus.gameID,h.props.gameStatus.you);case 6:h.marketCreate(h.props.gameStatus.gameID,h.props.gameStatus.you,h.props.market.marketTopArr,h.props.market.marketBottomArr),h.props.dispatch({type:"GUESTUPDATE",guestname:e.data().guestname}),h.draw(h.props.gameStatus.gameID,h.props.gameStatus.you,4);case 9:t.next=12;break;case 11:1==e.data().guestSetUpFinished&&0==h.state.guestSetUpFinished?h.setState((function(t){return{guestSetUpFinished:!0}})):1==e.data().guestSetUpFinished&&1==h.state.guestSetUpFinished&&(0==isNaN(e.data().finalLog)?("./php/id_to_name.php","http://localhost/wizard-contest3/php/id_to_name.php",m.a.post("./php/id_to_name.php",n("s4NR").stringify({id:e.data().finalLog})).then((function(t){h.props.dispatch({type:"LOGUPDATE",pushLog:t.data+"\u3092\u30d7\u30ec\u30a4\u3002"}),h.allUpdate(h.props.gameStatus.gameID,h.props.gameStatus.you,"you"),h.allUpdate(h.props.gameStatus.gameID,h.props.gameStatus.enemy,"enemy")})).catch((function(t){}))):"hostwin!"==e.data().finalLog?("./php/user/win.php","http://localhost/wizard-contest3/php/user/win.php",m.a.post("./php/user/win.php",n("s4NR").stringify({userId:h.props.userStatus.userID,username:h.props.userStatus.userName})).then((function(t){console.log("host win"),h.props.dispatch({type:"YOUWIN"})})).catch((function(t){}))):"guestwin!"==e.data().finalLog?("./php/user/lose.php","http://localhost/wizard-contest3/php/user/lose.php",m.a.post("./php/user/lose.php",n("s4NR").stringify({userId:h.props.userStatus.userID,username:h.props.userStatus.userName})).then((function(t){console.log("host lose"),h.props.dispatch({type:"YOULOSE"})})).catch((function(t){}))):(h.props.dispatch({type:"LOGUPDATE",pushLog:e.data().finalLog}),h.allUpdate(h.props.gameStatus.gameID,h.props.gameStatus.you,"you"),h.allUpdate(h.props.gameStatus.gameID,h.props.gameStatus.enemy,"enemy")),e.data().nowturnplayer!=h.props.gameStatus.nowTurnPlayer&&e.data().nowturnplayer==h.props.gameStatus.you&&("./php/action/turnstart_activate.php","http://localhost/wizard-contest3/php/action/turnstart_activate.php",m.a.post("./php/action/turnstart_activate.php",n("s4NR").stringify({gameId:h.props.gameStatus.gameID,whose:h.props.gameStatus.you})).then((function(t){h.props.dispatch({type:"TURNRECEIVED"}),h.allUpdate(h.props.gameStatus.gameID,h.props.gameStatus.you,"you"),h.allUpdate(h.props.gameStatus.gameID,h.props.gameStatus.enemy,"enemy")})).catch((function(t){}))));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=20;break;case 16:O(r,this.props.gameStatus.yourName),this.props.dispatch({type:"YOUAREGUEST",gameId:r,nowTurnPlayer:o}),f=!1,j.a.doc(this.props.gameStatus.gameID).onSnapshot(function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=f){t.next=10;break}if("unset"==e.data().hostname){t.next=8;break}return f=!0,v(h.props.gameStatus.gameID,h.props.gameStatus.you),t.next=6,h.marketCreate(h.props.gameStatus.gameID,h.props.gameStatus.you,h.props.market.marketTopArr,h.props.market.marketBottomArr);case 6:h.props.dispatch({type:"HOSTUPDATE",hostname:e.data().hostname}),h.draw(h.props.gameStatus.gameID,h.props.gameStatus.you,4);case 8:t.next=11;break;case 10:1==e.data().guestSetUpFinished&&0==h.state.guestSetUpFinished?h.setState((function(t){return{guestSetUpFinished:!0}})):1==e.data().guestSetUpFinished&&1==h.state.guestSetUpFinished&&(0==isNaN(e.data().finalLog)?("./php/id_to_name.php","http://localhost/wizard-contest3/php/id_to_name.php",m.a.post("./php/id_to_name.php",n("s4NR").stringify({id:e.data().finalLog})).then((function(t){h.props.dispatch({type:"LOGUPDATE",pushLog:t.data+"\u3092\u30d7\u30ec\u30a4\u3002"}),h.allUpdate(h.props.gameStatus.gameID,h.props.gameStatus.you,"you"),h.allUpdate(h.props.gameStatus.gameID,h.props.gameStatus.enemy,"enemy")})).catch((function(t){}))):"hostwin!"==e.data().finalLog?("./php/user/lose.php","http://localhost/wizard-contest3/php/user/lose.php",m.a.post("./php/user/lose.php",n("s4NR").stringify({userId:h.props.userStatus.userID,username:h.props.userStatus.userName})).then((function(t){h.props.dispatch({type:"YOULOSE"})})).catch((function(t){}))):"guestwin!"==e.data().finalLog?("./php/user/win.php","http://localhost/wizard-contest3/php/user/win.php",m.a.post("./php/user/win.php",n("s4NR").stringify({userId:h.props.userStatus.userID,username:h.props.userStatus.userName})).then((function(t){h.props.dispatch({type:"YOUWIN"})})).catch((function(t){}))):(h.props.dispatch({type:"LOGUPDATE",pushLog:e.data().finalLog}),h.allUpdate(h.props.gameStatus.gameID,h.props.gameStatus.you,"you"),h.allUpdate(h.props.gameStatus.gameID,h.props.gameStatus.enemy,"enemy")),e.data().nowturnplayer!=h.props.gameStatus.nowTurnPlayer&&e.data().nowturnplayer==h.props.gameStatus.you&&("./php/action/turnstart_activate.php","http://localhost/wizard-contest3/php/action/turnstart_activate.php",m.a.post("./php/action/turnstart_activate.php",n("s4NR").stringify({gameId:h.props.gameStatus.gameID,whose:h.props.gameStatus.you})).then((function(t){h.props.dispatch({type:"TURNRECEIVED"}),h.allUpdate(h.props.gameStatus.gameID,h.props.gameStatus.you,"you"),h.allUpdate(h.props.gameStatus.gameID,h.props.gameStatus.enemy,"enemy")})).catch((function(t){}))));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 20:case 21:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"marketCreate",value:function(t,e,r,a){var c=this;if(3==r.length){m.a.post("./php/setup/market_create.php",n("s4NR").stringify({gameId:t,isHost:e})).then((function(t){for(var e=r,n=a,o=0;o<5;o++)e.push({id:t.data[o].id,name:t.data[o].name});for(var s=0;s<5;s++)n.push({id:t.data[s+5].id,name:t.data[s+5].name});var u={type:"MARKETCREATE",marketTop:e,marketBottom:n};return c.props.dispatch(u)})).catch((function(t){}))}}},{key:"draw",value:function(t,e,r){m.a.post("./php/effect/draw.php",n("s4NR").stringify({gameId:t,whom:e,times:r})).then((function(){var n;"guest"==e&&(n=t,j.a.doc(n).update({guestSetUpFinished:!0}))})).catch((function(t){}))}},{key:"handUpdate",value:function(t,e,r){var a=this;m.a.post("./php/update/hand_update.php",n("s4NR").stringify({gameId:t,whoseHand:e})).then((function(t){return"you"==r?a.props.dispatch({type:"YOURHANDUPDATE",newHand:t.data}):"enemy"==r?a.props.dispatch({type:"ENEMYHANDUPDATE",newHand:t.data.length}):void 0})).catch((function(t){}))}},{key:"archiUpdate",value:function(t,e,r){var a=this;m.a.post("./php/update/archi_update.php",n("s4NR").stringify({gameId:t,whoseArchi:e})).then((function(t){return"you"==r?a.props.dispatch({type:"YOURARCHIUPDATE",newArchi:t.data}):"enemy"==r?a.props.dispatch({type:"ENEMYARCHIUPDATE",newArchi:t.data}):void 0})).catch((function(t){}))}},{key:"infoUpdate",value:function(t,e,r){var a=this;m.a.post("./php/update/info_update.php",n("s4NR").stringify({gameId:t,whoseInfo:e})).then((function(t){var e=t.data;return"you"==r?a.props.dispatch({type:"YOURINFOUPDATE",yourDeckNum:e.deck,yourTrashNum:e.trash,yourVicPnt:e.point,yourMana:e.mana,yourGold:e.gold}):"enemy"==r?a.props.dispatch({type:"ENEMYINFOUPDATE",enemyDeckNum:e.deck,enemyTrashNum:e.trash,enemyVicPnt:e.point,enemyMana:e.mana,enemyGold:e.gold}):void 0})).catch((function(t){}))}},{key:"allUpdate",value:function(t,e,n){this.handUpdate(t,e,n),this.archiUpdate(t,e,n),this.infoUpdate(t,e,n)}},{key:"render",value:function(){var t;return t=1==this.state.guestSetUpFinished||8==this.props.market.marketTopArr.length||8==this.props.market.marketBottomArr.length?Object(h.jsx)(Ut,{}):Object(h.jsx)(_t,{}),Object(h.jsx)("div",{children:t})}},{key:"componentDidMount",value:function(){var t=Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.entry();case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),r}(l.Component);At=Object(d.b)((function(t){return t}))(At);e.default=At}},[["07wX",1,2,4,0,3,5,6]]]);