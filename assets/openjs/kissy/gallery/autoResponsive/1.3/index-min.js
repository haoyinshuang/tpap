/*! caja-kissy  */
KISSY.add("openjs/kissy/gallery/autoResponsive/1.3/index",function(t,n,e,r,i,o){function a(a){function u(t){this.inner=new n(t)}function c(t){this.inner=new e(t)}function p(t){this.inner=new r(t)}function l(t){this.inner=new i(t)}function h(t){this.inner=new o(t)}return t.augment(u,{init:function(){this.inner.init()},render:function(){this.inner.render()},adjust:function(t){this.inner.adjust(t)},margin:function(t){this.inner.margin(t)},direction:function(t){this.inner.direction(t)},changeCfg:function(t){this.inner.changeCfg(t)},append:function(t){var n="string"==typeof t?s.create(cajaAFTB.sanitizeHtml(t)):t;this.inner.append(n)},prepend:function(t){var n="string"==typeof t?s.create(cajaAFTB.sanitizeHtml(t)):t;this.inner.prepend(n)},on:function(n,e){this.inner.on(n,a.markFunction(function(n){n.autoResponsive&&(n.autoResponsive.elm?n.autoResponsive.elm=cajaAFTB.tameNode(n.autoResponsive.elm):t.isArray(n.autoResponsive.elms)&&t.each(n.autoResponsive.elms,function(t){t=cajaAFTB.tameNode(t)})),e.call(this,{autoResponsive:n.autoResponsive})}))}}),a.markCtor(u),t.each(["init","render","adjust","margin","direction","changeCfg","append","prepend","on"],function(t){a.grantMethod(u,t)}),t.augment(c,{init:function(t){this.inner(t)},hasHash:function(){this.inner.hasHash()},parse:function(){this.inner.parse()},getParam:function(){this.inner.getParam()},getPriority:function(t){this.inner.getPriority(t)},getFilter:function(t){this.inner.getFilter(t)}}),a.markCtor(c),t.each(["init","hasHash","parse","getParam","getPriority","getFilter"],function(t){a.grantMethod(c,t)}),t.augment(p,{init:function(t){this.inner.init(t)},changCfg:function(t){this.inner.changeCfg(t)},stop:function(){this.inner.stop()},restore:function(){this.inner.restore()}}),a.markCtor(p),t.each(["init","changCfg","stop","restore"],function(t){a.grantMethod(p,t)}),t.augment(l,{init:function(t){this.inner.init(t)},changeCfg:function(t){this.inner.changeCfg(t)},load:function(){this.inner.load()},start:function(){this.inner.start()},stop:function(){this.inner.stop()},pause:function(){this.inner.pause()},resume:function(){this.inner.resume()},destroy:function(){this.inner.destroy()}}),a.markCtor(l),t.each(["init","changeCfg","load","start","stop","pause","resume","destroy"],function(t){a.grantMethod(l,t)}),t.augment(h,{init:function(t){this.inner.init(t)},changeCfg:function(t){this.inner.changeCfg(t)},random:function(t){this.inner.random(t)},priority:function(t){this.inner.priority(t)},reverse:function(){this.inner.reverse()},filter:function(t){this.inner.filter(t)},custom:function(t){this.inner.custom(t)},clear:function(){this.inner.clear()},restore:function(){this.inner.restore()}}),a.markCtor(h),t.each(["init","changeCfg","random","priority","reverse","filter","custom","clear","restore"],function(t){a.grantMethod(h,t)}),function(n){return{AutoResponsive:{Base:a.markFunction(function(){var e=t.makeArray(arguments)[0];return e.container=t.get(e.container,n.mod),new u(e)}),Plugin:{Hash:a.markFunction(function(){var n=t.makeArray(arguments)[0];return n=cajaAFTB.untame(n),new c(n)}),Drag:a.markFunction(function(){var n=t.makeArray(arguments)[0];return n=cajaAFTB.untame(n),new p(n)}),Loader:a.markFunction(function(){var n=t.makeArray(arguments)[0];return n=cajaAFTB.untame(n),new l(n)}),Sort:a.markFunction(function(){var n=t.makeArray(arguments)[0];return n=cajaAFTB.untame(n),new h(n)})}},kissy:!0}}}var s=t.DOM;return t.Event,a},{requires:["gallery/autoResponsive/1.3/base","gallery/autoResponsive/1.3/plugin/hash","gallery/autoResponsive/1.3/plugin/drag","gallery/autoResponsive/1.3/plugin/loader","gallery/autoResponsive/1.3/plugin/sort"]});