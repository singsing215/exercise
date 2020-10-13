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

