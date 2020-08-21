class TreeNode {
    constructor(val) {
        this.val = val;
        this.right = this.left = null;
    }
}

function f(arr) {
    function toNode(item) {//转换数组项至节点
        if (item === null || item === undefined) { return null }
        else { return new TreeNode(item) }
    }
    let queue = [];
    const tree = toNode(arr.shift());
    queue.push(tree);//入队列第一个元素
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
// console.log(isSymmetric(f([1,2,2,null,3,null,3])))

// 二叉树的直径
const diameterOfBinaryTree = (root) => {
    let ans = 1 // 默认为1是因为默认了根节点自身的路径长度
    const depth = (rootNode) => {
        if (!rootNode) return 0
        let L = depth(rootNode.left)
        let R = depth(rootNode.right)
        ans = Math.max(ans, L + R + 1) //左子树深度(节点个数) + 右子树深度（节点个数） + 1个根节点
        return Math.max(L, R) + 1//左右子树深度的最大值 + 1,便是以根节点为数的最大深度
    }    
    depth(root)
    return ans - 1// 由于depth函数中已经默认加上数节点的自身根节点路径了，故此处需减1
}
// console.log(diameterOfBinaryTree(f([1,2,3,4,5])))

// 翻转二叉树
const invertTree = (root) => {
    if(root === null) return null
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
const getHeight = (root) =>{
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
    if(t1 === null) return t2
    if(t2 === null) return t1
    t1.val += t2.val
    t1.left = mergeTrees(t1.left,t2.left)
    t1.right = mergeTrees(t1.right,t2.right)
    return t1
}
// console.log(mergeTrees(f([1,3,2,5]),f([2,1,3,null,4,null,7])))