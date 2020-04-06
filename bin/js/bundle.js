(function () {
    'use strict';

    class AniTest extends Laya.Script {
        constructor() {
            super();
            this.roleAni = new Laya.Animation();
            this.roleAni.loadAtlas("res/AniMai/Mai.atlas", Laya.Handler.create(this, this.loadedRes));
        }
        loadedRes() {
            this.owner.addChild(this.roleAni);
            this.roleAni.gotoAndStop(1);
            trace("ttttttttt", this.roleAni.index);
            this.roleAni.interval = 16;
            this.roleAni.play();
            this.roleAni.addLabel("xxxx", 10);
            this.roleAni.on("complete", this, () => { trace("complete"); });
            this.roleAni.on("label", this, (msg) => { trace(this.roleAni.index, msg); });
        }
    }

    class LoadingTest extends Laya.Script {
        onStart() {
            this.progressBar.width = 1;
            Laya.loader.load(["res/loading/loadingBar.png", "res/loading/loadingBar$bar.png"], Laya.Handler.create(this, this.progressBarBeCreated));
        }
        progressBarBeCreated() {
            trace("加载成功");
            this.progressBar.skin = "res/loading/loadingBar.png";
            let arr = [];
            for (let i = 1; i < 10; i++) {
                arr.push("res/Mai/Mai000" + i + ".png");
            }
            for (let i = 10; i < 67; i++) {
                arr.push("res/Mai/Mai00" + i + ".png");
            }
            Laya.timer.once(1000, this, () => Laya.loader.load(arr, Laya.Handler.create(this, this.onComplete), Laya.Handler.create(this, this.onProgress, null, false)));
        }
        onComplete(msg) {
            trace("onComplete", msg);
        }
        onProgress(msg) {
            trace("onProgress", msg);
            this.progressBar.width = 330 * msg;
        }
    }

    class TestEvent1 extends Laya.Script {
        onStart() {
            this.owner.once("aaaaaa", this, this.evtFunc);
            this.owner.event("aaaaaa", "oouu");
            this.owner.off("bbbbb", this, this.evtFunc);
            this.owner.once("ccc", this, () => { trace("ccc1"); });
            this.owner.once("ccc", this, () => { trace("ccc2"); });
            this.owner.on("ccc", this, () => { trace("ccc3"); });
            this.owner.on("ggg", this, () => { trace("这里是 test1 ggg1"); });
            this.owner.offAllCaller(this);
        }
        onUpdate() {
        }
        evtFunc(evt) {
            trace(evt);
        }
    }

    class TestEvent2 extends Laya.Script {
        onStart() {
            this.owner.on("ggg", this, () => { trace("这里是 test2 ggg2"); });
            this.owner.event("ggg");
        }
        onUpdate() {
        }
        evtFunc(evt) {
            trace(evt);
        }
    }

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("components/views/AniTest.ts", AniTest);
            reg("components/views/LoadingTest.ts", LoadingTest);
            reg("components/views/TestEvent1.ts", TestEvent1);
            reg("components/views/TestEvent2.ts", TestEvent2);
        }
    }
    GameConfig.width = 1200;
    GameConfig.height = 675;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "middle";
    GameConfig.alignH = "center";
    GameConfig.startScene = "LoadingScene.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = "noscale";
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = "middle";
            Laya.stage.alignH = "center";
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError = true;
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            GameConfig.startScene && Laya.Scene.open("LoadingScene.scene");
        }
    }
    new Main();

}());
