shutterStockJustifiedAPI=function(){function r(e,t){return e.replace(/\{\{(\w+)\}\}/g,function(e,n){return t[n]})}function i(e,i,s){var o=$("script."+e.affiliate+".container").html(),u=$("script."+e.affiliate+".result").html(),a=e.loc||"en";o==null&&(o=t),u==null&&(u=n),e.limit===undefined&&(e.limit=80);var f=$(o),l=f;for(var c=0;c<s.length&&c<e.limit;c++){var h=s[c];h.url="http://shutterstock.7eer.net/c/"+e.ird+"/111120/1305?u=http%3A%2F%2Fwww.shutterstock.com%2F"+a+"%2Fpic.mhtml%3Fid%3D"+h.id,h.image_url=h.assets.preview.url,h.image_height=h.assets.preview.height,h.image_width=h.assets.preview.width,e.urlparams&&(h.url+="&"+e.urlparams+"|"+h.id),parseInt(h.image_height)/parseInt(h.image_width)>.45&&l.append(r(u,h))}i.find(".flex-images").remove(),i.append(f)}function s(t){var n=e,r=$("[name=eezysearch]").val(),i=$("[name=eezypage]").val();return $(".eezyapi").data("resource-id")?"/api/shutterstock_images/"+$(".eezyapi").data("resource-id")+"/related_image_search":(typeof r=="undefined"&&(r=$("input[name=search]").val()),n+="/"+encodeURI(r)+"?",t.limit&&(n+="&per_page="+t.limit),i?n+="&page="+(parseInt(i)+1):n+="&page=1",t.apiparams&&(n+="&"+t.apiparams),n)}var e="/api/shutterstock_images",t="<div class='flex-images'></div>",n='<div class="flex-item" data-width="{{image_width}}" data-height="{{image_height}}"><a title="{{description}}" target="_new" href="{{url}}"><img src="{{image_url}}" alt="{{description}}"/></a></div>';$(document).ready(function(){$(".eezyapi--justified").each(function(){var e=$(this),t=e.data(),n=s(t);$.getJSON(n,function(n){n.data.length>0&&(i(t,e,n.data),window.pageHasSSTK=!0,e.trigger("resultsLoaded",[n.data]))})})})},shutterStockJustifiedAPI();