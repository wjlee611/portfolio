"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[850],{3902:function(n,t,e){e.r(t),e.d(t,{default:function(){return ce}});var i=e(885),r=e(168),o=e(4549),s=e(70),a=e(2791),l=e(6005),d=e(6444),c=e(6019);var h,p=function(){var n=document.querySelector("#scene"),t=n.getContext("2d"),e=[],i=0,r={x:0,y:0},o=document.querySelector("#copy").value,s=n.width=400,a=n.height=100;function l(n,t){this.x=Math.round(15*o.length+100*Math.random()-50),this.y=Math.round(a/2+10*Math.random()-5),this.dest={x:n,y:t},this.r=2,this.vx=Math.round(4*(Math.random()-.5)),this.vy=Math.round(4*(Math.random()-.5)),this.accX=0,this.accY=0,this.friction=.05*Math.random()+.9,this.color="#888"}function d(){setTimeout((function(){o=document.querySelector("#copy").value,s=n.width=400,a=n.height=100,t.clearRect(0,0,n.width,n.height),t.font="700 "+s/10+"px Verdana",t.textAlign="start",t.fillText(o,50,a/2);var r=t.getImageData(0,0,s,a).data;t.clearRect(0,0,n.width,n.height),t.globalCompositeOperation="screen",e=[];for(var d=0;d<s;d+=3)for(var c=0;c<a;c+=3)r[4*(d+c*s)+3]>250&&e.push(new l(d,c+13));i=e.length}),200)}l.prototype.render=function(){this.accX=(this.dest.x-this.x)/300,this.accY=(this.dest.y-this.y)/300,this.vx+=this.accX,this.vy+=this.accY,this.vx*=this.friction,this.vy*=this.friction,this.x+=this.vx,this.y+=this.vy,t.fillStyle=this.color,t.beginPath(),t.rect(this.x,this.y,this.r,this.r),t.fill();var n=this.x-r.x,e=this.y-r.y;Math.sqrt(n*n+e*e)<30&&(this.accX=(this.x-r.x)/100,this.accY=(this.y-r.y)/100,this.vx+=this.accX,this.vy+=this.accY)},document.querySelector("#nav_1").addEventListener("click",(function(){return d()})),document.querySelector("#nav_2").addEventListener("click",(function(){return d()})),document.querySelector("#nav_3").addEventListener("click",(function(){return d()})),document.querySelector("#nav_4").addEventListener("click",(function(){return d()})),window.addEventListener("mousemove",(function(n){r.x=n.clientX,r.y=n.clientY})),window.addEventListener("touchmove",(function(n){n.touches.length>0&&(r.x=n.touches[0].clientX,r.y=n.touches[0].clientY)})),window.addEventListener("touchend",(function(){r.x=-9999,r.y=-9999})),d(),requestAnimationFrame((function r(){requestAnimationFrame(r),t.clearRect(0,0,n.width,n.height);for(var o=0;o<i;o++)e[o].render()}))},x=e(184),f=d.ZP.canvas(h||(h=(0,r.Z)(["\n  width: 400px;\n  height: 100px;\n  opacity: ",";\n  transition: opacity 0.2s linear;\n  z-index: 6;\n"])),(function(n){return n.opa}));var u,g,b,m,j,v,w,y,Z=function(n){var t=n.title,e=(0,a.useState)(0),r=(0,i.Z)(e,2),o=r[0],s=r[1];return(0,a.useEffect)((function(){p()}),[]),(0,a.useEffect)((function(){return document.querySelector("#copy").value=t,setTimeout((function(){s(1)}),200),function(){s(0)}}),[t]),(0,x.jsx)(f,{opa:o,id:"scene"})},k=d.ZP.div(u||(u=(0,r.Z)(["\n  width: 100vw;\n  height: 100px;\n  background-color: transparent;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  z-index: 4;\n  backdrop-filter: blur(5px);\n"]))),P=d.ZP.div(g||(g=(0,r.Z)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding-right: 50px;\n  z-index: 5;\n"]))),S=d.ZP.button(b||(b=(0,r.Z)(["\n  width: 70px;\n  height: 70px;\n  background-color: transparent;\n  border: none;\n  position: relative;\n  & > img {\n    width: 30px;\n    height: 30px;\n    filter: ",";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: ",";\n    transition: transform 0.2s ease-out;\n  }\n  & > h1 {\n    width: 70px;\n    color: ",";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: ",";\n    opacity: ",";\n    transition: opacity 0.2s ease-out, transform 0.2s ease-out,\n      color 0.2s ease-out;\n  }\n  &:hover > img {\n    transform: translate(-50%, -70%);\n  }\n  &:hover > h1 {\n    opacity: 1;\n    transform: translate(-50%, 50%);\n  }\n"])),(function(n){return n.isSelected?"invert(68%) sepia(27%) saturate(6010%) hue-rotate(169deg) brightness(101%) contrast(104%)":"invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)"}),(function(n){return n.isSelected?"translate(-50%, -70%)":"translate(-50%, -50%)"}),(function(n){return n.isSelected?"#22bbff":"#ffffff"}),(function(n){return n.isSelected?"translate(-50%, 50%)":"translate(-50%, -50%)"}),(function(n){return n.isSelected?1:0})),E=(0,d.ZP)(s.E.div)(m||(m=(0,r.Z)(["\n  background-color: #22bbff55;\n  color: white;\n  position: fixed;\n  z-index: 5;\n  right: 50px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  border-radius: 10px;\n"]))),z=(0,d.ZP)(E)(j||(j=(0,r.Z)(["\n  width: 300px;\n  & > * {\n    margin-top: 5px;\n  }\n  & > *:last-child {\n    margin-bottom: 0;\n  }\n  & > a {\n    margin-left: 10px;\n    margin-bottom: 10px;\n    text-decoration: none;\n    color: #88eeff;\n  }\n  & > span:nth-last-child(1),\n  & > span:nth-last-child(2),\n  & > span:nth-last-child(3),\n  & > span:nth-last-child(4) {\n    margin-left: 10px;\n    color: #88eeff;\n  }\n  & > span:nth-last-child(2) {\n    margin-left: 60px;\n  }\n"]))),I=(0,d.ZP)(E)(v||(v=(0,r.Z)(["\n  width: 70px;\n  & > a {\n    margin-top: 5px;\n  }\n  & > a:first-child {\n    margin: 7px 0;\n  }\n"]))),C=(0,d.ZP)(s.E.div)(w||(w=(0,r.Z)(["\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  z-index: 3;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  background-color: rgba(0, 0, 0, 0.8);\n  & > span {\n    color: white;\n    margin-bottom: 100px;\n  }\n"]))),F=d.ZP.img(y||(y=(0,r.Z)(["\n  width: 50px;\n  height: 50px;\n  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)\n    brightness(102%) contrast(102%);\n"])));var L,D,N,M=function(n){var t=n.title,e=n.assets,r=(0,a.useState)(0),s=(0,i.Z)(r,2),l=s[0],d=s[1];return(0,x.jsxs)(k,{children:[(0,x.jsx)(Z,{title:t}),(0,x.jsxs)(P,{children:[(0,x.jsxs)(S,{isSelected:1===l,onClick:function(){d(1===l?0:1)},children:[(0,x.jsx)("img",{src:e[0],alt:"info"}),(0,x.jsx)("h1",{children:"Site Info"})]}),(0,x.jsxs)(S,{isSelected:2===l,onClick:function(){d(2===l?0:2)},children:[(0,x.jsx)("img",{src:e[1],alt:"contact"}),(0,x.jsx)("h1",{children:"Links"})]})]}),(0,x.jsxs)(o.M,{children:[1===l?(0,x.jsxs)(z,{layout:"position",initial:{opacity:0,top:80},animate:{opacity:1,top:100},exit:{opacity:0,top:105},children:[(0,x.jsx)("span",{children:"Developed by. Woong"}),(0,x.jsx)("a",{href:"https://github.com/wjlee611/portfolio",target:"_blank",rel:"noreferrer",children:(0,x.jsx)("span",{children:"> View source code @GitHub "})}),(0,x.jsx)("span",{children:"Other Sources from"}),(0,x.jsx)("span",{children:"- Title paricle: Mamboleoo"}),(0,x.jsx)("span",{children:"- Font : Baloo Thambi 2, "}),(0,x.jsx)("span",{children:"Nanum Gothic Coding"}),(0,x.jsx)("span",{children:"- B.G. image: Hypergryph"})]},"info"):2===l?(0,x.jsxs)(I,{layout:"position",initial:{opacity:0,top:80},animate:{opacity:1,top:100},exit:{opacity:0,top:105},children:[(0,x.jsx)("a",{href:"https://github.com/wjlee611",target:"_blank",rel:"noreferrer",children:(0,x.jsx)(F,{src:e[2],alt:"github"})}),(0,x.jsx)("a",{href:"https://with611.tistory.com/",target:"_blank",rel:"noreferrer",children:(0,x.jsx)(F,{src:e[3],alt:"blog"})}),(0,x.jsx)("a",{href:"https://www.youtube.com/c/WITH611",target:"_blank",rel:"noreferrer",children:(0,x.jsx)(F,{src:e[4],alt:"youtube"})})]},"link"):null,0===l?null:(0,x.jsx)(C,{initial:{opacity:0},animate:{opacity:1,transition:{duration:.2}},exit:{opacity:0,transition:{duration:.2}},onClick:function(){return d(0)},children:(0,x.jsx)("span",{children:"Click anywhere to close dialog"})},"back")]})]})},A=e(7374),T=e(4165),R=e(5861),_=e(7831),q=d.ZP.div(L||(L=(0,r.Z)(["\n  width: 100%;\n  height: 100vh;\n  color: white;\n  position: relative;\n  scroll-snap-align: start;\n  opacity: ",";\n  transition: opacity 0.2s ease-out;\n"])),(function(n){return"true"===n.inview?1:0})),O=d.ZP.div(D||(D=(0,r.Z)(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  overflow: hidden;\n"]))),V=d.ZP.div(N||(N=(0,r.Z)(["\n  width: 100%;\n  height: 100%;\n  padding-left: 100px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n\n  & > span,\n  & > div > span {\n    font-size: 64px;\n    display: flex;\n  }\n  & > div {\n    display: flex;\n    align-items: flex-end;\n  }\n  & > div > span:first-child {\n    font-size: 128px;\n    font-weight: 700;\n    margin-right: 20px;\n    padding: 0 20px;\n    padding-bottom: 20px;\n    border-radius: 20px;\n    border-top-left-radius: 0;\n    background-color: #22bbff66;\n    backdrop-filter: blur(5px);\n  }\n  & > div > span:last-child {\n    margin-bottom: 30px;\n  }\n"])));var B,G,Y,H,X,J=function(){var n=(0,l.sJ)(c.gq);return(0,a.useCallback)(function(){var n=(0,R.Z)((0,T.Z)().mark((function n(t){return(0,T.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,_.R)(t);case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),[]),(0,x.jsxs)(q,{inview:1===n?"true":"false",children:[(0,x.jsx)(O,{}),(0,x.jsxs)(V,{children:[(0,x.jsx)("span",{children:"Hello!"}),(0,x.jsxs)("div",{children:[(0,x.jsx)("span",{children:"Woong"}),(0,x.jsx)("span",{children:"is here!"})]})]})]})},W=e.p+"static/media/woong.e135391ce6bd24d8c321.jpeg",U=e(1413),K=e(1134),$=e(7530),Q=d.ZP.div(B||(B=(0,r.Z)(["\n  width: 100%;\n  height: 400px;\n  & > form {\n    width: 100%;\n    height: 100%;\n  }\n"]))),nn=d.ZP.div(G||(G=(0,r.Z)(['\n  width: 100%;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n  position: relative;\n  & > span:first-child {\n    width: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #22bbff;\n    border-radius: 10px;\n    padding: 5px 0;\n    margin-right: 10px;\n  }\n  & > input {\n    width: 300px;\n    height: 30px;\n    background-color: transparent;\n    color: white;\n    font-family: "Baloo Thambi 2", "Nanum Gothic Coding", Verdana;\n    font-size: 16px;\n    font-weight: 700;\n    border: none;\n  }\n  & > input:focus {\n    outline: none;\n  }\n  & > span:last-child {\n    position: absolute;\n    top: 30px;\n    left: 110px;\n    color: tomato;\n  }\n']))),tn=d.ZP.div(Y||(Y=(0,r.Z)(["\n  width: 100%;\n  position: relative;\n  & > span:first-child {\n    width: 100%;\n    display: flex;\n    font-weight: 700;\n    color: #22bbff;\n    border-bottom: 1px solid #22bbff;\n  }\n  & > span:nth-child(2) {\n    position: absolute;\n    top: 0;\n    right: 0;\n    color: tomato;\n  }\n"]))),en=d.ZP.div(H||(H=(0,r.Z)(['\n  width: 100%;\n  height: 300px;\n  position: relative;\n  & > textarea {\n    width: 100%;\n    height: 100%;\n    background-color: transparent;\n    color: white;\n    font-family: "Baloo Thambi 2", "Nanum Gothic Coding", Verdana;\n    font-size: 16px;\n    font-weight: 700;\n    border: none;\n    border-bottom: 1px solid #22bbff;\n    resize: none;\n    /* width */\n    &::-webkit-scrollbar {\n      width: 3px;\n    }\n    /* Track */\n    &::-webkit-scrollbar-track {\n      background: #22bbff33;\n    }\n    /* Handle */\n    &::-webkit-scrollbar-thumb {\n      background: #22bbff;\n    }\n    /* Handle on hover */\n    &::-webkit-scrollbar-thumb:hover {\n      background: #1788cc;\n    }\n  }\n  & > textarea:focus {\n    outline: none;\n  }\n  & > textarea::placeholder {\n    outline: none;\n    font-size: 16px;\n  }\n']))),rn=d.ZP.input(X||(X=(0,r.Z)(["\n  width: 120px;\n  position: absolute;\n  top: -100px;\n  right: 20px;\n  color: white;\n  background-color: ",";\n  border: 1px solid\n    ",';\n  border-radius: 5px;\n  padding: 5px 20px;\n  font-family: "Baloo Thambi 2", "Nanum Gothic Coding", Verdana;\n  transition: background-color 0.3s ease-out, border 0.3s ease-out;\n'])),(function(n){return"SENDED"===n.submitStatus?"#53BF9D":"FAILED"===n.submitStatus?"#F94C66":"transparent"}),(function(n){return"SENDED"===n.submitStatus?"#53BF9D":"FAILED"===n.submitStatus?"#F94C66":"#22bbff"}));var on,sn,an,ln,dn,cn,hn,pn,xn,fn=function(){var n,t,e=(0,K.cI)(),r=e.register,o=e.handleSubmit,s=e.setError,l=e.resetField,d=e.formState.errors,c=(0,a.useState)("NORMAL"),h=(0,i.Z)(c,2),p=h[0],f=h[1];return(0,x.jsx)(Q,{children:(0,x.jsxs)("form",{onSubmit:o((function(n){var t=n.sendEmail,e=n.contents,i=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t);d.sendEmail&&i||!d.sendEmail&&!i?s("sendEmail",{type:"focus",message:"Please write validate Email."},{shouldFocus:!0}):e.replace(/\n/g,"").length<20?s("contents",{type:"focus",message:"Please write message longer then 20."},{shouldFocus:!0}):(f("PROCESSING"),$.ZP.send("service_oyprxjr","template_z91v8j5",{from_email:t,message:e.replace(/(?:\r\n|\r|\n)/g,"<br>")},"P9tgfLoIAqkO--ytT").then((function(n){f("SENDED"),l("sendEmail"),l("contents"),setTimeout((function(){f("NORMAL")}),2e3)}),(function(n){f("FAILED"),console.log("FAILED...",n),setTimeout((function(){f("NORMAL")}),2e3)})))})),children:[(0,x.jsxs)(nn,{children:[(0,x.jsx)("span",{children:"Send from"}),(0,x.jsx)("input",(0,U.Z)((0,U.Z)({},r("sendEmail")),{},{placeholder:"username@example.com",autoComplete:"off"})),(0,x.jsx)("span",{children:null===d||void 0===d||null===(n=d.sendEmail)||void 0===n?void 0:n.message})]}),(0,x.jsxs)(tn,{children:[(0,x.jsx)("span",{children:"Message"}),(0,x.jsx)("span",{children:null===d||void 0===d||null===(t=d.contents)||void 0===t?void 0:t.message})]}),(0,x.jsxs)(en,{children:[(0,x.jsx)("textarea",(0,U.Z)((0,U.Z)({id:"message"},r("contents")),{},{placeholder:"Hello Woong!\nPlease write message longer then 20.",autoComplete:"off"})),(0,x.jsx)(rn,{type:"submit",value:"PROCESSING"===p?"Processing...":"SENDED"===p?"Sended!":"FAILED"===p?"Failed...":"Send Email",disabled:"PROCESSING"===p||"SENDED"===p||"FAILED"===p,submitStatus:p})]})]})})},un=d.ZP.div(on||(on=(0,r.Z)(["\n  width: 100%;\n  height: 100vh;\n  padding-top: 150px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: scroll;\n  &::-webkit-scrollbar {\n    width: 0;\n    background: transparent;\n  }\n  scroll-snap-align: start;\n"]))),gn=d.ZP.div(sn||(sn=(0,r.Z)(["\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 50px;\n  color: white;\n  position: relative;\n  &:first-child {\n    padding: 0 20px;\n  }\n  &:last-child {\n    width: 600px;\n  }\n"]))),bn=d.ZP.div(an||(an=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  & > span {\n    font-size: 16px;\n    margin-top: 10px;\n  }\n  & > span:first-child {\n    font-size: 20px;\n    font-weight: 700;\n    color: #22bbff;\n  }\n"]))),mn=d.ZP.img(ln||(ln=(0,r.Z)(["\n  width: 300px;\n  height: 300px;\n  object-fit: cover;\n  border-bottom: 2px solid #22bbff;\n  border-radius: 150px;\n  margin-bottom: 20px;\n"]))),jn=d.ZP.div(dn||(dn=(0,r.Z)(["\n  width: 100%;\n  height: 60px;\n  display: flex;\n"]))),vn=d.ZP.div(cn||(cn=(0,r.Z)(['\n  height: 60px;\n  display: flex;\n  flex-direction: column;\n  & > button {\n    height: 58px;\n    background-color: transparent;\n    border: none;\n    padding: 0 20px;\n    color: white;\n    font-family: "Baloo Thambi 2", "Nanum Gothic Coding", Verdana;\n    font-size: 16px;\n  }\n  & > div {\n    width: 100%;\n    height: 2px;\n    background-color: #22bbff;\n  }\n']))),wn=(0,d.ZP)(s.E.div)(hn||(hn=(0,r.Z)(["\n  width: 100%;\n  height: 600px;\n  padding-left: 10px;\n  padding-top: 20px;\n  position: absolute;\n  top: 60px;\n"]))),yn=d.ZP.div(pn||(pn=(0,r.Z)(["\n  width: 100%;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  overflow-y: scroll;\n  /* width */\n  &::-webkit-scrollbar {\n    width: 3px;\n  }\n  /* Track */\n  &::-webkit-scrollbar-track {\n    background: ",";\n  }\n  /* Handle */\n  &::-webkit-scrollbar-thumb {\n    background: #22bbff;\n  }\n  /* Handle on hover */\n  &::-webkit-scrollbar-thumb:hover {\n    background: #1788cc;\n  }\n  & > div {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n  }\n  & > div > h1 {\n    width: fit-content;\n    font-size: 16px;\n    font-weight: 700;\n    color: #22bbff;\n    border-bottom: 1px solid #22bbff;\n    padding-right: 30px;\n    margin-bottom: 5px;\n  }\n  & > div > span {\n    font-size: 24px;\n  }\n  & > div > div {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  & > div > div > span {\n    font-size: 24px;\n    margin-right: 50px;\n  }\n"])),(function(n){return n.scrollBar?"#22bbff33":"#22bbff00"})),Zn=d.ZP.div(xn||(xn=(0,r.Z)(["\n  width: 100%;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n  & > span:first-child {\n    width: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #22bbff;\n    border-radius: 10px;\n    padding: 5px 0;\n    margin-right: 10px;\n  }\n  & > span:last-child {\n    font-weight: 700;\n  }\n"]))),kn={init:{transform:"translateY(-10px)",opacity:0},ani:{transform:"translateY(0px)",opacity:1,transition:{duration:.3,type:"tween"}},exit:{transform:"translateY(10px)",opacity:0,transition:{duration:.3,type:"tween"}}},Pn=[["JavaScript","TypeScript","Python","HTML","CSS","C","C++"],["Node.js","React.js"],["Git","Docker","Premiere Pro","After Effect","Photoshop"]];var Sn,En=function(){var n=(0,a.useState)(1),t=(0,i.Z)(n,2),e=t[0],r=t[1];return(0,x.jsxs)(un,{children:[(0,x.jsxs)(gn,{children:[(0,x.jsx)(mn,{src:W,alt:"profileImg"}),(0,x.jsxs)(bn,{children:[(0,x.jsx)("span",{children:"\uc5b4\uc81c\ubcf4\ub2e4 \ub354 \ub098\uc740 \uc0ac\ub78c\uc774 \ub418\uc790!"}),(0,x.jsx)("span",{}),(0,x.jsx)("span",{children:"\uc548\ub155\ud558\uc138\uc694 \ubc31\uc5d4\ub4dc \uac1c\ubc1c\uc790 \uc6c5 \uc785\ub2c8\ub2e4!"}),(0,x.jsx)("span",{children:"\ubd80\uc871\ud55c \ub9cc\ud07c \uacbd\uac01\uc2ec\uc744 \uac16\uace0 \uafb8\uc900\ud788 \ubc30\uc6cc\ub098\uac00\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),(0,x.jsx)("span",{children:"\ud558\uc9c0\ub9cc \uc6f9 \ud504\ub860\ud2b8 \uac1c\ubc1c\ub3c4 \ub193\uce58\uace0 \uc2f6\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4..!"}),(0,x.jsx)("span",{}),(0,x.jsx)("span",{children:"\ud1a0\uc774 \ud504\ub85c\uc81d\ud2b8 \ub9cc\ub4dc\ub294 \uac83\uacfc \uc601\uc0c1\ud3b8\uc9d1, \uc2f1\uae00 \ud50c\ub808\uc774 \uac8c\uc784\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4."})]})]}),(0,x.jsxs)(gn,{children:[(0,x.jsx)(jn,{children:(0,x.jsx)(o.M,{children:[1,2,3].map((function(n){return(0,x.jsxs)(vn,{children:[(0,x.jsx)("button",{onClick:function(){return r(n)},children:1===n?"Email Contact":2===n?"Etc. Contacts":"Skills"}),e===n?(0,x.jsx)(s.E.div,{layoutId:"indicator"}):null]},n)}))})}),(0,x.jsx)(o.M,{children:1===e?(0,x.jsxs)(wn,{variants:kn,initial:"init",animate:"ani",exit:"exit",children:[(0,x.jsxs)(Zn,{children:[(0,x.jsx)("span",{children:"Send to"}),(0,x.jsx)("span",{children:"wjlee611@gmail.com"})]}),(0,x.jsx)(fn,{})]},"email"):2===e?(0,x.jsx)(wn,{variants:kn,initial:"init",animate:"ani",exit:"exit",children:(0,x.jsx)(yn,{scrollBar:!1,children:["Phone","Kakao Id"].map((function(n){return(0,x.jsxs)("div",{children:[(0,x.jsx)("h1",{children:n}),(0,x.jsx)("span",{children:"Phone"===n?"+82 10-2124-7513":"greencreeper"})]},n)}))})},"etc"):(0,x.jsx)(wn,{variants:kn,initial:"init",animate:"ani",exit:"exit",children:(0,x.jsx)(yn,{scrollBar:!0,children:["Programming Languages","Frameworks","Tools"].map((function(n,t){return(0,x.jsxs)("div",{children:[(0,x.jsx)("h1",{children:n}),(0,x.jsx)("div",{children:Pn[t].map((function(n){return(0,x.jsx)("span",{children:n},n)}))})]},n)}))})},"skill")})]})]})},zn=e(1523),In=d.ZP.div(Sn||(Sn=(0,r.Z)(["\n  width: 100%;\n  height: 100vh;\n  padding-top: 100px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  scroll-snap-align: start;\n  & > a {\n    margin: 20px 0;\n  }\n"])));var Cn,Fn=function(){return(0,x.jsxs)(In,{children:[(0,x.jsx)(zn.rU,{to:{pathname:"/talk-kiosk"},style:{textDecoration:"none",color:"white"},children:"\ub9d0\ud558\ub294 \uc0ac\uc774\uc5d0 \uc8fc\ubb38 \uc644\ub8cc!"}),(0,x.jsx)(zn.rU,{to:{pathname:"/honbab-signal"},style:{textDecoration:"none",color:"white"},children:"\ud63c\ubc25 \uc2dc\uadf8\ub110"})]})},Ln=e(7723),Dn=d.ZP.div(Cn||(Cn=(0,r.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 30px;\n  & > span {\n    font-size: 18px;\n    color: white;\n    margin-bottom: 5px;\n  }\n"])));function Nn(){return(0,x.jsxs)(Dn,{children:[(0,x.jsx)("span",{children:"2000.06.11, \ucc9c\ub465\ubc88\uac1c\uac00 \ubab0\uc544\uce58\ub294 \uc0c8\ubcbd 3:45\uc2dc"}),(0,x.jsx)("span",{children:"'\uc774'\uc528 \uc9d1\uc548\uc5d0 3.92kg\uc758 \uc6b0\ub7c9\uc544\uac00 \ud0dc\uc5b4\ub0ac\uc2b5\ub2c8\ub2e4!"}),(0,x.jsx)("br",{}),(0,x.jsx)("span",{children:"\uc678 \ud560\uc544\ubc84\uc9c0\uac00 \uc218\ucef7 '\u96c4(\uc6c5)', \uc2e4\uc744 '\u8f09(\uc7ac)'\ub85c \uc774\ub984\uc744 \uc9c0\uc5b4\uc8fc\uc168\uc2b5\ub2c8\ub2e4."}),(0,x.jsx)("br",{}),(0,x.jsx)("span",{children:"1\uc0b4 \ub54c \uccad\uc9c4\uae30\ub97c \uc7a1\uc740 \uc774 \uc544\uc774\ub294 \ub098\uc911\uc5d0 \uac1c\ubc1c\uc790\uac00 \ub418\uac8c \ub429\ub2c8\ub2e4..."})]})}var Mn,An,Tn,Rn=e.p+"static/media/scratch.00936543a9b041882ebc.jpg",_n=d.ZP.div(Mn||(Mn=(0,r.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 40px;\n  & > span {\n    font-size: 18px;\n    color: white;\n    margin-bottom: 5px;\n  }\n"]))),qn=d.ZP.img(An||(An=(0,r.Z)(["\n  width: 400px;\n  height: 300px;\n  object-fit: cover;\n  border-radius: 30px;\n  border-top-left-radius: 0;\n"])));function On(){return(0,x.jsxs)(_n,{children:[(0,x.jsx)("span",{children:"\uc911\ud559\uad50 2\ud559\ub144, \ucf54\ub529 \uc778\uc0dd\uc774 \uc2dc\uc791\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),(0,x.jsx)("br",{}),(0,x.jsx)("span",{children:"\uce5c\uad6c\uc640 \ud568\uaed8 \ucf54\ub529 \ub3d9\uc544\ub9ac\ub97c \ub9cc\ub4e4\uc5b4,"}),(0,x.jsx)("span",{children:"\ubd80\uc6d0 20\uba85\uacfc \ud568\uaed8 \ucf54\ub529\uc744 \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4."}),(0,x.jsx)("br",{}),(0,x.jsx)(qn,{src:Rn,alt:"scratch"}),(0,x.jsx)("br",{}),(0,x.jsx)("span",{children:"\uce5c\uadfc\ud558\uac8c \uc6c3\uc73c\uba70 \uc6c0\uc9c1\uc774\ub294 \uace0\uc591\uc774\ub97c \ubcf4\uace4"}),(0,x.jsx)("span",{children:"\ucf54\ub529\uc774 \ub9c8\ub0e5 \uc27d\uace0 \uc7ac\ubbf8\uc788\ub294 \uc904\ub85c\ub9cc \uc54c\uc558\uc2b5\ub2c8\ub2e4."}),(0,x.jsx)("br",{}),(0,x.jsx)("span",{children:"Scratch\ub294 \uadf8\ub807\uac8c \ud55c \uba85\uc758 \ud559\uc0dd\uc744 \uc774 \uc138\uacc4\ub85c \ub04c\uc5b4\ub4e4\uc600\uc2b5\ub2c8\ub2e4..."})]})}var Vn=d.ZP.div(Tn||(Tn=(0,r.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 40px;\n  & > span {\n    font-size: 18px;\n    color: white;\n    margin-bottom: 5px;\n  }\n"])));function Bn(){return(0,x.jsxs)(Vn,{children:[(0,x.jsx)("span",{children:"\uce58\uc5f4\ud588\ub358 \uc0dd\ud65c\uc744 \ub300\ubcc0\ud558\ub4ef, \ubb35\uc9c1\ud574\uc9c4 \uc0dd\ud65c \uae30\ub85d\ubd80\ub97c \uc548\uace0 \uc131\uc778\uc774 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),(0,x.jsx)("br",{}),(0,x.jsx)("span",{children:"\uc778\uc0dd \uce5c\uad6c\ub3c4 \uc0ac\uadc8 \uc218 \uc788\uc5c8\uace0,"}),(0,x.jsx)("span",{children:"\ud558\uace0\uc2f6\uc740 \uacf5\ubd80\ub97c \ud560 \uc218 \uc788\ub2e4\ub294 \uc0dd\uac01\uc5d0 \uc124\ub808\uc5c8\uc2b5\ub2c8\ub2e4."}),(0,x.jsx)("br",{}),(0,x.jsx)("span",{children:"\uc774\uc81c \uc131\uc7a5\ud560 \uc2dc\uac04\uc774 \ub2e4\uac00\uc654\uc2b5\ub2c8\ub2e4..."})]})}var Gn,Yn,Hn,Xn=e.p+"static/media/myacnh.f90bc02e2370a587e27c.jpeg",Jn=e.p+"static/media/myacnh_yt.496dec069b2a7db2ce8d.png",Wn=d.ZP.div(Gn||(Gn=(0,r.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 40px;\n  & > span {\n    font-size: 18px;\n    color: white;\n    margin-bottom: 5px;\n  }\n  & > a {\n    display: flex;\n    width: 400px;\n    border-radius: 30px;\n    border-top-left-radius: 0;\n    border: 2px solid #22bbff88;\n  }\n"]))),Un=d.ZP.img(Yn||(Yn=(0,r.Z)(["\n  width: 400px;\n  border-radius: 30px;\n  border-top-left-radius: 0;\n"])));function Kn(){return(0,x.jsxs)(Wn,{children:[(0,x.jsx)("span",{children:"\uccab \ud504\ub85c\uc81d\ud2b8\ub85c \ub2f9\uc2dc\uc5d0 \uc720\ud589\ud558\ub358 '\ub3d9\ubb3c\uc758 \uc232'\uc758 \uc0ac\uc804\uc744 \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4."}),(0,x.jsx)("br",{}),(0,x.jsx)(Un,{src:Xn,alt:"myacnh"}),(0,x.jsx)("br",{}),(0,x.jsx)("span",{children:"400\uba85\uc774 \ub118\ub294 \uc8fc\ubbfc\uc758 \uc790\ub8cc\ub97c \ud55c\uae00 / \uc601\uc5b4\ubcc4\ub85c \uc815\ub9ac\ud558\uace0,"}),(0,x.jsx)("span",{children:"\uc0ac\uc9c4\uc744 \uc77c\uc815\ud55c \ud06c\uae30\ub85c \ud3b8\uc9d1\ud558\uace0,"}),(0,x.jsx)("span",{children:"\uc548\ub4dc\ub85c\uc774\ub4dc \uc2a4\ud29c\ub514\uc624\ub85c \uc571\uc744 \ube4c\ub4dc\ud558\uace0,"}),(0,x.jsx)("span",{children:"\uad6c\uae00 \ud50c\ub808\uc774 \uc2a4\ud1a0\uc5b4\uc5d0 \uc5c5\ub85c\ub4dc / \uc5c5\ub370\uc774\ud2b8 \ud574\ubcf4\uace0,"}),(0,x.jsx)("span",{children:"\uc5b4\ub9b0 \uc544\uc774\ub4e4\uc758 \ud3c9\uc810 \ud0dc\ub7ec\uc5d0 \ub300\uc751\ud574\ubcf4\uace0,"}),(0,x.jsx)("span",{children:"\ud6c4\uc6d0\uae08\ub3c4 \ubc1b\uc544\ubcf4\uace0,"}),(0,x.jsx)("span",{children:"..."}),(0,x.jsx)("br",{}),(0,x.jsx)("span",{children:"\ub450 \ub2ec\ub3d9\uc548 \ud798\ub4e4\uc5c8\uc9c0\ub9cc..."}),(0,x.jsx)("br",{}),(0,x.jsx)("span",{children:"\uc774 \uacfc\uc815\uc5d0\uc11c \uad6c\uae00\ub9c1 \ud558\ub294 \ubc95\ub3c4 \ud130\ub4dd\ud560 \uc218 \uc788\uc5c8\uace0,"}),(0,x.jsx)("span",{children:"\uc0ac\uc6a9\uc790\uc640 \uc18c\ud1b5\ud574\ubcf4\uba70 \uc751\uc6d0\uacfc \uc758\uacac\uc744 \ubc1b\uc544\ubcfc \uc218 \uc788\uc5c8\uc73c\uba70,"}),(0,x.jsx)("span",{children:"\ubb34\uc5c7\ubcf4\ub2e4, \uc7ac\ubbf8\uc788\uc5c8\uc2b5\ub2c8\ub2e4."}),(0,x.jsx)("br",{}),(0,x.jsx)("a",{href:"https://www.youtube.com/watch?v=0Egiz8B4eIs",target:"_blank",rel:"noreferrer",children:(0,x.jsx)(Un,{src:Jn,alt:"myacnh_yt"})}),(0,x.jsx)("br",{}),(0,x.jsx)("span",{children:"\uc704 \uc0ac\uc9c4\uc744 \ub204\ub974\uc2dc\uba74 \uac1c\ubc1c\ub2f9\uc2dc \ub179\ud654\ud588\ub358 \uc601\uc0c1\uc744 \ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})}var $n,Qn=d.ZP.div(Hn||(Hn=(0,r.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 40px;\n  & > span {\n    font-size: 18px;\n    color: white;\n    margin-bottom: 5px;\n  }\n"])));function nt(){return(0,x.jsx)(Qn,{children:(0,x.jsx)("span",{children:"(\uc9c4\ud589 \uc911)"})})}var tt=d.ZP.div($n||($n=(0,r.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 40px;\n  & > span {\n    font-size: 18px;\n    color: white;\n    margin-bottom: 5px;\n  }\n"])));function et(){return(0,x.jsx)(tt,{children:(0,x.jsx)("span",{children:"(\uc9c4\ud589 \uc911)"})})}var it,rt,ot,st,at,lt,dt,ct,ht,pt,xt,ft,ut,gt,bt,mt,jt,vt,wt=e(6709),yt=e(7839),Zt=d.ZP.div(it||(it=(0,r.Z)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  scroll-snap-align: start;\n"]))),kt=d.ZP.div(rt||(rt=(0,r.Z)(["\n  width: 100%;\n  height: 100vh;\n  padding: 0 calc(50% - 400px);\n  padding-top: 100px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  overflow-y: scroll;\n  &::-webkit-scrollbar {\n    width: 0;\n    background: transparent;\n  }\n  opacity: ",";\n  transition: opacity 0.2s ease-out;\n"])),(function(n){return"true"===n.inview?1:0})),Pt=d.ZP.div(ot||(ot=(0,r.Z)(["\n  width: 100%;\n"]))),St=d.ZP.div(st||(st=(0,r.Z)(["\n  width: 100%;\n  height: 130px;\n  color: white;\n  display: flex;\n"]))),Et=d.ZP.div(at||(at=(0,r.Z)(["\n  width: 100%;\n  min-height: 150px;\n  color: white;\n  display: flex;\n"]))),zt=d.ZP.div(lt||(lt=(0,r.Z)(["\n  width: 105px;\n  height: 100%;\n  display: flex;\n  align-items: flex-end;\n"]))),It=d.ZP.div(dt||(dt=(0,r.Z)(["\n  width: 15px;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n"]))),Ct=d.ZP.div(ct||(ct=(0,r.Z)(["\n  width: calc(100% - 120px);\n  height: 100%;\n  display: flex;\n"]))),Ft=(0,d.ZP)(Ct)(ht||(ht=(0,r.Z)(["\n  align-items: flex-end;\n"]))),Lt=(0,d.ZP)(Ct)(pt||(pt=(0,r.Z)(["\n  flex-direction: column;\n  padding-top: 30px;\n  padding-left: 20px;\n"]))),Dt=d.ZP.div(xt||(xt=(0,r.Z)(["\n  width: 100%;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 15px;\n"]))),Nt=(0,d.ZP)(Dt)(ft||(ft=(0,r.Z)(["\n  justify-content: flex-end;\n  padding-right: 10px;\n  font-size: 16px;\n  padding-top: 1px;\n  border-right: 1px solid #22bbff;\n"]))),Mt=(0,d.ZP)(Dt)(ut||(ut=(0,r.Z)(["\n  padding-left: 20px;\n  padding-right: 100px;\n  padding-top: 4px;\n  font-size: 20px;\n  font-weight: 700;\n  border-left: 1px solid #22bbff;\n"]))),At=d.ZP.div(gt||(gt=(0,r.Z)(["\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: #22bbff;\n  margin: 10px 0;\n  filter: saturate(2) blur(1px);\n"]))),Tt=d.ZP.div(bt||(bt=(0,r.Z)(["\n  width: 2px;\n  height: calc(100% - 30px);\n  background-color: #22bbff;\n  border-bottom-left-radius: 1px;\n  border-bottom-right-radius: 1px;\n"]))),Rt=d.ZP.div(mt||(mt=(0,r.Z)(["\n  width: 4px;\n  height: 100%;\n  background-color: #22bbff;\n  border-bottom-left-radius: 1px;\n  border-bottom-right-radius: 1px;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n"]))),_t=(0,d.ZP)(s.E.div)(jt||(jt=(0,r.Z)(["\n  height: 95px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: #22bbff44;\n  transform-origin: 0%;\n  opacity: ",";\n  transition: opacity 0.2s ease-out;\n"])),(function(n){return"true"===n.inview?1:0})),qt=d.ZP.div(vt||(vt=(0,r.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  color: #888;\n"]))),Ot=[["2000.06","\ud0c4\uc0dd!"],["2014.07","\ucf54\ub529 \ub3d9\uc544\ub9ac \ucc3d\uc124"],["2019.03","\ubd80\ud765\uace0\ub4f1\ud559\uad50 \uc878\uc5c5"],["2020.03","\uccab \ud504\ub85c\uc81d\ud2b8 - '\ub098\uc758 \ubaa8\ub3d9\uc232'"],["2022.06","\ud310\ud0c0\uc2a4\ud2f15 - '\ub9d0\ud558\ub294 \uc0ac\uc774\uc5d0 \uc8fc\ubb38 \uc644\ub8cc!'"],["2022.06","\ub9e4\ub4dc\ub9e5\uc2a4 - '\ud63c\ubc25\uc2dc\uadf8\ub110'"]];var Vt,Bt,Gt,Yt=function(){var n=(0,l.sJ)(c.gq),t=(0,a.useRef)(null),e=(0,wt.v)({container:t}).scrollYProgress,i=(0,yt.q)(e,{stiffness:300,damping:30,restDelta:.005}),r=new Date,o=r.getFullYear(),s=r.getMonth()+1,d=r.getDate();return(0,x.jsxs)(Zt,{id:"timeline",children:[(0,x.jsx)(_t,{style:{scaleX:i},inview:4===n?"true":"false"}),(0,x.jsxs)(kt,{className:"scroll-area",inview:4===n?"true":"false",ref:t,children:[(0,x.jsx)(qt,{children:"\u2611\ufe0e \uc55e 3\uac1c\uc758 \ud0c0\uc784\ub77c\uc778\uc740 \uc11c\ub860\uc758 \uc131\uaca9\uc774 \uac15\ud569\ub2c8\ub2e4. \ucc38\uace0 \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4."}),Ot.map((function(n,t){return(0,x.jsxs)(Pt,{className:"block",children:[(0,x.jsx)(Ln.ZP,{scrollElement:".scroll-area",boundaryElement:".block",positionRecheckInterval:1,topOffset:-1,children:(0,x.jsxs)(St,{children:[(0,x.jsx)(zt,{children:(0,x.jsx)(Nt,{children:n[0]})}),(0,x.jsxs)(It,{children:[0===t?null:(0,x.jsx)(Tt,{}),(0,x.jsx)(At,{})]}),(0,x.jsx)(Ft,{children:(0,x.jsx)(Mt,{children:n[1]})})]})}),(0,x.jsxs)(Et,{children:[(0,x.jsx)(zt,{}),(0,x.jsx)(It,{children:(0,x.jsx)(Rt,{})}),(0,x.jsx)(Lt,{children:0===t?(0,x.jsx)(Nn,{}):1===t?(0,x.jsx)(On,{}):2===t?(0,x.jsx)(Bn,{}):3===t?(0,x.jsx)(Kn,{}):4===t?(0,x.jsx)(nt,{}):5===t?(0,x.jsx)(et,{}):null})]})]},t)})),(0,x.jsxs)(Pt,{className:"block",children:[(0,x.jsx)(Ln.ZP,{scrollElement:".scroll-area",boundaryElement:".block",positionRecheckInterval:1,topOffset:-1,children:(0,x.jsxs)(St,{children:[(0,x.jsx)(zt,{children:(0,x.jsx)(Nt,{style:{borderRight:"1px solid gold"},children:"".concat(o,".").concat(("00"+s).slice(-2),".").concat(d)})}),(0,x.jsxs)(It,{children:[(0,x.jsx)(Tt,{style:{background:"linear-gradient(#22bbff 70%, gold 90%)"}}),(0,x.jsx)(At,{style:{backgroundColor:"gold"}})]}),(0,x.jsx)(Ft,{children:(0,x.jsx)(Mt,{style:{borderLeft:"1px solid gold"},children:"...\uadf8\ub9ac\uace0 \uc624\ub298"})})]})}),(0,x.jsxs)(Et,{children:[(0,x.jsx)(zt,{}),(0,x.jsx)(It,{children:(0,x.jsx)(Rt,{style:{backgroundColor:"gold"}})}),(0,x.jsx)(Lt,{children:(0,x.jsx)("span",{children:"\ubc29\ubb38\ud574 \uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4!"})})]})]},"today")]})]})},Ht=d.ZP.div(Vt||(Vt=(0,r.Z)(["\n  width: 150px;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-between;\n  position: fixed;\n  right: 0;\n  top: 50%;\n  transform: translate(0, -50%);\n  z-index: 2;\n"]))),Xt=d.ZP.button(Bt||(Bt=(0,r.Z)(["\n  width: 150px;\n  height: 30px;\n  background-color: transparent;\n  border: none;\n  color: ",";\n  margin-right: ",";\n  transition: color 0.3s ease-out,\n    margin-right 0.3s cubic-bezier(0, 0.5, 0.5, 1);\n  position: relative;\n  & > span {\n    width: 150px;\n    height: 30px;\n    font-size: 20px;\n    font-weight: ",";\n    display: flex;\n    justify-content: ",";\n    align-items: center;\n    padding-right: 10px;\n    padding-left: 20px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 2;\n  }\n  & > div {\n    width: 170px;\n    transform: ",";\n    transition: transform 0.3s cubic-bezier(0, 0.5, 0.5, 1);\n    will-change: transform;\n  }\n  &:hover > div {\n    transform: translateX(0%);\n  }\n"])),(function(n){return n.isSelected?"#22bbff":"#FFFFFF"}),(function(n){return n.isSelected?"20px":"0"}),(function(n){return n.isSelected?"700":"400"}),(function(n){return n.isSelected?"flex-start":"flex-end"}),(function(n){return n.isSelected?"translateX(0%)":"translateX(100%)"})),Jt=d.ZP.div(Gt||(Gt=(0,r.Z)(["\n  width: 170px;\n  height: 30px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  right: -20px;\n  background: linear-gradient(90deg, #22bbff 1%, #00000077 5%);\n  z-index: 1;\n"])));var Wt=function(){var n=(0,l.FV)(c.gq),t=(0,i.Z)(n,2),e=t[0],r=t[1],o=(0,l.Zl)(c.Mj);return(0,x.jsxs)(Ht,{children:[(0,x.jsxs)(Xt,{id:"nav_1",onClick:function(){return r(1)},isSelected:1===e,children:[(0,x.jsx)("span",{children:"Home"}),(0,x.jsx)(Jt,{})]}),(0,x.jsxs)(Xt,{id:"nav_2",onClick:function(){return r(2)},isSelected:2===e,children:[(0,x.jsx)("span",{children:"Information"}),(0,x.jsx)(Jt,{})]}),(0,x.jsxs)(Xt,{id:"nav_3",onClick:function(){r(3),o(!1)},isSelected:3===e,children:[(0,x.jsx)("span",{children:"Projects"}),(0,x.jsx)(Jt,{})]}),(0,x.jsxs)(Xt,{id:"nav_4",onClick:function(){return r(4)},isSelected:4===e,children:[(0,x.jsx)("span",{children:"Time Line"}),(0,x.jsx)(Jt,{})]})]})},Ut=e.p+"static/media/background.e1790f4eec77f5f1dfe1.jpg";var Kt=e.p+"static/media/linode-brands.efc1660b2a56fb30d41f86130cb58e6b.svg";var $t=e.p+"static/media/circle-nodes-solid.b08973c009e5d05f66078bb9ffb3e072.svg";var Qt=e.p+"static/media/github.833b63e28cadf07403bc81451d30b858.svg";var ne=e.p+"static/media/blog.d8adfbd670c975416fa2a43be75719a2.svg";var te,ee,ie,re,oe=e.p+"static/media/youtube.87350b41a36870581ed6bbca31d713b0.svg",se=d.ZP.div(te||(te=(0,r.Z)(["\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n"]))),ae=d.ZP.div(ee||(ee=(0,r.Z)(["\n  width: 100vw;\n  height: 100vh;\n  &::-webkit-scrollbar {\n    width: 0;\n    background: transparent;\n  }\n  position: relative;\n  scroll-snap-type: y mandatory;\n  /* overflow-y: scroll; */\n  overflow: hidden;\n"]))),le=d.ZP.img(ie||(ie=(0,r.Z)(["\n  width: 100vw;\n  height: 100vh;\n  object-fit: cover;\n  position: fixed;\n  top: 0;\n  z-index: 1;\n  filter: brightness(70%);\n"]))),de=d.ZP.div(re||(re=(0,r.Z)(["\n  position: fixed;\n  height: 0;\n  opacity: 0;\n  pointer-events: none;\n"])));var ce=function(){var n=(0,l.FV)(c.NE),t=(0,i.Z)(n,2),e=t[0],r=t[1],d=(0,l.FV)(c.gq),h=(0,i.Z)(d,2),p=h[0],f=h[1],u=(0,l.sJ)(c.Mj),g=(0,a.useRef)(null),b=(0,a.useRef)(null),m=(0,a.useRef)(null),j=(0,a.useRef)(null);return(0,a.useEffect)((function(){setTimeout((function(){var n,t,e,i;1===p&&(null===(n=g.current)||void 0===n||n.scrollIntoView({behavior:"smooth"})),2===p&&(null===(t=b.current)||void 0===t||t.scrollIntoView({behavior:"smooth"})),3===p&&(null===(e=m.current)||void 0===e||e.scrollIntoView({behavior:u?"auto":"smooth"})),4===p&&(null===(i=j.current)||void 0===i||i.scrollIntoView({behavior:"smooth"}))}),1)}),[p]),(0,a.useEffect)((function(){u&&f(3)}),[u]),(0,x.jsxs)(se,{children:[(0,x.jsx)(o.M,{children:e>=6?null:(0,x.jsx)(s.E.div,{exit:{opacity:0},style:{position:"fixed",zIndex:10},children:(0,x.jsx)(A.Z,{status:40})},"loaded")}),(0,x.jsx)(le,{src:Ut,alt:"bg",onLoad:function(){return r((function(n){return n+1}))}}),(0,x.jsxs)(de,{className:"Image_Assets_Preload",children:[(0,x.jsx)("img",{src:Kt,alt:"InfoImg",onLoad:function(){return r((function(n){return n+1}))}}),(0,x.jsx)("img",{src:$t,alt:"ContactImg",onLoad:function(){return r((function(n){return n+1}))}}),(0,x.jsx)("img",{src:Qt,alt:"GitHubImg",onLoad:function(){return r((function(n){return n+1}))}}),(0,x.jsx)("img",{src:ne,alt:"BlogImg",onLoad:function(){return r((function(n){return n+1}))}}),(0,x.jsx)("img",{src:oe,alt:"YoutubeImg",onLoad:function(){return r((function(n){return n+1}))}})]}),(0,x.jsxs)(ae,{children:[(0,x.jsx)(M,{title:1===p?"DEV. WOONG":2===p?"INFOMATION":3===p?"PROJECTS":4===p?"TIME LINE":"N/A",assets:[Kt,$t,Qt,ne,oe]}),(0,x.jsx)(Wt,{}),(0,x.jsxs)("div",{style:{width:"100%",position:"absolute",top:0,zIndex:1},children:[(0,x.jsx)("div",{ref:g,style:{scrollSnapAlign:"start"},children:(0,x.jsx)(J,{})}),(0,x.jsx)("div",{ref:b,style:{scrollSnapAlign:"start"},children:(0,x.jsx)(En,{})}),(0,x.jsx)("div",{ref:m,style:{scrollSnapAlign:"start"},children:(0,x.jsx)(Fn,{})}),(0,x.jsx)("div",{ref:j,style:{scrollSnapAlign:"start"},children:(0,x.jsx)(Yt,{})})]})]})]})}}}]);
//# sourceMappingURL=850.8fe7faef.chunk.js.map