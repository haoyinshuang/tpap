KISSY.add(function (S, Node, Overlay) {
    var DOM = S.DOM,Event = S.Event;
    //适配代码在这
    function init(frameGroup) {
        function SafeOverlay(el, cfg) {
            this.inner = new Overlay.Dialog(S.makeArray(arguments)[1]);
        }
        SafeOverlay.prototype.on = function () {
            var params = S.makeArray(arguments);
            var self = this;
            this.inner.on(params[0], function(e){
               SafeOverlay.prototype.show();
            });
        };
        SafeOverlay.prototype.toggle = function () {
            this.inner.toggle();
        };
        SafeOverlay.prototype.hide = function () {
            this.inner.hide();
        };
        SafeOverlay.prototype.show = function () {
            this.inner.show();
        };
        SafeOverlay.prototype.render = function () {
            this.inner.render();
        };
        
        //---- 组件是一个构造函数进行初始化的，需要markCtor标记一下，让caja容器认识
        frameGroup.markCtor(SafeOverlay);

        //构造函数实例的方法，需要grantMethod ，加入白名单，没有加入白名单的不可以使用，caja容器不认识
        frameGroup.grantMethod(SafeOverlay, "toggle");
        frameGroup.grantMethod(SafeOverlay, "render");
        frameGroup.grantMethod(SafeOverlay, "hide");
        frameGroup.grantMethod(SafeOverlay, "show");
        frameGroup.grantMethod(SafeOverlay, "on");
        
        /**
        * @param context 上下文
        * @param context.mod 沙箱的模块范围，所有操作必须限定到模块范围之内去执行
        * @param context.frame 单个模块的沙箱
        * @return {Object} 实际的组件对象
        */
        return function (context) {

            //最终需要返回给
            return {
                Calendar: frameGroup.markFunction(function () {
                    return new SafeOverlay(arguments[0], cajaAFTB.untame(arguments[1]));
                }),
                kissy:true
            }
        }

    }
    return init;
}, {
    requires: ['node', 'overlay', 'button', 'overlay/1.0/index.js']
});
