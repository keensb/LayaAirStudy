
export default class TestEvent2 extends Laya.Script {//测试事件
    //https://ldc2.layabox.com/doc/?nav=zh-ts-3-4-0  自定义绑定类型参考  Int,Number,sNumber,String,Bool,Option,editOption,Check,Color,ColorArray,Node,Nodes,Prefab,SizeGrid,Vec,Vector,Ease
    /** @prop {name:myImg,type:Node}*/ //name 要和 变量名一致
    myImg: Laya.Image;

    onStart(): void {

        /*
         //配合TestEvent1中的第3个测试
         trace("我是test2 我移除了 fff 事件")
         this.owner.offAll();
         trace("我是test2 我发送了 fff 事件")
         this.owner.event("fff"); */


        //配合TestEvent1中的第4个测试
        this.owner.on("ggg", this, () => { trace("这里是 test2 ggg2") });
        //test1 中已经执行了 this.owner.offAllCaller(this);
        this.owner.event("ggg");
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