var obj = [
    { id: 3, parent: 2 },
    { id: 1, parent: null },
    { id: 2, parent: 1 },
]

function treeObj(obj) {
    return obj.sort((a, b) => b.parent - a.parent).reduce((acc, cur) => (acc ? {...cur, child: acc } : cur));
} //reduce() 方法对数组中的每个元素执行由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
// console.log(treeObj(obj)) //{ id: 1,parent: null,child: { id: 2, parent: 1, child: { id: 3, parent: 2 } } }

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