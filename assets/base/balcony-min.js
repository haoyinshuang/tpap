/*! caja-kissy  */
(function(){var n=KISSY,t="r4000",e=location&&-1!==(location.search||"").indexOf("caja-debug")?"http://assets.daily.taobao.net/apps/taesite/balcony/core/":"http://a.tbcdn.cn/apps/taesite/balcony/core/",r=e+t+"/caja/";-1!=location.href.indexOf("__dev__")&&(e="../../../caja/ant-lib/com/google/caja/plugin/",t="",r=e);var i="J_TScriptedModule",o={},a={};a.addModsCajoledJS=function(t,e){2>arguments.length||n.isString(t)&&(o[t]=o[t]||";"+e+";")},a.getModsCajoledJS=function(n){return n?o[n]?o[n]:null:null},a.runScriptedMods=function(t,e,r){var a=KISSY.DOM,s=a.query("."+i);if(s){var u=[];n.each(e,function(n){u.push(n(t))});var c=n.isFunction(window.getCajaExposed)?window.getCajaExposed(t,cajaAFTB):{},l=s.length,d=0;n.each(s,function(e){var i=a.attr(e,"data-componentid");if(i){var s=o[i];void 0!==s&&t.makeES5Frame(e,{rewrite:cajaAFTB.rewriteURL},function(i){var o=t.tame(t.markFunction(function(t,e,r){return n.log(t,e,r),!0}));a.attr(i.iframe,"data-modulename",a.attr(i.div,"data-componentid")),cajaAFTB.tameNode||(cajaAFTB.tameNode=function(n){return i.imports.tameNode___(n,!0)},cajaAFTB.checkCss=function(n,t,e){return i.imports.checkCss___(n,t,e)},cajaAFTB.sanitizeHtml=function(n){var t=document.createElement("div");return t=cajaAFTB.tameNode(t),t.innerHTML_s___(n),t.innerHTML_g___()});var h={},p={};n.each(u,function(t){var r=t({frame:i,mod:e});!0===r.kissy?(n.mix(h,r),r.kissy=void 0):n.mix(p,r)});var f=i.contentCajoled("",s),m={KISSY:t.tame(h),onerror:o};m=n.mix(c,m),m=n.mix(m,p),f.run(m,function(){d++,r&&d==l&&r()})})}})}},a.setup=function(n,t){caja.configure({cajaServer:r,debug:location&&-1!==(location.search||"").indexOf("caja-debug")||-1!=location.href.indexOf("__dev__")},function(e){a.runScriptedMods(e,n,t)})},a.registerCajoledMods=function(n,t){a.addModsCajoledJS(n,t)},window.TShop||(window.TShop={}),window.TShop.Balcony=a})();