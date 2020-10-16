console.log('1'); // 1.打印
setTimeout(function() { //1.加入宏任务暂且记为 setTimeout1
    console.log('2');
    process.nextTick(function() { //2.微任务 记为 process2
        console.log('3'); //3.打印
    })
    new Promise(function(resolve) {
        console.log('4'); //2.打印
        resolve();
    }).then(function() { //2.微任务 记为 then2
        console.log('5') //3.打印
    })
})
process.nextTick(function() { //1.加入微任务队列 记为 process1
    console.log('6'); //2.打印
})
new Promise(function(resolve) {
    console.log('7'); // 1.打印
    resolve();
}).then(function() { //1.微任务 记为 then1
    console.log('8') //2.打印
})
setTimeout(function() { //1.宏任务 记为 setTimeout2
    console.log('9'); //3.执行第一个宏任务,打印
    process.nextTick(function() { //3.微任务 记为 process3
        console.log('10'); //4.打印
    })
    new Promise(function(resolve) { //3.打印
        console.log('11'); //3.打印
        resolve();
    }).then(function() { //3.微任务 记为 then3
        console.log('12') //4.打印
    })
})

// 第一轮循环：
// 首先打印 1
// 下面是setTimeout是异步任务且是宏任务，加入宏任务暂且记为 setTimeout1
// 下面是 process 微任务 加入微任务队列 记为 process1
// 下面是 new Promise 里面直接 resolve(7) 所以打印 7 后面的then是微任务 记为 then1
// setTimeout 宏任务 记为 setTimeout2
// 第一轮打印 1 7
// 宏任务队列：setTimeout1, setTimeout2
// 微任务队列：process1, then1

// 第二轮循环：
// 执行所有微任务
// 执行process1，打印出 6
// 执行then1 打印出8
// 微任务都执行结束了，开始执行第一个宏任务
// 执行  setTimeout1 也就是 第 3 - 14 行
// 首先打印出 2
// 遇到 process 微任务 记为 process2
// new Promise中resolve 打印出 4
// then 微任务 记为 then2
// 第二轮打印 1 7 6 8 2 4 
// 宏任务队列：setTimeout2 
// 微任务队列：process2, then2

// 第三轮循环：
// 执行所有的微任务
// 执行 process2 打印出 3
// 执行 then2 打印出 5
// 执行第一个宏任务，也就是执行 setTimeout2 对应代码中的 25 - 36 行
// 首先打印出 9
// process 微任务 记为 process3
// new Promise执行resolve 打印出 11
// then 微任务 记为 then3
// 第三轮打印1 7 6 8 2 4 3 5 9 11 
// 宏任务队列为空 
// 微任务队列：process3，then3

// 第四轮循环：
// 执行所有的微任务
// 执行process3 打印出 10
// 执行then3 打印出 12
// 最终打印顺序为：1 7 6 8 2 4 3 5 9 11 10 12