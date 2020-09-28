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

data='2020-9-29 ~ 2020-10-3'
console.log(data.split("~")[1])