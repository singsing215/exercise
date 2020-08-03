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