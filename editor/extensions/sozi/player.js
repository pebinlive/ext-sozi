var sozi=sozi||{};(function(){var a=sozi.events=sozi.events||{},b={};a.listen=function(d,e){var c=b[d];if(!c){c=b[d]=[]}c.push(e)};a.fire=function(g){var d=b[g],c,f,e=Array.prototype.slice.call(arguments,1);if(d){c=d.length;for(f=0;f<c;f+=1){d[f].apply(null,e)}}}}());var sozi=sozi||{};(function(){var w=sozi.framelist=sozi.framelist||{},k=this,r=k.document,q,m,c,j=0,d=5,i,u,b,y,z,v,f=300,g="decelerate",a="http://www.w3.org/2000/svg";function h(A){return function(B){sozi.player.previewFrame(A);B.stopPropagation()}}function l(A){A.stopPropagation()}function p(B){var A=B.relatedTarget;while(A!==m&&A!==q){A=A.parentNode}if(A===q){w.hide();sozi.player.restart();B.stopPropagation()}}function t(B){var A=c.getCTM().f;if(A<=-k.innerHeight/2){A+=k.innerHeight/2}else{if(A<0){A=0}}c.setAttribute("transform","translate(0,"+A+")");B.stopPropagation()}function e(B){var A=c.getCTM().f;if(A+j>=k.innerHeight*3/2){A-=k.innerHeight/2}else{if(A+j>k.innerHeight+2*d){A=k.innerHeight-j-4*d}}c.setAttribute("transform","translate(0,"+A+")");B.stopPropagation()}function s(A){var C=sozi.animation.profiles[g](A),B=1-C;z=y*C+b*B;m.setAttribute("transform","translate("+z+",0)")}function x(){}function o(){var G=r.createElementNS(a,"rect"),A=r.createElementNS(a,"path"),E=r.createElementNS(a,"path"),H=0,F,C=sozi.document.frames.length,B=sozi.location.getFrameIndex(),D,I;q=r.documentElement;m=r.createElementNS(a,"g");m.setAttribute("id","sozi-toc");q.appendChild(m);c=r.createElementNS(a,"g");m.appendChild(c);G.setAttribute("id","sozi-toc-background");G.setAttribute("x",d);G.setAttribute("y",d);G.setAttribute("rx",d);G.setAttribute("ry",d);G.addEventListener("click",l,false);G.addEventListener("mousedown",l,false);G.addEventListener("mouseout",p,false);c.appendChild(G);for(D=0;D<C;D+=1){I=r.createElementNS(a,"text");I.appendChild(r.createTextNode(sozi.document.frames[D].title));c.appendChild(I);if(D===B){I.setAttribute("class","sozi-toc-current")}F=I.getBBox().width;j+=I.getBBox().height;if(F>H){H=F}I.setAttribute("x",2*d);I.setAttribute("y",j+d);I.addEventListener("click",h(D),false);I.addEventListener("mousedown",l,false)}A.setAttribute("class","sozi-toc-arrow");A.setAttribute("d","M"+(H+3*d)+","+(5*d)+" l"+(4*d)+",0 l-"+(2*d)+",-"+(3*d)+" z");A.addEventListener("click",t,false);A.addEventListener("mousedown",l,false);m.appendChild(A);E.setAttribute("class","sozi-toc-arrow");E.setAttribute("d","M"+(H+3*d)+","+(7*d)+" l"+(4*d)+",0 l-"+(2*d)+","+(3*d)+" z");E.addEventListener("click",e,false);E.addEventListener("mousedown",l,false);m.appendChild(E);G.setAttribute("width",H+7*d);G.setAttribute("height",j+2*d);i=-H-9*d;u=0;z=y=i;m.setAttribute("transform","translate("+i+",0)");v=new sozi.animation.Animator(s,x)}function n(A){var D=r.getElementsByClassName("sozi-toc-current"),C=c.getElementsByTagName("text"),B;for(B=0;B<D.length;B+=1){D[B].removeAttribute("class")}C[A].setAttribute("class","sozi-toc-current")}w.show=function(){b=z;y=u;v.start(f)};w.hide=function(){b=z;y=i;v.start(f)};w.isVisible=function(){return y===u};sozi.events.listen("displayready",o);sozi.events.listen("cleanup",w.hide);sozi.events.listen("framechange",n)}());var sozi=sozi||{};(function(){var t=sozi.player=sozi.player||{},u=sozi.display=sozi.display||{},j=this,o=j.document,p=0,v=1,s=1.05,x=5,c=false,l=false,g=0,e=0;function a(A,z,B){t.stop();u.zoom(A>0?s:1/s,z,B)}function w(y){t.stop();u.rotate(y>0?x:-x)}function r(){if(sozi.framelist.isVisible()){sozi.framelist.hide();t.restart()}else{t.stop();sozi.framelist.show()}}function i(y){if(y.button===p){c=true;l=false;g=y.clientX;e=y.clientY}else{if(y.button===v){r()}}y.stopPropagation()}function m(y){if(c){t.stop();l=true;sozi.events.fire("cleanup");u.drag(y.clientX-g,y.clientY-e);g=y.clientX;e=y.clientY}y.stopPropagation()}function f(y){if(y.button===p){c=false}y.stopPropagation()}function q(y){t.moveToPrevious();y.stopPropagation();y.preventDefault()}function h(y){if(!l&&y.button!==v){t.moveToNext()}y.stopPropagation()}function k(y){var z=0;if(!y){y=j.event}if(y.wheelDelta){z=y.wheelDelta;if(j.opera){z=-z}}else{if(y.detail){z=-y.detail}}if(z!==0){if(y.shiftKey){w(z)}else{a(z,y.clientX,y.clientY)}}y.stopPropagation();y.preventDefault()}function n(y){switch(y.charCode){case 43:a(1,j.innerWidth/2,j.innerHeight/2);break;case 45:a(-1,j.innerWidth/2,j.innerHeight/2);break;case 61:t.moveToCurrent();break;case 70:case 102:t.showAll();break;case 84:case 116:r();break;case 82:w(-1);break;case 114:w(1);break}y.stopPropagation()}function d(y){switch(y.keyCode){case 36:t.moveToFirst();break;case 35:t.moveToLast();break;case 38:t.jumpToPrevious();break;case 33:case 37:t.moveToPrevious();break;case 40:t.jumpToNext();break;case 34:case 39:case 13:case 32:t.moveToNext();break}y.stopPropagation()}function b(){var y=o.documentElement;y.addEventListener("click",h,false);y.addEventListener("mousedown",i,false);y.addEventListener("mouseup",f,false);y.addEventListener("mousemove",m,false);y.addEventListener("keypress",n,false);y.addEventListener("keydown",d,false);y.addEventListener("contextmenu",q,false);y.addEventListener("DOMMouseScroll",k,false);j.onmousewheel=k}j.addEventListener("load",b,false)}());var sozi=sozi||{};(function(){var e=sozi.animation=sozi.animation||{},h=this,j=40,d=[],b,i=h.mozRequestAnimationFrame||h.webkitRequestAnimationFrame||h.msRequestAnimationFrame||h.oRequestAnimationFrame;function c(){if(i){i(f)}else{b=h.setInterval(function(){f(Date.now())},j)}}function f(l){var k;if(d.length>0){if(i){i(f)}for(k=0;k<d.length;k+=1){d[k].step(l)}}else{if(!i){h.clearInterval(b)}}}function a(k){d.push(k);if(d.length===1){c()}}function g(k){d.splice(d.indexOf(k),1)}e.Animator=function(k,l){this.onStep=k;this.onDone=l;this.durationMs=0;this.data={};this.initialTime=0;this.started=false};e.Animator.prototype.start=function(k,l){this.durationMs=k;this.data=l;this.initialTime=Date.now();this.onStep(0,this.data);if(!this.started){this.started=true;a(this)}};e.Animator.prototype.stop=function(){if(this.started){g(this);this.started=false}};e.Animator.prototype.step=function(l){var k=l-this.initialTime;if(k>=this.durationMs){this.stop();this.onStep(1,this.data);this.onDone()}else{this.onStep(k/this.durationMs,this.data)}};e.profiles={linear:function(k){return k},accelerate:function(k){return Math.pow(k,3)},"strong-accelerate":function(k){return Math.pow(k,5)},decelerate:function(k){return 1-Math.pow(1-k,3)},"strong-decelerate":function(k){return 1-Math.pow(1-k,5)},"accelerate-decelerate":function(k){var l=k<=0.5?k:1-k,m=Math.pow(2*l,3)/2;return k<=0.5?m:1-m},"strong-accelerate-decelerate":function(k){var l=k<=0.5?k:1-k,m=Math.pow(2*l,5)/2;return k<=0.5?m:1-m},"decelerate-accelerate":function(k){var l=k<=0.5?k:1-k,m=(1-Math.pow(1-2*l,2))/2;return k<=0.5?m:1-m},"strong-decelerate-accelerate":function(k){var l=k<=0.5?k:1-k,m=(1-Math.pow(1-2*l,3))/2;return k<=0.5?m:1-m}}}());var sozi=sozi||{};(function(){var d=sozi.player=sozi.player||{},j=sozi.display=sozi.display||{},h=this,c,k,e=500,q=-10,l="linear",g=0,n=0,o=false,p=false;function f(t,w){var v=1-t,u=w.profile(t),s=1-u,r,x;for(r in w.initialState){if(w.initialState.hasOwnProperty(r)){if(typeof w.initialState[r]==="number"&&typeof w.finalState[r]==="number"){j.geometry[r]=w.finalState[r]*u+w.initialState[r]*s}}}if(w.zoomWidth&&w.zoomWidth.k!==0){x=t-w.zoomWidth.ts;j.geometry.width=w.zoomWidth.k*x*x+w.zoomWidth.ss}if(w.zoomHeight&&w.zoomHeight.k!==0){x=t-w.zoomHeight.ts;j.geometry.height=w.zoomHeight.k*x*x+w.zoomHeight.ss}j.clip=w.finalState.clip;j.update()}function i(){var r;if(sozi.document.frames[n].timeoutEnable){p=true;r=(n+1)%sozi.document.frames.length;k=h.setTimeout(function(){d.moveToFrame(r)},sozi.document.frames[n].timeoutMs)}}function m(){g=n;if(o){i()}}d.startFromIndex=function(r){o=true;p=false;g=r;n=r;j.showFrame(sozi.document.frames[r]);i()};d.restart=function(){d.startFromIndex(n)};d.stop=function(){c.stop();if(p){h.clearTimeout(k);p=false}o=false;g=n};function b(r,B,z){var C={ss:((r<0)?Math.max(B,z):Math.min(B,z))*(100-r)/100,ts:0.5,k:0},x,w,t,s,A,y;if(r!==0){x=B-z;w=B-C.ss;t=z-C.ss;if(x!==0){s=Math.sqrt(w*t);A=(w-s)/x;y=(w+s)/x;C.ts=(A>0&&A<=1)?A:y}C.k=w/C.ts/C.ts}return C}d.jumpToFrame=function(r){d.stop();sozi.events.fire("cleanup");g=r;n=r;j.showFrame(sozi.document.frames[r]);sozi.events.fire("framechange",r)};d.previewFrame=function(s){var u=sozi.document.frames[s].geometry,r,t;if(q!==0){r=b(q,j.geometry.width,u.width);t=b(q,j.geometry.height,u.height)}n=s;c.start(e,{initialState:j.getCurrentGeometry(),finalState:u,profile:sozi.animation.profiles[l],zoomWidth:r,zoomHeight:t});sozi.events.fire("framechange",s)};d.moveToFrame=function(t){var s=e,w=q,u=sozi.animation.profiles[l],r,v;if(p){h.clearTimeout(k);p=false}if(t===(n+1)%sozi.document.frames.length){s=sozi.document.frames[t].transitionDurationMs;w=sozi.document.frames[t].transitionZoomPercent;u=sozi.document.frames[t].transitionProfile}sozi.events.fire("cleanup");if(w!==0){r=b(w,j.geometry.width,sozi.document.frames[t].geometry.width);v=b(w,j.geometry.height,sozi.document.frames[t].geometry.height)}o=true;n=t;c.start(s,{initialState:j.getCurrentGeometry(),finalState:sozi.document.frames[n].geometry,profile:u,zoomWidth:r,zoomHeight:v});sozi.events.fire("framechange",t)};d.moveToFirst=function(){d.moveToFrame(0)};d.jumpToPrevious=function(){var r=n;if(!c.started||g<=n){r-=1}if(r>=0){d.jumpToFrame(r)}};d.moveToPrevious=function(){var r=n,s;for(r-=1;r>=0;r-=1){s=sozi.document.frames[r];if(!s.timeoutEnable||s.timeoutMs!==0){d.moveToFrame(r);break}}};d.jumpToNext=function(){var r=n;if(!c.started||g>=n){r+=1}if(r<sozi.document.frames.length){d.jumpToFrame(r)}};d.moveToNext=function(){if(n<sozi.document.frames.length-1||sozi.document.frames[n].timeoutEnable){d.moveToFrame((n+1)%sozi.document.frames.length)}};d.moveToLast=function(){d.moveToFrame(sozi.document.frames.length-1)};d.moveToCurrent=function(){d.moveToFrame(n)};d.showAll=function(){d.stop();sozi.events.fire("cleanup");c.start(e,{initialState:j.getCurrentGeometry(),finalState:j.getDocumentGeometry(),profile:sozi.animation.profiles[l]})};function a(){d.startFromIndex(sozi.location.getFrameIndex())}c=new sozi.animation.Animator(f,m);sozi.events.listen("displayready",a)}());var sozi=sozi||{};(function(){var d=sozi.display=sozi.display||{},h=this,i=h.document,j,c,k,a,g="http://www.w3.org/2000/svg";d.geometry={cx:0,cy:0,width:1,height:1,rotate:0,clip:true};function f(){var o,l=i.createElementNS(g,"g"),m=i.createElementNS(g,"clipPath");j=i.documentElement;k=j.getBBox();a=i.createElementNS(g,"g");while(true){o=j.firstChild;if(!o){break}j.removeChild(o);a.appendChild(o)}c=i.createElementNS(g,"rect");c.setAttribute("id","sozi-clip-rect");m.setAttribute("id","sozi-clip-path");m.appendChild(c);j.appendChild(m);l.setAttribute("clip-path","url(#sozi-clip-path)");l.appendChild(a);j.appendChild(l);j.setAttribute("width",h.innerWidth);j.setAttribute("height",h.innerHeight);sozi.events.fire("displayready")}function b(){j.setAttribute("width",h.innerWidth);j.setAttribute("height",h.innerHeight);d.update()}function e(){var l={};l.scale=Math.min(h.innerWidth/d.geometry.width,h.innerHeight/d.geometry.height);l.width=d.geometry.width*l.scale;l.height=d.geometry.height*l.scale;l.x=(h.innerWidth-l.width)/2;l.y=(h.innerHeight-l.height)/2;return l}d.getElementGeometry=function(l){var s,p,t,n,q,o,r=l.getCTM(),m=Math.sqrt(r.a*r.a+r.b*r.b);if(l.nodeName==="rect"){s=l.x.baseVal.value;p=l.y.baseVal.value;t=l.width.baseVal.value;n=l.height.baseVal.value}else{q=l.getBBox();s=q.x;p=q.y;t=q.width;n=q.height}o=i.documentElement.createSVGPoint();o.x=s+t/2;o.y=p+n/2;o=o.matrixTransform(r);return{cx:o.x,cy:o.y,width:t*m,height:n*m,rotate:Math.atan2(r.b,r.a)*180/Math.PI}};d.getDocumentGeometry=function(){return{cx:k.x+k.width/2,cy:k.y+k.height/2,width:k.width,height:k.height,rotate:0,clip:false}};d.getCurrentGeometry=function(){return{cx:d.geometry.cx,cy:d.geometry.cy,width:d.geometry.width,height:d.geometry.height,rotate:d.geometry.rotate,clip:d.geometry.clip}};d.update=function(){var l=e(),n=-d.geometry.cx+d.geometry.width/2+l.x/l.scale,m=-d.geometry.cy+d.geometry.height/2+l.y/l.scale;a.setAttribute("transform","scale("+l.scale+")translate("+n+","+m+")rotate("+(-d.geometry.rotate)+","+d.geometry.cx+","+d.geometry.cy+")");c.setAttribute("x",d.geometry.clip?l.x:0);c.setAttribute("y",d.geometry.clip?l.y:0);c.setAttribute("width",d.geometry.clip?l.width:h.innerWidth);c.setAttribute("height",d.geometry.clip?l.height:h.innerHeight)};d.showFrame=function(m){var l;for(l in m.geometry){if(m.geometry.hasOwnProperty(l)){d.geometry[l]=m.geometry[l]}}d.update()};d.drag=function(m,l){var n=e(),o=d.geometry.rotate*Math.PI/180;d.geometry.cx-=(m*Math.cos(o)-l*Math.sin(o))/n.scale;d.geometry.cy-=(m*Math.sin(o)+l*Math.cos(o))/n.scale;d.geometry.clip=false;d.update()};d.zoom=function(o,m,p){var n=(1-o)*(m-h.innerWidth/2),l=(1-o)*(p-h.innerHeight/2);d.geometry.width/=o;d.geometry.height/=o;d.drag(n,l)};d.rotate=function(l){d.geometry.rotate+=l;d.geometry.rotate%=360;d.update()};sozi.events.listen("documentready",f);h.addEventListener("resize",b,false)}());var sozi=sozi||{};(function(){var c=sozi.document=sozi.document||{},g=this,a=g.document,f="http://sozi.baierouge.fr",d={title:"Untitled",sequence:"0",hide:"true",clip:"true","timeout-enable":"false","timeout-ms":"5000","transition-duration-ms":"1000","transition-zoom-percent":"0","transition-profile":"linear"};c.frames=[];function h(j,i){var k=j.getAttributeNS(f,i);return k===""?d[i]:k}function b(){var j=a.getElementsByTagNameNS(f,"frame"),k=j.length,m,l,n;for(l=0;l<k;l+=1){m=a.getElementById(j[l].getAttributeNS(f,"refid"));if(m){n={geometry:sozi.display.getElementGeometry(m),title:h(j[l],"title"),sequence:parseInt(h(j[l],"sequence"),10),hide:h(j[l],"hide")==="true",timeoutEnable:h(j[l],"timeout-enable")==="true",timeoutMs:parseInt(h(j[l],"timeout-ms"),10),transitionDurationMs:parseInt(h(j[l],"transition-duration-ms"),10),transitionZoomPercent:parseInt(h(j[l],"transition-zoom-percent"),10),transitionProfile:sozi.animation.profiles[h(j[l],"transition-profile")||"linear"]};if(n.hide){m.setAttribute("visibility","hidden")}n.geometry.clip=h(j[l],"clip")==="true";c.frames.push(n)}}c.frames.sort(function(o,i){return o.sequence-i.sequence})}function e(){a.documentElement.removeAttribute("viewBox");b();sozi.events.fire("documentready")}g.addEventListener("load",e,false)}());var sozi=sozi||{};(function(){var a=sozi.location=sozi.location||{},e=this,c=false;a.getFrameIndex=function(){var g=e.location.hash?parseInt(e.location.hash.slice(1),10)-1:0;if(isNaN(g)||g<0){return 0}else{if(g>=sozi.document.frames.length){return sozi.document.frames.length-1}else{return g}}};function f(){var g=a.getFrameIndex();if(!c){sozi.player.moveToFrame(g)}c=false}function d(g){c=true;e.location.hash="#"+(g+1)}function b(){sozi.events.listen("framechange",d)}e.addEventListener("hashchange",f,false);e.addEventListener("load",b,false)}());
