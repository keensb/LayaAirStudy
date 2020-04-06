
export default class AniTest extends Laya.Script {//测试动画
    private roleAni: Laya.Animation;
    constructor() {
        super();


        //创建动画实例
        this.roleAni = new Laya.Animation();
        //加载动画图集，加载成功后执行回调方法
        this.roleAni.loadAtlas("res/AniMai/Mai.atlas", Laya.Handler.create(this, this.loadedRes));
    }

    loadedRes(): void {
        
        this.owner.addChild(this.roleAni);
        this.roleAni.gotoAndStop(1);
        trace("ttttttttt", this.roleAni.index)
        //this.roleAni.count;//动画总帧数
        //this.roleAni.index//当前帧的序数 currentFrame 不是下标, 相当于 flash的 currentFrame
        this.roleAni.interval = 16; //帧间隔  默认50毫秒 可以低于 1000 / 60, 甚至可以小于 1  数值越低动画播放速度越快
        this.roleAni.play();
        // this.roleAni.wrapMode
        this.roleAni.addLabel("xxxx", 10);//播到第10帧时派发帧事件 "label", 参数为 "xxxx"
        this.roleAni.on("complete", this, () => { trace("complete") })
        this.roleAni.on("label", this, (msg) => { trace(this.roleAni.index, msg) });//注意监听的是 "label"，将会收到 一个参数信息，就是之前定义的"xxxx"
    }

}
