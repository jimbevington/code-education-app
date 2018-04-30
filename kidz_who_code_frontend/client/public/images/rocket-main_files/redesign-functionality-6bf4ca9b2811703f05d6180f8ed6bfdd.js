/*! Picturefill - v2.2.0-beta - 2014-11-19
* http://scottjehl.github.io/picturefill
* Copyright (c) 2014 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),n=document.getElementsByTagName("script")[0],r=null;t.type="text/css",t.id="matchmediajs-test",n.parentNode.insertBefore(t,n),r="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle,e={matchMedium:function(e){var n="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=n:t.textContent=n,"1px"===r.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}()),function(e,t,n){"use strict";function r(e){var t,n,r,i,o,u=e||{};t=u.elements||s.getAllElements();for(var a=0,l=t.length;l>a;a++)if(n=t[a],r=n.parentNode,i=void 0,o=void 0,"IMG"===n.nodeName.toUpperCase()&&(n[s.ns]||(n[s.ns]={}),u.reevaluate||!n[s.ns].evaluated)){if("PICTURE"===r.nodeName.toUpperCase()){if(s.removeVideoShim(r),i=s.getMatch(n,r),i===!1)continue}else i=void 0;("PICTURE"===r.nodeName.toUpperCase()||n.srcset&&!s.srcsetSupported||!s.sizesSupported&&n.srcset&&n.srcset.indexOf("w")>-1)&&s.dodgeSrcset(n),i?(o=s.processSourceSet(i),s.applyBestCandidate(o,n)):(o=s.processSourceSet(n),(void 0===n.srcset||n[s.ns].srcset)&&s.applyBestCandidate(o,n)),n[s.ns].evaluated=!0}}function i(){function n(){var t;e._picturefillWorking||(e._picturefillWorking=!0,e.clearTimeout(t),t=e.setTimeout(function(){r({reevaluate:!0}),e._picturefillWorking=!1},60))}r();var i=setInterval(function(){return r(),/^loaded|^i|^c/.test(t.readyState)?void clearInterval(i):void 0},250);e.addEventListener?e.addEventListener("resize",n,!1):e.attachEvent&&e.attachEvent("onresize",n)}if(e.HTMLPictureElement)return void (e.picturefill=function(){});t.createElement("picture");var s={};s.ns="picturefill",function(){s.srcsetSupported="srcset"in n,s.sizesSupported="sizes"in n}(),s.trim=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},s.endsWith=function(e,t){return e.endsWith?e.endsWith(t):-1!==e.indexOf(t,e.length-t.length)},s.restrictsMixedContent=function(){return"https:"===e.location.protocol},s.matchesMedia=function(t){return e.matchMedia&&e.matchMedia(t).matches},s.getDpr=function(){return e.devicePixelRatio||1},s.getWidthFromLength=function(e){e=e&&e.indexOf("%")>-1==0&&(parseFloat(e)>0||e.indexOf("calc(")>-1)?e:"100vw",e=e.replace("vw","%"),s.lengthEl||(s.lengthEl=t.createElement("div"),s.lengthEl.style.cssText="border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden"),s.lengthEl.style.width=e,t.body.appendChild(s.lengthEl),s.lengthEl.className="helper-from-picturefill-js",s.lengthEl.offsetWidth<=0&&(s.lengthEl.style.width=t.documentElement.offsetWidth+"px");var n=s.lengthEl.offsetWidth;return t.body.removeChild(s.lengthEl),n},s.types={},s.types["image/jpeg"]=!0,s.types["image/gif"]=!0,s.types["image/png"]=!0,s.types["image/svg+xml"]=t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),s.types["image/webp"]=function(){var e="image/webp";n.onerror=function(){s.types[e]=!1,r()},n.onload=function(){s.types[e]=1===n.width,r()},n.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="},s.verifyTypeSupport=function(e){var t=e.getAttribute("type");return null===t||""===t?!0:"function"==typeof s.types[t]?(s.types[t](),"pending"):s.types[t]},s.parseSize=function(e){var t=/(\([^)]+\))?\s*(.+)/g.exec(e);return{media:t&&t[1],length:t&&t[2]}},s.findWidthFromSourceSize=function(e){for(var t,n=s.trim(e).split(/\s*,\s*/),r=0,i=n.length;i>r;r++){var o=n[r],u=s.parseSize(o),a=u.length,l=u.media;if(a&&(!l||s.matchesMedia(l))){t=a;break}}return s.getWidthFromLength(t)},s.parseSrcset=function(e){for(var t=[];""!==e;){e=e.replace(/^\s+/g,"");var n,r=e.search(/\s/g),i=null;if(-1!==r){n=e.slice(0,r);var s=n.slice(-1);if((","===s||""===n)&&(n=n.replace(/,+$/,""),i=""),e=e.slice(r+1),null===i){var o=e.indexOf(",");-1!==o?(i=e.slice(0,o),e=e.slice(o+1)):(i=e,e="")}}else n=e,e="";(n||i)&&t.push({url:n,descriptor:i})}return t},s.parseDescriptor=function(e,t){var n,r=t||"100vw",i=e&&e.replace(/(^\s+|\s+$)/g,""),o=s.findWidthFromSourceSize(r);if(i)for(var u=i.split(" "),a=u.length-1;a>=0;a--){var l=u[a],c=l&&l.slice(l.length-1);if("h"!==c&&"w"!==c||s.sizesSupported){if("x"===c){var h=l&&parseFloat(l,10);n=h&&!isNaN(h)?h:1}}else n=parseFloat(parseInt(l,10)/o)}return n||1},s.getCandidatesFromSourceSet=function(e,t){for(var n=s.parseSrcset(e),r=[],i=0,o=n.length;o>i;i++){var u=n[i];r.push({url:u.url,resolution:s.parseDescriptor(u.descriptor,t)})}return r},s.dodgeSrcset=function(e){e.srcset&&(e[s.ns].srcset=e.srcset,e.removeAttribute("srcset"))},s.processSourceSet=function(e){var t=e.getAttribute("srcset"),n=e.getAttribute("sizes"),r=[];return"IMG"===e.nodeName.toUpperCase()&&e[s.ns]&&e[s.ns].srcset&&(t=e[s.ns].srcset),t&&(r=s.getCandidatesFromSourceSet(t,n)),r},s.applyBestCandidate=function(e,t){var n,r,i;e.sort(s.ascendingSort),r=e.length,i=e[r-1];for(var o=0;r>o;o++)if(n=e[o],n.resolution>=s.getDpr()){i=n;break}if(i&&!s.endsWith(t.src,i.url))if(s.restrictsMixedContent()&&"http:"===i.url.substr(0,"http:".length).toLowerCase())void 0!==typeof console&&console.warn("Blocked mixed content image "+i.url);else{t.src=i.url,t.currentSrc=t.src;var u=t.style||{},a="webkitBackfaceVisibility"in u,l=u.zoom;a&&(u.zoom=".999",a=t.offsetWidth,u.zoom=l)}},s.ascendingSort=function(e,t){return e.resolution-t.resolution},s.removeVideoShim=function(e){var t=e.getElementsByTagName("video");if(t.length){for(var n=t[0],r=n.getElementsByTagName("source");r.length;)e.insertBefore(r[0],n);n.parentNode.removeChild(n)}},s.getAllElements=function(){for(var e=[],n=t.getElementsByTagName("img"),r=0,i=n.length;i>r;r++){var o=n[r];("PICTURE"===o.parentNode.nodeName.toUpperCase()||null!==o.getAttribute("srcset")||o[s.ns]&&null!==o[s.ns].srcset)&&e.push(o)}return e},s.getMatch=function(e,t){for(var n,r=t.childNodes,i=0,o=r.length;o>i;i++){var u=r[i];if(1===u.nodeType){if(u===e)return n;if("SOURCE"===u.nodeName.toUpperCase()){null!==u.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var a=u.getAttribute("media");if(u.getAttribute("srcset")&&(!a||s.matchesMedia(a))){var l=s.verifyTypeSupport(u);if(l===!0){n=u;break}if("pending"===l)return!1}}}}return n},i(),r._=s,"object"==typeof module&&"object"==typeof module.exports?module.exports=r:"function"==typeof define&&define.amd?define(function(){return r}):"object"==typeof e&&(e.picturefill=r)}(this,this.document,new this.Image),$(function(){var e={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()}};e.any()||$("body.home #search-term, body.redesign-layout #search-term").focus()});