"use strict";

// //当 console.log 被调用的时候，匿名函数保持对外部变量 i 的引用，
// //此时for循环已经结束， i 的值被修改成了 10.
// //为了得到想要的结果，需要在每次循环中创建变量 i 的拷贝。
// function varSto() {
//     for (var i = 0; i < 10; i++) {
//         setTimeout(function() {
//             console.log(i);
//         }, 1000);
//     }
// }
// // varSto() //10个10
// //为了正确的获得循环序号，使用匿名包裹器(function(e) {})(i)立即执行函数
// function anony() {
//     for (var i = 0; i < 10; i++) {
//         (function(e) {
//             setTimeout(function() {
//                 console.log(e);
//             }, 1000);
//         })(i);
//     }
// }
// // anony() //0-9
// //只在let所在的代码块作用域内有效
// function letSto() {
//     for (let i = 0; i < 10; i++) {
//         setTimeout(function() {
//             console.log(i);
//         }, 1000);
//     }
// }
// // letSto() //0-9
// //数组
// var a = new Array(1024) //1024长度
// a[0102] = 3 //十进制=0102；十六进制=66
//     // console.log(a) //[ <66 empty items>, 3, <957 empty items> ]
//     // console.log(a[102]) //undefined
//     // console.log(a[0102]) //3
//     // console.log(a[66]) //3
// //apply 语法 func.apply(thisArg, [argsArray])
// var b = Array.apply(null, Array(3)) //apply()方法接受的是一个参数数组。
// var c = b.map(item => item + 1)
//     // console.log(b) //[ undefined, undefined, undefined ]
//     // console.log(c) //[ NaN, NaN, NaN ]
// // foreach 语法 arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
// var b = new Array(3)
// var c = b.forEach(item => item + 1) //返回值undefined
//     // console.log(b) //[ <3 empty items> ]
//     // console.log(c) //undefined
// // bind 语法 func.bind(thisArg[, arg1[, arg2[, ...]]])
// let aa = 10
// let obj = {
//     aa: 5,
//     say: function() {
//         console.log(this.aa)
//     }
// }
// let func = obj.say
// let func2 = obj.say.bind(obj) //返回一个原函数的拷贝，并拥有指定的 this 值和初始参数。
//     // func() //undefined
//     // func2() //5
var aaa = {
  tostring: function tostring() {
    console.log('tostring a');
    return 'a';
  },
  valueof: function valueof() {
    console.log('valueof a');
    return 'a';
  }
};
var bbb = {
  tostring: function tostring() {
    console.log('tostring b');
    return 'b';
  },
  valueof: function valueof() {
    console.log('valueof b');
    return [];
  }
}; // console.log(aaa) //{ tostring: [Function: tostring], valueof: [Function: valueof] }

console.log(aaa + '1'); //[object Object]1

console.log(aaa + 1); //[object Object]1

console.log(aaa * 1); //NaN

console.log(bbb + 1); //[object Object]1