"use strict";

var _arguments = arguments,
    _this = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 最小
var minNumber = function minNumber(nums) {
  return nums.sort(function (a, b) {
    return '' + a + b - ('' + b + a);
  }); //最小的数
}; // console.log(minNumber([3,30,34,9,5])) //[ 30, 3, 34, 5, 9 ]
//最大


var maxNumber = function maxNumber(nums) {
  return nums.sort(function (a, b) {
    return '' + b + a - ('' + a + b);
  });
}; // console.log(maxNumber([3,30,34,9,5])) //[ 9, 5, 34, 3, 30 ]
//升序


var sortNum = function sortNum(nums) {
  return nums.sort(function (a, b) {
    return a - b;
  }); //负数不变
}; // console.log(sortNum([3,30,34,5,9])) //[ 3, 5, 9, 30, 34 ]
//降序


var sortNumber = function sortNumber(nums) {
  return nums.sort(function (a, b) {
    return b - a;
  }); //正数变
}; // console.log(sortNumber([3,30,34,5,9])) //[ 34, 30, 9, 5, 3 ]
//倒序


var sortNumb = function sortNumb(nums) {
  return nums.sort(function (a, b) {
    return a + b;
  });
}; // console.log(sortNumb([3,34,30,5,9])) //a+b [ 9, 5, 34, 30, 3 ] //b+a [ 9, 5, 34, 30, 3 ]
//合并两个数组


var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var array3 = array1.concat(array2); // console.log(array3);
// 求数组第中间大和第k大的数

var find = function find(num, k) {
  num = num.sort();
  var middle = num.length / 2;

  if (num.length % 2 == 0) {
    middle = (num[middle] + num[middle - 1]) / 2;
  }

  if (num.length % 2 != 0) {
    middle = num[Math.floor(middle)]; //floor向下取整int, round四舍五入, ceil向上取整
  }

  if (k > num.length) {
    k = null;
  }

  if (k <= num.length) {
    num = num.sort(function (a, b) {
      return a + b;
    });
    k = num[k - 1];
  }

  return {
    middle: middle,
    k: k
  }; //返回多个值
}; // console.log(find([1, 2, 3, 4, 5, 5], 1))
// 有效的括号


var isValid = function isValid(x) {
  if (x.length % 2) return false;
  var stack = [];

  for (i = 0; i < x.length; i++) {
    switch (x[i]) {
      case "(":
        {
          stack.push(x[i]);
          break;
        }

      case "[":
        {
          stack.push(x[i]);
          break;
        }

      case "{":
        {
          stack.push(x[i]);
          break;
        }

      case ")":
        {
          if (stack.pop() !== "(") return false;
          break;
        }

      case "]":
        {
          if (stack.pop() !== "[") return false;
          break;
        }

      case "}":
        {
          if (stack.pop() !== "{") return false;
          break;
        }
    }
  }

  return !stack.length;
}; // console.log(isValid("()(())"))
// 删除最外层的括号


var removeOuterParentheses = function removeOuterParentheses(x) {
  if (x.length % 2) return "invalid input";
  var stack = [];
  var index = 0;

  for (i = 0; i < x.length; i++) {
    if (x[i] === '(') {
      index++;

      if (index >= 2) {
        stack.push(x[i]); //123   23
      }
    } else if (x[i] === ')') {
      index--;

      if (index >= 1) {
        stack.push(x[i]); //21  21
      }
    }
  }

  return stack.join('');
}; // console.log(removeOuterParentheses("((()))"))
//下一个更大元素


var nextGreaterElement = function nextGreaterElement(nums1, nums2) {
  return nums1.map(function (cur) {
    //nums1.map(cur => {})
    var i = nums2.indexOf(cur);

    for (i; i < nums2.length; i++) {
      if (nums2[i] > cur) {
        return nums2[i];
      }
    }

    return -1;
  });
}; // console.log(nextGreaterElement([4,1,2],[1,3,4,2]))
//比较含退格的字符串


var backspaceCompare = function backspaceCompare(S, T) {
  if (S === T) return true; //判断值+类型

  if (output(S) === output(T)) return true;else return false;
};

var output = function output(str) {
  var arr = str.split("");
  var stack = [];
  arr.forEach(function (i) {
    if (i === '#') stack.pop();else stack.push(i);
  });
  return stack.join('');
}; // console.log(backspaceCompare("ab#c","ad#c"))
// 滑动窗口的最大值


var maxSlidingWindow = function maxSlidingWindow(nums, k) {
  if (nums.length === 0) return [];
  var stack = [];

  for (i = 0; i < nums.length - k + 1; i++) {
    var arr = [];

    for (j = i; j < i + k; j++) {
      arr.push(nums[j]);
    }

    stack.push(Math.max.apply(Math, arr)); //对象中的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
  }

  return stack;
}; // console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3))
// [['a','0'],['b','1'],['c','2']] => ['abc','ab2','a1c','a12','0bc','0b2','01c','012'']


var f1 = function f1(arr) {
  var arr1 = []; //存放子数组长度              

  var arr2 = []; //存放临时数组长度           

  var stack = []; //存放结果           

  var num = 1; //获取所有情况                     

  for (var i = 0; i < arr.length; i++) {
    arr1.push(arr[i].length);
    arr2.push(0);
    num = num * arr[i].length;
  }

  var str = "";

  for (var k = 0; k < num; k++) {
    var num1 = k;
    str = "";

    for (var j = 0; j < arr.length; j++) {
      arr2[j] = num1 % arr1[j]; //获取当前数组的元素  

      str = str + arr[j][arr2[j]]; //获取当前情况的元素      

      num1 = parseInt(num1 / arr1[j]); //获取下一个数组的值      
    }

    stack.push(str);
  }

  return stack;
}; // console.log(f1([["a", "0"], ["b", "1"], ["c", "2"]]))
// 防抖--最后一次事件后执行函数。优化浏览器防止假死。输入框最后触发ajax请求次数。


var func = function func() {
  console.log('boom');
};

var debounce = function debounce(func, wait) {
  var timeout;
  return function () {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(_this, _arguments);
    }, wait); //setTimeout()方法设置一个定时器，该定时器在定时器到期后执行一个函数或指定的一段代码。//arguments 是一个对应于传递给函数的参数的类数组对象
  };
}; // setInterval(debounce(func, 1000), 1000) // 第一次在2s后触发，之后每1s触发一次//setInterval() 方法重复调用一个函数或执行一个代码段，在每次调用之间具有固定的时间延迟。
// 节流--不管事件触发有多频繁，都会保证定时执行一次函。输入框定时触发ajax请求次数。


var throttle = function throttle(func, wait) {
  var timeout;
  return function () {
    if (!timeout) {
      timeout = setTimeout(function () {
        timeout = null;
        func.apply(_this, _arguments);
      }, wait);
    }
  };
}; // setInterval(throttle(func,1000),1000) // 一秒打出一次boom
//用队列实现栈


var MyStack =
/*#__PURE__*/
function () {
  function MyStack() {
    _classCallCheck(this, MyStack);

    this.stack = [];
  }

  _createClass(MyStack, [{
    key: "push",
    value: function push(x) {
      this.stack[this.stack.length] = x;
      return this.stack.length;
    }
  }, {
    key: "pop",
    value: function pop() {
      if (this.empty()) return undefined;
      var popEle = this.stack[this.stack.length - 1];
      this.stack.length = this.stack.length - 1;
      return popEle;
    }
  }, {
    key: "top",
    value: function top() {
      return this.stack[this.stack.length - 1];
    }
  }, {
    key: "empty",
    value: function empty() {
      if (this.stack.length === 0) return true;else return false;
    }
  }, {
    key: "getMin",
    value: function getMin() {
      var arr = this.stack.sort();
      return arr[0];
    }
  }]);

  return MyStack;
}(); // var obj = new MyStack()
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


var MinStack =
/*#__PURE__*/
function () {
  function MinStack() {
    _classCallCheck(this, MinStack);

    this.stack = [];
    this.min_stack = [Infinity];
  }

  _createClass(MinStack, [{
    key: "push",
    value: function push(x) {
      this.stack.push(x);
      this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x));
    }
  }, {
    key: "pop",
    value: function pop() {
      this.stack.pop();
      this.min_stack.pop();
    }
  }, {
    key: "top",
    value: function top() {
      return this.stack[this.stack.length - 1];
    }
  }, {
    key: "getMin",
    value: function getMin() {
      return this.min_stack[this.min_stack.length - 1];
    }
  }]);

  return MinStack;
}(); // var minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); //--> 返回 -3.
// minStack.pop();
// minStack.top(); //--> 返回 0.
// minStack.getMin(); //--> 返回 -2.
// console.log(minStack)
// var obj = new MinStack()
// obj.push("3")
// obj.push("2")
// obj.push("1")
// console.log(obj)
// var param_3 = obj.getMin()
// console.log(param_3)
// var param_2 = obj.pop()
// console.log(param_2)
// var param_5 = obj.getMin()
// console.log(param_5)
// 用栈实现队列


var MyQueue =
/*#__PURE__*/
function () {
  function MyQueue() {
    _classCallCheck(this, MyQueue);

    this.stack1 = [];
    this.stack2 = [];
  }

  _createClass(MyQueue, [{
    key: "push",
    value: function push(x) {
      this.stack1.push(x);
    }
  }, {
    key: "pop",
    value: function pop() {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop()); //1234   4321
      }

      var item = this.stack2.pop(); // 1

      if (this.stack2.length) {
        // 432  234
        while (this.stack2.length) {
          this.stack1.push(this.stack2.pop());
        }
      }

      return item;
    }
  }, {
    key: "peek",
    value: function peek() {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop()); //1234  4321
      }

      var item = this.stack2[this.stack2.length - 1]; // 1

      while (this.stack2.length) {
        // 4321   1234
        this.stack1.push(this.stack2.pop());
      }

      return item;
    }
  }, {
    key: "empty",
    value: function empty() {
      if (this.stack1.length === 0) return true;else return false;
    }
  }]);

  return MyQueue;
}(); // var obj = new MyQueue()
// obj.push(1)
// obj.push(2)
// console.log(obj)
// var p2 = obj.peek()
// console.log(p2)
// var p3 = obj.pop()
// console.log(p3)
// var p4 = obj.empty()
// console.log(p4)