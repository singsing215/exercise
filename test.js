// let x = {sf:100}
// Object.defineProperty(x,'sf',{
//     get(){return 200}
// })
// x.sf = 300
// console.log(x.sf)

// function sf(){}
// sf.prototype.name = 100
// let a = new sf()
// console.log(a.name)
// sf.prototype.name = 200
// console.log(a.name)
// sf.prototype = {name:300}
// console.log(a.name)

// console.log(parseInt("1.20"))

// let o = {
//     get sf(){
//         console.log('g');
//     },
//     set sf(v){
//         console.log('s');
//     }
// };
// o.sf = '100';
// console.log(o.sf);

// let arr = ['a','b']
// for (let key in arr){
//     console.log(key)
// }
// for (let key in arr){
//     console.log(key)
// }

// function sf(name){
//     return this.name =name
// }
// console.log([0,'0',[],{},null].map(i=>typeof new sf(i).name))

// function fn(a=1){
//     console.log(a)
// }
// fn()
// fn(undefined)
// fn(null)
// fn(false)

// let B = {
//     name:'b'
// }
// let A = function(){
//     this.name = 'a'
// }
// A.prototype = Object.create(B)
// let a = new A()
// B.name = 'new_name'
// console.log(a.name)
// delete a.name
// console.log(a.name)

// Function.prototype.sf = function(){
//     return Function.prototype.call.bind(this)
// }
// console.log(Array.prototype.push.sf()([],0,1,2))

// let obj = {
//     sf:100,
//     log(){
//         sf = 200;
//         console.log(this.sf)
//     }
// }
// obj.log()
// let {log} = obj;
// log()

// var isEmail = /^(([1-5]?[1-9])|(6[1-4]))$/;
// console.log(isEmail.test(65));

// var isEmail = /^(([1-5]?[1-9])|(6[1-4])|([1-5]0))$/;
// console.log(isEmail.test(64));

// let x = {
//     toString(){
//         return 20
//     },
//     valueOf(){
//         return '30'
//     }
// }
// console.log(x=='20')
// console.log(x==30)

// {var a = 0}
// {let b = 0}
// {let a = 1}
// {var b = 1}
// console.log(a,b)


// var hexToRgb = function(hex) {
//     var rgb = [];
//     hex = hex.substr(1);//去除前缀 # 号
//     if (hex.length === 3) { // 处理 "#abc" 成 "#aabbcc"
//         hex = hex.replace(/(.)/g, '$1$1');
//     }
//     hex.replace(/../g, function(color){
//         rgb.push(parseInt(color, 0x10));//按16进制将字符串转换为数字
//     });
//     return "rgb(" + rgb.join(",") + ")";
// };
// console.log(hexToRgb("#FFFFFF"))



// function average(nums) {
//     for (i=0;i<nums.length;i++){
//         //console.log(nums[i])
//         // if(nums[i] === null) return 0
        
//         }
//     return nums.reduce((a, b) => a + b) / nums.length;
//     }
// console.log(average([1,null,3,4,5]))


// function  sortString(str){
//     return str.split('').reverse().join('');
// }
// var str = 'jireng    uhungerv     alley'
// var str2 = sortString(str)
// console.log(str2)

// var f = 'abc'
// f[1] = 'f'
// console.log(f)

// console.log(null==null)

// var state = ''//1
// function func(){
//     var state = ''//2
//     $.ajax({
//         type:type,
//         url:url,
//         cache:cache,
//         data:data,
//         dataType:dataType,
//         headers:{
//             "Content-Type":"application/json;charset=UTF-8"
//         },
//         success:function(){
//             state = 'success'
//         },
//         error:function(){
//             this.state = 'error'
//         }
//     });
// }
// func()

// arr = [1,2,3]
// length = arr.length
// console.log(length)

// var v = "he";
// (function(){
//     console.log(v);
//     function v(){
//         var v = "ha";
//         console.log(v)
//     }
//     v();
// })()

// function listToTree(arr) {
//     var map = {},tree= [];
//     for (i = 0; i < arr.length; i ++) {
//         map[arr[i].id] = arr[i]; 
//         arr[i].children = []; 
//     }
//     for (i = 0; i < arr.length; i += 1) {
//         var node = arr[i];
//         if (node.pid !== null) {
//             map[node.pid].children.push(node);
//         } else {
//             tree.push(node);
//         }
//     }
//     return tree;
// }
// console.log(listToTree([{"id":1,"pid":null,"children":[{"id":11,"pid":"1","children":[]},{"id":12,"pid":"1","children":[]}]}]))
// // listToTree([{"id":1,"pid":"-1","children":[{"id":11,"pid":"1","children":[]},{"id":12,"pid":"1","children":[]}]}]); //[{"id":1,"pid":"-1","children":[{"id":11,"pid":"1","children":[]},{"id":12,"pid":"1","children":[]}]}]

// function arr2Tree (arr, pid) {
//     let tree = []
//     let temp
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].parentId === pid) {
//         let obj = {id: arr[i].id, name: arr[i].name}
//         temp = arr2Tree(arr, arr[i].id)
//         if (temp.length > 0) {
//           obj.children = temp
//         }
//         tree.push(obj)
//       }
//     }
//     return tree
//   }

// function unique (arr) {
//     return Array.from(new Set(arr))
//   }
//   var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
//   console.log(unique(arr))

// function validDate (date1, date2) {
//     let ans = []
//     const start = new Date(date1)
//     const end = new Date(date2)
//     const daySeconds = 24*60*60*1000
//     const startTime = start.getTime()
//     const endTime = end.getTime()
//     const range = endTime - startTime
//     let total = 0
//     while (total <= range && range > 0) {
//         ans.push(new Date(startTime + total).toLocaleDateString().replace(/\//g, '-'))
//         total += daySeconds
//     }
//     return ans
// };

// console.log(validDate("2015-02-08", "2015-03-03"))
// // console.log(validDate(new Date("2015-02-08"), new Date("2015-03-03")))

// data='2020-9-29 ~ 2020-10-3'
// console.log(data.split("~")[1])

// console.log(typeof [],typeof null,typeof undefined,typeof 'false',typeof function (){})

// history.replaceState({},'hello','www')
// location.reload()
// location.hash = 'seewo'
// history.go(-1)

// const p = new Promise((res,rej)=>{
//     res('s1')
//     rej('err')
//     res('s2')
// })
// p.then((res)=>{
//     console.log('then:',res)
// }).catch((err)=>{
//     console.log('c:',err)
// })

// function Fn(){}
// function Fn2(){}
// Fn.prototype = new Fn2()
// Fn2.prototype = new Fn()
// const fn = new Fn()
// const fn2 = new Fn2()
// console.log(fn.constructor,fn2.constructor)

// var a = 10
// function b(){
//     console.log(a)
//     var a = 20
//     console.log(a)
// }
// b()

// for(var i = 0;i<3;i++){
//     (function(num){
//         const fn = num => console.log(num)
//         setTimeout(fn,0)
//     })(i)
// }

// for(var i = 0;i<3;i++){
//     (function(num){
//         setTimeout(()=>console.log(num),0)
//     })(i)
// }

///////////////////cvte1
// function toCamelCase(str){
//     var regExp=/[-_]\w/ig;
//     return str.replace(regExp,function(match){
//           return match.charAt(1).toUpperCase();
//      });
// }
// console.log(toCamelCase ('hello world'))

// a = '1,{{as}}.2,{{as}}.3,{{as}}.4,{{as}}.'
// ans = ''
// list = a.split(".")
// for(i in list){
//     innerList = list[i].split(",")
//     b = innerList[1]
//     c = b.replace('{','').replace('{','').replace('}','').replace('}','')
//     console.log(c)
// }
// // console.log(a.split("."))

///////////////////cvte2
// function main(){
//     console.log('main excute')
// }
// Function.prototype.before = function(fn){
//     var _this = this;       //用来保存调用这个函数的引用，如myFunc调用此函数，则_this指向myFunc
//     return function(){      //返回一个函数，相当于一个代理函数，也就是说，这里包含了原函数和新函数，原函数指的是myFunc，新函数指的是fn
//         fn.apply(this,arguments);   //修正this的指向，将this指针指向fn，将myFunc接收的参数传给fn处理。
//         return _this.apply(this,arguments);     //执行原函数
//     }
// }
// Function.prototype.after = function(fn){
//     var _this = this;
//     return function(){
//         var r = _this.apply(this,arguments); //先执行原函数，也就是myFunc
//         fn.apply(this,arguments);   //再执行新函数
//         return r;
//     }
// }
// main.before(function (){
//     console.log('before');
// }).after(function (){
//     console.log('after')
// })()

// function A(){}
// function B(a){
//     this.a = a
// }
// function C(a){
//     if (a){
//         this.a = a
//     }
// }
// A.prototype.a = 1
// B.prototype.a = 1
// C.prototype.a = 1
// console.log(new A().a)
// console.log(new B().a)
// console.log(new C(2).a)

// for(var i=0;i<10;++i){
//     setTimeout(function (){
//         console.log(i)
//     },0)
// }

// setTimeout(function(){
//     console.log(1)
// },100)
// setTimeout(function (){
//     console.log(2)
// },0)
// console.log(3)

// var arr=[]
// console.log(typeof arr)

// var string = 'string'
// var number = 0
// var bool = true
// console.log(number || string)
// console.log(number && string)
// console.log(bool || number)
// console.log(bool && number)

