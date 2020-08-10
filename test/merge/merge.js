class TreeNode {
    constructor(val) {
        this.val = val;
        this.right = this.left = null;
    }
}

function f(arr) {
    function toNode(item) { //转换数组项至节点
        if (item === null || item === undefined) { return null } else { return new TreeNode(item) }
    }
    let queue = [];
    const tree = toNode(arr.shift());
    queue.push(tree); //入队列第一个元素
    while (arr.length > 0) {
        //当数组里还有项的时候就拿数组的项去填充队列
        let current = queue.shift();
        current.left = toNode(arr.shift());
        current.right = toNode(arr.shift());
        if (current.left) { queue.push(current.left) }
        if (current.right) { queue.push(current.right) }
    }
    return tree;
}

///////////////////////////////////////////////////////////////////////////////////////////

// 对称二叉树
const isSymmetric = (root) => {
    return isMirror(root, root)
}
const isMirror = (L, R) => {
        if (L === null && R === null) return true
        if (L === null || R === null || L.val != R.val) return false
        return isMirror(L.left, R.right) && isMirror(L.right, R.left)
    }
    // console.log(isSymmetric(f([1, 2, 2, null, 3, null, 3])))

// 二叉树的直径
const diameterOfBinaryTree = (root) => {
        let ans = 1 // 默认为1是因为默认了根节点自身的路径长度
        const depth = (rootNode) => {
            if (!rootNode) return 0
            let L = depth(rootNode.left)
            let R = depth(rootNode.right)
            ans = Math.max(ans, L + R + 1) //左子树深度(节点个数) + 右子树深度（节点个数） + 1个根节点
            return Math.max(L, R) + 1 //左右子树深度的最大值 + 1,便是以根节点为数的最大深度
        }
        depth(root)
        return ans - 1 // 由于depth函数中已经默认加上数节点的自身根节点路径了，故此处需减1
    }
    // console.log(diameterOfBinaryTree(f([1,2,3,4,5])))

// 翻转二叉树
const invertTree = (root) => {
        if (root === null) return null
        let L = invertTree(root.left)
        let R = invertTree(root.right)
        root.left = R
        root.right = L
        return root
    }
    // console.log(invertTree(f([4,2,7,1,3,6,9])))

// 平衡二叉树
const isBalanced = (root) => {
    if (!root) return true
    if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) return false
    return isBalanced(root.left) && isBalanced(root.right)
}
const getHeight = (root) => {
        if (!root) return 0
        return Math.max(getHeight(root.left), getHeight(root.right)) + 1
    }
    // console.log(isBalanced(f([1,2,2,3,3,null,null,4,4])))

// 二叉树的深度
const maxDepth = (root) => {
        if (!root) return 0
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
    }
    // console.log(maxDepth(f([3,9,20,null,null,15,7])))

// 合并二叉树
const mergeTrees = (t1, t2) => {
        if (t1 === null) return t2
        if (t2 === null) return t1
        t1.val += t2.val
        t1.left = mergeTrees(t1.left, t2.left)
        t1.right = mergeTrees(t1.right, t2.right)
        return t1
    }
    // console.log(mergeTrees(f([1,3,2,5]),f([2,1,3,null,4,null,7])))

// 最小
const minNumber = (nums) => {
        return nums.sort((a, b) => ('' + a + b) - ('' + b + a)) //最小的数
    }
    // console.log(minNumber([3,30,34,9,5])) //[ 30, 3, 34, 5, 9 ]

//最大
const maxNumber = (nums) => {
        return nums.sort((a, b) => ('' + b + a) - ('' + a + b));
    }
    // console.log(maxNumber([3,30,34,9,5])) //[ 9, 5, 34, 3, 30 ]

//升序
const sortNum = (nums) => {
        return nums.sort((a, b) => a - b); //负数不变
    }
    // console.log(sortNum([3,30,34,5,9])) //[ 3, 5, 9, 30, 34 ]

//降序
const sortNumber = (nums) => {
        return nums.sort((a, b) => b - a); //正数变
    }
    // console.log(sortNumber([3,30,34,5,9])) //[ 34, 30, 9, 5, 3 ]

//倒序
const sortNumb = (nums) => {
        return nums.sort((a, b) => a + b);
    }
    // console.log(sortNumb([3,34,30,5,9])) //a+b [ 9, 5, 34, 30, 3 ] //b+a [ 9, 5, 34, 30, 3 ]

//合并两个数组
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
// console.log(array3);

//用队列实现栈
class MyStack {
    constructor() {
        this.stack = [];
    }
    push(x) {
        this.stack[this.stack.length] = x;
        return this.stack.length;
    }
    pop() {
        if (this.empty()) return undefined;
        let popEle = this.stack[this.stack.length - 1];
        this.stack.length = this.stack.length - 1;
        return popEle;
    }
    top() {
        return this.stack[this.stack.length - 1];
    }
    empty() {
        if (this.stack.length === 0) return true;
        else return false;
    }
    getMin() {
        var arr = this.stack.sort();
        return arr[0];
    }
}
// var obj = new MyStack()
// obj.push("7")
// obj.push("2")
// obj.push("3")
// console.log(obj)
// var param_2 = obj.pop()
// console.log(param_2)
// var param_3 = obj.top()
// console.log(param_3)
// var param_4 = obj.empty()
// console.log(param_4)
// var param_5 = obj.getMin()
// console.log(param_5)

//最小栈
class MinStack {
    constructor() {
        this.stack = [];
        this.min_stack = [Infinity];
    }
    push(x) {
        this.stack.push(x);
        this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x));
    }
    pop() {
        this.stack.pop();
        this.min_stack.pop();
    }
    top() {
        return this.stack[this.stack.length - 1];
    }
    getMin() {
        return this.min_stack[this.min_stack.length - 1];
    }
}
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> 返回 -3.
// minStack.pop();
// minStack.top();      --> 返回 0.
// minStack.getMin();   --> 返回 -2.


// 用栈实现队列
class MyQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    push(x) {
        this.stack1.push(x);
    }
    pop() {
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop()); //1234   4321
        }
        const item = this.stack2.pop(); // 1
        if (this.stack2.length) { // 432  234
            while (this.stack2.length) {
                this.stack1.push(this.stack2.pop());
            }
        }
        return item;
    }
    peek() {
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop()); //1234  4321
        }
        const item = this.stack2[this.stack2.length - 1]; // 1
        while (this.stack2.length) { // 4321   1234
            this.stack1.push(this.stack2.pop());
        }
        return item;
    }
    empty() {
        if (this.stack1.length === 0) return true;
        else return false;
    }
}
// var obj = new MyQueue()
// obj.push(1)
// obj.push(2)
// console.log(obj)
// var p2 = obj.peek()
// console.log(p2)
// var p3 = obj.pop()
// console.log(p3)
// var p4 = obj.empty()
// console.log(p4)

// 有效的括号
const isValid = (x) => {
        if (x.length % 2) return false
        let stack = []
        for (i = 0; i < x.length; i++) {
            switch (x[i]) {
                case "(":
                    {
                        stack.push(x[i])
                        break
                    }
                case "[":
                    {
                        stack.push(x[i])
                        break
                    }
                case "{":
                    {
                        stack.push(x[i])
                        break
                    }
                case ")":
                    {
                        if (stack.pop() !== "(") return false
                        break
                    }
                case "]":
                    {
                        if (stack.pop() !== "[") return false
                        break
                    }
                case "}":
                    {
                        if (stack.pop() !== "{") return false
                        break
                    }
            }
        }
        return !stack.length
    }
    // console.log(isValid("()(())"))

// 删除最外层的括号
const removeOuterParentheses = (x) => {
        if (x.length % 2) return "invalid input"
        var stack = []
        var index = 0
        for (i = 0; i < x.length; i++) {
            if (x[i] === '(') {
                index++
                if (index >= 2) {
                    stack.push(x[i]) //123   23
                }
            } else if (x[i] === ')') {
                index--
                if (index >= 1) {
                    stack.push(x[i]) //21  21
                }
            }
        }
        return stack.join('')
    }
    // console.log(removeOuterParentheses("((()))"))

//下一个更大元素
const nextGreaterElement = (nums1, nums2) => {
        return nums1.map(cur => { //nums1.map(cur => {})
            let i = nums2.indexOf(cur)
            for (i; i < nums2.length; i++) {
                if (nums2[i] > cur) {
                    return nums2[i]
                }
            }
            return -1
        })
    }
    // console.log(nextGreaterElement([4,1,2],[1,3,4,2]))

//比较含退格的字符串
const backspaceCompare = (S, T) => {
    if (S === T) return true //判断值+类型
    if (output(S) === output(T)) return true
    else return false
}
const output = (str) => {
        let arr = str.split("")
        let stack = []
        arr.forEach(i => {
            if (i === '#') stack.pop()
            else stack.push(i)
        })
        return stack.join('')
    }
    // console.log(backspaceCompare("ab#c","ad#c"))

// 滑动窗口的最大值
const maxSlidingWindow = (nums, k) => {
        if (nums.length === 0) return []
        var stack = []
        for (i = 0; i < nums.length - k + 1; i++) {
            let arr = []
            for (j = i; j < i + k; j++) {
                arr.push(nums[j])
            }
            stack.push(Math.max(...arr)) //对象中的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
        }
        return stack
    }
    // console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3))

// [['a','0'],['b','1'],['c','2']] => ['abc','ab2','a1c','a12','0bc','0b2','01c','012'']
const f1 = (arr) => {
        var arr1 = [] //存放子数组长度              
        var arr2 = [] //存放临时数组长度           
        var stack = [] //存放结果           
        var num = 1 //获取所有情况                     
        for (var i = 0; i < arr.length; i++) {
            arr1.push(arr[i].length)
            arr2.push(0)
            num = num * arr[i].length
        }
        var str = ""
        for (var k = 0; k < num; k++) {
            var num1 = k
            str = ""
            for (var j = 0; j < arr.length; j++) {
                arr2[j] = num1 % arr1[j] //获取当前数组的元素  
                str = str + arr[j][arr2[j]] //获取当前情况的元素      
                num1 = parseInt(num1 / arr1[j]) //获取下一个数组的值      
            }
            stack.push(str)
        }
        return stack
    }
    // console.log(f1([["a", "0"], ["b", "1"], ["c", "2"]]))

// 防抖--最后一次事件后执行函数。优化浏览器防止假死。输入框最后触发ajax请求次数。
const func = () => { console.log('boom') }
const debounce = (func, wait) => {
        var timeout
        return () => {
            if (timeout) clearTimeout(timeout)
            timeout = setTimeout(() => { func.apply(this, arguments) }, wait) //setTimeout()方法设置一个定时器，该定时器在定时器到期后执行一个函数或指定的一段代码。//arguments 是一个对应于传递给函数的参数的类数组对象
        }
    }
    // setInterval(debounce(func, 1000), 1000) // 第一次在2s后触发，之后每1s触发一次//setInterval() 方法重复调用一个函数或执行一个代码段，在每次调用之间具有固定的时间延迟。

// 节流--不管事件触发有多频繁，都会保证定时执行一次函。输入框定时触发ajax请求次数。
const throttle = (func, wait) => {
        var timeout
        return () => {
            if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null;
                    func.apply(this, arguments)
                }, wait)
            }
        }
    }
    // setInterval(throttle(func,1000),1000) // 一秒打出一次boom

const wm1 = new WeakMap(),
    wm2 = new WeakMap(),
    wm3 = new WeakMap();

//weakmap
const o1 = {},
    o2 = function() {};

wm1.set(o1, 37);
wm1.set(o2, "azerty");

wm2.set(o1, o2); // value可以是任意值,包括一个对象或一个函数
wm2.set(wm1, wm2); // 键和值可以是任意对象,甚至另外一个WeakMap对象

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined,wm2中没有o2这个键

wm1.has(o2); // true
wm2.has(o2); // false
wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false