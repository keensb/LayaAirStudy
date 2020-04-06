
export default class TestEvent1 extends Laya.Script {//测试事件
    //https://ldc2.layabox.com/doc/?nav=zh-ts-3-4-0  自定义绑定类型参考  Int,Number,sNumber,String,Bool,Option,editOption,Check,Color,ColorArray,Node,Nodes,Prefab,SizeGrid,Vec,Vector,Ease
    /** @prop {name:myImg,type:Node}*/ //name 要和 变量名一致
    myImg: Laya.Image;

    onStart(): void {
   

        //Laya.Tween.to(this.myImg, { x: 0,y:0 }, 300, Laya.Ease.linearInOut);


        //注册事件监听
        this.owner.once("aaaaaa", this, this.evtFunc);

        //发生事件消息
        this.owner.event("aaaaaa", "oouu");//节点对象派发消息 event("消息名称", 传递参数)
        //移除事件监听
        this.owner.off("bbbbb", this, this.evtFunc);

        //特殊移除
        this.owner.once("ccc", this, () => { trace("ccc1") });
        this.owner.once("ccc", this, () => { trace("ccc2") });
        this.owner.on("ccc", this, () => { trace("ccc3") });

       
        /* //1 offAll 带事件名称参数时 移除节点上所有指定名称的事件监听
        this.owner.offAll("ccc");// offAll(带参数) 比  off 方便的地方在于，不必指定 caller 和 function，而且连像 ()=>{} 这种临时的函数也可以移除
        this.owner.event("ccc");//试试还能不能接收到 */
        
        
       /*  //2 offAll 不带参数时， 直接移除节点上所有事件监听
        this.owner.on("ddd", this, () => { trace("ddd1") });
        this.owner.on("eee", this, () => { trace("eee1") });
        this.owner.offAll();
        this.owner.event("ddd");//试试还能不能接收到
        this.owner.event("eee");//试试还能不能接收到 */


        //3 测试在test1中添加事件监听， 在test2中移除所有监听，看看会怎么样
        //trace("我是test1 我添加了 fff 监听")
        //this.owner.on("fff", this, () => { trace("fff1") });
        //结论是 offAll 太重手了，节点node同时 挂载了 A脚本组件与B脚本组件， B脚本执行了offAll， 连A脚本里的监听也会被移除；所以当一个节点上还挂有其他脚本时千万慎用(不过用到这个方法的时候，估计这个节点也该被回收销毁了？)


        this.owner.on("ggg", this, () => { trace("这里是 test1 ggg1") });

        //移除父节点在某个指定caller中的所有监听
        this.owner.offAllCaller(this);
        //this.owner.event("ggg"); //在 test2中发送事件， 因为 test2 比test1晚执行
    }





    onUpdate(): void {
        //trace(this.myImg.x++);
        //let _this = this.owner.getComponent(TestImage);//注意，我改写了 getComponent<T extends laya.components.Component>(componentType: new ()=> T):T; 传入什么类型(已指定继承自laya.components.Component)就获得什么类型的实例，而不只是any
        //trace(_this == this);


    }


    public evtFunc(evt: any): void {
        trace(evt);//oouu
    }


    /**
    * 组件被激活后执行，此时所有节点和组件均已创建完毕，次方法只执行一次
    * 此方法为虚方法，使用时重写覆盖即可
    */
    //onAwake():void;

    /**
     * 组件被启用后执行，比如节点被添加到舞台后
     * 此方法为虚方法，使用时重写覆盖即可
     */
    //onEnable():void;

    /**
     * 第一次执行update之前执行，只会执行一次
     * 此方法为虚方法，使用时重写覆盖即可
     */
    //onStart():void;

    /**
     * 开始碰撞时执行
     * 此方法为虚方法，使用时重写覆盖即可
     */
    //onTriggerEnter(other:any,self:any,c//ontact:any):void;

    /**
     * 持续碰撞时执行
     * 此方法为虚方法，使用时重写覆盖即可
     */
    //onTriggerStay(other:any,self:any,c//ontact:any):void;

    /**
     * 结束碰撞时执行
     * 此方法为虚方法，使用时重写覆盖即可
     */
    //onTriggerExit(other:any,self:any,c//ontact:any):void;

    /**
     * 鼠标按下时执行
     * 此方法为虚方法，使用时重写覆盖即可
     */
    //onMouseDown(e:laya.events.Event):void;

    /**
     * 鼠标抬起时执行
     * 此方法为虚方法，使用时重写覆盖即可
     */
    //onMouseUp(e:laya.events.Event):void;

    /**
     * 鼠标点击时执行
     * 此方法为虚方法，使用时重写覆盖即可
     */
    //onClick(e:laya.events.Event):void;

    /**
     * 鼠标在舞台按下时执行
     * 此方法为虚方法，使用时重写覆盖即可
     */
    //onStageMouseDown(e:laya.events.Event):void;

    /**
     * 鼠标在舞台抬起时执行
     * 此方法为虚方法，使用时重写覆盖即可
     */
    //onStageMouseUp(e:laya.events.Event):void;

    /**
     * 鼠标在舞台点击时执行
     * 此方法为虚方法，使用时重写覆盖即可
     */
    //onStageClick(e:laya.events.Event):void;

    /**
     * 鼠标在舞台移动时执行
     * 此方法为虚方法，使用时重写覆盖即可
     */
    //onStageMouseMove(e:laya.events.Event):void;

    /**
     * 鼠标双击时执行
     * 此方法为虚方法，使用时重写覆盖即可
     */
    //onDoubleClick(e:laya.events.Event):void;

    /**
     * 鼠标右键点击时执行
     * 此方法为虚方法，使用时重写覆盖即可
     */
    //onRightClick(e:laya.events.Event):void;

    /**
     * 鼠标移动时执行
     * 此方法为虚方法，使用时重写覆盖即可
     */
    //onMouseMove(e:laya.events.Event):void;

    /**
     * 鼠标经过节点时触发
     * 此方法为虚方法，使用时重写覆盖即可
     */
    //onMouseOver(e:laya.events.Event):void;

    /**
     * 鼠标离开节点时触发
     * 此方法为虚方法，使用时重写覆盖即可
     */
    //onMouseOut(e:laya.events.Event):void;

    /**
     * 键盘按下时执行
     * 此方法为虚方法，使用时重写覆盖即可
     */
    //onKeyDown(e:laya.events.Event):void;

    /**
     * 键盘产生一个字符时执行
     * 此方法为虚方法，使用时重写覆盖即可
     */
    //onKeyPress(e:laya.events.Event):void;

    /**
     * 键盘抬起时执行
     * 此方法为虚方法，使用时重写覆盖即可
     */
    //onKeyUp(e:laya.events.Event):void;

    /**
     * 每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComp//onent方法
     * 此方法为虚方法，使用时重写覆盖即可
     */
    //onUpdate():void;

    /**
     * 每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComp//onent方法
     * 此方法为虚方法，使用时重写覆盖即可
     */
    //onLateUpdate():void;

    /**
     * 渲染之前执行
     * 此方法为虚方法，使用时重写覆盖即可
     */
    //onPreRender():void;

    /**
     * 渲染之后执行
     * 此方法为虚方法，使用时重写覆盖即可
     */
    //onPostRender():void;

    /**
     * 组件被禁用时执行，比如从节点从舞台移除后
     * 此方法为虚方法，使用时重写覆盖即可
     */
    //onDisable():void;

    /**
     * 手动调用节点销毁时执行
     * 此方法为虚方法，使用时重写覆盖即可
     */
    //onDestroy():void;

}