//数组
var a = new Array(1024) //1024长度
a[0102] = 3 //十进制=0102；十六进制=66
    // console.log(a) //[ <66 empty items>, 3, <957 empty items> ]
    // console.log(a[102]) //undefined
    // console.log(a[0102]) //3
    // console.log(a[66]) //3

//apply 语法 func.apply(thisArg, [argsArray])
var b = Array.apply(null, Array(3)) //apply()方法接受的是一个参数数组。
var c = b.map(item => item + 1)
    // console.log(b) //[ undefined, undefined, undefined ]
    // console.log(c) //[ NaN, NaN, NaN ]

// foreach 语法 arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
var b = new Array(3)
var c = b.forEach(item => item + 1) //返回值undefined
    // console.log(b) //[ <3 empty items> ]
    // console.log(c) //undefined

// bind 语法 func.bind(thisArg[, arg1[, arg2[, ...]]])
let aa = 10
let obj = {
    aa: 5,
    say: function() {
        console.log(this.aa)
    }
}
let func = obj.say
let func2 = obj.say.bind(obj) //返回一个原函数的拷贝，并拥有指定的 this 值和初始参数。
    // func() //undefined
    // func2() //5

//obj + string num 
const aaa = {
    toString() {
        console.log('tostring a')
        return 'a'
    },
    valueOf() {
        console.log('valueof a') //1显示
        return 'a' //2返回
    }
}
const bbb = {
        toString() {
            console.log('tostring b')
            return 'b'
        },
        valueOf() {
            console.log('valueof b') //1显示
            return [] //2返回
        }
    }
    // console.log(aaa) //{ toString: [Function: tostring], valueOf: [Function: valueof] }
    // console.log(aaa + '1') //valueof a         a1
    // console.log(aaa + 1) //valueof a         a1
    // console.log(aaa * 1) //valueof a         NaN
    // console.log(bbb) //{ toString: [Function: toString], valueOf: [Function: valueOf] }
    // console.log(bbb + 1) //valueof b        tostring b     b1

//filter 语法 arr.filter(callback(element[, index[, array]])[, thisArg])
var ary = [0, 1, 2]
ary[10] = 10
    // console.log(ary.filter(x => x === undefined)) //[]返回一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。



//二分查找
function upper_bound_(n, v, a) {
    if (v > a[n - 1]) return n + 1;
    for (let i = 0; i < n; i++) {
        if (v <= a[i]) {
            return i + 1;
        }
    }
}
console.log(upper_bound_(5, 4, [1, 2, 4, 4, 5])) //3