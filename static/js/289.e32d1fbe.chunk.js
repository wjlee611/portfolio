"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[289],{9909:function(n,t,e){e.r(t),e.d(t,{default:function(){return wn}});var i=e(885),r=e(168),o=e(4549),s=e(6188),a=e(2791),c=e(2176),l=e(6444),d=e(6019);var h,u=function(){var n=document.querySelector("#scene"),t=n.getContext("2d"),e=[],i=0,r={x:0,y:0},o=document.querySelector("#copy").value,s=["#ffffff99","#ffffff99","#ffffff99"],a=n.width=400,c=n.height=100;function l(n,t){this.x=15*o.length+100*Math.random()-50,this.y=c/2+10*Math.random()-5,this.dest={x:n,y:t},this.r=1,this.vx=5*(Math.random()-.5),this.vy=5*(Math.random()-.5),this.accX=0,this.accY=0,this.friction=.05*Math.random()+.9,this.color=s[Math.floor(3*Math.random())]}function d(){setTimeout((function(){o=document.querySelector("#copy").value,a=n.width=400,c=n.height=100,t.clearRect(0,0,n.width,n.height),t.font="700 "+a/10+"px Verdana",t.textAlign="start",t.fillText(o,50,c/2);var r=t.getImageData(0,0,a,c).data;t.clearRect(0,0,n.width,n.height),t.globalCompositeOperation="screen",e=[];for(var s=0;s<a;s+=3)for(var d=0;d<c;d+=3)r[4*(s+d*a)+3]>250&&e.push(new l(s,d+13));i=e.length}),200)}l.prototype.render=function(){this.accX=(this.dest.x-this.x)/300,this.accY=(this.dest.y-this.y)/300,this.vx+=this.accX,this.vy+=this.accY,this.vx*=this.friction,this.vy*=this.friction,this.x+=this.vx,this.y+=this.vy,t.fillStyle=this.color,t.beginPath(),t.arc(this.x,this.y,this.r,2*Math.PI,!1),t.fill();var n=this.x-r.x,e=this.y-r.y;Math.sqrt(n*n+e*e)<30&&(this.accX=(this.x-r.x)/100,this.accY=(this.y-r.y)/100,this.vx+=this.accX,this.vy+=this.accY)},document.querySelector("#nav_1").addEventListener("click",(function(){return d()})),document.querySelector("#nav_2").addEventListener("click",(function(){return d()})),document.querySelector("#nav_3").addEventListener("click",(function(){return d()})),document.querySelector("#nav_4").addEventListener("click",(function(){return d()})),window.addEventListener("mousemove",(function(n){r.x=n.clientX,r.y=n.clientY})),window.addEventListener("touchmove",(function(n){n.touches.length>0&&(r.x=n.touches[0].clientX,r.y=n.touches[0].clientY)})),window.addEventListener("touchend",(function(n){r.x=-9999,r.y=-9999})),d(),requestAnimationFrame((function r(o){requestAnimationFrame(r),t.clearRect(0,0,n.width,n.height);for(var s=0;s<i;s++)e[s].render()}))},f=e(184),p=l.ZP.canvas(h||(h=(0,r.Z)(["\n  width: 400px;\n  height: 100px;\n  opacity: ",";\n  transition: opacity 0.2s linear;\n  z-index: 6;\n"])),(function(n){return n.opa}));var x,g,v,m,b,j,y,w,Z=function(n){var t=n.title,e=(0,a.useState)(0),r=(0,i.Z)(e,2),o=r[0],s=r[1];return(0,a.useEffect)((function(){u()}),[]),(0,a.useEffect)((function(){return document.querySelector("#copy").value=t,setTimeout((function(){s(1)}),200),function(){s(0)}}),[t]),(0,f.jsx)(p,{opa:o,id:"scene"})},k=l.ZP.div(x||(x=(0,r.Z)(["\n  width: 100vw;\n  height: 100px;\n  background-color: transparent;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  z-index: 4;\n"]))),S=l.ZP.div(g||(g=(0,r.Z)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding-right: 50px;\n  z-index: 5;\n"]))),P=l.ZP.button(v||(v=(0,r.Z)(["\n  width: 70px;\n  height: 70px;\n  background-color: transparent;\n  border: none;\n  position: relative;\n  & > img {\n    width: 30px;\n    height: 30px;\n    filter: ",";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: ",";\n    transition: transform 0.2s ease-out;\n  }\n  & > h1 {\n    width: 70px;\n    color: ",";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: ",";\n    opacity: ",";\n    transition: opacity 0.2s ease-out, transform 0.2s ease-out,\n      color 0.2s ease-out;\n  }\n  &:hover > img {\n    transform: translate(-50%, -70%);\n  }\n  &:hover > h1 {\n    opacity: 1;\n    transform: translate(-50%, 50%);\n  }\n"])),(function(n){return n.isSelected?"invert(68%) sepia(27%) saturate(6010%) hue-rotate(169deg) brightness(101%) contrast(104%)":"invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)"}),(function(n){return n.isSelected?"translate(-50%, -70%)":"translate(-50%, -50%)"}),(function(n){return n.isSelected?"#22bbff":"#ffffff"}),(function(n){return n.isSelected?"translate(-50%, 50%)":"translate(-50%, -50%)"}),(function(n){return n.isSelected?1:0})),I=(0,l.ZP)(s.E.div)(m||(m=(0,r.Z)(["\n  background-color: #22bbff55;\n  color: white;\n  position: fixed;\n  z-index: 5;\n  right: 50px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  border-radius: 10px;\n"]))),z=(0,l.ZP)(I)(b||(b=(0,r.Z)(["\n  width: 300px;\n  & > * {\n    margin-top: 5px;\n  }\n  & > *:last-child {\n    margin-bottom: 0;\n  }\n  & > a {\n    margin-left: 10px;\n    margin-bottom: 10px;\n    text-decoration: none;\n    color: #88eeff;\n  }\n"]))),_=(0,l.ZP)(I)(j||(j=(0,r.Z)(["\n  width: 70px;\n  & > a {\n    margin-top: 5px;\n  }\n  & > a:first-child {\n    margin: 7px 0;\n  }\n"]))),E=(0,l.ZP)(s.E.div)(y||(y=(0,r.Z)(["\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  z-index: 3;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  backdrop-filter: blur(5px);\n  & > span {\n    color: white;\n    margin-bottom: 100px;\n  }\n"]))),L=l.ZP.img(w||(w=(0,r.Z)(["\n  width: 50px;\n  height: 50px;\n  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)\n    brightness(102%) contrast(102%);\n"])));var F,M,C,T=function(n){var t=n.title,e=n.assets,r=(0,a.useState)(0),s=(0,i.Z)(r,2),c=s[0],l=s[1];return(0,f.jsxs)(k,{children:[(0,f.jsx)(Z,{title:t}),(0,f.jsxs)(S,{children:[(0,f.jsxs)(P,{isSelected:1===c,onClick:function(){l(1===c?0:1)},children:[(0,f.jsx)("img",{src:e[0],alt:"info"}),(0,f.jsx)("h1",{children:"Site Info"})]}),(0,f.jsxs)(P,{isSelected:2===c,onClick:function(){l(2===c?0:2)},children:[(0,f.jsx)("img",{src:e[1],alt:"contact"}),(0,f.jsx)("h1",{children:"Links"})]})]}),(0,f.jsxs)(o.M,{children:[1===c?(0,f.jsxs)(z,{layout:"position",initial:{opacity:0,top:80},animate:{opacity:1,top:100},exit:{opacity:0,top:105},children:[(0,f.jsx)("span",{children:"Developed by. Woong"}),(0,f.jsx)("a",{href:"https://github.com/wjlee611/portfolio",target:"_blank",rel:"noreferrer",children:(0,f.jsx)("span",{children:"> View source code @GitHub "})}),(0,f.jsx)("span",{children:"Title paricle source: Mamboleoo"}),(0,f.jsx)("span",{children:"Font: Baloo Thambi 2 @Google Fonts"}),(0,f.jsx)("span",{children:"B.G. image: Hypergryph - Arknights"})]},"info"):2===c?(0,f.jsxs)(_,{layout:"position",initial:{opacity:0,top:80},animate:{opacity:1,top:100},exit:{opacity:0,top:105},children:[(0,f.jsx)("a",{href:"https://github.com/wjlee611",target:"_blank",rel:"noreferrer",children:(0,f.jsx)(L,{src:e[2],alt:"github"})}),(0,f.jsx)("a",{href:"https://with611.tistory.com/",target:"_blank",rel:"noreferrer",children:(0,f.jsx)(L,{src:e[3],alt:"blog"})}),(0,f.jsx)("a",{href:"https://www.youtube.com/c/WITH611",target:"_blank",rel:"noreferrer",children:(0,f.jsx)(L,{src:e[4],alt:"youtube"})})]},"link"):null,0===c?null:(0,f.jsx)(E,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:function(){return l(0)},children:(0,f.jsx)("span",{children:"Click anywhere to close dialog"})},"back")]})]})},q=e(7374),R=e(1413),X=e(4165),V=e(5861),N=e(2431),Y=e(2839),O={particles:{number:{value:20},color:{value:"#ffffff"},shape:{type:"character",character:{value:["W","O","N","G","ISFJ-T","Scrupulous","Enthusiastic","JS","TS","Python","Node.js","React.js","Back-end","Web-Front"],font:"Baloo Thambi 2",style:"",weight:"400"}},opacity:{value:.7,random:!1},size:{value:10,random:!1},line_linked:{enable:!0,distance:200,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!1,straight:!1,out_mode:"bounce",bounce:!1}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:200,line_linked:{opacity:1}},repulse:{distance:200,duration:.4}}},retina_detect:!0,style:{width:"100vw",height:"100vh",position:"absolute"}},A=l.ZP.div(F||(F=(0,r.Z)(["\n  width: 100%;\n  height: 100vh;\n  background-color: #22222255;\n  color: white;\n  position: relative;\n"]))),G=l.ZP.div(M||(M=(0,r.Z)(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  overflow: hidden;\n"]))),H=l.ZP.div(C||(C=(0,r.Z)(["\n  width: 100%;\n  height: 100%;\n  padding-left: 100px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n\n  & > span,\n  & > div > span {\n    font-size: 64px;\n    display: flex;\n  }\n  & > div {\n    display: flex;\n    align-items: flex-end;\n  }\n  & > div > span:first-child {\n    font-size: 128px;\n    font-weight: 700;\n    margin-right: 20px;\n  }\n  & > div > span:last-child {\n    margin-bottom: 10px;\n  }\n"])));var W,B=function(){var n=(0,c.sJ)(d.g),t=(0,a.useCallback)(function(){var n=(0,V.Z)((0,X.Z)().mark((function n(t){return(0,X.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,Y.R)(t);case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),[]);return(0,f.jsxs)(A,{children:[(0,f.jsx)(G,{isSelected:n,children:(0,f.jsx)(N.Z,{init:t,options:(0,R.Z)({},O)})}),(0,f.jsxs)(H,{children:[(0,f.jsx)("span",{children:"Hello!"}),(0,f.jsxs)("div",{children:[(0,f.jsx)("span",{children:"Woong"}),(0,f.jsx)("span",{children:"is here!"})]})]})]})},J=l.ZP.div(W||(W=(0,r.Z)(["\n  width: 100%;\n  height: 100vh;\n  padding-top: 100px;\n  background-color: #22222255;\n  color: white;\n"])));var D,K=function(){return(0,f.jsx)(J,{children:(0,f.jsx)("h1",{children:"MyMoreInfo"})})},Q=l.ZP.div(D||(D=(0,r.Z)(["\n  width: 100%;\n  height: 100vh;\n  padding-top: 100px;\n  background-color: #22222255;\n  color: white;\n"])));var U,$=function(){return(0,f.jsx)(Q,{children:(0,f.jsx)("h1",{children:"Projects"})})},nn=l.ZP.div(U||(U=(0,r.Z)(["\n  width: 100%;\n  height: 100vh;\n  padding-top: 100px;\n  background-color: #22222255;\n  color: white;\n"])));var tn,en,rn,on=function(){return(0,f.jsx)(nn,{children:(0,f.jsx)("h1",{children:"TimeLine"})})},sn=l.ZP.div(tn||(tn=(0,r.Z)(["\n  width: 150px;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-between;\n  position: fixed;\n  right: 0;\n  top: 50%;\n  transform: translate(0, -50%);\n  z-index: 2;\n"]))),an=l.ZP.button(en||(en=(0,r.Z)(["\n  width: 150px;\n  height: 30px;\n  background-color: transparent;\n  border: none;\n  color: ",";\n  margin-right: ",";\n  transition: color 0.3s ease-out,\n    margin-right 0.3s cubic-bezier(0, 0.5, 0.5, 1);\n  position: relative;\n  & > span {\n    width: 150px;\n    height: 30px;\n    font-size: 20px;\n    font-weight: ",";\n    display: flex;\n    justify-content: ",";\n    align-items: center;\n    padding-right: 10px;\n    padding-left: 20px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 2;\n  }\n  & > div {\n    width: 170px;\n    transform: ",";\n    transition: transform 0.3s cubic-bezier(0, 0.5, 0.5, 1);\n    will-change: transform;\n  }\n  &:hover > div {\n    transform: translateX(0%);\n  }\n"])),(function(n){return n.isSelected?"#22bbff":"#FFFFFF"}),(function(n){return n.isSelected?"20px":"0"}),(function(n){return n.isSelected?"700":"400"}),(function(n){return n.isSelected?"flex-start":"flex-end"}),(function(n){return n.isSelected?"translateX(0%)":"translateX(100%)"})),cn=l.ZP.div(rn||(rn=(0,r.Z)(["\n  width: 170px;\n  height: 30px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  right: -20px;\n  background: linear-gradient(90deg, #22bbff 1%, #00000077 5%);\n  z-index: 1;\n"])));var ln=function(){var n=(0,c.FV)(d.g),t=(0,i.Z)(n,2),e=t[0],r=t[1];return(0,f.jsxs)(sn,{children:[(0,f.jsxs)(an,{id:"nav_1",onClick:function(){return r(1)},isSelected:1===e,children:[(0,f.jsx)("span",{children:"Home"}),(0,f.jsx)(cn,{})]}),(0,f.jsxs)(an,{id:"nav_2",onClick:function(){return r(2)},isSelected:2===e,children:[(0,f.jsx)("span",{children:"Information"}),(0,f.jsx)(cn,{})]}),(0,f.jsxs)(an,{id:"nav_3",onClick:function(){return r(3)},isSelected:3===e,children:[(0,f.jsx)("span",{children:"Projects"}),(0,f.jsx)(cn,{})]}),(0,f.jsxs)(an,{id:"nav_4",onClick:function(){return r(4)},isSelected:4===e,children:[(0,f.jsx)("span",{children:"Time Line"}),(0,f.jsx)(cn,{})]})]})},dn=e.p+"static/media/background.24aaaa1654f269624896.jpg";var hn=e.p+"static/media/linode-brands.efc1660b2a56fb30d41f86130cb58e6b.svg";var un=e.p+"static/media/circle-nodes-solid.b08973c009e5d05f66078bb9ffb3e072.svg";var fn=e.p+"static/media/github.833b63e28cadf07403bc81451d30b858.svg";var pn=e.p+"static/media/blog.d8adfbd670c975416fa2a43be75719a2.svg";var xn,gn,vn,mn=e.p+"static/media/youtube.87350b41a36870581ed6bbca31d713b0.svg",bn=l.ZP.div(xn||(xn=(0,r.Z)(["\n  width: 100vw;\n  height: 100vh;\n  &::-webkit-scrollbar {\n    width: 0;\n    background: transparent;\n  }\n"]))),jn=l.ZP.img(gn||(gn=(0,r.Z)(["\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  z-index: 1;\n"]))),yn=l.ZP.div(vn||(vn=(0,r.Z)(["\n  position: fixed;\n  height: 0;\n  opacity: 0;\n  pointer-events: none;\n"])));var wn=function(){var n=(0,c.FV)(d.N),t=(0,i.Z)(n,2),e=t[0],r=t[1],l=(0,c.sJ)(d.g),h=(0,a.useRef)(null),u=(0,a.useRef)(null),p=(0,a.useRef)(null),x=(0,a.useRef)(null);return(0,a.useEffect)((function(){var n,t,e,i;1===l&&(null===(n=h.current)||void 0===n||n.scrollIntoView({behavior:"smooth"})),2===l&&(null===(t=u.current)||void 0===t||t.scrollIntoView({behavior:"smooth"})),3===l&&(null===(e=p.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})),4===l&&(null===(i=x.current)||void 0===i||i.scrollIntoView({behavior:"smooth"}))}),[l]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.M,{children:e?null:(0,f.jsx)(s.E.div,{exit:{opacity:0},style:{position:"fixed",zIndex:10},children:(0,f.jsx)(q.Z,{status:40})},"loaded")}),(0,f.jsx)(jn,{src:dn,alt:"bg",onLoad:function(){return r((function(n){return n+1}))}}),(0,f.jsxs)(yn,{className:"Image_Assets_Preload",children:[(0,f.jsx)("img",{src:hn,alt:"InfoImg",onLoad:function(){return r((function(n){return n+1}))}}),(0,f.jsx)("img",{src:un,alt:"ContactImg",onLoad:function(){return r((function(n){return n+1}))}}),(0,f.jsx)("img",{src:fn,alt:"GitHubImg",onLoad:function(){return r((function(n){return n+1}))}}),(0,f.jsx)("img",{src:pn,alt:"BlogImg",onLoad:function(){return r((function(n){return n+1}))}}),(0,f.jsx)("img",{src:mn,alt:"YoutubeImg",onLoad:function(){return r((function(n){return n+1}))}})]}),(0,f.jsxs)(bn,{children:[(0,f.jsx)(T,{title:1===l?"DEV. WOONG":2===l?"INFOMATION":3===l?"PROJECTS":4===l?"TIME LINE":"",assets:[hn,un,fn,pn,mn]}),(0,f.jsx)(ln,{}),(0,f.jsxs)("div",{style:{width:"100%",position:"absolute",top:0,zIndex:1},children:[(0,f.jsx)("div",{ref:h,children:(0,f.jsx)(B,{})}),(0,f.jsx)("div",{ref:u,children:(0,f.jsx)(K,{})}),(0,f.jsx)("div",{ref:p,children:(0,f.jsx)($,{})}),(0,f.jsx)("div",{ref:x,children:(0,f.jsx)(on,{})})]})]})]})}}}]);
//# sourceMappingURL=289.e32d1fbe.chunk.js.map