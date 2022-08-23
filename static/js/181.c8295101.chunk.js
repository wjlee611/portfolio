"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[181],{1417:function(n,t,e){e.r(t),e.d(t,{default:function(){return Yt}});var i=e(885),r=e(168),o=e(4549),s=e(6188),a=e(2791),l=e(6005),c=e(6444),d=e(6019);var h,p=function(){var n=document.querySelector("#scene"),t=n.getContext("2d"),e=[],i=0,r={x:0,y:0},o=document.querySelector("#copy").value,s=n.width=400,a=n.height=100;function l(n,t){this.x=Math.round(15*o.length+100*Math.random()-50),this.y=Math.round(a/2+10*Math.random()-5),this.dest={x:n,y:t},this.r=2,this.vx=Math.round(4*(Math.random()-.5)),this.vy=Math.round(4*(Math.random()-.5)),this.accX=0,this.accY=0,this.friction=.05*Math.random()+.9,this.color="#888"}function c(){setTimeout((function(){o=document.querySelector("#copy").value,s=n.width=400,a=n.height=100,t.clearRect(0,0,n.width,n.height),t.font="700 "+s/10+"px Verdana",t.textAlign="start",t.fillText(o,50,a/2);var r=t.getImageData(0,0,s,a).data;t.clearRect(0,0,n.width,n.height),t.globalCompositeOperation="screen",e=[];for(var c=0;c<s;c+=3)for(var d=0;d<a;d+=3)r[4*(c+d*s)+3]>250&&e.push(new l(c,d+13));i=e.length}),200)}l.prototype.render=function(){this.accX=(this.dest.x-this.x)/300,this.accY=(this.dest.y-this.y)/300,this.vx+=this.accX,this.vy+=this.accY,this.vx*=this.friction,this.vy*=this.friction,this.x+=this.vx,this.y+=this.vy,t.fillStyle=this.color,t.beginPath(),t.rect(this.x,this.y,this.r,this.r),t.fill();var n=this.x-r.x,e=this.y-r.y;Math.sqrt(n*n+e*e)<30&&(this.accX=(this.x-r.x)/100,this.accY=(this.y-r.y)/100,this.vx+=this.accX,this.vy+=this.accY)},document.querySelector("#nav_1").addEventListener("click",(function(){return c()})),document.querySelector("#nav_2").addEventListener("click",(function(){return c()})),document.querySelector("#nav_3").addEventListener("click",(function(){return c()})),document.querySelector("#nav_4").addEventListener("click",(function(){return c()})),window.addEventListener("mousemove",(function(n){r.x=n.clientX,r.y=n.clientY})),window.addEventListener("touchmove",(function(n){n.touches.length>0&&(r.x=n.touches[0].clientX,r.y=n.touches[0].clientY)})),window.addEventListener("touchend",(function(){r.x=-9999,r.y=-9999})),c(),requestAnimationFrame((function r(){requestAnimationFrame(r),t.clearRect(0,0,n.width,n.height);for(var o=0;o<i;o++)e[o].render()}))},x=e(184),u=c.ZP.canvas(h||(h=(0,r.Z)(["\n  width: 400px;\n  height: 100px;\n  opacity: ",";\n  transition: opacity 0.2s linear;\n  z-index: 6;\n"])),(function(n){return n.opa}));var f,g,b,m,v,j,w,y,Z=function(n){var t=n.title,e=(0,a.useState)(0),r=(0,i.Z)(e,2),o=r[0],s=r[1];return(0,a.useEffect)((function(){p()}),[]),(0,a.useEffect)((function(){return document.querySelector("#copy").value=t,setTimeout((function(){s(1)}),200),function(){s(0)}}),[t]),(0,x.jsx)(u,{opa:o,id:"scene"})},k=c.ZP.div(f||(f=(0,r.Z)(["\n  width: 100vw;\n  height: 100px;\n  background-color: transparent;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  z-index: 4;\n  backdrop-filter: blur(5px);\n"]))),P=c.ZP.div(g||(g=(0,r.Z)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding-right: 50px;\n  z-index: 5;\n"]))),S=c.ZP.button(b||(b=(0,r.Z)(["\n  width: 70px;\n  height: 70px;\n  background-color: transparent;\n  border: none;\n  position: relative;\n  & > img {\n    width: 30px;\n    height: 30px;\n    filter: ",";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: ",";\n    transition: transform 0.2s ease-out;\n  }\n  & > h1 {\n    width: 70px;\n    color: ",";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: ",";\n    opacity: ",";\n    transition: opacity 0.2s ease-out, transform 0.2s ease-out,\n      color 0.2s ease-out;\n  }\n  &:hover > img {\n    transform: translate(-50%, -70%);\n  }\n  &:hover > h1 {\n    opacity: 1;\n    transform: translate(-50%, 50%);\n  }\n"])),(function(n){return n.isSelected?"invert(68%) sepia(27%) saturate(6010%) hue-rotate(169deg) brightness(101%) contrast(104%)":"invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)"}),(function(n){return n.isSelected?"translate(-50%, -70%)":"translate(-50%, -50%)"}),(function(n){return n.isSelected?"#22bbff":"#ffffff"}),(function(n){return n.isSelected?"translate(-50%, 50%)":"translate(-50%, -50%)"}),(function(n){return n.isSelected?1:0})),E=(0,c.ZP)(s.E.div)(m||(m=(0,r.Z)(["\n  background-color: #22bbff55;\n  color: white;\n  position: fixed;\n  z-index: 5;\n  right: 50px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  border-radius: 10px;\n"]))),z=(0,c.ZP)(E)(v||(v=(0,r.Z)(["\n  width: 300px;\n  & > * {\n    margin-top: 5px;\n  }\n  & > *:last-child {\n    margin-bottom: 0;\n  }\n  & > a {\n    margin-left: 10px;\n    margin-bottom: 10px;\n    text-decoration: none;\n    color: #88eeff;\n  }\n  & > span:nth-last-child(1),\n  & > span:nth-last-child(2),\n  & > span:nth-last-child(3) {\n    margin-left: 10px;\n    color: #88eeff;\n  }\n"]))),I=(0,c.ZP)(E)(j||(j=(0,r.Z)(["\n  width: 70px;\n  & > a {\n    margin-top: 5px;\n  }\n  & > a:first-child {\n    margin: 7px 0;\n  }\n"]))),F=(0,c.ZP)(s.E.div)(w||(w=(0,r.Z)(["\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  z-index: 3;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  background-color: rgba(0, 0, 0, 0.8);\n  & > span {\n    color: white;\n    margin-bottom: 100px;\n  }\n"]))),C=c.ZP.img(y||(y=(0,r.Z)(["\n  width: 50px;\n  height: 50px;\n  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)\n    brightness(102%) contrast(102%);\n"])));var L,T,D,N=function(n){var t=n.title,e=n.assets,r=(0,a.useState)(0),s=(0,i.Z)(r,2),l=s[0],c=s[1];return(0,x.jsxs)(k,{children:[(0,x.jsx)(Z,{title:t}),(0,x.jsxs)(P,{children:[(0,x.jsxs)(S,{isSelected:1===l,onClick:function(){c(1===l?0:1)},children:[(0,x.jsx)("img",{src:e[0],alt:"info"}),(0,x.jsx)("h1",{children:"Site Info"})]}),(0,x.jsxs)(S,{isSelected:2===l,onClick:function(){c(2===l?0:2)},children:[(0,x.jsx)("img",{src:e[1],alt:"contact"}),(0,x.jsx)("h1",{children:"Links"})]})]}),(0,x.jsxs)(o.M,{children:[1===l?(0,x.jsxs)(z,{layout:"position",initial:{opacity:0,top:80},animate:{opacity:1,top:100},exit:{opacity:0,top:105},children:[(0,x.jsx)("span",{children:"Developed by. Woong"}),(0,x.jsx)("a",{href:"https://github.com/wjlee611/portfolio",target:"_blank",rel:"noreferrer",children:(0,x.jsx)("span",{children:"> View source code @GitHub "})}),(0,x.jsx)("span",{children:"Other Sources from"}),(0,x.jsx)("span",{children:"> Title paricle: Mamboleoo"}),(0,x.jsx)("span",{children:"> Font : Baloo Thambi 2, Jua"}),(0,x.jsx)("span",{children:"> B.G. image: Hypergryph"})]},"info"):2===l?(0,x.jsxs)(I,{layout:"position",initial:{opacity:0,top:80},animate:{opacity:1,top:100},exit:{opacity:0,top:105},children:[(0,x.jsx)("a",{href:"https://github.com/wjlee611",target:"_blank",rel:"noreferrer",children:(0,x.jsx)(C,{src:e[2],alt:"github"})}),(0,x.jsx)("a",{href:"https://with611.tistory.com/",target:"_blank",rel:"noreferrer",children:(0,x.jsx)(C,{src:e[3],alt:"blog"})}),(0,x.jsx)("a",{href:"https://www.youtube.com/c/WITH611",target:"_blank",rel:"noreferrer",children:(0,x.jsx)(C,{src:e[4],alt:"youtube"})})]},"link"):null,0===l?null:(0,x.jsx)(F,{initial:{opacity:0},animate:{opacity:1,transition:{duration:.2}},exit:{opacity:0,transition:{duration:.2}},onClick:function(){return c(0)},children:(0,x.jsx)("span",{children:"Click anywhere to close dialog"})},"back")]})]})},A=e(7374),M=e(1413),_=e(4165),R=e(5861),O=e(2431),B=e(2839),V={particles:{number:{value:20},color:{value:"#ffffff"},shape:{type:"character",character:{value:["W","O","N","G","ISFJ-T","Scrupulous","Enthusiastic","JS","TS","Python","Node.js","React.js","Back-end","Web-Front"],font:"Baloo Thambi 2",style:"",weight:"400"}},opacity:{value:.7,random:!1},size:{value:10,random:!1},line_linked:{enable:!0,distance:200,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!1,straight:!1,out_mode:"bounce",bounce:!1}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:200,line_linked:{opacity:1}},repulse:{distance:200,duration:.4}}},retina_detect:!0,style:{width:"100vw",height:"100vh",position:"absolute"}},q=c.ZP.div(L||(L=(0,r.Z)(["\n  width: 100%;\n  height: 100vh;\n  color: white;\n  position: relative;\n  scroll-snap-align: start;\n  opacity: ",";\n  transition: opacity 0.2s ease-out;\n"])),(function(n){return n.inView?1:0})),H=c.ZP.div(T||(T=(0,r.Z)(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  overflow: hidden;\n"]))),J=c.ZP.div(D||(D=(0,r.Z)(["\n  width: 100%;\n  height: 100%;\n  padding-left: 100px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n\n  & > span,\n  & > div > span {\n    font-size: 64px;\n    display: flex;\n  }\n  & > div {\n    display: flex;\n    align-items: flex-end;\n  }\n  & > div > span:first-child {\n    font-size: 128px;\n    font-weight: 700;\n    margin-right: 20px;\n  }\n  & > div > span:last-child {\n    margin-bottom: 10px;\n  }\n"])));var Y,X,G,W,K,$=function(){var n=(0,l.sJ)(d.g),t=(0,a.useCallback)(function(){var n=(0,R.Z)((0,_.Z)().mark((function n(t){return(0,_.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,B.R)(t);case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),[]);return(0,x.jsxs)(q,{inView:1===n,children:[(0,x.jsx)(H,{children:(0,x.jsx)(O.Z,{init:t,options:(0,M.Z)({},V)})}),(0,x.jsxs)(J,{children:[(0,x.jsx)("span",{children:"Hello!"}),(0,x.jsxs)("div",{children:[(0,x.jsx)("span",{children:"Woong"}),(0,x.jsx)("span",{children:"is here!"})]})]})]})},Q=e.p+"static/media/woong.e135391ce6bd24d8c321.jpeg",U=e(1134),nn=e(7530),tn=c.ZP.div(Y||(Y=(0,r.Z)(["\n  width: 100%;\n  height: 100%;\n  & > form {\n    width: 100%;\n    height: 100%;\n  }\n"]))),en=c.ZP.div(X||(X=(0,r.Z)(['\n  width: 100%;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n  position: relative;\n  & > span:first-child {\n    width: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #22bbff;\n    border-radius: 10px;\n    padding: 5px 0;\n    margin-right: 10px;\n  }\n  & > input {\n    width: 300px;\n    height: 30px;\n    background-color: transparent;\n    color: white;\n    font-family: "Baloo Thambi 2", "Jua", cursive;\n    font-size: 16px;\n    font-weight: 700;\n    border: none;\n  }\n  & > input:focus {\n    outline: none;\n  }\n  & > span:last-child {\n    position: absolute;\n    top: 30px;\n    left: 110px;\n    color: tomato;\n  }\n']))),rn=c.ZP.div(G||(G=(0,r.Z)(["\n  width: 100%;\n  position: relative;\n  & > span:first-child {\n    width: 100%;\n    display: flex;\n    font-weight: 700;\n    color: #22bbff;\n    border-bottom: 1px solid #22bbff;\n  }\n  & > span:nth-child(2) {\n    position: absolute;\n    top: 0;\n    right: 0;\n    color: tomato;\n  }\n"]))),on=c.ZP.div(W||(W=(0,r.Z)(['\n  width: 100%;\n  height: 300px;\n  position: relative;\n  & > textarea {\n    width: 100%;\n    height: 100%;\n    background-color: transparent;\n    color: white;\n    font-family: "Baloo Thambi 2", "Jua", cursive;\n    font-size: 16px;\n    font-weight: 700;\n    border: none;\n    border-bottom: 1px solid #22bbff;\n    resize: none;\n    /* width */\n    &::-webkit-scrollbar {\n      width: 3px;\n    }\n    /* Track */\n    &::-webkit-scrollbar-track {\n      background: #22bbff33;\n    }\n    /* Handle */\n    &::-webkit-scrollbar-thumb {\n      background: #22bbff;\n    }\n    /* Handle on hover */\n    &::-webkit-scrollbar-thumb:hover {\n      background: #1788cc;\n    }\n  }\n  & > textarea:focus {\n    outline: none;\n  }\n  & > textarea::placeholder {\n    outline: none;\n    font-size: 16px;\n  }\n']))),sn=c.ZP.input(K||(K=(0,r.Z)(["\n  width: 120px;\n  position: absolute;\n  top: -100px;\n  right: 20px;\n  color: white;\n  background-color: ",";\n  border: 1px solid\n    ",';\n  border-radius: 5px;\n  padding: 5px 20px;\n  font-family: "Baloo Thambi 2", "Jua", cursive;\n  transition: background-color 0.3s ease-out, border 0.3s ease-out;\n'])),(function(n){return"SENDED"===n.submitStatus?"#53BF9D":"FAILED"===n.submitStatus?"#F94C66":"transparent"}),(function(n){return"SENDED"===n.submitStatus?"#53BF9D":"FAILED"===n.submitStatus?"#F94C66":"#22bbff"}));var an,ln,cn,dn,hn,pn,xn,un,fn,gn=function(){var n,t,e=(0,U.cI)(),r=e.register,o=e.handleSubmit,s=e.setError,l=e.resetField,c=e.formState.errors,d=(0,a.useState)("NORMAL"),h=(0,i.Z)(d,2),p=h[0],u=h[1];return(0,x.jsx)(tn,{children:(0,x.jsxs)("form",{onSubmit:o((function(n){var t=n.sendEmail,e=n.contents,i=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t);c.sendEmail&&i||!c.sendEmail&&!i?s("sendEmail",{type:"focus",message:"Please write validate Email."},{shouldFocus:!0}):e.replace(/\n/g,"").length<20?s("contents",{type:"focus",message:"Please write message longer then 20."},{shouldFocus:!0}):(u("PROCESSING"),nn.ZP.send("service_oyprxjr","template_z91v8j5",{from_email:t,message:e.replace(/(?:\r\n|\r|\n)/g,"<br>")},"P9tgfLoIAqkO--ytT").then((function(n){u("SENDED"),l("sendEmail"),l("contents"),setTimeout((function(){u("NORMAL")}),2e3)}),(function(n){u("FAILED"),console.log("FAILED...",n),setTimeout((function(){u("NORMAL")}),2e3)})))})),children:[(0,x.jsxs)(en,{children:[(0,x.jsx)("span",{children:"Send from"}),(0,x.jsx)("input",(0,M.Z)((0,M.Z)({},r("sendEmail")),{},{placeholder:"username@example.com",autoComplete:"off"})),(0,x.jsx)("span",{children:null===c||void 0===c||null===(n=c.sendEmail)||void 0===n?void 0:n.message})]}),(0,x.jsxs)(rn,{children:[(0,x.jsx)("span",{children:"Message"}),(0,x.jsx)("span",{children:null===c||void 0===c||null===(t=c.contents)||void 0===t?void 0:t.message})]}),(0,x.jsxs)(on,{children:[(0,x.jsx)("textarea",(0,M.Z)((0,M.Z)({id:"message"},r("contents")),{},{placeholder:"Hello Woong!\nPlease write message longer then 20.",autoComplete:"off"})),(0,x.jsx)(sn,{type:"submit",value:"PROCESSING"===p?"Processing...":"SENDED"===p?"Sended!":"FAILED"===p?"Failed...":"Send Email",disabled:"PROCESSING"===p||"SENDED"===p||"FAILED"===p,submitStatus:p})]})]})})},bn=c.ZP.div(an||(an=(0,r.Z)(["\n  width: 100%;\n  height: 100vh;\n  padding-top: calc(25vh);\n  padding-right: 300px;\n  display: flex;\n  align-items: flex-start;\n  overflow: scroll;\n  &::-webkit-scrollbar {\n    width: 0;\n    background: transparent;\n  }\n  scroll-snap-align: start;\n"]))),mn=c.ZP.div(ln||(ln=(0,r.Z)(["\n  width: 50%;\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: white;\n  position: relative;\n  &:first-child {\n    padding: 0 20px;\n  }\n"]))),vn=c.ZP.div(cn||(cn=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  & > span {\n    font-size: 16px;\n    margin-top: 10px;\n  }\n  & > span:first-child {\n    font-size: 20px;\n    font-weight: 700;\n    color: #22bbff;\n  }\n"]))),jn=c.ZP.img(dn||(dn=(0,r.Z)(["\n  width: 300px;\n  height: 300px;\n  border-radius: 150px;\n  margin-bottom: 20px;\n"]))),wn=c.ZP.div(hn||(hn=(0,r.Z)(["\n  width: 100%;\n  height: 60px;\n  display: flex;\n"]))),yn=c.ZP.div(pn||(pn=(0,r.Z)(['\n  height: 60px;\n  display: flex;\n  flex-direction: column;\n  & > button {\n    height: 58px;\n    background-color: transparent;\n    border: none;\n    padding: 0 20px;\n    color: white;\n    font-family: "Baloo Thambi 2", "Jua", cursive;\n    font-size: 16px;\n  }\n  & > div {\n    width: 100%;\n    height: 2px;\n    background-color: #22bbff;\n  }\n']))),Zn=(0,c.ZP)(s.E.div)(xn||(xn=(0,r.Z)(["\n  width: 100%;\n  height: 100%;\n  min-height: 450px;\n  padding-left: 10px;\n  padding-top: 20px;\n  position: absolute;\n  top: 60px;\n"]))),kn=c.ZP.div(un||(un=(0,r.Z)(["\n  width: 100%;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  overflow-y: scroll;\n  /* width */\n  &::-webkit-scrollbar {\n    width: 3px;\n  }\n  /* Track */\n  &::-webkit-scrollbar-track {\n    background: ",";\n  }\n  /* Handle */\n  &::-webkit-scrollbar-thumb {\n    background: #22bbff;\n  }\n  /* Handle on hover */\n  &::-webkit-scrollbar-thumb:hover {\n    background: #1788cc;\n  }\n  & > div {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n  }\n  & > div > h1 {\n    width: fit-content;\n    font-size: 16px;\n    font-weight: 700;\n    color: #22bbff;\n    border-bottom: 1px solid #22bbff;\n    padding-right: 30px;\n    margin-bottom: 5px;\n  }\n  & > div > span {\n    font-size: 24px;\n  }\n  & > div > div {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  & > div > div > span {\n    font-size: 24px;\n    margin-right: 50px;\n  }\n"])),(function(n){return n.scrollBar?"#22bbff33":"#22bbff00"})),Pn=c.ZP.div(fn||(fn=(0,r.Z)(["\n  width: 100%;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n  & > span:first-child {\n    width: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #22bbff;\n    border-radius: 10px;\n    padding: 5px 0;\n    margin-right: 10px;\n  }\n  & > span:last-child {\n    font-weight: 700;\n  }\n"]))),Sn={init:{transform:"translateY(-10px)",opacity:0},ani:{transform:"translateY(0px)",opacity:1,transition:{duration:.3,type:"tween"}},exit:{transform:"translateY(10px)",opacity:0,transition:{duration:.3,type:"tween"}}},En=[["JavaScript","TypeScript","Python","HTML","CSS","C","C++"],["Node.js","React.js"],["Git","Docker","Premiere Pro","After Effect","Photoshop"]];var zn,In=function(){var n=(0,a.useState)(1),t=(0,i.Z)(n,2),e=t[0],r=t[1];return(0,x.jsxs)(bn,{children:[(0,x.jsxs)(mn,{children:[(0,x.jsx)(jn,{src:Q,alt:"profileImg"}),(0,x.jsxs)(vn,{children:[(0,x.jsx)("span",{children:"\uc5b4\uc81c\ubcf4\ub2e4 \ub354 \ub098\uc740 \uc0ac\ub78c\uc774 \ub418\uc790!"}),(0,x.jsx)("span",{}),(0,x.jsx)("span",{children:"\uc548\ub155\ud558\uc138\uc694 \ubc31\uc5d4\ub4dc \uac1c\ubc1c\uc790 \uc6c5 \uc785\ub2c8\ub2e4!"}),(0,x.jsx)("span",{children:"\ubd80\uc871\ud55c \ub9cc\ud07c \uacbd\uac01\uc2ec\uc744 \uac16\uace0 \uafb8\uc900\ud788 \ubc30\uc6cc\ub098\uac00\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),(0,x.jsx)("span",{children:"\ud558\uc9c0\ub9cc \uc6f9 \ud504\ub860\ud2b8 \uac1c\ubc1c\ub3c4 \ub193\uce58\uace0 \uc2f6\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4..!"}),(0,x.jsx)("span",{}),(0,x.jsx)("span",{children:"\ud1a0\uc774 \ud504\ub85c\uc81d\ud2b8 \ub9cc\ub4dc\ub294 \uac83\uacfc \uc601\uc0c1\ud3b8\uc9d1, \uc2f1\uae00 \ud50c\ub808\uc774 \uac8c\uc784\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4."})]})]}),(0,x.jsxs)(mn,{children:[(0,x.jsx)(wn,{children:(0,x.jsx)(o.M,{children:[1,2,3].map((function(n){return(0,x.jsxs)(yn,{children:[(0,x.jsx)("button",{onClick:function(){return r(n)},children:1===n?"Email Contact":2===n?"Etc. Contacts":"Skills"}),e===n?(0,x.jsx)(s.E.div,{layoutId:"indicator"}):null]},n)}))})}),(0,x.jsx)(o.M,{children:1===e?(0,x.jsxs)(Zn,{variants:Sn,initial:"init",animate:"ani",exit:"exit",children:[(0,x.jsxs)(Pn,{children:[(0,x.jsx)("span",{children:"Send to"}),(0,x.jsx)("span",{children:"wjlee611@gmail.com"})]}),(0,x.jsx)(gn,{})]},"email"):2===e?(0,x.jsx)(Zn,{variants:Sn,initial:"init",animate:"ani",exit:"exit",children:(0,x.jsx)(kn,{scrollBar:!1,children:["Phone","Kakao Id"].map((function(n){return(0,x.jsxs)("div",{children:[(0,x.jsx)("h1",{children:n}),(0,x.jsx)("span",{children:"Phone"===n?"+82 10-2124-7513":"greencreeper"})]},n)}))})},"etc"):(0,x.jsx)(Zn,{variants:Sn,initial:"init",animate:"ani",exit:"exit",children:(0,x.jsx)(kn,{scrollBar:!0,children:["Programming Languages","Frameworks","Tools"].map((function(n,t){return(0,x.jsxs)("div",{children:[(0,x.jsx)("h1",{children:n}),(0,x.jsx)("div",{children:En[t].map((function(n){return(0,x.jsx)("span",{children:n},n)}))})]},n)}))})},"skill")})]})]})},Fn=c.ZP.div(zn||(zn=(0,r.Z)(["\n  width: 100%;\n  height: 100vh;\n  padding-top: 100px;\n  color: white;\n  scroll-snap-align: start;\n"])));var Cn,Ln=function(){return(0,x.jsx)(Fn,{children:(0,x.jsx)("h1",{children:"Projects"})})},Tn=e(7723),Dn=c.ZP.div(Cn||(Cn=(0,r.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 30px;\n  & > span {\n    font-size: 18px;\n    color: white;\n    margin-bottom: 5px;\n  }\n"])));function Nn(){return(0,x.jsxs)(Dn,{children:[(0,x.jsx)("span",{children:"2000.06.11, \ucc9c\ub465\ubc88\uac1c\uac00 \ubab0\uc544\uce58\ub294 \uc0c8\ubcbd 4\uc2dc"}),(0,x.jsx)("span",{children:"3.9kg\uc758 \uc544\uae30\uac00 \ud0dc\uc5b4\ub0ac\uc2b5\ub2c8\ub2e4!"}),(0,x.jsx)("br",{}),(0,x.jsx)("span",{children:"\uc678 \ud560\uc544\ubc84\uc9c0\uac00 \uc218\ucef7 '\u96c4', \uc2e4\uc744 '\u8f09'\ub85c \uc774\ub984\uc744 \uc9c0\uc5b4\uc8fc\uc168\uc2b5\ub2c8\ub2e4."}),(0,x.jsx)("br",{}),(0,x.jsx)("span",{children:"1\uc0b4 \ub54c \uccad\uc9c4\uae30\ub97c \uc7a1\uc740 \uc774 \uc544\uc774\ub294 \ub098\uc911\uc5d0 \uac1c\ubc1c\uc790\uac00 \ub418\uac8c \ub429\ub2c8\ub2e4..."})]})}var An,Mn,_n,Rn=e.p+"static/media/scratch.00936543a9b041882ebc.jpg",On=c.ZP.div(An||(An=(0,r.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 40px;\n  & > span {\n    font-size: 18px;\n    color: white;\n    margin-bottom: 5px;\n  }\n"]))),Bn=c.ZP.img(Mn||(Mn=(0,r.Z)(["\n  width: 400px;\n  height: 300px;\n  object-fit: cover;\n  border-radius: 15px;\n  border-top-left-radius: 0;\n"])));function Vn(){return(0,x.jsxs)(On,{children:[(0,x.jsx)("span",{children:"\uc911\ud559\uad50 2\ud559\ub144, \ucf54\ub529 \uc778\uc0dd\uc774 \uc2dc\uc791\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),(0,x.jsx)("br",{}),(0,x.jsx)("span",{children:"\uce5c\uad6c\uc640 \ud568\uaed8 \ucf54\ub529 \ub3d9\uc544\ub9ac\ub97c \ub9cc\ub4e4\uc5b4,"}),(0,x.jsx)("span",{children:"\ubd80\uc6d0 20\uba85\uacfc \ud568\uaed8 \ucf54\ub529\uc744 \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4."}),(0,x.jsx)("br",{}),(0,x.jsx)(Bn,{src:Rn,alt:"scratch"}),(0,x.jsx)("br",{}),(0,x.jsx)("span",{children:"\uce5c\uadfc\ud558\uac8c \uc6c3\uc73c\uba70 \uc6c0\uc9c1\uc774\ub294 \uace0\uc591\uc774\ub97c \ubcf4\uace4"}),(0,x.jsx)("span",{children:"\ucf54\ub529\uc774 \ub9c8\ub0e5 \uc27d\uace0 \uc7ac\ubbf8\uc788\ub294 \uc904\ub85c\ub9cc \uc54c\uc558\uc2b5\ub2c8\ub2e4."}),(0,x.jsx)("br",{}),(0,x.jsx)("span",{children:"Scratch\ub294 \uadf8\ub807\uac8c \ud55c \uba85\uc758 \ud559\uc0dd\uc744 \uc774 \uc138\uacc4\ub85c \ub04c\uc5b4\ub4e4\uc600\uc2b5\ub2c8\ub2e4..."})]})}var qn,Hn,Jn,Yn,Xn,Gn,Wn,Kn,$n,Qn,Un,nt,tt,et,it,rt,ot=c.ZP.div(_n||(_n=(0,r.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 40px;\n  & > span {\n    font-size: 18px;\n    color: white;\n    margin-bottom: 5px;\n  }\n"])));function st(){return(0,x.jsxs)(ot,{children:[(0,x.jsx)("span",{children:"\uce58\uc5f4\ud588\ub358 \uc0dd\ud65c\uc744 \ub300\ubcc0\ud558\ub4ef, \ubb35\uc9c1\ud574\uc9c4 \uc0dd\ud65c \uae30\ub85d\ubd80\ub97c \uc548\uace0 \uc131\uc778\uc774 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),(0,x.jsx)("br",{}),(0,x.jsx)("span",{children:"\uc778\uc0dd \uce5c\uad6c\ub3c4 \uc0ac\uadc8 \uc218 \uc788\uc5c8\uace0,"}),(0,x.jsx)("span",{children:"\ud558\uace0\uc2f6\uc740 \uacf5\ubd80\ub97c \ud560 \uc218 \uc788\ub2e4\ub294 \uc0dd\uac01\uc5d0 \uc124\ub808\uc5c8\uc2b5\ub2c8\ub2e4."}),(0,x.jsx)("br",{}),(0,x.jsx)("span",{children:"\uc774\uc81c \uc131\uc7a5\ud560 \uc2dc\uac04\uc774 \ub2e4\uac00\uc654\uc2b5\ub2c8\ub2e4..."})]})}var at=c.ZP.div(qn||(qn=(0,r.Z)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  scroll-snap-align: start;\n"]))),lt=c.ZP.div(Hn||(Hn=(0,r.Z)(["\n  width: 800px;\n  height: 100vh;\n  padding-top: 100px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  overflow-y: scroll;\n  &::-webkit-scrollbar {\n    width: 0;\n    background: transparent;\n  }\n  opacity: ",";\n  transition: opacity 0.2s ease-out;\n"])),(function(n){return n.inView?1:0})),ct=c.ZP.div(Jn||(Jn=(0,r.Z)(["\n  width: 100%;\n"]))),dt=c.ZP.div(Yn||(Yn=(0,r.Z)(["\n  width: 100%;\n  height: 130px;\n  color: white;\n  display: flex;\n"]))),ht=c.ZP.div(Xn||(Xn=(0,r.Z)(["\n  width: 100%;\n  min-height: 200px;\n  color: white;\n  display: flex;\n"]))),pt=c.ZP.div(Gn||(Gn=(0,r.Z)(["\n  width: 105px;\n  height: 100%;\n  display: flex;\n  align-items: flex-end;\n"]))),xt=c.ZP.div(Wn||(Wn=(0,r.Z)(["\n  width: 15px;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n"]))),ut=c.ZP.div(Kn||(Kn=(0,r.Z)(["\n  width: calc(100% - 120px);\n  height: 100%;\n  display: flex;\n"]))),ft=(0,c.ZP)(ut)($n||($n=(0,r.Z)(["\n  align-items: flex-end;\n"]))),gt=(0,c.ZP)(ut)(Qn||(Qn=(0,r.Z)(["\n  flex-direction: column;\n  padding-top: 10px;\n  padding-left: 20px;\n"]))),bt=c.ZP.div(Un||(Un=(0,r.Z)(["\n  width: 100%;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 15px;\n"]))),mt=(0,c.ZP)(bt)(nt||(nt=(0,r.Z)(["\n  justify-content: flex-end;\n  padding-right: 10px;\n  font-size: 16px;\n  padding-bottom: 1px;\n"]))),vt=(0,c.ZP)(bt)(tt||(tt=(0,r.Z)(["\n  padding-left: 10px;\n  padding-right: 100px;\n  padding-top: 2px;\n  font-size: 24px;\n"]))),jt=c.ZP.div(et||(et=(0,r.Z)(["\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: #22bbff;\n  margin: 10px 0;\n  filter: saturate(2) blur(1px);\n"]))),wt=c.ZP.div(it||(it=(0,r.Z)(["\n  width: 2px;\n  height: calc(100% - 30px);\n  background-color: #22bbff;\n  border-bottom-left-radius: 1px;\n  border-bottom-right-radius: 1px;\n"]))),yt=c.ZP.div(rt||(rt=(0,r.Z)(["\n  width: 4px;\n  height: 100%;\n  background-color: #22bbff;\n  border-bottom-left-radius: 1px;\n  border-bottom-right-radius: 1px;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n"]))),Zt=[["2000.06","\ud0c4\uc0dd!"],["2014.07","\ucf54\ub529 \ub3d9\uc544\ub9ac \ucc3d\uc124"],["2019.03","\ubd80\ud765\uace0\ub4f1\ud559\uad50 \uc878\uc5c5"],["2020.03","\uccab \ud504\ub85c\uc81d\ud2b8 - '\ub098\uc758 \ubaa8\ub3d9\uc232'"],["2022.06","\ud310\ud0c0\uc2a4\ud2f15 - '\ub9d0\ud558\ub294 \uc0ac\uc774\uc5d0 \uc8fc\ubb38 \uc644\ub8cc!'"],["2022.06","\ub9e4\ub4dc\ub9e5\uc2a4 - '\ud63c\ubc25\uc2dc\uadf8\ub110'"]];var kt,Pt,St,Et=function(){var n=(0,l.sJ)(d.g),t=new Date,e=t.getFullYear(),i=t.getMonth(),r=t.getDate();return(0,x.jsx)(at,{id:"timeline",children:(0,x.jsxs)(lt,{className:"scroll-area",inView:4===n,children:[Zt.map((function(n,t){return(0,x.jsxs)(ct,{className:"block",children:[(0,x.jsx)(Tn.ZP,{scrollElement:".scroll-area",boundaryElement:".block",positionRecheckInterval:1,topOffset:-1,children:(0,x.jsxs)(dt,{children:[(0,x.jsx)(pt,{children:(0,x.jsx)(mt,{children:n[0]})}),(0,x.jsxs)(xt,{children:[0===t?null:(0,x.jsx)(wt,{}),(0,x.jsx)(jt,{})]}),(0,x.jsx)(ft,{children:(0,x.jsx)(vt,{children:n[1]})})]})}),(0,x.jsxs)(ht,{children:[(0,x.jsx)(pt,{}),(0,x.jsx)(xt,{children:(0,x.jsx)(yt,{})}),(0,x.jsx)(gt,{children:0===t?(0,x.jsx)(Nn,{}):1===t?(0,x.jsx)(Vn,{}):2===t?(0,x.jsx)(st,{}):null})]})]},t)})),(0,x.jsxs)(ct,{className:"block",children:[(0,x.jsx)(Tn.ZP,{scrollElement:".scroll-area",boundaryElement:".block",positionRecheckInterval:1,topOffset:-1,children:(0,x.jsxs)(dt,{children:[(0,x.jsx)(pt,{children:(0,x.jsx)(mt,{children:"".concat(e,".").concat(("00"+i).slice(-2),".").concat(r)})}),(0,x.jsxs)(xt,{children:[(0,x.jsx)(wt,{}),(0,x.jsx)(jt,{})]}),(0,x.jsx)(ft,{children:(0,x.jsx)(vt,{children:"...\uadf8\ub9ac\uace0 \uc624\ub298"})})]})}),(0,x.jsxs)(ht,{children:[(0,x.jsx)(pt,{}),(0,x.jsx)(xt,{children:(0,x.jsx)(yt,{})}),(0,x.jsx)(gt,{children:(0,x.jsx)("span",{children:"\uc5b4\uc81c\ubcf4\ub2e4 \ub354 \ub098\uc740 \ub0b4\uac00 \ub418\uc5c8\uae30\ub97c"})})]})]},"today")]})})},zt=c.ZP.div(kt||(kt=(0,r.Z)(["\n  width: 150px;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-between;\n  position: fixed;\n  right: 0;\n  top: 50%;\n  transform: translate(0, -50%);\n  z-index: 2;\n"]))),It=c.ZP.button(Pt||(Pt=(0,r.Z)(["\n  width: 150px;\n  height: 30px;\n  background-color: transparent;\n  border: none;\n  color: ",";\n  margin-right: ",";\n  transition: color 0.3s ease-out,\n    margin-right 0.3s cubic-bezier(0, 0.5, 0.5, 1);\n  position: relative;\n  & > span {\n    width: 150px;\n    height: 30px;\n    font-size: 20px;\n    font-weight: ",";\n    display: flex;\n    justify-content: ",";\n    align-items: center;\n    padding-right: 10px;\n    padding-left: 20px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 2;\n  }\n  & > div {\n    width: 170px;\n    transform: ",";\n    transition: transform 0.3s cubic-bezier(0, 0.5, 0.5, 1);\n    will-change: transform;\n  }\n  &:hover > div {\n    transform: translateX(0%);\n  }\n"])),(function(n){return n.isSelected?"#22bbff":"#FFFFFF"}),(function(n){return n.isSelected?"20px":"0"}),(function(n){return n.isSelected?"700":"400"}),(function(n){return n.isSelected?"flex-start":"flex-end"}),(function(n){return n.isSelected?"translateX(0%)":"translateX(100%)"})),Ft=c.ZP.div(St||(St=(0,r.Z)(["\n  width: 170px;\n  height: 30px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  right: -20px;\n  background: linear-gradient(90deg, #22bbff 1%, #00000077 5%);\n  z-index: 1;\n"])));var Ct=function(){var n=(0,l.FV)(d.g),t=(0,i.Z)(n,2),e=t[0],r=t[1];return(0,x.jsxs)(zt,{children:[(0,x.jsxs)(It,{id:"nav_1",onClick:function(){return r(1)},isSelected:1===e,children:[(0,x.jsx)("span",{children:"Home"}),(0,x.jsx)(Ft,{})]}),(0,x.jsxs)(It,{id:"nav_2",onClick:function(){return r(2)},isSelected:2===e,children:[(0,x.jsx)("span",{children:"Information"}),(0,x.jsx)(Ft,{})]}),(0,x.jsxs)(It,{id:"nav_3",onClick:function(){return r(3)},isSelected:3===e,children:[(0,x.jsx)("span",{children:"Projects"}),(0,x.jsx)(Ft,{})]}),(0,x.jsxs)(It,{id:"nav_4",onClick:function(){return r(4)},isSelected:4===e,children:[(0,x.jsx)("span",{children:"Time Line"}),(0,x.jsx)(Ft,{})]})]})},Lt=e.p+"static/media/background.24aaaa1654f269624896.jpg";var Tt=e.p+"static/media/linode-brands.efc1660b2a56fb30d41f86130cb58e6b.svg";var Dt=e.p+"static/media/circle-nodes-solid.b08973c009e5d05f66078bb9ffb3e072.svg";var Nt=e.p+"static/media/github.833b63e28cadf07403bc81451d30b858.svg";var At=e.p+"static/media/blog.d8adfbd670c975416fa2a43be75719a2.svg";var Mt,_t,Rt,Ot,Bt=e.p+"static/media/youtube.87350b41a36870581ed6bbca31d713b0.svg",Vt=c.ZP.div(Mt||(Mt=(0,r.Z)(["\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n"]))),qt=c.ZP.div(_t||(_t=(0,r.Z)(["\n  width: 100vw;\n  height: 100vh;\n  &::-webkit-scrollbar {\n    width: 0;\n    background: transparent;\n  }\n  position: relative;\n  scroll-snap-type: y mandatory;\n  /* overflow-y: scroll; */\n  overflow: hidden;\n"]))),Ht=c.ZP.img(Rt||(Rt=(0,r.Z)(["\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  z-index: 1;\n"]))),Jt=c.ZP.div(Ot||(Ot=(0,r.Z)(["\n  position: fixed;\n  height: 0;\n  opacity: 0;\n  pointer-events: none;\n"])));var Yt=function(){var n=(0,l.FV)(d.N),t=(0,i.Z)(n,2),e=t[0],r=t[1],c=(0,l.sJ)(d.g),h=(0,a.useRef)(null),p=(0,a.useRef)(null),u=(0,a.useRef)(null),f=(0,a.useRef)(null);return(0,a.useEffect)((function(){setTimeout((function(){var n,t,e,i;1===c&&(null===(n=h.current)||void 0===n||n.scrollIntoView({behavior:"smooth"})),2===c&&(null===(t=p.current)||void 0===t||t.scrollIntoView({behavior:"smooth"})),3===c&&(null===(e=u.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})),4===c&&(null===(i=f.current)||void 0===i||i.scrollIntoView({behavior:"smooth"}))}),1)}),[c]),(0,x.jsxs)(Vt,{children:[(0,x.jsx)(o.M,{children:e>=6?null:(0,x.jsx)(s.E.div,{exit:{opacity:0},style:{position:"fixed",zIndex:10},children:(0,x.jsx)(A.Z,{status:40})},"loaded")}),(0,x.jsx)(Ht,{src:Lt,alt:"bg",onLoad:function(){return r((function(n){return n+1}))}}),(0,x.jsxs)(Jt,{className:"Image_Assets_Preload",children:[(0,x.jsx)("img",{src:Tt,alt:"InfoImg",onLoad:function(){return r((function(n){return n+1}))}}),(0,x.jsx)("img",{src:Dt,alt:"ContactImg",onLoad:function(){return r((function(n){return n+1}))}}),(0,x.jsx)("img",{src:Nt,alt:"GitHubImg",onLoad:function(){return r((function(n){return n+1}))}}),(0,x.jsx)("img",{src:At,alt:"BlogImg",onLoad:function(){return r((function(n){return n+1}))}}),(0,x.jsx)("img",{src:Bt,alt:"YoutubeImg",onLoad:function(){return r((function(n){return n+1}))}})]}),(0,x.jsxs)(qt,{children:[(0,x.jsx)(N,{title:1===c?"DEV. WOONG":2===c?"INFOMATION":3===c?"PROJECTS":4===c?"TIME LINE":"N/A",assets:[Tt,Dt,Nt,At,Bt]}),(0,x.jsx)(Ct,{}),(0,x.jsxs)("div",{style:{width:"100%",position:"absolute",top:0,zIndex:1},children:[(0,x.jsx)("div",{ref:h,style:{scrollSnapAlign:"start"},children:(0,x.jsx)($,{})}),(0,x.jsx)("div",{ref:p,style:{scrollSnapAlign:"start"},children:(0,x.jsx)(In,{})}),(0,x.jsx)("div",{ref:u,style:{scrollSnapAlign:"start"},children:(0,x.jsx)(Ln,{})}),(0,x.jsx)("div",{ref:f,style:{scrollSnapAlign:"start"},children:(0,x.jsx)(Et,{})})]})]})]})}}}]);
//# sourceMappingURL=181.c8295101.chunk.js.map