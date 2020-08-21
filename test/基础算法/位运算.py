# 多数元素 >(n/2)  出现次数超过一半的数字
def majorityElement(nums):
    nums.sort()
    return nums[len(nums)//2] #中位数
# print(majorityElement([2,2,1,1,1,2,2]))

#只出现一次的数字  abbccdd
def singleNumber(nums):
    sum1=sum(nums)  #[4,1,2,1,2]
    sum2=sum(set(nums))   #{1, 2, 4}*2
    result=2*sum2-sum1
    return result
# print(singleNumber([4,1,2,1,2]))

#汉明距离
def hammingDistance(x, y):
    return bin(x ^ y).count('1')
# print(hammingDistance(1, 4)) #1:0b1   4:0b100    1^4:0b101

#2的幂
def isPowerOfTwo(n):
    return n>0 and bin(n).count('1')==1
# print(isPowerOfTwo(42))

#缺失数字   哈希表
def missingNumber(nums):
    for n in range(len(nums) + 1):
        if n not in nums:
            return n
# print(missingNumber([9,6,4,2,3,5,7,0,1]))

#二进制中1的个数
def hammingWeight(n):
    return str(n).count('1')
# print(hammingWeight(1011))

# 将数字变成 0 的操作次数  偶/2，奇-1
def numberOfSteps (num):
    if num==0:
        return 0
    if num%2==0:
        return 1 + numberOfSteps(num//2)
    else:
        return 1 + numberOfSteps(num-1)
# print(numberOfSteps (14)) #1+1+1+1+1+1+0

#找不同t 由 s 重排，然后随机添加一个字母
def findTheDifference(s, t):
    for i in t:
        if t.count(i)-s.count(i)==1:
            return i
# print(findTheDifference("abcd", "abcde"))

# x 的平方根,取整
import math
def mySqrt(x):
    return int(math.sqrt(x))
# print(mySqrt(1000))
