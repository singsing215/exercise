//创建数组
var fruits = ['Apple', 'Banana'];
console.log(fruits.length);// 2
//索引访问数组元素
var first = fruits[0];// Apple
var last = fruits[fruits.length - 1];// Banana
//找索引
var pos = fruits.indexOf('Banana');
//遍历数组
fruits.forEach(function (item, index, array) {
    console.log(item, index);    // Apple 0    Banana 1
});
//删除数组最前面的元素
var first = fruits.shift(); // ["Banana"];
//添加元素到数组的头部
var newLength = fruits.unshift('Strawberry') // ["Strawberry", "Banana"]
//删除多个元素
var removedItems = vegetables.splice(index, n);  //从index删除n个
//复制数组
var shallowCopy = fruits.slice();


// 判断当前数组是否包含某指定的值，如果是返回 true，否则返回 false
arr.includes('cat')
// 连接所有数组元素组成一个字符串
arr.join('-') //"Fire-Air-Water"
// slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝
//（包括 begin，不包括end）。原始数组不会被改变。
arr.slice(begin, end)
//在任意的位置给数组添加或删除任意个元素
arr.splice(begin, deleteCount, item1, item2...)
arr.splice(2, 1, 'hh') //替换
Array.prototype.remove = function (val) { //删除
    var index = this.indexOf(val)
    if (index > -1) {
      this.splice(index, 1)
    }
}
arr.remove(2) //删除
// 为数组中的每个元素执行一次回调函数
arr.forEach(element => console.log(element))
//如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false
arr.every(isBelowThreshold)
//map() 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。
arr.map(x => x * 2)


