//当 console.log 被调用的时候，匿名函数保持对外部变量 i 的引用，
//此时for循环已经结束， i 的值被修改成了 10.
//为了得到想要的结果，需要在每次循环中创建变量 i 的拷贝。
function varSto() {
    for (var i = 0; i < 10; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }
}
// varSto() //10个10

//为了正确的获得循环序号，使用匿名包裹器(function(e) {})(i)立即执行函数
function anony() {
    for (var i = 0; i < 10; i++) {
        (function(e) {
            setTimeout(function() {
                console.log(e);
            }, 1000);
        })(i);
    }
}
// anony() //0-9

//只在let所在的代码块作用域内有效
function letSto() {
    for (let i = 0; i < 10; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }
}
// letSto() //0-9

// 宏任务微任务1
// console.log('script start'); //1
// setTimeout(function() {
//     console.log('setTimeout'); //5
// }, 0);
// Promise.resolve().then(function() {
//     console.log('promise1'); //3
// }).then(function() {
//     console.log('promise2'); //4
// });
// console.log('script end'); //2

// 宏任务微任务2
// setTimeout(_ => console.log(4)) //4
// new Promise(resolve => {
//     resolve()
//     console.log(1) //1 new Promise在实例化的过程中所执行的代码都是同步进行的
// }).then(_ => {
//     console.log(3) //3 而then中注册的回调才是异步执行的
// })
// console.log(2) //2

// 宏任务微任务3
// Promise.resolve().then(function() {
//     console.log('1'); 
//     setTimeout(function() {
//         console.log('2'); 
//     }, 0);
// });
// setTimeout(function() {
//     console.log('3'); 
//     Promise.resolve().then(function() {
//         console.log('4'); 
//     })
// }, 0);//1 3 4 2

//ES5 中是通过设置构造函数的 prototype 属性，来实现继承的
// 继承。既然要实现继承，那么首先要有一个父类
// es5
function Animal(name) { // 定义一个动物类
    this.name = name; // 实例属性
    this.sleep = function() { // 实例方法
        console.log(this.name + ' sleep');
    }
}
Animal.prototype.eat = function(food) { // 原型方法eat
    console.log(this.name + ' eat ' + food);
};
// 原型链继承。将父类的实例作为子类的原型
function Cat() {}
// Cat.prototype = new Animal();  //JS只有一种结构object ， object私有属性指向它的构造函数的原型对象prototype 
// Cat.prototype.name = 'cat';  
// var cat = new Cat();
// console.log(cat.name);
// console.log(cat.sleep());
// console.log(cat.eat('fish'));
// console.log(cat instanceof Animal); //true 
// console.log(cat instanceof Cat); //true

// ES6 中有类 class 的概念，类 class 的继承是通过 extends 来实现的
// class Animal {  // 定义一个动物类
//     constructor(name) {  //构造方法constructor()用来定义类，this代表实例对象。
//         this.name = name; // 实例属性
//         this.sleep = function () {  // 实例方法
//             console.log(this.name + ' sleep');
//         };
//     }
//     eat(food) {  // 原型方法eat
//         console.log(this.name + ' eat ' + food);
//     }
// }
// // 原型链继承。将父类的实例作为子类的原型
// class Cat extends Animal{
//     constructor(name) {
//         super(name)
//     }
// }
// // var cat = new Cat('cat');
// // console.log(cat.name); //cat
// // console.log(cat.sleep()); //cat sleep
// // console.log(cat.eat('fish')); //cat eat fish
// // console.log(cat instanceof Animal); //true 
// // console.log(cat instanceof Cat); //true
//ES6--2
// class Person{
//     constructor(age){
//         this.age = age
//     }
//     say(){  // 原型方法
//         console.log(this.age)
//     }
// }
// const person = new Person(20)//20
// person.say()

//继承debug
function Fai() {
    getName = function() { console.log(1) };
    return this;
}
Fai.getName = function() { console.log(2) };
Fai.prototype.getName = function() { console.log(3) };
var getName = function() { console.log(4) };

function getName() { console.log(5) };
// Fai.getName()//2
// getName()//4
// // Fai().getName()//报错
// getName()//4
// new Fai.getName()//2
// new Fai().getName()//3
// new new Fai().getName()//3

// 输出json
var obj = [
    { id: 1, parent: null },
    { id: 2, parent: 1 },
    { id: 3, parent: 2 }
]

function treeObj(obj) {
    return obj.sort((a, b) => b.parent - a.parent).reduce((acc, cur) => (acc ? {...cur, child: acc } : cur));
} //reduce() 方法对数组中的每个元素执行由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
// console.log(treeObj(obj))
// {
//     id: 1,
//     parent: null,
//     child: {
//         id: 2,
//         parent: 1,
//         child: {
//             id: 3,
//             parent: 2
//         }
//     }
// }

//快速排序 O(nlogn)# 从数据集中选取一个基准，然后让数据集的每个元素和基准值比较，小于基准值的元素放入左边分区，
//大于基准值的元素放入右边分区，最后以左右两边分区为新的数据集进行递归分区，直到只剩一个元素。不修改原数组。
function quickSort(arr) {
    if (arr.length < 2) { return arr; }
    var mid = Math.floor(arr.length / 2); //选取基准，随便选哪个都可以，选中间的便于理解
    var pivot = arr.splice(mid, 1)[0]; //将基准与原数组分离
    var left = []; //定义基准值左右两个数列
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); //小于基准值放左边
        } else {
            right.push(arr[i]); //大于基准值放右边
        }
    }
    return quickSort(left).concat([pivot], quickSort(right)); //使用迭代进行比较，合并数组
};
// console.log(quickSort([2, 4, 3, 9, 5, 6, 7, 1]))

//冒泡排序 O(n^2)，最好n,最坏n^2# 重复比较两个元素，顺序错误就交换，修改原数组。
function bubbleSort(arr) {
    var temp;
    for (var i = 0; i < arr.length; i++) { //右
        for (var j = 0; j < arr.length - i - 1; j++) { //左-i
            if (arr[j] > arr[j + 1]) { //如果左>右，换位
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    };
    return arr;
}
// console.log(bubbleSort([2, 4, 3, 9, 5, 6, 7, 1]))

//插入排序 时间复杂度: O(N^(1-2)); 空间复杂度: O(1)
//构建有序序列，对于未排序数据，在已排序序列中key从后向前扫描，找到相应位置并插入。修改原数组。
function insertSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var key = arr[i];
        var j = i - 1;
        while (j >= 0 && key < arr[j]) { //key从后向前扫描
            arr[j + 1] = arr[j];
            j--; //向右移动一位，为新元素腾出空间
        }
        arr[j + 1] = key; //新元素
    }
    return arr;
}
// console.log(insertSort([2, 4, 3, 9, 5, 6, 7, 1]))

//闭包加一
function A() {
    var count = 0;

    function B() {
        count++;
        console.log(count);
    }
    return B;
}
var C = A();
// C();// 1
// C();// 2
// C();// 3