/* Modernizr 2.6.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-backgroundsize-borderimage-borderradius-boxshadow-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-cssgradients-csstransforms-csstransforms3d-csstransitions-draganddrop-audio-video-input-inputtypes-shiv-mq-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
window.Modernizr=function(e,t,n){function r(e){g.cssText=e}function i(e,t){return r(E.join(e+";")+(t||""))}function s(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function u(e,t){for(var r in e){var i=e[r];if(!o(i,"-")&&g[i]!==n)return t=="pfx"?i:!0}return!1}function a(e,t,r){for(var i in e){var o=t[e[i]];if(o!==n)return r===!1?e[i]:s(o,"function")?o.bind(r||t):o}return!1}function f(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+x.join(r+" ")+r).split(" ");return s(t,"string")||s(t,"undefined")?u(i,t):(i=(e+" "+T.join(r+" ")+r).split(" "),a(i,t,n))}function l(){h.input=function(n){for(var r=0,i=n.length;r<i;r++)k[n[r]]=n[r]in y;return k.list&&(k.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),k}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),h.inputtypes=function(e){for(var r=0,i,s,o,u=e.length;r<u;r++)y.setAttribute("type",s=e[r]),i=y.type!=="text",i&&(y.value=b,y.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(s)&&y.style.WebkitAppearance!==n?(d.appendChild(y),o=t.defaultView,i=o.getComputedStyle&&o.getComputedStyle(y,null).WebkitAppearance!=="textfield"&&y.offsetHeight!==0,d.removeChild(y)):/^(search|tel)$/.test(s)||(/^(url|email)$/.test(s)?i=y.checkValidity&&y.checkValidity()===!1:i=y.value!=b)),C[e[r]]=!!i;return C}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var c="2.6.1",h={},p=!0,d=t.documentElement,v="modernizr",m=t.createElement(v),g=m.style,y=t.createElement("input"),b=":)",w={}.toString,E=" -webkit- -moz- -o- -ms- ".split(" "),S="Webkit Moz O ms",x=S.split(" "),T=S.toLowerCase().split(" "),N={},C={},k={},L=[],A=L.slice,O,M=function(e,n,r,i){var s,o,u,a=t.createElement("div"),f=t.body,l=f?f:t.createElement("body");if(parseInt(r,10))while(r--)u=t.createElement("div"),u.id=i?i[r]:v+(r+1),a.appendChild(u);return s=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),a.id=v,(f?a:l).innerHTML+=s,l.appendChild(a),f||(l.style.background="",d.appendChild(l)),o=n(a,e),f?a.parentNode.removeChild(a):l.parentNode.removeChild(l),!!o},_=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return M("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r=(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle)["position"]=="absolute"}),r},D=function(){function e(e,i){i=i||t.createElement(r[e]||"div"),e="on"+e;var o=e in i;return o||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(e,""),o=s(i[e],"function"),s(i[e],"undefined")||(i[e]=n),i.removeAttribute(e))),i=null,o}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),P={}.hasOwnProperty,H;!s(P,"undefined")&&!s(P.call,"undefined")?H=function(e,t){return P.call(e,t)}:H=function(e,t){return t in e&&s(e.constructor.prototype[t],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if(typeof t!="function")throw new TypeError;var n=A.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var s=new i,o=t.apply(s,n.concat(A.call(arguments)));return Object(o)===o?o:s}return t.apply(e,n.concat(A.call(arguments)))};return r}),N.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},N.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),o(g.backgroundColor,"rgba")},N.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),o(g.backgroundColor,"rgba")||o(g.backgroundColor,"hsla")},N.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(g.background)},N.backgroundsize=function(){return f("backgroundSize")},N.borderimage=function(){return f("borderImage")},N.borderradius=function(){return f("borderRadius")},N.boxshadow=function(){return f("boxShadow")},N.textshadow=function(){return t.createElement("div").style.textShadow===""},N.opacity=function(){return i("opacity:.55"),/^0.55$/.test(g.opacity)},N.cssanimations=function(){return f("animationName")},N.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+E.join(n+e)).slice(0,-e.length)),o(g.backgroundImage,"gradient")},N.csstransforms=function(){return!!f("transform")},N.csstransforms3d=function(){var e=!!f("perspective");return e&&"webkitPerspective"in d.style&&M("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=t.offsetLeft===9&&t.offsetHeight===3}),e},N.csstransitions=function(){return f("transition")},N.video=function(){var e=t.createElement("video"),n=!1;try{if(n=!!e.canPlayType)n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(r){}return n},N.audio=function(){var e=t.createElement("audio"),n=!1;try{if(n=!!e.canPlayType)n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(r){}return n};for(var B in N)H(N,B)&&(O=B.toLowerCase(),h[O]=N[B](),L.push((h[O]?"":"no-")+O));return h.input||l(),h.addTest=function(e,t){if(typeof e=="object")for(var r in e)H(e,r)&&h.addTest(r,e[r]);else{e=e.toLowerCase();if(h[e]!==n)return h;t=typeof t=="function"?t():t,p&&(d.className+=" "+(t?"":"no-")+e),h[e]=t}return h},r(""),m=y=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=g.elements;return typeof e=="string"?e.split(" "):e}function i(e){var t=v[e[p]];return t||(t={},d++,e[p]=d,v[d]=t),t}function s(e,n,r){n||(n=t);if(m)return n.createElement(e);r||(r=i(n));var s;return r.cache[e]?s=r.cache[e].cloneNode():c.test(e)?s=(r.cache[e]=r.createElem(e)).cloneNode():s=r.createElem(e),s.canHaveChildren&&!l.test(e)?r.frag.appendChild(s):s}function o(e,n){e||(e=t);if(m)return e.createDocumentFragment();n=n||i(e);var s=n.frag.cloneNode(),o=0,u=r(),a=u.length;for(;o<a;o++)s.createElement(u[o]);return s}function u(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return g.shivMethods?s(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(g,t.frag)}function a(e){e||(e=t);var r=i(e);return g.shivCSS&&!h&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),m||u(e,r),e}var f=e.html5||{},l=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,c=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,h,p="_html5shiv",d=0,v={},m;(function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,m=e.childNodes.length==1||function(){t.createElement("a");var e=t.createDocumentFragment();return typeof e.cloneNode=="undefined"||typeof e.createDocumentFragment=="undefined"||typeof e.createElement=="undefined"}()}catch(n){h=!0,m=!0}})();var g={elements:f.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:f.shivCSS!==!1,supportsUnknownElements:m,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:a,createElement:s,createDocumentFragment:o};e.html5=g,a(t)}(this,t),h._version=c,h._prefixes=E,h._domPrefixes=T,h._cssomPrefixes=x,h.mq=_,h.hasEvent=D,h.testProp=function(e){return u([e])},h.testAllProps=f,h.testStyles=M,d.className=d.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+L.join(" "):""),h}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==d.call(e)}function i(e){return"string"==typeof e}function s(){}function o(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function u(){var e=v.shift();m=1,e?e.t?h(function(){("c"==e.t?k.injectCss:k.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),u()):m=0}function a(e,n,r,i,s,a,f){function l(t){if(!d&&o(c.readyState)&&(w.r=d=1,!m&&u(),c.onload=c.onreadystatechange=null,t)){"img"!=e&&h(function(){b.removeChild(c)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var f=f||k.errorTimeout,c=t.createElement(e),d=0,g=0,w={t:r,s:n,e:s,a:a,x:f};1===T[n]&&(g=1,T[n]=[]),"object"==e?c.data=n:(c.src=n,c.type=e),c.width=c.height="0",c.onerror=c.onload=c.onreadystatechange=function(){l.call(this,g)},v.splice(i,0,w),"img"!=e&&(g||2===T[n]?(b.insertBefore(c,y?null:p),h(l,f)):T[n].push(c))}function f(e,t,n,r,s){return m=0,t=t||"j",i(e)?a("c"==t?E:w,e,t,this.i++,n,r,s):(v.splice(this.i++,0,e),1==v.length&&u()),this}function l(){var e=k;return e.loader={load:f,i:0},e}var c=t.documentElement,h=e.setTimeout,p=t.getElementsByTagName("script")[0],d={}.toString,v=[],m=0,g="MozAppearance"in c.style,y=g&&!!t.createRange().compareNode,b=y?c:p.parentNode,c=e.opera&&"[object Opera]"==d.call(e.opera),c=!!t.attachEvent&&!c,w=g?"object":c?"script":"img",E=c?"script":w,S=Array.isArray||function(e){return"[object Array]"==d.call(e)},x=[],T={},N={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},C,k;k=function(e){function t(e){var e=e.split("!"),t=x.length,n=e.pop(),r=e.length,n={url:n,origUrl:n,prefixes:e},i,s,o;for(s=0;s<r;s++)o=e[s].split("="),(i=N[o.shift()])&&(n=i(n,o));for(s=0;s<t;s++)n=x[s](n);return n}function o(e,i,s,o,u){var a=t(e),f=a.autoCallback;a.url.split(".").pop().split("?").shift(),a.bypass||(i&&(i=r(i)?i:i[e]||i[o]||i[e.split("/").pop().split("?")[0]]),a.instead?a.instead(e,i,s,o,u):(T[a.url]?a.noexec=!0:T[a.url]=1,s.load(a.url,a.forceCSS||!a.forceJS&&"css"==a.url.split(".").pop().split("?").shift()?"c":n,a.noexec,a.attrs,a.timeout),(r(i)||r(f))&&s.load(function(){l(),i&&i(a.origUrl,u,o),f&&f(a.origUrl,u,o),T[a.url]=2})))}function u(e,t){function n(e,n){if(e){if(i(e))n||(f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}),o(e,f,t,0,u);else if(Object(e)===e)for(p in h=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(p)&&(!n&&!--h&&(r(f)?f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}:f[p]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),c()}}(l[p])),o(e[p],f,t,p,u))}else!n&&c()}var u=!!e.test,a=e.load||e.both,f=e.callback||s,l=f,c=e.complete||s,h,p;n(u?e.yep:e.nope,!!a),a&&n(a)}var a,f,c=this.yepnope.loader;if(i(e))o(e,0,c,0);else if(S(e))for(a=0;a<e.length;a++)f=e[a],i(f)?o(f,0,c,0):S(f)?k(f):Object(f)===f&&u(f,c);else Object(e)===e&&u(e,c)},k.addPrefix=function(e,t){N[e]=t},k.addFilter=function(e){x.push(e)},k.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",C=function(){t.removeEventListener("DOMContentLoaded",C,0),t.readyState="complete"},0)),e.yepnope=l(),e.yepnope.executeStack=u,e.yepnope.injectJs=function(e,n,r,i,a,f){var l=t.createElement("script"),c,d,i=i||k.errorTimeout;l.src=e;for(d in r)l.setAttribute(d,r[d]);n=f?u:n||s,l.onreadystatechange=l.onload=function(){!c&&o(l.readyState)&&(c=1,n(),l.onload=l.onreadystatechange=null)},h(function(){c||(c=1,n(1))},i),a?l.onload():p.parentNode.insertBefore(l,p)},e.yepnope.injectCss=function(e,n,r,i,o,a){var i=t.createElement("link"),f,n=a?u:n||s;i.href=e,i.rel="stylesheet",i.type="text/css";for(f in r)i.setAttribute(f,r[f]);o||(p.parentNode.insertBefore(i,p),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};