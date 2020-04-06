// 先在 .d.ts里面声明，这样就可以全局自由引用，而不必再在每个class里都写 import xxx from "../aa/bb"   这种导入，并且有代码提示而不是 any 类型； 然后在某个.ts文件里具体实现一次。
declare var trace: (...args) => void;