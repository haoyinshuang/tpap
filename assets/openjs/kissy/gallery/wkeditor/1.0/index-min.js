/*! caja-kissy  */
KISSY.add("openjs/kissy/gallery/wkeditor/1.0/index",function(n,t,e){function r(n){function r(n){this.inner=new e(n)}return r.prototype.init=function(){return this.inner.init()},r.prototype.plug=function(n,t){return this.inner.plug(n,t)},r.prototype.addFont=function(t,e){return this.inner.addFont(t,n.tame(e))},n.markCtor(r),n.grantMethod(r,"init"),n.grantMethod(r,"plug"),n.grantMethod(r,"addFont"),function(e){return{WKeditor:n.markFunction(function(){var n=cajaAFTB.untame(arguments[0]);return n.ele=t.get(n.ele,e.mod),n.message=cajaAFTB.sanitizeHtml(n.message),new r(n)}),kissy:!0}}}return r},{requires:["dom","gallery/WKeditor/1.0/index"]});