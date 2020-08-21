#最长重复子数组    动态规划
def findLength(A, B):
    n = len(A)
    m = len(B)
    res = 0
    dp = [[0 for _ in range(n + 1)] for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if B[i - 1] == A[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
                res = max(res, dp[i][j])
    return res
# print(findLength([1,2,3,2,1], [3,2,1,4,7]))

# 爬楼梯
def climbStairs(n):
    dp = {}
    dp[1] = 1
    dp[2] = 2
    for i in range(1+2,n+1):   # n>=3执行
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]
# print(climbStairs(4))

# 最大子序和
def maxSubArray(nums):
    for i in range(1,len(nums)):
        nums[i] = max(nums[i-1]+nums[i],nums[i]) #[-2, 1, -2, 4, 3, 5, 6, 1, 5] or nums[i] += max(nums[i - 1], 0)
    return max(nums)
# print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

# 买卖股票的最佳时机 II
def maxProfit(prices):
    profit = 0
    for i in range(len(prices)):
        for j in range(i + 1, len(prices)):
            profit = max(profit, prices[j] - prices[i])
    return profit
# print(maxProfit([7, 1, 5, 3, 6, 4]))

# 买卖股票的最佳时机 II
def maxProfitt(prices):
    profit = 0
    for i in range(1, len(prices)):
        tmp = prices[i] - prices[i - 1]
        if tmp > 0:
            profit += tmp
    return profit
# print(maxProfitt([7, 1, 5, 3, 6, 4]))

# 打家劫舍
def rob1(nums):
    if not nums: return 0
    if len(nums) == 1: return nums[0]
    dp = [0] * len(nums)
    dp[0] = nums[0]
    dp[1] = max(nums[0], nums[1])
    for i in range(2, len(nums)):
        dp[i] = max(dp[i - 2] + nums[i], dp[i - 1])
    return dp[len(nums) - 1]
# print(rob1([2,1,4,5,3,1,1,3]))

# 按摩师
def massage(nums):
    if not nums: return 0
    if len(nums) == 1: return nums[0]
    dp = [0] * (len(nums) + 2)
    res = 0
    for i in range(2, len(nums) + 2):
        dp[i] = max(dp[i - 2] + nums[i - 2], dp[i - 1])
        res = max(res, dp[i])
    return res
# print(massage([2,1,4,5,3,1,1,3]))

# 杨辉三角
def generate(numRows):
    dp=[[0]*n for n in range(1,numRows+1)]
    for i in range(numRows):
        dp[i][0]=dp[i][-1]=1
    for i in range(0,numRows):
        for j in range(i+1):
            if(dp[i][j]==0):
                dp[i][j]=dp[i-1][j-1]+dp[i-1][j]
    return dp
print(generate(5))