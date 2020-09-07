"use strict";

//当 console.log 被调用的时候，匿名函数保持对外部变量 i 的引用，
//此时for循环已经结束， i 的值被修改成了 10.
//为了得到想要的结果，需要在每次循环中创建变量 i 的拷贝。
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
} //为了正确的获得循环序号，使用匿名包裹器(function(e) {})(i)立即执行函数


for (var i = 0; i < 10; i++) {
  (function (e) {
    setTimeout(function () {
      console.log(e);
    }, 1000);
  })(i);
} //只在let所在的代码块作用域内有效


var _loop = function _loop(_i) {
  setTimeout(function () {
    console.log(_i);
  }, 1000);
};

for (var _i = 0; _i < 10; _i++) {
  _loop(_i);
}