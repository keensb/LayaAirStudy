
export default class LoadingTest extends Laya.Script {//测试加载
    /** @prop {name:progressBar,type:Node}*/ //name 要和 变量名一致
    progressBar: Laya.ProgressBar;



    //progressBar 要这样用:先给progressBar 加载自己的皮肤，然后穿上皮肤， 接下来才开始加载其他资源
    //要注意的是， 这玩意分为主资源和附带资源  如果主资源名为 XXX.png , 附带资源必须名为 XXX$bar.png  可以通过九宫格来隐藏这东西

    onStart(): void {
        this.progressBar.width = 1;

        Laya.loader.load(["res/loading/loadingBar.png", "res/loading/loadingBar$bar.png"], Laya.Handler.create(this, this.progressBarBeCreated));
    }

    private progressBarBeCreated(): void {
        trace("加载成功")
        this.progressBar.skin = "res/loading/loadingBar.png";


        let arr: string[] = [];
        for (let i = 1; i < 10; i++) {
            arr.push("res/Mai/Mai000" + i + ".png");
        }
        for (let i = 10; i < 67; i++) {
            arr.push("res/Mai/Mai00" + i + ".png");
        }

        Laya.timer.once(1000, this, ()=>
        Laya.loader.load(arr, Laya.Handler.create(this, this.onComplete), Laya.Handler.create(this, this.onProgress, null, false))//第三个参数为false,别一次性就被移除了
        )
    }

    private onComplete(msg): void {
        trace("onComplete", msg);//msg = true 是否成功完成所有加载(如果有一个文件加载失败都会是 false)
    }

    private onProgress(msg): void {//这里可以获得一个比例数值
        trace("onProgress", msg);
        this.progressBar.width = 330 * msg;
    }
}