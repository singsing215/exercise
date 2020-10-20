//[1, [2, 3, [4, 5]]]  ------>    [1, 2, 3, 4, 5]
function flatten(arr) {
    return arr.join(',').split(',').map(function(item) {//join将数组转换为字符串
        return parseInt(item);
    })
}
// console.log(flatten([1, [2, 3, [4, 5]]]))

//数组去重
function unique (arr) {
    return Array.from(new Set(arr))
  }
// console.log(unique([1,1,'true','true',true,false,false,null, NaN, NaN,'NaN', {},{}]))

//数组去重利用sort()排序方法，for循环原数组，对比相邻元素。
function unique(arr) {
    arr = arr.sort()
    var arrry= [arr[0]]
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            arrry.push(arr[i]);
        }
    }
    return arrry;
}
// console.log(unique([1,1,'true','true',true,true, NaN, NaN,'NaN', 0,{}]))

//数组去重新建空数组，for循环原数组，用indexOf判断两个数组是否存在相同元素，如果有相同的值则跳过，不同push。
function unique(arr) {
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (array.indexOf(arr[i]) === -1) {
            array.push(arr[i])
        }
    }
    return array;
}
// console.log(unique([null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}]))