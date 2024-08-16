var by=Object.defineProperty;var Ty=(i,e,t)=>e in i?by(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ie=(i,e,t)=>(Ty(i,typeof e!="symbol"?e+"":e,t),t);function Yp(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function Nd(i,e,t){return e&&Yp(i.prototype,e),t&&Yp(i,t),i}function ks(){return(ks=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i}).apply(this,arguments)}function Ju(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}function V_(i){return(V_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(i)}function Fd(i,e){return(Fd=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(i,e)}function W_(i,e,t){return(W_=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}()?Reflect.construct:function(n,r,s){var o=[null];o.push.apply(o,r);var a=new(Function.bind.apply(n,o));return s&&Fd(a,s.prototype),a}).apply(null,arguments)}function X_(i){var e=typeof Map=="function"?new Map:void 0;return(X_=function(t){if(t===null||Function.toString.call(t).indexOf("[native code]")===-1)return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return W_(t,arguments,V_(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Fd(n,t)})(i)}function Fo(i,e){try{var t=i()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}typeof Symbol<"u"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),typeof Symbol<"u"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var Vr,wy="2.9.7",Ay=function(){};(function(i){i[i.off=0]="off",i[i.error=1]="error",i[i.warning=2]="warning",i[i.info=3]="info",i[i.debug=4]="debug"})(Vr||(Vr={}));var Kp=Vr.off,Bs=function(){function i(t){this.t=t}i.getLevel=function(){return Kp},i.setLevel=function(t){return Kp=Vr[t]};var e=i.prototype;return e.error=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.error,Vr.error,n)},e.warn=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.warn,Vr.warning,n)},e.info=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.info,Vr.info,n)},e.debug=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.log,Vr.debug,n)},e.i=function(t,n,r){n<=i.getLevel()&&t.apply(console,["["+this.t+"] "].concat(r))},i}(),Cs=zd,Ry=$_,Cy=kd,Py=Y_,Ly=K_,q_="/",Dy=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function kd(i,e){for(var t,n=[],r=0,s=0,o="",a=e&&e.delimiter||q_,c=e&&e.whitelist||void 0,l=!1;(t=Dy.exec(i))!==null;){var u=t[0],h=t[1],f=t.index;if(o+=i.slice(s,f),s=f+u.length,h)o+=h[1],l=!0;else{var d="",_=t[2],m=t[3],g=t[4],p=t[5];if(!l&&o.length){var x=o.length-1,v=o[x];(!c||c.indexOf(v)>-1)&&(d=v,o=o.slice(0,x))}o&&(n.push(o),o="",l=!1);var y=m||g,M=d||a;n.push({name:_||r++,prefix:d,delimiter:M,optional:p==="?"||p==="*",repeat:p==="+"||p==="*",pattern:y?Iy(y):"[^"+hr(M===a?M:M+a)+"]+?"})}}return(o||s<i.length)&&n.push(o+i.substr(s)),n}function $_(i,e){return function(t,n){var r=i.exec(t);if(!r)return!1;for(var s=r[0],o=r.index,a={},c=n&&n.decode||decodeURIComponent,l=1;l<r.length;l++)if(r[l]!==void 0){var u=e[l-1];a[u.name]=u.repeat?r[l].split(u.delimiter).map(function(h){return c(h,u)}):c(r[l],u)}return{path:s,index:o,params:a}}}function Y_(i,e){for(var t=new Array(i.length),n=0;n<i.length;n++)typeof i[n]=="object"&&(t[n]=new RegExp("^(?:"+i[n].pattern+")$",Bd(e)));return function(r,s){for(var o="",a=s&&s.encode||encodeURIComponent,c=!s||s.validate!==!1,l=0;l<i.length;l++){var u=i[l];if(typeof u!="string"){var h,f=r?r[u.name]:void 0;if(Array.isArray(f)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but got array');if(f.length===0){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<f.length;d++){if(h=a(f[d],u),c&&!t[l].test(h))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'"');o+=(d===0?u.prefix:u.delimiter)+h}}else if(typeof f!="string"&&typeof f!="number"&&typeof f!="boolean"){if(!u.optional)throw new TypeError('Expected "'+u.name+'" to be '+(u.repeat?"an array":"a string"))}else{if(h=a(String(f),u),c&&!t[l].test(h))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but got "'+h+'"');o+=u.prefix+h}}else o+=u}return o}}function hr(i){return i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Iy(i){return i.replace(/([=!:$/()])/g,"\\$1")}function Bd(i){return i&&i.sensitive?"":"i"}function K_(i,e,t){for(var n=(t=t||{}).strict,r=t.start!==!1,s=t.end!==!1,o=t.delimiter||q_,a=[].concat(t.endsWith||[]).map(hr).concat("$").join("|"),c=r?"^":"",l=0;l<i.length;l++){var u=i[l];if(typeof u=="string")c+=hr(u);else{var h=u.repeat?"(?:"+u.pattern+")(?:"+hr(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),c+=u.optional?u.prefix?"(?:"+hr(u.prefix)+"("+h+"))?":"("+h+")?":hr(u.prefix)+"("+h+")"}}if(s)n||(c+="(?:"+hr(o)+")?"),c+=a==="$"?"$":"(?="+a+")";else{var f=i[i.length-1],d=typeof f=="string"?f[f.length-1]===o:f===void 0;n||(c+="(?:"+hr(o)+"(?="+a+"))?"),d||(c+="(?="+hr(o)+"|"+a+")")}return new RegExp(c,Bd(t))}function zd(i,e,t){return i instanceof RegExp?function(n,r){if(!r)return n;var s=n.source.match(/\((?!\?)/g);if(s)for(var o=0;o<s.length;o++)r.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return n}(i,e):Array.isArray(i)?function(n,r,s){for(var o=[],a=0;a<n.length;a++)o.push(zd(n[a],r,s).source);return new RegExp("(?:"+o.join("|")+")",Bd(s))}(i,e,t):function(n,r,s){return K_(kd(n,s),r,s)}(i,e,t)}Cs.match=function(i,e){var t=[];return $_(zd(i,t,e),t)},Cs.regexpToFunction=Ry,Cs.parse=Cy,Cs.compile=function(i,e){return Y_(kd(i,e),e)},Cs.tokensToFunction=Py,Cs.tokensToRegExp=Ly;var ji={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},zs=new(function(){function i(){this.o=ji,this.u=new DOMParser}var e=i.prototype;return e.toString=function(t){return t.outerHTML},e.toDocument=function(t){return this.u.parseFromString(t,"text/html")},e.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},e.getHtml=function(t){return t===void 0&&(t=document),this.toString(t.documentElement)},e.getWrapper=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},e.getContainer=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},e.removeContainer=function(t){document.body.contains(t)&&t.parentNode.removeChild(t)},e.addContainer=function(t,n){var r=this.getContainer();r?this.s(t,r):n.appendChild(t)},e.getNamespace=function(t){t===void 0&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},e.getHref=function(t){if(t.tagName&&t.tagName.toLowerCase()==="a"){if(typeof t.href=="string")return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},e.resolveUrl=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var s=n.length;if(s===0)throw new Error("resolveUrl requires at least one argument; got none.");var o=document.createElement("base");if(o.href=arguments[0],s===1)return o.href;var a=document.getElementsByTagName("head")[0];a.insertBefore(o,a.firstChild);for(var c,l=document.createElement("a"),u=1;u<s;u++)l.href=arguments[u],o.href=c=l.href;return a.removeChild(o),c},e.s=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},i}()),j_=new(function(){function i(){this.h=[],this.v=-1}var e=i.prototype;return e.init=function(t,n){this.l="barba";var r={ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(r),this.v=0;var s={from:this.l,index:0,states:[].concat(this.h)};window.history&&window.history.replaceState(s,"",t)},e.change=function(t,n,r){if(r&&r.state){var s=r.state,o=s.index;n=this.m(this.v-o),this.replace(s.states),this.v=o}else this.add(t,n);return n},e.add=function(t,n){var r=this.size,s=this.p(n),o={ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(o),this.v=r;var a={from:this.l,index:r,states:[].concat(this.h)};switch(s){case"push":window.history&&window.history.pushState(a,"",t);break;case"replace":window.history&&window.history.replaceState(a,"",t)}},e.update=function(t,n){var r=n||this.v,s=ks({},this.get(r),{},t);this.set(r,s)},e.remove=function(t){t?this.h.splice(t,1):this.h.pop(),this.v--},e.clear=function(){this.h=[],this.v=-1},e.replace=function(t){this.h=t},e.get=function(t){return this.h[t]},e.set=function(t,n){return this.h[t]=n},e.p=function(t){var n="push",r=t,s=ji.prefix+"-"+ji.history;return r.hasAttribute&&r.hasAttribute(s)&&(n=r.getAttribute(s)),n},e.m=function(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"},Nd(i,[{key:"current",get:function(){return this.h[this.v]}},{key:"state",get:function(){return this.h[this.h.length-1]}},{key:"previous",get:function(){return this.v<1?null:this.h[this.v-1]}},{key:"size",get:function(){return this.h.length}}]),i}()),du=function(i,e){try{var t=function(){if(!e.next.html)return Promise.resolve(i).then(function(n){var r=e.next;if(n){var s=zs.toElement(n);r.namespace=zs.getNamespace(s),r.container=zs.getContainer(s),r.html=n,j_.update({ns:r.namespace});var o=zs.toDocument(n);document.title=o.title}})}();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},Z_=Cs,Oy={__proto__:null,update:du,nextTick:function(){return new Promise(function(i){window.requestAnimationFrame(i)})},pathToRegexp:Z_},J_=function(){return window.location.origin},vc=function(i){return i===void 0&&(i=window.location.href),pu(i).port},pu=function(i){var e,t=i.match(/:\d+/);if(t===null)/^http/.test(i)&&(e=80),/^https/.test(i)&&(e=443);else{var n=t[0].substring(1);e=parseInt(n,10)}var r,s=i.replace(J_(),""),o={},a=s.indexOf("#");a>=0&&(r=s.slice(a+1),s=s.slice(0,a));var c=s.indexOf("?");return c>=0&&(o=Q_(s.slice(c+1)),s=s.slice(0,c)),{hash:r,path:s,port:e,query:o}},Q_=function(i){return i.split("&").reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{})},Nf=function(i){return i===void 0&&(i=window.location.href),i.replace(/(\/#.*|\/|#.*)$/,"")},Uy={__proto__:null,getHref:function(){return window.location.href},getOrigin:J_,getPort:vc,getPath:function(i){return i===void 0&&(i=window.location.href),pu(i).path},parse:pu,parseQuery:Q_,clean:Nf};function Ny(i,e,t){return e===void 0&&(e=2e3),new Promise(function(n,r){var s=new XMLHttpRequest;s.onreadystatechange=function(){if(s.readyState===XMLHttpRequest.DONE){if(s.status===200)n(s.responseText);else if(s.status){var o={status:s.status,statusText:s.statusText};t(i,o),r(o)}}},s.ontimeout=function(){var o=new Error("Timeout error ["+e+"]");t(i,o),r(o)},s.onerror=function(){var o=new Error("Fetch error");t(i,o),r(o)},s.open("GET",i),s.timeout=e,s.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),s.setRequestHeader("x-barba","yes"),s.send()})}var Fy=function(i){return!!i&&(typeof i=="object"||typeof i=="function")&&typeof i.then=="function"};function Vo(i,e){return e===void 0&&(e={}),function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var s=!1,o=new Promise(function(a,c){e.async=function(){return s=!0,function(u,h){u?c(u):a(h)}};var l=i.apply(e,n);s||(Fy(l)?l.then(a,c):a(l))});return o}}var Hr=new(function(i){function e(){var n;return(n=i.call(this)||this).logger=new Bs("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}Ju(e,i);var t=e.prototype;return t.init=function(){var n=this;this.registered.clear(),this.all.forEach(function(r){n[r]||(n[r]=function(s,o){n.registered.has(r)||n.registered.set(r,new Set),n.registered.get(r).add({ctx:o||{},fn:s})})})},t.do=function(n){for(var r=this,s=arguments.length,o=new Array(s>1?s-1:0),a=1;a<s;a++)o[a-1]=arguments[a];if(this.registered.has(n)){var c=Promise.resolve();return this.registered.get(n).forEach(function(l){c=c.then(function(){return Vo(l.fn,l.ctx).apply(void 0,o)})}),c.catch(function(l){r.logger.debug("Hook error ["+n+"]"),r.logger.error(l)})}return Promise.resolve()},t.clear=function(){var n=this;this.all.forEach(function(r){delete n[r]}),this.init()},t.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var n=[];this.registered.forEach(function(r,s){return n.push(s)}),this.logger.info("Registered hooks: "+n.join(","))},e}(Ay)),ev=function(){function i(e){if(this.P=[],typeof e=="boolean")this.g=e;else{var t=Array.isArray(e)?e:[e];this.P=t.map(function(n){return Z_(n)})}}return i.prototype.checkHref=function(e){if(typeof this.g=="boolean")return this.g;var t=pu(e).path;return this.P.some(function(n){return n.exec(t)!==null})},i}(),ky=function(i){function e(n){var r;return(r=i.call(this,n)||this).k=new Map,r}Ju(e,i);var t=e.prototype;return t.set=function(n,r,s){return this.k.set(n,{action:s,request:r}),{action:s,request:r}},t.get=function(n){return this.k.get(n)},t.getRequest=function(n){return this.k.get(n).request},t.getAction=function(n){return this.k.get(n).action},t.has=function(n){return!this.checkHref(n)&&this.k.has(n)},t.delete=function(n){return this.k.delete(n)},t.update=function(n,r){var s=ks({},this.k.get(n),{},r);return this.k.set(n,s),s},e}(ev),By=function(){return!window.history.pushState},zy=function(i){return!i.el||!i.href},Hy=function(i){var e=i.event;return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey},Gy=function(i){var e=i.el;return e.hasAttribute("target")&&e.target==="_blank"},Vy=function(i){var e=i.el;return e.protocol!==void 0&&window.location.protocol!==e.protocol||e.hostname!==void 0&&window.location.hostname!==e.hostname},Wy=function(i){var e=i.el;return e.port!==void 0&&vc()!==vc(e.href)},Xy=function(i){var e=i.el;return e.getAttribute&&typeof e.getAttribute("download")=="string"},qy=function(i){return i.el.hasAttribute(ji.prefix+"-"+ji.prevent)},$y=function(i){return!!i.el.closest("["+ji.prefix+"-"+ji.prevent+'="all"]')},Yy=function(i){var e=i.href;return Nf(e)===Nf()&&vc(e)===vc()},Ky=function(i){function e(n){var r;return(r=i.call(this,n)||this).suite=[],r.tests=new Map,r.init(),r}Ju(e,i);var t=e.prototype;return t.init=function(){this.add("pushState",By),this.add("exists",zy),this.add("newTab",Hy),this.add("blank",Gy),this.add("corsDomain",Vy),this.add("corsPort",Wy),this.add("download",Xy),this.add("preventSelf",qy),this.add("preventAll",$y),this.add("sameUrl",Yy,!1)},t.add=function(n,r,s){s===void 0&&(s=!0),this.tests.set(n,r),s&&this.suite.push(n)},t.run=function(n,r,s,o){return this.tests.get(n)({el:r,event:s,href:o})},t.checkLink=function(n,r,s){var o=this;return this.suite.some(function(a){return o.run(a,n,r,s)})},e}(ev),Ph=function(i){function e(t,n){var r;n===void 0&&(n="Barba error");for(var s=arguments.length,o=new Array(s>2?s-2:0),a=2;a<s;a++)o[a-2]=arguments[a];return(r=i.call.apply(i,[this].concat(o))||this).error=t,r.label=n,Error.captureStackTrace&&Error.captureStackTrace(function(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}(r),e),r.name="BarbaError",r}return Ju(e,i),e}(X_(Error)),jy=function(){function i(t){t===void 0&&(t=[]),this.logger=new Bs("@barba/core"),this.all=[],this.page=[],this.once=[],this.A=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var e=i.prototype;return e.add=function(t,n){switch(t){case"rule":this.A.splice(n.position||0,0,n.value);break;case"transition":default:this.all.push(n)}this.update()},e.resolve=function(t,n){var r=this;n===void 0&&(n={});var s=n.once?this.once:this.page;s=s.filter(n.self?function(f){return f.name&&f.name==="self"}:function(f){return!f.name||f.name!=="self"});var o=new Map,a=s.find(function(f){var d=!0,_={};return!(!n.self||f.name!=="self")||(r.A.reverse().forEach(function(m){d&&(d=r.R(f,m,t,_),f.from&&f.to&&(d=r.R(f,m,t,_,"from")&&r.R(f,m,t,_,"to")),f.from&&!f.to&&(d=r.R(f,m,t,_,"from")),!f.from&&f.to&&(d=r.R(f,m,t,_,"to")))}),o.set(f,_),d)}),c=o.get(a),l=[];if(l.push(n.once?"once":"page"),n.self&&l.push("self"),c){var u,h=[a];Object.keys(c).length>0&&h.push(c),(u=this.logger).info.apply(u,["Transition found ["+l.join(",")+"]"].concat(h))}else this.logger.info("No transition found ["+l.join(",")+"]");return a},e.update=function(){var t=this;this.all=this.all.map(function(n){return t.T(n)}).sort(function(n,r){return n.priority-r.priority}).reverse().map(function(n){return delete n.priority,n}),this.page=this.all.filter(function(n){return n.leave!==void 0||n.enter!==void 0}),this.once=this.all.filter(function(n){return n.once!==void 0})},e.R=function(t,n,r,s,o){var a=!0,c=!1,l=t,u=n.name,h=u,f=u,d=u,_=o?l[o]:l,m=o==="to"?r.next:r.current;if(o?_&&_[u]:_[u]){switch(n.type){case"strings":default:var g=Array.isArray(_[h])?_[h]:[_[h]];m[h]&&g.indexOf(m[h])!==-1&&(c=!0),g.indexOf(m[h])===-1&&(a=!1);break;case"object":var p=Array.isArray(_[f])?_[f]:[_[f]];m[f]?(m[f].name&&p.indexOf(m[f].name)!==-1&&(c=!0),p.indexOf(m[f].name)===-1&&(a=!1)):a=!1;break;case"function":_[d](r)?c=!0:a=!1}c&&(o?(s[o]=s[o]||{},s[o][u]=l[o][u]):s[u]=l[u])}return a},e.O=function(t,n,r){var s=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(s+=Math.pow(10,r),t.from&&t.from[n]&&(s+=1),t.to&&t.to[n]&&(s+=2)),s},e.T=function(t){var n=this;t.priority=0;var r=0;return this.A.forEach(function(s,o){r+=n.O(t,s.name,o+1)}),t.priority=r,t},i}(),Zy=function(){function i(t){t===void 0&&(t=[]),this.logger=new Bs("@barba/core"),this.S=!1,this.store=new jy(t)}var e=i.prototype;return e.get=function(t,n){return this.store.resolve(t,n)},e.doOnce=function(t){var n=t.data,r=t.transition;try{var s=function(){o.S=!1},o=this,a=r||{};o.S=!0;var c=Fo(function(){return Promise.resolve(o.j("beforeOnce",n,a)).then(function(){return Promise.resolve(o.once(n,a)).then(function(){return Promise.resolve(o.j("afterOnce",n,a)).then(function(){})})})},function(l){o.S=!1,o.logger.debug("Transition error [before/after/once]"),o.logger.error(l)});return Promise.resolve(c&&c.then?c.then(s):s())}catch(l){return Promise.reject(l)}},e.doPage=function(t){var n=t.data,r=t.transition,s=t.page,o=t.wrapper;try{var a=function(d){if(c)return d;l.S=!1},c=!1,l=this,u=r||{},h=u.sync===!0||!1;l.S=!0;var f=Fo(function(){function d(){return Promise.resolve(l.j("before",n,u)).then(function(){var m=!1;function g(x){return m?x:Promise.resolve(l.remove(n)).then(function(){return Promise.resolve(l.j("after",n,u)).then(function(){})})}var p=function(){if(h)return Fo(function(){return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.j("beforeLeave",n,u)).then(function(){return Promise.resolve(l.j("beforeEnter",n,u)).then(function(){return Promise.resolve(Promise.all([l.leave(n,u),l.enter(n,u)])).then(function(){return Promise.resolve(l.j("afterLeave",n,u)).then(function(){return Promise.resolve(l.j("afterEnter",n,u)).then(function(){})})})})})})},function(M){if(l.M(M))throw new Ph(M,"Transition error [sync]")});var x=function(M){return m?M:Fo(function(){var T=function(){if(v!==!1)return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.j("beforeEnter",n,u)).then(function(){return Promise.resolve(l.enter(n,u,v)).then(function(){return Promise.resolve(l.j("afterEnter",n,u)).then(function(){})})})})}();if(T&&T.then)return T.then(function(){})},function(T){if(l.M(T))throw new Ph(T,"Transition error [before/after/enter]")})},v=!1,y=Fo(function(){return Promise.resolve(l.j("beforeLeave",n,u)).then(function(){return Promise.resolve(Promise.all([l.leave(n,u),du(s,n)]).then(function(M){return M[0]})).then(function(M){return v=M,Promise.resolve(l.j("afterLeave",n,u)).then(function(){})})})},function(M){if(l.M(M))throw new Ph(M,"Transition error [before/after/leave]")});return y&&y.then?y.then(x):x(y)}();return p&&p.then?p.then(g):g(p)})}var _=function(){if(h)return Promise.resolve(du(s,n)).then(function(){})}();return _&&_.then?_.then(d):d()},function(d){throw l.S=!1,d.name&&d.name==="BarbaError"?(l.logger.debug(d.label),l.logger.error(d.error),d):(l.logger.debug("Transition error [page]"),l.logger.error(d),d)});return Promise.resolve(f&&f.then?f.then(a):a(f))}catch(d){return Promise.reject(d)}},e.once=function(t,n){try{return Promise.resolve(Hr.do("once",t,n)).then(function(){return n.once?Vo(n.once,n)(t):Promise.resolve()})}catch(r){return Promise.reject(r)}},e.leave=function(t,n){try{return Promise.resolve(Hr.do("leave",t,n)).then(function(){return n.leave?Vo(n.leave,n)(t):Promise.resolve()})}catch(r){return Promise.reject(r)}},e.enter=function(t,n,r){try{return Promise.resolve(Hr.do("enter",t,n)).then(function(){return n.enter?Vo(n.enter,n)(t,r):Promise.resolve()})}catch(s){return Promise.reject(s)}},e.add=function(t,n){try{return zs.addContainer(t.next.container,n),Hr.do("nextAdded",t),Promise.resolve()}catch(r){return Promise.reject(r)}},e.remove=function(t){try{return zs.removeContainer(t.current.container),Hr.do("currentRemoved",t),Promise.resolve()}catch(n){return Promise.reject(n)}},e.M=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},e.j=function(t,n,r){try{return Promise.resolve(Hr.do(t,n,r)).then(function(){return r[t]?Vo(r[t],r)(n):Promise.resolve()})}catch(s){return Promise.reject(s)}},Nd(i,[{key:"isRunning",get:function(){return this.S},set:function(t){this.S=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return t.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return t.to&&!t.to.route||t.sync})}}]),i}(),Jy=function(){function i(e){var t=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,e.length!==0&&(e.forEach(function(n){t.byNamespace.set(n.namespace,n)}),this.names.forEach(function(n){Hr[n](t.L(n))}))}return i.prototype.L=function(e){var t=this;return function(n){var r=e.match(/enter/i)?n.next:n.current,s=t.byNamespace.get(r.namespace);return s&&s[e]?Vo(s[e],s)(n):Promise.resolve()}},i}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(i){var e=this;do{if(e.matches(i))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var Qy={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},al=new(function(){function i(){this.version=wy,this.schemaPage=Qy,this.Logger=Bs,this.logger=new Bs("@barba/core"),this.plugins=[],this.hooks=Hr,this.dom=zs,this.helpers=Oy,this.history=j_,this.request=Ny,this.url=Uy}var e=i.prototype;return e.use=function(t,n){var r=this.plugins;r.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):typeof t.install=="function"?(t.install(this,n),r.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=t===void 0?{}:t,r=n.transitions,s=r===void 0?[]:r,o=n.views,a=o===void 0?[]:o,c=n.schema,l=c===void 0?ji:c,u=n.requestError,h=n.timeout,f=h===void 0?2e3:h,d=n.cacheIgnore,_=d!==void 0&&d,m=n.prefetchIgnore,g=m!==void 0&&m,p=n.preventRunning,x=p!==void 0&&p,v=n.prevent,y=v===void 0?null:v,M=n.debug,T=n.logLevel;if(Bs.setLevel((M!==void 0&&M)===!0?"debug":T===void 0?"off":T),this.logger.info(this.version),Object.keys(l).forEach(function(S){ji[S]&&(ji[S]=l[S])}),this.$=u,this.timeout=f,this.cacheIgnore=_,this.prefetchIgnore=g,this.preventRunning=x,this._=this.dom.getWrapper(),!this._)throw new Error("[@barba/core] No Barba wrapper found");this._.setAttribute("aria-live","polite"),this.q();var E=this.data.current;if(!E.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new ky(_),this.prevent=new Ky(g),this.transitions=new Zy(s),this.views=new Jy(a),y!==null){if(typeof y!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",y)}this.history.init(E.url.href,E.namespace),this.B=this.B.bind(this),this.U=this.U.bind(this),this.D=this.D.bind(this),this.F(),this.plugins.forEach(function(S){return S.init()});var C=this.data;C.trigger="barba",C.next=C.current,C.current=ks({},this.schemaPage),this.hooks.do("ready",C),this.once(C),this.q()},e.destroy=function(){this.q(),this.H(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,r){var s;if(n===void 0&&(n="barba"),this.transitions.isRunning)this.force(t);else if(!(s=n==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(t,n,r),r&&(r.stopPropagation(),r.preventDefault()),this.page(t,n,s)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then(function(){function r(){return Promise.resolve(n.hooks.do("afterEnter",t)).then(function(){})}var s=function(){if(n.transitions.hasOnce){var o=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:o,data:t})).then(function(){})}}();return s&&s.then?s.then(r):r()})}catch(r){return Promise.reject(r)}},e.page=function(t,n,r){try{var s=function(){var l=o.data;return Promise.resolve(o.hooks.do("page",l)).then(function(){var u=Fo(function(){var h=o.transitions.get(l,{once:!1,self:r});return Promise.resolve(o.transitions.doPage({data:l,page:a,transition:h,wrapper:o._})).then(function(){o.q()})},function(){Bs.getLevel()===0&&o.force(l.current.url.href)});if(u&&u.then)return u.then(function(){})})},o=this;o.data.next.url=ks({href:t},o.url.parse(t)),o.data.trigger=n;var a=o.cache.has(t)?o.cache.update(t,{action:"click"}).request:o.cache.set(t,o.request(t,o.timeout,o.onRequestError.bind(o,n)),"click").request,c=function(){if(o.transitions.shouldWait)return Promise.resolve(du(a,o.data)).then(function(){})}();return Promise.resolve(c&&c.then?c.then(s):s())}catch(l){return Promise.reject(l)}},e.onRequestError=function(t){this.transitions.isRunning=!1;for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];var o=r[0],a=r[1],c=this.cache.getAction(o);return this.cache.delete(o),!(this.$&&this.$(t,c,o,a)===!1||(c==="click"&&this.force(o),1))},e.prefetch=function(t){var n=this;this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba")).catch(function(r){n.logger.error(r)}),"prefetch")},e.F=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.B),document.addEventListener("touchstart",this.B)),document.addEventListener("click",this.U),window.addEventListener("popstate",this.D)},e.H=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.B),document.removeEventListener("touchstart",this.B)),document.removeEventListener("click",this.U),window.removeEventListener("popstate",this.D)},e.B=function(t){var n=this,r=this.I(t);if(r){var s=this.dom.getHref(r);this.prevent.checkHref(s)||this.cache.has(s)||this.cache.set(s,this.request(s,this.timeout,this.onRequestError.bind(this,r)).catch(function(o){n.logger.error(o)}),"enter")}},e.U=function(t){var n=this.I(t);if(n)return this.transitions.isRunning&&this.preventRunning?(t.preventDefault(),void t.stopPropagation()):void this.go(this.dom.getHref(n),n,t)},e.D=function(t){this.go(this.url.getHref(),"popstate",t)},e.I=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.q=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:ks({href:t},this.url.parse(t))};this.C={current:n,next:ks({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},Nd(i,[{key:"data",get:function(){return this.C}},{key:"wrapper",get:function(){return this._}}]),i}());let eS=class{constructor(){ie(this,"breakPoint",768);ie(this,"mobileMediaQuery",`(max-width: ${this.breakPoint}px)`);ie(this,"desktopMediaQuery",`(min-width: ${this.breakPoint+1}px)`);ie(this,"mobileMql",window.matchMedia(this.mobileMediaQuery));ie(this,"hoverableMql",window.matchMedia("(hover: hover) and (pointer: fine)"))}get isSp(){return this.mobileMql.matches}get isPc(){return!this.mobileMql.matches}get isTouch(){return!this.hoverableMql.matches}get isSpTouch(){return this.isSp&&this.isTouch}};const at=new eS;class tS{constructor(){ie(this,"siteMaps",document.querySelectorAll(".site-map"));this.addEvents()}addEvents(){this.siteMaps.forEach(e=>{e.querySelectorAll(".site-map__item").forEach(t=>{if(at.isSp){const n=t.querySelector(".site-map-page-heading.sp");n==null||n.addEventListener("click",()=>{var r;n.classList.toggle("open"),(r=t.querySelector(".site-map__toggle-menu"))==null||r.classList.toggle("open")})}})})}}new tS;function dr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function tv(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var oi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},la={duration:.5,overwrite:!1,delay:0},Hd,mn,Nt,vi=1e8,Mt=1/vi,Ff=Math.PI*2,nS=Ff/4,iS=0,nv=Math.sqrt,rS=Math.cos,sS=Math.sin,nn=function(e){return typeof e=="string"},Ft=function(e){return typeof e=="function"},Ar=function(e){return typeof e=="number"},Gd=function(e){return typeof e>"u"},tr=function(e){return typeof e=="object"},kn=function(e){return e!==!1},Vd=function(){return typeof window<"u"},cl=function(e){return Ft(e)||nn(e)},iv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gn=Array.isArray,kf=/(?:-?\.?\d|\.)+/gi,rv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Wo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Lh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sv=/[+-]=-?[.\d]+/,ov=/[^,'"\[\]\s]+/gi,oS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,It,hi,Bf,Wd,ci={},mu={},av,cv=function(e){return(mu=so(e,ci))&&Vn},Xd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},gu=function(e,t){return!t&&console.warn(e)},lv=function(e,t){return e&&(ci[e]=t)&&mu&&(mu[e]=t)||ci},xc=function(){return 0},aS={suppressEvents:!0,isStart:!0,kill:!1},jl={suppressEvents:!0,kill:!1},cS={suppressEvents:!0},qd={},es=[],zf={},uv,ni={},Dh={},jp=30,Zl=[],$d="",Yd=function(e){var t=e[0],n,r;if(tr(t)||Ft(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Zl.length;r--&&!Zl[r].targetTest(t););n=Zl[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Ov(e[r],n)))||e.splice(r,1);return e},Ws=function(e){return e._gsap||Yd(xi(e))[0]._gsap},hv=function(e,t,n){return(n=e[t])&&Ft(n)?e[t]():Gd(n)&&e.getAttribute&&e.getAttribute(t)||n},Bn=function(e,t){return(e=e.split(",")).forEach(t)||e},kt=function(e){return Math.round(e*1e5)/1e5||0},on=function(e){return Math.round(e*1e7)/1e7||0},Zo=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},lS=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},_u=function(){var e=es.length,t=es.slice(0),n,r;for(zf={},es.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},fv=function(e,t,n,r){es.length&&!mn&&_u(),e.render(t,n,r||mn&&t<0&&(e._initted||e._startAt)),es.length&&!mn&&_u()},dv=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ov).length<2?t:nn(e)?e.trim():e},pv=function(e){return e},bi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},uS=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},so=function(e,t){for(var n in t)e[n]=t[n];return e},Zp=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=tr(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},vu=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},ja=function(e){var t=e.parent||It,n=e.keyframes?uS(gn(e.keyframes)):bi;if(kn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},hS=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},mv=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Qu=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},as=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Xs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},fS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Hf=function(e,t,n,r){return e._startAt&&(mn?e._startAt.revert(jl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},dS=function i(e){return!e||e._ts&&i(e.parent)},Jp=function(e){return e._repeat?ua(e._tTime,e=e.duration()+e._rDelay)*e:0},ua=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},xu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},eh=function(e){return e._end=on(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},th=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=on(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),eh(e),n._dirty||Xs(n,e)),e},gv=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=xu(e.rawTime(),t),(!t._dur||Wc(0,t.totalDuration(),n)-t._tTime>Mt)&&t.render(n,!0)),Xs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Mt}},Wi=function(e,t,n,r){return t.parent&&as(t),t._start=on((Ar(n)?n:n||e!==It?ui(e,n,t):e._time)+t._delay),t._end=on(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),mv(e,t,"_first","_last",e._sort?"_start":0),Gf(t)||(e._recent=t),r||gv(e,t),e._ts<0&&th(e,e._tTime),e},_v=function(e,t){return(ci.ScrollTrigger||Xd("scrollTrigger",t))&&ci.ScrollTrigger.create(t,e)},vv=function(e,t,n,r,s){if(jd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!mn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&uv!==ri.frame)return es.push(e),e._lazy=[s,r],1},pS=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Gf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},mS=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&pS(e)&&!(!e._initted&&Gf(e))||(e._ts<0||e._dp._ts<0)&&!Gf(e))?0:1,a=e._rDelay,c=0,l,u,h;if(a&&e._repeat&&(c=Wc(0,e._tDur,t),u=ua(c,a),e._yoyo&&u&1&&(o=1-o),u!==ua(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||mn||r||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&vv(e,t,r,n,c))return;for(h=e._zTime,e._zTime=t||(n?Mt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,l=e._pt;l;)l.r(o,l.d),l=l._next;t<0&&Hf(e,t,n,!0),e._onUpdate&&!n&&yi(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&yi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&as(e,1),!n&&!mn&&(yi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},gS=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ha=function(e,t,n,r){var s=e._repeat,o=on(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:on(o*(s+1)+e._rDelay*s):o,a>0&&!r&&th(e,e._tTime=e._tDur*a),e.parent&&eh(e),n||Xs(e.parent,e),e},Qp=function(e){return e instanceof Nn?Xs(e):ha(e,e._dur)},_S={_start:0,endTime:xc,totalDuration:xc},ui=function i(e,t,n){var r=e.labels,s=e._recent||_S,o=e.duration()>=vi?s.endTime(!1):e._dur,a,c,l;return nn(t)&&(isNaN(t)||t in r)?(c=t.charAt(0),l=t.substr(-1)==="%",a=t.indexOf("="),c==="<"||c===">"?(a>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(c=parseFloat(t.charAt(a-1)+t.substr(a+1)),l&&n&&(c=c/100*(gn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+c:o+c)):t==null?o:+t},Za=function(e,t,n){var r=Ar(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,c;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=kn(c.vars.inherit)&&c.parent;o.immediateRender=kn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Wt(t[0],o,t[s+1])},gs=function(e,t){return e||e===0?t(e):t},Wc=function(e,t,n){return n<e?e:n>t?t:n},dn=function(e,t){return!nn(e)||!(t=oS.exec(e))?"":t[1]},vS=function(e,t,n){return gs(n,function(r){return Wc(e,t,r)})},Vf=[].slice,xv=function(e,t){return e&&tr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&tr(e[0]))&&!e.nodeType&&e!==hi},xS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return nn(r)&&!t||xv(r,1)?(s=n).push.apply(s,xi(r)):n.push(r)})||n},xi=function(e,t,n){return Nt&&!t&&Nt.selector?Nt.selector(e):nn(e)&&!n&&(Bf||!fa())?Vf.call((t||Wd).querySelectorAll(e),0):gn(e)?xS(e,n):xv(e)?Vf.call(e,0):e?[e]:[]},Wf=function(e){return e=xi(e)[0]||gu("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return xi(t,n.querySelectorAll?n:n===e?gu("Invalid scope")||Wd.createElement("div"):e)}},yv=function(e){return e.sort(function(){return .5-Math.random()})},Sv=function(e){if(Ft(e))return e;var t=tr(e)?e:{each:e},n=qs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,c=isNaN(r)||a,l=t.axis,u=r,h=r;return nn(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&c&&(u=r[0],h=r[1]),function(f,d,_){var m=(_||t).length,g=o[m],p,x,v,y,M,T,E,C,S;if(!g){if(S=t.grid==="auto"?0:(t.grid||[1,vi])[1],!S){for(E=-vi;E<(E=_[S++].getBoundingClientRect().left)&&S<m;);S--}for(g=o[m]=[],p=c?Math.min(S,m)*u-.5:r%S,x=S===vi?0:c?m*h/S-.5:r/S|0,E=0,C=vi,T=0;T<m;T++)v=T%S-p,y=x-(T/S|0),g[T]=M=l?Math.abs(l==="y"?y:v):nv(v*v+y*y),M>E&&(E=M),M<C&&(C=M);r==="random"&&yv(g),g.max=E-C,g.min=C,g.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(S>m?m-1:l?l==="y"?m/S:S:Math.max(S,m/S))||0)*(r==="edges"?-1:1),g.b=m<0?s-m:s,g.u=dn(t.amount||t.each)||0,n=n&&m<0?Lv(n):n}return m=(g[f]-g.min)/g.max||0,on(g.b+(n?n(m):m)*g.v)+g.u}},Xf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=on(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Ar(n)?0:dn(n))}},Ev=function(e,t){var n=gn(e),r,s;return!n&&tr(e)&&(r=n=e.radius||vi,e.values?(e=xi(e.values),(s=!Ar(e[0]))&&(r*=r)):e=Xf(e.increment)),gs(t,n?Ft(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),c=parseFloat(s?o.y:0),l=vi,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-c,f=f*f+d*d):f=Math.abs(e[h]-a),f<l&&(l=f,u=h);return u=!r||l<=r?e[u]:o,s||u===o||Ar(o)?u:u+dn(o)}:Xf(e))},Mv=function(e,t,n,r){return gs(gn(e)?!t:n===!0?!!(n=0):!r,function(){return gn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},yS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},SS=function(e,t){return function(n){return e(parseFloat(n))+(t||dn(n))}},ES=function(e,t,n){return Tv(e,t,0,1,n)},bv=function(e,t,n){return gs(n,function(r){return e[~~t(r)]})},MS=function i(e,t,n){var r=t-e;return gn(e)?bv(e,i(0,e.length),t):gs(n,function(s){return(r+(s-e)%r)%r+e})},bS=function i(e,t,n){var r=t-e,s=r*2;return gn(e)?bv(e,i(0,e.length-1),t):gs(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},yc=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?ov:kf),n+=e.substr(t,r-t)+Mv(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Tv=function(e,t,n,r,s){var o=t-e,a=r-n;return gs(s,function(c){return n+((c-e)/o*a||0)})},TS=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=nn(e),a={},c,l,u,h,f;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(gn(e)&&!gn(t)){for(u=[],h=e.length,f=h-2,l=1;l<h;l++)u.push(i(e[l-1],e[l]));h--,s=function(_){_*=h;var m=Math.min(f,~~_);return u[m](_-m)},n=t}else r||(e=so(gn(e)?[]:{},e));if(!u){for(c in t)Kd.call(a,e,c,"get",t[c]);s=function(_){return Qd(_,a)||(o?e.p:e)}}}return gs(n,s)},em=function(e,t,n){var r=e.labels,s=vi,o,a,c;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(c=o,s=a);return c},yi=function(e,t,n){var r=e.vars,s=r[t],o=Nt,a=e._ctx,c,l,u;if(s)return c=r[t+"Params"],l=r.callbackScope||e,n&&es.length&&_u(),a&&(Nt=a),u=c?s.apply(l,c):s.call(l),Nt=o,u},Ha=function(e){return as(e),e.scrollTrigger&&e.scrollTrigger.kill(!!mn),e.progress()<1&&yi(e,"onInterrupt"),e},Xo,wv=[],Av=function(e){if(Vd()&&e){e=!e.name&&e.default||e;var t=e.name,n=Ft(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:xc,render:Qd,add:Kd,kill:HS,modifier:zS,rawVars:0},o={targetTest:0,get:0,getSetter:Jd,aliases:{},register:0};if(fa(),e!==r){if(ni[t])return;bi(r,bi(vu(e,s),o)),so(r.prototype,so(s,vu(e,o))),ni[r.prop=t]=r,e.targetTest&&(Zl.push(r),qd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}lv(t,r),e.register&&e.register(Vn,r,zn)}else e&&wv.push(e)},Et=255,Ga={aqua:[0,Et,Et],lime:[0,Et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Et],navy:[0,0,128],white:[Et,Et,Et],olive:[128,128,0],yellow:[Et,Et,0],orange:[Et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Et,0,0],pink:[Et,192,203],cyan:[0,Et,Et],transparent:[Et,Et,Et,0]},Ih=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Et+.5|0},Rv=function(e,t,n){var r=e?Ar(e)?[e>>16,e>>8&Et,e&Et]:0:Ga.black,s,o,a,c,l,u,h,f,d,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ga[e])r=Ga[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Et,r&Et,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Et,e&Et]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(kf),!t)c=+r[0]%360/360,l=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(l+1):u+l-u*l,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Ih(c+1/3,s,o),r[1]=Ih(c,s,o),r[2]=Ih(c-1/3,s,o);else if(~e.indexOf("="))return r=e.match(rv),n&&r.length<4&&(r[3]=1),r}else r=e.match(kf)||Ga.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/Et,o=r[1]/Et,a=r[2]/Et,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?c=l=0:(d=h-f,l=u>.5?d/(2-h-f):d/(h+f),c=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,c*=60),r[0]=~~(c+.5),r[1]=~~(l*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Cv=function(e){var t=[],n=[],r=-1;return e.split(ts).forEach(function(s){var o=s.match(Wo)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},tm=function(e,t,n){var r="",s=(e+r).match(ts),o=t?"hsla(":"rgba(",a=0,c,l,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Rv(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Cv(e),c=n.c,c.join(r)!==u.c.join(r)))for(l=e.replace(ts,"1").split(Wo),h=l.length-1;a<h;a++)r+=l[a]+(~c.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!l)for(l=e.split(ts),h=l.length-1;a<h;a++)r+=l[a]+s[a];return r+l[h]},ts=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ga)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),wS=/hsl[a]?\(/,Pv=function(e){var t=e.join(" "),n;if(ts.lastIndex=0,ts.test(t))return n=wS.test(t),e[1]=tm(e[1],n),e[0]=tm(e[0],n,Cv(e[1])),!0},Sc,ri=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],c,l,u,h,f,d,_=function m(g){var p=i()-r,x=g===!0,v,y,M,T;if(p>e&&(n+=p-t),r+=p,M=r-n,v=M-o,(v>0||x)&&(T=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,o+=v+(v>=s?4:s-v),y=1),x||(c=l(m)),y)for(d=0;d<a.length;d++)a[d](M,f,T,g)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){av&&(!Bf&&Vd()&&(hi=Bf=window,Wd=hi.document||{},ci.gsap=Vn,(hi.gsapVersions||(hi.gsapVersions=[])).push(Vn.version),cv(mu||hi.GreenSockGlobals||!hi.gsap&&hi||{}),u=hi.requestAnimationFrame,wv.forEach(Av)),c&&h.sleep(),l=u||function(g){return setTimeout(g,o-h.time*1e3+1|0)},Sc=1,_(2))},sleep:function(){(u?hi.cancelAnimationFrame:clearTimeout)(c),Sc=0,l=xc},lagSmoothing:function(g,p){e=g||1/0,t=Math.min(p||33,e)},fps:function(g){s=1e3/(g||240),o=h.time*1e3+s},add:function(g,p,x){var v=p?function(y,M,T,E){g(y,M,T,E),h.remove(v)}:g;return h.remove(g),a[x?"unshift":"push"](v),fa(),v},remove:function(g,p){~(p=a.indexOf(g))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h}(),fa=function(){return!Sc&&ri.wake()},ft={},AS=/^[\d.\-M][\d.\-,\s]/,RS=/["']/g,CS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,c,l;s<o;s++)c=n[s],a=s!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),t[r]=isNaN(l)?l.replace(RS,"").trim():+l,r=c.substr(a+1).trim();return t},PS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},LS=function(e){var t=(e+"").split("("),n=ft[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[CS(t[1])]:PS(e).split(",").map(dv)):ft._CE&&AS.test(e)?ft._CE("",e):n},Lv=function(e){return function(t){return 1-e(1-t)}},Dv=function i(e,t){for(var n=e._first,r;n;)n instanceof Nn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},qs=function(e,t){return e&&(Ft(e)?e:ft[e]||LS(e))||t},po=function(e,t,n,r){n===void 0&&(n=function(c){return 1-t(1-c)}),r===void 0&&(r=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return Bn(e,function(a){ft[a]=ci[a]=s,ft[o=a.toLowerCase()]=n;for(var c in s)ft[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=ft[a+"."+c]=s[c]}),s},Iv=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Oh=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Ff*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*sS((u-o)*s)+1},c=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:Iv(a);return s=Ff/s,c.config=function(l,u){return i(e,l,u)},c},Uh=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Iv(n);return r.config=function(s){return i(e,s)},r};Bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;po(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;po("Elastic",Oh("in"),Oh("out"),Oh());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};po("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);po("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});po("Circ",function(i){return-(nv(1-i*i)-1)});po("Sine",function(i){return i===1?1:-rS(i*nS)+1});po("Back",Uh("in"),Uh("out"),Uh());ft.SteppedEase=ft.steps=ci.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-Mt;return function(a){return((r*Wc(0,o,a)|0)+s)*n}}};la.ease=ft["quad.out"];Bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return $d+=i+","+i+"Params,"});var Ov=function(e,t){this.id=iS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:hv,this.set=t?t.getSetter:Jd},Ec=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ha(this,+t.duration,1,1),this.data=t.data,Nt&&(this._ctx=Nt,Nt.data.push(this)),Sc||ri.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ha(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(fa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(th(this,n),!s._dp||s.parent||gv(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Wi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Mt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),fv(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Jp(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Jp(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?ua(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?xu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Mt?0:this._rts,this.totalTime(Wc(-Math.abs(this._delay),this._tDur,r),!0),eh(this),fS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(fa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Mt&&(this._tTime-=Mt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Wi(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(kn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xu(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=cS);var r=mn;return mn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),mn=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Qp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Qp(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(ui(this,n),kn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,kn(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Mt)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=Ft(n)?n:pv,a=function(){var l=r.then;r.then=null,Ft(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=l),s(o),r.then=l};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Ha(this)},i}();bi(Ec.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var Nn=function(i){tv(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=kn(n.sortChildren),It&&Wi(n.parent||It,dr(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&_v(dr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Za(0,arguments,this),this},t.from=function(r,s,o){return Za(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Za(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,ja(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Wt(r,s,ui(this,o),1),this},t.call=function(r,s,o){return Wi(this,Wt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,c,l,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=u,o.parent=this,new Wt(r,o,ui(this,c)),this},t.staggerFrom=function(r,s,o,a,c,l,u){return o.runBackwards=1,ja(o).immediateRender=kn(o.immediateRender),this.staggerTo(r,s,o,a,c,l,u)},t.staggerFromTo=function(r,s,o,a,c,l,u,h){return a.startAt=o,ja(a).immediateRender=kn(a.immediateRender),this.staggerTo(r,s,a,c,l,u,h)},t.render=function(r,s,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=r<=0?0:on(r),h=this._zTime<0!=r<0&&(this._initted||!l),f,d,_,m,g,p,x,v,y,M,T,E;if(this!==It&&u>c&&r>=0&&(u=c),u!==this._tTime||o||h){if(a!==this._time&&l&&(u+=this._time-a,r+=this._time-a),f=u,y=this._start,v=this._ts,p=!v,h&&(l||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,g=l+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,o);if(f=on(u%g),u===c?(m=this._repeat,f=l):(m=~~(u/g),m&&m===u/g&&(f=l,m--),f>l&&(f=l)),M=ua(this._tTime,g),!a&&this._tTime&&M!==m&&this._tTime-M*g-this._dur<=0&&(M=m),T&&m&1&&(f=l-f,E=1),m!==M&&!this._lock){var C=T&&M&1,S=C===(T&&m&1);if(m<M&&(C=!C),a=C?0:u%l?l:u,this._lock=1,this.render(a||(E?0:on(m*g)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&yi(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,S&&(this._lock=2,a=C?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Dv(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=gS(this,on(a),on(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&!m&&(yi(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){x=0,_&&(u+=this._zTime=-Mt);break}}d=_}else{d=this._last;for(var b=r<0?r:f;d;){if(_=d._prev,(d._act||b<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,s,o||mn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){x=0,_&&(u+=this._zTime=b?-Mt:Mt);break}}d=_}}if(x&&!s&&(this.pause(),x.render(f>=a?0:-Mt)._zTime=f>=a?1:-1,this._ts))return this._start=y,eh(this),this.render(r,s,o);this._onUpdate&&!s&&yi(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&as(this,1),!s&&!(r<0&&!a)&&(u||a||!c)&&(yi(this,u===c&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Ar(s)||(s=ui(this,s,r)),!(r instanceof Ec)){if(gn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(nn(r))return this.addLabel(r,s);if(Ft(r))r=Wt.delayedCall(0,r);else return this}return this!==r?Wi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-vi);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof Wt?s&&c.push(l):(o&&c.push(l),r&&c.push.apply(c,l.getChildren(!0,s,o)))),l=l._next;return c},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return nn(r)?this.removeLabel(r):Ft(r)?this.killTweensOf(r):(Qu(this,r),r===this._recent&&(this._recent=this._last),Xs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=on(ri.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=ui(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Wt.delayedCall(0,s||xc,o);return a.data="isPause",this._hasPause=1,Wi(this,a,ui(this,r))},t.removePause=function(r){var s=this._first;for(r=ui(this,r);s;)s._start===r&&s.data==="isPause"&&as(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),c=a.length;c--;)Wr!==a[c]&&a[c].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=xi(r),c=this._first,l=Ar(s),u;c;)c instanceof Wt?lS(c._targets,a)&&(l?(!Wr||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&o.push(c):(u=c.getTweensOf(a,s)).length&&o.push.apply(o,u),c=c._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=ui(o,r),c=s,l=c.startAt,u=c.onStart,h=c.onStartParams,f=c.immediateRender,d,_=Wt.to(o,bi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||Mt,onStart:function(){if(o.pause(),!d){var g=s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());_._dur!==g&&ha(_,g,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,bi({startAt:{time:ui(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),em(this,ui(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),em(this,ui(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(l in c)c[l]>=o&&(c[l]+=r);return Xs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Xs(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,c=vi,l,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,Wi(o,a,u-a._delay,1)._lock=0):c=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),a._end>s&&a._ts&&(s=a._end),a=l;ha(o,o===It&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(It._ts&&(fv(It,xu(r,It)),uv=ri.frame),ri.frame>=jp){jp+=oi.autoSleep||120;var s=It._first;if((!s||!s._ts)&&oi.autoSleep&&ri._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ri.sleep()}}},e}(Ec);bi(Nn.prototype,{_lock:0,_hasPause:0,_forcing:0});var DS=function(e,t,n,r,s,o,a){var c=new zn(this._pt,e,t,0,1,zv,null,s),l=0,u=0,h,f,d,_,m,g,p,x;for(c.b=n,c.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=yc(r)),o&&(x=[n,r],o(x,e,t),n=x[0],r=x[1]),f=n.match(Lh)||[];h=Lh.exec(r);)_=h[0],m=r.substring(l,h.index),d?d=(d+1)%5:m.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(g=parseFloat(f[u-1])||0,c._pt={_next:c._pt,p:m||u===1?m:",",s:g,c:_.charAt(1)==="="?Zo(g,_)-g:parseFloat(_)-g,m:d&&d<4?Math.round:0},l=Lh.lastIndex);return c.c=l<r.length?r.substring(l,r.length):"",c.fp=a,(sv.test(r)||p)&&(c.e=0),this._pt=c,c},Kd=function(e,t,n,r,s,o,a,c,l,u){Ft(r)&&(r=r(s||0,e,o));var h=e[t],f=n!=="get"?n:Ft(h)?l?e[t.indexOf("set")||!Ft(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,d=Ft(h)?l?FS:kv:Zd,_;if(nn(r)&&(~r.indexOf("random(")&&(r=yc(r)),r.charAt(1)==="="&&(_=Zo(f,r)+(dn(f)||0),(_||_===0)&&(r=_))),!u||f!==r||qf)return!isNaN(f*r)&&r!==""?(_=new zn(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?BS:Bv,0,d),l&&(_.fp=l),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&Xd(t,r),DS.call(this,e,t,f,r,d,c||oi.stringFilter,l))},IS=function(e,t,n,r,s){if(Ft(e)&&(e=Ja(e,s,t,n,r)),!tr(e)||e.style&&e.nodeType||gn(e)||iv(e))return nn(e)?Ja(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=Ja(e[a],s,t,n,r);return o},Uv=function(e,t,n,r,s,o){var a,c,l,u;if(ni[e]&&(a=new ni[e]).init(s,a.rawVars?t[e]:IS(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=c=new zn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Xo))for(l=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)l[a._props[u]]=c;return a},Wr,qf,jd=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,c=r.lazy,l=r.onUpdate,u=r.onUpdateParams,h=r.callbackScope,f=r.runBackwards,d=r.yoyoEase,_=r.keyframes,m=r.autoRevert,g=e._dur,p=e._startAt,x=e._targets,v=e.parent,y=v&&v.data==="nested"?v.vars.targets:x,M=e._overwrite==="auto"&&!Hd,T=e.timeline,E,C,S,b,D,I,F,P,U,V,k,G,z;if(T&&(!_||!s)&&(s="none"),e._ease=qs(s,la.ease),e._yEase=d?Lv(qs(d===!0?s:d,la.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!T&&!!r.runBackwards,!T||_&&!r.stagger){if(P=x[0]?Ws(x[0]).harness:0,G=P&&r[P.prop],E=vu(r,qd),p&&(p._zTime<0&&p.progress(1),t<0&&f&&a&&!m?p.render(-1,!0):p.revert(f&&g?jl:aS),p._lazy=0),o){if(as(e._startAt=Wt.set(x,bi({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!p&&kn(c),startAt:null,delay:0,onUpdate:l,onUpdateParams:u,callbackScope:h,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mn||!a&&!m)&&e._startAt.revert(jl),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&g&&!p){if(t&&(a=!1),S=bi({overwrite:!1,data:"isFromStart",lazy:a&&!p&&kn(c),immediateRender:a,stagger:0,parent:v},E),G&&(S[P.prop]=G),as(e._startAt=Wt.set(x,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mn?e._startAt.revert(jl):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&kn(c)||c&&!g,C=0;C<x.length;C++){if(D=x[C],F=D._gsap||Yd(x)[C]._gsap,e._ptLookup[C]=V={},zf[F.id]&&es.length&&_u(),k=y===x?C:y.indexOf(D),P&&(U=new P).init(D,G||E,e,k,y)!==!1&&(e._pt=b=new zn(e._pt,D,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(w){V[w]=b}),U.priority&&(I=1)),!P||G)for(S in E)ni[S]&&(U=Uv(S,E,e,k,D,y))?U.priority&&(I=1):V[S]=b=Kd.call(e,D,S,"get",E[S],k,y,0,r.stringFilter);e._op&&e._op[C]&&e.kill(D,e._op[C]),M&&e._pt&&(Wr=e,It.killTweensOf(D,V,e.globalTime(t)),z=!e.parent,Wr=0),e._pt&&c&&(zf[F.id]=1)}I&&Hv(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!z,_&&t<=0&&T.render(vi,!0,!0)},OS=function(e,t,n,r,s,o,a){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(l=h[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return qf=1,e.vars[t]="+=0",jd(e,a),qf=0,1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!s?r:l.s+(r||0)+o*l.c,l.c=n-l.s,u.e&&(u.e=kt(n)+dn(u.e)),u.b&&(u.b=l.s+dn(u.b))},US=function(e,t){var n=e[0]?Ws(e[0]).harness:0,r=n&&n.aliases,s,o,a,c;if(!r)return t;s=so({},t);for(o in r)if(o in s)for(c=r[o].split(","),a=c.length;a--;)s[c[a]]=s[o];return s},NS=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(gn(t))a=n[e]||(n[e]=[]),t.forEach(function(c,l){return a.push({t:l/(t.length-1)*100,v:c,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ja=function(e,t,n,r,s){return Ft(e)?e.call(t,n,r,s):nn(e)&&~e.indexOf("random(")?yc(e):e},Nv=$d+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Fv={};Bn(Nv+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Fv[i]=1});var Wt=function(i){tv(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:ja(r))||this;var c=a.vars,l=c.duration,u=c.delay,h=c.immediateRender,f=c.stagger,d=c.overwrite,_=c.keyframes,m=c.defaults,g=c.scrollTrigger,p=c.yoyoEase,x=r.parent||It,v=(gn(n)||iv(n)?Ar(n[0]):"length"in r)?[n]:xi(n),y,M,T,E,C,S,b,D;if(a._targets=v.length?Yd(v):gu("GSAP target "+n+" not found. https://greensock.com",!oi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||cl(l)||cl(u)){if(r=a.vars,y=a.timeline=new Nn({data:"nested",defaults:m||{},targets:x&&x.data==="nested"?x.vars.targets:v}),y.kill(),y.parent=y._dp=dr(a),y._start=0,f||cl(l)||cl(u)){if(E=v.length,b=f&&Sv(f),tr(f))for(C in f)~Nv.indexOf(C)&&(D||(D={}),D[C]=f[C]);for(M=0;M<E;M++)T=vu(r,Fv),T.stagger=0,p&&(T.yoyoEase=p),D&&so(T,D),S=v[M],T.duration=+Ja(l,dr(a),M,S,v),T.delay=(+Ja(u,dr(a),M,S,v)||0)-a._delay,!f&&E===1&&T.delay&&(a._delay=u=T.delay,a._start+=u,T.delay=0),y.to(S,T,b?b(M,S,v):0),y._ease=ft.none;y.duration()?l=u=0:a.timeline=0}else if(_){ja(bi(y.vars.defaults,{ease:"none"})),y._ease=qs(_.ease||r.ease||"none");var I=0,F,P,U;if(gn(_))_.forEach(function(V){return y.to(v,V,">")}),y.duration();else{T={};for(C in _)C==="ease"||C==="easeEach"||NS(C,_[C],T,_.easeEach);for(C in T)for(F=T[C].sort(function(V,k){return V.t-k.t}),I=0,M=0;M<F.length;M++)P=F[M],U={ease:P.e,duration:(P.t-(M?F[M-1].t:0))/100*l},U[C]=P.v,y.to(v,U,I),I+=U.duration;y.duration()<l&&y.to({},{duration:l-y.duration()})}}l||a.duration(l=y.duration())}else a.timeline=0;return d===!0&&!Hd&&(Wr=dr(a),It.killTweensOf(v),Wr=0),Wi(x,dr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!l&&!_&&a._start===on(x._time)&&kn(h)&&dS(dr(a))&&x.data!=="nested")&&(a._tTime=-Mt,a.render(Math.max(0,-u)||0)),g&&_v(dr(a),g),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,c=this._tDur,l=this._dur,u=r<0,h=r>c-Mt&&!u?c:r<Mt?0:r,f,d,_,m,g,p,x,v,y;if(!l)mS(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(m=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+r,s,o);if(f=on(h%m),h===c?(_=this._repeat,f=l):(_=~~(h/m),_&&_===h/m&&(f=l,_--),f>l&&(f=l)),p=this._yoyo&&_&1,p&&(y=this._yEase,f=l-f),g=ua(this._tTime,m),f===a&&!o&&this._initted)return this._tTime=h,this;_!==g&&(v&&this._yEase&&Dv(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=o=1,this.render(on(m*_),!0).invalidate()._lock=0))}if(!this._initted){if(vv(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time)return this;if(l!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(f/l),this._from&&(this.ratio=x=1-x),f&&!a&&!s&&!_&&(yi(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;v&&v.render(r<0?r:!f&&p?-Mt:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Hf(this,r,s,o),yi(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&yi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Hf(this,r,!0,!0),(r||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&as(this,1),!s&&!(u&&!a)&&(h||a||p)&&(yi(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a){Sc||ri.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||jd(this,c),l=this._ease(c/this._dur),OS(this,r,s,o,a,l,c)?this.resetTo(r,s,o,a):(th(this,0),this.parent||mv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ha(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Wr&&Wr.vars.overwrite!==!0)._first||Ha(this),this.parent&&o!==this.timeline.totalDuration()&&ha(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=r?xi(r):a,l=this._ptLookup,u=this._pt,h,f,d,_,m,g,p;if((!s||s==="all")&&hS(a,c))return s==="all"&&(this._pt=0),Ha(this);for(h=this._op=this._op||[],s!=="all"&&(nn(s)&&(m={},Bn(s,function(x){return m[x]=1}),s=m),s=US(a,s)),p=a.length;p--;)if(~c.indexOf(a[p])){f=l[p],s==="all"?(h[p]=s,_=f,d={}):(d=h[p]=h[p]||{},_=s);for(m in _)g=f&&f[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&Qu(this,g,"_pt"),delete f[m]),d!=="all"&&(d[m]=1)}return this._initted&&!this._pt&&u&&Ha(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Za(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Za(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return It.killTweensOf(r,s,o)},e}(Ec);bi(Wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Bn("staggerTo,staggerFrom,staggerFromTo",function(i){Wt[i]=function(){var e=new Nn,t=Vf.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Zd=function(e,t,n){return e[t]=n},kv=function(e,t,n){return e[t](n)},FS=function(e,t,n,r){return e[t](r.fp,n)},kS=function(e,t,n){return e.setAttribute(t,n)},Jd=function(e,t){return Ft(e[t])?kv:Gd(e[t])&&e.setAttribute?kS:Zd},Bv=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},BS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},zv=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Qd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},zS=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},HS=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Qu(this,t,"_pt"):t.dep||(n=1),t=r;return!n},GS=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Hv=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},zn=function(){function i(t,n,r,s,o,a,c,l,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||Bv,this.d=c||this,this.set=l||Zd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=GS,this.m=n,this.mt=s,this.tween=r},i}();Bn($d+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return qd[i]=1});ci.TweenMax=ci.TweenLite=Wt;ci.TimelineLite=ci.TimelineMax=Nn;It=new Nn({sortChildren:!1,defaults:la,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});oi.stringFilter=Pv;var $s=[],Jl={},VS=[],nm=0,WS=0,Nh=function(e){return(Jl[e]||VS).map(function(t){return t()})},$f=function(){var e=Date.now(),t=[];e-nm>2&&(Nh("matchMediaInit"),$s.forEach(function(n){var r=n.queries,s=n.conditions,o,a,c,l;for(a in r)o=hi.matchMedia(r[a]).matches,o&&(c=1),o!==s[a]&&(s[a]=o,l=1);l&&(n.revert(),c&&t.push(n))}),Nh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),nm=e,Nh("matchMedia"))},Gv=function(){function i(t,n){this.selector=n&&Wf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=WS++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Ft(n)&&(s=r,r=n,n=Ft);var o=this,a=function(){var l=Nt,u=o.selector,h;return l&&l!==o&&l.data.push(o),s&&(o.selector=Wf(s)),Nt=o,h=r.apply(o,arguments),Ft(h)&&o._r.push(h),Nt=l,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ft?a(o):n?o[n]=a:a},e.ignore=function(n){var r=Nt;Nt=null,n(this),Nt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Wt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(c){c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(l){return o.splice(o.indexOf(l),1)}))}),o.map(function(c){return{g:c.globalTime(0),t:c}}).sort(function(c,l){return l.g-c.g||-1/0}).forEach(function(c){return c.t.revert(n)}),this.data.forEach(function(c){return!(c instanceof Wt)&&c.revert&&c.revert(n)}),this._r.forEach(function(c){return c(n,s)}),this.isReverted=!0}else this.data.forEach(function(c){return c.kill&&c.kill()});if(this.clear(),r)for(var a=$s.length;a--;)$s[a].id===this.id&&$s.splice(a,1)},e.revert=function(n){this.kill(n||{})},i}(),XS=function(){function i(t){this.contexts=[],this.scope=t}var e=i.prototype;return e.add=function(n,r,s){tr(n)||(n={matches:n});var o=new Gv(0,s||this.scope),a=o.conditions={},c,l,u;Nt&&!o.selector&&(o.selector=Nt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(l in n)l==="all"?u=1:(c=hi.matchMedia(n[l]),c&&($s.indexOf(o)<0&&$s.push(o),(a[l]=c.matches)&&(u=1),c.addListener?c.addListener($f):c.addEventListener("change",$f)));return u&&r(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),yu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Av(r)})},timeline:function(e){return new Nn(e)},getTweensOf:function(e,t){return It.getTweensOf(e,t)},getProperty:function(e,t,n,r){nn(e)&&(e=xi(e)[0]);var s=Ws(e||{}).get,o=n?pv:dv;return n==="native"&&(n=""),e&&(t?o((ni[t]&&ni[t].get||s)(e,t,n,r)):function(a,c,l){return o((ni[a]&&ni[a].get||s)(e,a,c,l))})},quickSetter:function(e,t,n){if(e=xi(e),e.length>1){var r=e.map(function(u){return Vn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var o=ni[t],a=Ws(e),c=a.harness&&(a.harness.aliases||{})[t]||t,l=o?function(u){var h=new o;Xo._pt=0,h.init(e,n?u+n:u,Xo,0,[e]),h.render(1,h),Xo._pt&&Qd(1,Xo)}:a.set(e,c);return o?l:function(u){return l(e,c,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=Vn.to(e,so((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),o=function(c,l,u){return s.resetTo(t,c,l,u)};return o.tween=s,o},isTweening:function(e){return It.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=qs(e.ease,la.ease)),Zp(la,e||{})},config:function(e){return Zp(oi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!ni[a]&&!ci[a]&&gu(t+" effect requires "+a+" plugin.")}),Dh[t]=function(a,c,l){return n(xi(a),bi(c||{},s),l)},o&&(Nn.prototype[t]=function(a,c,l){return this.add(Dh[t](a,tr(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){ft[e]=qs(t)},parseEase:function(e,t){return arguments.length?qs(e,t):ft},getById:function(e){return It.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Nn(e),r,s;for(n.smoothChildTiming=kn(e.smoothChildTiming),It.remove(n),n._dp=0,n._time=n._tTime=It._time,r=It._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Wt&&r.vars.onComplete===r._targets[0]))&&Wi(n,r,r._start-r._delay),r=s;return Wi(It,n,0),n},context:function(e,t){return e?new Gv(e,t):Nt},matchMedia:function(e){return new XS(e)},matchMediaRefresh:function(){return $s.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||$f()},addEventListener:function(e,t){var n=Jl[e]||(Jl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Jl[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:MS,wrapYoyo:bS,distribute:Sv,random:Mv,snap:Ev,normalize:ES,getUnit:dn,clamp:vS,splitColor:Rv,toArray:xi,selector:Wf,mapRange:Tv,pipe:yS,unitize:SS,interpolate:TS,shuffle:yv},install:cv,effects:Dh,ticker:ri,updateRoot:Nn.updateRoot,plugins:ni,globalTimeline:It,core:{PropTween:zn,globals:lv,Tween:Wt,Timeline:Nn,Animation:Ec,getCache:Ws,_removeLinkedListItem:Qu,reverting:function(){return mn},context:function(e){return e&&Nt&&(Nt.data.push(e),e._ctx=Nt),Nt},suppressOverwrites:function(e){return Hd=e}}};Bn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return yu[i]=Wt[i]});ri.add(Nn.updateRoot);Xo=yu.to({},{duration:0});var qS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},$S=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=qS(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},Fh=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var c,l;if(nn(s)&&(c={},Bn(s,function(u){return c[u]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}$S(a,s)}}}},Vn=yu.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,c;this.tween=n;for(o in t)c=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(c||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)mn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Fh("roundProps",Xf),Fh("modifiers"),Fh("snap",Ev))||yu;Wt.version=Nn.version=Vn.version="3.12.2";av=1;Vd()&&fa();ft.Power0;ft.Power1;ft.Power2;ft.Power3;ft.Power4;ft.Linear;ft.Quad;ft.Cubic;ft.Quart;ft.Quint;ft.Strong;ft.Elastic;ft.Back;ft.SteppedEase;ft.Bounce;ft.Sine;ft.Expo;ft.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var im,Xr,Jo,ep,Hs,rm,tp,YS=function(){return typeof window<"u"},Rr={},Ps=180/Math.PI,Qo=Math.PI/180,_o=Math.atan2,sm=1e8,np=/([A-Z])/g,KS=/(left|right|width|margin|padding|x)/i,jS=/[\s,\(]\S/,qi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Yf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ZS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},JS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},QS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Vv=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Wv=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},eE=function(e,t,n){return e.style[t]=n},tE=function(e,t,n){return e.style.setProperty(t,n)},nE=function(e,t,n){return e._gsap[t]=n},iE=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},rE=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},sE=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ot="transform",zi=Ot+"Origin",oE=function i(e,t){var n=this,r=this.target,s=r.style;if(e in Rr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=qi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=pr(r,o)}):this.tfm[e]=r._gsap.x?r._gsap[e]:pr(r,e);else return qi.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(Ot)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(zi,t,"")),e=Ot}(s||t)&&this.props.push(e,t,s[e])},Xv=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},aE=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(np,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=tp(),(!s||!s.isStart)&&!n[Ot]&&(Xv(n),r.uncache=1)}},qv=function(e,t){var n={target:e,props:[],revert:aE,save:oE};return e._gsap||Vn.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},$v,Kf=function(e,t){var n=Xr.createElementNS?Xr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Xr.createElement(e);return n.style?n:Xr.createElement(e)},Zi=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(np,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,da(t)||t,1)||""},om="O,Moz,ms,Ms,Webkit".split(","),da=function(e,t,n){var r=t||Hs,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(om[o]+e in s););return o<0?null:(o===3?"ms":o>=0?om[o]:"")+e},jf=function(){YS()&&window.document&&(im=window,Xr=im.document,Jo=Xr.documentElement,Hs=Kf("div")||{style:{}},Kf("div"),Ot=da(Ot),zi=Ot+"Origin",Hs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",$v=!!da("perspective"),tp=Vn.core.reverting,ep=1)},kh=function i(e){var t=Kf("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Jo.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),Jo.removeChild(t),this.style.cssText=s,o},am=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Yv=function(e){var t;try{t=e.getBBox()}catch{t=kh.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===kh||(t=kh.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+am(e,["x","cx","x1"])||0,y:+am(e,["y","cy","y1"])||0,width:0,height:0}:t},Kv=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Yv(e))},Mc=function(e,t){if(t){var n=e.style;t in Rr&&t!==zi&&(t=Ot),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(np,"-$1").toLowerCase())):n.removeAttribute(t)}},qr=function(e,t,n,r,s,o){var a=new zn(e._pt,t,n,0,1,o?Wv:Vv);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},cm={deg:1,rad:1,turn:1},cE={grid:1,flex:1},cs=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Hs.style,c=KS.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,f=r==="px",d=r==="%",_,m,g,p;return r===o||!s||cm[r]||cm[o]?s:(o!=="px"&&!f&&(s=i(e,t,n,"px")),p=e.getCTM&&Kv(e),(d||o==="%")&&(Rr[t]||~t.indexOf("adius"))?(_=p?e.getBBox()[c?"width":"height"]:e[u],kt(d?s/_*h:s/100*_)):(a[c?"width":"height"]=h+(f?o:r),m=~t.indexOf("adius")||r==="em"&&e.appendChild&&!l?e:e.parentNode,p&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===Xr||!m.appendChild)&&(m=Xr.body),g=m._gsap,g&&d&&g.width&&c&&g.time===ri.time&&!g.uncache?kt(s/g.width*h):((d||o==="%")&&!cE[Zi(m,"display")]&&(a.position=Zi(e,"position")),m===e&&(a.position="static"),m.appendChild(Hs),_=Hs[u],m.removeChild(Hs),a.position="absolute",c&&d&&(g=Ws(m),g.time=ri.time,g.width=m[u]),kt(f?_*s/h:_&&s?h/_*s:0))))},pr=function(e,t,n,r){var s;return ep||jf(),t in qi&&t!=="transform"&&(t=qi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Rr[t]&&t!=="transform"?(s=Tc(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Eu(Zi(e,zi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Su[t]&&Su[t](e,t,n)||Zi(e,t)||hv(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?cs(e,t,s,n)+n:s},lE=function(e,t,n,r){if(!n||n==="none"){var s=da(t,e,1),o=s&&Zi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Zi(e,"borderTopColor"))}var a=new zn(this._pt,e.style,t,0,1,zv),c=0,l=0,u,h,f,d,_,m,g,p,x,v,y,M;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(e.style[t]=r,r=Zi(e,t)||r,e.style[t]=n),u=[n,r],Pv(u),n=u[0],r=u[1],f=n.match(Wo)||[],M=r.match(Wo)||[],M.length){for(;h=Wo.exec(r);)g=h[0],x=r.substring(c,h.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),g!==(m=f[l++]||"")&&(d=parseFloat(m)||0,y=m.substr((d+"").length),g.charAt(1)==="="&&(g=Zo(d,g)+y),p=parseFloat(g),v=g.substr((p+"").length),c=Wo.lastIndex-v.length,v||(v=v||oi.units[t]||y,c===r.length&&(r+=v,a.e+=v)),y!==v&&(d=cs(e,t,m,v)||0),a._pt={_next:a._pt,p:x||l===1?x:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=c<r.length?r.substring(c,r.length):""}else a.r=t==="display"&&r==="none"?Wv:Vv;return sv.test(r)&&(a.e=0),this._pt=a,a},lm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},uE=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=lm[n]||n,t[1]=lm[r]||r,t.join(" ")},hE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,c,l;if(s==="all"||s===!0)r.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)a=s[l],Rr[a]&&(c=1,a=a==="transformOrigin"?zi:Ot),Mc(n,a);c&&(Mc(n,Ot),o&&(o.svg&&n.removeAttribute("transform"),Tc(n,1),o.uncache=1,Xv(r)))}},Su={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new zn(e._pt,t,n,0,0,hE);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},bc=[1,0,0,1,0,0],jv={},Zv=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},um=function(e){var t=Zi(e,Ot);return Zv(t)?bc:t.substr(7).match(rv).map(kt)},ip=function(e,t){var n=e._gsap||Ws(e),r=e.style,s=um(e),o,a,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?bc:s):(s===bc&&!e.offsetParent&&e!==Jo&&!n.svg&&(c=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(l=1,a=e.nextElementSibling,Jo.appendChild(e)),s=um(e),c?r.display=c:Mc(e,"display"),l&&(a?o.insertBefore(e,a):o?o.appendChild(e):Jo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Zf=function(e,t,n,r,s,o){var a=e._gsap,c=s||ip(e,!0),l=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=c[0],_=c[1],m=c[2],g=c[3],p=c[4],x=c[5],v=t.split(" "),y=parseFloat(v[0])||0,M=parseFloat(v[1])||0,T,E,C,S;n?c!==bc&&(E=d*g-_*m)&&(C=y*(g/E)+M*(-m/E)+(m*x-g*p)/E,S=y*(-_/E)+M*(d/E)-(d*x-_*p)/E,y=C,M=S):(T=Yv(e),y=T.x+(~v[0].indexOf("%")?y/100*T.width:y),M=T.y+(~(v[1]||v[0]).indexOf("%")?M/100*T.height:M)),r||r!==!1&&a.smooth?(p=y-l,x=M-u,a.xOffset=h+(p*d+x*m)-p,a.yOffset=f+(p*_+x*g)-x):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=M,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[zi]="0px 0px",o&&(qr(o,a,"xOrigin",l,y),qr(o,a,"yOrigin",u,M),qr(o,a,"xOffset",h,a.xOffset),qr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},Tc=function(e,t){var n=e._gsap||new Ov(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",c=getComputedStyle(e),l=Zi(e,zi)||"0",u,h,f,d,_,m,g,p,x,v,y,M,T,E,C,S,b,D,I,F,P,U,V,k,G,z,w,L,N,K,j,q;return u=h=f=m=g=p=x=v=y=0,d=_=1,n.svg=!!(e.getCTM&&Kv(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(r[Ot]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Ot]!=="none"?c[Ot]:"")),r.scale=r.rotate=r.translate="none"),E=ip(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),l=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),Zf(e,k||l,!!k||n.originIsAbsolute,n.smooth!==!1,E)),M=n.xOrigin||0,T=n.yOrigin||0,E!==bc&&(D=E[0],I=E[1],F=E[2],P=E[3],u=U=E[4],h=V=E[5],E.length===6?(d=Math.sqrt(D*D+I*I),_=Math.sqrt(P*P+F*F),m=D||I?_o(I,D)*Ps:0,x=F||P?_o(F,P)*Ps+m:0,x&&(_*=Math.abs(Math.cos(x*Qo))),n.svg&&(u-=M-(M*D+T*F),h-=T-(M*I+T*P))):(q=E[6],K=E[7],w=E[8],L=E[9],N=E[10],j=E[11],u=E[12],h=E[13],f=E[14],C=_o(q,N),g=C*Ps,C&&(S=Math.cos(-C),b=Math.sin(-C),k=U*S+w*b,G=V*S+L*b,z=q*S+N*b,w=U*-b+w*S,L=V*-b+L*S,N=q*-b+N*S,j=K*-b+j*S,U=k,V=G,q=z),C=_o(-F,N),p=C*Ps,C&&(S=Math.cos(-C),b=Math.sin(-C),k=D*S-w*b,G=I*S-L*b,z=F*S-N*b,j=P*b+j*S,D=k,I=G,F=z),C=_o(I,D),m=C*Ps,C&&(S=Math.cos(C),b=Math.sin(C),k=D*S+I*b,G=U*S+V*b,I=I*S-D*b,V=V*S-U*b,D=k,U=G),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,p=180-p),d=kt(Math.sqrt(D*D+I*I+F*F)),_=kt(Math.sqrt(V*V+q*q)),C=_o(U,V),x=Math.abs(C)>2e-4?C*Ps:0,y=j?1/(j<0?-j:j):0),n.svg&&(k=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Zv(Zi(e,Ot)),k&&e.setAttribute("transform",k))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=kt(d),n.scaleY=kt(_),n.rotation=kt(m)+a,n.rotationX=kt(g)+a,n.rotationY=kt(p)+a,n.skewX=x+a,n.skewY=v+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(r[zi]=Eu(l)),n.xOffset=n.yOffset=0,n.force3D=oi.force3D,n.renderTransform=n.svg?dE:$v?Jv:fE,n.uncache=0,n},Eu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Bh=function(e,t,n){var r=dn(t);return kt(parseFloat(t)+parseFloat(cs(e,"x",n+"px",r)))+r},fE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Jv(e,t)},Es="0deg",Ia="0px",Ms=") ",Jv=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,m=n.scaleY,g=n.transformPerspective,p=n.force3D,x=n.target,v=n.zOrigin,y="",M=p==="auto"&&e&&e!==1||p===!0;if(v&&(h!==Es||u!==Es)){var T=parseFloat(u)*Qo,E=Math.sin(T),C=Math.cos(T),S;T=parseFloat(h)*Qo,S=Math.cos(T),o=Bh(x,o,E*S*-v),a=Bh(x,a,-Math.sin(T)*-v),c=Bh(x,c,C*S*-v+v)}g!==Ia&&(y+="perspective("+g+Ms),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(M||o!==Ia||a!==Ia||c!==Ia)&&(y+=c!==Ia||M?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+Ms),l!==Es&&(y+="rotate("+l+Ms),u!==Es&&(y+="rotateY("+u+Ms),h!==Es&&(y+="rotateX("+h+Ms),(f!==Es||d!==Es)&&(y+="skew("+f+", "+d+Ms),(_!==1||m!==1)&&(y+="scale("+_+", "+m+Ms),x.style[Ot]=y||"translate(0, 0)"},dE=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,m=n.yOrigin,g=n.xOffset,p=n.yOffset,x=n.forceCSS,v=parseFloat(o),y=parseFloat(a),M,T,E,C,S;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=Qo,l*=Qo,M=Math.cos(c)*h,T=Math.sin(c)*h,E=Math.sin(c-l)*-f,C=Math.cos(c-l)*f,l&&(u*=Qo,S=Math.tan(l-u),S=Math.sqrt(1+S*S),E*=S,C*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),M*=S,T*=S)),M=kt(M),T=kt(T),E=kt(E),C=kt(C)):(M=h,C=f,T=E=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=cs(d,"x",o,"px"),y=cs(d,"y",a,"px")),(_||m||g||p)&&(v=kt(v+_-(_*M+m*E)+g),y=kt(y+m-(_*T+m*C)+p)),(r||s)&&(S=d.getBBox(),v=kt(v+r/100*S.width),y=kt(y+s/100*S.height)),S="matrix("+M+","+T+","+E+","+C+","+v+","+y+")",d.setAttribute("transform",S),x&&(d.style[Ot]=S)},pE=function(e,t,n,r,s){var o=360,a=nn(s),c=parseFloat(s)*(a&&~s.indexOf("rad")?Ps:1),l=c-r,u=r+l+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),h==="cw"&&l<0?l=(l+o*sm)%o-~~(l/o)*o:h==="ccw"&&l>0&&(l=(l-o*sm)%o-~~(l/o)*o)),e._pt=f=new zn(e._pt,t,n,r,l,ZS),f.e=u,f.u="deg",e._props.push(n),f},hm=function(e,t){for(var n in t)e[n]=t[n];return e},mE=function(e,t,n){var r=hm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,u,h,f,d,_;r.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ot]=t,a=Tc(n,1),Mc(n,Ot),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Ot],o[Ot]=t,a=Tc(n,1),o[Ot]=l);for(c in Rr)l=r[c],u=a[c],l!==u&&s.indexOf(c)<0&&(d=dn(l),_=dn(u),h=d!==_?cs(n,c,l,_):parseFloat(l),f=parseFloat(u),e._pt=new zn(e._pt,a,c,h,f-h,Yf),e._pt.u=_||0,e._props.push(c));hm(a,r)};Bn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});Su[e>1?"border"+i:i]=function(a,c,l,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return pr(a,_,l)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,m){return d[_]=f[m]=f[m]||f[(m-1)/2|0]}),a.init(c,d,h)}});var Qv={name:"css",register:jf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,c=n.vars.startAt,l,u,h,f,d,_,m,g,p,x,v,y,M,T,E,C;ep||jf(),this.styles=this.styles||qv(e),C=this.styles.props,this.tween=n;for(m in t)if(m!=="autoRound"&&(u=t[m],!(ni[m]&&Uv(m,t,n,r,e,s)))){if(d=typeof u,_=Su[m],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=yc(u)),_)_(this,e,m,u,n)&&(E=1);else if(m.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(m)+"").trim(),u+="",ts.lastIndex=0,ts.test(l)||(g=dn(l),p=dn(u)),p?g!==p&&(l=cs(e,m,l,p)+p):g&&(u+=g),this.add(a,"setProperty",l,u,r,s,0,0,m),o.push(m),C.push(m,0,a[m]);else if(d!=="undefined"){if(c&&m in c?(l=typeof c[m]=="function"?c[m].call(n,r,e,s):c[m],nn(l)&&~l.indexOf("random(")&&(l=yc(l)),dn(l+"")||(l+=oi.units[m]||dn(pr(e,m))||""),(l+"").charAt(1)==="="&&(l=pr(e,m))):l=pr(e,m),f=parseFloat(l),x=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),m in qi&&(m==="autoAlpha"&&(f===1&&pr(e,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,a.visibility),qr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),m!=="scale"&&m!=="transform"&&(m=qi[m],~m.indexOf(",")&&(m=m.split(",")[0]))),v=m in Rr,v){if(this.styles.save(m),y||(M=e._gsap,M.renderTransform&&!t.parseTransform||Tc(e,t.parseTransform),T=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new zn(this._pt,a,Ot,0,1,M.renderTransform,M,0,-1),y.dep=1),m==="scale")this._pt=new zn(this._pt,M,"scaleY",M.scaleY,(x?Zo(M.scaleY,x+h):h)-M.scaleY||0,Yf),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){C.push(zi,0,a[zi]),u=uE(u),M.svg?Zf(e,u,0,T,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==M.zOrigin&&qr(this,M,"zOrigin",M.zOrigin,p),qr(this,a,m,Eu(l),Eu(u)));continue}else if(m==="svgOrigin"){Zf(e,u,1,T,0,this);continue}else if(m in jv){pE(this,M,m,f,x?Zo(f,x+u):u);continue}else if(m==="smoothOrigin"){qr(this,M,"smooth",M.smooth,u);continue}else if(m==="force3D"){M[m]=u;continue}else if(m==="transform"){mE(this,u,e);continue}}else m in a||(m=da(m)||m);if(v||(h||h===0)&&(f||f===0)&&!jS.test(u)&&m in a)g=(l+"").substr((f+"").length),h||(h=0),p=dn(u)||(m in oi.units?oi.units[m]:g),g!==p&&(f=cs(e,m,l,p)),this._pt=new zn(this._pt,v?M:a,m,f,(x?Zo(f,x+h):h)-f,!v&&(p==="px"||m==="zIndex")&&t.autoRound!==!1?QS:Yf),this._pt.u=p||0,g!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=JS);else if(m in a)lE.call(this,e,m,l,x?x+u:u);else if(m in e)this.add(e,m,l||e[m],x?x+u:u,r,s);else if(m!=="parseTransform"){Xd(m,u);continue}v||(m in a?C.push(m,0,a[m]):C.push(m,1,l||e[m])),o.push(m)}}E&&Hv(this)},render:function(e,t){if(t.tween._time||!tp())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:pr,aliases:qi,getSetter:function(e,t,n){var r=qi[t];return r&&r.indexOf(",")<0&&(t=r),t in Rr&&t!==zi&&(e._gsap.x||pr(e,"x"))?n&&rm===n?t==="scale"?iE:nE:(rm=n||{})&&(t==="scale"?rE:sE):e.style&&!Gd(e.style[t])?eE:~t.indexOf("-")?tE:Jd(e,t)},core:{_removeProperty:Mc,_getMatrix:ip}};Vn.utils.checkPrefix=da;Vn.core.getStyleSaver=qv;(function(i,e,t,n){var r=Bn(i+","+e+","+t,function(s){Rr[s]=1});Bn(e,function(s){oi.units[s]="deg",jv[s]=1}),qi[r[13]]=i+","+e,Bn(n,function(s){var o=s.split(":");qi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){oi.units[i]="px"});Vn.registerPlugin(Qv);var Ae=Vn.registerPlugin(Qv)||Vn;Ae.core.Tween;function fm(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function gE(i,e,t){return e&&fm(i.prototype,e),t&&fm(i,t),i}/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var an,Jf,si,$r,Yr,ea,e0,Ls,Qa,t0,_r,Li,n0,i0=function(){return an||typeof window<"u"&&(an=window.gsap)&&an.registerPlugin&&an},r0=1,qo=[],ct=[],Ji=[],ec=Date.now,Qf=function(e,t){return t},_E=function(){var e=Qa.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,ct),r.push.apply(r,Ji),ct=n,Ji=r,Qf=function(o,a){return t[o](a)}},ns=function(e,t){return~Ji.indexOf(e)&&Ji[Ji.indexOf(e)+1][t]},tc=function(e){return!!~t0.indexOf(e)},yn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},xn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},ll="scrollLeft",ul="scrollTop",ed=function(){return _r&&_r.isPressed||ct.cache++},Mu=function(e,t){var n=function r(s){if(s||s===0){r0&&(si.history.scrollRestoration="manual");var o=_r&&_r.isPressed;s=r.v=Math.round(s)||(_r&&_r.iOS?1:0),e(s),r.cacheID=ct.cache,o&&Qf("ss",s)}else(t||ct.cache!==r.cacheID||Qf("ref"))&&(r.cacheID=ct.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},Cn={s:ll,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Mu(function(i){return arguments.length?si.scrollTo(i,$t.sc()):si.pageXOffset||$r[ll]||Yr[ll]||ea[ll]||0})},$t={s:ul,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Cn,sc:Mu(function(i){return arguments.length?si.scrollTo(Cn.sc(),i):si.pageYOffset||$r[ul]||Yr[ul]||ea[ul]||0})},On=function(e,t){return(t&&t._ctx&&t._ctx.selector||an.utils.toArray)(e)[0]||(typeof e=="string"&&an.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},ls=function(e,t){var n=t.s,r=t.sc;tc(e)&&(e=$r.scrollingElement||Yr);var s=ct.indexOf(e),o=r===$t.sc?1:2;!~s&&(s=ct.push(e)-1),ct[s+o]||yn(e,"scroll",ed);var a=ct[s+o],c=a||(ct[s+o]=Mu(ns(e,n),!0)||(tc(e)?r:Mu(function(l){return arguments.length?e[n]=l:e[n]})));return c.target=e,a||(c.smooth=an.getProperty(e,"scrollBehavior")==="smooth"),c},td=function(e,t,n){var r=e,s=e,o=ec(),a=o,c=t||50,l=Math.max(500,c*3),u=function(_,m){var g=ec();m||g-o>c?(s=r,r=_,a=o,o=g):n?r+=_:r=s+(_-s)/(g-a)*(o-a)},h=function(){s=r=n?0:r,a=o=0},f=function(_){var m=a,g=s,p=ec();return(_||_===0)&&_!==r&&u(_),o===a||p-a>l?0:(r+(n?g:-g))/((n?p:o)-m)*1e3};return{update:u,reset:h,getVelocity:f}},Oa=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},dm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},s0=function(){Qa=an.core.globals().ScrollTrigger,Qa&&Qa.core&&_E()},o0=function(e){return an=e||i0(),an&&typeof document<"u"&&document.body&&(si=window,$r=document,Yr=$r.documentElement,ea=$r.body,t0=[si,$r,Yr,ea],an.utils.clamp,n0=an.core.context||function(){},Ls="onpointerenter"in ea?"pointer":"mouse",e0=Xt.isTouch=si.matchMedia&&si.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in si||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Li=Xt.eventTypes=("ontouchstart"in Yr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Yr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return r0=0},500),s0(),Jf=1),Jf};Cn.op=$t;ct.cache=0;var Xt=function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){Jf||o0(an)||console.warn("Please gsap.registerPlugin(Observer)"),Qa||s0();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,c=n.lineHeight,l=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,m=n.event,g=n.onDragStart,p=n.onDragEnd,x=n.onDrag,v=n.onPress,y=n.onRelease,M=n.onRight,T=n.onLeft,E=n.onUp,C=n.onDown,S=n.onChangeX,b=n.onChangeY,D=n.onChange,I=n.onToggleX,F=n.onToggleY,P=n.onHover,U=n.onHoverEnd,V=n.onMove,k=n.ignoreCheck,G=n.isNormalizer,z=n.onGestureStart,w=n.onGestureEnd,L=n.onWheel,N=n.onEnable,K=n.onDisable,j=n.onClick,q=n.scrollSpeed,X=n.capture,ae=n.allowClicks,me=n.lockAxis,he=n.onLockAxis;this.target=a=On(a)||Yr,this.vars=n,d&&(d=an.utils.toArray(d)),r=r||1e-9,s=s||0,_=_||1,q=q||1,o=o||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(si.getComputedStyle(ea).lineHeight)||22);var re,le,B,J,Q,ce,ge,W=this,Re=0,De=0,qe=ls(a,Cn),Xe=ls(a,$t),lt=qe(),O=Xe(),A=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Li[0]==="pointerdown",$=tc(a),oe=a.ownerDocument||$r,ue=[0,0,0],de=[0,0,0],Pe=0,xe=function(){return Pe=ec()},be=function(Ce,Ye){return(W.event=Ce)&&d&&~d.indexOf(Ce.target)||Ye&&A&&Ce.pointerType!=="touch"||k&&k(Ce,Ye)},Ie=function(){W._vx.reset(),W._vy.reset(),le.pause(),h&&h(W)},Je=function(){var Ce=W.deltaX=dm(ue),Ye=W.deltaY=dm(de),He=Math.abs(Ce)>=r,Ee=Math.abs(Ye)>=r;D&&(He||Ee)&&D(W,Ce,Ye,ue,de),He&&(M&&W.deltaX>0&&M(W),T&&W.deltaX<0&&T(W),S&&S(W),I&&W.deltaX<0!=Re<0&&I(W),Re=W.deltaX,ue[0]=ue[1]=ue[2]=0),Ee&&(C&&W.deltaY>0&&C(W),E&&W.deltaY<0&&E(W),b&&b(W),F&&W.deltaY<0!=De<0&&F(W),De=W.deltaY,de[0]=de[1]=de[2]=0),(J||B)&&(V&&V(W),B&&(x(W),B=!1),J=!1),ce&&!(ce=!1)&&he&&he(W),Q&&(L(W),Q=!1),re=0},_e=function(Ce,Ye,He){ue[He]+=Ce,de[He]+=Ye,W._vx.update(Ce),W._vy.update(Ye),l?re||(re=requestAnimationFrame(Je)):Je()},it=function(Ce,Ye){me&&!ge&&(W.axis=ge=Math.abs(Ce)>Math.abs(Ye)?"x":"y",ce=!0),ge!=="y"&&(ue[2]+=Ce,W._vx.update(Ce,!0)),ge!=="x"&&(de[2]+=Ye,W._vy.update(Ye,!0)),l?re||(re=requestAnimationFrame(Je)):Je()},ze=function(Ce){if(!be(Ce,1)){Ce=Oa(Ce,u);var Ye=Ce.clientX,He=Ce.clientY,Ee=Ye-W.x,Ke=He-W.y,We=W.isDragging;W.x=Ye,W.y=He,(We||Math.abs(W.startX-Ye)>=s||Math.abs(W.startY-He)>=s)&&(x&&(B=!0),We||(W.isDragging=!0),it(Ee,Ke),We||g&&g(W))}},Be=W.onPress=function(Te){be(Te,1)||Te&&Te.button||(W.axis=ge=null,le.pause(),W.isPressed=!0,Te=Oa(Te),Re=De=0,W.startX=W.x=Te.clientX,W.startY=W.y=Te.clientY,W._vx.reset(),W._vy.reset(),yn(G?a:oe,Li[1],ze,u,!0),W.deltaX=W.deltaY=0,v&&v(W))},Le=W.onRelease=function(Te){if(!be(Te,1)){xn(G?a:oe,Li[1],ze,!0);var Ce=!isNaN(W.y-W.startY),Ye=W.isDragging&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),He=Oa(Te);!Ye&&Ce&&(W._vx.reset(),W._vy.reset(),u&&ae&&an.delayedCall(.08,function(){if(ec()-Pe>300&&!Te.defaultPrevented){if(Te.target.click)Te.target.click();else if(oe.createEvent){var Ee=oe.createEvent("MouseEvents");Ee.initMouseEvent("click",!0,!0,si,1,He.screenX,He.screenY,He.clientX,He.clientY,!1,!1,!1,!1,0,null),Te.target.dispatchEvent(Ee)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,h&&!G&&le.restart(!0),p&&Ye&&p(W),y&&y(W,Ye)}},fe=function(Ce){return Ce.touches&&Ce.touches.length>1&&(W.isGesturing=!0)&&z(Ce,W.isDragging)},je=function(){return(W.isGesturing=!1)||w(W)},H=function(Ce){if(!be(Ce)){var Ye=qe(),He=Xe();_e((Ye-lt)*q,(He-O)*q,1),lt=Ye,O=He,h&&le.restart(!0)}},ye=function(Ce){if(!be(Ce)){Ce=Oa(Ce,u),L&&(Q=!0);var Ye=(Ce.deltaMode===1?c:Ce.deltaMode===2?si.innerHeight:1)*_;_e(Ce.deltaX*Ye,Ce.deltaY*Ye,0),h&&!G&&le.restart(!0)}},pe=function(Ce){if(!be(Ce)){var Ye=Ce.clientX,He=Ce.clientY,Ee=Ye-W.x,Ke=He-W.y;W.x=Ye,W.y=He,J=!0,(Ee||Ke)&&it(Ee,Ke)}},se=function(Ce){W.event=Ce,P(W)},ve=function(Ce){W.event=Ce,U(W)},Fe=function(Ce){return be(Ce)||Oa(Ce,u)&&j(W)};le=W._dc=an.delayedCall(f||.25,Ie).pause(),W.deltaX=W.deltaY=0,W._vx=td(0,50,!0),W._vy=td(0,50,!0),W.scrollX=qe,W.scrollY=Xe,W.isDragging=W.isGesturing=W.isPressed=!1,n0(this),W.enable=function(Te){return W.isEnabled||(yn($?oe:a,"scroll",ed),o.indexOf("scroll")>=0&&yn($?oe:a,"scroll",H,u,X),o.indexOf("wheel")>=0&&yn(a,"wheel",ye,u,X),(o.indexOf("touch")>=0&&e0||o.indexOf("pointer")>=0)&&(yn(a,Li[0],Be,u,X),yn(oe,Li[2],Le),yn(oe,Li[3],Le),ae&&yn(a,"click",xe,!1,!0),j&&yn(a,"click",Fe),z&&yn(oe,"gesturestart",fe),w&&yn(oe,"gestureend",je),P&&yn(a,Ls+"enter",se),U&&yn(a,Ls+"leave",ve),V&&yn(a,Ls+"move",pe)),W.isEnabled=!0,Te&&Te.type&&Be(Te),N&&N(W)),W},W.disable=function(){W.isEnabled&&(qo.filter(function(Te){return Te!==W&&tc(Te.target)}).length||xn($?oe:a,"scroll",ed),W.isPressed&&(W._vx.reset(),W._vy.reset(),xn(G?a:oe,Li[1],ze,!0)),xn($?oe:a,"scroll",H,X),xn(a,"wheel",ye,X),xn(a,Li[0],Be,X),xn(oe,Li[2],Le),xn(oe,Li[3],Le),xn(a,"click",xe,!0),xn(a,"click",Fe),xn(oe,"gesturestart",fe),xn(oe,"gestureend",je),xn(a,Ls+"enter",se),xn(a,Ls+"leave",ve),xn(a,Ls+"move",pe),W.isEnabled=W.isPressed=W.isDragging=!1,K&&K(W))},W.kill=W.revert=function(){W.disable();var Te=qo.indexOf(W);Te>=0&&qo.splice(Te,1),_r===W&&(_r=0)},qo.push(W),G&&tc(a)&&(_r=W),W.enable(m)},gE(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();Xt.version="3.12.2";Xt.create=function(i){return new Xt(i)};Xt.register=o0;Xt.getAll=function(){return qo.slice()};Xt.getById=function(i){return qo.filter(function(e){return e.vars.id===i})[0]};i0()&&an.registerPlugin(Xt);/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Oe,ko,ht,Dt,Di,Ct,a0,bu,Tu,$o,Ql,hl,fn,nh,nd,Mn,pm,mm,Bo,c0,zh,l0,Qn,u0,h0,f0,zr,id,rp,ta,sp,Hh,fl=1,Tn=Date.now,Gh=Tn(),Ei=0,Va=0,gm=function(e,t,n){var r=ti(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},_m=function(e,t){return t&&(!ti(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},vE=function i(){return Va&&requestAnimationFrame(i)},vm=function(){return nh=1},xm=function(){return nh=0},Gi=function(e){return e},Wa=function(e){return Math.round(e*1e5)/1e5||0},d0=function(){return typeof window<"u"},p0=function(){return Oe||d0()&&(Oe=window.gsap)&&Oe.registerPlugin&&Oe},oo=function(e){return!!~a0.indexOf(e)},m0=function(e){return(e==="Height"?sp:ht["inner"+e])||Di["client"+e]||Ct["client"+e]},g0=function(e){return ns(e,"getBoundingClientRect")||(oo(e)?function(){return su.width=ht.innerWidth,su.height=sp,su}:function(){return gr(e)})},xE=function(e,t,n){var r=n.d,s=n.d2,o=n.a;return(o=ns(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?m0(s):e["client"+s])||0}},yE=function(e,t){return!t||~Ji.indexOf(e)?g0(e):function(){return su}},vr=function(e,t){var n=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+r)&&(o=ns(e,n))?o()-g0(e)()[s]:oo(e)?(Di[n]||Ct[n])-m0(r):e[n]-e["offset"+r])},dl=function(e,t){for(var n=0;n<Bo.length;n+=3)(!t||~t.indexOf(Bo[n+1]))&&e(Bo[n],Bo[n+1],Bo[n+2])},ti=function(e){return typeof e=="string"},Pn=function(e){return typeof e=="function"},eu=function(e){return typeof e=="number"},Ds=function(e){return typeof e=="object"},Ua=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Vh=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},vo=Math.abs,_0="left",v0="top",op="right",ap="bottom",Ys="width",Ks="height",nc="Right",ic="Left",rc="Top",sc="Bottom",Gt="padding",fi="margin",pa="Width",cp="Height",rn="px",di=function(e){return ht.getComputedStyle(e)},SE=function(e){var t=di(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},ym=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},gr=function(e,t){var n=t&&di(e)[nd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Oe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},rd=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},x0=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},EE=function(e){return function(t){return Oe.utils.snap(x0(e),t)}},lp=function(e){var t=Oe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},ME=function(e){return function(t,n){return lp(x0(e))(t,n.direction)}},pl=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},en=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},Qt=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},ml=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Sm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},gl={toggleActions:"play",anticipatePin:0},wu={top:0,left:0,center:.5,bottom:1,right:1},tu=function(e,t){if(ti(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in wu?wu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},_l=function(e,t,n,r,s,o,a,c){var l=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,_=Dt.createElement("div"),m=oo(n)||ns(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,p=m?Ct:n,x=e.indexOf("start")!==-1,v=x?l:u,y="border-color:"+v+";font-size:"+h+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((g||c)&&m?"fixed;":"absolute;"),(g||c||!m)&&(y+=(r===$t?op:ap)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=x,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=y,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+r.op.d2],nu(_,0,r,x),_},nu=function(e,t,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+pa]=1,s["border"+a+pa]=0,s[n.p]=t+"px",Oe.set(e,s)},st=[],sd={},wc,Em=function(){return Tn()-Ei>34&&(wc||(wc=requestAnimationFrame(Er)))},xo=function(){(!Qn||!Qn.isPressed||Qn.startX>Ct.clientWidth)&&(ct.cache++,Qn?wc||(wc=requestAnimationFrame(Er)):Er(),Ei||co("scrollStart"),Ei=Tn())},Wh=function(){f0=ht.innerWidth,h0=ht.innerHeight},Xa=function(){ct.cache++,!fn&&!l0&&!Dt.fullscreenElement&&!Dt.webkitFullscreenElement&&(!u0||f0!==ht.innerWidth||Math.abs(ht.innerHeight-h0)>ht.innerHeight*.25)&&bu.restart(!0)},ao={},bE=[],y0=function i(){return Qt(Se,"scrollEnd",i)||Gs(!0)},co=function(e){return ao[e]&&ao[e].map(function(t){return t()})||bE},ei=[],S0=function(e){for(var t=0;t<ei.length;t+=5)(!e||ei[t+4]&&ei[t+4].query===e)&&(ei[t].style.cssText=ei[t+1],ei[t].getBBox&&ei[t].setAttribute("transform",ei[t+2]||""),ei[t+3].uncache=1)},up=function(e,t){var n;for(Mn=0;Mn<st.length;Mn++)n=st[Mn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&S0(t),t||co("revert")},E0=function(e,t){ct.cache++,(t||!bn)&&ct.forEach(function(n){return Pn(n)&&n.cacheID++&&(n.rec=0)}),ti(e)&&(ht.history.scrollRestoration=rp=e)},bn,js=0,Mm,TE=function(){if(Mm!==js){var e=Mm=js;requestAnimationFrame(function(){return e===js&&Gs(!0)})}},M0=function(){Ct.appendChild(ta),sp=ta.offsetHeight||ht.innerHeight,Ct.removeChild(ta)},Gs=function(e,t){if(Ei&&!e){en(Se,"scrollEnd",y0);return}M0(),bn=Se.isRefreshing=!0,ct.forEach(function(r){return Pn(r)&&++r.cacheID&&(r.rec=r())});var n=co("refreshInit");c0&&Se.sort(),t||up(),ct.forEach(function(r){Pn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),st.slice(0).forEach(function(r){return r.refresh()}),st.forEach(function(r,s){if(r._subPinOffset&&r.pin){var o=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[o];r.revert(!0,1),r.adjustPinSpacing(r.pin[o]-a),r.refresh()}}),st.forEach(function(r){var s=vr(r.scroller,r._dir);(r.vars.end==="max"||r._endClamp&&r.end>s)&&r.setPositions(r.start,Math.max(r.start+1,s),!0)}),n.forEach(function(r){return r&&r.render&&r.render(-1)}),ct.forEach(function(r){Pn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),E0(rp,1),bu.pause(),js++,bn=2,Er(2),st.forEach(function(r){return Pn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),bn=Se.isRefreshing=!1,co("refresh")},od=0,iu=1,oc,Er=function(e){if(!bn||e===2){Se.isUpdating=!0,oc&&oc.update(0);var t=st.length,n=Tn(),r=n-Gh>=50,s=t&&st[0].scroll();if(iu=od>s?-1:1,bn||(od=s),r&&(Ei&&!nh&&n-Ei>200&&(Ei=0,co("scrollEnd")),Ql=Gh,Gh=n),iu<0){for(Mn=t;Mn-- >0;)st[Mn]&&st[Mn].update(0,r);iu=1}else for(Mn=0;Mn<t;Mn++)st[Mn]&&st[Mn].update(0,r);Se.isUpdating=!1}wc=0},ad=[_0,v0,ap,op,fi+sc,fi+nc,fi+rc,fi+ic,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ru=ad.concat([Ys,Ks,"boxSizing","max"+pa,"max"+cp,"position",fi,Gt,Gt+rc,Gt+nc,Gt+sc,Gt+ic]),wE=function(e,t,n){na(n);var r=e._gsap;if(r.spacerIsNative)na(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Xh=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=ad.length,o=t.style,a=e.style,c;s--;)c=ad[s],o[c]=n[c];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[ap]=a[op]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ys]=rd(e,Cn)+rn,o[Ks]=rd(e,$t)+rn,o[Gt]=a[fi]=a[v0]=a[_0]="0",na(r),a[Ys]=a["max"+pa]=n[Ys],a[Ks]=a["max"+cp]=n[Ks],a[Gt]=n[Gt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},AE=/([A-Z])/g,na=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,o;for((e.t._gsap||Oe.core.getCache(e.t)).uncache=1;r<n;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(AE,"-$1").toLowerCase())}},vl=function(e){for(var t=ru.length,n=e.style,r=[],s=0;s<t;s++)r.push(ru[s],n[ru[s]]);return r.t=e,r},RE=function(e,t,n){for(var r=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},su={left:0,top:0},bm=function(e,t,n,r,s,o,a,c,l,u,h,f,d,_){Pn(e)&&(e=e(c)),ti(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?tu("0"+e.substr(3),n):0));var m=d?d.time():0,g,p,x;if(d&&d.seek(0),isNaN(e)||(e=+e),eu(e))d&&(e=Oe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&nu(a,n,r,!0);else{Pn(t)&&(t=t(c));var v=(e||"0").split(" "),y,M,T,E;x=On(t,c)||Ct,y=gr(x)||{},(!y||!y.left&&!y.top)&&di(x).display==="none"&&(E=x.style.display,x.style.display="block",y=gr(x),E?x.style.display=E:x.style.removeProperty("display")),M=tu(v[0],y[r.d]),T=tu(v[1]||"0",n),e=y[r.p]-l[r.p]-u+M+s-T,a&&nu(a,T,r,n-T<20||a._isStart&&T>20),n-=n-T}if(_&&(c[_]=e||-.001,e<0&&(e=0)),o){var C=e+n,S=o._isStart;g="scroll"+r.d2,nu(o,C,r,S&&C>20||!S&&(h?Math.max(Ct[g],Di[g]):o.parentNode[g])<=C+1),h&&(l=gr(a),h&&(o.style[r.op.p]=l[r.op.p]-r.op.m-o._offset+rn))}return d&&x&&(g=gr(x),d.seek(f),p=gr(x),d._caScrollDist=g[r.p]-p[r.p],e=e/d._caScrollDist*f),d&&d.seek(m),d?e:Math.round(e)},CE=/(webkit|moz|length|cssText|inset)/i,Tm=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===Ct){e._stOrig=s.cssText,a=di(e);for(o in a)!+o&&!CE.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=e._stOrig;Oe.core.getCache(e).uncache=1,t.appendChild(e)}},b0=function(e,t,n){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=o,o}},xl=function(e,t,n){var r={};r[t.p]="+="+n,Oe.set(e,r)},wm=function(e,t){var n=ls(e,t),r="_scroll"+t.p2,s=function o(a,c,l,u,h){var f=o.tween,d=c.onComplete,_={};l=l||n();var m=b0(n,l,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-l,f&&f.kill(),c[r]=a,c.modifiers=_,_[r]=function(){return m(l+u*f.ratio+h*f.ratio*f.ratio)},c.onUpdate=function(){ct.cache++,Er()},c.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Oe.to(e,c),f};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},en(e,"wheel",n.wheelHandler),Se.isTouch&&en(e,"touchmove",n.wheelHandler),s},Se=function(){function i(t,n){ko||i.register(Oe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),id(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Va){this.update=this.refresh=this.kill=Gi;return}n=ym(ti(n)||eu(n)||n.nodeType?{trigger:n}:n,gl);var s=n,o=s.onUpdate,a=s.toggleClass,c=s.id,l=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,m=s.invalidateOnRefresh,g=s.anticipatePin,p=s.onScrubComplete,x=s.onSnapComplete,v=s.once,y=s.snap,M=s.pinReparent,T=s.pinSpacer,E=s.containerAnimation,C=s.fastScrollEnd,S=s.preventOverlaps,b=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Cn:$t,D=!h&&h!==0,I=On(n.scroller||ht),F=Oe.core.getCache(I),P=oo(I),U=("pinType"in n?n.pinType:ns(I,"pinType")||P&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],k=D&&n.toggleActions.split(" "),G="markers"in n?n.markers:gl.markers,z=P?0:parseFloat(di(I)["border"+b.p2+pa])||0,w=this,L=n.onRefreshInit&&function(){return n.onRefreshInit(w)},N=xE(I,P,b),K=yE(I,P),j=0,q=0,X=0,ae=ls(I,b),me,he,re,le,B,J,Q,ce,ge,W,Re,De,qe,Xe,lt,O,A,$,oe,ue,de,Pe,xe,be,Ie,Je,_e,it,ze,Be,Le,fe,je,H,ye,pe,se,ve,Fe;if(w._startClamp=w._endClamp=!1,w._dir=b,g*=45,w.scroller=I,w.scroll=E?E.time.bind(E):ae,le=ae(),w.vars=n,r=r||n.animation,"refreshPriority"in n&&(c0=1,n.refreshPriority===-9999&&(oc=w)),F.tweenScroll=F.tweenScroll||{top:wm(I,$t),left:wm(I,Cn)},w.tweenTo=me=F.tweenScroll[b.p],w.scrubDuration=function(Ee){je=eu(Ee)&&Ee,je?fe?fe.duration(Ee):fe=Oe.to(r,{ease:"expo",totalProgress:"+=0",duration:je,paused:!0,onComplete:function(){return p&&p(w)}}):(fe&&fe.progress(1).kill(),fe=0)},r&&(r.vars.lazy=!1,r._initted&&!w.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),w.animation=r.pause(),r.scrollTrigger=w,w.scrubDuration(h),Be=0,c||(c=r.vars.id)),y&&((!Ds(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in Ct.style&&Oe.set(P?[Ct,Di]:I,{scrollBehavior:"auto"}),ct.forEach(function(Ee){return Pn(Ee)&&Ee.target===(P?Dt.scrollingElement||Di:I)&&(Ee.smooth=!1)}),re=Pn(y.snapTo)?y.snapTo:y.snapTo==="labels"?EE(r):y.snapTo==="labelsDirectional"?ME(r):y.directional!==!1?function(Ee,Ke){return lp(y.snapTo)(Ee,Tn()-q<500?0:Ke.direction)}:Oe.utils.snap(y.snapTo),H=y.duration||{min:.1,max:2},H=Ds(H)?$o(H.min,H.max):$o(H,H),ye=Oe.delayedCall(y.delay||je/2||.1,function(){var Ee=ae(),Ke=Tn()-q<500,We=me.tween;if((Ke||Math.abs(w.getVelocity())<10)&&!We&&!nh&&j!==Ee){var Qe=(Ee-J)/Xe,Lt=r&&!D?r.totalProgress():Qe,ut=Ke?0:(Lt-Le)/(Tn()-Ql)*1e3||0,Tt=Oe.utils.clamp(-Qe,1-Qe,vo(ut/2)*ut/.185),Zt=Qe+(y.inertia===!1?0:Tt),Bt=$o(0,1,re(Zt,w)),At=Math.round(J+Bt*Xe),mt=y,Kn=mt.onStart,R=mt.onInterrupt,Y=mt.onComplete;if(Ee<=Q&&Ee>=J&&At!==Ee){if(We&&!We._initted&&We.data<=vo(At-Ee))return;y.inertia===!1&&(Tt=Bt-Qe),me(At,{duration:H(vo(Math.max(vo(Zt-Lt),vo(Bt-Lt))*.185/ut/.05||0)),ease:y.ease||"power3",data:vo(At-Ee),onInterrupt:function(){return ye.restart(!0)&&R&&R(w)},onComplete:function(){w.update(),j=ae(),Be=Le=r&&!D?r.totalProgress():w.progress,x&&x(w),Y&&Y(w)}},Ee,Tt*Xe,At-Ee-Tt*Xe),Kn&&Kn(w,me.tween)}}else w.isActive&&j!==Ee&&ye.restart(!0)}).pause()),c&&(sd[c]=w),f=w.trigger=On(f||d!==!0&&d),Fe=f&&f._gsap&&f._gsap.stRevert,Fe&&(Fe=Fe(w)),d=d===!0?f:On(d),ti(a)&&(a={targets:f,className:a}),d&&(_===!1||_===fi||(_=!_&&d.parentNode&&d.parentNode.style&&di(d.parentNode).display==="flex"?!1:Gt),w.pin=d,he=Oe.core.getCache(d),he.spacer?lt=he.pinState:(T&&(T=On(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),he.spacerIsNative=!!T,T&&(he.spacerState=vl(T))),he.spacer=$=T||Dt.createElement("div"),$.classList.add("pin-spacer"),c&&$.classList.add("pin-spacer-"+c),he.pinState=lt=vl(d)),n.force3D!==!1&&Oe.set(d,{force3D:!0}),w.spacer=$=he.spacer,ze=di(d),be=ze[_+b.os2],ue=Oe.getProperty(d),de=Oe.quickSetter(d,b.a,rn),Xh(d,$,ze),A=vl(d)),G){De=Ds(G)?ym(G,Sm):Sm,W=_l("scroller-start",c,I,b,De,0),Re=_l("scroller-end",c,I,b,De,0,W),oe=W["offset"+b.op.d2];var Te=On(ns(I,"content")||I);ce=this.markerStart=_l("start",c,Te,b,De,oe,0,E),ge=this.markerEnd=_l("end",c,Te,b,De,oe,0,E),E&&(ve=Oe.quickSetter([ce,ge],b.a,rn)),!U&&!(Ji.length&&ns(I,"fixedMarkers")===!0)&&(SE(P?Ct:I),Oe.set([W,Re],{force3D:!0}),Je=Oe.quickSetter(W,b.a,rn),it=Oe.quickSetter(Re,b.a,rn))}if(E){var Ce=E.vars.onUpdate,Ye=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){w.update(0,0,1),Ce&&Ce.apply(E,Ye||[])})}if(w.previous=function(){return st[st.indexOf(w)-1]},w.next=function(){return st[st.indexOf(w)+1]},w.revert=function(Ee,Ke){if(!Ke)return w.kill(!0);var We=Ee!==!1||!w.enabled,Qe=fn;We!==w.isReverted&&(We&&(pe=Math.max(ae(),w.scroll.rec||0),X=w.progress,se=r&&r.progress()),ce&&[ce,ge,W,Re].forEach(function(Lt){return Lt.style.display=We?"none":"block"}),We&&(fn=w,w.update(We)),d&&(!M||!w.isActive)&&(We?wE(d,$,lt):Xh(d,$,di(d),Ie)),We||w.update(We),fn=Qe,w.isReverted=We)},w.refresh=function(Ee,Ke,We,Qe){if(!((fn||!w.enabled)&&!Ke)){if(d&&Ee&&Ei){en(i,"scrollEnd",y0);return}!bn&&L&&L(w),fn=w,me.tween&&!We&&(me.tween.kill(),me.tween=0),fe&&fe.pause(),m&&r&&r.revert({kill:!1}).invalidate(),w.isReverted||w.revert(!0,!0),w._subPinOffset=!1;var Lt=N(),ut=K(),Tt=E?E.duration():vr(I,b),Zt=Xe<=.01,Bt=0,At=Qe||0,mt=Ds(We)?We.end:n.end,Kn=n.endTrigger||f,R=Ds(We)?We.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Y=w.pinnedContainer=n.pinnedContainer&&On(n.pinnedContainer,w),ee=f&&Math.max(0,st.indexOf(w))||0,ne=ee,te,Me,Ue,Ge,Ne,ke,Ve,Ze,Pt,qt,gt,_n,St;for(G&&Ds(We)&&(_n=Oe.getProperty(W,b.p),St=Oe.getProperty(Re,b.p));ne--;)ke=st[ne],ke.end||ke.refresh(0,1)||(fn=w),Ve=ke.pin,Ve&&(Ve===f||Ve===d||Ve===Y)&&!ke.isReverted&&(qt||(qt=[]),qt.unshift(ke),ke.revert(!0,!0)),ke!==st[ne]&&(ee--,ne--);for(Pn(R)&&(R=R(w)),R=gm(R,"start",w),J=bm(R,f,Lt,b,ae(),ce,W,w,ut,z,U,Tt,E,w._startClamp&&"_startClamp")||(d?-.001:0),Pn(mt)&&(mt=mt(w)),ti(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(ti(R)?R.split(" ")[0]:"")+mt:(Bt=tu(mt.substr(2),Lt),mt=ti(R)?R:(E?Oe.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,J):J)+Bt,Kn=f)),mt=gm(mt,"end",w),Q=Math.max(J,bm(mt||(Kn?"100% 0":Tt),Kn,Lt,b,ae()+Bt,ge,Re,w,ut,z,U,Tt,E,w._endClamp&&"_endClamp"))||-.001,Bt=0,ne=ee;ne--;)ke=st[ne],Ve=ke.pin,Ve&&ke.start-ke._pinPush<=J&&!E&&ke.end>0&&(te=ke.end-(w._startClamp?Math.max(0,ke.start):ke.start),(Ve===f&&ke.start-ke._pinPush<J||Ve===Y)&&isNaN(R)&&(Bt+=te*(1-ke.progress)),Ve===d&&(At+=te));if(J+=Bt,Q+=Bt,w._startClamp&&(w._startClamp+=Bt),w._endClamp&&!bn&&(w._endClamp=Q||-.001,Q=Math.min(Q,vr(I,b))),Xe=Q-J||(J-=.01)&&.001,Zt&&(X=Oe.utils.clamp(0,1,Oe.utils.normalize(J,Q,pe))),w._pinPush=At,ce&&Bt&&(te={},te[b.a]="+="+Bt,Y&&(te[b.p]="-="+ae()),Oe.set([ce,ge],te)),d)te=di(d),Ge=b===$t,Ue=ae(),Pe=parseFloat(ue(b.a))+At,!Tt&&Q>1&&(gt=(P?Dt.scrollingElement||Di:I).style,gt={style:gt,value:gt["overflow"+b.a.toUpperCase()]},P&&di(Ct)["overflow"+b.a.toUpperCase()]!=="scroll"&&(gt.style["overflow"+b.a.toUpperCase()]="scroll")),Xh(d,$,te),A=vl(d),Me=gr(d,!0),Ze=U&&ls(I,Ge?Cn:$t)(),_&&(Ie=[_+b.os2,Xe+At+rn],Ie.t=$,ne=_===Gt?rd(d,b)+Xe+At:0,ne&&Ie.push(b.d,ne+rn),na(Ie),Y&&st.forEach(function(et){et.pin===Y&&et.vars.pinSpacing!==!1&&(et._subPinOffset=!0)}),U&&ae(pe)),U&&(Ne={top:Me.top+(Ge?Ue-J:Ze)+rn,left:Me.left+(Ge?Ze:Ue-J)+rn,boxSizing:"border-box",position:"fixed"},Ne[Ys]=Ne["max"+pa]=Math.ceil(Me.width)+rn,Ne[Ks]=Ne["max"+cp]=Math.ceil(Me.height)+rn,Ne[fi]=Ne[fi+rc]=Ne[fi+nc]=Ne[fi+sc]=Ne[fi+ic]="0",Ne[Gt]=te[Gt],Ne[Gt+rc]=te[Gt+rc],Ne[Gt+nc]=te[Gt+nc],Ne[Gt+sc]=te[Gt+sc],Ne[Gt+ic]=te[Gt+ic],O=RE(lt,Ne,M),bn&&ae(0)),r?(Pt=r._initted,zh(1),r.render(r.duration(),!0,!0),xe=ue(b.a)-Pe+Xe+At,_e=Math.abs(Xe-xe)>1,U&&_e&&O.splice(O.length-2,2),r.render(0,!0,!0),Pt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),zh(0)):xe=Xe,gt&&(gt.value?gt.style["overflow"+b.a.toUpperCase()]=gt.value:gt.style.removeProperty("overflow-"+b.a));else if(f&&ae()&&!E)for(Me=f.parentNode;Me&&Me!==Ct;)Me._pinOffset&&(J-=Me._pinOffset,Q-=Me._pinOffset),Me=Me.parentNode;qt&&qt.forEach(function(et){return et.revert(!1,!0)}),w.start=J,w.end=Q,le=B=bn?pe:ae(),!E&&!bn&&(le<pe&&ae(pe),w.scroll.rec=0),w.revert(!1,!0),q=Tn(),ye&&(j=-1,ye.restart(!0)),fn=0,r&&D&&(r._initted||se)&&r.progress()!==se&&r.progress(se||0,!0).render(r.time(),!0,!0),(Zt||X!==w.progress||E)&&(r&&!D&&r.totalProgress(E&&J<-.001&&!X?Oe.utils.normalize(J,Q,0):X,!0),w.progress=Zt||(le-J)/Xe===X?0:X),d&&_&&($._pinOffset=Math.round(w.progress*xe)),fe&&fe.invalidate(),isNaN(_n)||(_n-=Oe.getProperty(W,b.p),St-=Oe.getProperty(Re,b.p),xl(W,b,_n),xl(ce,b,_n-(Qe||0)),xl(Re,b,St),xl(ge,b,St-(Qe||0))),Zt&&!bn&&w.update(),u&&!bn&&!qe&&(qe=!0,u(w),qe=!1)}},w.getVelocity=function(){return(ae()-B)/(Tn()-Ql)*1e3||0},w.endAnimation=function(){Ua(w.callbackAnimation),r&&(fe?fe.progress(1):r.paused()?D||Ua(r,w.direction<0,1):Ua(r,r.reversed()))},w.labelToScroll=function(Ee){return r&&r.labels&&(J||w.refresh()||J)+r.labels[Ee]/r.duration()*Xe||0},w.getTrailing=function(Ee){var Ke=st.indexOf(w),We=w.direction>0?st.slice(0,Ke).reverse():st.slice(Ke+1);return(ti(Ee)?We.filter(function(Qe){return Qe.vars.preventOverlaps===Ee}):We).filter(function(Qe){return w.direction>0?Qe.end<=J:Qe.start>=Q})},w.update=function(Ee,Ke,We){if(!(E&&!We&&!Ee)){var Qe=bn===!0?pe:w.scroll(),Lt=Ee?0:(Qe-J)/Xe,ut=Lt<0?0:Lt>1?1:Lt||0,Tt=w.progress,Zt,Bt,At,mt,Kn,R,Y,ee;if(Ke&&(B=le,le=E?ae():Qe,y&&(Le=Be,Be=r&&!D?r.totalProgress():ut)),g&&!ut&&d&&!fn&&!fl&&Ei&&J<Qe+(Qe-B)/(Tn()-Ql)*g&&(ut=1e-4),ut!==Tt&&w.enabled){if(Zt=w.isActive=!!ut&&ut<1,Bt=!!Tt&&Tt<1,R=Zt!==Bt,Kn=R||!!ut!=!!Tt,w.direction=ut>Tt?1:-1,w.progress=ut,Kn&&!fn&&(At=ut&&!Tt?0:ut===1?1:Tt===1?2:3,D&&(mt=!R&&k[At+1]!=="none"&&k[At+1]||k[At],ee=r&&(mt==="complete"||mt==="reset"||mt in r))),S&&(R||ee)&&(ee||h||!r)&&(Pn(S)?S(w):w.getTrailing(S).forEach(function(Ue){return Ue.endAnimation()})),D||(fe&&!fn&&!fl?(fe._dp._time-fe._start!==fe._time&&fe.render(fe._dp._time-fe._start),fe.resetTo?fe.resetTo("totalProgress",ut,r._tTime/r._tDur):(fe.vars.totalProgress=ut,fe.invalidate().restart())):r&&r.totalProgress(ut,!!(fn&&(q||Ee)))),d){if(Ee&&_&&($.style[_+b.os2]=be),!U)de(Wa(Pe+xe*ut));else if(Kn){if(Y=!Ee&&ut>Tt&&Q+1>Qe&&Qe+1>=vr(I,b),M)if(!Ee&&(Zt||Y)){var ne=gr(d,!0),te=Qe-J;Tm(d,Ct,ne.top+(b===$t?te:0)+rn,ne.left+(b===$t?0:te)+rn)}else Tm(d,$);na(Zt||Y?O:A),_e&&ut<1&&Zt||de(Pe+(ut===1&&!Y?xe:0))}}y&&!me.tween&&!fn&&!fl&&ye.restart(!0),a&&(R||v&&ut&&(ut<1||!Hh))&&Tu(a.targets).forEach(function(Ue){return Ue.classList[Zt||v?"add":"remove"](a.className)}),o&&!D&&!Ee&&o(w),Kn&&!fn?(D&&(ee&&(mt==="complete"?r.pause().totalProgress(1):mt==="reset"?r.restart(!0).pause():mt==="restart"?r.restart(!0):r[mt]()),o&&o(w)),(R||!Hh)&&(l&&R&&Vh(w,l),V[At]&&Vh(w,V[At]),v&&(ut===1?w.kill(!1,1):V[At]=0),R||(At=ut===1?1:3,V[At]&&Vh(w,V[At]))),C&&!Zt&&Math.abs(w.getVelocity())>(eu(C)?C:2500)&&(Ua(w.callbackAnimation),fe?fe.progress(1):Ua(r,mt==="reverse"?1:!ut,1))):D&&o&&!fn&&o(w)}if(it){var Me=E?Qe/E.duration()*(E._caScrollDist||0):Qe;Je(Me+(W._isFlipped?1:0)),it(Me)}ve&&ve(-Qe/E.duration()*(E._caScrollDist||0))}},w.enable=function(Ee,Ke){w.enabled||(w.enabled=!0,en(I,"resize",Xa),P||en(I,"scroll",xo),L&&en(i,"refreshInit",L),Ee!==!1&&(w.progress=X=0,le=B=j=ae()),Ke!==!1&&w.refresh())},w.getTween=function(Ee){return Ee&&me?me.tween:fe},w.setPositions=function(Ee,Ke,We,Qe){if(E){var Lt=E.scrollTrigger,ut=E.duration(),Tt=Lt.end-Lt.start;Ee=Lt.start+Tt*Ee/ut,Ke=Lt.start+Tt*Ke/ut}w.refresh(!1,!1,{start:_m(Ee,We&&!!w._startClamp),end:_m(Ke,We&&!!w._endClamp)},Qe),w.update()},w.adjustPinSpacing=function(Ee){if(Ie&&Ee){var Ke=Ie.indexOf(b.d)+1;Ie[Ke]=parseFloat(Ie[Ke])+Ee+rn,Ie[1]=parseFloat(Ie[1])+Ee+rn,na(Ie)}},w.disable=function(Ee,Ke){if(w.enabled&&(Ee!==!1&&w.revert(!0,!0),w.enabled=w.isActive=!1,Ke||fe&&fe.pause(),pe=0,he&&(he.uncache=1),L&&Qt(i,"refreshInit",L),ye&&(ye.pause(),me.tween&&me.tween.kill()&&(me.tween=0)),!P)){for(var We=st.length;We--;)if(st[We].scroller===I&&st[We]!==w)return;Qt(I,"resize",Xa),P||Qt(I,"scroll",xo)}},w.kill=function(Ee,Ke){w.disable(Ee,Ke),fe&&!Ke&&fe.kill(),c&&delete sd[c];var We=st.indexOf(w);We>=0&&st.splice(We,1),We===Mn&&iu>0&&Mn--,We=0,st.forEach(function(Qe){return Qe.scroller===w.scroller&&(We=1)}),We||bn||(w.scroll.rec=0),r&&(r.scrollTrigger=null,Ee&&r.revert({kill:!1}),Ke||r.kill()),ce&&[ce,ge,W,Re].forEach(function(Qe){return Qe.parentNode&&Qe.parentNode.removeChild(Qe)}),oc===w&&(oc=0),d&&(he&&(he.uncache=1),We=0,st.forEach(function(Qe){return Qe.pin===d&&We++}),We||(he.spacer=0)),n.onKill&&n.onKill(w)},st.push(w),w.enable(!1,!1),Fe&&Fe(w),r&&r.add&&!Xe){var He=w.update;w.update=function(){w.update=He,J||Q||w.refresh()},Oe.delayedCall(.01,w.update),Xe=.01,J=Q=0}else w.refresh();d&&TE()},i.register=function(n){return ko||(Oe=n||p0(),d0()&&window.document&&i.enable(),ko=Va),ko},i.defaults=function(n){if(n)for(var r in n)gl[r]=n[r];return gl},i.disable=function(n,r){Va=0,st.forEach(function(o){return o[r?"kill":"disable"](n)}),Qt(ht,"wheel",xo),Qt(Dt,"scroll",xo),clearInterval(hl),Qt(Dt,"touchcancel",Gi),Qt(Ct,"touchstart",Gi),pl(Qt,Dt,"pointerdown,touchstart,mousedown",vm),pl(Qt,Dt,"pointerup,touchend,mouseup",xm),bu.kill(),dl(Qt);for(var s=0;s<ct.length;s+=3)ml(Qt,ct[s],ct[s+1]),ml(Qt,ct[s],ct[s+2])},i.enable=function(){if(ht=window,Dt=document,Di=Dt.documentElement,Ct=Dt.body,Oe&&(Tu=Oe.utils.toArray,$o=Oe.utils.clamp,id=Oe.core.context||Gi,zh=Oe.core.suppressOverwrites||Gi,rp=ht.history.scrollRestoration||"auto",od=ht.pageYOffset,Oe.core.globals("ScrollTrigger",i),Ct)){Va=1,ta=document.createElement("div"),ta.style.height="100vh",ta.style.position="absolute",M0(),vE(),Xt.register(Oe),i.isTouch=Xt.isTouch,zr=Xt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),en(ht,"wheel",xo),a0=[ht,Dt,Di,Ct],Oe.matchMedia?(i.matchMedia=function(c){var l=Oe.matchMedia(),u;for(u in c)l.add(u,c[u]);return l},Oe.addEventListener("matchMediaInit",function(){return up()}),Oe.addEventListener("matchMediaRevert",function(){return S0()}),Oe.addEventListener("matchMedia",function(){Gs(0,1),co("matchMedia")}),Oe.matchMedia("(orientation: portrait)",function(){return Wh(),Wh})):console.warn("Requires GSAP 3.11.0 or later"),Wh(),en(Dt,"scroll",xo);var n=Ct.style,r=n.borderTopStyle,s=Oe.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=gr(Ct),$t.m=Math.round(o.top+$t.sc())||0,Cn.m=Math.round(o.left+Cn.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),hl=setInterval(Em,250),Oe.delayedCall(.5,function(){return fl=0}),en(Dt,"touchcancel",Gi),en(Ct,"touchstart",Gi),pl(en,Dt,"pointerdown,touchstart,mousedown",vm),pl(en,Dt,"pointerup,touchend,mouseup",xm),nd=Oe.utils.checkPrefix("transform"),ru.push(nd),ko=Tn(),bu=Oe.delayedCall(.2,Gs).pause(),Bo=[Dt,"visibilitychange",function(){var c=ht.innerWidth,l=ht.innerHeight;Dt.hidden?(pm=c,mm=l):(pm!==c||mm!==l)&&Xa()},Dt,"DOMContentLoaded",Gs,ht,"load",Gs,ht,"resize",Xa],dl(en),st.forEach(function(c){return c.enable(0,1)}),a=0;a<ct.length;a+=3)ml(Qt,ct[a],ct[a+1]),ml(Qt,ct[a],ct[a+2])}},i.config=function(n){"limitCallbacks"in n&&(Hh=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(hl)||(hl=r)&&setInterval(Em,r),"ignoreMobileResize"in n&&(u0=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(dl(Qt)||dl(en,n.autoRefreshEvents||"none"),l0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=On(n),o=ct.indexOf(s),a=oo(s);~o&&ct.splice(o,a?6:2),r&&(a?Ji.unshift(ht,r,Ct,r,Di,r):Ji.unshift(s,r))},i.clearMatchMedia=function(n){st.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(ti(n)?On(n):n).getBoundingClientRect(),a=o[s?Ys:Ks]*r||0;return s?o.right-a>0&&o.left+a<ht.innerWidth:o.bottom-a>0&&o.top+a<ht.innerHeight},i.positionInViewport=function(n,r,s){ti(n)&&(n=On(n));var o=n.getBoundingClientRect(),a=o[s?Ys:Ks],c=r==null?a/2:r in wu?wu[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+c)/ht.innerWidth:(o.top+c)/ht.innerHeight},i.killAll=function(n){if(st.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=ao.killAll||[];ao={},r.forEach(function(s){return s()})}},i}();Se.version="3.12.2";Se.saveStyles=function(i){return i?Tu(i).forEach(function(e){if(e&&e.style){var t=ei.indexOf(e);t>=0&&ei.splice(t,5),ei.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Oe.core.getCache(e),id())}}):ei};Se.revert=function(i,e){return up(!i,e)};Se.create=function(i,e){return new Se(i,e)};Se.refresh=function(i){return i?Xa():(ko||Se.register())&&Gs(!0)};Se.update=function(i){return++ct.cache&&Er(i===!0?2:0)};Se.clearScrollMemory=E0;Se.maxScroll=function(i,e){return vr(i,e?Cn:$t)};Se.getScrollFunc=function(i,e){return ls(On(i),e?Cn:$t)};Se.getById=function(i){return sd[i]};Se.getAll=function(){return st.filter(function(i){return i.vars.id!=="ScrollSmoother"})};Se.isScrolling=function(){return!!Ei};Se.snapDirectional=lp;Se.addEventListener=function(i,e){var t=ao[i]||(ao[i]=[]);~t.indexOf(e)||t.push(e)};Se.removeEventListener=function(i,e){var t=ao[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Se.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,o=function(l,u){var h=[],f=[],d=Oe.delayedCall(r,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Pn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Pn(s)&&(s=s(),en(Se,"refresh",function(){return s=e.batchMax()})),Tu(i).forEach(function(c){var l={};for(a in n)l[a]=n[a];l.trigger=c,t.push(Se.create(l))}),t};var Am=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},qh=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Xt.isTouch?" pinch-zoom":""):"none",e===Di&&i(Ct,t)},yl={auto:1,scroll:1},PE=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Oe.core.getCache(s),a=Tn(),c;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Ct&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(yl[(c=di(s)).overflowY]||yl[c.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!oo(s)&&(yl[(c=di(s)).overflowY]||yl[c.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},T0=function(e,t,n,r){return Xt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&PE,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&en(Dt,Xt.eventTypes[0],Cm,!1,!0)},onDisable:function(){return Qt(Dt,Xt.eventTypes[0],Cm,!0)}})},LE=/(input|label|select|textarea)/i,Rm,Cm=function(e){var t=LE.test(e.target.tagName);(t||Rm)&&(e._gsapAllow=!0,Rm=t)},DE=function(e){Ds(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,c,l=On(e.target)||Di,u=Oe.core.globals().ScrollSmoother,h=u&&u.get(),f=zr&&(e.content&&On(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=ls(l,$t),_=ls(l,Cn),m=1,g=(Xt.isTouch&&ht.visualViewport?ht.visualViewport.scale*ht.visualViewport.width:ht.outerWidth)/ht.innerWidth,p=0,x=Pn(r)?function(){return r(a)}:function(){return r||2.8},v,y,M=T0(l,e.type,!0,s),T=function(){return y=!1},E=Gi,C=Gi,S=function(){c=vr(l,$t),C=$o(zr?1:0,c),n&&(E=$o(0,vr(l,Cn))),v=js},b=function(){f._gsap.y=Wa(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(y){requestAnimationFrame(T);var G=Wa(a.deltaY/2),z=C(d.v-G);if(f&&z!==d.v+d.offset){d.offset=z-d.v;var w=Wa((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+w+", 0, 1)",f._gsap.y=w+"px",d.cacheID=ct.cache,Er()}return!0}d.offset&&b(),y=!0},I,F,P,U,V=function(){S(),I.isActive()&&I.vars.scrollY>c&&(d()>c?I.progress(1)&&d(c):I.resetTo("scrollY",c))};return f&&Oe.set(f,{y:"+=0"}),e.ignoreCheck=function(k){return zr&&k.type==="touchmove"&&D()||m>1.05&&k.type!=="touchstart"||a.isGesturing||k.touches&&k.touches.length>1},e.onPress=function(){y=!1;var k=m;m=Wa((ht.visualViewport&&ht.visualViewport.scale||1)/g),I.pause(),k!==m&&qh(l,m>1.01?!0:n?!1:"x"),F=_(),P=d(),S(),v=js},e.onRelease=e.onGestureStart=function(k,G){if(d.offset&&b(),!G)U.restart(!0);else{ct.cache++;var z=x(),w,L;n&&(w=_(),L=w+z*.05*-k.velocityX/.227,z*=Am(_,w,L,vr(l,Cn)),I.vars.scrollX=E(L)),w=d(),L=w+z*.05*-k.velocityY/.227,z*=Am(d,w,L,vr(l,$t)),I.vars.scrollY=C(L),I.invalidate().duration(z).play(.01),(zr&&I.vars.scrollY>=c||w>=c-1)&&Oe.to({},{onUpdate:V,duration:z})}o&&o(k)},e.onWheel=function(){I._ts&&I.pause(),Tn()-p>1e3&&(v=0,p=Tn())},e.onChange=function(k,G,z,w,L){if(js!==v&&S(),G&&n&&_(E(w[2]===G?F+(k.startX-k.x):_()+G-w[1])),z){d.offset&&b();var N=L[2]===z,K=N?P+k.startY-k.y:d()+z-L[1],j=C(K);N&&K!==j&&(P+=j-K),d(j)}(z||G)&&Er()},e.onEnable=function(){qh(l,n?!1:"x"),Se.addEventListener("refresh",V),en(ht,"resize",V),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),M.enable()},e.onDisable=function(){qh(l,!0),Qt(ht,"resize",V),Se.removeEventListener("refresh",V),M.kill()},e.lockAxis=e.lockAxis!==!1,a=new Xt(e),a.iOS=zr,zr&&!d()&&d(1),zr&&Oe.ticker.add(Gi),U=a._dc,I=Oe.to(a,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:b0(d,d(),function(){return I.pause()})},onUpdate:Er,onComplete:U.vars.onComplete}),a};Se.sort=function(i){return st.sort(i||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Se.observe=function(i){return new Xt(i)};Se.normalizeScroll=function(i){if(typeof i>"u")return Qn;if(i===!0&&Qn)return Qn.enable();if(i===!1)return Qn&&Qn.kill();var e=i instanceof Xt?i:DE(i);return Qn&&Qn.target===e.target&&Qn.kill(),oo(e.target)&&(Qn=e),e};Se.core={_getVelocityProp:td,_inputObserver:T0,_scrollers:ct,_proxies:Ji,bridge:{ss:function(){Ei||co("scrollStart"),Ei=Tn()},ref:function(){return fn}}};p0()&&Oe.registerPlugin(Se);function cd(){return cd=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},cd.apply(this,arguments)}function Au(i,e,t){return Math.max(i,Math.min(e,t))}let IE=class{advance(e){var t;if(!this.isRunning)return;let n=!1;if(this.lerp)this.value=(r=this.value,s=this.to,(1-(o=1-Math.exp(-60*this.lerp*e)))*r+o*s),Math.round(this.value)===this.to&&(this.value=this.to,n=!0);else{this.currentTime+=e;const a=Au(0,this.currentTime/this.duration,1);n=a>=1;const c=n?1:this.easing(a);this.value=this.from+(this.to-this.from)*c}var r,s,o;(t=this.onUpdate)==null||t.call(this,this.value,n),n&&this.stop()}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n=.1,duration:r=1,easing:s=c=>c,onStart:o,onUpdate:a}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=r,this.easing=s,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=a}},OE=class{constructor({wrapper:e,content:t,autoResize:n=!0}={}){if(this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth},this.wrapper=e,this.content=t,n){const r=function(s,o){let a;return function(){let c=arguments,l=this;clearTimeout(a),a=setTimeout(function(){s.apply(l,c)},250)}}(this.resize);this.wrapper!==window&&(this.wrapperResizeObserver=new ResizeObserver(r),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(r),this.contentResizeObserver.observe(this.content)}this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect()}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},w0=class{constructor(){this.events={}}emit(e,...t){let n=this.events[e]||[];for(let r=0,s=n.length;r<s;r++)n[r](...t)}on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(s=>t!==s)}}off(e,t){var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter(r=>t!==r)}destroy(){this.events={}}},UE=class{constructor(e,{wheelMultiplier:t=1,touchMultiplier:n=2,normalizeWheel:r=!1}){this.onTouchStart=s=>{const{clientX:o,clientY:a}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=o,this.touchStart.y=a,this.lastDelta={x:0,y:0}},this.onTouchMove=s=>{const{clientX:o,clientY:a}=s.targetTouches?s.targetTouches[0]:s,c=-(o-this.touchStart.x)*this.touchMultiplier,l=-(a-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=o,this.touchStart.y=a,this.lastDelta={x:c,y:l},this.emitter.emit("scroll",{deltaX:c,deltaY:l,event:s})},this.onTouchEnd=s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})},this.onWheel=s=>{let{deltaX:o,deltaY:a}=s;this.normalizeWheel&&(o=Au(-100,o,100),a=Au(-100,a,100)),o*=this.wheelMultiplier,a*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:o,deltaY:a,event:s})},this.element=e,this.wheelMultiplier=t,this.touchMultiplier=n,this.normalizeWheel=r,this.touchStart={x:null,y:null},this.emitter=new w0,this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}},NE=class{constructor({wrapper:e=window,content:t=document.documentElement,wheelEventsTarget:n=e,eventsTarget:r=n,smoothWheel:s=!0,smoothTouch:o=!1,syncTouch:a=!1,syncTouchLerp:c=.1,__iosNoInertiaSyncTouchLerp:l=.4,touchInertiaMultiplier:u=35,duration:h,easing:f=M=>Math.min(1,1.001-Math.pow(2,-10*M)),lerp:d=!h&&.1,infinite:_=!1,orientation:m="vertical",gestureOrientation:g="vertical",touchMultiplier:p=1,wheelMultiplier:x=1,normalizeWheel:v=!1,autoResize:y=!0}={}){this.onVirtualScroll=({deltaX:M,deltaY:T,event:E})=>{if(E.ctrlKey)return;const C=E.type.includes("touch"),S=E.type.includes("wheel");if(this.options.gestureOrientation==="both"&&M===0&&T===0||this.options.gestureOrientation==="vertical"&&T===0||this.options.gestureOrientation==="horizontal"&&M===0||C&&this.options.gestureOrientation==="vertical"&&this.scroll===0&&!this.options.infinite&&T<=0)return;let b=E.composedPath();if(b=b.slice(0,b.indexOf(this.rootElement)),b.find(P=>{var U;return(P.hasAttribute==null?void 0:P.hasAttribute("data-lenis-prevent"))||C&&(P.hasAttribute==null?void 0:P.hasAttribute("data-lenis-prevent-touch"))||S&&(P.hasAttribute==null?void 0:P.hasAttribute("data-lenis-prevent-wheel"))||((U=P.classList)==null?void 0:U.contains("lenis"))}))return;if(this.isStopped||this.isLocked)return void E.preventDefault();if(this.isSmooth=(this.options.smoothTouch||this.options.syncTouch)&&C||this.options.smoothWheel&&S,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();E.preventDefault();let D=T;this.options.gestureOrientation==="both"?D=Math.abs(T)>Math.abs(M)?T:M:this.options.gestureOrientation==="horizontal"&&(D=M);const I=C&&this.options.syncTouch,F=C&&E.type==="touchend"&&Math.abs(D)>1;F&&(D=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+D,cd({programmatic:!1},I&&{lerp:F?this.syncTouchLerp:this.options.__iosNoInertiaSyncTouchLerp}))},this.onScroll=()=>{if(!this.isScrolling){const M=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-M),this.emit()}},window.lenisVersion="1.0.27",e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:t,wheelEventsTarget:n,eventsTarget:r,smoothWheel:s,smoothTouch:o,syncTouch:a,syncTouchLerp:c,__iosNoInertiaSyncTouchLerp:l,touchInertiaMultiplier:u,duration:h,easing:f,lerp:d,infinite:_,gestureOrientation:g,orientation:m,touchMultiplier:p,wheelMultiplier:x,normalizeWheel:v,autoResize:y},this.animate=new IE,this.emitter=new w0,this.dimensions=new OE({wrapper:e,content:t,autoResize:y}),this.toggleClass("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=a||s||o,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll=new UE(r,{touchMultiplier:p,wheelMultiplier:x,normalizeWheel:v}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClass("lenis",!1),this.toggleClass("lenis-smooth",!1),this.toggleClass("lenis-scrolling",!1),this.toggleClass("lenis-stopped",!1),this.toggleClass("lenis-locked",!1)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.velocity=0,this.animate.stop()}start(){this.isStopped=!1,this.reset()}stop(){this.isStopped=!0,this.animate.stop(),this.reset()}raf(e){const t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)}scrollTo(e,{offset:t=0,immediate:n=!1,lock:r=!1,duration:s=this.options.duration,easing:o=this.options.easing,lerp:a=!s&&this.options.lerp,onComplete:c=null,force:l=!1,programmatic:u=!0}={}){if(!this.isStopped&&!this.isLocked||l){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{var h;let f;if(typeof e=="string"?f=document.querySelector(e):(h=e)!=null&&h.nodeType&&(f=e),f){if(this.options.wrapper!==window){const _=this.options.wrapper.getBoundingClientRect();t-=this.isHorizontal?_.left:_.top}const d=f.getBoundingClientRect();e=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):e=Au(0,e,this.limit),n)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(c==null||c(this));if(!u){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:s,easing:o,lerp:a,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(f,d)=>{this.isScrolling=!0,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),u&&(this.targetScroll=f),d||this.emit(),d&&requestAnimationFrame(()=>{this.reset(),this.emit(),c==null||c(this)})}})}}}get rootElement(){return this.options.wrapper===window?this.options.content:this.options.wrapper}get limit(){return this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(this.animatedScroll%(e=this.limit)+e)%e:this.animatedScroll;var e}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClass("lenis-smooth",e))}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClass("lenis-scrolling",e))}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClass("lenis-stopped",e))}get isLocked(){return this.__isLocked}set isLocked(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClass("lenis-locked",e))}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e}toggleClass(e,t){this.rootElement.classList.toggle(e,t),this.emitter.emit("className change",this)}};/*!
 * ScrollToPlugin 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ln,A0,Mr,$i,is,R0,C0,Sl,P0=function(){return typeof window<"u"},L0=function(){return Ln||P0()&&(Ln=window.gsap)&&Ln.registerPlugin&&Ln},D0=function(e){return typeof e=="string"},Pm=function(e){return typeof e=="function"},Ac=function(e,t){var n=t==="x"?"Width":"Height",r="scroll"+n,s="client"+n;return e===Mr||e===$i||e===is?Math.max($i[r],is[r])-(Mr["inner"+n]||$i[s]||is[s]):e[r]-e["offset"+n]},Rc=function(e,t){var n="scroll"+(t==="x"?"Left":"Top");return e===Mr&&(e.pageXOffset!=null?n="page"+t.toUpperCase()+"Offset":e=$i[n]!=null?$i:is),function(){return e[n]}},FE=function(e,t,n,r){if(Pm(e)&&(e=e(t,n,r)),typeof e!="object")return D0(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&Pm(e[o])?e[o](t,n,r):e[o];return s},I0=function(e,t){if(e=R0(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var n=e.getBoundingClientRect(),r=!t||t===Mr||t===is,s=r?{top:$i.clientTop-(Mr.pageYOffset||$i.scrollTop||is.scrollTop||0),left:$i.clientLeft-(Mr.pageXOffset||$i.scrollLeft||is.scrollLeft||0)}:t.getBoundingClientRect(),o={x:n.left-s.left,y:n.top-s.top};return!r&&t&&(o.x+=Rc(t,"x")(),o.y+=Rc(t,"y")()),o},Lm=function(e,t,n,r,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:D0(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+r-s:e==="max"?Ac(t,n)-s:Math.min(Ac(t,n),I0(e,t)[n]-s)},Dm=function(){Ln=L0(),P0()&&Ln&&typeof document<"u"&&document.body&&(Mr=window,is=document.body,$i=document.documentElement,R0=Ln.utils.toArray,Ln.config({autoKillThreshold:7}),C0=Ln.config(),A0=1)},Ma={version:"3.12.2",name:"scrollTo",rawVars:1,register:function(e){Ln=e,Dm()},init:function(e,t,n,r,s){A0||Dm();var o=this,a=Ln.getProperty(e,"scrollSnapType");o.isWin=e===Mr,o.target=e,o.tween=n,t=FE(t,r,e,s),o.vars=t,o.autoKill=!!t.autoKill,o.getX=Rc(e,"x"),o.getY=Rc(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),Sl||(Sl=Ln.core.globals().ScrollTrigger),Ln.getProperty(e,"scrollBehavior")==="smooth"&&Ln.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,Lm(t.x,e,"x",o.x,t.offsetX||0),r,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,Lm(t.y,e,"y",o.y,t.offsetY||0),r,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var n=t._pt,r=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,c=t.yPrev,l=t.isWin,u=t.snap,h=t.snapInline,f,d,_,m,g;n;)n.r(e,n.d),n=n._next;f=l||!t.skipX?t.getX():a,d=l||!t.skipY?t.getY():c,_=d-c,m=f-a,g=C0.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(m>g||m<-g)&&f<Ac(r,"x")&&(t.skipX=1),!t.skipY&&(_>g||_<-g)&&d<Ac(r,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),l?Mr.scrollTo(t.skipX?f:t.x,t.skipY?d:t.y):(t.skipY||(r.scrollTop=t.y),t.skipX||(r.scrollLeft=t.x)),u&&(e===1||e===0)&&(d=r.scrollTop,f=r.scrollLeft,h?r.style.scrollSnapType=h:r.style.removeProperty("scroll-snap-type"),r.scrollTop=d+1,r.scrollLeft=f+1,r.scrollTop=d,r.scrollLeft=f),t.xPrev=t.x,t.yPrev=t.y,Sl&&Sl.update()},kill:function(e){var t=e==="scrollTo";(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1)}};Ma.max=Ac;Ma.getOffset=I0;Ma.buildGetter=Rc;L0()&&Ln.registerPlugin(Ma);class kE{remToPxSp(e){return e*10*(window.innerWidth/390)}remToPxPc(e){return e*10*(window.innerWidth/1366)}get isDev(){return!1}isOS(e){const t=window.navigator.userAgent.toLowerCase();let n="mac os";switch(e){case"mac":n="mac os";break;case"windows":n="windows nt";break;case"iphone":n="iphone";break;case"android":n="android";break}return t.indexOf(n)!==-1}}const Im=new kE;/*!
 * OverlayScrollbars
 * Version: 2.4.4
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */const Ui=(i,e)=>{const{o:t,u:n,_:r}=i;let s=t,o;const a=(u,h)=>{const f=s,d=u,_=h||(n?!n(f,d):f!==d);return(_||r)&&(s=d,o=f),[s,_,o]};return[e?u=>a(e(s,o),u):a,u=>[s,!!u,o]]},hp=typeof window<"u",O0=hp&&Node.ELEMENT_NODE,{toString:BE,hasOwnProperty:$h}=Object.prototype,zE=/^\[object (.+)\]$/,_s=i=>i===void 0,ih=i=>i===null,HE=i=>_s(i)||ih(i)?`${i}`:BE.call(i).replace(zE,"$1").toLowerCase(),Qi=i=>typeof i=="number",Xc=i=>typeof i=="string",U0=i=>typeof i=="boolean",nr=i=>typeof i=="function",Ti=i=>Array.isArray(i),Cc=i=>typeof i=="object"&&!Ti(i)&&!ih(i),rh=i=>{const e=!!i&&i.length,t=Qi(e)&&e>-1&&e%1==0;return Ti(i)||!nr(i)&&t?e>0&&Cc(i)?e-1 in i:!0:!1},Ru=i=>{if(!i||!Cc(i)||HE(i)!=="object")return!1;let e;const t="constructor",n=i[t],r=n&&n.prototype,s=$h.call(i,t),o=r&&$h.call(r,"isPrototypeOf");if(n&&!s&&!o)return!1;for(e in i);return _s(e)||$h.call(i,e)},ac=i=>{const e=HTMLElement;return i?e?i instanceof e:i.nodeType===O0:!1},sh=i=>{const e=Element;return i?e?i instanceof e:i.nodeType===O0:!1};function vt(i,e){if(rh(i))for(let t=0;t<i.length&&e(i[t],t,i)!==!1;t++);else i&&vt(Object.keys(i),t=>e(i[t],t,i));return i}const oh=(i,e)=>i.indexOf(e)>=0,Kr=(i,e)=>i.concat(e),_t=(i,e,t)=>(!t&&!Xc(e)&&rh(e)?Array.prototype.push.apply(i,e):i.push(e),i),ba=i=>{const e=Array.from,t=[];return e&&i?e(i):(i instanceof Set?i.forEach(n=>{_t(t,n)}):vt(i,n=>{_t(t,n)}),t)},Cu=i=>!!i&&!i.length,Om=i=>ba(new Set(i)),wi=(i,e,t)=>{vt(i,r=>r&&r.apply(void 0,e||[])),!t&&(i.length=0)},ah=(i,e)=>Object.prototype.hasOwnProperty.call(i,e),Cr=i=>i?Object.keys(i):[],pt=(i,e,t,n,r,s,o)=>{const a=[e,t,n,r,s,o];return(typeof i!="object"||ih(i))&&!nr(i)&&(i={}),vt(a,c=>{vt(c,(l,u)=>{const h=c[u];if(i===h)return!0;const f=Ti(h);if(h&&Ru(h)){const d=i[u];let _=d;f&&!Ti(d)?_=[]:!f&&!Ru(d)&&(_={}),i[u]=pt(_,h)}else i[u]=f?h.slice():h})}),i},N0=(i,e)=>vt(pt({},i),(t,n,r)=>{t===void 0?delete r[n]:e&&t&&Ru(t)&&(r[n]=N0(t,e))}),fp=i=>{for(const e in i)return!1;return!0},wn=(i,e,t)=>{if(_s(t))return i?i.getAttribute(e):null;i&&i.setAttribute(e,t)},F0=(i,e)=>new Set((wn(i,e)||"").split(" ")),In=(i,e)=>{i&&i.removeAttribute(e)},Zs=(i,e,t,n)=>{if(t){const r=F0(i,e);r[n?"add":"delete"](t);const s=ba(r).join(" ").trim();wn(i,e,s)}},GE=(i,e,t)=>F0(i,e).has(t),ld=hp&&Element.prototype,k0=(i,e)=>{const t=[],n=e?sh(e)&&e:document;return n?_t(t,n.querySelectorAll(i)):t},VE=(i,e)=>{const t=e?sh(e)&&e:document;return t?t.querySelector(i):null},Pu=(i,e)=>sh(i)?(ld.matches||ld.msMatchesSelector).call(i,e):!1,ud=i=>i?ba(i.childNodes):[],br=i=>i&&i.parentElement,Yo=(i,e)=>{if(sh(i)){const t=ld.closest;if(t)return t.call(i,e);do{if(Pu(i,e))return i;i=br(i)}while(i)}},WE=(i,e,t)=>{const n=Yo(i,e),r=i&&VE(t,n),s=Yo(r,e)===n;return n&&r?n===i||r===i||s&&Yo(Yo(i,t),e)!==n:!1},Mi=()=>{},Tr=i=>{if(rh(i))vt(ba(i),e=>Tr(e));else if(i){const e=br(i);e&&e.removeChild(i)}},dp=(i,e,t)=>{if(t&&i){let n=e,r;return rh(t)?(r=document.createDocumentFragment(),vt(t,s=>{s===n&&(n=s.previousSibling),r.appendChild(s)})):r=t,e&&(n?n!==e&&(n=n.nextSibling):n=i.firstChild),i.insertBefore(r,n||null),()=>Tr(t)}return Mi},gi=(i,e)=>dp(i,null,e),XE=(i,e)=>dp(br(i),i,e),Um=(i,e)=>dp(br(i),i&&i.nextSibling,e),Js=i=>{const e=document.createElement("div");return wn(e,"class",i),e},B0=i=>{const e=Js();return e.innerHTML=i.trim(),vt(ud(e),t=>Tr(t))},Wn=hp?window:{},cc=Math.max,qE=Math.min,Pc=Math.round,z0=Wn.cancelAnimationFrame,H0=Wn.requestAnimationFrame,Lu=Wn.setTimeout,hd=Wn.clearTimeout,fd=i=>i.charAt(0).toUpperCase()+i.slice(1),$E=()=>Js().style,YE=["-webkit-","-moz-","-o-","-ms-"],KE=["WebKit","Moz","O","MS","webkit","moz","o","ms"],Yh={},Kh={},jE=i=>{let e=Kh[i];if(ah(Kh,i))return e;const t=fd(i),n=$E();return vt(YE,r=>{const s=r.replace(/-/g,"");return!(e=[i,r+i,s+t,fd(s)+t].find(a=>n[a]!==void 0))}),Kh[i]=e||""},ch=i=>{let e=Yh[i]||Wn[i];return ah(Yh,i)||(vt(KE,t=>(e=e||Wn[t+fd(i)],!e)),Yh[i]=e),e},ZE=ch("MutationObserver"),Nm=ch("IntersectionObserver"),Du=ch("ResizeObserver"),dd=ch("ScrollTimeline"),$e=(i,...e)=>i.bind(0,...e),Is=i=>{let e;const t=i?Lu:H0,n=i?hd:z0;return[r=>{n(e),e=t(r,nr(i)?i():i)},()=>n(e)]},G0=(i,e)=>{let t,n,r,s=Mi;const{v:o,p:a,g:c}=e||{},l=function(_){s(),hd(t),t=n=void 0,s=Mi,i.apply(this,_)},u=d=>c&&n?c(n,d):d,h=()=>{s!==Mi&&l(u(r)||r)},f=function(){const _=ba(arguments),m=nr(o)?o():o;if(Qi(m)&&m>=0){const p=nr(a)?a():a,x=Qi(p)&&p>=0,v=m>0?Lu:H0,y=m>0?hd:z0,T=u(_)||_,E=l.bind(0,T);s();const C=v(E,m);s=()=>y(C),x&&!t&&(t=Lu(h,p)),n=r=T}else l(_)};return f.m=h,f},JE=/[^\x20\t\r\n\f]+/g,V0=(i,e,t)=>{const n=i&&i.classList;let r,s=0,o=!1;if(n&&e&&Xc(e)){const a=e.match(JE)||[];for(o=a.length>0;r=a[s++];)o=!!t(n,r)&&o}return o},pp=(i,e)=>{V0(i,e,(t,n)=>t.remove(n))},us=(i,e)=>(V0(i,e,(t,n)=>t.add(n)),$e(pp,i,e)),QE={opacity:1,zIndex:1},El=(i,e)=>{const t=i||"",n=e?parseFloat(t):parseInt(t,10);return n===n?n:0},eM=(i,e)=>!QE[i]&&Qi(e)?`${e}px`:e,Fm=(i,e,t)=>String((e!=null?e[t]||e.getPropertyValue(t):i.style[t])||""),tM=(i,e,t)=>{try{const{style:n}=i;_s(n[e])?n.setProperty(e,t):n[e]=eM(e,t)}catch{}};function pn(i,e){const t=Xc(e);if(Ti(e)||t){let r=t?"":{};if(i){const s=Wn.getComputedStyle(i,null);r=t?Fm(i,s,e):e.reduce((o,a)=>(o[a]=Fm(i,s,a),o),r)}return r}i&&vt(e,(r,s)=>tM(i,s,e[s]))}const Lc=i=>pn(i,"direction")==="rtl",km=(i,e,t)=>{const n=e?`${e}-`:"",r=t?`-${t}`:"",s=`${n}top${r}`,o=`${n}right${r}`,a=`${n}bottom${r}`,c=`${n}left${r}`,l=pn(i,[s,o,a,c]);return{t:El(l[s],!0),r:El(l[o],!0),b:El(l[a],!0),l:El(l[c],!0)}},yo=(i,e)=>`translate${Cc(i)?`(${i.x},${i.y})`:`${e?"X":"Y"}(${i})`}`,W0="paddingTop",mp="paddingRight",gp="paddingLeft",Iu="paddingBottom",Ou="marginLeft",Uu="marginRight",lc="marginBottom",qa="overflowX",$a="overflowY",Pr="width",Lr="height",ma="hidden",nM={w:0,h:0},lh=(i,e)=>e?{w:e[`${i}Width`],h:e[`${i}Height`]}:nM,iM=i=>lh("inner",i||Wn),uc=$e(lh,"offset"),ou=$e(lh,"client"),Nu=$e(lh,"scroll"),Fu=i=>{const e=parseFloat(pn(i,Pr))||0,t=parseFloat(pn(i,Lr))||0;return{w:e-Pc(e),h:t-Pc(t)}},Yi=i=>i.getBoundingClientRect(),pd=i=>!!(i&&(i[Lr]||i[Pr])),X0=(i,e)=>{const t=pd(i);return!pd(e)&&t},uh=(i,e,t,n)=>{if(i&&e){let r=!0;return vt(t,s=>{const o=n?n(i[s]):i[s],a=n?n(e[s]):e[s];o!==a&&(r=!1)}),r}return!1},q0=(i,e)=>uh(i,e,["w","h"]),$0=(i,e)=>uh(i,e,["x","y"]),rM=(i,e)=>uh(i,e,["t","r","b","l"]),Bm=(i,e,t)=>uh(i,e,[Pr,Lr],t&&(n=>Pc(n)));let Ml;const zm="passive",sM=()=>{if(_s(Ml)){Ml=!1;try{Wn.addEventListener(zm,Mi,Object.defineProperty({},zm,{get(){Ml=!0}}))}catch{}}return Ml},Y0=i=>i.split(" "),Hm=(i,e,t,n)=>{vt(Y0(e),r=>{i.removeEventListener(r,t,n)})},Vt=(i,e,t,n)=>{var r;const s=sM(),o=(r=s&&n&&n.S)!=null?r:s,a=n&&n.$||!1,c=n&&n.O||!1,l=s?{passive:o,capture:a}:a;return $e(wi,Y0(e).map(u=>{const h=c?f=>{Hm(i,u,h,a),t(f)}:t;return i.addEventListener(u,h,l),$e(Hm,i,u,h,a)}))},K0=i=>i.stopPropagation(),Gm=i=>i.preventDefault(),oM={x:0,y:0},jh=i=>{const e=i&&Yi(i);return e?{x:e.left+Wn.pageYOffset,y:e.top+Wn.pageXOffset}:oM},j0=(i,e,t)=>t?t.n?-i:t.i?e-i:i:i,aM=(i,e)=>[e&&e.i?i:0,j0(i,i,e)],lo=(i,e)=>{const{x:t,y:n}=Qi(e)?{x:e,y:e}:e||{};Qi(t)&&(i.scrollLeft=t),Qi(n)&&(i.scrollTop=n)},hh=i=>({x:i.scrollLeft,y:i.scrollTop}),Vm=(i,e)=>{vt(Ti(e)?e:[e],i)},md=i=>{const e=new Map,t=(s,o)=>{if(s){const a=e.get(s);Vm(c=>{a&&a[c?"delete":"clear"](c)},o)}else e.forEach(a=>{a.clear()}),e.clear()},n=(s,o)=>{if(Xc(s)){const l=e.get(s)||new Set;return e.set(s,l),Vm(u=>{nr(u)&&l.add(u)},o),$e(t,s,o)}U0(o)&&o&&t();const a=Cr(s),c=[];return vt(a,l=>{const u=s[l];u&&_t(c,n(l,u))}),$e(wi,c)},r=(s,o)=>{vt(ba(e.get(s)),a=>{o&&!Cu(o)?a.apply(0,o):a()})};return n(i||{}),[n,t,r]},Wm=i=>JSON.stringify(i,(e,t)=>{if(nr(t))throw 0;return t}),Xm=(i,e)=>i?`${e}`.split(".").reduce((t,n)=>t&&ah(t,n)?t[n]:void 0,i):void 0,cM={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},Z0=(i,e)=>{const t={},n=Kr(Cr(e),Cr(i));return vt(n,r=>{const s=i[r],o=e[r];if(Cc(s)&&Cc(o))pt(t[r]={},Z0(s,o)),fp(t[r])&&delete t[r];else if(ah(e,r)&&o!==s){let a=!0;if(Ti(s)||Ti(o))try{Wm(s)===Wm(o)&&(a=!1)}catch{}a&&(t[r]=o)}}),t},lM=(i,e,t)=>n=>[Xm(i,n),t||Xm(e,n)!==void 0],qc="data-overlayscrollbars",J0="os-environment",Q0=`${J0}-flexbox-glue`,uM=`${Q0}-max`,ex="os-scrollbar-hidden",Zh=`${qc}-initialize`,Ni=qc,tx=`${Ni}-overflow-x`,nx=`${Ni}-overflow-y`,ia="overflowVisible",hM="scrollbarHidden",qm="scrollbarPressed",ku="updating",Gr=`${qc}-viewport`,Jh="arrange",ix="scrollbarHidden",ra=ia,gd=`${qc}-padding`,fM=ra,$m=`${qc}-content`,_p="os-size-observer",dM=`${_p}-appear`,pM=`${_p}-listener`,mM="os-trinsic-observer",gM="os-no-css-vars",_M="os-theme-none",$n="os-scrollbar",vM=`${$n}-rtl`,xM=`${$n}-horizontal`,yM=`${$n}-vertical`,rx=`${$n}-track`,vp=`${$n}-handle`,SM=`${$n}-visible`,EM=`${$n}-cornerless`,Ym=`${$n}-transitionless`,Km=`${$n}-interaction`,jm=`${$n}-unusable`,_d=`${$n}-auto-hide`,Zm=`${_d}-hidden`,Jm=`${$n}-wheel`,MM=`${rx}-interactive`,bM=`${vp}-interactive`,sx={},ox={},TM=i=>{vt(i,e=>vt(e,(t,n)=>{sx[n]=e[n]}))},ax=(i,e,t)=>Cr(i).map(n=>{const{static:r,instance:s}=i[n],[o,a,c]=t||[],l=t?s:r;if(l){const u=t?l(o,a,e):l(e);return(c||ox)[n]=u}}),Ta=i=>ox[i],wM="__osOptionsValidationPlugin",AM="__osSizeObserverPlugin",xp="__osScrollbarsHidingPlugin",RM="__osClickScrollPlugin";let Qh;const Qm=(i,e,t,n)=>{gi(i,e);const r=ou(e),s=uc(e),o=Fu(t);return n&&Tr(e),{x:s.h-r.h+o.h,y:s.w-r.w+o.w}},CM=i=>{let e=!1;const t=us(i,ex);try{e=pn(i,jE("scrollbar-width"))==="none"||Wn.getComputedStyle(i,"::-webkit-scrollbar").getPropertyValue("display")==="none"}catch{}return t(),e},PM=(i,e)=>{pn(i,{[qa]:ma,[$a]:ma,direction:"rtl"}),lo(i,{x:0});const t=jh(i),n=jh(e);lo(i,{x:-999});const r=jh(e);return{i:t.x===n.x,n:n.x!==r.x}},LM=(i,e)=>{const t=us(i,Q0),n=Yi(i),r=Yi(e),s=Bm(r,n,!0),o=us(i,uM),a=Yi(i),c=Yi(e),l=Bm(c,a,!0);return t(),o(),s&&l},DM=()=>{const{body:i}=document,t=B0(`<div class="${J0}"><div></div></div>`)[0],n=t.firstChild,[r,,s]=md(),[o,a]=Ui({o:Qm(i,t,n),u:$0},$e(Qm,i,t,n,!0)),[c]=a(),l=CM(t),u={x:c.x===0,y:c.y===0},h={elements:{host:null,padding:!l,viewport:g=>l&&g===g.ownerDocument.body&&g,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},f=pt({},cM),d=$e(pt,{},f),_=$e(pt,{},h),m={L:c,I:u,H:l,A:pn(t,"zIndex")==="-1",P:!!dd,V:PM(t,n),U:LM(t,n),B:$e(r,"r"),j:_,N:g=>pt(h,g)&&_(),G:d,q:g=>pt(f,g)&&d(),F:pt({},h),W:pt({},f)};return In(t,"style"),Tr(t),Wn.addEventListener("resize",()=>{let g;if(!l&&(!u.x||!u.y)){const p=Ta(xp);g=!!(p?p.R():Mi)(m,o)}s("r",[g])}),m},Xn=()=>(Qh||(Qh=DM()),Qh),yp=(i,e)=>nr(e)?e.apply(0,i):e,IM=(i,e,t,n)=>{const r=_s(n)?t:n;return yp(i,r)||e.apply(0,i)},cx=(i,e,t,n)=>{const r=_s(n)?t:n,s=yp(i,r);return!!s&&(ac(s)?s:e.apply(0,i))},OM=(i,e)=>{const{nativeScrollbarsOverlaid:t,body:n}=e||{},{I:r,H:s,j:o}=Xn(),{nativeScrollbarsOverlaid:a,body:c}=o().cancel,l=t??a,u=_s(n)?c:n,h=(r.x||r.y)&&l,f=i&&(ih(u)?!s:u);return!!h||!!f},Sp=new WeakMap,UM=(i,e)=>{Sp.set(i,e)},NM=i=>{Sp.delete(i)},lx=i=>Sp.get(i),FM=(i,e,t)=>{let n=!1;const r=t?new WeakMap:!1,s=()=>{n=!0},o=a=>{if(r&&t){const c=t.map(l=>{const[u,h]=l||[];return[h&&u?(a||k0)(u,i):[],h]});vt(c,l=>vt(l[0],u=>{const h=l[1],f=r.get(u)||[];if(i.contains(u)&&h){const _=Vt(u,h.trim(),m=>{n?(_(),r.delete(u)):e(m)});r.set(u,_t(f,_))}else wi(f),r.delete(u)}))}};return o(),[s,o]},eg=(i,e,t,n)=>{let r=!1;const{X:s,Y:o,J:a,K:c,Z:l,tt:u}=n||{},h=G0(()=>r&&t(!0),{v:33,p:99}),[f,d]=FM(i,h,a),_=s||[],m=o||[],g=Kr(_,m),p=(v,y)=>{if(!Cu(y)){const M=l||Mi,T=u||Mi,E=[],C=[];let S=!1,b=!1;if(vt(y,D=>{const{attributeName:I,target:F,type:P,oldValue:U,addedNodes:V,removedNodes:k}=D,G=P==="attributes",z=P==="childList",w=i===F,L=G&&I,N=L?wn(F,I||""):null,K=L&&U!==N,j=oh(m,I)&&K;if(e&&(z||!w)){const q=G&&K,X=q&&c&&Pu(F,c),me=(X?!M(F,I,U,N):!G||q)&&!T(D,!!X,i,n);vt(V,he=>_t(E,he)),vt(k,he=>_t(E,he)),b=b||me}!e&&w&&K&&!M(F,I,U,N)&&(_t(C,I),S=S||j)}),d(D=>Om(E).reduce((I,F)=>(_t(I,k0(D,F)),Pu(F,D)?_t(I,F):I),[])),e)return!v&&b&&t(!1),[!1];if(!Cu(C)||S){const D=[Om(C),S];return!v&&t.apply(0,D),D}}},x=new ZE($e(p,!1));return[()=>(x.observe(i,{attributes:!0,attributeOldValue:!0,attributeFilter:g,subtree:e,childList:e,characterData:e}),r=!0,()=>{r&&(f(),x.disconnect(),r=!1)}),()=>{if(r)return h.m(),p(!0,x.takeRecords())}]},ux=(i,e,t)=>{const{nt:r,ot:s}=t||{},o=Ta(AM),{V:a}=Xn(),c=$e(Lc,i),[l]=Ui({o:!1,_:!0});return()=>{const u=[],f=B0(`<div class="${_p}"><div class="${pM}"></div></div>`)[0],d=f.firstChild,_=m=>{const g=m instanceof ResizeObserverEntry,p=!g&&Ti(m);let x=!1,v=!1,y=!0;if(g){const[M,,T]=l(m.contentRect),E=pd(M),C=X0(M,T);v=!T||C,x=!v&&!E,y=!x}else p?[,y]=m:v=m===!0;if(r&&y){const M=p?m[0]:Lc(f);lo(f,{x:j0(3333333,3333333,M&&a),y:3333333})}x||e({st:p?m:void 0,et:!p,ot:v})};if(Du){const m=new Du(g=>_(g.pop()));m.observe(d),_t(u,()=>{m.disconnect()})}else if(o){const[m,g]=o(d,_,s);_t(u,Kr([us(f,dM),Vt(f,"animationstart",m)],g))}else return Mi;if(r){const[m]=Ui({o:void 0},c);_t(u,Vt(f,"scroll",g=>{const p=m(),[x,v,y]=p;v&&(pp(d,"ltr rtl"),us(d,x?"rtl":"ltr"),_([!!x,v,y])),K0(g)}))}return $e(wi,_t(u,gi(i,f)))}},kM=(i,e)=>{let t;const n=c=>c.h===0||c.isIntersecting||c.intersectionRatio>0,r=Js(mM),[s]=Ui({o:!1}),o=(c,l)=>{if(c){const u=s(n(c)),[,h]=u;return h&&!l&&e(u)&&[u]}},a=(c,l)=>o(l.pop(),c);return[()=>{const c=[];if(Nm)t=new Nm($e(a,!1),{root:i}),t.observe(r),_t(c,()=>{t.disconnect()});else{const l=()=>{const u=uc(r);o(u)};_t(c,ux(r,l)()),l()}return $e(wi,_t(c,gi(i,r)))},()=>t&&a(!0,t.takeRecords())]},BM=(i,e)=>{let t,n,r,s,o;const{H:a}=Xn(),c=`[${Ni}]`,l=`[${Gr}]`,u=["tabindex"],h=["wrap","cols","rows"],f=["id","class","style","open"],d={ct:!1,rt:Lc(i.lt)},{lt:_,it:m,ut:g,ft:p,_t:x,dt:v,vt:y}=i,{U:M,B:T}=Xn(),[E]=Ui({u:q0,o:{w:0,h:0}},()=>{const L=v(ra,ia),N=v(Jh,""),K=N&&hh(m);y(ra,ia),y(Jh,""),y("",ku,!0);const j=Nu(g),q=Nu(m),X=Fu(m);return y(ra,ia,L),y(Jh,"",N),y("",ku),lo(m,K),{w:q.w+j.w+X.w,h:q.h+j.h+X.h}}),C=p?h:Kr(f,h),S=G0(e,{v:()=>t,p:()=>n,g(L,N){const[K]=L,[j]=N;return[Kr(Cr(K),Cr(j)).reduce((q,X)=>(q[X]=K[X]||j[X],q),{})]}}),b=L=>{vt(L||u,N=>{if(oh(u,N)){const K=wn(_,N);Xc(K)?wn(m,N,K):In(m,N)}})},D=(L,N)=>{const[K,j]=L,q={ht:j};return pt(d,{ct:K}),!N&&e(q),q},I=({et:L,st:N,ot:K})=>{const q=!(L&&!K&&!N)&&a?S:e,[X,ae]=N||[];N&&pt(d,{rt:X}),q({et:L||K,ot:K,gt:ae})},F=(L,N)=>{const[,K]=E(),j={bt:K};return K&&!N&&(L?e:S)(j),j},P=(L,N,K)=>{const j={wt:N};return N&&!K?S(j):x||b(L),j},[U,V]=g||!M?kM(_,D):[],k=!x&&ux(_,I,{ot:!0,nt:!0}),[G,z]=eg(_,!1,P,{Y:f,X:Kr(f,u)}),w=x&&Du&&new Du(L=>{const N=L[L.length-1].contentRect;I({et:!0,ot:X0(N,o)}),o=N});return[()=>{b(),w&&w.observe(_);const L=k&&k(),N=U&&U(),K=G(),j=T(q=>{const[,X]=E();S({yt:q,bt:X})});return()=>{w&&w.disconnect(),L&&L(),N&&N(),s&&s(),K(),j()}},({St:L,$t:N,xt:K})=>{const j={},[q]=L("update.ignoreMutation"),[X,ae]=L("update.attributes"),[me,he]=L("update.elementEvents"),[re,le]=L("update.debounce"),B=he||ae,J=N||K,Q=ce=>nr(q)&&q(ce);if(B){r&&r(),s&&s();const[ce,ge]=eg(g||m,!0,F,{X:Kr(C,X||[]),J:me,K:c,tt:(W,Re)=>{const{target:De,attributeName:qe}=W;return(!Re&&qe&&!x?WE(De,c,l):!1)||!!Yo(De,`.${$n}`)||!!Q(W)}});s=ce(),r=ge}if(le)if(S.m(),Ti(re)){const ce=re[0],ge=re[1];t=Qi(ce)&&ce,n=Qi(ge)&&ge}else Qi(re)?(t=re,n=!1):(t=!1,n=!1);if(J){const ce=z(),ge=V&&V(),W=r&&r();ce&&pt(j,P(ce[0],ce[1],J)),ge&&pt(j,D(ge[0],J)),W&&pt(j,F(W[0],J))}return j},d]},vd=(i,e,t)=>cc(i,qE(e,t)),zM=(i,e,t)=>{const n=Pc(e),[r,s]=aM(n,t),o=(s-i)/s,a=i/r,c=i/s,l=t?t.n?o:t.i?a:c:c;return vd(0,1,l)},hx=(i,e,t,n)=>{if(n){const a=t?"x":"y",{Ot:c,Ct:l}=n,u=l[a],h=c[a];return vd(0,1,u/(u+h))}const r=t?Pr:Lr,s=Yi(i)[r],o=Yi(e)[r];return vd(0,1,s/o)},tg=(i,e,t,n)=>{const r=hx(i,e,n);return 1/r*(1-r)*t},HM=(i,e,t)=>{const{j:n,A:r}=Xn(),{scrollbars:s}=n(),{slot:o}=s,{Ht:a,lt:c,it:l,zt:u,It:h,At:f,_t:d}=e,{scrollbars:_}=u?{}:i,{slot:m}=_||{},g=new Map,p=re=>dd&&new dd({source:h,axis:re}),x=p("x"),v=p("y"),y=cx([a,c,l],()=>d&&f?a:c,o,m),M=re=>d&&!f&&br(re)===l,T=re=>{g.forEach((le,B)=>{(re?oh(Ti(re)?re:[re],B):!0)&&((le||[]).forEach(Q=>{Q&&Q.cancel()}),g.delete(B))})},E=(re,le,B)=>{const J=B?us:pp;vt(re,Q=>{J(Q.Et,le)})},C=(re,le)=>{vt(re,B=>{const[J,Q]=le(B);pn(J,Q)})},S=re=>{const le=re||0;return isFinite(le)?le:0},b=re=>`${(S(re)*100).toFixed(3)}%`,D=re=>`${S(re)}px`,I=(re,le,B)=>{C(re,J=>{const{Tt:Q,kt:ce}=J;return[Q,{[B?Pr:Lr]:b(hx(Q,ce,B,le))}]})},F=(re,le,B)=>{C(re,J=>{const{Tt:Q,kt:ce,Et:ge}=J,{V:W}=Xn(),Re=B?"x":"y",De=B?"Left":"Top",{Ot:qe}=le,Xe=Lc(ge),lt=tg(Q,ce,zM(h[`scroll${De}`],qe[Re],B&&Xe&&W),B);return[Q,{transform:yo(b(lt),B)}]})},P=re=>{const{Et:le}=re,B=M(le)&&le,{x:J,y:Q}=hh(h);return[B,{transform:B?yo({x:D(J),y:D(Q)}):""}]},U=(re,le,B,J)=>le&&re.animate(B,{timeline:le,composite:J}),V=(re,le,B,J)=>U(re,le,{transform:[yo(D(0),J),yo(D(cc(0,B-.5)),J)]},"add"),k=[],G=[],z=[],w=(re,le,B)=>{const J=U0(B),Q=J?B:!0,ce=J?!B:!0;Q&&E(G,re,le),ce&&E(z,re,le)},L=re=>{I(G,re,!0),I(z,re)},N=re=>{!x&&!v&&(F(G,re,!0),F(z,re))},K=()=>{const re=(le,{Et:B,kt:J,Tt:Q})=>{const ce=le&&Lc(B),ge=$e(tg,Q,J),W=ge(ce?1:0,le),Re=ge(ce?0:1,le);T(Q),g.set(Q,[U(Q,le?x:v,pt({transform:[yo(b(W),le),yo(b(Re),le)]},ce?{clear:["left"]}:{}))])};G.forEach($e(re,!0)),z.forEach($e(re,!1))},j=()=>{!v&&!v&&(d&&C(G,P),d&&C(z,P))},q=({Ot:re})=>{Kr(z,G).forEach(({Et:le})=>{T(le),M(le)&&g.set(le,[V(le,x,re.x,!0),V(le,v,re.y)])})},X=re=>{const le=re?xM:yM,B=re?G:z,J=Cu(B)?Ym:"",Q=Js(`${$n} ${le} ${J}`),ce=Js(rx),ge=Js(vp),W={Et:Q,kt:ce,Tt:ge};return r||us(Q,gM),_t(B,W),_t(k,[gi(Q,ce),gi(ce,ge),$e(Tr,Q),T,t(W,w,re)]),W},ae=$e(X,!0),me=$e(X,!1),he=()=>(gi(y,G[0].Et),gi(y,z[0].Et),Lu(()=>{w(Ym)},300),$e(wi,k));return ae(),me(),[{Dt:L,Mt:N,Rt:K,Lt:q,Pt:j,Vt:w,Ut:{P:x,Bt:G,jt:ae,Nt:$e(C,G)},Gt:{P:v,Bt:z,jt:me,Nt:$e(C,z)}},he]},GM=(i,e,t)=>{const{lt:n,It:r,qt:s}=e,o=(a,c)=>{const{Tt:l,kt:u}=a,h=`scroll${c?"Left":"Top"}`,f=`client${c?"X":"Y"}`,d=c?Pr:Lr,_=c?"left":"top",m=c?"w":"h",g=c?"x":"y",p="pointerup pointerleave pointercancel lostpointercapture",x=(v,y)=>M=>{const{Ot:T}=t,E=uc(u)[m]-uc(l)[m],S=y*M/E*T[g];r[h]=v+S};return Vt(u,"pointerdown",v=>{const y=Yo(v.target,`.${vp}`)===l,M=y?l:u,T=i.scrollbars,{button:E,isPrimary:C,pointerType:S}=v,{pointers:b}=T,D=E===0&&C&&T[y?"dragScroll":"clickScroll"]&&(b||[]).includes(S);if(Zs(n,Ni,qm,!0),D){const I=!y&&v.shiftKey,F=$e(Yi,l),P=$e(Yi,u),U=(ae,me)=>(ae||F())[_]-(me||P())[_],V=Pc(Yi(r)[d])/uc(r)[m]||1,k=x(r[h]||0,1/V),G=v[f],z=F(),w=P(),L=z[d],N=U(z,w)+L/2,K=G-w[_],j=y?0:K-N,q=ae=>{wi(X),M.releasePointerCapture(ae.pointerId)},X=[$e(Zs,n,Ni,qm),Vt(s,p,q),Vt(s,"selectstart",ae=>Gm(ae),{S:!1}),Vt(u,p,q),Vt(u,"pointermove",ae=>{const me=ae[f]-G;(y||I)&&k(j+me)})];if(I)k(j);else if(!y){const ae=Ta(RM);ae&&_t(X,ae(k,U,j,L,K))}M.setPointerCapture(v.pointerId)}})};return(a,c,l)=>{const{Et:u}=a,[h,f]=Is(333),d=!!r.scrollBy;let _=!0;return $e(wi,[Vt(u,"pointerenter",()=>{c(Km,!0)}),Vt(u,"pointerleave pointercancel",()=>{c(Km,!1)}),Vt(u,"wheel",m=>{const{deltaX:g,deltaY:p,deltaMode:x}=m;d&&_&&x===0&&br(u)===n&&r.scrollBy({left:g,top:p,behavior:"smooth"}),_=!1,c(Jm,!0),h(()=>{_=!0,c(Jm)}),Gm(m)},{S:!1,$:!0}),Vt(u,"mousedown",$e(Vt,s,"click",K0,{O:!0,$:!0}),{$:!0}),o(a,l),f])}},VM=(i,e,t,n,r,s)=>{let o,a,c,l,u,h=Mi,f=0;const[d,_]=Is(),[m,g]=Is(),[p,x]=Is(100),[v,y]=Is(100),[M,T]=Is(100),[E,C]=Is(()=>f),[S,b]=HM(i,r,GM(e,r,n)),{lt:D,Ft:I,At:F}=r,{Vt:P,Dt:U,Mt:V,Rt:k,Lt:G,Pt:z}=S,w=q=>{P(_d,q,!0),P(_d,q,!1)},L=(q,X)=>{if(C(),q)P(Zm);else{const ae=$e(P,Zm,!0);f>0&&!X?E(ae):ae()}},N=q=>q.pointerType==="mouse",K=q=>{N(q)&&(l=a,l&&L(!0))},j=[x,C,y,T,g,_,()=>h(),Vt(D,"pointerover",K,{O:!0}),Vt(D,"pointerenter",K),Vt(D,"pointerleave",q=>{N(q)&&(l=!1,a&&L(!1))}),Vt(D,"pointermove",q=>{N(q)&&o&&d(()=>{x(),L(!0),v(()=>{o&&L(!1)})})}),Vt(I,"scroll",q=>{m(()=>{V(n),c&&L(!0),p(()=>{c&&!l&&L(!1)})}),s(q),z()})];return[()=>$e(wi,_t(j,b())),({St:q,xt:X,Wt:ae,Xt:me})=>{const{Yt:he,Jt:re,Kt:le}=me||{},{gt:B,ot:J}=ae||{},{rt:Q}=t,{I:ce}=Xn(),{Ot:ge,Zt:W,Qt:Re}=n,[De,qe]=q("showNativeOverlaidScrollbars"),[Xe,lt]=q("scrollbars.theme"),[O,A]=q("scrollbars.visibility"),[$,oe]=q("scrollbars.autoHide"),[ue,de]=q("scrollbars.autoHideSuspend"),[Pe]=q("scrollbars.autoHideDelay"),[xe,be]=q("scrollbars.dragScroll"),[Ie,Je]=q("scrollbars.clickScroll"),_e=J&&!X,it=Re.x||Re.y,ze=he||re||B||X,Be=le||A,Le=De&&ce.x&&ce.y,fe=(je,H)=>{const ye=O==="visible"||O==="auto"&&je==="scroll";return P(SM,ye,H),ye};if(f=Pe,_e&&(ue&&it?(w(!1),h(),M(()=>{h=Vt(I,"scroll",$e(w,!0),{O:!0})})):w(!0)),qe&&P(_M,Le),lt&&(P(u),P(Xe,!0),u=Xe),de&&!ue&&w(!0),oe&&(o=$==="move",a=$==="leave",c=$!=="never",L(!c,!0)),be&&P(bM,xe),Je&&P(MM,Ie),Be){const je=fe(W.x,!0),H=fe(W.y,!1);P(EM,!(je&&H))}ze&&(U(n),V(n),k(n),z(),G(n),P(jm,!ge.x,!0),P(jm,!ge.y,!1),P(vM,Q&&!F))},{},S]},WM=i=>{const e=Xn(),{j:t,H:n}=e,r=Ta(xp),s=r&&r.C,{elements:o}=t(),{host:a,padding:c,viewport:l,content:u}=o,h=ac(i),f=h?{}:i,{elements:d}=f,{host:_,padding:m,viewport:g,content:p}=d||{},x=h?i:f.target,v=Pu(x,"textarea"),y=x.ownerDocument,M=y.documentElement,T=x===y.body,E=y.defaultView,C=$e(IM,[x]),S=$e(cx,[x]),b=$e(yp,[x]),D=$e(Js,""),I=$e(C,D,l),F=$e(S,D,u),P=I(g),U=P===x,V=U&&T,k=!U&&F(p),G=!U&&ac(P)&&P===k,z=G&&!!b(u),w=z?I():P,L=z?k:F(),K=V?M:G?w:P,j=v?C(D,a,_):x,q=V?K:j,X=G?L:k,ae=y.activeElement,me=!U&&E.top===E&&ae===x,he={Ht:x,lt:q,it:K,tn:!U&&S(D,c,m),ut:X,nn:!U&&!n&&s&&s(e),It:V?M:K,Ft:V?y:K,sn:E,qt:y,ft:v,At:T,zt:h,_t:U,en:G,dt:(A,$)=>GE(K,U?Ni:Gr,U?$:A),vt:(A,$,oe)=>Zs(K,U?Ni:Gr,U?$:A,oe)},re=Cr(he).reduce((A,$)=>{const oe=he[$];return _t(A,oe&&ac(oe)&&!br(oe)?oe:!1)},[]),le=A=>A?oh(re,A):null,{Ht:B,lt:J,tn:Q,it:ce,ut:ge,nn:W}=he,Re=[()=>{In(J,Ni),In(J,Zh),In(B,Zh),T&&(In(M,Ni),In(M,Zh))}],De=v&&le(J);let qe=v?B:ud([ge,ce,Q,J,B].find(A=>le(A)===!1));const Xe=V?B:ge||ce,lt=$e(wi,Re);return[he,()=>{wn(J,Ni,U?"viewport":"host"),wn(Q,gd,""),wn(ge,$m,""),U||wn(ce,Gr,"");const A=T&&!U?us(br(x),ex):Mi,$=oe=>{gi(br(oe),ud(oe)),Tr(oe)};if(De&&(Um(B,J),_t(Re,()=>{Um(J,B),Tr(J)})),gi(Xe,qe),gi(J,Q),gi(Q||J,!U&&ce),gi(ce,ge),_t(Re,()=>{A(),In(Q,gd),In(ge,$m),In(ce,tx),In(ce,nx),In(ce,Gr),le(ge)&&$(ge),le(ce)&&$(ce),le(Q)&&$(Q)}),n&&!U&&(Zs(ce,Gr,ix,!0),_t(Re,$e(In,ce,Gr))),W&&(XE(ce,W),_t(Re,$e(Tr,W))),me){const oe="tabindex",ue=wn(ce,oe);wn(ce,oe,"-1"),ce.focus();const de=()=>ue?wn(ce,oe,ue):In(ce,oe),Pe=Vt(y,"pointerdown keydown",()=>{de(),Pe()});_t(Re,[de,Pe])}else ae&&ae.focus&&ae.focus();return qe=0,lt},lt]},XM=({ut:i})=>({Wt:e,cn:t,xt:n})=>{const{U:r}=Xn(),{ht:s}=e||{},{ct:o}=t;(i||!r)&&(s||n)&&pn(i,{[Lr]:o?"":"100%"})},qM=({lt:i,tn:e,it:t,_t:n},r)=>{const[s,o]=Ui({u:rM,o:km()},$e(km,i,"padding",""));return({St:a,Wt:c,cn:l,xt:u})=>{let[h,f]=o(u);const{H:d,U:_}=Xn(),{et:m,bt:g,gt:p}=c||{},{rt:x}=l,[v,y]=a("paddingAbsolute");(m||f||(u||!_&&g))&&([h,f]=s(u));const T=!n&&(y||p||f);if(T){const E=!v||!e&&!d,C=h.r+h.l,S=h.t+h.b,b={[Uu]:E&&!x?-C:0,[lc]:E?-S:0,[Ou]:E&&x?-C:0,top:E?-h.t:0,right:E?x?-h.r:"auto":0,left:E?x?"auto":-h.l:0,[Pr]:E?`calc(100% + ${C}px)`:""},D={[W0]:E?h.t:0,[mp]:E?h.r:0,[Iu]:E?h.b:0,[gp]:E?h.l:0};pn(e||t,b),pn(t,D),pt(r,{tn:h,rn:!E,k:e?D:pt({},b,D)})}return{ln:T}}},$M=({lt:i,tn:e,it:t,nn:n,_t:r,vt:s,At:o,sn:a},c)=>{const l=$e(cc,0),u="visible",h=42,f={u:q0,o:{w:0,h:0}},d={u:$0,o:{x:ma,y:ma}},_=(N,K)=>{const j=Wn.devicePixelRatio%1!==0?1:0,q={w:l(N.w-K.w),h:l(N.h-K.h)};return{w:q.w>j?q.w:0,h:q.h>j?q.h:0}},m=N=>N.indexOf(u)===0,{L:g,U:p,H:x,I:v}=Xn(),y=Ta(xp),M=!r&&!x&&(v.x||v.y),T=o&&r,[E,C]=Ui(f,$e(Fu,t)),[S,b]=Ui(f,$e(Nu,t)),[D,I]=Ui(f),[F,P]=Ui(f),[U]=Ui(d),V=(N,K)=>{if(pn(t,{[Lr]:""}),K){const{rn:j,tn:q}=c,{an:X,D:ae}=N,me=Fu(i),he=ou(i),re=pn(t,"boxSizing")==="content-box",le=j||re?q.b+q.t:0,B=!(v.x&&re);pn(t,{[Lr]:he.h+me.h+(X.x&&B?ae.x:0)-le})}},k=(N,K)=>{const j=!x&&!N?h:0,q=(Q,ce,ge)=>{const W=pn(t,Q),De=(K?K[Q]:W)==="scroll";return[W,De,De&&!x?ce?j:ge:0,ce&&!!j]},[X,ae,me,he]=q(qa,v.x,g.x),[re,le,B,J]=q($a,v.y,g.y);return{Zt:{x:X,y:re},an:{x:ae,y:le},D:{x:me,y:B},M:{x:he,y:J}}},G=(N,K,j,q)=>{const X=(le,B)=>{const J=m(le),Q=B&&J&&le.replace(`${u}-`,"")||"";return[B&&!J?le:"",m(Q)?"hidden":Q]},[ae,me]=X(j.x,K.x),[he,re]=X(j.y,K.y);return q[qa]=me&&he?me:ae,q[$a]=re&&ae?re:he,k(N,q)},z=(N,K,j,q)=>{const{D:X,M:ae}=N,{x:me,y:he}=ae,{x:re,y:le}=X,{k:B}=c,J=K?Ou:Uu,Q=K?gp:mp,ce=B[J],ge=B[lc],W=B[Q],Re=B[Iu];q[Pr]=`calc(100% + ${le+ce*-1}px)`,q[J]=-le+ce,q[lc]=-re+ge,j&&(q[Q]=W+(he?le:0),q[Iu]=Re+(me?re:0))},[w,L]=y?y.T(M,p,t,n,c,k,z):[()=>M,()=>[Mi]];return({St:N,Wt:K,cn:j,xt:q},{ln:X})=>{const{et:ae,wt:me,bt:he,ht:re,gt:le,yt:B}=K||{},{ct:J,rt:Q}=j,[ce,ge]=N("showNativeOverlaidScrollbars"),[W,Re]=N("overflow"),De=ce&&v.x&&v.y,qe=!r&&!p&&(ae||he||me||ge||re),Xe=ae||X||he||le||B||ge,lt=m(W.x),O=m(W.y),A=lt||O;let $=C(q),oe=b(q),ue=I(q),de=P(q),Pe;if(ge&&x&&s(ix,hM,!De),qe&&(Pe=k(De),V(Pe,J)),Xe){A&&s(ra,ia,!1);const[pe,se]=L(De,Q,Pe),[ve,Fe]=$=E(q),[Te,Ce]=oe=S(q),Ye=ou(t);let He=Te,Ee=Ye;pe(),(Ce||Fe||ge)&&se&&!De&&w(se,Te,ve,Q)&&(Ee=ou(t),He=Nu(t));const Ke=iM(a),We={w:l(cc(Te.w,He.w)+ve.w),h:l(cc(Te.h,He.h)+ve.h)},Qe={w:l((T?Ke.w:Ee.w+l(Ye.w-Te.w))+ve.w),h:l((T?Ke.h:Ee.h+l(Ye.h-Te.h))+ve.h)};de=F(Qe),ue=D(_(We,Qe),q)}const[xe,be]=de,[Ie,Je]=ue,[_e,it]=oe,[ze,Be]=$,Le={x:Ie.w>0,y:Ie.h>0},fe=lt&&O&&(Le.x||Le.y)||lt&&Le.x&&!Le.y||O&&Le.y&&!Le.x;if(X||le||B||Be||it||be||Je||Re||ge||qe||Xe){const pe={[Uu]:0,[lc]:0,[Ou]:0,[Pr]:"",[qa]:"",[$a]:""},se=G(De,Le,W,pe),ve=w(se,_e,ze,Q);r||z(se,Q,ve,pe),qe&&V(se,J),r?(wn(i,tx,pe[qa]),wn(i,nx,pe[$a])):pn(t,pe)}Zs(i,Ni,ia,fe),Zs(e,gd,fM,fe),r||Zs(t,Gr,ra,A);const[H,ye]=U(k(De).Zt);return pt(c,{Zt:H,Ct:{x:xe.w,y:xe.h},Ot:{x:Ie.w,y:Ie.h},Qt:Le}),{Kt:ye,Yt:be,Jt:Je}}},YM=i=>{const[e,t,n]=WM(i),r={tn:{t:0,r:0,b:0,l:0},rn:!1,k:{[Uu]:0,[lc]:0,[Ou]:0,[W0]:0,[mp]:0,[Iu]:0,[gp]:0},Ct:{x:0,y:0},Ot:{x:0,y:0},Zt:{x:ma,y:ma},Qt:{x:!1,y:!1}},{Ht:s,it:o,vt:a,_t:c}=e,{H:l,I:u,U:h}=Xn(),f=!l&&(u.x||u.y),d=[XM(e),qM(e,r),$M(e,r)];return[t,_=>{const m={},p=(f||!h)&&hh(o);return a("",ku,!0),vt(d,x=>{pt(m,x(_,m)||{})}),a("",ku),lo(o,p),!c&&lo(s,0),m},r,e,n]},KM=(i,e,t,n)=>{const[r,s,o,a,c]=YM(i),[l,u,h]=BM(a,p=>{g({},p)}),[f,d,,_]=VM(i,e,h,o,a,n),m=p=>Cr(p).some(x=>!!p[x]),g=(p,x)=>{const{un:v,xt:y,$t:M,fn:T}=p,E=v||{},C=!!y,S={St:lM(e,E,C),un:E,xt:C};if(T)return d(S),!1;const b=x||u(pt({},S,{$t:M})),D=s(pt({},S,{cn:h,Wt:b}));d(pt({},S,{Wt:b,Xt:D}));const I=m(b),F=m(D),P=I||F||!fp(E)||C;return P&&t(p,{Wt:b,Xt:D}),P};return[()=>{const{Ht:p,it:x,qt:v,At:y}=a,M=y?v.documentElement:p,T=hh(M),E=[l(),r(),f()];return lo(x,T),$e(wi,E)},g,()=>({_n:h,dn:o}),{vn:a,hn:_},c]},ga=(i,e,t)=>{const{G:n}=Xn(),r=ac(i),s=r?i:i.target,o=lx(s);if(e&&!o){let a=!1;const c=[],l={},u=b=>{const D=N0(b,!0),I=Ta(wM);return I?I(D,!0):D},h=pt({},n(),u(e)),[f,d,_]=md(),[m,g,p]=md(t),x=(b,D)=>{p(b,D),_(b,D)},[v,y,M,T,E]=KM(i,h,({un:b,xt:D},{Wt:I,Xt:F})=>{const{et:P,gt:U,ht:V,bt:k,wt:G,ot:z}=I,{Yt:w,Jt:L,Kt:N}=F;x("updated",[S,{updateHints:{sizeChanged:!!P,directionChanged:!!U,heightIntrinsicChanged:!!V,overflowEdgeChanged:!!w,overflowAmountChanged:!!L,overflowStyleChanged:!!N,contentMutation:!!k,hostMutation:!!G,appear:!!z},changedOptions:b||{},force:!!D}])},b=>x("scroll",[S,b])),C=b=>{NM(s),wi(c),a=!0,x("destroyed",[S,b]),d(),g()},S={options(b,D){if(b){const I=D?n():{},F=Z0(h,pt(I,u(b)));fp(F)||(pt(h,F),y({un:F}))}return pt({},h)},on:m,off:(b,D)=>{b&&D&&g(b,D)},state(){const{_n:b,dn:D}=M(),{rt:I}=b,{Ct:F,Ot:P,Zt:U,Qt:V,tn:k,rn:G}=D;return pt({},{overflowEdge:F,overflowAmount:P,overflowStyle:U,hasOverflow:V,padding:k,paddingAbsolute:G,directionRTL:I,destroyed:a})},elements(){const{Ht:b,lt:D,tn:I,it:F,ut:P,It:U,Ft:V}=T.vn,{Ut:k,Gt:G}=T.hn,z=L=>{const{Tt:N,kt:K,Et:j}=L;return{scrollbar:j,track:K,handle:N}},w=L=>{const{Bt:N,jt:K}=L,j=z(N[0]);return pt({},j,{clone:()=>{const q=z(K());return y({fn:!0}),q}})};return pt({},{target:b,host:D,padding:I||F,viewport:F,content:P||F,scrollOffsetElement:U,scrollEventElement:V,scrollbarHorizontal:w(k),scrollbarVertical:w(G)})},update:b=>y({xt:b,$t:!0}),destroy:$e(C,!1),plugin:b=>l[Cr(b)[0]]};return _t(c,[E]),UM(s,S),ax(sx,ga,[S,f,l]),OM(T.vn.At,!r&&i.cancel)?(C(!0),S):(_t(c,v()),x("initialized",[S]),S.update(!0),S)}return o};ga.plugin=i=>{const e=Ti(i),t=e?i:[i],n=t.map(r=>ax(r,ga)[0]);return TM(t),e?n:n[0]};ga.valid=i=>{const e=i&&i.elements,t=nr(e)&&e();return Ru(t)&&!!lx(t.target)};ga.env=()=>{const{L:i,I:e,H:t,V:n,U:r,A:s,P:o,F:a,W:c,j:l,N:u,G:h,q:f}=Xn();return pt({},{scrollbarsSize:i,scrollbarsOverlaid:e,scrollbarsHiding:t,rtlScrollBehavior:n,flexboxGlue:r,cssCustomProperties:s,scrollTimeline:o,staticDefaultInitialization:a,staticDefaultOptions:c,getDefaultInitialization:l,setDefaultInitialization:u,getDefaultOptions:h,setDefaultOptions:f})};Ae.registerPlugin(Ma);Ae.registerPlugin(Se);class jM{constructor(){ie(this,"lenis");this.lenis=this.createLenis(),this.createOverlayScrollbarsCommons()}createLenis(){if(!Im.isOS("windows")||at.isTouch)return;const e=new NE;return e.on("scroll",Se.update),Ae.ticker.add(t=>{e.raf(t*1e3)}),Ae.ticker.lagSmoothing(0),e}createOverlayScrollbarsCommons(){const e=t=>document.querySelector(t);[document.body,e(".menu__main")].forEach(t=>{this.createOverlayScrollbars(t)})}createOverlayScrollbarsPage(e){return Array.from(e.querySelectorAll("[data-lenis-prevent]")).map(n=>this.createOverlayScrollbars(n))}createOverlayScrollbars(e){if(!(!Im.isOS("windows")&&at.isTouch))return ga(e,{scrollbars:{autoHide:"scroll"},overflow:{x:"hidden"}})}onBodyScroll(){var e;this.lenis?this.lenis.start():(document.body.style.removeProperty("overflow"),(e=document.querySelector("html"))==null||e.style.removeProperty("overflow"))}offBodyScroll(){var e;this.lenis?this.lenis.stop():(document.body.style.setProperty("overflow","hidden"),(e=document.querySelector("html"))==null||e.style.setProperty("overflow","hidden"))}async toTop(e=0){await Ae.to(window,{scrollTo:{y:0},duration:e,ease:"power2.out"})}}const Vs=new jM;class ZM{constructor(){ie(this,"el",document.querySelector(".menu"));ie(this,"opener",this.el.querySelector(".menu__button"));this.addEvents()}addEvents(){this.opener.addEventListener("click",()=>{this.isOpen?this.close():this.open()})}open(){this.el.classList.add("menu--open"),this.opener.classList.add("menu__button--open"),Bu.on(),Vs.offBodyScroll()}close(e=.3){this.opener.classList.remove("menu__button--open");const t=this.el.querySelector(".menu__body"),n=Ae.timeline();n.to(t,{opacity:0,duration:e,ease:"power1.out"}),n.eventCallback("onComplete",()=>{this.el.classList.remove("menu--open"),t.style.removeProperty("opacity")}),Bu.off(),Vs.onBodyScroll()}enable(e){this.el.classList.toggle("disabled",!e)}get isOpen(){return this.el.classList.contains("menu--open")}}const Qs=new ZM;class JM{constructor(){ie(this,"el",document.querySelector(".filter"));this.addEvents()}addEvents(){this.el.addEventListener("click",()=>{Qs.close()})}on(){this.el.classList.toggle("active",!0)}off(){this.el.classList.toggle("active",!1)}}const Bu=new JM;class QM{constructor(){ie(this,"el",document.querySelector(".header"));this.addEvents()}addEvents(){this.el.querySelectorAll(".header__link").forEach(e=>{e.addEventListener("mouseenter",()=>{Bu.on()}),e.addEventListener("mouseleave",()=>{Bu.off()})})}changeTheme(e){this.el.classList.toggle("header--light",e==="light")}enable(e){this.el.classList.toggle("disabled",!e)}}const ln=new QM;Ae.registerPlugin(Se);class eb{constructor(){ie(this,"el",document.querySelector(".footer"));ie(this,"headerFadeAnimation");this.headerFadeAnimation=this.createHeaderFadeAnimation()}createHeaderFadeAnimation(){return Se.create({trigger:this.el,start:"top top",end:"bottom top",onEnter:()=>{ln.enable(!1),Qs.enable(!1)},onLeaveBack:()=>{ln.enable(!0),Qs.enable(!0)}})}refreshAnimaiton(){this.headerFadeAnimation.refresh()}}const tb=new eb;class nb{constructor(){Array.from(document.querySelectorAll(".fill-circle")).filter(t=>!t.closest('[data-barba="container"]')).forEach(t=>{this.attachMouseAnimation(t)})}attachMouseAnimationPage(e,t){e.querySelectorAll(".fill-circle").forEach(n=>{this.attachMouseAnimation(n,t)})}attachMouseAnimation(e,t){at.isTouch||e.addEventListener("mousemove",n=>{const r=e.getBoundingClientRect(),s=(n.clientX-r.x)/r.width,o=(n.clientY-r.y)/r.height;e.style.setProperty("--x",`${s*100}%`),e.style.setProperty("--y",`${o*100}%`)},{signal:t})}}const ib=new nb;let rb=class{constructor(){ie(this,"el",document.querySelector(".cover"))}async in(){return await Ae.to(this.el,{"--progress":1,duration:.5,ease:"power2.in",onComplete:()=>{this.el.classList.add("cover--on"),this.el.style.setProperty("--progress","0")}})}out(e=0){return this.el.classList.add("cover--on"),this.el.style.setProperty("--progress","0"),Ae.to(this.el,{"--progress":1,duration:.8,delay:e,ease:"power2.in",onComplete:()=>{this.el.classList.remove("cover--on"),this.el.classList.remove("cover--first"),this.el.style.setProperty("--progress","0")}})}};const ef=new rb;function sb(i,e){return Math.pow(i,e)}function Ya(i){return sb(i,3)}function ob(i){return 1-Math.cos(i*Math.PI/2)}function fx(i,e){return 1-Math.pow(1-i,e)}function ab(i){return fx(i,3)}function ng(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ep="158",cb=0,ig=1,lb=2,dx=1,ub=2,fr=3,hs=0,Hn=1,Xi=2,rs=0,sa=1,rg=2,sg=3,og=4,hb=5,Ns=100,fb=101,db=102,ag=103,cg=104,pb=200,mb=201,gb=202,_b=203,xd=204,yd=205,vb=206,xb=207,yb=208,Sb=209,Eb=210,Mb=211,bb=212,Tb=213,wb=214,Ab=0,Rb=1,Cb=2,zu=3,Pb=4,Lb=5,Db=6,Ib=7,px=0,Ob=1,Ub=2,ss=0,Nb=1,Fb=2,kb=3,Bb=4,zb=5,mx=300,_a=301,va=302,Sd=303,Ed=304,fh=306,Md=1e3,Fi=1001,bd=1002,An=1003,lg=1004,tf=1005,pi=1006,Hb=1007,Dc=1008,os=1009,Gb=1010,Vb=1011,Mp=1012,gx=1013,jr=1014,Zr=1015,Ic=1016,_x=1017,vx=1018,eo=1020,Wb=1021,ki=1023,Xb=1024,qb=1025,to=1026,xa=1027,$b=1028,xx=1029,Yb=1030,yx=1031,Sx=1033,nf=33776,rf=33777,sf=33778,of=33779,ug=35840,hg=35841,fg=35842,dg=35843,Kb=36196,pg=37492,mg=37496,gg=37808,_g=37809,vg=37810,xg=37811,yg=37812,Sg=37813,Eg=37814,Mg=37815,bg=37816,Tg=37817,wg=37818,Ag=37819,Rg=37820,Cg=37821,af=36492,Pg=36494,Lg=36495,jb=36283,Dg=36284,Ig=36285,Og=36286,Ex=3e3,no=3001,Zb=3200,Jb=3201,Qb=0,eT=1,_i="",sn="srgb",Dr="srgb-linear",bp="display-p3",dh="display-p3-linear",Hu="linear",Rt="srgb",Gu="rec709",Vu="p3",So=7680,Ug=519,tT=512,nT=513,iT=514,rT=515,sT=516,oT=517,aT=518,cT=519,Ng=35044,Fg="300 es",Td=1035,xr=2e3,Wu=2001;class wa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kg=1234567;const hc=Math.PI/180,Oc=180/Math.PI;function Aa(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function Rn(i,e,t){return Math.max(e,Math.min(t,i))}function Tp(i,e){return(i%e+e)%e}function lT(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function uT(i,e,t){return i!==e?(t-i)/(e-i):0}function fc(i,e,t){return(1-t)*i+t*e}function hT(i,e,t,n){return fc(i,e,1-Math.exp(-t*n))}function fT(i,e=1){return e-Math.abs(Tp(i,e*2)-e)}function dT(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function pT(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function mT(i,e){return i+Math.floor(Math.random()*(e-i+1))}function gT(i,e){return i+Math.random()*(e-i)}function _T(i){return i*(.5-Math.random())}function vT(i){i!==void 0&&(kg=i);let e=kg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xT(i){return i*hc}function yT(i){return i*Oc}function wd(i){return(i&i-1)===0&&i!==0}function ST(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Xu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ET(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),_=o((n-e)/2);switch(r){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*_,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*_,a*l);break;case"ZYZ":i.set(c*_,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function zo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const au={DEG2RAD:hc,RAD2DEG:Oc,generateUUID:Aa,clamp:Rn,euclideanModulo:Tp,mapLinear:lT,inverseLerp:uT,lerp:fc,damp:hT,pingpong:fT,smoothstep:dT,smootherstep:pT,randInt:mT,randFloat:gT,randFloatSpread:_T,seededRandom:vT,degToRad:xT,radToDeg:yT,isPowerOfTwo:wd,ceilPowerOfTwo:ST,floorPowerOfTwo:Xu,setQuaternionFromProperEuler:ET,normalize:Sn,denormalize:zo};class bt{constructor(e=0,t=0){bt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,n,r,s,o,a,c,l){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],m=r[0],g=r[3],p=r[6],x=r[1],v=r[4],y=r[7],M=r[2],T=r[5],E=r[8];return s[0]=o*m+a*x+c*M,s[3]=o*g+a*v+c*T,s[6]=o*p+a*y+c*E,s[1]=l*m+u*x+h*M,s[4]=l*g+u*v+h*T,s[7]=l*p+u*y+h*E,s[2]=f*m+d*x+_*M,s[5]=f*g+d*v+_*T,s[8]=f*p+d*y+_*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,_=t*h+n*f+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return e[0]=h*m,e[1]=(r*l-u*n)*m,e[2]=(a*n-r*o)*m,e[3]=f*m,e[4]=(u*t-r*c)*m,e[5]=(r*s-a*t)*m,e[6]=d*m,e[7]=(n*c-l*t)*m,e[8]=(o*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(cf.makeScale(e,t)),this}rotate(e){return this.premultiply(cf.makeRotation(-e)),this}translate(e,t){return this.premultiply(cf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cf=new ot;function Mx(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Uc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function MT(){const i=Uc("canvas");return i.style.display="block",i}const Bg={};function dc(i){i in Bg||(Bg[i]=!0,console.warn(i))}const zg=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hg=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bl={[Dr]:{transfer:Hu,primaries:Gu,toReference:i=>i,fromReference:i=>i},[sn]:{transfer:Rt,primaries:Gu,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[dh]:{transfer:Hu,primaries:Vu,toReference:i=>i.applyMatrix3(Hg),fromReference:i=>i.applyMatrix3(zg)},[bp]:{transfer:Rt,primaries:Vu,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Hg),fromReference:i=>i.applyMatrix3(zg).convertLinearToSRGB()}},bT=new Set([Dr,dh]),xt={enabled:!0,_workingColorSpace:Dr,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!bT.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=bl[e].toReference,r=bl[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return bl[i].primaries},getTransfer:function(i){return i===_i?Hu:bl[i].transfer}};function oa(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function lf(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Eo;class bx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Eo===void 0&&(Eo=Uc("canvas")),Eo.width=e.width,Eo.height=e.height;const n=Eo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Eo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Uc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=oa(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oa(t[n]/255)*255):t[n]=oa(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let TT=0;class Tx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TT++}),this.uuid=Aa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(uf(r[o].image)):s.push(uf(r[o]))}else s=uf(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function uf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bx.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wT=0;class Gn extends wa{constructor(e=Gn.DEFAULT_IMAGE,t=Gn.DEFAULT_MAPPING,n=Fi,r=Fi,s=pi,o=Dc,a=ki,c=os,l=Gn.DEFAULT_ANISOTROPY,u=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wT++}),this.uuid=Aa(),this.name="",this.source=new Tx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(dc("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===no?sn:_i),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Md:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Md:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return dc("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===sn?no:Ex}set encoding(e){dc("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===no?sn:_i}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=mx;Gn.DEFAULT_ANISOTROPY=1;class cn{constructor(e=0,t=0,n=0,r=1){cn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],_=c[9],m=c[2],g=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(_+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,y=(d+1)/2,M=(p+1)/2,T=(u+f)/4,E=(h+m)/4,C=(_+g)/4;return v>y&&v>M?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=T/n,s=E/n):y>M?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=T/r,s=C/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=E/s,r=C/s),this.set(n,r,s,t),this}let x=Math.sqrt((g-_)*(g-_)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(g-_)/x,this.y=(h-m)/x,this.z=(f-u)/x,this.w=Math.acos((l+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AT extends wa{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new cn(0,0,e,t),this.scissorTest=!1,this.viewport=new cn(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(dc("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===no?sn:_i),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Gn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Tx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class uo extends AT{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wx extends Gn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class RT extends Gn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $c{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],d=s[o+1],_=s[o+2],m=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=m;return}if(h!==m||c!==f||l!==d||u!==_){let g=1-a;const p=c*f+l*d+u*_+h*m,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const M=Math.sqrt(v),T=Math.atan2(M,p*x);g=Math.sin(g*T)/M,a=Math.sin(a*T)/M}const y=a*x;if(c=c*g+f*y,l=l*g+d*y,u=u*g+_*y,h=h*g+m*y,g===1-a){const M=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=M,l*=M,u*=M,h*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*h+c*d-l*f,e[t+1]=c*_+u*f+l*h-a*d,e[t+2]=l*_+u*d+a*f-c*h,e[t+3]=u*_-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),h=a(s/2),f=c(n/2),d=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"YZX":this._x=f*u*h+l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h-f*d*_;break;case"XZY":this._x=f*u*h-l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,n=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hf.copy(this).projectOnVector(e),this.sub(hf)}reflect(e){return this.sub(hf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hf=new Z,Gg=new $c;class Yc{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ri):Ri.fromBufferAttribute(s,o),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tl.copy(n.boundingBox)),Tl.applyMatrix4(e.matrixWorld),this.union(Tl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Na),wl.subVectors(this.max,Na),Mo.subVectors(e.a,Na),bo.subVectors(e.b,Na),To.subVectors(e.c,Na),Or.subVectors(bo,Mo),Ur.subVectors(To,bo),bs.subVectors(Mo,To);let t=[0,-Or.z,Or.y,0,-Ur.z,Ur.y,0,-bs.z,bs.y,Or.z,0,-Or.x,Ur.z,0,-Ur.x,bs.z,0,-bs.x,-Or.y,Or.x,0,-Ur.y,Ur.x,0,-bs.y,bs.x,0];return!ff(t,Mo,bo,To,wl)||(t=[1,0,0,0,1,0,0,0,1],!ff(t,Mo,bo,To,wl))?!1:(Al.crossVectors(Or,Ur),t=[Al.x,Al.y,Al.z],ff(t,Mo,bo,To,wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const or=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Ri=new Z,Tl=new Yc,Mo=new Z,bo=new Z,To=new Z,Or=new Z,Ur=new Z,bs=new Z,Na=new Z,wl=new Z,Al=new Z,Ts=new Z;function ff(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ts.fromArray(i,s);const a=r.x*Math.abs(Ts.x)+r.y*Math.abs(Ts.y)+r.z*Math.abs(Ts.z),c=e.dot(Ts),l=t.dot(Ts),u=n.dot(Ts);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const CT=new Yc,Fa=new Z,df=new Z;class wp{constructor(e=new Z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):CT.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fa.subVectors(e,this.center);const t=Fa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Fa,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(df.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fa.copy(e.center).add(df)),this.expandByPoint(Fa.copy(e.center).sub(df))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ar=new Z,pf=new Z,Rl=new Z,Nr=new Z,mf=new Z,Cl=new Z,gf=new Z;class PT{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ar.copy(this.origin).addScaledVector(this.direction,t),ar.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){pf.copy(e).add(t).multiplyScalar(.5),Rl.copy(t).sub(e).normalize(),Nr.copy(this.origin).sub(pf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Rl),a=Nr.dot(this.direction),c=-Nr.dot(Rl),l=Nr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*c-a,f=o*a-c,_=s*u,h>=0)if(f>=-_)if(f<=_){const m=1/u;h*=m,f*=m,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=_?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(pf).addScaledVector(Rl,f),d}intersectSphere(e,t){ar.subVectors(e.center,this.origin);const n=ar.dot(this.direction),r=ar.dot(ar)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ar)!==null}intersectTriangle(e,t,n,r,s){mf.subVectors(t,e),Cl.subVectors(n,e),gf.crossVectors(mf,Cl);let o=this.direction.dot(gf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Nr.subVectors(this.origin,e);const c=a*this.direction.dot(Cl.crossVectors(Nr,Cl));if(c<0)return null;const l=a*this.direction.dot(mf.cross(Nr));if(l<0||c+l>o)return null;const u=-a*Nr.dot(gf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,t,n,r,s,o,a,c,l,u,h,f,d,_,m,g){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,u,h,f,d,_,m,g)}set(e,t,n,r,s,o,a,c,l,u,h,f,d,_,m,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=m,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/wo.setFromMatrixColumn(e,0).length(),s=1/wo.setFromMatrixColumn(e,1).length(),o=1/wo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,m=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+_*l,t[5]=f-m*l,t[9]=-a*c,t[2]=m-f*l,t[6]=_+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,_=l*u,m=l*h;t[0]=f+m*a,t[4]=_*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=m+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,_=l*u,m=l*h;t[0]=f-m*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=m-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,m=a*h;t[0]=c*u,t[4]=_*l-d,t[8]=f*l+m,t[1]=c*h,t[5]=m*l+f,t[9]=d*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,_=a*c,m=a*l;t[0]=c*u,t[4]=m-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+_,t[10]=f-m*h}else if(e.order==="XZY"){const f=o*c,d=o*l,_=a*c,m=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+m,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LT,e,DT)}lookAt(e,t,n){const r=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Fr.crossVectors(n,Zn),Fr.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Fr.crossVectors(n,Zn)),Fr.normalize(),Pl.crossVectors(Zn,Fr),r[0]=Fr.x,r[4]=Pl.x,r[8]=Zn.x,r[1]=Fr.y,r[5]=Pl.y,r[9]=Zn.y,r[2]=Fr.z,r[6]=Pl.z,r[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],m=n[6],g=n[10],p=n[14],x=n[3],v=n[7],y=n[11],M=n[15],T=r[0],E=r[4],C=r[8],S=r[12],b=r[1],D=r[5],I=r[9],F=r[13],P=r[2],U=r[6],V=r[10],k=r[14],G=r[3],z=r[7],w=r[11],L=r[15];return s[0]=o*T+a*b+c*P+l*G,s[4]=o*E+a*D+c*U+l*z,s[8]=o*C+a*I+c*V+l*w,s[12]=o*S+a*F+c*k+l*L,s[1]=u*T+h*b+f*P+d*G,s[5]=u*E+h*D+f*U+d*z,s[9]=u*C+h*I+f*V+d*w,s[13]=u*S+h*F+f*k+d*L,s[2]=_*T+m*b+g*P+p*G,s[6]=_*E+m*D+g*U+p*z,s[10]=_*C+m*I+g*V+p*w,s[14]=_*S+m*F+g*k+p*L,s[3]=x*T+v*b+y*P+M*G,s[7]=x*E+v*D+y*U+M*z,s[11]=x*C+v*I+y*V+M*w,s[15]=x*S+v*F+y*k+M*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],m=e[7],g=e[11],p=e[15];return _*(+s*c*h-r*l*h-s*a*f+n*l*f+r*a*d-n*c*d)+m*(+t*c*d-t*l*f+s*o*f-r*o*d+r*l*u-s*c*u)+g*(+t*l*h-t*a*d-s*o*h+n*o*d+s*a*u-n*l*u)+p*(-r*a*u-t*c*h+t*a*f+r*o*h-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],m=e[13],g=e[14],p=e[15],x=h*g*l-m*f*l+m*c*d-a*g*d-h*c*p+a*f*p,v=_*f*l-u*g*l-_*c*d+o*g*d+u*c*p-o*f*p,y=u*m*l-_*h*l+_*a*d-o*m*d-u*a*p+o*h*p,M=_*h*c-u*m*c-_*a*f+o*m*f+u*a*g-o*h*g,T=t*x+n*v+r*y+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=x*E,e[1]=(m*f*s-h*g*s-m*r*d+n*g*d+h*r*p-n*f*p)*E,e[2]=(a*g*s-m*c*s+m*r*l-n*g*l-a*r*p+n*c*p)*E,e[3]=(h*c*s-a*f*s-h*r*l+n*f*l+a*r*d-n*c*d)*E,e[4]=v*E,e[5]=(u*g*s-_*f*s+_*r*d-t*g*d-u*r*p+t*f*p)*E,e[6]=(_*c*s-o*g*s-_*r*l+t*g*l+o*r*p-t*c*p)*E,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*d+t*c*d)*E,e[8]=y*E,e[9]=(_*h*s-u*m*s-_*n*d+t*m*d+u*n*p-t*h*p)*E,e[10]=(o*m*s-_*a*s+_*n*l-t*m*l-o*n*p+t*a*p)*E,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*d-t*a*d)*E,e[12]=M*E,e[13]=(u*m*r-_*h*r+_*n*f-t*m*f-u*n*g+t*h*g)*E,e[14]=(_*a*r-o*m*r-_*n*c+t*m*c+o*n*g-t*a*g)*E,e[15]=(o*h*r-u*a*r+u*n*c-t*h*c-o*n*f+t*a*f)*E,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,_=s*h,m=o*u,g=o*h,p=a*h,x=c*l,v=c*u,y=c*h,M=n.x,T=n.y,E=n.z;return r[0]=(1-(m+p))*M,r[1]=(d+y)*M,r[2]=(_-v)*M,r[3]=0,r[4]=(d-y)*T,r[5]=(1-(f+p))*T,r[6]=(g+x)*T,r[7]=0,r[8]=(_+v)*E,r[9]=(g-x)*E,r[10]=(1-(f+m))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=wo.set(r[0],r[1],r[2]).length();const o=wo.set(r[4],r[5],r[6]).length(),a=wo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ci.copy(this);const l=1/s,u=1/o,h=1/a;return Ci.elements[0]*=l,Ci.elements[1]*=l,Ci.elements[2]*=l,Ci.elements[4]*=u,Ci.elements[5]*=u,Ci.elements[6]*=u,Ci.elements[8]*=h,Ci.elements[9]*=h,Ci.elements[10]*=h,t.setFromRotationMatrix(Ci),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=xr){const c=this.elements,l=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let d,_;if(a===xr)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Wu)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=xr){const c=this.elements,l=1/(t-e),u=1/(n-r),h=1/(o-s),f=(t+e)*l,d=(n+r)*u;let _,m;if(a===xr)_=(o+s)*h,m=-2*h;else if(a===Wu)_=s*h,m=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=m,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const wo=new Z,Ci=new tn,LT=new Z(0,0,0),DT=new Z(1,1,1),Fr=new Z,Pl=new Z,Zn=new Z,Vg=new tn,Wg=new $c;class ph{constructor(e=0,t=0,n=0,r=ph.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Rn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Rn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wg.setFromEuler(this),this.setFromQuaternion(Wg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ph.DEFAULT_ORDER="XYZ";class Ax{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let IT=0;const Xg=new Z,Ao=new $c,cr=new tn,Ll=new Z,ka=new Z,OT=new Z,UT=new $c,qg=new Z(1,0,0),$g=new Z(0,1,0),Yg=new Z(0,0,1),NT={type:"added"},FT={type:"removed"};class ai extends wa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=Aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ai.DEFAULT_UP.clone();const e=new Z,t=new ph,n=new $c,r=new Z(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tn},normalMatrix:{value:new ot}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ax,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ao.setFromAxisAngle(e,t),this.quaternion.multiply(Ao),this}rotateOnWorldAxis(e,t){return Ao.setFromAxisAngle(e,t),this.quaternion.premultiply(Ao),this}rotateX(e){return this.rotateOnAxis(qg,e)}rotateY(e){return this.rotateOnAxis($g,e)}rotateZ(e){return this.rotateOnAxis(Yg,e)}translateOnAxis(e,t){return Xg.copy(e).applyQuaternion(this.quaternion),this.position.add(Xg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qg,e)}translateY(e){return this.translateOnAxis($g,e)}translateZ(e){return this.translateOnAxis(Yg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ll.copy(e):Ll.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt(ka,Ll,this.up):cr.lookAt(Ll,ka,this.up),this.quaternion.setFromRotationMatrix(cr),r&&(cr.extractRotation(r.matrixWorld),Ao.setFromRotationMatrix(cr),this.quaternion.premultiply(Ao.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(NT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(FT)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(cr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,e,OT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,UT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ai.DEFAULT_UP=new Z(0,1,0);ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pi=new Z,lr=new Z,_f=new Z,ur=new Z,Ro=new Z,Co=new Z,Kg=new Z,vf=new Z,xf=new Z,yf=new Z;let Dl=!1;class Ii{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pi.subVectors(e,t),r.cross(Pi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Pi.subVectors(r,t),lr.subVectors(n,t),_f.subVectors(e,t);const o=Pi.dot(Pi),a=Pi.dot(lr),c=Pi.dot(_f),l=lr.dot(lr),u=lr.dot(_f),h=o*l-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(l*c-a*u)*f,_=(o*u-a*c)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ur),ur.x>=0&&ur.y>=0&&ur.x+ur.y<=1}static getUV(e,t,n,r,s,o,a,c){return Dl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dl=!0),this.getInterpolation(e,t,n,r,s,o,a,c)}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,ur),c.setScalar(0),c.addScaledVector(s,ur.x),c.addScaledVector(o,ur.y),c.addScaledVector(a,ur.z),c}static isFrontFacing(e,t,n,r){return Pi.subVectors(n,t),lr.subVectors(e,t),Pi.cross(lr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),lr.subVectors(this.a,this.b),Pi.cross(lr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ii.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Dl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dl=!0),Ii.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Ii.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Ro.subVectors(r,n),Co.subVectors(s,n),vf.subVectors(e,n);const c=Ro.dot(vf),l=Co.dot(vf);if(c<=0&&l<=0)return t.copy(n);xf.subVectors(e,r);const u=Ro.dot(xf),h=Co.dot(xf);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Ro,o);yf.subVectors(e,s);const d=Ro.dot(yf),_=Co.dot(yf);if(_>=0&&d<=_)return t.copy(s);const m=d*l-c*_;if(m<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Co,a);const g=u*_-d*h;if(g<=0&&h-u>=0&&d-_>=0)return Kg.subVectors(s,r),a=(h-u)/(h-u+(d-_)),t.copy(r).addScaledVector(Kg,a);const p=1/(g+m+f);return o=m*p,a=f*p,t.copy(n).addScaledVector(Ro,o).addScaledVector(Co,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kr={h:0,s:0,l:0},Il={h:0,s:0,l:0};function Sf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class yt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=xt.workingColorSpace){if(e=Tp(e,1),t=Rn(t,0,1),n=Rn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Sf(o,s,e+1/3),this.g=Sf(o,s,e),this.b=Sf(o,s,e-1/3)}return xt.toWorkingColorSpace(this,r),this}setStyle(e,t=sn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const n=Rx[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}copyLinearToSRGB(e){return this.r=lf(e.r),this.g=lf(e.g),this.b=lf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return xt.fromWorkingColorSpace(hn.copy(this),e),Math.round(Rn(hn.r*255,0,255))*65536+Math.round(Rn(hn.g*255,0,255))*256+Math.round(Rn(hn.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(hn.copy(this),t);const n=hn.r,r=hn.g,s=hn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=sn){xt.fromWorkingColorSpace(hn.copy(this),e);const t=hn.r,n=hn.g,r=hn.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(kr),this.setHSL(kr.h+e,kr.s+t,kr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kr),e.getHSL(Il);const n=fc(kr.h,Il.h,t),r=fc(kr.s,Il.s,t),s=fc(kr.l,Il.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new yt;yt.NAMES=Rx;let kT=0;class mh extends wa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kT++}),this.uuid=Aa(),this.name="",this.type="Material",this.blending=sa,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xd,this.blendDst=yd,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=zu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=So,this.stencilZFail=So,this.stencilZPass=So,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==sa&&(n.blending=this.blending),this.side!==hs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xd&&(n.blendSrc=this.blendSrc),this.blendDst!==yd&&(n.blendDst=this.blendDst),this.blendEquation!==Ns&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zu&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ug&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==So&&(n.stencilFail=this.stencilFail),this.stencilZFail!==So&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==So&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cx extends mh{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=px,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new Z,Ol=new bt;class er{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ng,this.updateRange={offset:0,count:-1},this.gpuType=Zr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ol.fromBufferAttribute(this,t),Ol.applyMatrix3(e),this.setXY(t,Ol.x,Ol.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array),r=Sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array),r=Sn(r,this.array),s=Sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ng&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Px extends er{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Lx extends er{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class io extends er{constructor(e,t,n){super(new Float32Array(e),t,n)}}let BT=0;const li=new tn,Ef=new ai,Po=new Z,Jn=new Yc,Ba=new Yc,Jt=new Z;class mo extends wa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=Aa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mx(e)?Lx:Px)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ot().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,n){return li.makeTranslation(e,t,n),this.applyMatrix4(li),this}scale(e,t,n){return li.makeScale(e,t,n),this.applyMatrix4(li),this}lookAt(e){return Ef.lookAt(e),Ef.updateMatrix(),this.applyMatrix4(Ef.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Po).negate(),this.translate(Po.x,Po.y,Po.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new io(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Jn.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Z,1/0);return}if(e){const n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ba.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Jn.min,Ba.min),Jn.expandByPoint(Jt),Jt.addVectors(Jn.max,Ba.max),Jn.expandByPoint(Jt)):(Jn.expandByPoint(Ba.min),Jn.expandByPoint(Ba.max))}Jn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Jt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Jt.fromBufferAttribute(a,l),c&&(Po.fromBufferAttribute(e,l),Jt.add(Po)),r=Math.max(r,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new er(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let b=0;b<a;b++)l[b]=new Z,u[b]=new Z;const h=new Z,f=new Z,d=new Z,_=new bt,m=new bt,g=new bt,p=new Z,x=new Z;function v(b,D,I){h.fromArray(r,b*3),f.fromArray(r,D*3),d.fromArray(r,I*3),_.fromArray(o,b*2),m.fromArray(o,D*2),g.fromArray(o,I*2),f.sub(h),d.sub(h),m.sub(_),g.sub(_);const F=1/(m.x*g.y-g.x*m.y);isFinite(F)&&(p.copy(f).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(F),x.copy(d).multiplyScalar(m.x).addScaledVector(f,-g.x).multiplyScalar(F),l[b].add(p),l[D].add(p),l[I].add(p),u[b].add(x),u[D].add(x),u[I].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let b=0,D=y.length;b<D;++b){const I=y[b],F=I.start,P=I.count;for(let U=F,V=F+P;U<V;U+=3)v(n[U+0],n[U+1],n[U+2])}const M=new Z,T=new Z,E=new Z,C=new Z;function S(b){E.fromArray(s,b*3),C.copy(E);const D=l[b];M.copy(D),M.sub(E.multiplyScalar(E.dot(D))).normalize(),T.crossVectors(C,D);const F=T.dot(u[b])<0?-1:1;c[b*4]=M.x,c[b*4+1]=M.y,c[b*4+2]=M.z,c[b*4+3]=F}for(let b=0,D=y.length;b<D;++b){const I=y[b],F=I.start,P=I.count;for(let U=F,V=F+P;U<V;U+=3)S(n[U+0]),S(n[U+1]),S(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new er(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new Z,s=new Z,o=new Z,a=new Z,c=new Z,l=new Z,u=new Z,h=new Z;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),m=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,_=0;for(let m=0,g=c.length;m<g;m++){a.isInterleavedBufferAttribute?d=c[m]*a.data.stride+a.offset:d=c[m]*u;for(let p=0;p<u;p++)f[_++]=l[d++]}return new er(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mo,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jg=new tn,ws=new PT,Ul=new wp,Zg=new Z,Lo=new Z,Do=new Z,Io=new Z,Mf=new Z,Nl=new Z,Fl=new bt,kl=new bt,Bl=new bt,Jg=new Z,Qg=new Z,e_=new Z,zl=new Z,Hl=new Z;class Ki extends ai{constructor(e=new mo,t=new Cx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Nl.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(Mf.fromBufferAttribute(h,e),o?Nl.addScaledVector(Mf,u):Nl.addScaledVector(Mf.sub(t),u))}t.add(Nl)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ul.copy(n.boundingSphere),Ul.applyMatrix4(s),ws.copy(e.ray).recast(e.near),!(Ul.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Ul,Zg)===null||ws.origin.distanceToSquared(Zg)>(e.far-e.near)**2))&&(jg.copy(s).invert(),ws.copy(e.ray).applyMatrix4(jg),!(n.boundingBox!==null&&ws.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ws)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,m=f.length;_<m;_++){const g=f[_],p=o[g.materialIndex],x=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,M=v;y<M;y+=3){const T=a.getX(y),E=a.getX(y+1),C=a.getX(y+2);r=Gl(this,p,e,n,l,u,h,T,E,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let g=_,p=m;g<p;g+=3){const x=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);r=Gl(this,o,e,n,l,u,h,x,v,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,m=f.length;_<m;_++){const g=f[_],p=o[g.materialIndex],x=Math.max(g.start,d.start),v=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,M=v;y<M;y+=3){const T=y,E=y+1,C=y+2;r=Gl(this,p,e,n,l,u,h,T,E,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),m=Math.min(c.count,d.start+d.count);for(let g=_,p=m;g<p;g+=3){const x=g,v=g+1,y=g+2;r=Gl(this,o,e,n,l,u,h,x,v,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function zT(i,e,t,n,r,s,o,a){let c;if(e.side===Hn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===hs,a),c===null)return null;Hl.copy(a),Hl.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Hl);return l<t.near||l>t.far?null:{distance:l,point:Hl.clone(),object:i}}function Gl(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,Lo),i.getVertexPosition(c,Do),i.getVertexPosition(l,Io);const u=zT(i,e,t,n,Lo,Do,Io,zl);if(u){r&&(Fl.fromBufferAttribute(r,a),kl.fromBufferAttribute(r,c),Bl.fromBufferAttribute(r,l),u.uv=Ii.getInterpolation(zl,Lo,Do,Io,Fl,kl,Bl,new bt)),s&&(Fl.fromBufferAttribute(s,a),kl.fromBufferAttribute(s,c),Bl.fromBufferAttribute(s,l),u.uv1=Ii.getInterpolation(zl,Lo,Do,Io,Fl,kl,Bl,new bt),u.uv2=u.uv1),o&&(Jg.fromBufferAttribute(o,a),Qg.fromBufferAttribute(o,c),e_.fromBufferAttribute(o,l),u.normal=Ii.getInterpolation(zl,Lo,Do,Io,Jg,Qg,e_,new Z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new Z,materialIndex:0};Ii.getNormal(Lo,Do,Io,h.normal),u.face=h}return u}class Kc extends mo{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new io(l,3)),this.setAttribute("normal",new io(u,3)),this.setAttribute("uv",new io(h,2));function _(m,g,p,x,v,y,M,T,E,C,S){const b=y/E,D=M/C,I=y/2,F=M/2,P=T/2,U=E+1,V=C+1;let k=0,G=0;const z=new Z;for(let w=0;w<V;w++){const L=w*D-F;for(let N=0;N<U;N++){const K=N*b-I;z[m]=K*x,z[g]=L*v,z[p]=P,l.push(z.x,z.y,z.z),z[m]=0,z[g]=0,z[p]=T>0?1:-1,u.push(z.x,z.y,z.z),h.push(N/E),h.push(1-w/C),k+=1}}for(let w=0;w<C;w++)for(let L=0;L<E;L++){const N=f+L+U*w,K=f+L+U*(w+1),j=f+(L+1)+U*(w+1),q=f+(L+1)+U*w;c.push(N,K,q),c.push(K,j,q),G+=6}a.addGroup(d,G,S),d+=G,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ya(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function En(i){const e={};for(let t=0;t<i.length;t++){const n=ya(i[t]);for(const r in n)e[r]=n[r]}return e}function HT(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dx(i){return i.getRenderTarget()===null?i.outputColorSpace:xt.workingColorSpace}const GT={clone:ya,merge:En};var VT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fs extends mh{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VT,this.fragmentShader=WT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ya(e.uniforms),this.uniformsGroups=HT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ix extends ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=xr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ii extends Ix{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Oc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oc*2*Math.atan(Math.tan(hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hc*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oo=-90,Uo=1;class XT extends ai{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ii(Oo,Uo,e,t);r.layers=this.layers,this.add(r);const s=new ii(Oo,Uo,e,t);s.layers=this.layers,this.add(s);const o=new ii(Oo,Uo,e,t);o.layers=this.layers,this.add(o);const a=new ii(Oo,Uo,e,t);a.layers=this.layers,this.add(a);const c=new ii(Oo,Uo,e,t);c.layers=this.layers,this.add(c);const l=new ii(Oo,Uo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===xr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Wu)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Ox extends Gn{constructor(e,t,n,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:_a,super(e,t,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qT extends uo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(dc("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===no?sn:_i),this.texture=new Ox(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Kc(5,5,5),s=new fs({name:"CubemapFromEquirect",uniforms:ya(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:rs});s.uniforms.tEquirect.value=t;const o=new Ki(r,s),a=t.minFilter;return t.minFilter===Dc&&(t.minFilter=pi),new XT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const bf=new Z,$T=new Z,KT=new ot;class Os{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=bf.subVectors(n,t).cross($T.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(bf),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||KT.getNormalMatrix(e),r=this.coplanarPoint(bf).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const As=new wp,Vl=new Z;class Ux{constructor(e=new Os,t=new Os,n=new Os,r=new Os,s=new Os,o=new Os){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xr){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],f=r[7],d=r[8],_=r[9],m=r[10],g=r[11],p=r[12],x=r[13],v=r[14],y=r[15];if(n[0].setComponents(c-s,f-l,g-d,y-p).normalize(),n[1].setComponents(c+s,f+l,g+d,y+p).normalize(),n[2].setComponents(c+o,f+u,g+_,y+x).normalize(),n[3].setComponents(c-o,f-u,g-_,y-x).normalize(),n[4].setComponents(c-a,f-h,g-m,y-v).normalize(),t===xr)n[5].setComponents(c+a,f+h,g+m,y+v).normalize();else if(t===Wu)n[5].setComponents(a,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){return As.center.set(0,0,0),As.radius=.7071067811865476,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Vl.x=r.normal.x>0?e.max.x:e.min.x,Vl.y=r.normal.y>0?e.max.y:e.min.y,Vl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nx(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function jT(i,e){const t=e.isWebGL2,n=new WeakMap;function r(l,u){const h=l.array,f=l.usage,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,h,f),l.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){const f=u.array,d=u.updateRange;i.bindBuffer(h,l),d.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,r(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class jc extends mo{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,h=e/a,f=t/c,d=[],_=[],m=[],g=[];for(let p=0;p<u;p++){const x=p*f-o;for(let v=0;v<l;v++){const y=v*h-s;_.push(y,-x,0),m.push(0,0,1),g.push(v/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const v=x+l*p,y=x+l*(p+1),M=x+1+l*(p+1),T=x+1+l*p;d.push(v,y,T),d.push(y,M,T)}this.setIndex(d),this.setAttribute("position",new io(_,3)),this.setAttribute("normal",new io(m,3)),this.setAttribute("uv",new io(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jc(e.width,e.height,e.widthSegments,e.heightSegments)}}var ZT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,QT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ew=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tw=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,nw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ow=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,hw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_w=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yw=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ew=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tw="gl_FragColor = linearToOutputTexel( gl_FragColor );",ww=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Aw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Iw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ow=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ww=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$w=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Yw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,t1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,n1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,s1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,u1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,h1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,f1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,d1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,p1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,v1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,b1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,A1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,L1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,D1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,I1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,O1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,N1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,k1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,G1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,V1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,W1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,X1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Y1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eA=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,nA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cA=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_A=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,MA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bA=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:ZT,alphahash_pars_fragment:JT,alphamap_fragment:QT,alphamap_pars_fragment:ew,alphatest_fragment:tw,alphatest_pars_fragment:nw,aomap_fragment:iw,aomap_pars_fragment:rw,begin_vertex:sw,beginnormal_vertex:ow,bsdfs:aw,iridescence_fragment:cw,bumpmap_pars_fragment:lw,clipping_planes_fragment:uw,clipping_planes_pars_fragment:hw,clipping_planes_pars_vertex:fw,clipping_planes_vertex:dw,color_fragment:pw,color_pars_fragment:mw,color_pars_vertex:gw,color_vertex:_w,common:vw,cube_uv_reflection_fragment:xw,defaultnormal_vertex:yw,displacementmap_pars_vertex:Sw,displacementmap_vertex:Ew,emissivemap_fragment:Mw,emissivemap_pars_fragment:bw,colorspace_fragment:Tw,colorspace_pars_fragment:ww,envmap_fragment:Aw,envmap_common_pars_fragment:Rw,envmap_pars_fragment:Cw,envmap_pars_vertex:Pw,envmap_physical_pars_fragment:Gw,envmap_vertex:Lw,fog_vertex:Dw,fog_pars_vertex:Iw,fog_fragment:Ow,fog_pars_fragment:Uw,gradientmap_pars_fragment:Nw,lightmap_fragment:Fw,lightmap_pars_fragment:kw,lights_lambert_fragment:Bw,lights_lambert_pars_fragment:zw,lights_pars_begin:Hw,lights_toon_fragment:Vw,lights_toon_pars_fragment:Ww,lights_phong_fragment:Xw,lights_phong_pars_fragment:qw,lights_physical_fragment:$w,lights_physical_pars_fragment:Yw,lights_fragment_begin:Kw,lights_fragment_maps:jw,lights_fragment_end:Zw,logdepthbuf_fragment:Jw,logdepthbuf_pars_fragment:Qw,logdepthbuf_pars_vertex:e1,logdepthbuf_vertex:t1,map_fragment:n1,map_pars_fragment:i1,map_particle_fragment:r1,map_particle_pars_fragment:s1,metalnessmap_fragment:o1,metalnessmap_pars_fragment:a1,morphcolor_vertex:c1,morphnormal_vertex:l1,morphtarget_pars_vertex:u1,morphtarget_vertex:h1,normal_fragment_begin:f1,normal_fragment_maps:d1,normal_pars_fragment:p1,normal_pars_vertex:m1,normal_vertex:g1,normalmap_pars_fragment:_1,clearcoat_normal_fragment_begin:v1,clearcoat_normal_fragment_maps:x1,clearcoat_pars_fragment:y1,iridescence_pars_fragment:S1,opaque_fragment:E1,packing:M1,premultiplied_alpha_fragment:b1,project_vertex:T1,dithering_fragment:w1,dithering_pars_fragment:A1,roughnessmap_fragment:R1,roughnessmap_pars_fragment:C1,shadowmap_pars_fragment:P1,shadowmap_pars_vertex:L1,shadowmap_vertex:D1,shadowmask_pars_fragment:I1,skinbase_vertex:O1,skinning_pars_vertex:U1,skinning_vertex:N1,skinnormal_vertex:F1,specularmap_fragment:k1,specularmap_pars_fragment:B1,tonemapping_fragment:z1,tonemapping_pars_fragment:H1,transmission_fragment:G1,transmission_pars_fragment:V1,uv_pars_fragment:W1,uv_pars_vertex:X1,uv_vertex:q1,worldpos_vertex:$1,background_vert:Y1,background_frag:K1,backgroundCube_vert:j1,backgroundCube_frag:Z1,cube_vert:J1,cube_frag:Q1,depth_vert:eA,depth_frag:tA,distanceRGBA_vert:nA,distanceRGBA_frag:iA,equirect_vert:rA,equirect_frag:sA,linedashed_vert:oA,linedashed_frag:aA,meshbasic_vert:cA,meshbasic_frag:lA,meshlambert_vert:uA,meshlambert_frag:hA,meshmatcap_vert:fA,meshmatcap_frag:dA,meshnormal_vert:pA,meshnormal_frag:mA,meshphong_vert:gA,meshphong_frag:_A,meshphysical_vert:vA,meshphysical_frag:xA,meshtoon_vert:yA,meshtoon_frag:SA,points_vert:EA,points_frag:MA,shadow_vert:bA,shadow_frag:TA,sprite_vert:wA,sprite_frag:AA},we={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Vi={basic:{uniforms:En([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:En([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new yt(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:En([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:En([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:En([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new yt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:En([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:En([we.points,we.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:En([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:En([we.common,we.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:En([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:En([we.sprite,we.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:En([we.common,we.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:En([we.lights,we.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Vi.physical={uniforms:En([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Wl={r:0,b:0,g:0};function RA(i,e,t,n,r,s,o){const a=new yt(0);let c=s===!0?0:1,l,u,h=null,f=0,d=null;function _(g,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?m(a,c):v&&v.isColor&&(m(v,1),x=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===fh)?(u===void 0&&(u=new Ki(new Kc(1,1,1),new fs({name:"BackgroundCubeMaterial",uniforms:ya(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=xt.getTransfer(v.colorSpace)!==Rt,(h!==v||f!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ki(new jc(2,2),new fs({name:"BackgroundMaterial",uniforms:ya(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=xt.getTransfer(v.colorSpace)!==Rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,p){g.getRGB(Wl,Dx(i)),n.buffers.color.setClear(Wl.r,Wl.g,Wl.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),c=p,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,m(a,c)},render:_}}function CA(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=g(null);let l=c,u=!1;function h(P,U,V,k,G){let z=!1;if(o){const w=m(k,V,U);l!==w&&(l=w,d(l.object)),z=p(P,k,V,G),z&&x(P,k,V,G)}else{const w=U.wireframe===!0;(l.geometry!==k.id||l.program!==V.id||l.wireframe!==w)&&(l.geometry=k.id,l.program=V.id,l.wireframe=w,z=!0)}G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(z||u)&&(u=!1,C(P,U,V,k),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(P){return n.isWebGL2?i.bindVertexArray(P):s.bindVertexArrayOES(P)}function _(P){return n.isWebGL2?i.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function m(P,U,V){const k=V.wireframe===!0;let G=a[P.id];G===void 0&&(G={},a[P.id]=G);let z=G[U.id];z===void 0&&(z={},G[U.id]=z);let w=z[k];return w===void 0&&(w=g(f()),z[k]=w),w}function g(P){const U=[],V=[],k=[];for(let G=0;G<r;G++)U[G]=0,V[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:k,object:P,attributes:{},index:null}}function p(P,U,V,k){const G=l.attributes,z=U.attributes;let w=0;const L=V.getAttributes();for(const N in L)if(L[N].location>=0){const j=G[N];let q=z[N];if(q===void 0&&(N==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),N==="instanceColor"&&P.instanceColor&&(q=P.instanceColor)),j===void 0||j.attribute!==q||q&&j.data!==q.data)return!0;w++}return l.attributesNum!==w||l.index!==k}function x(P,U,V,k){const G={},z=U.attributes;let w=0;const L=V.getAttributes();for(const N in L)if(L[N].location>=0){let j=z[N];j===void 0&&(N==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),N==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));const q={};q.attribute=j,j&&j.data&&(q.data=j.data),G[N]=q,w++}l.attributes=G,l.attributesNum=w,l.index=k}function v(){const P=l.newAttributes;for(let U=0,V=P.length;U<V;U++)P[U]=0}function y(P){M(P,0)}function M(P,U){const V=l.newAttributes,k=l.enabledAttributes,G=l.attributeDivisors;V[P]=1,k[P]===0&&(i.enableVertexAttribArray(P),k[P]=1),G[P]!==U&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,U),G[P]=U)}function T(){const P=l.newAttributes,U=l.enabledAttributes;for(let V=0,k=U.length;V<k;V++)U[V]!==P[V]&&(i.disableVertexAttribArray(V),U[V]=0)}function E(P,U,V,k,G,z,w){w===!0?i.vertexAttribIPointer(P,U,V,G,z):i.vertexAttribPointer(P,U,V,k,G,z)}function C(P,U,V,k){if(n.isWebGL2===!1&&(P.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const G=k.attributes,z=V.getAttributes(),w=U.defaultAttributeValues;for(const L in z){const N=z[L];if(N.location>=0){let K=G[L];if(K===void 0&&(L==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),L==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),K!==void 0){const j=K.normalized,q=K.itemSize,X=t.get(K);if(X===void 0)continue;const ae=X.buffer,me=X.type,he=X.bytesPerElement,re=n.isWebGL2===!0&&(me===i.INT||me===i.UNSIGNED_INT||K.gpuType===gx);if(K.isInterleavedBufferAttribute){const le=K.data,B=le.stride,J=K.offset;if(le.isInstancedInterleavedBuffer){for(let Q=0;Q<N.locationSize;Q++)M(N.location+Q,le.meshPerAttribute);P.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Q=0;Q<N.locationSize;Q++)y(N.location+Q);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Q=0;Q<N.locationSize;Q++)E(N.location+Q,q/N.locationSize,me,j,B*he,(J+q/N.locationSize*Q)*he,re)}else{if(K.isInstancedBufferAttribute){for(let le=0;le<N.locationSize;le++)M(N.location+le,K.meshPerAttribute);P.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let le=0;le<N.locationSize;le++)y(N.location+le);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let le=0;le<N.locationSize;le++)E(N.location+le,q/N.locationSize,me,j,q*he,q/N.locationSize*le*he,re)}}else if(w!==void 0){const j=w[L];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(N.location,j);break;case 3:i.vertexAttrib3fv(N.location,j);break;case 4:i.vertexAttrib4fv(N.location,j);break;default:i.vertexAttrib1fv(N.location,j)}}}}T()}function S(){I();for(const P in a){const U=a[P];for(const V in U){const k=U[V];for(const G in k)_(k[G].object),delete k[G];delete U[V]}delete a[P]}}function b(P){if(a[P.id]===void 0)return;const U=a[P.id];for(const V in U){const k=U[V];for(const G in k)_(k[G].object),delete k[G];delete U[V]}delete a[P.id]}function D(P){for(const U in a){const V=a[U];if(V[P.id]===void 0)continue;const k=V[P.id];for(const G in k)_(k[G].object),delete k[G];delete V[P.id]}}function I(){F(),u=!0,l!==c&&(l=c,d(l.object))}function F(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:I,resetDefaultState:F,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:y,disableUnusedAttributes:T}}function PA(i,e,t,n){const r=n.isWebGL2;let s;function o(l){s=l}function a(l,u){i.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,h){if(h===0)return;let f,d;if(r)f=i,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,l,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function LA(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,y=o||e.has("OES_texture_float"),M=v&&y,T=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:T}}function DA(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Os,a=new ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,m=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!r||_===null||_.length===0||s&&!g)s?u(null):l();else{const x=s?0:n,v=x*4;let y=p.clippingState||null;c.value=y,y=u(_,f,v,d);for(let M=0;M!==v;++M)y[M]=t[M];p.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const m=h!==null?h.length:0;let g=null;if(m!==0){if(g=c.value,_!==!0||g===null){const p=d+m*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,y=d;v!==m;++v,y+=4)o.copy(h[v]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function IA(i){let e=new WeakMap;function t(o,a){return a===Sd?o.mapping=_a:a===Ed&&(o.mapping=va),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Sd||a===Ed)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new qT(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class OA extends Ix{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ko=4,t_=[.125,.215,.35,.446,.526,.582],Fs=20,Tf=new OA,n_=new yt;let wf=null,Af=0,Rf=0;const Us=(1+Math.sqrt(5))/2,No=1/Us,i_=[new Z(1,1,1),new Z(-1,1,1),new Z(1,1,-1),new Z(-1,1,-1),new Z(0,Us,No),new Z(0,Us,-No),new Z(No,0,Us),new Z(-No,0,Us),new Z(Us,No,0),new Z(-Us,No,0)];class r_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){wf=this._renderer.getRenderTarget(),Af=this._renderer.getActiveCubeFace(),Rf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=a_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wf,Af,Rf),e.scissorTest=!1,Xl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_a||e.mapping===va?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wf=this._renderer.getRenderTarget(),Af=this._renderer.getActiveCubeFace(),Rf=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:Ic,format:ki,colorSpace:Dr,depthBuffer:!1},r=s_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=s_(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UA(s)),this._blurMaterial=NA(s,e,t)}return r}_compileMaterial(e){const t=new Ki(this._lodPlanes[0],e);this._renderer.compile(t,Tf)}_sceneToCubeUV(e,t,n,r){const a=new ii(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(n_),u.toneMapping=ss,u.autoClear=!1;const d=new Cx({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),_=new Ki(new Kc,d);let m=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,m=!0):(d.color.copy(n_),m=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const v=this._cubeSize;Xl(r,x*v,p>2?v:0,v,v),u.setRenderTarget(r),m&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===_a||e.mapping===va;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=a_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=o_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ki(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Xl(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Tf)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=i_[(r-1)%i_.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ki(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Fs-1),m=s/_,g=isFinite(s)?1+Math.floor(u*m):Fs;g>Fs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fs}`);const p=[];let x=0;for(let E=0;E<Fs;++E){const C=E/m,S=Math.exp(-C*C/2);p.push(S),E===0?x+=S:E<g&&(x+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;const y=this._sizeLods[r],M=3*y*(r>v-Ko?r-v+Ko:0),T=4*(this._cubeSize-y);Xl(t,M,T,3*y,2*y),c.setRenderTarget(t),c.render(h,Tf)}}function UA(i){const e=[],t=[],n=[];let r=i;const s=i-Ko+1+t_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-Ko?c=t_[o-i+Ko-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,m=3,g=2,p=1,x=new Float32Array(m*_*d),v=new Float32Array(g*_*d),y=new Float32Array(p*_*d);for(let T=0;T<d;T++){const E=T%3*2/3-1,C=T>2?0:-1,S=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];x.set(S,m*_*T),v.set(f,g*_*T);const b=[T,T,T,T,T,T];y.set(b,p*_*T)}const M=new mo;M.setAttribute("position",new er(x,m)),M.setAttribute("uv",new er(v,g)),M.setAttribute("faceIndex",new er(y,p)),e.push(M),r>Ko&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function s_(i,e,t){const n=new uo(i,e,t);return n.texture.mapping=fh,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xl(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function NA(i,e,t){const n=new Float32Array(Fs),r=new Z(0,1,0);return new fs({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function o_(){return new fs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function a_(){return new fs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Ap(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function FA(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Sd||c===Ed,u=c===_a||c===va;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new r_(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new r_(i));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function kA(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function BA(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const m=f.morphAttributes[_];for(let g=0,p=m.length;g<p;g++)e.remove(m[g])}f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const _ in f)e.update(f[_],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const m=d[_];for(let g=0,p=m.length;g<p;g++)e.update(m[g],i.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,_=h.attributes.position;let m=0;if(d!==null){const x=d.array;m=d.version;for(let v=0,y=x.length;v<y;v+=3){const M=x[v+0],T=x[v+1],E=x[v+2];f.push(M,T,T,E,E,M)}}else if(_!==void 0){const x=_.array;m=_.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const M=v+0,T=v+1,E=v+2;f.push(M,T,T,E,E,M)}}else return;const g=new(Mx(f)?Lx:Px)(f,1);g.version=m;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function zA(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,d){i.drawElements(s,d,a,f*c),t.update(d,s,1)}function h(f,d,_){if(_===0)return;let m,g;if(r)m=i,g="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,d,a,f*c,_),t.update(d,s,_)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function HA(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function GA(i,e){return i[0]-e[0]}function VA(i,e){return Math.abs(e[1])-Math.abs(i[1])}function WA(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new cn,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=_!==void 0?_.length:0;let g=s.get(u);if(g===void 0||g.count!==m){let U=function(){F.dispose(),s.delete(u),u.removeEventListener("dispose",U)};var d=U;g!==void 0&&g.texture.dispose();const v=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),M===!0&&(S=3);let b=u.attributes.position.count*S,D=1;b>e.maxTextureSize&&(D=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const I=new Float32Array(b*D*4*m),F=new wx(I,b,D,m);F.type=Zr,F.needsUpdate=!0;const P=S*4;for(let V=0;V<m;V++){const k=T[V],G=E[V],z=C[V],w=b*D*4*V;for(let L=0;L<k.count;L++){const N=L*P;v===!0&&(o.fromBufferAttribute(k,L),I[w+N+0]=o.x,I[w+N+1]=o.y,I[w+N+2]=o.z,I[w+N+3]=0),y===!0&&(o.fromBufferAttribute(G,L),I[w+N+4]=o.x,I[w+N+5]=o.y,I[w+N+6]=o.z,I[w+N+7]=0),M===!0&&(o.fromBufferAttribute(z,L),I[w+N+8]=o.x,I[w+N+9]=o.y,I[w+N+10]=o.z,I[w+N+11]=z.itemSize===4?o.w:1)}}g={count:m,texture:F,size:new bt(b,D)},s.set(u,g),u.addEventListener("dispose",U)}let p=0;for(let v=0;v<f.length;v++)p+=f[v];const x=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{const _=f===void 0?0:f.length;let m=n[u.id];if(m===void 0||m.length!==_){m=[];for(let y=0;y<_;y++)m[y]=[y,0];n[u.id]=m}for(let y=0;y<_;y++){const M=m[y];M[0]=y,M[1]=f[y]}m.sort(VA);for(let y=0;y<8;y++)y<_&&m[y][1]?(a[y][0]=m[y][0],a[y][1]=m[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(GA);const g=u.morphAttributes.position,p=u.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const M=a[y],T=M[0],E=M[1];T!==Number.MAX_SAFE_INTEGER&&E?(g&&u.getAttribute("morphTarget"+y)!==g[T]&&u.setAttribute("morphTarget"+y,g[T]),p&&u.getAttribute("morphNormal"+y)!==p[T]&&u.setAttribute("morphNormal"+y,p[T]),r[y]=E,x+=E):(g&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),p&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const v=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function XA(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Fx=new Gn,kx=new wx,Bx=new RT,zx=new Ox,c_=[],l_=[],u_=new Float32Array(16),h_=new Float32Array(9),f_=new Float32Array(4);function Ra(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=c_[r];if(s===void 0&&(s=new Float32Array(r),c_[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function gh(i,e){let t=l_[e];t===void 0&&(t=new Int32Array(e),l_[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function qA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function $A(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2fv(this.addr,e),jt(t,e)}}function YA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;i.uniform3fv(this.addr,e),jt(t,e)}}function KA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4fv(this.addr,e),jt(t,e)}}function jA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,n))return;f_.set(n),i.uniformMatrix2fv(this.addr,!1,f_),jt(t,n)}}function ZA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,n))return;h_.set(n),i.uniformMatrix3fv(this.addr,!1,h_),jt(t,n)}}function JA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,n))return;u_.set(n),i.uniformMatrix4fv(this.addr,!1,u_),jt(t,n)}}function QA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function eR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2iv(this.addr,e),jt(t,e)}}function tR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3iv(this.addr,e),jt(t,e)}}function nR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4iv(this.addr,e),jt(t,e)}}function iR(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function rR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2uiv(this.addr,e),jt(t,e)}}function sR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3uiv(this.addr,e),jt(t,e)}}function oR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4uiv(this.addr,e),jt(t,e)}}function aR(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Fx,r)}function cR(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Bx,r)}function lR(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||zx,r)}function uR(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||kx,r)}function hR(i){switch(i){case 5126:return qA;case 35664:return $A;case 35665:return YA;case 35666:return KA;case 35674:return jA;case 35675:return ZA;case 35676:return JA;case 5124:case 35670:return QA;case 35667:case 35671:return eR;case 35668:case 35672:return tR;case 35669:case 35673:return nR;case 5125:return iR;case 36294:return rR;case 36295:return sR;case 36296:return oR;case 35678:case 36198:case 36298:case 36306:case 35682:return aR;case 35679:case 36299:case 36307:return cR;case 35680:case 36300:case 36308:case 36293:return lR;case 36289:case 36303:case 36311:case 36292:return uR}}function fR(i,e){i.uniform1fv(this.addr,e)}function dR(i,e){const t=Ra(e,this.size,2);i.uniform2fv(this.addr,t)}function pR(i,e){const t=Ra(e,this.size,3);i.uniform3fv(this.addr,t)}function mR(i,e){const t=Ra(e,this.size,4);i.uniform4fv(this.addr,t)}function gR(i,e){const t=Ra(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _R(i,e){const t=Ra(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function vR(i,e){const t=Ra(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function xR(i,e){i.uniform1iv(this.addr,e)}function yR(i,e){i.uniform2iv(this.addr,e)}function SR(i,e){i.uniform3iv(this.addr,e)}function ER(i,e){i.uniform4iv(this.addr,e)}function MR(i,e){i.uniform1uiv(this.addr,e)}function bR(i,e){i.uniform2uiv(this.addr,e)}function TR(i,e){i.uniform3uiv(this.addr,e)}function wR(i,e){i.uniform4uiv(this.addr,e)}function AR(i,e,t){const n=this.cache,r=e.length,s=gh(t,r);Kt(n,s)||(i.uniform1iv(this.addr,s),jt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Fx,s[o])}function RR(i,e,t){const n=this.cache,r=e.length,s=gh(t,r);Kt(n,s)||(i.uniform1iv(this.addr,s),jt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Bx,s[o])}function CR(i,e,t){const n=this.cache,r=e.length,s=gh(t,r);Kt(n,s)||(i.uniform1iv(this.addr,s),jt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||zx,s[o])}function PR(i,e,t){const n=this.cache,r=e.length,s=gh(t,r);Kt(n,s)||(i.uniform1iv(this.addr,s),jt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||kx,s[o])}function LR(i){switch(i){case 5126:return fR;case 35664:return dR;case 35665:return pR;case 35666:return mR;case 35674:return gR;case 35675:return _R;case 35676:return vR;case 5124:case 35670:return xR;case 35667:case 35671:return yR;case 35668:case 35672:return SR;case 35669:case 35673:return ER;case 5125:return MR;case 36294:return bR;case 36295:return TR;case 36296:return wR;case 35678:case 36198:case 36298:case 36306:case 35682:return AR;case 35679:case 36299:case 36307:return RR;case 35680:case 36300:case 36308:case 36293:return CR;case 36289:case 36303:case 36311:case 36292:return PR}}class DR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=hR(t.type)}}class IR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=LR(t.type)}}class OR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Cf=/(\w+)(\])?(\[|\.)?/g;function d_(i,e){i.seq.push(e),i.map[e.id]=e}function UR(i,e,t){const n=i.name,r=n.length;for(Cf.lastIndex=0;;){const s=Cf.exec(n),o=Cf.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){d_(t,l===void 0?new DR(a,i,e):new IR(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new OR(a),d_(t,h)),t=h}}}class cu{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);UR(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function p_(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const NR=37297;let FR=0;function kR(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function BR(i){const e=xt.getPrimaries(xt.workingColorSpace),t=xt.getPrimaries(i);let n;switch(e===t?n="":e===Vu&&t===Gu?n="LinearDisplayP3ToLinearSRGB":e===Gu&&t===Vu&&(n="LinearSRGBToLinearDisplayP3"),i){case Dr:case dh:return[n,"LinearTransferOETF"];case sn:case bp:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function m_(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+kR(i.getShaderSource(e),o)}else return r}function zR(i,e){const t=BR(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function HR(i,e){let t;switch(e){case Nb:t="Linear";break;case Fb:t="Reinhard";break;case kb:t="OptimizedCineon";break;case Bb:t="ACESFilmic";break;case zb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function GR(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ka).join(`
`)}function VR(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function WR(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ka(i){return i!==""}function g_(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function __(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ad(i){return i.replace(XR,$R)}const qR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $R(i,e){let t=nt[e];if(t===void 0){const n=qR.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ad(t)}const YR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v_(i){return i.replace(YR,KR)}function KR(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function x_(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jR(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===dx?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ub?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fr&&(e="SHADOWMAP_TYPE_VSM"),e}function ZR(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _a:case va:e="ENVMAP_TYPE_CUBE";break;case fh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function JR(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case va:e="ENVMAP_MODE_REFRACTION";break}return e}function QR(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case px:e="ENVMAP_BLENDING_MULTIPLY";break;case Ob:e="ENVMAP_BLENDING_MIX";break;case Ub:e="ENVMAP_BLENDING_ADD";break}return e}function eC(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function tC(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=jR(t),l=ZR(t),u=JR(t),h=QR(t),f=eC(t),d=t.isWebGL2?"":GR(t),_=VR(s),m=r.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ka).join(`
`),g.length>0&&(g+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ka).join(`
`),p.length>0&&(p+=`
`)):(g=[x_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ka).join(`
`),p=[d,x_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ss?"#define TONE_MAPPING":"",t.toneMapping!==ss?nt.tonemapping_pars_fragment:"",t.toneMapping!==ss?HR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,zR("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ka).join(`
`)),o=Ad(o),o=g_(o,t),o=__(o,t),a=Ad(a),a=g_(a,t),a=__(a,t),o=v_(o),a=v_(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Fg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=x+g+o,y=x+p+a,M=p_(r,r.VERTEX_SHADER,v),T=p_(r,r.FRAGMENT_SHADER,y);r.attachShader(m,M),r.attachShader(m,T),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function E(D){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(m).trim(),F=r.getShaderInfoLog(M).trim(),P=r.getShaderInfoLog(T).trim();let U=!0,V=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,m,M,T);else{const k=m_(r,M,"vertex"),G=m_(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+I+`
`+k+`
`+G)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(F===""||P==="")&&(V=!1);V&&(D.diagnostics={runnable:U,programLog:I,vertexShader:{log:F,prefix:g},fragmentShader:{log:P,prefix:p}})}r.deleteShader(M),r.deleteShader(T),C=new cu(r,m),S=WR(r,m)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(m,NR)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=FR++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=T,this}let nC=0;class iC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new rC(e),t.set(e,n)),n}}class rC{constructor(e){this.id=nC++,this.code=e,this.usedTimes=0}}function sC(i,e,t,n,r,s,o){const a=new Ax,c=new iC,l=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return S===0?"uv":`uv${S}`}function g(S,b,D,I,F){const P=I.fog,U=F.geometry,V=S.isMeshStandardMaterial?I.environment:null,k=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),G=k&&k.mapping===fh?k.image.height:null,z=_[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const w=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,L=w!==void 0?w.length:0;let N=0;U.morphAttributes.position!==void 0&&(N=1),U.morphAttributes.normal!==void 0&&(N=2),U.morphAttributes.color!==void 0&&(N=3);let K,j,q,X;if(z){const Ce=Vi[z];K=Ce.vertexShader,j=Ce.fragmentShader}else K=S.vertexShader,j=S.fragmentShader,c.update(S),q=c.getVertexShaderID(S),X=c.getFragmentShaderID(S);const ae=i.getRenderTarget(),me=F.isInstancedMesh===!0,he=!!S.map,re=!!S.matcap,le=!!k,B=!!S.aoMap,J=!!S.lightMap,Q=!!S.bumpMap,ce=!!S.normalMap,ge=!!S.displacementMap,W=!!S.emissiveMap,Re=!!S.metalnessMap,De=!!S.roughnessMap,qe=S.anisotropy>0,Xe=S.clearcoat>0,lt=S.iridescence>0,O=S.sheen>0,A=S.transmission>0,$=qe&&!!S.anisotropyMap,oe=Xe&&!!S.clearcoatMap,ue=Xe&&!!S.clearcoatNormalMap,de=Xe&&!!S.clearcoatRoughnessMap,Pe=lt&&!!S.iridescenceMap,xe=lt&&!!S.iridescenceThicknessMap,be=O&&!!S.sheenColorMap,Ie=O&&!!S.sheenRoughnessMap,Je=!!S.specularMap,_e=!!S.specularColorMap,it=!!S.specularIntensityMap,ze=A&&!!S.transmissionMap,Be=A&&!!S.thicknessMap,Le=!!S.gradientMap,fe=!!S.alphaMap,je=S.alphaTest>0,H=!!S.alphaHash,ye=!!S.extensions,pe=!!U.attributes.uv1,se=!!U.attributes.uv2,ve=!!U.attributes.uv3;let Fe=ss;return S.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Fe=i.toneMapping),{isWebGL2:u,shaderID:z,shaderType:S.type,shaderName:S.name,vertexShader:K,fragmentShader:j,defines:S.defines,customVertexShaderID:q,customFragmentShaderID:X,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,instancing:me,instancingColor:me&&F.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Dr,map:he,matcap:re,envMap:le,envMapMode:le&&k.mapping,envMapCubeUVHeight:G,aoMap:B,lightMap:J,bumpMap:Q,normalMap:ce,displacementMap:f&&ge,emissiveMap:W,normalMapObjectSpace:ce&&S.normalMapType===eT,normalMapTangentSpace:ce&&S.normalMapType===Qb,metalnessMap:Re,roughnessMap:De,anisotropy:qe,anisotropyMap:$,clearcoat:Xe,clearcoatMap:oe,clearcoatNormalMap:ue,clearcoatRoughnessMap:de,iridescence:lt,iridescenceMap:Pe,iridescenceThicknessMap:xe,sheen:O,sheenColorMap:be,sheenRoughnessMap:Ie,specularMap:Je,specularColorMap:_e,specularIntensityMap:it,transmission:A,transmissionMap:ze,thicknessMap:Be,gradientMap:Le,opaque:S.transparent===!1&&S.blending===sa,alphaMap:fe,alphaTest:je,alphaHash:H,combine:S.combine,mapUv:he&&m(S.map.channel),aoMapUv:B&&m(S.aoMap.channel),lightMapUv:J&&m(S.lightMap.channel),bumpMapUv:Q&&m(S.bumpMap.channel),normalMapUv:ce&&m(S.normalMap.channel),displacementMapUv:ge&&m(S.displacementMap.channel),emissiveMapUv:W&&m(S.emissiveMap.channel),metalnessMapUv:Re&&m(S.metalnessMap.channel),roughnessMapUv:De&&m(S.roughnessMap.channel),anisotropyMapUv:$&&m(S.anisotropyMap.channel),clearcoatMapUv:oe&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:be&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&m(S.sheenRoughnessMap.channel),specularMapUv:Je&&m(S.specularMap.channel),specularColorMapUv:_e&&m(S.specularColorMap.channel),specularIntensityMapUv:it&&m(S.specularIntensityMap.channel),transmissionMapUv:ze&&m(S.transmissionMap.channel),thicknessMapUv:Be&&m(S.thicknessMap.channel),alphaMapUv:fe&&m(S.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ce||qe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:pe,vertexUv2s:se,vertexUv3s:ve,pointsUvs:F.isPoints===!0&&!!U.attributes.uv&&(he||fe),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:F.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:N,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:he&&S.map.isVideoTexture===!0&&xt.getTransfer(S.map.colorSpace)===Rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Xi,flipSided:S.side===Hn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ye&&S.extensions.derivatives===!0,extensionFragDepth:ye&&S.extensions.fragDepth===!0,extensionDrawBuffers:ye&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ye&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)b.push(D),b.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(x(b,S),v(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function x(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function v(S,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const b=_[S.type];let D;if(b){const I=Vi[b];D=GT.clone(I.uniforms)}else D=S.uniforms;return D}function M(S,b){let D;for(let I=0,F=l.length;I<F;I++){const P=l[I];if(P.cacheKey===b){D=P,++D.usedTimes;break}}return D===void 0&&(D=new tC(i,b,S,s),l.push(D)),D}function T(S){if(--S.usedTimes===0){const b=l.indexOf(S);l[b]=l[l.length-1],l.pop(),S.destroy()}}function E(S){c.remove(S)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:M,releaseProgram:T,releaseShaderCache:E,programs:l,dispose:C}}function oC(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function aC(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function y_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function S_(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,d,_,m,g){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:m,group:g},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=m,p.group=g),e++,p}function a(h,f,d,_,m,g){const p=o(h,f,d,_,m,g);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function c(h,f,d,_,m,g){const p=o(h,f,d,_,m,g);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||aC),n.length>1&&n.sort(f||y_),r.length>1&&r.sort(f||y_)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function cC(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new S_,i.set(n,[o])):r>=s.length?(o=new S_,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function lC(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new yt};break;case"SpotLight":t={position:new Z,direction:new Z,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[e.id]=t,t}}}function uC(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let hC=0;function fC(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function dC(i,e){const t=new lC,n=uC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new Z);const s=new Z,o=new tn,a=new tn;function c(u,h){let f=0,d=0,_=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let m=0,g=0,p=0,x=0,v=0,y=0,M=0,T=0,E=0,C=0,S=0;u.sort(fC);const b=h===!0?Math.PI:1;for(let I=0,F=u.length;I<F;I++){const P=u[I],U=P.color,V=P.intensity,k=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=U.r*V*b,d+=U.g*V*b,_+=U.b*V*b;else if(P.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(P.sh.coefficients[z],V);S++}else if(P.isDirectionalLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity*b),P.castShadow){const w=P.shadow,L=n.get(P);L.shadowBias=w.bias,L.shadowNormalBias=w.normalBias,L.shadowRadius=w.radius,L.shadowMapSize=w.mapSize,r.directionalShadow[m]=L,r.directionalShadowMap[m]=G,r.directionalShadowMatrix[m]=P.shadow.matrix,y++}r.directional[m]=z,m++}else if(P.isSpotLight){const z=t.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(U).multiplyScalar(V*b),z.distance=k,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,r.spot[p]=z;const w=P.shadow;if(P.map&&(r.spotLightMap[E]=P.map,E++,w.updateMatrices(P),P.castShadow&&C++),r.spotLightMatrix[p]=w.matrix,P.castShadow){const L=n.get(P);L.shadowBias=w.bias,L.shadowNormalBias=w.normalBias,L.shadowRadius=w.radius,L.shadowMapSize=w.mapSize,r.spotShadow[p]=L,r.spotShadowMap[p]=G,T++}p++}else if(P.isRectAreaLight){const z=t.get(P);z.color.copy(U).multiplyScalar(V),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),r.rectArea[x]=z,x++}else if(P.isPointLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity*b),z.distance=P.distance,z.decay=P.decay,P.castShadow){const w=P.shadow,L=n.get(P);L.shadowBias=w.bias,L.shadowNormalBias=w.normalBias,L.shadowRadius=w.radius,L.shadowMapSize=w.mapSize,L.shadowCameraNear=w.camera.near,L.shadowCameraFar=w.camera.far,r.pointShadow[g]=L,r.pointShadowMap[g]=G,r.pointShadowMatrix[g]=P.shadow.matrix,M++}r.point[g]=z,g++}else if(P.isHemisphereLight){const z=t.get(P);z.skyColor.copy(P.color).multiplyScalar(V*b),z.groundColor.copy(P.groundColor).multiplyScalar(V*b),r.hemi[v]=z,v++}}x>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=we.LTC_FLOAT_1,r.rectAreaLTC2=we.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=we.LTC_HALF_1,r.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=_;const D=r.hash;(D.directionalLength!==m||D.pointLength!==g||D.spotLength!==p||D.rectAreaLength!==x||D.hemiLength!==v||D.numDirectionalShadows!==y||D.numPointShadows!==M||D.numSpotShadows!==T||D.numSpotMaps!==E||D.numLightProbes!==S)&&(r.directional.length=m,r.spot.length=p,r.rectArea.length=x,r.point.length=g,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=T+E-C,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=C,r.numLightProbes=S,D.directionalLength=m,D.pointLength=g,D.spotLength=p,D.rectAreaLength=x,D.hemiLength=v,D.numDirectionalShadows=y,D.numPointShadows=M,D.numSpotShadows=T,D.numSpotMaps=E,D.numLightProbes=S,r.version=hC++)}function l(u,h){let f=0,d=0,_=0,m=0,g=0;const p=h.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const y=u[x];if(y.isDirectionalLight){const M=r.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(y.isSpotLight){const M=r.spot[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),_++}else if(y.isRectAreaLight){const M=r.rectArea[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),a.identity(),o.copy(y.matrixWorld),o.premultiply(p),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const M=r.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const M=r.hemi[g];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:c,setupView:l,state:r}}function E_(i,e){const t=new dC(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function pC(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new E_(i,e),t.set(s,[c])):o>=a.length?(c=new E_(i,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class mC extends mh{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gC extends mh{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _C=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xC(i,e,t){let n=new Ux;const r=new bt,s=new bt,o=new cn,a=new mC({depthPacking:Jb}),c=new gC,l={},u=t.maxTextureSize,h={[hs]:Hn,[Hn]:hs,[Xi]:Xi},f=new fs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:_C,fragmentShader:vC}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new mo;_.setAttribute("position",new er(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Ki(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dx;let p=this.type;this.render=function(M,T,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const C=i.getRenderTarget(),S=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),D=i.state;D.setBlending(rs),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const I=p!==fr&&this.type===fr,F=p===fr&&this.type!==fr;for(let P=0,U=M.length;P<U;P++){const V=M[P],k=V.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const G=k.getFrameExtents();if(r.multiply(G),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/G.x),r.x=s.x*G.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/G.y),r.y=s.y*G.y,k.mapSize.y=s.y)),k.map===null||I===!0||F===!0){const w=this.type!==fr?{minFilter:An,magFilter:An}:{};k.map!==null&&k.map.dispose(),k.map=new uo(r.x,r.y,w),k.map.texture.name=V.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const z=k.getViewportCount();for(let w=0;w<z;w++){const L=k.getViewport(w);o.set(s.x*L.x,s.y*L.y,s.x*L.z,s.y*L.w),D.viewport(o),k.updateMatrices(V,w),n=k.getFrustum(),y(T,E,k.camera,V,this.type)}k.isPointLightShadow!==!0&&this.type===fr&&x(k,E),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(C,S,b)};function x(M,T){const E=e.update(m);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new uo(r.x,r.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,E,f,m,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,E,d,m,null)}function v(M,T,E,C){let S=null;const b=E.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(b!==void 0)S=b;else if(S=E.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const D=S.uuid,I=T.uuid;let F=l[D];F===void 0&&(F={},l[D]=F);let P=F[I];P===void 0&&(P=S.clone(),F[I]=P),S=P}if(S.visible=T.visible,S.wireframe=T.wireframe,C===fr?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:h[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,E.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const D=i.properties.get(S);D.light=E}return S}function y(M,T,E,C,S){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===fr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,M.matrixWorld);const I=e.update(M),F=M.material;if(Array.isArray(F)){const P=I.groups;for(let U=0,V=P.length;U<V;U++){const k=P[U],G=F[k.materialIndex];if(G&&G.visible){const z=v(M,G,C,S);i.renderBufferDirect(E,null,I,z,M,k)}}}else if(F.visible){const P=v(M,F,C,S);i.renderBufferDirect(E,null,I,P,M,null)}}const D=M.children;for(let I=0,F=D.length;I<F;I++)y(D[I],T,E,C,S)}}function yC(i,e,t){const n=t.isWebGL2;function r(){let H=!1;const ye=new cn;let pe=null;const se=new cn(0,0,0,0);return{setMask:function(ve){pe!==ve&&!H&&(i.colorMask(ve,ve,ve,ve),pe=ve)},setLocked:function(ve){H=ve},setClear:function(ve,Fe,Te,Ce,Ye){Ye===!0&&(ve*=Ce,Fe*=Ce,Te*=Ce),ye.set(ve,Fe,Te,Ce),se.equals(ye)===!1&&(i.clearColor(ve,Fe,Te,Ce),se.copy(ye))},reset:function(){H=!1,pe=null,se.set(-1,0,0,0)}}}function s(){let H=!1,ye=null,pe=null,se=null;return{setTest:function(ve){ve?he(i.DEPTH_TEST):re(i.DEPTH_TEST)},setMask:function(ve){ye!==ve&&!H&&(i.depthMask(ve),ye=ve)},setFunc:function(ve){if(pe!==ve){switch(ve){case Ab:i.depthFunc(i.NEVER);break;case Rb:i.depthFunc(i.ALWAYS);break;case Cb:i.depthFunc(i.LESS);break;case zu:i.depthFunc(i.LEQUAL);break;case Pb:i.depthFunc(i.EQUAL);break;case Lb:i.depthFunc(i.GEQUAL);break;case Db:i.depthFunc(i.GREATER);break;case Ib:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=ve}},setLocked:function(ve){H=ve},setClear:function(ve){se!==ve&&(i.clearDepth(ve),se=ve)},reset:function(){H=!1,ye=null,pe=null,se=null}}}function o(){let H=!1,ye=null,pe=null,se=null,ve=null,Fe=null,Te=null,Ce=null,Ye=null;return{setTest:function(He){H||(He?he(i.STENCIL_TEST):re(i.STENCIL_TEST))},setMask:function(He){ye!==He&&!H&&(i.stencilMask(He),ye=He)},setFunc:function(He,Ee,Ke){(pe!==He||se!==Ee||ve!==Ke)&&(i.stencilFunc(He,Ee,Ke),pe=He,se=Ee,ve=Ke)},setOp:function(He,Ee,Ke){(Fe!==He||Te!==Ee||Ce!==Ke)&&(i.stencilOp(He,Ee,Ke),Fe=He,Te=Ee,Ce=Ke)},setLocked:function(He){H=He},setClear:function(He){Ye!==He&&(i.clearStencil(He),Ye=He)},reset:function(){H=!1,ye=null,pe=null,se=null,ve=null,Fe=null,Te=null,Ce=null,Ye=null}}}const a=new r,c=new s,l=new o,u=new WeakMap,h=new WeakMap;let f={},d={},_=new WeakMap,m=[],g=null,p=!1,x=null,v=null,y=null,M=null,T=null,E=null,C=null,S=new yt(0,0,0),b=0,D=!1,I=null,F=null,P=null,U=null,V=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,z=0;const w=i.getParameter(i.VERSION);w.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(w)[1]),G=z>=1):w.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(w)[1]),G=z>=2);let L=null,N={};const K=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),q=new cn().fromArray(K),X=new cn().fromArray(j);function ae(H,ye,pe,se){const ve=new Uint8Array(4),Fe=i.createTexture();i.bindTexture(H,Fe),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<pe;Te++)n&&(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)?i.texImage3D(ye,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(ye+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return Fe}const me={};me[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(me[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),he(i.DEPTH_TEST),c.setFunc(zu),Re(!1),De(ig),he(i.CULL_FACE),ge(rs);function he(H){f[H]!==!0&&(i.enable(H),f[H]=!0)}function re(H){f[H]!==!1&&(i.disable(H),f[H]=!1)}function le(H,ye){return d[H]!==ye?(i.bindFramebuffer(H,ye),d[H]=ye,n&&(H===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ye),H===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ye)),!0):!1}function B(H,ye){let pe=m,se=!1;if(H)if(pe=_.get(ye),pe===void 0&&(pe=[],_.set(ye,pe)),H.isWebGLMultipleRenderTargets){const ve=H.texture;if(pe.length!==ve.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let Fe=0,Te=ve.length;Fe<Te;Fe++)pe[Fe]=i.COLOR_ATTACHMENT0+Fe;pe.length=ve.length,se=!0}}else pe[0]!==i.COLOR_ATTACHMENT0&&(pe[0]=i.COLOR_ATTACHMENT0,se=!0);else pe[0]!==i.BACK&&(pe[0]=i.BACK,se=!0);se&&(t.isWebGL2?i.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function J(H){return g!==H?(i.useProgram(H),g=H,!0):!1}const Q={[Ns]:i.FUNC_ADD,[fb]:i.FUNC_SUBTRACT,[db]:i.FUNC_REVERSE_SUBTRACT};if(n)Q[ag]=i.MIN,Q[cg]=i.MAX;else{const H=e.get("EXT_blend_minmax");H!==null&&(Q[ag]=H.MIN_EXT,Q[cg]=H.MAX_EXT)}const ce={[pb]:i.ZERO,[mb]:i.ONE,[gb]:i.SRC_COLOR,[xd]:i.SRC_ALPHA,[Eb]:i.SRC_ALPHA_SATURATE,[yb]:i.DST_COLOR,[vb]:i.DST_ALPHA,[_b]:i.ONE_MINUS_SRC_COLOR,[yd]:i.ONE_MINUS_SRC_ALPHA,[Sb]:i.ONE_MINUS_DST_COLOR,[xb]:i.ONE_MINUS_DST_ALPHA,[Mb]:i.CONSTANT_COLOR,[bb]:i.ONE_MINUS_CONSTANT_COLOR,[Tb]:i.CONSTANT_ALPHA,[wb]:i.ONE_MINUS_CONSTANT_ALPHA};function ge(H,ye,pe,se,ve,Fe,Te,Ce,Ye,He){if(H===rs){p===!0&&(re(i.BLEND),p=!1);return}if(p===!1&&(he(i.BLEND),p=!0),H!==hb){if(H!==x||He!==D){if((v!==Ns||T!==Ns)&&(i.blendEquation(i.FUNC_ADD),v=Ns,T=Ns),He)switch(H){case sa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rg:i.blendFunc(i.ONE,i.ONE);break;case sg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case og:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case sa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rg:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case sg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case og:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}y=null,M=null,E=null,C=null,S.set(0,0,0),b=0,x=H,D=He}return}ve=ve||ye,Fe=Fe||pe,Te=Te||se,(ye!==v||ve!==T)&&(i.blendEquationSeparate(Q[ye],Q[ve]),v=ye,T=ve),(pe!==y||se!==M||Fe!==E||Te!==C)&&(i.blendFuncSeparate(ce[pe],ce[se],ce[Fe],ce[Te]),y=pe,M=se,E=Fe,C=Te),(Ce.equals(S)===!1||Ye!==b)&&(i.blendColor(Ce.r,Ce.g,Ce.b,Ye),S.copy(Ce),b=Ye),x=H,D=!1}function W(H,ye){H.side===Xi?re(i.CULL_FACE):he(i.CULL_FACE);let pe=H.side===Hn;ye&&(pe=!pe),Re(pe),H.blending===sa&&H.transparent===!1?ge(rs):ge(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),a.setMask(H.colorWrite);const se=H.stencilWrite;l.setTest(se),se&&(l.setMask(H.stencilWriteMask),l.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),l.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Xe(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):re(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(H){I!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),I=H)}function De(H){H!==cb?(he(i.CULL_FACE),H!==F&&(H===ig?i.cullFace(i.BACK):H===lb?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):re(i.CULL_FACE),F=H}function qe(H){H!==P&&(G&&i.lineWidth(H),P=H)}function Xe(H,ye,pe){H?(he(i.POLYGON_OFFSET_FILL),(U!==ye||V!==pe)&&(i.polygonOffset(ye,pe),U=ye,V=pe)):re(i.POLYGON_OFFSET_FILL)}function lt(H){H?he(i.SCISSOR_TEST):re(i.SCISSOR_TEST)}function O(H){H===void 0&&(H=i.TEXTURE0+k-1),L!==H&&(i.activeTexture(H),L=H)}function A(H,ye,pe){pe===void 0&&(L===null?pe=i.TEXTURE0+k-1:pe=L);let se=N[pe];se===void 0&&(se={type:void 0,texture:void 0},N[pe]=se),(se.type!==H||se.texture!==ye)&&(L!==pe&&(i.activeTexture(pe),L=pe),i.bindTexture(H,ye||me[H]),se.type=H,se.texture=ye)}function $(){const H=N[L];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function oe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ue(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function de(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Pe(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function be(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ie(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function it(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ze(H){q.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),q.copy(H))}function Be(H){X.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),X.copy(H))}function Le(H,ye){let pe=h.get(ye);pe===void 0&&(pe=new WeakMap,h.set(ye,pe));let se=pe.get(H);se===void 0&&(se=i.getUniformBlockIndex(ye,H.name),pe.set(H,se))}function fe(H,ye){const se=h.get(ye).get(H);u.get(ye)!==se&&(i.uniformBlockBinding(ye,se,H.__bindingPointIndex),u.set(ye,se))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},L=null,N={},d={},_=new WeakMap,m=[],g=null,p=!1,x=null,v=null,y=null,M=null,T=null,E=null,C=null,S=new yt(0,0,0),b=0,D=!1,I=null,F=null,P=null,U=null,V=null,q.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:he,disable:re,bindFramebuffer:le,drawBuffers:B,useProgram:J,setBlending:ge,setMaterial:W,setFlipSided:Re,setCullFace:De,setLineWidth:qe,setPolygonOffset:Xe,setScissorTest:lt,activeTexture:O,bindTexture:A,unbindTexture:$,compressedTexImage2D:oe,compressedTexImage3D:ue,texImage2D:_e,texImage3D:it,updateUBOMapping:Le,uniformBlockBinding:fe,texStorage2D:Ie,texStorage3D:Je,texSubImage2D:de,texSubImage3D:Pe,compressedTexSubImage2D:xe,compressedTexSubImage3D:be,scissor:ze,viewport:Be,reset:je}}function SC(i,e,t,n,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let m;const g=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(O,A){return p?new OffscreenCanvas(O,A):Uc("canvas")}function v(O,A,$,oe){let ue=1;if((O.width>oe||O.height>oe)&&(ue=oe/Math.max(O.width,O.height)),ue<1||A===!0)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap){const de=A?Xu:Math.floor,Pe=de(ue*O.width),xe=de(ue*O.height);m===void 0&&(m=x(Pe,xe));const be=$?x(Pe,xe):m;return be.width=Pe,be.height=xe,be.getContext("2d").drawImage(O,0,0,Pe,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+Pe+"x"+xe+")."),be}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),O;return O}function y(O){return wd(O.width)&&wd(O.height)}function M(O){return a?!1:O.wrapS!==Fi||O.wrapT!==Fi||O.minFilter!==An&&O.minFilter!==pi}function T(O,A){return O.generateMipmaps&&A&&O.minFilter!==An&&O.minFilter!==pi}function E(O){i.generateMipmap(O)}function C(O,A,$,oe,ue=!1){if(a===!1)return A;if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let de=A;if(A===i.RED&&($===i.FLOAT&&(de=i.R32F),$===i.HALF_FLOAT&&(de=i.R16F),$===i.UNSIGNED_BYTE&&(de=i.R8)),A===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(de=i.R8UI),$===i.UNSIGNED_SHORT&&(de=i.R16UI),$===i.UNSIGNED_INT&&(de=i.R32UI),$===i.BYTE&&(de=i.R8I),$===i.SHORT&&(de=i.R16I),$===i.INT&&(de=i.R32I)),A===i.RG&&($===i.FLOAT&&(de=i.RG32F),$===i.HALF_FLOAT&&(de=i.RG16F),$===i.UNSIGNED_BYTE&&(de=i.RG8)),A===i.RGBA){const Pe=ue?Hu:xt.getTransfer(oe);$===i.FLOAT&&(de=i.RGBA32F),$===i.HALF_FLOAT&&(de=i.RGBA16F),$===i.UNSIGNED_BYTE&&(de=Pe===Rt?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(de=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(de=i.RGB5_A1)}return(de===i.R16F||de===i.R32F||de===i.RG16F||de===i.RG32F||de===i.RGBA16F||de===i.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function S(O,A,$){return T(O,$)===!0||O.isFramebufferTexture&&O.minFilter!==An&&O.minFilter!==pi?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function b(O){return O===An||O===lg||O===tf?i.NEAREST:i.LINEAR}function D(O){const A=O.target;A.removeEventListener("dispose",D),F(A),A.isVideoTexture&&_.delete(A)}function I(O){const A=O.target;A.removeEventListener("dispose",I),U(A)}function F(O){const A=n.get(O);if(A.__webglInit===void 0)return;const $=O.source,oe=g.get($);if(oe){const ue=oe[A.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&P(O),Object.keys(oe).length===0&&g.delete($)}n.remove(O)}function P(O){const A=n.get(O);i.deleteTexture(A.__webglTexture);const $=O.source,oe=g.get($);delete oe[A.__cacheKey],o.memory.textures--}function U(O){const A=O.texture,$=n.get(O),oe=n.get(A);if(oe.__webglTexture!==void 0&&(i.deleteTexture(oe.__webglTexture),o.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray($.__webglFramebuffer[ue]))for(let de=0;de<$.__webglFramebuffer[ue].length;de++)i.deleteFramebuffer($.__webglFramebuffer[ue][de]);else i.deleteFramebuffer($.__webglFramebuffer[ue]);$.__webglDepthbuffer&&i.deleteRenderbuffer($.__webglDepthbuffer[ue])}else{if(Array.isArray($.__webglFramebuffer))for(let ue=0;ue<$.__webglFramebuffer.length;ue++)i.deleteFramebuffer($.__webglFramebuffer[ue]);else i.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&i.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&i.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let ue=0;ue<$.__webglColorRenderbuffer.length;ue++)$.__webglColorRenderbuffer[ue]&&i.deleteRenderbuffer($.__webglColorRenderbuffer[ue]);$.__webglDepthRenderbuffer&&i.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let ue=0,de=A.length;ue<de;ue++){const Pe=n.get(A[ue]);Pe.__webglTexture&&(i.deleteTexture(Pe.__webglTexture),o.memory.textures--),n.remove(A[ue])}n.remove(A),n.remove(O)}let V=0;function k(){V=0}function G(){const O=V;return O>=c&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+c),V+=1,O}function z(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function w(O,A){const $=n.get(O);if(O.isVideoTexture&&Xe(O),O.isRenderTargetTexture===!1&&O.version>0&&$.__version!==O.version){const oe=O.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he($,O,A);return}}t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+A)}function L(O,A){const $=n.get(O);if(O.version>0&&$.__version!==O.version){he($,O,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+A)}function N(O,A){const $=n.get(O);if(O.version>0&&$.__version!==O.version){he($,O,A);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+A)}function K(O,A){const $=n.get(O);if(O.version>0&&$.__version!==O.version){re($,O,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+A)}const j={[Md]:i.REPEAT,[Fi]:i.CLAMP_TO_EDGE,[bd]:i.MIRRORED_REPEAT},q={[An]:i.NEAREST,[lg]:i.NEAREST_MIPMAP_NEAREST,[tf]:i.NEAREST_MIPMAP_LINEAR,[pi]:i.LINEAR,[Hb]:i.LINEAR_MIPMAP_NEAREST,[Dc]:i.LINEAR_MIPMAP_LINEAR},X={[tT]:i.NEVER,[cT]:i.ALWAYS,[nT]:i.LESS,[rT]:i.LEQUAL,[iT]:i.EQUAL,[aT]:i.GEQUAL,[sT]:i.GREATER,[oT]:i.NOTEQUAL};function ae(O,A,$){if($?(i.texParameteri(O,i.TEXTURE_WRAP_S,j[A.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,j[A.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,j[A.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,q[A.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,q[A.minFilter])):(i.texParameteri(O,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(O,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==Fi||A.wrapT!==Fi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(O,i.TEXTURE_MAG_FILTER,b(A.magFilter)),i.texParameteri(O,i.TEXTURE_MIN_FILTER,b(A.minFilter)),A.minFilter!==An&&A.minFilter!==pi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,X[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===An||A.minFilter!==tf&&A.minFilter!==Dc||A.type===Zr&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Ic&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(O,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function me(O,A){let $=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",D));const oe=A.source;let ue=g.get(oe);ue===void 0&&(ue={},g.set(oe,ue));const de=z(A);if(de!==O.__cacheKey){ue[de]===void 0&&(ue[de]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ue[de].usedTimes++;const Pe=ue[O.__cacheKey];Pe!==void 0&&(ue[O.__cacheKey].usedTimes--,Pe.usedTimes===0&&P(A)),O.__cacheKey=de,O.__webglTexture=ue[de].texture}return $}function he(O,A,$){let oe=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(oe=i.TEXTURE_3D);const ue=me(O,A),de=A.source;t.bindTexture(oe,O.__webglTexture,i.TEXTURE0+$);const Pe=n.get(de);if(de.version!==Pe.__version||ue===!0){t.activeTexture(i.TEXTURE0+$);const xe=xt.getPrimaries(xt.workingColorSpace),be=A.colorSpace===_i?null:xt.getPrimaries(A.colorSpace),Ie=A.colorSpace===_i||xe===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Je=M(A)&&y(A.image)===!1;let _e=v(A.image,Je,!1,u);_e=lt(A,_e);const it=y(_e)||a,ze=s.convert(A.format,A.colorSpace);let Be=s.convert(A.type),Le=C(A.internalFormat,ze,Be,A.colorSpace,A.isVideoTexture);ae(oe,A,it);let fe;const je=A.mipmaps,H=a&&A.isVideoTexture!==!0,ye=Pe.__version===void 0||ue===!0,pe=S(A,_e,it);if(A.isDepthTexture)Le=i.DEPTH_COMPONENT,a?A.type===Zr?Le=i.DEPTH_COMPONENT32F:A.type===jr?Le=i.DEPTH_COMPONENT24:A.type===eo?Le=i.DEPTH24_STENCIL8:Le=i.DEPTH_COMPONENT16:A.type===Zr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===to&&Le===i.DEPTH_COMPONENT&&A.type!==Mp&&A.type!==jr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=jr,Be=s.convert(A.type)),A.format===xa&&Le===i.DEPTH_COMPONENT&&(Le=i.DEPTH_STENCIL,A.type!==eo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=eo,Be=s.convert(A.type))),ye&&(H?t.texStorage2D(i.TEXTURE_2D,1,Le,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,Le,_e.width,_e.height,0,ze,Be,null));else if(A.isDataTexture)if(je.length>0&&it){H&&ye&&t.texStorage2D(i.TEXTURE_2D,pe,Le,je[0].width,je[0].height);for(let se=0,ve=je.length;se<ve;se++)fe=je[se],H?t.texSubImage2D(i.TEXTURE_2D,se,0,0,fe.width,fe.height,ze,Be,fe.data):t.texImage2D(i.TEXTURE_2D,se,Le,fe.width,fe.height,0,ze,Be,fe.data);A.generateMipmaps=!1}else H?(ye&&t.texStorage2D(i.TEXTURE_2D,pe,Le,_e.width,_e.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e.width,_e.height,ze,Be,_e.data)):t.texImage2D(i.TEXTURE_2D,0,Le,_e.width,_e.height,0,ze,Be,_e.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){H&&ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Le,je[0].width,je[0].height,_e.depth);for(let se=0,ve=je.length;se<ve;se++)fe=je[se],A.format!==ki?ze!==null?H?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,fe.width,fe.height,_e.depth,ze,fe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Le,fe.width,fe.height,_e.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,fe.width,fe.height,_e.depth,ze,Be,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Le,fe.width,fe.height,_e.depth,0,ze,Be,fe.data)}else{H&&ye&&t.texStorage2D(i.TEXTURE_2D,pe,Le,je[0].width,je[0].height);for(let se=0,ve=je.length;se<ve;se++)fe=je[se],A.format!==ki?ze!==null?H?t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,fe.width,fe.height,ze,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Le,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?t.texSubImage2D(i.TEXTURE_2D,se,0,0,fe.width,fe.height,ze,Be,fe.data):t.texImage2D(i.TEXTURE_2D,se,Le,fe.width,fe.height,0,ze,Be,fe.data)}else if(A.isDataArrayTexture)H?(ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Le,_e.width,_e.height,_e.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,ze,Be,_e.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,_e.width,_e.height,_e.depth,0,ze,Be,_e.data);else if(A.isData3DTexture)H?(ye&&t.texStorage3D(i.TEXTURE_3D,pe,Le,_e.width,_e.height,_e.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,ze,Be,_e.data)):t.texImage3D(i.TEXTURE_3D,0,Le,_e.width,_e.height,_e.depth,0,ze,Be,_e.data);else if(A.isFramebufferTexture){if(ye)if(H)t.texStorage2D(i.TEXTURE_2D,pe,Le,_e.width,_e.height);else{let se=_e.width,ve=_e.height;for(let Fe=0;Fe<pe;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,Le,se,ve,0,ze,Be,null),se>>=1,ve>>=1}}else if(je.length>0&&it){H&&ye&&t.texStorage2D(i.TEXTURE_2D,pe,Le,je[0].width,je[0].height);for(let se=0,ve=je.length;se<ve;se++)fe=je[se],H?t.texSubImage2D(i.TEXTURE_2D,se,0,0,ze,Be,fe):t.texImage2D(i.TEXTURE_2D,se,Le,ze,Be,fe);A.generateMipmaps=!1}else H?(ye&&t.texStorage2D(i.TEXTURE_2D,pe,Le,_e.width,_e.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ze,Be,_e)):t.texImage2D(i.TEXTURE_2D,0,Le,ze,Be,_e);T(A,it)&&E(oe),Pe.__version=de.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function re(O,A,$){if(A.image.length!==6)return;const oe=me(O,A),ue=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+$);const de=n.get(ue);if(ue.version!==de.__version||oe===!0){t.activeTexture(i.TEXTURE0+$);const Pe=xt.getPrimaries(xt.workingColorSpace),xe=A.colorSpace===_i?null:xt.getPrimaries(A.colorSpace),be=A.colorSpace===_i||Pe===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ie=A.isCompressedTexture||A.image[0].isCompressedTexture,Je=A.image[0]&&A.image[0].isDataTexture,_e=[];for(let se=0;se<6;se++)!Ie&&!Je?_e[se]=v(A.image[se],!1,!0,l):_e[se]=Je?A.image[se].image:A.image[se],_e[se]=lt(A,_e[se]);const it=_e[0],ze=y(it)||a,Be=s.convert(A.format,A.colorSpace),Le=s.convert(A.type),fe=C(A.internalFormat,Be,Le,A.colorSpace),je=a&&A.isVideoTexture!==!0,H=de.__version===void 0||oe===!0;let ye=S(A,it,ze);ae(i.TEXTURE_CUBE_MAP,A,ze);let pe;if(Ie){je&&H&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,fe,it.width,it.height);for(let se=0;se<6;se++){pe=_e[se].mipmaps;for(let ve=0;ve<pe.length;ve++){const Fe=pe[ve];A.format!==ki?Be!==null?je?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve,0,0,Fe.width,Fe.height,Be,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve,fe,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve,0,0,Fe.width,Fe.height,Be,Le,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve,fe,Fe.width,Fe.height,0,Be,Le,Fe.data)}}}else{pe=A.mipmaps,je&&H&&(pe.length>0&&ye++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,fe,_e[0].width,_e[0].height));for(let se=0;se<6;se++)if(Je){je?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,_e[se].width,_e[se].height,Be,Le,_e[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,fe,_e[se].width,_e[se].height,0,Be,Le,_e[se].data);for(let ve=0;ve<pe.length;ve++){const Te=pe[ve].image[se].image;je?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve+1,0,0,Te.width,Te.height,Be,Le,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve+1,fe,Te.width,Te.height,0,Be,Le,Te.data)}}else{je?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Be,Le,_e[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,fe,Be,Le,_e[se]);for(let ve=0;ve<pe.length;ve++){const Fe=pe[ve];je?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve+1,0,0,Be,Le,Fe.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve+1,fe,Be,Le,Fe.image[se])}}}T(A,ze)&&E(i.TEXTURE_CUBE_MAP),de.__version=ue.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function le(O,A,$,oe,ue,de){const Pe=s.convert($.format,$.colorSpace),xe=s.convert($.type),be=C($.internalFormat,Pe,xe,$.colorSpace);if(!n.get(A).__hasExternalTextures){const Je=Math.max(1,A.width>>de),_e=Math.max(1,A.height>>de);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,de,be,Je,_e,A.depth,0,Pe,xe,null):t.texImage2D(ue,de,be,Je,_e,0,Pe,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),qe(A)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,ue,n.get($).__webglTexture,0,De(A)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,ue,n.get($).__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function B(O,A,$){if(i.bindRenderbuffer(i.RENDERBUFFER,O),A.depthBuffer&&!A.stencilBuffer){let oe=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if($||qe(A)){const ue=A.depthTexture;ue&&ue.isDepthTexture&&(ue.type===Zr?oe=i.DEPTH_COMPONENT32F:ue.type===jr&&(oe=i.DEPTH_COMPONENT24));const de=De(A);qe(A)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,oe,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,de,oe,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,oe,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,O)}else if(A.depthBuffer&&A.stencilBuffer){const oe=De(A);$&&qe(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,i.DEPTH24_STENCIL8,A.width,A.height):qe(A)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,O)}else{const oe=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ue=0;ue<oe.length;ue++){const de=oe[ue],Pe=s.convert(de.format,de.colorSpace),xe=s.convert(de.type),be=C(de.internalFormat,Pe,xe,de.colorSpace),Ie=De(A);$&&qe(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,be,A.width,A.height):qe(A)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,be,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,be,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function J(O,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),w(A.depthTexture,0);const oe=n.get(A.depthTexture).__webglTexture,ue=De(A);if(A.depthTexture.format===to)qe(A)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(A.depthTexture.format===xa)qe(A)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Q(O){const A=n.get(O),$=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!A.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");J(A.__webglFramebuffer,O)}else if($){A.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[oe]),A.__webglDepthbuffer[oe]=i.createRenderbuffer(),B(A.__webglDepthbuffer[oe],O,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),B(A.__webglDepthbuffer,O,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(O,A,$){const oe=n.get(O);A!==void 0&&le(oe.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&Q(O)}function ge(O){const A=O.texture,$=n.get(O),oe=n.get(A);O.addEventListener("dispose",I),O.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=A.version,o.memory.textures++);const ue=O.isWebGLCubeRenderTarget===!0,de=O.isWebGLMultipleRenderTargets===!0,Pe=y(O)||a;if(ue){$.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(a&&A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer[xe]=[];for(let be=0;be<A.mipmaps.length;be++)$.__webglFramebuffer[xe][be]=i.createFramebuffer()}else $.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer=[];for(let xe=0;xe<A.mipmaps.length;xe++)$.__webglFramebuffer[xe]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(de)if(r.drawBuffers){const xe=O.texture;for(let be=0,Ie=xe.length;be<Ie;be++){const Je=n.get(xe[be]);Je.__webglTexture===void 0&&(Je.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&O.samples>0&&qe(O)===!1){const xe=de?A:[A];$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let be=0;be<xe.length;be++){const Ie=xe[be];$.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[be]);const Je=s.convert(Ie.format,Ie.colorSpace),_e=s.convert(Ie.type),it=C(Ie.internalFormat,Je,_e,Ie.colorSpace,O.isXRRenderTarget===!0),ze=De(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,it,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,$.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),B($.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),ae(i.TEXTURE_CUBE_MAP,A,Pe);for(let xe=0;xe<6;xe++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let be=0;be<A.mipmaps.length;be++)le($.__webglFramebuffer[xe][be],O,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,be);else le($.__webglFramebuffer[xe],O,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);T(A,Pe)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){const xe=O.texture;for(let be=0,Ie=xe.length;be<Ie;be++){const Je=xe[be],_e=n.get(Je);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),ae(i.TEXTURE_2D,Je,Pe),le($.__webglFramebuffer,O,Je,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,0),T(Je,Pe)&&E(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(a?xe=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,oe.__webglTexture),ae(xe,A,Pe),a&&A.mipmaps&&A.mipmaps.length>0)for(let be=0;be<A.mipmaps.length;be++)le($.__webglFramebuffer[be],O,A,i.COLOR_ATTACHMENT0,xe,be);else le($.__webglFramebuffer,O,A,i.COLOR_ATTACHMENT0,xe,0);T(A,Pe)&&E(xe),t.unbindTexture()}O.depthBuffer&&Q(O)}function W(O){const A=y(O)||a,$=O.isWebGLMultipleRenderTargets===!0?O.texture:[O.texture];for(let oe=0,ue=$.length;oe<ue;oe++){const de=$[oe];if(T(de,A)){const Pe=O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xe=n.get(de).__webglTexture;t.bindTexture(Pe,xe),E(Pe),t.unbindTexture()}}}function Re(O){if(a&&O.samples>0&&qe(O)===!1){const A=O.isWebGLMultipleRenderTargets?O.texture:[O.texture],$=O.width,oe=O.height;let ue=i.COLOR_BUFFER_BIT;const de=[],Pe=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(O),be=O.isWebGLMultipleRenderTargets===!0;if(be)for(let Ie=0;Ie<A.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Ie=0;Ie<A.length;Ie++){de.push(i.COLOR_ATTACHMENT0+Ie),O.depthBuffer&&de.push(Pe);const Je=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(Je===!1&&(O.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),be&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Ie]),Je===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Pe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Pe])),be){const _e=n.get(A[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,$,oe,0,0,$,oe,ue,i.NEAREST),d&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let Ie=0;Ie<A.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Ie]);const Je=n.get(A[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,Je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function De(O){return Math.min(h,O.samples)}function qe(O){const A=n.get(O);return a&&O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Xe(O){const A=o.render.frame;_.get(O)!==A&&(_.set(O,A),O.update())}function lt(O,A){const $=O.colorSpace,oe=O.format,ue=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||O.format===Td||$!==Dr&&$!==_i&&(xt.getTransfer($)===Rt?a===!1?e.has("EXT_sRGB")===!0&&oe===ki?(O.format=Td,O.minFilter=pi,O.generateMipmaps=!1):A=bx.sRGBToLinear(A):(oe!==ki||ue!==os)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),A}this.allocateTextureUnit=G,this.resetTextureUnits=k,this.setTexture2D=w,this.setTexture2DArray=L,this.setTexture3D=N,this.setTextureCube=K,this.rebindTextures=ce,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=le,this.useMultisampledRTT=qe}function EC(i,e,t){const n=t.isWebGL2;function r(s,o=_i){let a;const c=xt.getTransfer(o);if(s===os)return i.UNSIGNED_BYTE;if(s===_x)return i.UNSIGNED_SHORT_4_4_4_4;if(s===vx)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Gb)return i.BYTE;if(s===Vb)return i.SHORT;if(s===Mp)return i.UNSIGNED_SHORT;if(s===gx)return i.INT;if(s===jr)return i.UNSIGNED_INT;if(s===Zr)return i.FLOAT;if(s===Ic)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Wb)return i.ALPHA;if(s===ki)return i.RGBA;if(s===Xb)return i.LUMINANCE;if(s===qb)return i.LUMINANCE_ALPHA;if(s===to)return i.DEPTH_COMPONENT;if(s===xa)return i.DEPTH_STENCIL;if(s===Td)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===$b)return i.RED;if(s===xx)return i.RED_INTEGER;if(s===Yb)return i.RG;if(s===yx)return i.RG_INTEGER;if(s===Sx)return i.RGBA_INTEGER;if(s===nf||s===rf||s===sf||s===of)if(c===Rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===nf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===rf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===sf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===of)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===nf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===rf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===sf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===of)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ug||s===hg||s===fg||s===dg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ug)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===hg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fg)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===dg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kb)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===pg||s===mg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===pg)return c===Rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===mg)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===gg||s===_g||s===vg||s===xg||s===yg||s===Sg||s===Eg||s===Mg||s===bg||s===Tg||s===wg||s===Ag||s===Rg||s===Cg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===gg)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===_g)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===vg)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===xg)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===yg)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Sg)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Eg)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Mg)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bg)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Tg)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wg)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ag)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rg)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Cg)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===af||s===Pg||s===Lg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===af)return c===Rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Pg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Lg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===jb||s===Dg||s===Ig||s===Og)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===af)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Dg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ig)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Og)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===eo?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class MC extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Jr extends ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bC={type:"move"};class Pf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,n),p=this._getHandJoint(l,m);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;l.inputState.pinching&&f>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bC)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Jr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class TC extends Gn{constructor(e,t,n,r,s,o,a,c,l,u){if(u=u!==void 0?u:to,u!==to&&u!==xa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===to&&(n=jr),n===void 0&&u===xa&&(n=eo),super(null,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:An,this.minFilter=c!==void 0?c:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wC extends wa{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,_=null;const m=t.getContextAttributes();let g=null,p=null;const x=[],v=[],y=new ii;y.layers.enable(1),y.viewport=new cn;const M=new ii;M.layers.enable(2),M.viewport=new cn;const T=[y,M],E=new MC;E.layers.enable(1),E.layers.enable(2);let C=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let N=x[L];return N===void 0&&(N=new Pf,x[L]=N),N.getTargetRaySpace()},this.getControllerGrip=function(L){let N=x[L];return N===void 0&&(N=new Pf,x[L]=N),N.getGripSpace()},this.getHand=function(L){let N=x[L];return N===void 0&&(N=new Pf,x[L]=N),N.getHandSpace()};function b(L){const N=v.indexOf(L.inputSource);if(N===-1)return;const K=x[N];K!==void 0&&(K.update(L.inputSource,L.frame,l||o),K.dispatchEvent({type:L.type,data:L.inputSource}))}function D(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",I);for(let L=0;L<x.length;L++){const N=v[L];N!==null&&(v[L]=null,x[L].disconnect(N))}C=null,S=null,e.setRenderTarget(g),d=null,f=null,h=null,r=null,p=null,w.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){s=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(L){l=L},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(L){if(r=L,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",D),r.addEventListener("inputsourceschange",I),m.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const N={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,N),r.updateRenderState({baseLayer:d}),p=new uo(d.framebufferWidth,d.framebufferHeight,{format:ki,type:os,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let N=null,K=null,j=null;m.depth&&(j=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,N=m.stencil?xa:to,K=m.stencil?eo:jr);const q={colorFormat:t.RGBA8,depthFormat:j,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(q),r.updateRenderState({layers:[f]}),p=new uo(f.textureWidth,f.textureHeight,{format:ki,type:os,depthTexture:new TC(f.textureWidth,f.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const X=e.properties.get(p);X.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),w.setContext(r),w.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(L){for(let N=0;N<L.removed.length;N++){const K=L.removed[N],j=v.indexOf(K);j>=0&&(v[j]=null,x[j].disconnect(K))}for(let N=0;N<L.added.length;N++){const K=L.added[N];let j=v.indexOf(K);if(j===-1){for(let X=0;X<x.length;X++)if(X>=v.length){v.push(K),j=X;break}else if(v[X]===null){v[X]=K,j=X;break}if(j===-1)break}const q=x[j];q&&q.connect(K)}}const F=new Z,P=new Z;function U(L,N,K){F.setFromMatrixPosition(N.matrixWorld),P.setFromMatrixPosition(K.matrixWorld);const j=F.distanceTo(P),q=N.projectionMatrix.elements,X=K.projectionMatrix.elements,ae=q[14]/(q[10]-1),me=q[14]/(q[10]+1),he=(q[9]+1)/q[5],re=(q[9]-1)/q[5],le=(q[8]-1)/q[0],B=(X[8]+1)/X[0],J=ae*le,Q=ae*B,ce=j/(-le+B),ge=ce*-le;N.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(ge),L.translateZ(ce),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const W=ae+ce,Re=me+ce,De=J-ge,qe=Q+(j-ge),Xe=he*me/Re*W,lt=re*me/Re*W;L.projectionMatrix.makePerspective(De,qe,Xe,lt,W,Re),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}function V(L,N){N===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(N.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(r===null)return;E.near=M.near=y.near=L.near,E.far=M.far=y.far=L.far,(C!==E.near||S!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,S=E.far);const N=L.parent,K=E.cameras;V(E,N);for(let j=0;j<K.length;j++)V(K[j],N);K.length===2?U(E,y,M):E.projectionMatrix.copy(y.projectionMatrix),k(L,E,N)};function k(L,N,K){K===null?L.matrix.copy(N.matrixWorld):(L.matrix.copy(K.matrixWorld),L.matrix.invert(),L.matrix.multiply(N.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(N.projectionMatrix),L.projectionMatrixInverse.copy(N.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=Oc*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(L){c=L,f!==null&&(f.fixedFoveation=L),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=L)};let G=null;function z(L,N){if(u=N.getViewerPose(l||o),_=N,u!==null){const K=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let j=!1;K.length!==E.cameras.length&&(E.cameras.length=0,j=!0);for(let q=0;q<K.length;q++){const X=K[q];let ae=null;if(d!==null)ae=d.getViewport(X);else{const he=h.getViewSubImage(f,X);ae=he.viewport,q===0&&(e.setRenderTargetTextures(p,he.colorTexture,f.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(p))}let me=T[q];me===void 0&&(me=new ii,me.layers.enable(q),me.viewport=new cn,T[q]=me),me.matrix.fromArray(X.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(X.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(ae.x,ae.y,ae.width,ae.height),q===0&&(E.matrix.copy(me.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),j===!0&&E.cameras.push(me)}}for(let K=0;K<x.length;K++){const j=v[K],q=x[K];j!==null&&q!==void 0&&q.update(j,N,l||o)}G&&G(L,N),N.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:N}),_=null}const w=new Nx;w.setAnimationLoop(z),this.setAnimationLoop=function(L){G=L},this.dispose=function(){}}}function AC(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Dx(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,x,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),_(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),m(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,x,v):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Hn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Hn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Hn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function m(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function RC(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function l(x,v){let y=r[x.id];y===void 0&&(_(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",g));const M=v.program;n.updateUBOMapping(x,M);const T=e.render.frame;s[x.id]!==T&&(f(x),s[x.id]=T)}function u(x){const v=h();x.__bindingPointIndex=v;const y=i.createBuffer(),M=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,M,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=r[x.id],y=x.uniforms,M=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,E=y.length;T<E;T++){const C=y[T];if(d(C,T,M)===!0){const S=C.__offset,b=Array.isArray(C.value)?C.value:[C.value];let D=0;for(let I=0;I<b.length;I++){const F=b[I],P=m(F);typeof F=="number"?(C.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,S+D,C.__data)):F.isMatrix3?(C.__data[0]=F.elements[0],C.__data[1]=F.elements[1],C.__data[2]=F.elements[2],C.__data[3]=F.elements[0],C.__data[4]=F.elements[3],C.__data[5]=F.elements[4],C.__data[6]=F.elements[5],C.__data[7]=F.elements[0],C.__data[8]=F.elements[6],C.__data[9]=F.elements[7],C.__data[10]=F.elements[8],C.__data[11]=F.elements[0]):(F.toArray(C.__data,D),D+=P.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,S,C.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,v,y){const M=x.value;if(y[v]===void 0){if(typeof M=="number")y[v]=M;else{const T=Array.isArray(M)?M:[M],E=[];for(let C=0;C<T.length;C++)E.push(T[C].clone());y[v]=E}return!0}else if(typeof M=="number"){if(y[v]!==M)return y[v]=M,!0}else{const T=Array.isArray(y[v])?y[v]:[y[v]],E=Array.isArray(M)?M:[M];for(let C=0;C<T.length;C++){const S=T[C];if(S.equals(E[C])===!1)return S.copy(E[C]),!0}}return!1}function _(x){const v=x.uniforms;let y=0;const M=16;let T=0;for(let E=0,C=v.length;E<C;E++){const S=v[E],b={boundary:0,storage:0},D=Array.isArray(S.value)?S.value:[S.value];for(let I=0,F=D.length;I<F;I++){const P=D[I],U=m(P);b.boundary+=U.boundary,b.storage+=U.storage}if(S.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,E>0){T=y%M;const I=M-T;T!==0&&I-b.boundary<0&&(y+=M-T,S.__offset=y)}y+=b.storage}return T=y%M,T>0&&(y+=M-T),x.__size=y,x.__cache={},this}function m(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class Hx{constructor(e={}){const{canvas:t=MT(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),_=new Int32Array(4);let m=null,g=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this._useLegacyLights=!1,this.toneMapping=ss,this.toneMappingExposure=1;const v=this;let y=!1,M=0,T=0,E=null,C=-1,S=null;const b=new cn,D=new cn;let I=null;const F=new yt(0);let P=0,U=t.width,V=t.height,k=1,G=null,z=null;const w=new cn(0,0,U,V),L=new cn(0,0,U,V);let N=!1;const K=new Ux;let j=!1,q=!1,X=null;const ae=new tn,me=new bt,he=new Z,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return E===null?k:1}let B=n;function J(R,Y){for(let ee=0;ee<R.length;ee++){const ne=R[ee],te=t.getContext(ne,Y);if(te!==null)return te}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ep}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",ye,!1),B===null){const Y=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&Y.shift(),B=J(Y,R),B===null)throw J(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Q,ce,ge,W,Re,De,qe,Xe,lt,O,A,$,oe,ue,de,Pe,xe,be,Ie,Je,_e,it,ze,Be;function Le(){Q=new kA(B),ce=new LA(B,Q,e),Q.init(ce),it=new EC(B,Q,ce),ge=new yC(B,Q,ce),W=new HA(B),Re=new oC,De=new SC(B,Q,ge,Re,ce,it,W),qe=new IA(v),Xe=new FA(v),lt=new jT(B,ce),ze=new CA(B,Q,lt,ce),O=new BA(B,lt,W,ze),A=new XA(B,O,lt,W),Ie=new WA(B,ce,De),Pe=new DA(Re),$=new sC(v,qe,Xe,Q,ce,ze,Pe),oe=new AC(v,Re),ue=new cC,de=new pC(Q,ce),be=new RA(v,qe,Xe,ge,A,f,c),xe=new xC(v,A,ce),Be=new RC(B,W,ce,ge),Je=new PA(B,Q,W,ce),_e=new zA(B,Q,W,ce),W.programs=$.programs,v.capabilities=ce,v.extensions=Q,v.properties=Re,v.renderLists=ue,v.shadowMap=xe,v.state=ge,v.info=W}Le();const fe=new wC(v,B);this.xr=fe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=Q.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Q.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(R){R!==void 0&&(k=R,this.setSize(U,V,!1))},this.getSize=function(R){return R.set(U,V)},this.setSize=function(R,Y,ee=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=R,V=Y,t.width=Math.floor(R*k),t.height=Math.floor(Y*k),ee===!0&&(t.style.width=R+"px",t.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(U*k,V*k).floor()},this.setDrawingBufferSize=function(R,Y,ee){U=R,V=Y,k=ee,t.width=Math.floor(R*ee),t.height=Math.floor(Y*ee),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(b)},this.getViewport=function(R){return R.copy(w)},this.setViewport=function(R,Y,ee,ne){R.isVector4?w.set(R.x,R.y,R.z,R.w):w.set(R,Y,ee,ne),ge.viewport(b.copy(w).multiplyScalar(k).floor())},this.getScissor=function(R){return R.copy(L)},this.setScissor=function(R,Y,ee,ne){R.isVector4?L.set(R.x,R.y,R.z,R.w):L.set(R,Y,ee,ne),ge.scissor(D.copy(L).multiplyScalar(k).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(R){ge.setScissorTest(N=R)},this.setOpaqueSort=function(R){G=R},this.setTransparentSort=function(R){z=R},this.getClearColor=function(R){return R.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(R=!0,Y=!0,ee=!0){let ne=0;if(R){let te=!1;if(E!==null){const Me=E.texture.format;te=Me===Sx||Me===yx||Me===xx}if(te){const Me=E.texture.type,Ue=Me===os||Me===jr||Me===Mp||Me===eo||Me===_x||Me===vx,Ge=be.getClearColor(),Ne=be.getClearAlpha(),ke=Ge.r,Ve=Ge.g,Ze=Ge.b;Ue?(d[0]=ke,d[1]=Ve,d[2]=Ze,d[3]=Ne,B.clearBufferuiv(B.COLOR,0,d)):(_[0]=ke,_[1]=Ve,_[2]=Ze,_[3]=Ne,B.clearBufferiv(B.COLOR,0,_))}else ne|=B.COLOR_BUFFER_BIT}Y&&(ne|=B.DEPTH_BUFFER_BIT),ee&&(ne|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),ue.dispose(),de.dispose(),Re.dispose(),qe.dispose(),Xe.dispose(),A.dispose(),ze.dispose(),Be.dispose(),$.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Ye),fe.removeEventListener("sessionend",He),X&&(X.dispose(),X=null),Ee.stop()};function je(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=W.autoReset,Y=xe.enabled,ee=xe.autoUpdate,ne=xe.needsUpdate,te=xe.type;Le(),W.autoReset=R,xe.enabled=Y,xe.autoUpdate=ee,xe.needsUpdate=ne,xe.type=te}function ye(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pe(R){const Y=R.target;Y.removeEventListener("dispose",pe),se(Y)}function se(R){ve(R),Re.remove(R)}function ve(R){const Y=Re.get(R).programs;Y!==void 0&&(Y.forEach(function(ee){$.releaseProgram(ee)}),R.isShaderMaterial&&$.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ee,ne,te,Me){Y===null&&(Y=re);const Ue=te.isMesh&&te.matrixWorld.determinant()<0,Ge=At(R,Y,ee,ne,te);ge.setMaterial(ne,Ue);let Ne=ee.index,ke=1;if(ne.wireframe===!0){if(Ne=O.getWireframeAttribute(ee),Ne===void 0)return;ke=2}const Ve=ee.drawRange,Ze=ee.attributes.position;let Pt=Ve.start*ke,qt=(Ve.start+Ve.count)*ke;Me!==null&&(Pt=Math.max(Pt,Me.start*ke),qt=Math.min(qt,(Me.start+Me.count)*ke)),Ne!==null?(Pt=Math.max(Pt,0),qt=Math.min(qt,Ne.count)):Ze!=null&&(Pt=Math.max(Pt,0),qt=Math.min(qt,Ze.count));const gt=qt-Pt;if(gt<0||gt===1/0)return;ze.setup(te,ne,Ge,ee,Ne);let _n,St=Je;if(Ne!==null&&(_n=lt.get(Ne),St=_e,St.setIndex(_n)),te.isMesh)ne.wireframe===!0?(ge.setLineWidth(ne.wireframeLinewidth*le()),St.setMode(B.LINES)):St.setMode(B.TRIANGLES);else if(te.isLine){let et=ne.linewidth;et===void 0&&(et=1),ge.setLineWidth(et*le()),te.isLineSegments?St.setMode(B.LINES):te.isLineLoop?St.setMode(B.LINE_LOOP):St.setMode(B.LINE_STRIP)}else te.isPoints?St.setMode(B.POINTS):te.isSprite&&St.setMode(B.TRIANGLES);if(te.isInstancedMesh)St.renderInstances(Pt,gt,te.count);else if(ee.isInstancedBufferGeometry){const et=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,wh=Math.min(ee.instanceCount,et);St.renderInstances(Pt,gt,wh)}else St.render(Pt,gt)};function Fe(R,Y,ee){R.transparent===!0&&R.side===Xi&&R.forceSinglePass===!1?(R.side=Hn,R.needsUpdate=!0,Tt(R,Y,ee),R.side=hs,R.needsUpdate=!0,Tt(R,Y,ee),R.side=Xi):Tt(R,Y,ee)}this.compile=function(R,Y,ee=null){ee===null&&(ee=R),g=de.get(ee),g.init(),x.push(g),ee.traverseVisible(function(te){te.isLight&&te.layers.test(Y.layers)&&(g.pushLight(te),te.castShadow&&g.pushShadow(te))}),R!==ee&&R.traverseVisible(function(te){te.isLight&&te.layers.test(Y.layers)&&(g.pushLight(te),te.castShadow&&g.pushShadow(te))}),g.setupLights(v._useLegacyLights);const ne=new Set;return R.traverse(function(te){const Me=te.material;if(Me)if(Array.isArray(Me))for(let Ue=0;Ue<Me.length;Ue++){const Ge=Me[Ue];Fe(Ge,ee,te),ne.add(Ge)}else Fe(Me,ee,te),ne.add(Me)}),x.pop(),g=null,ne},this.compileAsync=function(R,Y,ee=null){const ne=this.compile(R,Y,ee);return new Promise(te=>{function Me(){if(ne.forEach(function(Ue){Re.get(Ue).currentProgram.isReady()&&ne.delete(Ue)}),ne.size===0){te(R);return}setTimeout(Me,10)}Q.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Te=null;function Ce(R){Te&&Te(R)}function Ye(){Ee.stop()}function He(){Ee.start()}const Ee=new Nx;Ee.setAnimationLoop(Ce),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(R){Te=R,fe.setAnimationLoop(R),R===null?Ee.stop():Ee.start()},fe.addEventListener("sessionstart",Ye),fe.addEventListener("sessionend",He),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(Y),Y=fe.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,Y,E),g=de.get(R,x.length),g.init(),x.push(g),ae.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),K.setFromProjectionMatrix(ae),q=this.localClippingEnabled,j=Pe.init(this.clippingPlanes,q),m=ue.get(R,p.length),m.init(),p.push(m),Ke(R,Y,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(G,z),this.info.render.frame++,j===!0&&Pe.beginShadows();const ee=g.state.shadowsArray;if(xe.render(ee,R,Y),j===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),be.render(m,R),g.setupLights(v._useLegacyLights),Y.isArrayCamera){const ne=Y.cameras;for(let te=0,Me=ne.length;te<Me;te++){const Ue=ne[te];We(m,R,Ue,Ue.viewport)}}else We(m,R,Y);E!==null&&(De.updateMultisampleRenderTarget(E),De.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(v,R,Y),ze.resetDefaultState(),C=-1,S=null,x.pop(),x.length>0?g=x[x.length-1]:g=null,p.pop(),p.length>0?m=p[p.length-1]:m=null};function Ke(R,Y,ee,ne){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ee=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){ne&&he.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ae);const Ue=A.update(R),Ge=R.material;Ge.visible&&m.push(R,Ue,Ge,ee,he.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||K.intersectsObject(R))){const Ue=A.update(R),Ge=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),he.copy(R.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),he.copy(Ue.boundingSphere.center)),he.applyMatrix4(R.matrixWorld).applyMatrix4(ae)),Array.isArray(Ge)){const Ne=Ue.groups;for(let ke=0,Ve=Ne.length;ke<Ve;ke++){const Ze=Ne[ke],Pt=Ge[Ze.materialIndex];Pt&&Pt.visible&&m.push(R,Ue,Pt,ee,he.z,Ze)}}else Ge.visible&&m.push(R,Ue,Ge,ee,he.z,null)}}const Me=R.children;for(let Ue=0,Ge=Me.length;Ue<Ge;Ue++)Ke(Me[Ue],Y,ee,ne)}function We(R,Y,ee,ne){const te=R.opaque,Me=R.transmissive,Ue=R.transparent;g.setupLightsView(ee),j===!0&&Pe.setGlobalState(v.clippingPlanes,ee),Me.length>0&&Qe(te,Me,Y,ee),ne&&ge.viewport(b.copy(ne)),te.length>0&&Lt(te,Y,ee),Me.length>0&&Lt(Me,Y,ee),Ue.length>0&&Lt(Ue,Y,ee),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Qe(R,Y,ee,ne){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;const Me=ce.isWebGL2;X===null&&(X=new uo(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?Ic:os,minFilter:Dc,samples:Me?4:0})),v.getDrawingBufferSize(me),Me?X.setSize(me.x,me.y):X.setSize(Xu(me.x),Xu(me.y));const Ue=v.getRenderTarget();v.setRenderTarget(X),v.getClearColor(F),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Ge=v.toneMapping;v.toneMapping=ss,Lt(R,ee,ne),De.updateMultisampleRenderTarget(X),De.updateRenderTargetMipmap(X);let Ne=!1;for(let ke=0,Ve=Y.length;ke<Ve;ke++){const Ze=Y[ke],Pt=Ze.object,qt=Ze.geometry,gt=Ze.material,_n=Ze.group;if(gt.side===Xi&&Pt.layers.test(ne.layers)){const St=gt.side;gt.side=Hn,gt.needsUpdate=!0,ut(Pt,ee,ne,qt,gt,_n),gt.side=St,gt.needsUpdate=!0,Ne=!0}}Ne===!0&&(De.updateMultisampleRenderTarget(X),De.updateRenderTargetMipmap(X)),v.setRenderTarget(Ue),v.setClearColor(F,P),v.toneMapping=Ge}function Lt(R,Y,ee){const ne=Y.isScene===!0?Y.overrideMaterial:null;for(let te=0,Me=R.length;te<Me;te++){const Ue=R[te],Ge=Ue.object,Ne=Ue.geometry,ke=ne===null?Ue.material:ne,Ve=Ue.group;Ge.layers.test(ee.layers)&&ut(Ge,Y,ee,Ne,ke,Ve)}}function ut(R,Y,ee,ne,te,Me){R.onBeforeRender(v,Y,ee,ne,te,Me),R.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),te.onBeforeRender(v,Y,ee,ne,R,Me),te.transparent===!0&&te.side===Xi&&te.forceSinglePass===!1?(te.side=Hn,te.needsUpdate=!0,v.renderBufferDirect(ee,Y,ne,te,R,Me),te.side=hs,te.needsUpdate=!0,v.renderBufferDirect(ee,Y,ne,te,R,Me),te.side=Xi):v.renderBufferDirect(ee,Y,ne,te,R,Me),R.onAfterRender(v,Y,ee,ne,te,Me)}function Tt(R,Y,ee){Y.isScene!==!0&&(Y=re);const ne=Re.get(R),te=g.state.lights,Me=g.state.shadowsArray,Ue=te.state.version,Ge=$.getParameters(R,te.state,Me,Y,ee),Ne=$.getProgramCacheKey(Ge);let ke=ne.programs;ne.environment=R.isMeshStandardMaterial?Y.environment:null,ne.fog=Y.fog,ne.envMap=(R.isMeshStandardMaterial?Xe:qe).get(R.envMap||ne.environment),ke===void 0&&(R.addEventListener("dispose",pe),ke=new Map,ne.programs=ke);let Ve=ke.get(Ne);if(Ve!==void 0){if(ne.currentProgram===Ve&&ne.lightsStateVersion===Ue)return Bt(R,Ge),Ve}else Ge.uniforms=$.getUniforms(R),R.onBuild(ee,Ge,v),R.onBeforeCompile(Ge,v),Ve=$.acquireProgram(Ge,Ne),ke.set(Ne,Ve),ne.uniforms=Ge.uniforms;const Ze=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=Pe.uniform),Bt(R,Ge),ne.needsLights=Kn(R),ne.lightsStateVersion=Ue,ne.needsLights&&(Ze.ambientLightColor.value=te.state.ambient,Ze.lightProbe.value=te.state.probe,Ze.directionalLights.value=te.state.directional,Ze.directionalLightShadows.value=te.state.directionalShadow,Ze.spotLights.value=te.state.spot,Ze.spotLightShadows.value=te.state.spotShadow,Ze.rectAreaLights.value=te.state.rectArea,Ze.ltc_1.value=te.state.rectAreaLTC1,Ze.ltc_2.value=te.state.rectAreaLTC2,Ze.pointLights.value=te.state.point,Ze.pointLightShadows.value=te.state.pointShadow,Ze.hemisphereLights.value=te.state.hemi,Ze.directionalShadowMap.value=te.state.directionalShadowMap,Ze.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ze.spotShadowMap.value=te.state.spotShadowMap,Ze.spotLightMatrix.value=te.state.spotLightMatrix,Ze.spotLightMap.value=te.state.spotLightMap,Ze.pointShadowMap.value=te.state.pointShadowMap,Ze.pointShadowMatrix.value=te.state.pointShadowMatrix),ne.currentProgram=Ve,ne.uniformsList=null,Ve}function Zt(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=cu.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Bt(R,Y){const ee=Re.get(R);ee.outputColorSpace=Y.outputColorSpace,ee.instancing=Y.instancing,ee.instancingColor=Y.instancingColor,ee.skinning=Y.skinning,ee.morphTargets=Y.morphTargets,ee.morphNormals=Y.morphNormals,ee.morphColors=Y.morphColors,ee.morphTargetsCount=Y.morphTargetsCount,ee.numClippingPlanes=Y.numClippingPlanes,ee.numIntersection=Y.numClipIntersection,ee.vertexAlphas=Y.vertexAlphas,ee.vertexTangents=Y.vertexTangents,ee.toneMapping=Y.toneMapping}function At(R,Y,ee,ne,te){Y.isScene!==!0&&(Y=re),De.resetTextureUnits();const Me=Y.fog,Ue=ne.isMeshStandardMaterial?Y.environment:null,Ge=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Dr,Ne=(ne.isMeshStandardMaterial?Xe:qe).get(ne.envMap||Ue),ke=ne.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ve=!!ee.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ze=!!ee.morphAttributes.position,Pt=!!ee.morphAttributes.normal,qt=!!ee.morphAttributes.color;let gt=ss;ne.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(gt=v.toneMapping);const _n=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,St=_n!==void 0?_n.length:0,et=Re.get(ne),wh=g.state.lights;if(j===!0&&(q===!0||R!==S)){const jn=R===S&&ne.id===C;Pe.setState(ne,R,jn)}let zt=!1;ne.version===et.__version?(et.needsLights&&et.lightsStateVersion!==wh.state.version||et.outputColorSpace!==Ge||te.isInstancedMesh&&et.instancing===!1||!te.isInstancedMesh&&et.instancing===!0||te.isSkinnedMesh&&et.skinning===!1||!te.isSkinnedMesh&&et.skinning===!0||te.isInstancedMesh&&et.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&et.instancingColor===!1&&te.instanceColor!==null||et.envMap!==Ne||ne.fog===!0&&et.fog!==Me||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Pe.numPlanes||et.numIntersection!==Pe.numIntersection)||et.vertexAlphas!==ke||et.vertexTangents!==Ve||et.morphTargets!==Ze||et.morphNormals!==Pt||et.morphColors!==qt||et.toneMapping!==gt||ce.isWebGL2===!0&&et.morphTargetsCount!==St)&&(zt=!0):(zt=!0,et.__version=ne.version);let ys=et.currentProgram;zt===!0&&(ys=Tt(ne,Y,te));let qp=!1,Da=!1,Ah=!1;const vn=ys.getUniforms(),Ss=et.uniforms;if(ge.useProgram(ys.program)&&(qp=!0,Da=!0,Ah=!0),ne.id!==C&&(C=ne.id,Da=!0),qp||S!==R){vn.setValue(B,"projectionMatrix",R.projectionMatrix),vn.setValue(B,"viewMatrix",R.matrixWorldInverse);const jn=vn.map.cameraPosition;jn!==void 0&&jn.setValue(B,he.setFromMatrixPosition(R.matrixWorld)),ce.logarithmicDepthBuffer&&vn.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&vn.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Da=!0,Ah=!0)}if(te.isSkinnedMesh){vn.setOptional(B,te,"bindMatrix"),vn.setOptional(B,te,"bindMatrixInverse");const jn=te.skeleton;jn&&(ce.floatVertexTextures?(jn.boneTexture===null&&jn.computeBoneTexture(),vn.setValue(B,"boneTexture",jn.boneTexture,De),vn.setValue(B,"boneTextureSize",jn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Rh=ee.morphAttributes;if((Rh.position!==void 0||Rh.normal!==void 0||Rh.color!==void 0&&ce.isWebGL2===!0)&&Ie.update(te,ee,ys),(Da||et.receiveShadow!==te.receiveShadow)&&(et.receiveShadow=te.receiveShadow,vn.setValue(B,"receiveShadow",te.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Ss.envMap.value=Ne,Ss.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Da&&(vn.setValue(B,"toneMappingExposure",v.toneMappingExposure),et.needsLights&&mt(Ss,Ah),Me&&ne.fog===!0&&oe.refreshFogUniforms(Ss,Me),oe.refreshMaterialUniforms(Ss,ne,k,V,X),cu.upload(B,Zt(et),Ss,De)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(cu.upload(B,Zt(et),Ss,De),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&vn.setValue(B,"center",te.center),vn.setValue(B,"modelViewMatrix",te.modelViewMatrix),vn.setValue(B,"normalMatrix",te.normalMatrix),vn.setValue(B,"modelMatrix",te.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const jn=ne.uniformsGroups;for(let Ch=0,My=jn.length;Ch<My;Ch++)if(ce.isWebGL2){const $p=jn[Ch];Be.update($p,ys),Be.bind($p,ys)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ys}function mt(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Kn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,Y,ee){Re.get(R.texture).__webglTexture=Y,Re.get(R.depthTexture).__webglTexture=ee;const ne=Re.get(R);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=ee===void 0,ne.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,Y){const ee=Re.get(R);ee.__webglFramebuffer=Y,ee.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,ee=0){E=R,M=Y,T=ee;let ne=!0,te=null,Me=!1,Ue=!1;if(R){const Ne=Re.get(R);Ne.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(B.FRAMEBUFFER,null),ne=!1):Ne.__webglFramebuffer===void 0?De.setupRenderTarget(R):Ne.__hasExternalTextures&&De.rebindTextures(R,Re.get(R.texture).__webglTexture,Re.get(R.depthTexture).__webglTexture);const ke=R.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ue=!0);const Ve=Re.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ve[Y])?te=Ve[Y][ee]:te=Ve[Y],Me=!0):ce.isWebGL2&&R.samples>0&&De.useMultisampledRTT(R)===!1?te=Re.get(R).__webglMultisampledFramebuffer:Array.isArray(Ve)?te=Ve[ee]:te=Ve,b.copy(R.viewport),D.copy(R.scissor),I=R.scissorTest}else b.copy(w).multiplyScalar(k).floor(),D.copy(L).multiplyScalar(k).floor(),I=N;if(ge.bindFramebuffer(B.FRAMEBUFFER,te)&&ce.drawBuffers&&ne&&ge.drawBuffers(R,te),ge.viewport(b),ge.scissor(D),ge.setScissorTest(I),Me){const Ne=Re.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ne.__webglTexture,ee)}else if(Ue){const Ne=Re.get(R.texture),ke=Y||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ne.__webglTexture,ee||0,ke)}C=-1},this.readRenderTargetPixels=function(R,Y,ee,ne,te,Me,Ue){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Re.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ge=Ge[Ue]),Ge){ge.bindFramebuffer(B.FRAMEBUFFER,Ge);try{const Ne=R.texture,ke=Ne.format,Ve=Ne.type;if(ke!==ki&&it.convert(ke)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=Ve===Ic&&(Q.has("EXT_color_buffer_half_float")||ce.isWebGL2&&Q.has("EXT_color_buffer_float"));if(Ve!==os&&it.convert(Ve)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===Zr&&(ce.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ne&&ee>=0&&ee<=R.height-te&&B.readPixels(Y,ee,ne,te,it.convert(ke),it.convert(Ve),Me)}finally{const Ne=E!==null?Re.get(E).__webglFramebuffer:null;ge.bindFramebuffer(B.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(R,Y,ee=0){const ne=Math.pow(2,-ee),te=Math.floor(Y.image.width*ne),Me=Math.floor(Y.image.height*ne);De.setTexture2D(Y,0),B.copyTexSubImage2D(B.TEXTURE_2D,ee,0,0,R.x,R.y,te,Me),ge.unbindTexture()},this.copyTextureToTexture=function(R,Y,ee,ne=0){const te=Y.image.width,Me=Y.image.height,Ue=it.convert(ee.format),Ge=it.convert(ee.type);De.setTexture2D(ee,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,ee.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,ee.unpackAlignment),Y.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ne,R.x,R.y,te,Me,Ue,Ge,Y.image.data):Y.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ne,R.x,R.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Ue,Y.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,ne,R.x,R.y,Ue,Ge,Y.image),ne===0&&ee.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,ee,ne,te=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=R.max.x-R.min.x+1,Ue=R.max.y-R.min.y+1,Ge=R.max.z-R.min.z+1,Ne=it.convert(ne.format),ke=it.convert(ne.type);let Ve;if(ne.isData3DTexture)De.setTexture3D(ne,0),Ve=B.TEXTURE_3D;else if(ne.isDataArrayTexture)De.setTexture2DArray(ne,0),Ve=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,ne.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,ne.unpackAlignment);const Ze=B.getParameter(B.UNPACK_ROW_LENGTH),Pt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),qt=B.getParameter(B.UNPACK_SKIP_PIXELS),gt=B.getParameter(B.UNPACK_SKIP_ROWS),_n=B.getParameter(B.UNPACK_SKIP_IMAGES),St=ee.isCompressedTexture?ee.mipmaps[0]:ee.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,St.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,St.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,R.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,R.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,R.min.z),ee.isDataTexture||ee.isData3DTexture?B.texSubImage3D(Ve,te,Y.x,Y.y,Y.z,Me,Ue,Ge,Ne,ke,St.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ve,te,Y.x,Y.y,Y.z,Me,Ue,Ge,Ne,St.data)):B.texSubImage3D(Ve,te,Y.x,Y.y,Y.z,Me,Ue,Ge,Ne,ke,St),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ze),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Pt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,qt),B.pixelStorei(B.UNPACK_SKIP_ROWS,gt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,_n),te===0&&ne.generateMipmaps&&B.generateMipmap(Ve),ge.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?De.setTextureCube(R,0):R.isData3DTexture?De.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?De.setTexture2DArray(R,0):De.setTexture2D(R,0),ge.unbindTexture()},this.resetState=function(){M=0,T=0,E=null,ge.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===bp?"display-p3":"srgb",t.unpackColorSpace=xt.workingColorSpace===dh?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===sn?no:Ex}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===no?sn:Dr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class CC extends Hx{}CC.prototype.isWebGL1Renderer=!0;class Gx extends ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Vx extends fs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}const M_={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class PC{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],_=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const LC=new PC;class Rp{constructor(e){this.manager=e!==void 0?e:LC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Rp.DEFAULT_MATERIAL_NAME="__DEFAULT";class DC extends Rp{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=M_.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Uc("img");function c(){u(),M_.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class IC extends Rp{constructor(e){super(e)}load(e,t,n,r){const s=new Gn,o=new DC(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class OC{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=b_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=b_();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function b_(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ep}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ep);var UC=`precision highp float;

struct Image {
  bool is;
  sampler2D texture;
  vec2 screen;
  vec2 halfScreen;
  vec2 tile;
};

uniform Image uCurrent;
uniform Image uNext;
uniform Image uFill;
uniform float uTileProgress;
uniform float uScreenProgress;
uniform float uKvProgress;
uniform float uFillProgress;

varying vec2 vUv;

float easeInOutCubic(float x) {
  return (x < 0.5) ? 4.0 * x * x * x : 1.0 - pow(-2.0 * x + 2.0, 3.0) / 2.0;
}

float easeOut(float x, float t) {
  return 1.0 - pow(1.0 - x, t);
}

float easeOutCubic(float x) {
  return easeOut(x, 3.0);
}

float easeOutQuart(float x) {
  return easeOut(x, 4.0);
}

float easeOutExpo(float x) {
  return x == 1.0 ? 1.0 : 1.0 - pow(2.0, -10.0 * x);
}

vec3 getColor(Image data, float scale) {
  vec2 coveredScale = mix(data.halfScreen, data.tile, easeInOutCubic(uTileProgress));
  coveredScale = mix(coveredScale, data.screen, easeOut(uScreenProgress, 2.0));
  vec2 uv = (vUv - 0.5) * coveredScale * scale + 0.5;
  return texture2D(data.texture, uv).rgb;
}

void main() {
  vec3 current = getColor(uCurrent, 1.0);
  vec3 next = getColor(uNext, easeOutCubic(uKvProgress) * (1.0 - 0.7) + 0.7);

  vec3 final = mix(current, next, easeInOutCubic(easeOutExpo(uKvProgress)));

  if (uFill.is) {
    final = mix(final, getColor(uFill, 1.0), uFillProgress);
  }

  gl_FragColor = vec4(final, 1.0);
}`,NC=`attribute vec3 position;
attribute vec2 uv;

uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

uniform vec2 uPlaneScale;
uniform vec2 uPlaneTranslate;
uniform float uTileProgress;
uniform float uScreenProgress;

varying vec2 vUv;

float easeInOutCubic(float x) {
  return (x < 0.5) ? 4.0 * x * x * x : 1.0 - pow(-2.0 * x + 2.0, 3.0) / 2.0;
}

float easeOut(float x, float t) {
  return 1.0 - pow(1.0 - x, t);
}

float easeOutCubic(float x) {
  return easeOut(x, 3.0);
}

float easeOutQuart(float x) {
  return easeOut(x, 4.0);
}

float easeOutExpo(float x) {
  return x == 1.0 ? 1.0 : 1.0 - pow(2.0, -10.0 * x);
}

void main() {
  vUv = uv;

  vec3 pos = position;
  pos.xy *= uPlaneScale;
  pos.xy += uPlaneTranslate;
  vec4 halfScreenLayout = vec4( pos, 1.0 );

  vec4 tileLayout = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1.0 );

  vec4 screenLayout = vec4( position, 1.0 );

  vec4 final = mix(halfScreenLayout, tileLayout, easeInOutCubic(uTileProgress));
  final = mix(final, screenLayout, easeOutCubic(uScreenProgress));

  gl_Position = final;
}`;function FC(i,e){const t=[];for(const n of i)t.push(e.find(r=>r.userData.path===n.dataset.src));return t}async function Rd(i){const e=new IC,t=await Promise.all(i.map(async n=>{const r=n.dataset.src,s=await e.loadAsync(r);return s.userData.aspect=s.source.data.width/s.source.data.height,s.userData.path=r,s}));return FC(i,t)}class kC{constructor(e){ie(this,"isVisible",!1);ie(this,"camera");ie(this,"scene");ie(this,"tiles");ie(this,"kvMain");ie(this,"kvSub");ie(this,"kvTextures",{main:[],sub:[]});ie(this,"kvCounter",1);ie(this,"kvAnimation");ie(this,"v3",new Z);ie(this,"tileAspect",at.isPc?600/450:200/150);this.canvas=e,this.camera=this.createCamera(),this.scene=new Gx,this.addEvents()}async setup(){const e=await this.loadAssets();this.tiles=this.createTiles(e),this.kvAnimation=this.createKvAnimation()}async loadAssets(){const e=await Rd(Dn.tileKvImageSources),t=await Rd(Dn.tileAroundImageSources);return{kv:e,around:t}}createCamera(){const e=new ii(40,this.canvas.size.aspect,.01,100);return at.isPc?(e.userData.tile={position:new Z(-3.33,-.02,7.44),target:new Z(-.97,.02,-.46)},e.userData.screen={position:new Z(1.5,0,1.5),target:new Z(1.5,0,0)}):(e.userData.tile={position:new Z(-3.33,-.02,13),target:new Z(-.3,.02,-.46)},e.userData.screen={position:new Z(0,-1.5,2),target:new Z(0,-1.5,0)}),e.position.copy(e.userData.tile.position),e.lookAt(e.userData.tile.target),e}createMaterial(e,t,n){let r=[1,1],s=[0,0],o=1,a=null;return n==="left"?(r=[.5,1],s=[-.5,0],o=0,a=this.kvTextures.main[0].clone()):n==="right"?(r=[.5,1],s=[.5,0],o=0,a=this.kvTextures.sub[0].clone()):n==="top"?(r=[1,.5],s=[0,.5],o=0,a=this.kvTextures.main[0].clone()):n==="bottom"&&(r=[1,.5],s=[0,-.5],o=0,a=this.kvTextures.sub[0].clone()),new Vx({uniforms:{uPlaneScale:{value:r},uPlaneTranslate:{value:s},uCurrent:{value:{texture:e,screen:this.canvas.coveredScale(e.userData.aspect,"fill_screen"),halfScreen:this.canvas.coveredScale(e.userData.aspect,this.halfScreenDirection),tile:this.canvas.coveredScale(e.userData.aspect,this.tileAspect)}},uNext:{value:{texture:t,screen:this.canvas.coveredScale(t.userData.aspect,"fill_screen"),halfScreen:this.canvas.coveredScale(t.userData.aspect,this.halfScreenDirection),tile:this.canvas.coveredScale(t.userData.aspect,this.tileAspect)}},uFill:{value:{is:!!a,texture:a,screen:a?this.canvas.coveredScale(a.userData.aspect,"fill_screen"):[1,1],halfScreen:a?this.canvas.coveredScale(a.userData.aspect,this.halfScreenDirection):[1,1],tile:a?this.canvas.coveredScale(a.userData.aspect,this.tileAspect):[1,1]}},uTileProgress:{value:o},uScreenProgress:{value:0},uKvProgress:{value:0},uFillProgress:{value:0}},vertexShader:NC,fragmentShader:UC})}createTiles(e){const t=new Jr;t.userData.scale=at.isPc?{min:1,max:4}:{min:1,max:3},t.scale.set(t.userData.scale.max,t.userData.scale.max,1),this.scene.add(t);const n=new jc(2,2);e.kv.forEach((u,h)=>{h%2===0?this.kvTextures.main.push(u):this.kvTextures.sub.push(u)});const r=at.isPc?{row:3,col:4}:{row:4,col:3},{width:s,height:o}=n.parameters,a=.1,c={x:(r.col-1)*(s*this.tileAspect+a)*.5,y:(r.row-1)*(o+a)*.5};let l=0;for(let u=0;u<r.row;u++)for(let h=0;h<r.col;h++){let f,d,_;at.isPc?h===1&&u===1?(f=this.kvTextures.main[0],d=this.kvTextures.main[1],_="left"):h===2&&u===1?(f=this.kvTextures.sub[0],d=this.kvTextures.sub[1],_="right"):(f=e.around[l++],d=f,_="around"):h===1&&u===1?(f=this.kvTextures.sub[0],d=this.kvTextures.sub[1],_="bottom"):h===1&&u===2?(f=this.kvTextures.main[0],d=this.kvTextures.main[1],_="top"):(f=e.around[l++],d=f,_="around");const m=new Ki(n,this.createMaterial(f,d,_));m.scale.set(this.tileAspect,1,1),m.position.set(h*s*this.tileAspect+h*a-c.x,u*o+u*a-c.y,0),m.name=_,m.userData.phase=(Math.random()*2-1)*Math.PI*2,t.add(m),_==="left"||_==="top"?this.kvMain=m:(_==="right"||_==="bottom")&&(this.kvSub=m)}return t}get halfScreenDirection(){return at.isPc?"half_width_screen":"half_height_screen"}addEvents(){this.canvas.addEventListener("resize",()=>{if(!at.isSpTouch){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix();for(const e of this.tiles.children){const t=e.material.uniforms.uCurrent.value;t.screen=this.canvas.coveredScale(t.texture.userData.aspect,"fill_screen"),t.halfScreen=this.canvas.coveredScale(t.texture.userData.aspect,this.halfScreenDirection);const n=e.material.uniforms.uNext.value;n.screen=this.canvas.coveredScale(n.texture.userData.aspect,"fill_screen"),n.halfScreen=this.canvas.coveredScale(n.texture.userData.aspect,this.halfScreenDirection)}}})}createKvAnimation(){const e=Ae.timeline({defaults:{duration:5,ease:"none"},delay:3,repeatDelay:3,repeat:-1,paused:!0});return e.fromTo(this.kvMain.material.uniforms.uKvProgress,{value:0},{value:1}),e.fromTo(this.kvSub.material.uniforms.uKvProgress,{value:0},{value:1},"<"),e.eventCallback("onRepeat",()=>{this.kvCounter++,this.kvMain.material.uniforms.uCurrent.value=this.kvMain.material.uniforms.uNext.value,this.setKvTexture("main","next",this.kvCounter%this.kvTextures.main.length),this.kvSub.material.uniforms.uCurrent.value=this.kvSub.material.uniforms.uNext.value,this.setKvTexture("sub","next",this.kvCounter%this.kvTextures.sub.length)}),e}setKvTexture(e,t,n){const r=e==="main"?this.kvMain.material.uniforms:this.kvSub.material.uniforms,s=this.kvTextures[e][n];r[t==="current"?"uCurrent":"uNext"].value={texture:s,screen:this.canvas.coveredScale(s.userData.aspect,"fill_screen"),halfScreen:this.canvas.coveredScale(s.userData.aspect,this.halfScreenDirection),tile:this.canvas.coveredScale(s.userData.aspect,this.tileAspect)}}reset(){this.camera.position.copy(this.camera.userData.tile.position),this.camera.lookAt(this.camera.userData.tile.target),this.tiles.scale.set(this.tiles.userData.scale.max,this.tiles.userData.scale.max,1),this.kvAnimation.revert(),this.kvCounter=1,this.setKvTexture("main","current",0),this.setKvTexture("main","next",1),this.setKvTexture("sub","current",0),this.setKvTexture("sub","next",1),this.kvMain.material.uniforms.uTileProgress.value=0,this.kvMain.material.uniforms.uScreenProgress.value=0,this.kvMain.material.uniforms.uKvProgress.value=0,this.kvMain.material.uniforms.uFillProgress.value=0,this.kvSub.material.uniforms.uTileProgress.value=0,this.kvSub.material.uniforms.uScreenProgress.value=0,this.kvSub.material.uniforms.uKvProgress.value=0,this.kvSub.material.uniforms.uFillProgress.value=0}playKvAnimation(e=!1){this.kvAnimation.isActive()||this.kvAnimation.restart(e)}pauseKvAnimation(){this.kvAnimation.isActive()&&this.kvAnimation.pause()}to_fillScreenTile(e){this.kvMain.material.uniforms.uFillProgress.value=e,this.kvSub.material.uniforms.uFillProgress.value=e,.99<e?this.pauseKvAnimation():this.playKvAnimation()}halfScreen_tile(e){if(!this.tiles)return;const t=au.lerp(this.tiles.userData.scale.max,this.tiles.userData.scale.min,e);this.tiles.scale.set(t,t,1),this.kvMain.material.uniforms.uTileProgress.value=e,this.kvSub.material.uniforms.uTileProgress.value=e}tile_screen(e){this.tiles&&(this.camera.position.lerpVectors(this.camera.userData.tile.position,this.camera.userData.screen.position,e),this.v3.lerpVectors(this.camera.userData.tile.target,this.camera.userData.screen.target,e),this.camera.lookAt(this.v3),this.kvSub.material.uniforms.uScreenProgress.value=Ya(e))}set visible(e){this.isVisible=e}render(e=!1){if(!(!e&&!this.isVisible)){for(const t of this.tiles.children)t.position.z=Math.sin(this.canvas.time.elapsed*.5+t.userData.phase)*.15;this.canvas.render(this.scene,this.camera)}}}var pc=function(){var i=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(u){u.preventDefault(),n(++i%e.children.length)},!1);function t(u){return e.appendChild(u.dom),u}function n(u){for(var h=0;h<e.children.length;h++)e.children[h].style.display=h===u?"block":"none";i=u}var r=(performance||Date).now(),s=r,o=0,a=t(new pc.Panel("FPS","#0ff","#002")),c=t(new pc.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=t(new pc.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){r=(performance||Date).now()},end:function(){o++;var u=(performance||Date).now();if(c.update(u-r,200),u>=s+1e3&&(a.update(o*1e3/(u-s),100),s=u,o=0,l)){var h=performance.memory;l.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return u},update:function(){r=this.end()},domElement:e,setMode:n}};pc.Panel=function(i,e,t){var n=1/0,r=0,s=Math.round,o=s(window.devicePixelRatio||1),a=80*o,c=48*o,l=3*o,u=2*o,h=3*o,f=15*o,d=74*o,_=30*o,m=document.createElement("canvas");m.width=a,m.height=c,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*o+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=t,g.fillRect(0,0,a,c),g.fillStyle=e,g.fillText(i,l,u),g.fillRect(h,f,d,_),g.fillStyle=t,g.globalAlpha=.9,g.fillRect(h,f,d,_),{dom:m,update:function(p,x){n=Math.min(n,p),r=Math.max(r,p),g.fillStyle=t,g.globalAlpha=1,g.fillRect(0,0,a,f),g.fillStyle=e,g.fillText(s(p)+" "+i+" ("+s(n)+"-"+s(r)+")",l,u),g.drawImage(m,h+o,f,d-o,_,h,f,d-o,_),g.fillRect(h+d-o,f,o,_),g.fillStyle=t,g.globalAlpha=.9,g.fillRect(h+d-o,f,o,s((1-p/x)*_))}}};const BC=pc;class zC{constructor(e){ie(this,"time",{delta:0,elapsed:0});ie(this,"counter",0);ie(this,"renderer");ie(this,"clock",new OC);ie(this,"abortController",new AbortController);ie(this,"shouldDisposedObjects",[]);ie(this,"stats");this.canvas=e,this.renderer=this.createRenderer(e),this.createEvents()}createRenderer(e){const t=new Hx({canvas:e,antialias:!0,alpha:!0});return at.isPc?t.setSize(window.innerWidth,window.innerHeight):at.isSpTouch?t.setSize(window.innerWidth,(window.innerHeight+window.outerHeight)*.5):t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(window.devicePixelRatio),t}createEvents(){this.addEventListener("resize",()=>{if(at.isSpTouch)return;const{innerWidth:e,innerHeight:t}=window;this.renderer.setSize(e,t)})}get element(){return this.canvas}get size(){const{width:e,height:t}=this.renderer.domElement;return{width:e,height:t,aspect:e/t}}addEventListener(e,t,n){window.addEventListener(e,t,{...n,signal:this.abortController.signal})}addDisposableObject(...e){e.forEach(t=>{t.dispose&&typeof t.dispose=="function"&&this.shouldDisposedObjects.push(t)})}coveredScale(e,t="fill_screen"){let n;return t==="fill_screen"?n=this.size.aspect:t==="half_width_screen"?n=this.size.width*.5/this.size.height:t==="half_height_screen"?n=this.size.width/(this.size.height*.5):n=t,n<e?[n/e,1]:[1,e/n]}enabledStats(){this.stats=new BC,document.body.appendChild(this.stats.dom)}preloadTexture(e){this.renderer.initTexture(e)}animation(e){e?this.renderer.setAnimationLoop(()=>{var t;this.time.delta=this.clock.getDelta(),this.time.elapsed=this.clock.getElapsedTime(),(t=this.stats)==null||t.update(),e()}):this.renderer.setAnimationLoop(null)}render(e,t){this.renderer.render(e,t)}dispose(){this.animation(null),this.shouldDisposedObjects.forEach(e=>e.dispose()),this.renderer.dispose(),this.abortController.abort()}}var HC=`precision mediump float;

uniform sampler2D tImage;
uniform vec2 uCoveredScale;
uniform float uAngle;
uniform float uProgress;

varying vec2 vUv;

const float PI = acos(-1.0);
const float TAU = PI * 2.0;

void main() {
  vec2 uv = (vUv - 0.5) * uCoveredScale + 0.5;
  vec3 image = texture2D(tImage, uv).rgb;
  vec3 color = image;

  float span = vUv.x - 0.5; 
  float offset = span * (TAU / (12.0 + 3.0)); 
  float angle = (uAngle + offset) / TAU;
  float a = smoothstep(angle - 0.02, angle + 0.02, uProgress * 1.07 - 0.07);

  gl_FragColor = vec4(color, a);
}`,GC=`attribute vec3 position;
attribute vec2 uv;

uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

uniform float uRadius;

varying vec2 vUv;

void main() {
  vUv = uv;

  vec3 pos = position;
  pos.xz = normalize(pos.xz) * uRadius;

  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( pos, 1.0 );
}`;class VC{constructor(e){ie(this,"isVisible",!1);ie(this,"camera");ie(this,"scene");ie(this,"circle");ie(this,"circleAutoRotate");ie(this,"circleRotationTarget",0);ie(this,"rotateRatio",0);ie(this,"rotationFadeOutSpeed",0);ie(this,"v3",new Z);ie(this,"fpsLog",[]);this.canvas=e,this.camera=this.createCamera(),this.scene=this.createScene(),this.addEvents()}async setup(){const e=await Rd(Dn.circleImageSources);this.createCircle(e)}createCamera(){const e=new ii(40,this.canvas.size.aspect,.01,100);return at.isPc?1<this.canvas.size.aspect?(e.userData.start={position:new Z(1,-1,7),target:new Z(0,.5,0)},e.userData.end={position:new Z(-1.5,-1.2,9),target:new Z(-1.5,0,0)}):(e.userData.start={position:new Z(1,-1,9),target:new Z(0,.5,0)},e.userData.end={position:new Z(-1.5,-1.5,12),target:new Z(-1.5,0,0)}):(e.userData.start={position:new Z(1,-1,9),target:new Z(0,.5,0)},e.userData.end={position:new Z(-2.5,-1.2,13),target:new Z(-2.5,0,0)}),e.position.copy(e.userData.start.position),e.lookAt(e.userData.start.target),e}createScene(){return new Gx}createCircle(e){const t=new Jr,n=new Jr,r=new Jr;n.add(t),r.add(n),this.scene.add(r),r.rotation.z=-Math.PI*.1,this.circle=t,this.circleAutoRotate=n;const s=(a,c,l)=>new Vx({uniforms:{uRadius:{value:c},uAngle:{value:l},tImage:{value:a},uCoveredScale:{value:this.canvas.coveredScale(a.userData.aspect,1.7777777777777777)},uProgress:{value:0}},vertexShader:GC,fragmentShader:HC,side:Xi,transparent:!0}),o=4.5;for(let a=0;a<e.length;a++){const c=Math.PI*2*(a/e.length),l=new jc(1.6,.9,10,1);l.applyMatrix4(new tn().makeTranslation(0,0,o));const u=new Ki(l,s(e[a],o,c));u.rotation.y=c,t.add(u)}}addEvents(){this.canvas.addEventListener("resize",()=>{at.isSpTouch||(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix())})}set visible(e){this.isVisible=e}reset(){for(const e of this.circle.children){const t=e.material.uniforms;t.uProgress.value=0}this.circleRotationTarget=0,this.circle.rotation.y=0,this.circleAutoRotate.rotation.y=0,this.camera.position.copy(this.camera.userData.start.position),this.camera.lookAt(this.camera.userData.start.target),this.rotationFadeOutSpeed=0}cricle_in(e){const t=ng(e);for(const n of this.circle.children){const r=n.material.uniforms;r.uProgress.value=t}this.circleRotationTarget=-Math.PI*(2+.5)*t+Math.PI*.5,this.camera.position.lerpVectors(this.camera.userData.start.position,this.camera.userData.end.position,t),this.v3.lerpVectors(this.camera.userData.start.target,this.camera.userData.end.target,t),this.camera.lookAt(this.v3),this.rotateRatio=ab(e)}circle_out(e){const t=ob(e),n=au.lerp(1,.7,t),r=au.lerp(0,-1,t);this.scene.scale.set(n,n,n),this.scene.position.x=r,this.rotationFadeOutSpeed=ng(e)}calcFps(e){const t=Math.max(60,Math.min(1/e,120));50<this.fpsLog.length&&this.fpsLog.pop(),this.fpsLog.unshift(t);const n=this.fpsLog.reduce((r,s)=>r+s)/this.fpsLog.length;return Math.trunc(n)}map(e,t,n,r,s){return r+(e-t)*(s-r)/(n-t)}render(e=!1){if(!e&&!this.isVisible)return;this.circle.rotation.y=au.lerp(this.circle.rotation.y,this.circleRotationTarget,.2);const t=this.rotationFadeOutSpeed*this.map(this.calcFps(this.canvas.time.delta),60,120,.035,.01);this.circleAutoRotate.rotation.y-=this.canvas.time.delta*.08*this.rotateRatio+t,this.canvas.render(this.scene,this.camera)}}class WC extends zC{constructor(t){super(t);ie(this,"isRendering",!1);ie(this,"isFirstRendering",!0);ie(this,"sceneTile");ie(this,"sceneCircle");ie(this,"anime",()=>{var t,n,r,s;this.isRendering&&(this.isFirstRendering&&(this.isFirstRendering=!1,(t=this.sceneTile)==null||t.render(!0),(n=this.sceneCircle)==null||n.render(!0)),(r=this.sceneTile)==null||r.render(),(s=this.sceneCircle)==null||s.render())});this.animation(this.anime)}async enable(){this.sceneTile||(this.sceneTile=new kC(this),await this.sceneTile.setup(),this.sceneTile.visible=!0),this.sceneCircle||(this.sceneCircle=new VC(this),await this.sceneCircle.setup()),this.isRendering=!0}disable(){this.isRendering=!1}selectScene(t){!this.sceneTile||!this.sceneCircle||(t==="tile"?(this.sceneTile.visible=!0,this.sceneCircle.visible=!1):t==="circle"&&(this.sceneTile.visible=!1,this.sceneCircle.visible=!0))}halfScreen_tile(t){var n;(n=this.sceneTile)==null||n.halfScreen_tile(t)}tile_screen(t){var n;(n=this.sceneTile)==null||n.tile_screen(t)}to_fillScreenTile(t){var n;(n=this.sceneTile)==null||n.to_fillScreenTile(t)}playKvAnimation(){var t;(t=this.sceneTile)==null||t.playKvAnimation(!0)}circle_in(t){var n;(n=this.sceneCircle)==null||n.cricle_in(t)}circle_out(t){var n;(n=this.sceneCircle)==null||n.circle_out(t)}resetScene(t){var n,r;t==="tile"?(n=this.sceneTile)==null||n.reset():t==="circle"&&((r=this.sceneCircle)==null||r.reset())}}class XC{constructor(){ie(this,"backgroundEl",document.querySelector(".background-canvas"));ie(this,"filterEl",this.backgroundEl.querySelector(".background-canvas__filter"));ie(this,"canvas");this.canvas=this.createCanvas()}createCanvas(){return new WC(this.backgroundEl.querySelector("canvas"))}get tileKvImageSources(){return Array.from(this.backgroundEl.querySelectorAll(".backgorund-canvas__tile__images__kv > div"))}get tileAroundImageSources(){return Array.from(this.backgroundEl.querySelectorAll(".backgorund-canvas__tile__images__around > div"))}get circleImageSources(){return Array.from(this.backgroundEl.querySelectorAll(".backgorund-canvas__circle__images > div"))}async enable(){this.backgroundEl.style.removeProperty("display"),this.filterEl.style.removeProperty("--opacity"),this.filterEl.style.removeProperty("--blur"),this.filterEl.style.removeProperty("--recuit-opacity"),this.filterEl.style.removeProperty("--footer-opacity"),await this.canvas.enable()}disable(){this.canvas.disable(),this.backgroundEl.style.setProperty("display","none")}transitionFv(e){this.canvas.halfScreen_tile(e),this.filterEl.style.setProperty("--opacity",Ya(e).toString())}transitionSustainability(e){this.canvas.tile_screen(e),this.filterEl.style.setProperty("--opacity",Ya(1-e).toString()),this.filterEl.style.setProperty("--blur",Ya(e).toString())}transitionFv_fillScreenTile(e){this.canvas.to_fillScreenTile(e)}playKvAnimation(){this.canvas.playKvAnimation()}transitionRecruitIn(e){this.filterEl.style.setProperty("--recuit-opacity",Ya(e).toString()),this.canvas.circle_in(e)}transitionRecruitOut(e){this.filterEl.style.setProperty("--footer-opacity",e.toString()),this.canvas.circle_out(e)}selectScene(e){this.filterEl.classList.toggle("circle-scene",e==="circle"),this.canvas.selectScene(e)}resetScene(e){e?this.canvas.resetScene(e):(this.canvas.resetScene("tile"),this.canvas.resetScene("circle"))}}const Dn=new XC;class dt{constructor(e){ie(this,"animations",[]);this.page=e}$(e){return this.page.querySelector(e)}$$(e){return this.page.querySelectorAll(e)}registerAnimation(...e){this.animations.push(...e)}dispose(){this.animations.forEach(e=>{var t;(e instanceof Ae.core.Tween||e instanceof Ae.core.Timeline)&&((t=e.scrollTrigger)==null||t.kill()),e.kill()})}}class qC{createAnimation(e){const t=e.querySelector(".circle-arrow");return{enter:()=>{const r=Ae.timeline({defaults:{ease:"power1.out"}});return r.fromTo(t,{"--circle-line":0},{"--circle-line":1,duration:.7}),r.fromTo(t,{"--circle-rotation":0},{"--circle-rotation":.5,duration:.7},"<"),r.fromTo(t,{"--circle-opacity":1},{"--circle-opacity":0,duration:.7},"<30%"),r}}}}const T_=new qC;class $C extends dt{constructor(t){super(t);ie(this,"links");this.links=this.$$("a.circle-arrow-link, a.card-link, a.recruit-entry-link"),this.addEvents()}addEvents(){at.isTouch||this.links.forEach(t=>{const{enter:n}=T_.createAnimation(t);t.addEventListener("mouseenter",()=>{Ae.timeline().add(n(),"<")})}),at.isSp&&this.page.dataset.barbaNamespace==="home"&&this.$$("a.circle-arrow-link").forEach(t=>{const n=T_.createAnimation(t);this.registerAnimation(Se.create({trigger:t,start:"top 95%",once:!0,onEnter:()=>{var r;t.classList.add("on"),(r=t.querySelector(".circle-arrow"))==null||r.classList.add("on"),n.enter()}}))})}}Ae.registerPlugin(Ma);async function Cd(i,{scrollTarget:e=window,duration:t=1,delay:n=0}={}){return Ae.to(e,{scrollTo:{y:i,offsetY:0},ease:"power2.out",duration:t,delay:n})}class YC extends dt{constructor(t){super(t);ie(this,"h1");this.h1=t.querySelector(".h1"),this.h1&&this.h1.classList.add("is-active")}}class rt extends dt{constructor(t){super(t);ie(this,"overlayScrollbars",[]);ie(this,"abortController");ie(this,"anchorLinkListeners",new Map);this.abortController=new AbortController,Dn.disable(),ln.changeTheme("dark"),ln.enable(!0),Qs.enable(!0),this.overlayScrollbars=Vs.createOverlayScrollbarsPage(t),ib.attachMouseAnimationPage(t,this.abortController.signal),tb.refreshAnimaiton(),new $C(t),new YC(t),this.preventReloadIfSamePageLink(),location.hash&&Cd(location.hash,{duration:0,delay:.3})}preventReloadIfSamePageLink(){const t=(location.origin+location.pathname).replace(/\//g,"");Array.from(document.querySelectorAll("a")).filter(r=>{try{const s=new URL(r.href);return(s.origin+s.pathname).replace(/\//g,"")===t}catch{return!1}}).forEach(r=>{const s=o=>{o.preventDefault();const a=new URL(r.href),c=a.hash===""?0:a.hash;Cd(c),Qs.isOpen&&Qs.close()};r.addEventListener("click",s),this.anchorLinkListeners.set(r,s)})}get namespace(){return this.page.dataset.barbaNamespace}dispose(){super.dispose(),this.abortController.abort(),this.overlayScrollbars.forEach(t=>t==null?void 0:t.destroy());for(const[t,n]of this.anchorLinkListeners.entries())t.removeEventListener("click",n),this.anchorLinkListeners.delete(t)}}class KC extends dt{constructor(t){super(t);ie(this,"kvBotanist");ie(this,"kvSalonia");ie(this,"kvYolu");this.kvBotanist=this.$(".home__business__kv__botanist"),this.kvSalonia=this.$(".home__business__kv__salonia"),this.kvYolu=this.$(".home__business__kv__yolu"),this.init(),this.createKvAnimation()}init(){const t=at.isPc?"4rem":"5rem";this.kvBotanist.style.setProperty("translate",`0 ${t}`),this.kvBotanist.style.setProperty("opacity","0"),this.kvSalonia.style.setProperty("translate",`0 ${t}`),this.kvSalonia.style.setProperty("opacity","0"),this.kvYolu.style.setProperty("translate",`0 ${t}`),this.kvYolu.style.setProperty("opacity","0")}createKvAnimation(){const t=Ae.timeline({defaults:{ease:"power2.out"},scrollTrigger:{trigger:".home__business__kv",start:at.isPc?"top center+=20%":"top bottom-=20%"}});[this.kvBotanist,this.kvSalonia,this.kvYolu].forEach((n,r)=>{t.to(n,{translate:"0 0",duration:1.2},r===0?void 0:"<10%"),t.to(n,{opacity:1,duration:1.5},"<10%")}),this.registerAnimation(t)}}Ae.registerPlugin(Se);class jC extends dt{constructor(e){super(e),this.createAnimation()}createAnimation(){const e=this.$(".home__fv__catchphrese"),t=this.$(".home__fv__body");this.registerAnimation(Se.create({trigger:e,start:"top top",end:"bottom bottom",scrub:!0,onUpdate:({progress:n})=>{e.style.setProperty("--progress",fx(n,1.7).toString()),Dn.transitionFv(n)},onLeave:()=>{ln.changeTheme("dark")},onEnterBack:()=>{ln.changeTheme("light")}}),Se.create({trigger:t,start:"top bottom",end:"top center",scrub:!0,onUpdate:({progress:n})=>{Dn.transitionFv_fillScreenTile(n)}}),Se.create({trigger:t,start:"top 85%",onEnter:()=>{t.classList.add("is-active")},onLeaveBack:()=>{t.classList.remove("is-active")}}))}fadeInCatchphrase(){return Ae.fromTo(this.$(".home__fv__catchphrese"),{"--fade":0},{"--fade":1,duration:1.5,ease:"power1.out"})}}Ae.registerPlugin(Se);class ZC extends dt{constructor(e){super(e),this.createAnimation()}createAnimation(){this.registerAnimation(Se.create({trigger:this.$(".home__ir"),start:"top top",end:"top top",onEnter:()=>{Dn.selectScene("circle"),ln.changeTheme("dark"),this.$(".home__ir__background").style.setProperty("display","none")},onLeaveBack:()=>{Dn.selectScene("tile"),ln.changeTheme("light"),this.$(".home__ir__background").style.removeProperty("display")}}))}}function w_(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function JC(i,e,t){return e&&w_(i.prototype,e),t&&w_(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */var A_="(prefers-reduced-motion: reduce)",jo=1,QC=2,Sa=3,Ca=4,Zc=5,lu=6,qu=7,eP={CREATED:jo,MOUNTED:QC,IDLE:Sa,MOVING:Ca,SCROLLING:Zc,DRAGGING:lu,DESTROYED:qu};function Ir(i){i.length=0}function vs(i,e,t){return Array.prototype.slice.call(i,e,t)}function wt(i){return i.bind.apply(i,[null].concat(vs(arguments,1)))}var Wx=setTimeout,Pd=function(){};function R_(i){return requestAnimationFrame(i)}function _h(i,e){return typeof e===i}function Nc(i){return!Pp(i)&&_h("object",i)}var Cp=Array.isArray,Xx=wt(_h,"function"),ds=wt(_h,"string"),Jc=wt(_h,"undefined");function Pp(i){return i===null}function qx(i){try{return i instanceof(i.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function Qc(i){return Cp(i)?i:[i]}function Ai(i,e){Qc(i).forEach(e)}function Lp(i,e){return i.indexOf(e)>-1}function uu(i,e){return i.push.apply(i,Qc(e)),i}function yr(i,e,t){i&&Ai(e,function(n){n&&i.classList[t?"add":"remove"](n)})}function ir(i,e){yr(i,ds(e)?e.split(" "):e,!0)}function el(i,e){Ai(e,i.appendChild.bind(i))}function Dp(i,e){Ai(i,function(t){var n=(e||t).parentNode;n&&n.insertBefore(t,e)})}function Fc(i,e){return qx(i)&&(i.msMatchesSelector||i.matches).call(i,e)}function $x(i,e){var t=i?vs(i.children):[];return e?t.filter(function(n){return Fc(n,e)}):t}function tl(i,e){return e?$x(i,e)[0]:i.firstElementChild}var kc=Object.keys;function ro(i,e,t){return i&&(t?kc(i).reverse():kc(i)).forEach(function(n){n!=="__proto__"&&e(i[n],n)}),i}function Bc(i){return vs(arguments,1).forEach(function(e){ro(e,function(t,n){i[n]=e[n]})}),i}function Qr(i){return vs(arguments,1).forEach(function(e){ro(e,function(t,n){Cp(t)?i[n]=t.slice():Nc(t)?i[n]=Qr({},Nc(i[n])?i[n]:{},t):i[n]=t})}),i}function C_(i,e){Ai(e||kc(i),function(t){delete i[t]})}function rr(i,e){Ai(i,function(t){Ai(e,function(n){t&&t.removeAttribute(n)})})}function tt(i,e,t){Nc(e)?ro(e,function(n,r){tt(i,r,n)}):Ai(i,function(n){Pp(t)||t===""?rr(n,e):n.setAttribute(e,String(t))})}function aa(i,e,t){var n=document.createElement(i);return e&&(ds(e)?ir(n,e):tt(n,e)),t&&el(t,n),n}function Oi(i,e,t){if(Jc(t))return getComputedStyle(i)[e];Pp(t)||(i.style[e]=""+t)}function zc(i,e){Oi(i,"display",e)}function Yx(i){i.setActive&&i.setActive()||i.focus({preventScroll:!0})}function Bi(i,e){return i.getAttribute(e)}function P_(i,e){return i&&i.classList.contains(e)}function mi(i){return i.getBoundingClientRect()}function ho(i){Ai(i,function(e){e&&e.parentNode&&e.parentNode.removeChild(e)})}function Kx(i){return tl(new DOMParser().parseFromString(i,"text/html").body)}function mr(i,e){i.preventDefault(),e&&(i.stopPropagation(),i.stopImmediatePropagation())}function jx(i,e){return i&&i.querySelector(e)}function Ip(i,e){return e?vs(i.querySelectorAll(e)):[]}function Sr(i,e){yr(i,e,!1)}function Ld(i){return i.timeStamp}function Rs(i){return ds(i)?i:i?i+"px":""}var nl="splide",Op="data-"+nl;function mc(i,e){if(!i)throw new Error("["+nl+"] "+(e||""))}var ps=Math.min,$u=Math.max,Yu=Math.floor,Hc=Math.ceil,Fn=Math.abs;function Zx(i,e,t){return Fn(i-e)<t}function hu(i,e,t,n){var r=ps(e,t),s=$u(e,t);return n?r<i&&i<s:r<=i&&i<=s}function Ho(i,e,t){var n=ps(e,t),r=$u(e,t);return ps($u(n,i),r)}function Dd(i){return+(i>0)-+(i<0)}function Id(i,e){return Ai(e,function(t){i=i.replace("%s",""+t)}),i}function Up(i){return i<10?"0"+i:""+i}var L_={};function tP(i){return""+i+Up(L_[i]=(L_[i]||0)+1)}function Jx(){var i=[];function e(o,a,c,l){r(o,a,function(u,h,f){var d="addEventListener"in u,_=d?u.removeEventListener.bind(u,h,c,l):u.removeListener.bind(u,c);d?u.addEventListener(h,c,l):u.addListener(c),i.push([u,h,f,c,_])})}function t(o,a,c){r(o,a,function(l,u,h){i=i.filter(function(f){return f[0]===l&&f[1]===u&&f[2]===h&&(!c||f[3]===c)?(f[4](),!1):!0})})}function n(o,a,c){var l,u=!0;return typeof CustomEvent=="function"?l=new CustomEvent(a,{bubbles:u,detail:c}):(l=document.createEvent("CustomEvent"),l.initCustomEvent(a,u,!1,c)),o.dispatchEvent(l),l}function r(o,a,c){Ai(o,function(l){l&&Ai(a,function(u){u.split(" ").forEach(function(h){var f=h.split(".");c(l,f[0],f[1])})})})}function s(){i.forEach(function(o){o[4]()}),Ir(i)}return{bind:e,unbind:t,dispatch:n,destroy:s}}var go="mounted",D_="ready",ms="move",il="moved",Qx="click",nP="active",iP="inactive",rP="visible",sP="hidden",Yt="refresh",qn="updated",Gc="resize",Np="resized",oP="drag",aP="dragging",cP="dragged",Fp="scroll",Pa="scrolled",lP="overflow",ey="destroy",uP="arrows:mounted",hP="arrows:updated",fP="pagination:mounted",dP="pagination:updated",ty="navigation:mounted",ny="autoplay:play",pP="autoplay:playing",iy="autoplay:pause",ry="lazyload:loaded",sy="sk",oy="sh",Ku="ei";function Ut(i){var e=i?i.event.bus:document.createDocumentFragment(),t=Jx();function n(s,o){t.bind(e,Qc(s).join(" "),function(a){o.apply(o,Cp(a.detail)?a.detail:[])})}function r(s){t.dispatch(e,s,vs(arguments,1))}return i&&i.event.on(ey,t.destroy),Bc(t,{bus:e,on:n,off:wt(t.unbind,e),emit:r})}function vh(i,e,t,n){var r=Date.now,s,o=0,a,c=!0,l=0;function u(){if(!c){if(o=i?ps((r()-s)/i,1):1,t&&t(o),o>=1&&(e(),s=r(),n&&++l>=n))return f();a=R_(u)}}function h(p){p||_(),s=r()-(p?o*i:0),c=!1,a=R_(u)}function f(){c=!0}function d(){s=r(),o=0,t&&t(o)}function _(){a&&cancelAnimationFrame(a),o=0,a=0,c=!0}function m(p){i=p}function g(){return c}return{start:h,rewind:d,pause:f,cancel:_,set:m,isPaused:g}}function mP(i){var e=i;function t(r){e=r}function n(r){return Lp(Qc(r),e)}return{set:t,is:n}}function gP(i,e){var t=vh(e||0,i,null,1);return function(){t.isPaused()&&t.start()}}function _P(i,e,t){var n=i.state,r=t.breakpoints||{},s=t.reducedMotion||{},o=Jx(),a=[];function c(){var _=t.mediaQuery==="min";kc(r).sort(function(m,g){return _?+m-+g:+g-+m}).forEach(function(m){u(r[m],"("+(_?"min":"max")+"-width:"+m+"px)")}),u(s,A_),h()}function l(_){_&&o.destroy()}function u(_,m){var g=matchMedia(m);o.bind(g,"change",h),a.push([_,g])}function h(){var _=n.is(qu),m=t.direction,g=a.reduce(function(p,x){return Qr(p,x[1].matches?x[0]:{})},{});C_(t),d(g),t.destroy?i.destroy(t.destroy==="completely"):_?(l(!0),i.mount()):m!==t.direction&&i.refresh()}function f(_){matchMedia(A_).matches&&(_?Qr(t,s):C_(t,kc(s)))}function d(_,m,g){Qr(t,_),m&&Qr(Object.getPrototypeOf(t),_),(g||!n.is(jo))&&i.emit(qn,t)}return{setup:c,destroy:l,reduce:f,set:d}}var xh="Arrow",yh=xh+"Left",Sh=xh+"Right",ay=xh+"Up",cy=xh+"Down",I_="rtl",Eh="ttb",Lf={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[ay,Sh],ArrowRight:[cy,yh]};function vP(i,e,t){function n(s,o,a){a=a||t.direction;var c=a===I_&&!o?1:a===Eh?0:-1;return Lf[s]&&Lf[s][c]||s.replace(/width|left|right/i,function(l,u){var h=Lf[l.toLowerCase()][c]||l;return u>0?h.charAt(0).toUpperCase()+h.slice(1):h})}function r(s){return s*(t.direction===I_?1:-1)}return{resolve:n,orient:r}}var wr="role",ca="tabindex",xP="disabled",Hi="aria-",rl=Hi+"controls",ly=Hi+"current",O_=Hi+"selected",Si=Hi+"label",kp=Hi+"labelledby",uy=Hi+"hidden",Bp=Hi+"orientation",Vc=Hi+"roledescription",U_=Hi+"live",N_=Hi+"busy",F_=Hi+"atomic",zp=[wr,ca,xP,rl,ly,Si,kp,uy,Bp,Vc],sr=nl+"__",xs="is-",Df=nl,k_=sr+"track",yP=sr+"list",Mh=sr+"slide",hy=Mh+"--clone",SP=Mh+"__container",Hp=sr+"arrows",bh=sr+"arrow",fy=bh+"--prev",dy=bh+"--next",Th=sr+"pagination",py=Th+"__page",EP=sr+"progress",MP=EP+"__bar",bP=sr+"toggle",TP=sr+"spinner",wP=sr+"sr",AP=xs+"initialized",fo=xs+"active",my=xs+"prev",gy=xs+"next",Od=xs+"visible",Ud=xs+"loading",_y=xs+"focus-in",vy=xs+"overflow",RP=[fo,Od,my,gy,Ud,_y,vy],CP={slide:Mh,clone:hy,arrows:Hp,arrow:bh,prev:fy,next:dy,pagination:Th,page:py,spinner:TP};function PP(i,e){if(Xx(i.closest))return i.closest(e);for(var t=i;t&&t.nodeType===1&&!Fc(t,e);)t=t.parentElement;return t}var LP=5,B_=200,xy="touchstart mousedown",If="touchmove mousemove",Of="touchend touchcancel mouseup click";function DP(i,e,t){var n=Ut(i),r=n.on,s=n.bind,o=i.root,a=t.i18n,c={},l=[],u=[],h=[],f,d,_;function m(){v(),y(),x()}function g(){r(Yt,p),r(Yt,m),r(qn,x),s(document,xy+" keydown",function(E){_=E.type==="keydown"},{capture:!0}),s(o,"focusin",function(){yr(o,_y,!!_)})}function p(E){var C=zp.concat("style");Ir(l),Sr(o,u),Sr(f,h),rr([f,d],C),rr(o,E?C:["style",Vc])}function x(){Sr(o,u),Sr(f,h),u=T(Df),h=T(k_),ir(o,u),ir(f,h),tt(o,Si,t.label),tt(o,kp,t.labelledby)}function v(){f=M("."+k_),d=tl(f,"."+yP),mc(f&&d,"A track/list element is missing."),uu(l,$x(d,"."+Mh+":not(."+hy+")")),ro({arrows:Hp,pagination:Th,prev:fy,next:dy,bar:MP,toggle:bP},function(E,C){c[C]=M("."+E)}),Bc(c,{root:o,track:f,list:d,slides:l})}function y(){var E=o.id||tP(nl),C=t.role;o.id=E,f.id=f.id||E+"-track",d.id=d.id||E+"-list",!Bi(o,wr)&&o.tagName!=="SECTION"&&C&&tt(o,wr,C),tt(o,Vc,a.carousel),tt(d,wr,"presentation")}function M(E){var C=jx(o,E);return C&&PP(C,"."+Df)===o?C:void 0}function T(E){return[E+"--"+t.type,E+"--"+t.direction,t.drag&&E+"--draggable",t.isNavigation&&E+"--nav",E===Df&&fo]}return Bc(c,{setup:m,mount:g,destroy:p})}var Ea="slide",La="loop",sl="fade";function IP(i,e,t,n){var r=Ut(i),s=r.on,o=r.emit,a=r.bind,c=i.Components,l=i.root,u=i.options,h=u.isNavigation,f=u.updateOnMove,d=u.i18n,_=u.pagination,m=u.slideFocus,g=c.Direction.resolve,p=Bi(n,"style"),x=Bi(n,Si),v=t>-1,y=tl(n,"."+SP),M;function T(){v||(n.id=l.id+"-slide"+Up(e+1),tt(n,wr,_?"tabpanel":"group"),tt(n,Vc,d.slide),tt(n,Si,x||Id(d.slideLabel,[e+1,i.length]))),E()}function E(){a(n,"click",wt(o,Qx,G)),a(n,"keydown",wt(o,sy,G)),s([il,oy,Pa],D),s(ty,S),f&&s(ms,b)}function C(){M=!0,r.destroy(),Sr(n,RP),rr(n,zp),tt(n,"style",p),tt(n,Si,x||"")}function S(){var z=i.splides.map(function(w){var L=w.splide.Components.Slides.getAt(e);return L?L.slide.id:""}).join(" ");tt(n,Si,Id(d.slideX,(v?t:e)+1)),tt(n,rl,z),tt(n,wr,m?"button":""),m&&rr(n,Vc)}function b(){M||D()}function D(){if(!M){var z=i.index;I(),F(),yr(n,my,e===z-1),yr(n,gy,e===z+1)}}function I(){var z=U();z!==P_(n,fo)&&(yr(n,fo,z),tt(n,ly,h&&z||""),o(z?nP:iP,G))}function F(){var z=V(),w=!z&&(!U()||v);if(i.state.is([Ca,Zc])||tt(n,uy,w||""),tt(Ip(n,u.focusableNodes||""),ca,w?-1:""),m&&tt(n,ca,w?-1:0),z!==P_(n,Od)&&(yr(n,Od,z),o(z?rP:sP,G)),!z&&document.activeElement===n){var L=c.Slides.getAt(i.index);L&&Yx(L.slide)}}function P(z,w,L){Oi(L&&y||n,z,w)}function U(){var z=i.index;return z===e||u.cloneStatus&&z===t}function V(){if(i.is(sl))return U();var z=mi(c.Elements.track),w=mi(n),L=g("left",!0),N=g("right",!0);return Yu(z[L])<=Hc(w[L])&&Yu(w[N])<=Hc(z[N])}function k(z,w){var L=Fn(z-e);return!v&&(u.rewind||i.is(La))&&(L=ps(L,i.length-L)),L<=w}var G={index:e,slideIndex:t,slide:n,container:y,isClone:v,mount:T,destroy:C,update:D,style:P,isWithin:k};return G}function OP(i,e,t){var n=Ut(i),r=n.on,s=n.emit,o=n.bind,a=e.Elements,c=a.slides,l=a.list,u=[];function h(){f(),r(Yt,d),r(Yt,f)}function f(){c.forEach(function(D,I){m(D,I,-1)})}function d(){M(function(D){D.destroy()}),Ir(u)}function _(){M(function(D){D.update()})}function m(D,I,F){var P=IP(i,I,F,D);P.mount(),u.push(P),u.sort(function(U,V){return U.index-V.index})}function g(D){return D?T(function(I){return!I.isClone}):u}function p(D){var I=e.Controller,F=I.toIndex(D),P=I.hasFocus()?1:t.perPage;return T(function(U){return hu(U.index,F,F+P-1)})}function x(D){return T(D)[0]}function v(D,I){Ai(D,function(F){if(ds(F)&&(F=Kx(F)),qx(F)){var P=c[I];P?Dp(F,P):el(l,F),ir(F,t.classes.slide),C(F,wt(s,Gc))}}),s(Yt)}function y(D){ho(T(D).map(function(I){return I.slide})),s(Yt)}function M(D,I){g(I).forEach(D)}function T(D){return u.filter(Xx(D)?D:function(I){return ds(D)?Fc(I.slide,D):Lp(Qc(D),I.index)})}function E(D,I,F){M(function(P){P.style(D,I,F)})}function C(D,I){var F=Ip(D,"img"),P=F.length;P?F.forEach(function(U){o(U,"load error",function(){--P||I()})}):I()}function S(D){return D?c.length:u.length}function b(){return u.length>t.perPage}return{mount:h,destroy:d,update:_,register:m,get:g,getIn:p,getAt:x,add:v,remove:y,forEach:M,filter:T,style:E,getLength:S,isEnough:b}}function UP(i,e,t){var n=Ut(i),r=n.on,s=n.bind,o=n.emit,a=e.Slides,c=e.Direction.resolve,l=e.Elements,u=l.root,h=l.track,f=l.list,d=a.getAt,_=a.style,m,g,p;function x(){v(),s(window,"resize load",gP(wt(o,Gc))),r([qn,Yt],v),r(Gc,y)}function v(){m=t.direction===Eh,Oi(u,"maxWidth",Rs(t.width)),Oi(h,c("paddingLeft"),M(!1)),Oi(h,c("paddingRight"),M(!0)),y(!0)}function y(G){var z=mi(u);(G||g.width!==z.width||g.height!==z.height)&&(Oi(h,"height",T()),_(c("marginRight"),Rs(t.gap)),_("width",C()),_("height",S(),!0),g=z,o(Np),p!==(p=k())&&(yr(u,vy,p),o(lP,p)))}function M(G){var z=t.padding,w=c(G?"right":"left");return z&&Rs(z[w]||(Nc(z)?0:z))||"0px"}function T(){var G="";return m&&(G=E(),mc(G,"height or heightRatio is missing."),G="calc("+G+" - "+M(!1)+" - "+M(!0)+")"),G}function E(){return Rs(t.height||mi(f).width*t.heightRatio)}function C(){return t.autoWidth?null:Rs(t.fixedWidth)||(m?"":b())}function S(){return Rs(t.fixedHeight)||(m?t.autoHeight?null:b():E())}function b(){var G=Rs(t.gap);return"calc((100%"+(G&&" + "+G)+")/"+(t.perPage||1)+(G&&" - "+G)+")"}function D(){return mi(f)[c("width")]}function I(G,z){var w=d(G||0);return w?mi(w.slide)[c("width")]+(z?0:U()):0}function F(G,z){var w=d(G);if(w){var L=mi(w.slide)[c("right")],N=mi(f)[c("left")];return Fn(L-N)+(z?0:U())}return 0}function P(G){return F(i.length-1)-F(0)+I(0,G)}function U(){var G=d(0);return G&&parseFloat(Oi(G.slide,c("marginRight")))||0}function V(G){return parseFloat(Oi(h,c("padding"+(G?"Right":"Left"))))||0}function k(){return i.is(sl)||P(!0)>D()}return{mount:x,resize:y,listSize:D,slideSize:I,sliderSize:P,totalSize:F,getPadding:V,isOverflow:k}}var NP=2;function FP(i,e,t){var n=Ut(i),r=n.on,s=e.Elements,o=e.Slides,a=e.Direction.resolve,c=[],l;function u(){r(Yt,h),r([qn,Gc],d),(l=g())&&(_(l),e.Layout.resize(!0))}function h(){f(),u()}function f(){ho(c),Ir(c),n.destroy()}function d(){var p=g();l!==p&&(l<p||!p)&&n.emit(Yt)}function _(p){var x=o.get().slice(),v=x.length;if(v){for(;x.length<p;)uu(x,x);uu(x.slice(-p),x.slice(0,p)).forEach(function(y,M){var T=M<p,E=m(y.slide,M);T?Dp(E,x[0].slide):el(s.list,E),uu(c,E),o.register(E,M-p+(T?0:v),y.index)})}}function m(p,x){var v=p.cloneNode(!0);return ir(v,t.classes.clone),v.id=i.root.id+"-clone"+Up(x+1),v}function g(){var p=t.clones;if(!i.is(La))p=0;else if(Jc(p)){var x=t[a("fixedWidth")]&&e.Layout.slideSize(0),v=x&&Hc(mi(s.track)[a("width")]/x);p=v||t[a("autoWidth")]&&i.length||t.perPage*NP}return p}return{mount:u,destroy:f}}function kP(i,e,t){var n=Ut(i),r=n.on,s=n.emit,o=i.state.set,a=e.Layout,c=a.slideSize,l=a.getPadding,u=a.totalSize,h=a.listSize,f=a.sliderSize,d=e.Direction,_=d.resolve,m=d.orient,g=e.Elements,p=g.list,x=g.track,v;function y(){v=e.Transition,r([go,Np,qn,Yt],M)}function M(){e.Controller.isBusy()||(e.Scroll.cancel(),E(i.index),e.Slides.update())}function T(w,L,N,K){w!==L&&G(w>N)&&(D(),C(b(P(),w>N),!0)),o(Ca),s(ms,L,N,w),v.start(L,function(){o(Sa),s(il,L,N,w),K&&K()})}function E(w){C(F(w,!0))}function C(w,L){if(!i.is(sl)){var N=L?w:S(w);Oi(p,"transform","translate"+_("X")+"("+N+"px)"),w!==N&&s(oy)}}function S(w){if(i.is(La)){var L=I(w),N=L>e.Controller.getEnd(),K=L<0;(K||N)&&(w=b(w,N))}return w}function b(w,L){var N=w-k(L),K=f();return w-=m(K*(Hc(Fn(N)/K)||1))*(L?1:-1),w}function D(){C(P(),!0),v.cancel()}function I(w){for(var L=e.Slides.get(),N=0,K=1/0,j=0;j<L.length;j++){var q=L[j].index,X=Fn(F(q,!0)-w);if(X<=K)K=X,N=q;else break}return N}function F(w,L){var N=m(u(w-1)-V(w));return L?U(N):N}function P(){var w=_("left");return mi(p)[w]-mi(x)[w]+m(l(!1))}function U(w){return t.trimSpace&&i.is(Ea)&&(w=Ho(w,0,m(f(!0)-h()))),w}function V(w){var L=t.focus;return L==="center"?(h()-c(w,!0))/2:+L*c(w)||0}function k(w){return F(w?e.Controller.getEnd():0,!!t.trimSpace)}function G(w){var L=m(b(P(),w));return w?L>=0:L<=p[_("scrollWidth")]-mi(x)[_("width")]}function z(w,L){L=Jc(L)?P():L;var N=w!==!0&&m(L)<m(k(!1)),K=w!==!1&&m(L)>m(k(!0));return N||K}return{mount:y,move:T,jump:E,translate:C,shift:b,cancel:D,toIndex:I,toPosition:F,getPosition:P,getLimit:k,exceededLimit:z,reposition:M}}function BP(i,e,t){var n=Ut(i),r=n.on,s=n.emit,o=e.Move,a=o.getPosition,c=o.getLimit,l=o.toPosition,u=e.Slides,h=u.isEnough,f=u.getLength,d=t.omitEnd,_=i.is(La),m=i.is(Ea),g=wt(P,!1),p=wt(P,!0),x=t.start||0,v,y=x,M,T,E;function C(){S(),r([qn,Yt,Ku],S),r(Np,b)}function S(){M=f(!0),T=t.perMove,E=t.perPage,v=G();var X=Ho(x,0,d?v:M-1);X!==x&&(x=X,o.reposition())}function b(){v!==G()&&s(Ku)}function D(X,ae,me){if(!q()){var he=F(X),re=k(he);re>-1&&(ae||re!==x)&&(N(re),o.move(he,re,y,me))}}function I(X,ae,me,he){e.Scroll.scroll(X,ae,me,function(){var re=k(o.toIndex(a()));N(d?ps(re,v):re),he&&he()})}function F(X){var ae=x;if(ds(X)){var me=X.match(/([+\-<>])(\d+)?/)||[],he=me[1],re=me[2];he==="+"||he==="-"?ae=U(x+ +(""+he+(+re||1)),x):he===">"?ae=re?z(+re):g(!0):he==="<"&&(ae=p(!0))}else ae=_?X:Ho(X,0,v);return ae}function P(X,ae){var me=T||(j()?1:E),he=U(x+me*(X?-1:1),x,!(T||j()));return he===-1&&m&&!Zx(a(),c(!X),1)?X?0:v:ae?he:k(he)}function U(X,ae,me){if(h()||j()){var he=V(X);he!==X&&(ae=X,X=he,me=!1),X<0||X>v?!T&&(hu(0,X,ae,!0)||hu(v,ae,X,!0))?X=z(w(X)):_?X=me?X<0?-(M%E||E):M:X:t.rewind?X=X<0?v:0:X=-1:me&&X!==ae&&(X=z(w(ae)+(X<ae?-1:1)))}else X=-1;return X}function V(X){if(m&&t.trimSpace==="move"&&X!==x)for(var ae=a();ae===l(X,!0)&&hu(X,0,i.length-1,!t.rewind);)X<x?--X:++X;return X}function k(X){return _?(X+M)%M||0:X}function G(){for(var X=M-(j()||_&&T?1:E);d&&X-- >0;)if(l(M-1,!0)!==l(X,!0)){X++;break}return Ho(X,0,M-1)}function z(X){return Ho(j()?X:E*X,0,v)}function w(X){return j()?ps(X,v):Yu((X>=v?M-1:X)/E)}function L(X){var ae=o.toIndex(X);return m?Ho(ae,0,v):ae}function N(X){X!==x&&(y=x,x=X)}function K(X){return X?y:x}function j(){return!Jc(t.focus)||t.isNavigation}function q(){return i.state.is([Ca,Zc])&&!!t.waitForTransition}return{mount:C,go:D,scroll:I,getNext:g,getPrev:p,getAdjacent:P,getEnd:G,setIndex:N,getIndex:K,toIndex:z,toPage:w,toDest:L,hasFocus:j,isBusy:q}}var zP="http://www.w3.org/2000/svg",HP="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",ql=40;function GP(i,e,t){var n=Ut(i),r=n.on,s=n.bind,o=n.emit,a=t.classes,c=t.i18n,l=e.Elements,u=e.Controller,h=l.arrows,f=l.track,d=h,_=l.prev,m=l.next,g,p,x={};function v(){M(),r(qn,y)}function y(){T(),v()}function M(){var I=t.arrows;I&&!(_&&m)&&S(),_&&m&&(Bc(x,{prev:_,next:m}),zc(d,I?"":"none"),ir(d,p=Hp+"--"+t.direction),I&&(E(),D(),tt([_,m],rl,f.id),o(uP,_,m)))}function T(){n.destroy(),Sr(d,p),g?(ho(h?[_,m]:d),_=m=null):rr([_,m],zp)}function E(){r([go,il,Yt,Pa,Ku],D),s(m,"click",wt(C,">")),s(_,"click",wt(C,"<"))}function C(I){u.go(I,!0)}function S(){d=h||aa("div",a.arrows),_=b(!0),m=b(!1),g=!0,el(d,[_,m]),!h&&Dp(d,f)}function b(I){var F='<button class="'+a.arrow+" "+(I?a.prev:a.next)+'" type="button"><svg xmlns="'+zP+'" viewBox="0 0 '+ql+" "+ql+'" width="'+ql+'" height="'+ql+'" focusable="false"><path d="'+(t.arrowPath||HP)+'" />';return Kx(F)}function D(){if(_&&m){var I=i.index,F=u.getPrev(),P=u.getNext(),U=F>-1&&I<F?c.last:c.prev,V=P>-1&&I>P?c.first:c.next;_.disabled=F<0,m.disabled=P<0,tt(_,Si,U),tt(m,Si,V),o(hP,_,m,F,P)}}return{arrows:x,mount:v,destroy:T,update:D}}var VP=Op+"-interval";function WP(i,e,t){var n=Ut(i),r=n.on,s=n.bind,o=n.emit,a=vh(t.interval,i.go.bind(i,">"),E),c=a.isPaused,l=e.Elements,u=e.Elements,h=u.root,f=u.toggle,d=t.autoplay,_,m,g=d==="pause";function p(){d&&(x(),f&&tt(f,rl,l.track.id),g||v(),T())}function x(){t.pauseOnHover&&s(h,"mouseenter mouseleave",function(S){_=S.type==="mouseenter",M()}),t.pauseOnFocus&&s(h,"focusin focusout",function(S){m=S.type==="focusin",M()}),f&&s(f,"click",function(){g?v():y(!0)}),r([ms,Fp,Yt],a.rewind),r(ms,C)}function v(){c()&&e.Slides.isEnough()&&(a.start(!t.resetProgress),m=_=g=!1,T(),o(ny))}function y(S){S===void 0&&(S=!0),g=!!S,T(),c()||(a.pause(),o(iy))}function M(){g||(_||m?y(!1):v())}function T(){f&&(yr(f,fo,!g),tt(f,Si,t.i18n[g?"play":"pause"]))}function E(S){var b=l.bar;b&&Oi(b,"width",S*100+"%"),o(pP,S)}function C(S){var b=e.Slides.getAt(S);a.set(b&&+Bi(b.slide,VP)||t.interval)}return{mount:p,destroy:a.cancel,play:v,pause:y,isPaused:c}}function XP(i,e,t){var n=Ut(i),r=n.on;function s(){t.cover&&(r(ry,wt(a,!0)),r([go,qn,Yt],wt(o,!0)))}function o(c){e.Slides.forEach(function(l){var u=tl(l.container||l.slide,"img");u&&u.src&&a(c,u,l)})}function a(c,l,u){u.style("background",c?'center/cover no-repeat url("'+l.src+'")':"",!0),zc(l,c?"none":"")}return{mount:s,destroy:wt(o,!1)}}var qP=10,$P=600,YP=.6,KP=1.5,jP=800;function ZP(i,e,t){var n=Ut(i),r=n.on,s=n.emit,o=i.state.set,a=e.Move,c=a.getPosition,l=a.getLimit,u=a.exceededLimit,h=a.translate,f=i.is(Ea),d,_,m=1;function g(){r(ms,y),r([qn,Yt],M)}function p(E,C,S,b,D){var I=c();if(y(),S&&(!f||!u())){var F=e.Layout.sliderSize(),P=Dd(E)*F*Yu(Fn(E)/F)||0;E=a.toPosition(e.Controller.toDest(E%F))+P}var U=Zx(I,E,1);m=1,C=U?0:C||$u(Fn(E-I)/KP,jP),_=b,d=vh(C,x,wt(v,I,E,D),1),o(Zc),s(Fp),d.start()}function x(){o(Sa),_&&_(),s(Pa)}function v(E,C,S,b){var D=c(),I=E+(C-E)*T(b),F=(I-D)*m;h(D+F),f&&!S&&u()&&(m*=YP,Fn(F)<qP&&p(l(u(!0)),$P,!1,_,!0))}function y(){d&&d.cancel()}function M(){d&&!d.isPaused()&&(y(),x())}function T(E){var C=t.easingFunc;return C?C(E):1-Math.pow(1-E,4)}return{mount:g,destroy:y,scroll:p,cancel:M}}var Go={passive:!1,capture:!0};function JP(i,e,t){var n=Ut(i),r=n.on,s=n.emit,o=n.bind,a=n.unbind,c=i.state,l=e.Move,u=e.Scroll,h=e.Controller,f=e.Elements.track,d=e.Media.reduce,_=e.Direction,m=_.resolve,g=_.orient,p=l.getPosition,x=l.exceededLimit,v,y,M,T,E,C=!1,S,b,D;function I(){o(f,If,Pd,Go),o(f,Of,Pd,Go),o(f,xy,P,Go),o(f,"click",k,{capture:!0}),o(f,"dragstart",mr),r([go,qn],F)}function F(){var J=t.drag;B(!J),T=J==="free"}function P(J){if(S=!1,!b){var Q=re(J);he(J.target)&&(Q||!J.button)&&(h.isBusy()?mr(J,!0):(D=Q?f:window,E=c.is([Ca,Zc]),M=null,o(D,If,U,Go),o(D,Of,V,Go),l.cancel(),u.cancel(),G(J)))}}function U(J){if(c.is(lu)||(c.set(lu),s(oP)),J.cancelable)if(E){l.translate(v+me(j(J)));var Q=q(J)>B_,ce=C!==(C=x());(Q||ce)&&G(J),S=!0,s(aP),mr(J)}else L(J)&&(E=w(J),mr(J))}function V(J){c.is(lu)&&(c.set(Sa),s(cP)),E&&(z(J),mr(J)),a(D,If,U),a(D,Of,V),E=!1}function k(J){!b&&S&&mr(J,!0)}function G(J){M=y,y=J,v=p()}function z(J){var Q=N(J),ce=K(Q),ge=t.rewind&&t.rewindByDrag;d(!1),T?h.scroll(ce,0,t.snap):i.is(sl)?h.go(g(Dd(Q))<0?ge?"<":"-":ge?">":"+"):i.is(Ea)&&C&&ge?h.go(x(!0)?">":"<"):h.go(h.toDest(ce),!0),d(!0)}function w(J){var Q=t.dragMinThreshold,ce=Nc(Q),ge=ce&&Q.mouse||0,W=(ce?Q.touch:+Q)||10;return Fn(j(J))>(re(J)?W:ge)}function L(J){return Fn(j(J))>Fn(j(J,!0))}function N(J){if(i.is(La)||!C){var Q=q(J);if(Q&&Q<B_)return j(J)/Q}return 0}function K(J){return p()+Dd(J)*ps(Fn(J)*(t.flickPower||600),T?1/0:e.Layout.listSize()*(t.flickMaxPages||1))}function j(J,Q){return ae(J,Q)-ae(X(J),Q)}function q(J){return Ld(J)-Ld(X(J))}function X(J){return y===J&&M||y}function ae(J,Q){return(re(J)?J.changedTouches[0]:J)["page"+m(Q?"Y":"X")]}function me(J){return J/(C&&i.is(Ea)?LP:1)}function he(J){var Q=t.noDrag;return!Fc(J,"."+py+", ."+bh)&&(!Q||!Fc(J,Q))}function re(J){return typeof TouchEvent<"u"&&J instanceof TouchEvent}function le(){return E}function B(J){b=J}return{mount:I,disable:B,isDragging:le}}var QP={Spacebar:" ",Right:Sh,Left:yh,Up:ay,Down:cy};function Gp(i){return i=ds(i)?i:i.key,QP[i]||i}var z_="keydown";function eL(i,e,t){var n=Ut(i),r=n.on,s=n.bind,o=n.unbind,a=i.root,c=e.Direction.resolve,l,u;function h(){f(),r(qn,d),r(qn,f),r(ms,m)}function f(){var p=t.keyboard;p&&(l=p==="global"?window:a,s(l,z_,g))}function d(){o(l,z_)}function _(p){u=p}function m(){var p=u;u=!0,Wx(function(){u=p})}function g(p){if(!u){var x=Gp(p);x===c(yh)?i.go("<"):x===c(Sh)&&i.go(">")}}return{mount:h,destroy:d,disable:_}}var gc=Op+"-lazy",fu=gc+"-srcset",tL="["+gc+"], ["+fu+"]";function nL(i,e,t){var n=Ut(i),r=n.on,s=n.off,o=n.bind,a=n.emit,c=t.lazyLoad==="sequential",l=[il,Pa],u=[];function h(){t.lazyLoad&&(f(),r(Yt,f))}function f(){Ir(u),d(),c?p():(s(l),r(l,_),_())}function d(){e.Slides.forEach(function(x){Ip(x.slide,tL).forEach(function(v){var y=Bi(v,gc),M=Bi(v,fu);if(y!==v.src||M!==v.srcset){var T=t.classes.spinner,E=v.parentElement,C=tl(E,"."+T)||aa("span",T,E);u.push([v,x,C]),v.src||zc(v,"none")}})})}function _(){u=u.filter(function(x){var v=t.perPage*((t.preloadPages||1)+1)-1;return x[1].isWithin(i.index,v)?m(x):!0}),u.length||s(l)}function m(x){var v=x[0];ir(x[1].slide,Ud),o(v,"load error",wt(g,x)),tt(v,"src",Bi(v,gc)),tt(v,"srcset",Bi(v,fu)),rr(v,gc),rr(v,fu)}function g(x,v){var y=x[0],M=x[1];Sr(M.slide,Ud),v.type!=="error"&&(ho(x[2]),zc(y,""),a(ry,y,M),a(Gc)),c&&p()}function p(){u.length&&m(u.shift())}return{mount:h,destroy:wt(Ir,u),check:_}}function iL(i,e,t){var n=Ut(i),r=n.on,s=n.emit,o=n.bind,a=e.Slides,c=e.Elements,l=e.Controller,u=l.hasFocus,h=l.getIndex,f=l.go,d=e.Direction.resolve,_=c.pagination,m=[],g,p;function x(){v(),r([qn,Yt,Ku],x);var b=t.pagination;_&&zc(_,b?"":"none"),b&&(r([ms,Fp,Pa],S),y(),S(),s(fP,{list:g,items:m},C(i.index)))}function v(){g&&(ho(_?vs(g.children):g),Sr(g,p),Ir(m),g=null),n.destroy()}function y(){var b=i.length,D=t.classes,I=t.i18n,F=t.perPage,P=u()?l.getEnd()+1:Hc(b/F);g=_||aa("ul",D.pagination,c.track.parentElement),ir(g,p=Th+"--"+E()),tt(g,wr,"tablist"),tt(g,Si,I.select),tt(g,Bp,E()===Eh?"vertical":"");for(var U=0;U<P;U++){var V=aa("li",null,g),k=aa("button",{class:D.page,type:"button"},V),G=a.getIn(U).map(function(w){return w.slide.id}),z=!u()&&F>1?I.pageX:I.slideX;o(k,"click",wt(M,U)),t.paginationKeyboard&&o(k,"keydown",wt(T,U)),tt(V,wr,"presentation"),tt(k,wr,"tab"),tt(k,rl,G.join(" ")),tt(k,Si,Id(z,U+1)),tt(k,ca,-1),m.push({li:V,button:k,page:U})}}function M(b){f(">"+b,!0)}function T(b,D){var I=m.length,F=Gp(D),P=E(),U=-1;F===d(Sh,!1,P)?U=++b%I:F===d(yh,!1,P)?U=(--b+I)%I:F==="Home"?U=0:F==="End"&&(U=I-1);var V=m[U];V&&(Yx(V.button),f(">"+U),mr(D,!0))}function E(){return t.paginationDirection||t.direction}function C(b){return m[l.toPage(b)]}function S(){var b=C(h(!0)),D=C(h());if(b){var I=b.button;Sr(I,fo),rr(I,O_),tt(I,ca,-1)}if(D){var F=D.button;ir(F,fo),tt(F,O_,!0),tt(F,ca,"")}s(dP,{list:g,items:m},b,D)}return{items:m,mount:x,destroy:v,getAt:C,update:S}}var rL=[" ","Enter"];function sL(i,e,t){var n=t.isNavigation,r=t.slideFocus,s=[];function o(){i.splides.forEach(function(_){_.isParent||(l(i,_.splide),l(_.splide,i))}),n&&u()}function a(){s.forEach(function(_){_.destroy()}),Ir(s)}function c(){a(),o()}function l(_,m){var g=Ut(_);g.on(ms,function(p,x,v){m.go(m.is(La)?v:p)}),s.push(g)}function u(){var _=Ut(i),m=_.on;m(Qx,f),m(sy,d),m([go,qn],h),s.push(_),_.emit(ty,i.splides)}function h(){tt(e.Elements.list,Bp,t.direction===Eh?"vertical":"")}function f(_){i.go(_.index)}function d(_,m){Lp(rL,Gp(m))&&(f(_),mr(m))}return{setup:wt(e.Media.set,{slideFocus:Jc(r)?n:r},!0),mount:o,destroy:a,remount:c}}function oL(i,e,t){var n=Ut(i),r=n.bind,s=0;function o(){t.wheel&&r(e.Elements.track,"wheel",a,Go)}function a(l){if(l.cancelable){var u=l.deltaY,h=u<0,f=Ld(l),d=t.wheelMinThreshold||0,_=t.wheelSleep||0;Fn(u)>d&&f-s>_&&(i.go(h?"<":">"),s=f),c(h)&&mr(l)}}function c(l){return!t.releaseWheel||i.state.is(Ca)||e.Controller.getAdjacent(l)!==-1}return{mount:o}}var aL=90;function cL(i,e,t){var n=Ut(i),r=n.on,s=e.Elements.track,o=t.live&&!t.isNavigation,a=aa("span",wP),c=vh(aL,wt(u,!1));function l(){o&&(f(!e.Autoplay.isPaused()),tt(s,F_,!0),a.textContent="…",r(ny,wt(f,!0)),r(iy,wt(f,!1)),r([il,Pa],wt(u,!0)))}function u(d){tt(s,N_,d),d?(el(s,a),c.start()):(ho(a),c.cancel())}function h(){rr(s,[U_,F_,N_]),ho(a)}function f(d){o&&tt(s,U_,d?"off":"polite")}return{mount:l,disable:f,destroy:h}}var lL=Object.freeze({__proto__:null,Media:_P,Direction:vP,Elements:DP,Slides:OP,Layout:UP,Clones:FP,Move:kP,Controller:BP,Arrows:GP,Autoplay:WP,Cover:XP,Scroll:ZP,Drag:JP,Keyboard:eL,LazyLoad:nL,Pagination:iL,Sync:sL,Wheel:oL,Live:cL}),uL={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},hL={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:CP,i18n:uL,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function fL(i,e,t){var n=e.Slides;function r(){Ut(i).on([go,Yt],s)}function s(){n.forEach(function(a){a.style("transform","translateX(-"+100*a.index+"%)")})}function o(a,c){n.style("transition","opacity "+t.speed+"ms "+t.easing),Wx(c)}return{mount:r,start:o,cancel:Pd}}function dL(i,e,t){var n=e.Move,r=e.Controller,s=e.Scroll,o=e.Elements.list,a=wt(Oi,o,"transition"),c;function l(){Ut(i).bind(o,"transitionend",function(d){d.target===o&&c&&(h(),c())})}function u(d,_){var m=n.toPosition(d,!0),g=n.getPosition(),p=f(d);Fn(m-g)>=1&&p>=1?t.useScroll?s.scroll(m,p,!1,_):(a("transform "+p+"ms "+t.easing),n.translate(m,!0),c=_):(n.jump(d),_())}function h(){a(""),s.cancel()}function f(d){var _=t.rewindSpeed;if(i.is(Ea)&&_){var m=r.getIndex(!0),g=r.getEnd();if(m===0&&d>=g||m>=g&&d===0)return _}return t.speed}return{mount:l,start:u,cancel:h}}var pL=function(){function i(t,n){this.event=Ut(),this.Components={},this.state=mP(jo),this.splides=[],this._o={},this._E={};var r=ds(t)?jx(document,t):t;mc(r,r+" is invalid."),this.root=r,n=Qr({label:Bi(r,Si)||"",labelledby:Bi(r,kp)||""},hL,i.defaults,n||{});try{Qr(n,JSON.parse(Bi(r,Op)))}catch{mc(!1,"Invalid JSON")}this._o=Object.create(Qr({},n))}var e=i.prototype;return e.mount=function(n,r){var s=this,o=this.state,a=this.Components;mc(o.is([jo,qu]),"Already mounted!"),o.set(jo),this._C=a,this._T=r||this._T||(this.is(sl)?fL:dL),this._E=n||this._E;var c=Bc({},lL,this._E,{Transition:this._T});return ro(c,function(l,u){var h=l(s,a,s._o);a[u]=h,h.setup&&h.setup()}),ro(a,function(l){l.mount&&l.mount()}),this.emit(go),ir(this.root,AP),o.set(Sa),this.emit(D_),this},e.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(Sa)&&(this._C.Sync.remount(),n.Components.Sync.remount()),this},e.go=function(n){return this._C.Controller.go(n),this},e.on=function(n,r){return this.event.on(n,r),this},e.off=function(n){return this.event.off(n),this},e.emit=function(n){var r;return(r=this.event).emit.apply(r,[n].concat(vs(arguments,1))),this},e.add=function(n,r){return this._C.Slides.add(n,r),this},e.remove=function(n){return this._C.Slides.remove(n),this},e.is=function(n){return this._o.type===n},e.refresh=function(){return this.emit(Yt),this},e.destroy=function(n){n===void 0&&(n=!0);var r=this.event,s=this.state;return s.is(jo)?Ut(this).on(D_,this.destroy.bind(this,n)):(ro(this._C,function(o){o.destroy&&o.destroy(n)},!0),r.emit(ey),r.destroy(),n&&Ir(this.splides),s.set(qu)),this},JC(i,[{key:"options",get:function(){return this._o},set:function(n){this._C.Media.set(n,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),i}(),Vp=pL;Vp.defaults={};Vp.STATES=eP;function Wp(i,e,t){const n=i.querySelector(".basic-splide"),r=new Vp(n.querySelector(".splide"),{type:"slide",perMove:1,perPage:e,arrows:!1,pagination:!1,drag:!0,speed:450,easing:"ease",...t}),s=n.querySelector(".basic-splide__controls__prev"),o=n.querySelector(".basic-splide__controls__next");return s.addEventListener("click",()=>{r.go("<")}),o.addEventListener("click",()=>{r.go(">")}),r.on("mounted move",()=>{s.disabled=!1,o.disabled=!1,r.index===0&&(s.disabled=!0),(r.index===r.length-e||r.length<=e)&&(o.disabled=!0)}),r.mount(),r}class mL extends dt{constructor(t){super(t);ie(this,"splide");at.isPc&&(this.splide=this.setupSplide())}setupSplide(){return Wp(this.page,3,{padding:{left:"12.25rem",right:"12.25rem"}})}dispose(){var t;super.dispose(),(t=this.splide)==null||t.destroy()}}Ae.registerPlugin(Se);class gL extends dt{constructor(e){super(e),this.createAnimation()}createAnimation(){this.registerAnimation(Se.create({trigger:this.$(".home__recruit__transition__in"),start:at.isPc?"top bottom-=10%":"top bottom+=30%",endTrigger:this.$(".home__recruit__sticky-container"),end:"bottom bottom",scrub:!0,onUpdate:({progress:e})=>{Dn.transitionRecruitIn(e)},onEnter:()=>{Dn.resetScene("circle")}}),Se.create({trigger:this.$(".home__recruit__sticky-container"),start:"bottom bottom-=1px",endTrigger:this.$(".home__recruit__transition__out"),end:"top center-=20%",scrub:!0,onUpdate:({progress:e})=>{Dn.transitionRecruitOut(e)}}))}}Ae.registerPlugin(Se);class _L extends dt{constructor(e){super(e),this.createAnimation()}createAnimation(){const e=this.$(".home__sustainability__transition");this.registerAnimation(Se.create({trigger:e,start:"top bottom-=20%",end:"bottom center",scrub:!0,onUpdate:({progress:t})=>{Dn.transitionSustainability(t),.8<t?ln.changeTheme("light"):ln.changeTheme("dark")}}))}}class Uf extends rt{constructor(t){super(t);ie(this,"sections",[]);ie(this,"sectionFV");ln.changeTheme("light"),Dn.enable().then(()=>{Dn.resetScene(),Dn.playKvAnimation()}),this.sectionFV=new jC(this.page),this.sections.push(this.sectionFV,new KC(this.page),new mL(this.page),new _L(this.page),new ZC(this.page),new gL(this.page))}firstAnimation(){return this.sectionFV.fadeInCatchphrase()}dispose(){super.dispose(),this.sections.forEach(t=>t.dispose())}}Ae.registerPlugin(Se);class Yn extends dt{constructor(t){super(t);ie(this,"menuHeightHandler");ie(this,"matchMedia");const n=t.querySelector(".id-sections-menu"),r=n.querySelectorAll("li"),s=t.querySelectorAll(".id-section"),o=t.querySelector(".id-section-heading"),a=h=>{r[h].classList.add("is-active")},c=h=>{r[h].classList.remove("is-active")},l=()=>{if(at.isSp)return;const h=n.clientHeight;n.style.setProperty("--id-sections-menu-height",h.toString()+"px")};let u;u=0,this.menuHeightHandler=()=>{u>0&&clearTimeout(u),u=setTimeout(()=>{l()},200)},l(),window.addEventListener("resize",this.menuHeightHandler),this.matchMedia=Ae.matchMedia().add(at.desktopMediaQuery,()=>{Se.create({trigger:o,start:"top 90%",onEnter:()=>{n.classList.remove("is-hidden")},onLeaveBack:()=>{n.classList.add("is-hidden")}}),s.forEach((h,f)=>{Se.create({trigger:h,start:"top center",end:"bottom center",onEnter:()=>{a(f)},onEnterBack:()=>{a(f)},onLeave:()=>{f!==s.length-1&&c(f)},onLeaveBack:()=>{f!==0&&c(f)}})})})}dispose(){super.dispose(),window.removeEventListener("resize",this.menuHeightHandler),this.matchMedia.revert()}}class vL extends rt{constructor(t){super(t);ie(this,"sections",[]);this.sections.push(new Yn(t))}dispose(){super.dispose(),this.sections.forEach(t=>t.dispose())}}Ae.registerPlugin(Se);class xL extends dt{constructor(t){super(t);ie(this,"htmlBody");ie(this,"images");ie(this,"closeButtons");ie(this,"openModals");ie(this,"closeModals");this.htmlBody=document.querySelectorAll("html, body"),this.images=t.querySelectorAll(".member-card__image");const n=t.querySelector(".member-modals"),r=t.querySelectorAll(".member-modal");this.closeButtons=n.querySelectorAll(".member-modals__bg, .member-modals__close");const s=a=>{Ae.timeline().set(this.htmlBody,{overflow:"clip"}).set(a,{display:"flex"}).set(n,{visibility:"visible"}).to(n,{opacity:1,duration:.4,ease:"power1.out"})},o=()=>{Ae.timeline({onComplete(){Se.refresh()}}).set(this.htmlBody,{overflow:"revert"}).to(n,{opacity:0,duration:.3,ease:"power1.out"}).set(n,{visibility:"hidden"}).set(r,{display:"none"})};this.openModals=a=>{const c=a.currentTarget.dataset.boardmember,l=n.querySelector(`.member-modal[data-boardmember="${c}"]`);s(l)},this.closeModals=()=>{o()},this.images.forEach(a=>{a.addEventListener("click",this.openModals)}),this.closeButtons.forEach(a=>{a.addEventListener("click",this.closeModals)})}dispose(){super.dispose(),this.htmlBody.forEach(t=>{t.style.overflow="revert"}),this.images.forEach(t=>{t.removeEventListener("click",this.openModals)}),this.closeButtons.forEach(t=>{t.removeEventListener("click",this.closeModals)})}}class yL extends rt{constructor(t){super(t);ie(this,"sections",[]);this.sections.push(new Yn(t),new xL(t))}dispose(){super.dispose(),this.sections.forEach(t=>t.dispose())}}class SL extends rt{constructor(t){super(t);ie(this,"sections",[]);this.sections.push(new Yn(t))}dispose(){super.dispose(),this.sections.forEach(t=>t.dispose())}}Ae.registerPlugin(Se);class EL extends dt{constructor(t){super(t);ie(this,"context");const n=t.querySelector(".model__02__image"),r=n.querySelectorAll("svg.pc .ellipses path"),s=n.querySelectorAll("svg.sp .ellipses path"),o=n.querySelectorAll("svg.pc .arrows g"),a=n.querySelectorAll("svg.sp .arrows g"),c=n.querySelectorAll("li span"),l=n.querySelectorAll("li p");this.context=Ae.context(()=>{let u;at.isPc?u=Ae.timeline({paused:!0}).to(r,{strokeOpacity:1,duration:.9,stagger:.18,ease:"power1.out"},"").to(r,{strokeDashoffset:0,duration:1.1,stagger:.18,ease:"power1.out"},"").to(c,{opacity:1,x:0,duration:.65,delay:.35,stagger:.18,ease:"power1.out"},"").to(l,{opacity:1,x:0,duration:.65,delay:.35,stagger:.18,ease:"power1.out"},"").to(r,{fillOpacity:1,duration:.7,delay:.35,stagger:.18,ease:"none"},"").to(o,{opacity:1,x:0,duration:.65,delay:.43,stagger:.18,ease:"power1.out"},""):u=Ae.timeline({paused:!0}).to(s,{strokeOpacity:1,duration:.8,stagger:.1,ease:"power1.out"},"").to(s,{strokeDashoffset:0,duration:.9,stagger:.1,ease:"power1.out"},"").to(c,{opacity:1,x:0,duration:.6,delay:.28,stagger:.1,ease:"power1.out"},"").to(l,{opacity:1,x:0,duration:.6,delay:.28,stagger:.1,ease:"power1.out"},"").to(s,{fillOpacity:1,duration:.7,delay:.28,stagger:.1,ease:"none"},"").to(a,{opacity:1,x:0,duration:.6,delay:.33,stagger:.1,ease:"power1.out"},""),Se.create({trigger:n,start:"top 85%",once:!0,onEnter:()=>{u.play()}})})}dispose(){super.dispose(),this.context.revert()}}Ae.registerPlugin(Se);class ML extends dt{constructor(t){super(t);ie(this,"context");const n=t.querySelector(".model__02__care__image"),r=n.querySelectorAll("svg.pc .circle__fill"),s=n.querySelectorAll("svg.sp .circle__fill"),o=n.querySelectorAll("svg.pc .circle__dash"),a=n.querySelectorAll("svg.sp .circle__dash"),c=n.querySelectorAll("svg.pc .circle__solid"),l=n.querySelectorAll("svg.sp .circle__solid"),u=n.querySelectorAll(".point"),h=n.querySelectorAll(".point span"),f=n.querySelectorAll(".text");this.context=Ae.context(()=>{let d;at.isPc?d=Ae.timeline({paused:!0}).to(o,{strokeOpacity:1,duration:.8,stagger:.2,ease:"power1.out"},"").to(c,{strokeOpacity:1,duration:1,delay:.1,stagger:.2,ease:"power1.out"},"").to(c[0],{strokeDashoffset:`${150+150*.946}%`,duration:1,delay:.1,ease:"power1.out"},"").to(c[1],{strokeDashoffset:`${150+150*.75}%`,duration:1,delay:.3,ease:"power1.out"},"").to(h,{opacity:1,scale:1,duration:.8,delay:.2,stagger:.2,ease:"power1.out"},"").to(u[0],{rotate:`${360*.946}deg`,duration:1.1,delay:.2,ease:"power1.out"},"").to(u[1],{rotate:`${360*.75}deg`,duration:1.1,delay:.4,ease:"power1.out"},"").to(r,{fillOpacity:1,duration:1.3,delay:.2,stagger:.2,ease:"none"},"").to(f,{opacity:1,y:0,duration:.8,delay:.4,stagger:.2,ease:"power2.out"},""):d=Ae.timeline({paused:!0}).to(a,{strokeOpacity:1,duration:.8,stagger:.15,ease:"power1.out"},"").to(l,{strokeOpacity:1,duration:1,delay:.05,stagger:.15,ease:"power1.out"},"").to(l[0],{strokeDashoffset:`${187.5+187.5*.946}%`,duration:.9,delay:.05,ease:"power1.out"},"").to(l[1],{strokeDashoffset:`${187.5+187.5*.75}%`,duration:.9,delay:.2,ease:"power1.out"},"").to(h,{opacity:1,scale:1,duration:.9,delay:.1,stagger:.15,ease:"power1.out"},"").to(u[0],{rotate:`${360*.946}deg`,duration:1,delay:.1,ease:"power1.out"},"").to(u[1],{rotate:`${360*.75}deg`,duration:1,delay:.25,ease:"power1.out"},"").to(s,{fillOpacity:1,duration:1.1,delay:.1,stagger:.15,ease:"none"},"").to(f,{opacity:1,y:0,duration:.65,delay:.2,stagger:.15,ease:"power1.out"},""),Se.create({trigger:n,start:"top 80%",once:!0,onEnter:()=>{d.play()}})})}dispose(){super.dispose(),this.context.revert()}}class bL extends rt{constructor(t){super(t);ie(this,"sections",[]);this.sections.push(new Yn(t),new EL(t),new ML(t))}dispose(){super.dispose(),this.sections.forEach(t=>t.dispose())}}Ae.registerPlugin(Se);class TL extends dt{constructor(t){super(t);ie(this,"context");const n=t.querySelector(".branding__01__image"),r=[n.querySelector("svg.pc .ellipse--1"),n.querySelector("svg.pc .ellipse--2"),n.querySelector("svg.pc .ellipse--3")],s=[n.querySelector("svg.sp .ellipse--1"),n.querySelector("svg.sp .ellipse--2"),n.querySelector("svg.sp .ellipse--3")],o=n.querySelectorAll("svg.pc .line"),a=n.querySelectorAll("svg.sp .line"),c=n.querySelectorAll("svg.sp .arrow"),l=n.querySelectorAll(".gate"),u=n.querySelector(".goal");this.context=Ae.context(()=>{let h;at.isPc?h=Ae.timeline({paused:!0}).to(r,{strokeOpacity:1,duration:1.1,stagger:.05,ease:"power1.out"},"").to(r,{strokeDashoffset:"300%",duration:1.1,stagger:.05,ease:"power1.out"},"").to(o,{opacity:1,duration:1,delay:.3,ease:"none"},"").to(l,{opacity:1,y:0,duration:.8,delay:.3,stagger:.1,ease:"power1.out"},"").to(u,{opacity:1,y:0,duration:1,delay:.5,ease:"power1.out"},""):h=Ae.timeline({paused:!0}).to(s,{strokeOpacity:1,duration:.7,ease:"power1.out"},"").to(s,{strokeDashoffset:"300%",duration:.7,ease:"power1.out"},"").to(c,{opacity:1,duration:.7,delay:.3,ease:"power1.out"},"").to(a,{opacity:1,duration:1,delay:.3,ease:"none"},"").to(l,{opacity:1,y:0,duration:.7,delay:.3,ease:"power1.out"},"").to(u,{opacity:1,y:0,duration:.8,delay:.3,ease:"power1.out"},""),Se.create({trigger:n,start:"top 80%",once:!0,onEnter:()=>{h.play()}})})}dispose(){super.dispose(),this.context.revert()}}Ae.registerPlugin(Se);class wL extends dt{constructor(t){super(t);ie(this,"buttons");ie(this,"activateGroup");const n=t.querySelector(".branding__04__awards__menu"),r=t.querySelector(".branding__04__awards__body");this.buttons=n.querySelectorAll(".branding__04__awards__menu button");const s=(o,a)=>{const c=n.querySelector(".branding__04__awards__menu button.is-active"),l=r.querySelector(".branding__04__awards__group.is-active"),u=r.querySelector(`.branding__04__awards__group[data-awards="${o}"]`);c.classList.remove("is-active"),l.classList.remove("is-active"),a.classList.add("is-active"),u.classList.add("is-active"),Ae.timeline({onComplete(){Se.refresh()}}).to(l,{opacity:0,duration:.1,ease:"power1.out"}).set(l,{display:"none"}).set(u,{display:"block",opacity:0}).to(u,{opacity:1,duration:.3,ease:"power1.out"})};this.activateGroup=o=>{const a=o.currentTarget,c=a.dataset.awards;s(c,a)},this.buttons.forEach(o=>{o.addEventListener("click",this.activateGroup)})}dispose(){super.dispose(),this.buttons.forEach(t=>{t.removeEventListener("click",this.activateGroup)})}}class AL extends rt{constructor(t){super(t);ie(this,"sections",[]);this.sections.push(new Yn(t),new TL(t),new wL(t))}dispose(){super.dispose(),this.sections.forEach(t=>t.dispose())}}Ae.registerPlugin(Se);class RL extends dt{constructor(t){super(t);ie(this,"context");const n=t.querySelector(".marketing__01__image"),r=n.querySelectorAll(".curve img, .power"),s=n.querySelector(".curve span"),o=n.querySelectorAll(".power span"),a=n.querySelectorAll(".power p"),c=n.querySelectorAll(".layer p"),l=n.querySelectorAll(".layer .point"),u=n.querySelectorAll(".layer .line");this.context=Ae.context(()=>{let h;at.isPc?h=Ae.timeline({paused:!0}).to(r,{opacity:1,duration:1.5,ease:"power1.out"},"").to(s,{x:"100%",duration:1.3,ease:"power1.out"},"").to(o,{x:"100%",duration:.9,delay:.1,stagger:.3,ease:"power1.out"},"").to(l,{opacity:1,scale:1,duration:.5,delay:.55,ease:"power1.out"},"").to(u,{scaleY:1,duration:.6,delay:.58,ease:"power1.out"},"").to(u,{opacity:1,duration:1,delay:.58,ease:"power1.out"},"").to(c,{opacity:1,x:0,duration:.65,delay:.92,ease:"power1.out"},"").to(a,{opacity:1,x:0,duration:.65,delay:.92,ease:"power1.out"},""):h=Ae.timeline({paused:!0}).to(r,{opacity:1,duration:1.2,ease:"power1.out"},"").to(s,{x:"100%",duration:1.2,ease:"power1.out"},"").to(o,{x:"100%",duration:.8,delay:.05,stagger:.3,ease:"power1.out"},"").to(l,{opacity:1,scale:1,duration:.5,delay:.5,ease:"power1.out"},"").to(u,{scaleY:1,duration:.6,delay:.55,ease:"power1.out"},"").to(u,{opacity:1,duration:.9,delay:.55,ease:"power1.out"},"").to(c,{opacity:1,x:0,duration:.6,delay:.9,ease:"power1.out"},"").to(a,{opacity:1,x:0,duration:.6,delay:.9,ease:"power1.out"},""),Se.create({trigger:n,start:"top 80%",once:!0,onEnter:()=>{h.play()}})})}dispose(){super.dispose(),this.context.revert()}}class CL extends rt{constructor(t){super(t);ie(this,"sections",[]);this.sections.push(new RL(t),new Yn(t))}dispose(){super.dispose(),this.sections.forEach(t=>t.dispose())}}Ae.registerPlugin(Se);class PL extends dt{constructor(t){super(t);ie(this,"accordion");ie(this,"button");ie(this,"body");ie(this,"isOpen",!1);ie(this,"handleClick");this.accordion=t,this.button=t.querySelector("button"),this.body=t.querySelector(".news-menu__group__body"),this.handleClick=this.toggle.bind(this),this.button.addEventListener("click",this.handleClick)}toggle(){this.isOpen?(this.isOpen=!1,this.removeOpenClass(),this.closeAccordion()):(this.isOpen=!0,this.addOpenClass(),this.openAccordion())}addOpenClass(){this.accordion.classList.add("is-open")}removeOpenClass(){this.accordion.classList.remove("is-open")}openAccordion(){Ae.to(this.body,{height:"auto",overwrite:"auto",duration:.35,ease:"power1.out",onComplete(){Se.refresh()}})}closeAccordion(){Ae.to(this.body,{height:0,overwrite:"auto",duration:.35,ease:"power1.out",onComplete(){Se.refresh()}})}dispose(){this.button.removeEventListener("click",this.handleClick)}}class LL extends rt{constructor(t){super(t);ie(this,"sections",[]);this.sections.push(...Array.from(t.querySelectorAll(".news-menu__accordion")).map(n=>new PL(n)))}dispose(){super.dispose(),this.sections.forEach(t=>t.dispose())}}class DL extends dt{constructor(e){super(e);const t=e.querySelector(".newsdetail__wysiwyg .mokuji_wrap"),n=t==null?void 0:t.parentElement,r=e.querySelectorAll(".newsdetail__wysiwyg hr");n!=null&&n.classList.contains("newsdetail__wysiwyg")?t==null||t.remove():n==null||n.remove(),r.forEach(s=>{s.remove()})}dispose(){super.dispose()}}class IL extends rt{constructor(t){super(t);ie(this,"sections",[]);this.sections.push(new DL(t))}dispose(){super.dispose(),this.sections.forEach(t=>t.dispose())}}Ae.registerPlugin(Se);class OL extends dt{constructor(t){super(t);ie(this,"context");const n=t.querySelector(".sustainability__mv");ln.changeTheme("light"),this.context=Ae.context(()=>{Se.create({trigger:n,start:"top bottom",end:"bottom top",onEnterBack:()=>{ln.changeTheme("light")},onLeave:()=>{ln.changeTheme("dark")}})})}dispose(){super.dispose(),this.context.revert()}}class UL extends dt{constructor(t){super(t);ie(this,"splide");at.isPc&&(this.splide=this.setupSplide())}setupSplide(){return Wp(this.page,3,{padding:{left:"12.25rem",right:"12.25rem"}})}dispose(){var t;super.dispose(),(t=this.splide)==null||t.destroy()}}class NL extends rt{constructor(t){super(t);ie(this,"sections",[]);this.sections.push(new OL(t),new UL(t))}dispose(){super.dispose(),this.sections.forEach(t=>t.dispose())}}class FL extends rt{constructor(t){super(t);ie(this,"sections",[]);this.sections.push(new Yn(t))}dispose(){super.dispose(),this.sections.forEach(t=>t.dispose())}}class kL extends rt{constructor(t){super(t);ie(this,"sections",[]);this.sections.push(new Yn(t))}dispose(){super.dispose(),this.sections.forEach(t=>t.dispose())}}class BL extends rt{constructor(t){super(t);ie(this,"sections",[]);this.sections.push(new Yn(t))}dispose(){super.dispose(),this.sections.forEach(t=>t.dispose())}}let yy=!1;async function zL(){return new Promise(i=>{var n;window.onYouTubeIframeAPIReady=()=>{yy=!0,i()};const e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";const t=document.getElementsByTagName("script")[0];(n=t==null?void 0:t.parentNode)==null||n.insertBefore(e,t)})}async function HL(){return yy||await zL(),YT}class GL extends dt{constructor(t){super(t);ie(this,"wrapper");ie(this,"player");ie(this,"cover");ie(this,"handleClick");this.wrapper=t.querySelector(".youtube-player");const n=this.wrapper.querySelector("[data-youtube-id]");this.cover=this.wrapper.querySelector(".youtube-player__cover"),this.handleClick=()=>{this.wrapper.classList.add("is-play"),this.play()},this.cover.addEventListener("click",this.handleClick),this.initYouTubePlayer(n)}async initYouTubePlayer(t){await HL(),this.player=new YT.Player(t,{videoId:t.dataset.youtubeId,playerVars:{rel:0,playsinline:1,controls:1,iv_load_policy:3,modestbranding:0}})}play(){var t;(t=this.player)==null||t.playVideo()}dispose(){var t;super.dispose(),this.cover.removeEventListener("click",this.handleClick),(t=this.player)==null||t.destroy()}}class VL extends rt{constructor(t){super(t);ie(this,"sections",[]);this.sections.push(new Yn(t),new GL(t))}dispose(){super.dispose(),this.sections.forEach(t=>t.dispose())}}class Xp extends dt{constructor(t){super(t);ie(this,"observer");const n=t.querySelectorAll(".xj-loadfont-target");this.observer=new MutationObserver(r=>{r.forEach(s=>{s.type==="childList"&&window.Ts.loadFont()})}),n.forEach(r=>{this.observer.observe(r,{childList:!0})})}dispose(){super.dispose(),this.observer.disconnect()}}class WL extends rt{constructor(t){super(t);ie(this,"sections",[]);this.sections.push(new Xp(t),new Yn(t))}dispose(){super.dispose(),this.sections.forEach(t=>t.dispose())}}class XL extends rt{constructor(t){super(t);ie(this,"sections",[]);this.sections.push(new Yn(t))}dispose(){super.dispose(),this.sections.forEach(t=>t.dispose())}}class qL extends rt{constructor(t){super(t);ie(this,"sections",[]);this.sections.push(new Yn(t))}dispose(){super.dispose(),this.sections.forEach(t=>t.dispose())}}class $L extends rt{constructor(t){super(t);ie(this,"sections",[]);this.sections.push(new Xp(t))}dispose(){super.dispose(),this.sections.forEach(t=>t.dispose())}}class YL extends rt{constructor(t){super(t);ie(this,"sections",[]);this.sections.push(new Xp(t))}dispose(){super.dispose(),this.sections.forEach(t=>t.dispose())}}class KL extends rt{constructor(t){super(t);ie(this,"sections",[]);this.sections.push(new Yn(t))}dispose(){super.dispose(),this.sections.forEach(t=>t.dispose())}}Ae.registerPlugin(Se);class jL extends dt{constructor(t){super(t);ie(this,"menuHeightHandler");ie(this,"context");const n=t.querySelector(".faq__menu"),r=n.querySelectorAll("li"),s=t.querySelectorAll(".faq__section"),o=u=>{r[u].classList.add("is-active")},a=u=>{r[u].classList.remove("is-active")},c=()=>{if(at.isSp)return;const u=n.clientHeight;n.style.setProperty("--faq-menu-height",u.toString()+"px")};let l;l=0,this.menuHeightHandler=()=>{l>0&&clearTimeout(l),l=setTimeout(()=>{c()},200)},c(),window.addEventListener("resize",this.menuHeightHandler),this.context=Ae.context(()=>{s.forEach((u,h)=>{Se.create({trigger:u,start:"top center",end:"bottom center",onEnter:()=>{o(h)},onEnterBack:()=>{o(h)},onLeave:()=>{h!==s.length-1&&a(h)},onLeaveBack:()=>{h!==0&&a(h)}})})})}dispose(){super.dispose(),window.removeEventListener("resize",this.menuHeightHandler),this.context.revert()}}Ae.registerPlugin(Se);class ZL extends dt{constructor(t){super(t);ie(this,"htmlBody");ie(this,"openButton");ie(this,"closeButtons");ie(this,"faqBody");ie(this,"openModal");ie(this,"closeModal");ie(this,"matchMedia");this.htmlBody=document.querySelectorAll("html, body"),this.openButton=t.querySelector(".faq__menu__open");const n=t.querySelector(".faq__menu__modal");this.closeButtons=t.querySelectorAll(".faq__menu__modal__bg, .faq__menu__modal__close, .faq__menu__modal__list a"),this.faqBody=t.querySelector(".faq__body");const r=()=>{at.isPc||Ae.timeline().set(this.htmlBody,{overflow:"clip"}).set(n,{display:"flex"}).to(n,{opacity:1,duration:.4,ease:"power1.out"})},s=()=>{at.isPc||Ae.timeline({onComplete(){Se.refresh()}}).set(this.htmlBody,{overflow:"revert"}).to(n,{opacity:0,duration:.3,ease:"power1.out"}).set(n,{display:"none"})};this.openModal=()=>{r()},this.closeModal=()=>{s()},this.openButton.addEventListener("click",this.openModal),this.closeButtons.forEach(o=>{o.addEventListener("click",this.closeModal)}),this.matchMedia=Ae.matchMedia().add(at.mobileMediaQuery,()=>{Se.create({trigger:this.faqBody,start:"top bottom",end:"bottom bottom",onEnterBack:()=>{this.openButton.classList.remove("is-hidden")},onLeave:()=>{this.openButton.classList.add("is-hidden")}})})}dispose(){super.dispose(),this.htmlBody.forEach(t=>{t.style.overflow="revert"}),this.openButton.removeEventListener("click",this.openModal),this.closeButtons.forEach(t=>{t.removeEventListener("click",this.closeModal)}),this.matchMedia.revert()}}Ae.registerPlugin(Se);class JL extends dt{constructor(t){super(t);ie(this,"accordion");ie(this,"button");ie(this,"body");ie(this,"isOpen",!1);ie(this,"handleClick");this.accordion=t,this.button=t.querySelector(".qa-accordion__heading"),this.body=t.querySelector(".qa-accordion__body"),this.handleClick=this.toggle.bind(this),this.button.addEventListener("click",this.handleClick)}toggle(){this.isOpen?(this.isOpen=!1,this.removeOpenClass(),this.closeAccordion()):(this.isOpen=!0,this.addOpenClass(),this.openAccordion())}addOpenClass(){this.accordion.classList.add("is-open")}removeOpenClass(){this.accordion.classList.remove("is-open")}openAccordion(){Ae.to(this.body,{height:"auto",overwrite:"auto",duration:.4,ease:"power2.out",onComplete(){Se.refresh()}})}closeAccordion(){Ae.to(this.body,{height:0,overwrite:"auto",duration:.4,ease:"power2.out",onComplete(){Se.refresh()}})}dispose(){this.button.removeEventListener("click",this.handleClick)}}class QL extends rt{constructor(t){super(t);ie(this,"sections",[]);this.sections.push(new jL(t),new ZL(t),...Array.from(t.querySelectorAll(".qa-accordion")).map(n=>new JL(n)))}dispose(){super.dispose(),this.sections.forEach(t=>t.dispose())}}/*!
 * paths 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var eD=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,tD=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,nD=Math.PI/180,$l=Math.sin,Yl=Math.cos,_c=Math.abs,za=Math.sqrt,iD=function(e){return typeof e=="number"},H_=1e5,Br=function(e){return Math.round(e*H_)/H_||0};function rD(i,e,t,n,r,s,o){for(var a=i.length,c,l,u,h,f;--a>-1;)for(c=i[a],l=c.length,u=0;u<l;u+=2)h=c[u],f=c[u+1],c[u]=h*e+f*n+s,c[u+1]=h*t+f*r+o;return i._dirty=1,i}function sD(i,e,t,n,r,s,o,a,c){if(!(i===a&&e===c)){t=_c(t),n=_c(n);var l=r%360*nD,u=Yl(l),h=$l(l),f=Math.PI,d=f*2,_=(i-a)/2,m=(e-c)/2,g=u*_+h*m,p=-h*_+u*m,x=g*g,v=p*p,y=x/(t*t)+v/(n*n);y>1&&(t=za(y)*t,n=za(y)*n);var M=t*t,T=n*n,E=(M*T-M*v-T*x)/(M*v+T*x);E<0&&(E=0);var C=(s===o?-1:1)*za(E),S=C*(t*p/n),b=C*-(n*g/t),D=(i+a)/2,I=(e+c)/2,F=D+(u*S-h*b),P=I+(h*S+u*b),U=(g-S)/t,V=(p-b)/n,k=(-g-S)/t,G=(-p-b)/n,z=U*U+V*V,w=(V<0?-1:1)*Math.acos(U/za(z)),L=(U*G-V*k<0?-1:1)*Math.acos((U*k+V*G)/za(z*(k*k+G*G)));isNaN(L)&&(L=f),!o&&L>0?L-=d:o&&L<0&&(L+=d),w%=d,L%=d;var N=Math.ceil(_c(L)/(d/4)),K=[],j=L/N,q=4/3*$l(j/2)/(1+Yl(j/2)),X=u*t,ae=h*t,me=h*-n,he=u*n,re;for(re=0;re<N;re++)r=w+re*j,g=Yl(r),p=$l(r),U=Yl(r+=j),V=$l(r),K.push(g-q*p,p+q*g,U+q*V,V-q*U,U,V);for(re=0;re<K.length;re+=2)g=K[re],p=K[re+1],K[re]=g*X+p*me+F,K[re+1]=g*ae+p*he+P;return K[re-2]=a,K[re-1]=c,K}}function oD(i){var e=(i+"").replace(tD,function(S){var b=+S;return b<1e-4&&b>-1e-4?0:b}).match(eD)||[],t=[],n=0,r=0,s=2/3,o=e.length,a=0,c="ERROR: malformed path: "+i,l,u,h,f,d,_,m,g,p,x,v,y,M,T,E,C=function(b,D,I,F){x=(I-b)/3,v=(F-D)/3,m.push(b+x,D+v,I-x,F-v,I,F)};if(!i||!isNaN(e[0])||isNaN(e[1]))return console.log(c),t;for(l=0;l<o;l++)if(M=d,isNaN(e[l])?(d=e[l].toUpperCase(),_=d!==e[l]):l--,h=+e[l+1],f=+e[l+2],_&&(h+=n,f+=r),l||(g=h,p=f),d==="M")m&&(m.length<8?t.length-=1:a+=m.length),n=g=h,r=p=f,m=[h,f],t.push(m),l+=2,d="L";else if(d==="C")m||(m=[0,0]),_||(n=r=0),m.push(h,f,n+e[l+3]*1,r+e[l+4]*1,n+=e[l+5]*1,r+=e[l+6]*1),l+=6;else if(d==="S")x=n,v=r,(M==="C"||M==="S")&&(x+=n-m[m.length-4],v+=r-m[m.length-3]),_||(n=r=0),m.push(x,v,h,f,n+=e[l+3]*1,r+=e[l+4]*1),l+=4;else if(d==="Q")x=n+(h-n)*s,v=r+(f-r)*s,_||(n=r=0),n+=e[l+3]*1,r+=e[l+4]*1,m.push(x,v,n+(h-n)*s,r+(f-r)*s,n,r),l+=4;else if(d==="T")x=n-m[m.length-4],v=r-m[m.length-3],m.push(n+x,r+v,h+(n+x*1.5-h)*s,f+(r+v*1.5-f)*s,n=h,r=f),l+=2;else if(d==="H")C(n,r,n=h,r),l+=1;else if(d==="V")C(n,r,n,r=h+(_?r-n:0)),l+=1;else if(d==="L"||d==="Z")d==="Z"&&(h=g,f=p,m.closed=!0),(d==="L"||_c(n-h)>.5||_c(r-f)>.5)&&(C(n,r,h,f),d==="L"&&(l+=2)),n=h,r=f;else if(d==="A"){if(T=e[l+4],E=e[l+5],x=e[l+6],v=e[l+7],u=7,T.length>1&&(T.length<3?(v=x,x=E,u--):(v=E,x=T.substr(2),u-=2),E=T.charAt(1),T=T.charAt(0)),y=sD(n,r,+e[l+1],+e[l+2],+e[l+3],+T,+E,(_?n:0)+x*1,(_?r:0)+v*1),l+=u,y)for(u=0;u<y.length;u++)m.push(y[u]);n=m[m.length-2],r=m[m.length-1]}else console.log(c);return l=m.length,l<6?(t.pop(),l=0):m[0]===m[l-2]&&m[1]===m[l-1]&&(m.closed=!0),t.totalPoints=a+l,t}function aD(i){iD(i[0])&&(i=[i]);var e="",t=i.length,n,r,s,o;for(r=0;r<t;r++){for(o=i[r],e+="M"+Br(o[0])+","+Br(o[1])+" C",n=o.length,s=2;s<n;s++)e+=Br(o[s++])+","+Br(o[s++])+" "+Br(o[s++])+","+Br(o[s++])+" "+Br(o[s++])+","+Br(o[s])+" ";o.closed&&(e+="z")}return e}/*!
 * CustomEase 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Un,Sy,Ey=function(){return Un||typeof window<"u"&&(Un=window.gsap)&&Un.registerPlugin&&Un},G_=function(){Un=Ey(),Un?(Un.registerEase("_CE",ol.create),Sy=1):console.warn("Please gsap.registerPlugin(CustomEase)")},cD=1e20,Kl=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},lD=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,uD=/[cLlsSaAhHvVtTqQ]/g,hD=function(e){var t=e.length,n=cD,r;for(r=1;r<t;r+=6)+e[r]<n&&(n=+e[r]);return n},fD=function(e,t,n){!n&&n!==0&&(n=Math.max(+e[e.length-1],+e[1]));var r=+e[0]*-1,s=-n,o=e.length,a=1/(+e[o-2]+r),c=-t||(Math.abs(+e[o-1]-+e[1])<.01*(+e[o-2]-+e[0])?hD(e)+s:+e[o-1]+s),l;for(c?c=1/c:c=-a,l=0;l<o;l+=2)e[l]=(+e[l]+r)*a,e[l+1]=(+e[l+1]+s)*c},dD=function i(e,t,n,r,s,o,a,c,l,u,h){var f=(e+n)/2,d=(t+r)/2,_=(n+s)/2,m=(r+o)/2,g=(s+a)/2,p=(o+c)/2,x=(f+_)/2,v=(d+m)/2,y=(_+g)/2,M=(m+p)/2,T=(x+y)/2,E=(v+M)/2,C=a-e,S=c-t,b=Math.abs((n-a)*S-(r-c)*C),D=Math.abs((s-a)*S-(o-c)*C),I;return u||(u=[{x:e,y:t},{x:a,y:c}],h=1),u.splice(h||u.length-1,0,{x:T,y:E}),(b+D)*(b+D)>l*(C*C+S*S)&&(I=u.length,i(e,t,f,d,x,v,T,E,l,u,h),i(T,E,y,M,g,p,a,c,l,u,h+1+(u.length-I))),u},ol=function(){function i(t,n,r){Sy||G_(),this.id=t,this.setData(n,r)}var e=i.prototype;return e.setData=function(n,r){r=r||{},n=n||"0,0,1,1";var s=n.match(lD),o=1,a=[],c=[],l=r.precision||1,u=l<=1,h,f,d,_,m,g,p,x,v;if(this.data=n,(uD.test(n)||~n.indexOf("M")&&n.indexOf("C")<0)&&(s=oD(n)[0]),h=s.length,h===4)s.unshift(0,0),s.push(1,1),h=8;else if((h-2)%6)throw"Invalid CustomEase";for((+s[0]!=0||+s[h-2]!=1)&&fD(s,r.height,r.originY),this.segment=s,_=2;_<h;_+=6)f={x:+s[_-2],y:+s[_-1]},d={x:+s[_+4],y:+s[_+5]},a.push(f,d),dD(f.x,f.y,+s[_],+s[_+1],+s[_+2],+s[_+3],d.x,d.y,1/(l*2e5),a,a.length-1);for(h=a.length,_=0;_<h;_++)p=a[_],x=a[_-1]||p,(p.x>x.x||x.y!==p.y&&x.x===p.x||p===x)&&p.x<=1?(x.cx=p.x-x.x,x.cy=p.y-x.y,x.n=p,x.nx=p.x,u&&_>1&&Math.abs(x.cy/x.cx-a[_-2].cy/a[_-2].cx)>2&&(u=0),x.cx<o&&(x.cx?o=x.cx:(x.cx=.001,_===h-1&&(x.x-=.001,o=Math.min(o,.001),u=0)))):(a.splice(_--,1),h--);if(h=1/o+1|0,m=1/h,g=0,p=a[0],u){for(_=0;_<h;_++)v=_*m,p.nx<v&&(p=a[++g]),f=p.y+(v-p.x)/p.cx*p.cy,c[_]={x:v,cx:m,y:f,cy:0,nx:9},_&&(c[_-1].cy=f-c[_-1].y);c[h-1].cy=a[a.length-1].y-f}else{for(_=0;_<h;_++)p.nx<_*m&&(p=a[++g]),c[_]=p;g<a.length-1&&(c[_-1]=a[a.length-2])}return this.ease=function(y){var M=c[y*h|0]||c[h-1];return M.nx<y&&(M=M.n),M.y+(y-M.x)/M.cx*M.cy},this.ease.custom=this,this.id&&Un&&Un.registerEase(this.id,this.ease),this},e.getSVGData=function(n){return i.getSVGData(this,n)},i.create=function(n,r,s){return new i(n,r,s).ease},i.register=function(n){Un=n,G_()},i.get=function(n){return Un.parseEase(n)},i.getSVGData=function(n,r){r=r||{};var s=r.width||100,o=r.height||100,a=r.x||0,c=(r.y||0)+o,l=Un.utils.toArray(r.path)[0],u,h,f,d,_,m,g,p,x,v;if(r.invert&&(o=-o,c=0),typeof n=="string"&&(n=Un.parseEase(n)),n.custom&&(n=n.custom),n instanceof i)u=aD(rD([n.segment],s,0,0,-o,a,c));else{for(u=[a,c],g=Math.max(5,(r.precision||1)*200),d=1/g,g+=2,p=5/g,x=Kl(a+d*s),v=Kl(c+n(d)*-o),h=(v-c)/(x-a),f=2;f<g;f++)_=Kl(a+f*d*s),m=Kl(c+n(f*d)*-o),(Math.abs((m-v)/(_-x)-h)>p||f===g-1)&&(u.push(x,v),h=(m-v)/(_-x)),x=_,v=m;u="M"+u.join(",")}return l&&l.setAttribute("d",u),u},i}();Ey()&&Un.registerPlugin(ol);ol.version="3.12.2";Ae.registerPlugin(ol);class pD extends dt{constructor(e){super(e);const t=e.querySelector(".recruit__mv"),n=t.querySelector(".recruit__mv__images"),r=t.querySelectorAll(".recruit__mv__image"),s=t.querySelectorAll(".recruit__mv__info"),o=t.querySelectorAll(".recruit__mv__heading h1 > span"),a=ju.isFirst?.4:0,c=at.isPc?.95:.8;Ae.timeline({delay:a+.3}).to(n,{opacity:1,duration:c,ease:"power1.out"},"").to(r,{opacity:1,duration:c,ease:"power1.out"},"").to(r,{scale:1,duration:c,ease:ol.create("custom","M0,0 C0,0.69 0.413,1 1,1 ")},"").to(s,{autoAlpha:1,duration:c,ease:"power1.out"},"").to(o,{opacity:1,y:0,duration:c-.1,stagger:.05,delay:.2,ease:"power1.out"},"")}dispose(){super.dispose()}}Ae.registerPlugin(Se);class mD extends dt{constructor(t){super(t);ie(this,"context");const n=t.querySelector(".recruit__mv");ln.changeTheme("light"),this.context=Ae.context(()=>{Se.create({trigger:n,start:"top bottom",end:"bottom top",onEnterBack:()=>{ln.changeTheme("light")},onLeave:()=>{ln.changeTheme("dark")}})})}dispose(){super.dispose(),this.context.revert()}}class gD extends dt{constructor(t){super(t);ie(this,"timeline");let n=1;const r=t.querySelector(".recruit__mv__info__body"),s=t.querySelectorAll(".recruit__mv__info__body li");r&&s.length>1&&Ae.timeline({repeat:-1}).set(r,{delay:10,onComplete:()=>{n=n===s.length?1:n+1,r.dataset.current=`${n}`}})}dispose(){super.dispose(),this.timeline&&this.timeline.kill()}}Ae.registerPlugin(Se);class _D extends dt{constructor(t){super(t);ie(this,"context");const n=t.querySelector(".recruit__look"),r=t.querySelector(".recruit__look__inner");this.context=Ae.context(()=>{Ae.to(r,{y:"1em",ease:"power1.inOut",scrollTrigger:{trigger:n,start:()=>"top bottom",end:()=>"bottom top",scrub:.8,once:!1}})})}dispose(){super.dispose(),this.context.revert()}}class vD extends dt{constructor(t){super(t);ie(this,"splide");at.isPc&&(this.splide=this.setupSplide())}setupSplide(){return Wp(this.page,4,{padding:{left:"10.85rem",right:"10.85rem"}})}dispose(){var t;super.dispose(),(t=this.splide)==null||t.destroy()}}Ae.registerPlugin(Se);class xD extends dt{constructor(t){super(t);ie(this,"context");const n=t.querySelector(".recruit-entry-button"),r=t.querySelector(".recruit__body"),s=t.querySelector(".recruit__entry");this.context=Ae.context(()=>{Se.create({trigger:r,endTrigger:s,start:"top top",end:"top bottom",onEnter:()=>{n.classList.remove("is-hidden")},onEnterBack:()=>{n.classList.remove("is-hidden")},onLeave:()=>{n.classList.add("is-hidden")},onLeaveBack:()=>{n.classList.add("is-hidden")}})})}dispose(){super.dispose(),this.context.revert()}}class yD extends rt{constructor(t){super(t);ie(this,"sections",[]);this.sections.push(new pD(t),new mD(t),new gD(t),new _D(t),new vD(t),new xD(t))}dispose(){super.dispose(),this.sections.forEach(t=>t.dispose())}}Ae.registerPlugin(Se);class SD extends dt{constructor(t){super(t);ie(this,"menuLinks");ie(this,"handleScroll");ie(this,"menuHeightHandler");ie(this,"matchMedia");const n=t.querySelector(".id-sections-menu"),r=t.querySelectorAll(".peopledetail__wysiwyg h2");if(!n||r.length===0)return;const s=n.querySelectorAll("li");this.menuLinks=n.querySelectorAll("a");const o=t.querySelector(".id-sections__main");r.forEach((h,f)=>{h.id=`section-${(f+1).toString().padStart(2,"0")}`}),this.handleScroll=h=>{h.preventDefault();const f=new URL(h.target.href),d=f.hash===""?0:f.hash;Cd(d)},this.menuLinks.forEach((h,f)=>{h.href=`#section-${(f+1).toString().padStart(2,"0")}`,h.addEventListener("click",this.handleScroll)});const a=h=>{s[h].classList.add("is-active")},c=h=>{s[h].classList.remove("is-active")},l=()=>{if(at.isSp)return;const h=n.clientHeight;n.style.setProperty("--id-sections-menu-height",h.toString()+"px")};let u;u=0,this.menuHeightHandler=()=>{u>0&&clearTimeout(u),u=setTimeout(()=>{l()},200)},l(),window.addEventListener("resize",this.menuHeightHandler),this.matchMedia=Ae.matchMedia().add(at.desktopMediaQuery,()=>{Se.create({trigger:r[0],start:"top 90%",end:"top 90%",onEnter:()=>{a(0)},onLeaveBack:()=>{c(0)}}),r.forEach((h,f)=>{const d=f===r.length-1?o:r[f+1],_=f===r.length-1?"bottom center":"top center";Se.create({trigger:h,start:"top center",endTrigger:d,end:_,onEnter:()=>{a(f)},onEnterBack:()=>{a(f)},onLeave:()=>{f!==r.length-1&&c(f)},onLeaveBack:()=>{f!==0&&c(f)}})})})}dispose(){var t,n;super.dispose(),(t=this.menuLinks)==null||t.forEach(r=>{r.removeEventListener("click",this.handleScroll)}),window.removeEventListener("resize",this.menuHeightHandler),(n=this.matchMedia)==null||n.revert()}}class ED extends rt{constructor(t){super(t);ie(this,"sections",[]);this.sections.push(new SD(t))}dispose(){super.dispose(),this.sections.forEach(t=>t.dispose())}}class MD extends dt{constructor(t){super(t);ie(this,"checkbox");ie(this,"selectWrapper");ie(this,"selectElement");ie(this,"dynamicLink");ie(this,"checkboxChangeHandler");ie(this,"selectChangeHandler");this.checkbox=t.querySelector(".contact__link > label input"),this.selectWrapper=t.querySelector(".contact__link__select"),this.selectElement=t.querySelector(".contact__link__select #linkSelector"),this.dynamicLink=t.querySelector("#dynamicLink"),this.checkboxChangeHandler=()=>{this.checkbox.checked?this.selectWrapper.classList.remove("is-disabled"):this.selectWrapper.classList.add("is-disabled")},this.selectChangeHandler=()=>{this.dynamicLink.href=this.selectElement.value,this.selectElement.selectedIndex>0?this.dynamicLink.classList.remove("is-disabled"):this.dynamicLink.classList.add("is-disabled")},this.checkbox.addEventListener("change",this.checkboxChangeHandler),this.selectElement.addEventListener("change",this.selectChangeHandler)}dispose(){super.dispose(),this.checkbox.removeEventListener("change",this.checkboxChangeHandler),this.selectElement.removeEventListener("change",this.selectChangeHandler)}}class bD extends rt{constructor(t){super(t);ie(this,"sections",[]);this.sections.push(new MD(t))}dispose(){super.dispose(),this.sections.forEach(t=>t.dispose())}}const TD=function(i){const e=document.head,t=i.next.html.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0],n=document.createElement("head");n.innerHTML=t;const r=["meta[name='description']","meta[property^='og']","meta[name^='twitter']"].join(",");[...e.querySelectorAll(r)].forEach(a=>{e.removeChild(a)}),[...n.querySelectorAll(r)].forEach(a=>{e.appendChild(a)})},Zu=class Zu{constructor(){ie(this,"page");this.startPageTop(500).then(()=>{this.initBarba(),this.addEvents(),this.firstAnimation(500)})}async startPageTop(e){return new Promise(t=>{setTimeout(()=>{Vs.toTop().then(()=>t(null))},e)})}firstAnimation(e){setTimeout(()=>{const t=Ae.timeline();t.add(ef.out()),this.page instanceof Uf&&t.add(this.page.firstAnimation(),"<60%"),t.eventCallback("onComplete",()=>{Zu.isFirst=!1})},e)}initBarba(){al.hooks.beforeEnter(async()=>{window.Ts.loadFont()}),al.init({debug:!1,views:[{namespace:"home",beforeEnter:e=>{this.page=new Uf(e.next.container)}},{namespace:"company",beforeEnter:e=>{this.page=new rt(e.next.container)}},{namespace:"philosophy",beforeEnter:e=>{this.page=new vL(e.next.container)}},{namespace:"message",beforeEnter:e=>{this.page=new rt(e.next.container)}},{namespace:"boardmember",beforeEnter:e=>{this.page=new yL(e.next.container)}},{namespace:"profile",beforeEnter:e=>{this.page=new SL(e.next.container)}},{namespace:"history",beforeEnter:e=>{this.page=new rt(e.next.container)}},{namespace:"publicnotice",beforeEnter:e=>{this.page=new rt(e.next.container)}},{namespace:"business",beforeEnter:e=>{this.page=new rt(e.next.container)}},{namespace:"model",beforeEnter:e=>{this.page=new bL(e.next.container)}},{namespace:"branding",beforeEnter:e=>{this.page=new AL(e.next.container)}},{namespace:"marketing",beforeEnter:e=>{this.page=new CL(e.next.container)}},{namespace:"brand",beforeEnter:e=>{this.page=new rt(e.next.container)}},{namespace:"news",beforeEnter:e=>{this.page=new LL(e.next.container)}},{namespace:"newsdetail",beforeEnter:e=>{this.page=new IL(e.next.container)}},{namespace:"sustainability",beforeEnter:e=>{this.page=new NL(e.next.container)}},{namespace:"management",beforeEnter:e=>{this.page=new FL(e.next.container)}},{namespace:"environment",beforeEnter:e=>{this.page=new kL(e.next.container)}},{namespace:"tcfd",beforeEnter:e=>{this.page=new BL(e.next.container)}},{namespace:"social",beforeEnter:e=>{this.page=new VL(e.next.container)}},{namespace:"csrgovernance",beforeEnter:e=>{this.page=new WL(e.next.container)},afterEnter:e=>{if(!e.current.container)return;const t=e.next.container.querySelector(".csrgovernance__01 script");if(t){const n=document.createElement("script");n.src=t.src,n.classList.add("ir-script"),document.body.appendChild(n)}},beforeLeave:()=>{document.querySelectorAll(".ir-script").forEach(e=>{e.remove()})}},{namespace:"supplychain",beforeEnter:e=>{this.page=new XL(e.next.container)}},{namespace:"esgdata",beforeEnter:e=>{this.page=new qL(e.next.container)}},{namespace:"ir",beforeEnter:e=>{this.page=new $L(e.next.container)},afterEnter:e=>{if(!e.current.container)return;const t=e.next.container.querySelector(".ir__news__body script");if(t){const n=document.createElement("script");n.src=t.src,n.classList.add("ir-script"),document.body.appendChild(n)}},beforeLeave:()=>{document.querySelectorAll(".ir-script").forEach(e=>{e.remove()})}},{namespace:"controlsystems",beforeEnter:e=>{this.page=new rt(e.next.container)}},{namespace:"risk",beforeEnter:e=>{this.page=new rt(e.next.container)}},{namespace:"highlight",beforeEnter:e=>{this.page=new rt(e.next.container)}},{namespace:"calendar",beforeEnter:e=>{this.page=new rt(e.next.container)}},{namespace:"library",beforeEnter:e=>{this.page=new YL(e.next.container)},afterEnter:e=>{if(!e.current.container)return;const t=e.next.container.querySelector(".library__body script");if(t){const n=document.createElement("script");n.src=t.src,n.classList.add("library-script"),document.body.appendChild(n)}},beforeLeave:()=>{document.querySelectorAll(".library-script").forEach(e=>{e.remove()})}},{namespace:"stock",beforeEnter:e=>{this.page=new rt(e.next.container)}},{namespace:"stockinfo",beforeEnter:e=>{this.page=new KL(e.next.container)}},{namespace:"faq",beforeEnter:e=>{this.page=new QL(e.next.container)}},{namespace:"recruit",beforeEnter:e=>{this.page=new yD(e.next.container)}},{namespace:"people",beforeEnter:e=>{this.page=new rt(e.next.container)}},{namespace:"peopledetail",beforeEnter:e=>{this.page=new ED(e.next.container)}},{namespace:"policy",beforeEnter:e=>{this.page=new rt(e.next.container)}},{namespace:"policydetail",beforeEnter:e=>{this.page=new rt(e.next.container)}},{namespace:"contact",beforeEnter:e=>{this.page=new bD(e.next.container)}},{namespace:"notfound",beforeEnter:e=>{this.page=new rt(e.next.container)}}],prevent:({href:e})=>new URL(e,location.origin).pathname.startsWith("/ir/highlight"),transitions:[{name:"default",leave:async()=>{await ef.in(),Vs.toTop(),Qs.close(0)},enter:e=>{const t=Ae.timeline();t.add(ef.out(e.next.namespace==="home"?.3:.1)),this.page instanceof Uf&&t.add(this.page.firstAnimation(),"<30%")}}]}),al.hooks.beforeEnter(e=>{e&&TD(e)}),al.hooks.afterLeave(async e=>{var t;(t=this.page)==null||t.dispose(),Vs.toTop(),e&&e.current.container&&e.current.container.style.setProperty("display","none")})}addEvents(){at.mobileMql.addEventListener("change",()=>{Vs.toTop(),location.reload()})}};ie(Zu,"isFirst",!0);let ju=Zu;new ju;
