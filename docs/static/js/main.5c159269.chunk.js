(this.webpackJsonpaccessibility=this.webpackJsonpaccessibility||[]).push([[0],{11:function(e,t,a){e.exports=a(22)},16:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(1),r=a.n(i),s=(a(16),a(9)),c=a(3),l=a(4),u=a(8),m=a(5),d=a(10),v=a(6),h=a.n(v),g=a(7),p=a.n(g),y=(a(21),{name:"my-map",areas:[{name:"Hogan",shape:"rect",coords:[195,379,219,398],preFillColor:"rgb(255,255,255,0.3)",lineWidth:1},{name:"SIPA",shape:"rect",coords:[365,178,406,192],preFillColor:"rgb(255,255,255,0.3)",lineWidth:1},{name:"Pupin",shape:"rect",coords:[215,84,250,96],preFillColor:"rgb(255,255,255,0.3)",lineWidth:1},{name:"Kent",shape:"rect",coords:[302,250,342,261],preFillColor:"rgb(255,255,255,0.3)",lineWidth:1},{name:"Low Library",shape:"rect",coords:[252,187,289,225],lineWidth:1,preFillColor:"rgba(255, 255, 255, 0.3)"}]}),f=p.a,k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={hoveredArea:null,msg:null,moveMsg:null},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"load",value:function(){this.setState({msg:"Interact with image !"})}},{key:"clicked",value:function(e){this.setState({msg:"You clicked on ".concat(e.shape," at coords ").concat(JSON.stringify(e.coords)," !")})}},{key:"clickedOutside",value:function(e){var t={x:e.nativeEvent.layerX,y:e.nativeEvent.layerY};this.setState({msg:"You clicked on the image at coords ".concat(JSON.stringify(t)," !")})}},{key:"moveOnImage",value:function(e){var t={x:e.nativeEvent.layerX,y:e.nativeEvent.layerY};this.setState({moveMsg:"You moved on the image at coords ".concat(JSON.stringify(t)," !")})}},{key:"enterArea",value:function(e){this.setState({hoveredArea:e,msg:"You entered ".concat(e.shape," ").concat(e.name," at coords ").concat(JSON.stringify(e.coords)," !")})}},{key:"leaveArea",value:function(e){this.setState({hoveredArea:null,msg:"You leaved ".concat(e.shape," ").concat(e.name," at coords ").concat(JSON.stringify(e.coords)," !")})}},{key:"moveOnArea",value:function(e,t){var a={x:t.nativeEvent.layerX,y:t.nativeEvent.layerY};this.setState({moveMsg:"You moved on ".concat(e.shape," ").concat(e.name," at coords ").concat(JSON.stringify(a)," !")})}},{key:"getTipPosition",value:function(e){return{top:"".concat(e.center[1],"px"),left:"".concat(e.center[0],"px")}}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"grid"},o.a.createElement("div",{className:"presenter"},o.a.createElement("div",{style:{position:"relative"}},o.a.createElement(h.a,{src:f,map:y,width:500,onLoad:function(){return e.load()},onClick:function(t){return e.clicked(t)},onMouseEnter:function(t){return e.enterArea(t)},onMouseLeave:function(t){return e.leaveArea(t)},onMouseMove:function(t,a,n){return e.moveOnArea(t,n)},onImageClick:function(t){return e.clickedOutside(t)},onImageMouseMove:function(t){return e.moveOnImage(t)},lineWidth:4,strokeColor:"white"}),this.state.hoveredArea&&o.a.createElement("span",{className:"tooltip",style:Object(s.a)({},this.getTipPosition(this.state.hoveredArea))},this.state.hoveredArea&&this.state.hoveredArea.name)),o.a.createElement("pre",{className:"message"},this.state.msg?this.state.msg:null),o.a.createElement("pre",null,this.state.moveMsg?this.state.moveMsg:null)),o.a.createElement("div",{className:"source"},o.a.createElement("h2",null,"Accessibility Information :"),"Building Name : \xa0",o.a.createElement("span",{onClick:function(){return e.setState({codeDetails:!e.state.codeDetails})}},this.state.codeDetails?"[-]":"[+]"),o.a.createElement("br",null),"Details : \xa0",o.a.createElement("span",{onClick:function(){return e.setState({stylindDetails:!e.state.stylindDetails})}},this.state.stylindDetails?"[-]":"[+]")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,a){e.exports=a.p+"static/media/map.73f03c53.png"}},[[11,1,2]]]);
//# sourceMappingURL=main.5c159269.chunk.js.map