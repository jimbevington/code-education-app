/*
 * jQuery.translate3d.js v0.2
 *
 * Copyright (c) 2013 Richard Scarrott
 * http://www.richardscarrott.co.uk
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * // getter
 * $(selector).css('translate3d'); // returns { x: val, y: val, z: val }
 *
 * // setter
 * $(selector).css('translate3d', { x: val, y: val, z: val });
 *
 * // support
 * $.support.transform3d; // returns boolean
 *
 */
(function(e){var t=function(t){var n,r,i=t.charAt(0).toUpperCase()+t.slice(1),s=["Moz","Webkit","Khtml","O","Ms"],o=document.documentElement.style;if(t in o)r=t;else for(var u=0;u<s.length;u++){n=s[u]+i;if(n in o){r=n;break}}return div=null,e.support[t]=r,r},n=t("transform");e.support.transform&&(e.cssHooks.translate3d={set:function(t,r){r=e.extend({x:0,y:0,z:0},r),e.each(r,function(e,t){r[e]=typeof t=="number"?t+"px":t}),t.style[n]="translate3d("+r.x+", "+r.y+", "+r.z+")"},get:function(e){var t=e.style[n];if(t)return t=t.split("(")[1].split(","),{x:parseInt(t[0],10),y:parseInt(t[1],10),z:parseInt(t[2].split(")")[0],10)}}})})(jQuery);