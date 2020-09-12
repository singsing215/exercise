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


var hexToRgb = function(hex) {
    var rgb = [];
    hex = hex.substr(1);//去除前缀 # 号
    if (hex.length === 3) { // 处理 "#abc" 成 "#aabbcc"
        hex = hex.replace(/(.)/g, '$1$1');
    }
    hex.replace(/../g, function(color){
        rgb.push(parseInt(color, 0x10));//按16进制将字符串转换为数字
    });
    return "rgb(" + rgb.join(",") + ")";
};
console.log(hexToRgb("#FFFFFF"))
