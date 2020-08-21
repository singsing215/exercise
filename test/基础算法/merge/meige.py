# -*- coding: UTF-8 -*-
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
# print(generate(5))

# 最小的k个数
def getLeastNumbers(arr, k):
    arr.sort()
    return arr[:k]
# print(getLeastNumbers([3,2,1], 2))

# 最后一块石头的重量
def lastStoneWeight(stones):
    while len(stones)>=2:
        stones.sort()
        stones.append(stones.pop()-stones.pop())
    return stones[0]
# print(lastStoneWeight([2,7,4,1,8,1]))

# 滑动窗口的最大值
def maxSlidingWindow(nums, k):
    res = []
    if not nums:
        return res
    if k <=0:
        return res
    for i in range(0,len(nums)-k+1):
        res.append(max(nums[i:i+k]))
    return res
# print(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))

#词典中最长的单词
def longestWord(words):
    words.sort(key = lambda x: (-len(x), x)) #['banana', 'apple', 'apply', 'appl', 'app', 'ap', 'a']
    for word in words:
        for i in range(1, len(word)+1):
            if word[:i] not in words:
                break
        else:
            return word
# print(longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"]))
#words.sort()                             #['a', 'ap', 'app', 'appl', 'apple', 'apply', 'banana']
#words.sort(key = lambda x: (len(x), x))  #['a', 'ap', 'app', 'appl', 'apple', 'apply', 'banana']
#words.sort(key = lambda x: (-len(x), x)) #['banana', 'apple', 'apply', 'appl', 'app', 'ap', 'a']

class ListNode(object):
    def __init__(self,val=None,next=None):
        self.val = val
        self.next = next

def f(array):
    tem_node = ListNode()
    node = ListNode()
    for i in array:       
        if not tem_node.val:
            tem_node.val =i
            node = tem_node
        else:
            tem_node.next = ListNode(i)
            tem_node = tem_node.next
    return node

############################################################################################

# 反转链表
def reverseList(head):
    if not head: return None
    pre = None
    while head:
        head.next, pre, head = pre, head, head.next
    return pre
# res=reverseList(f([1,2,3,4,5]))
# print(res.val, "->", res.next.val, "->", res.next.next.val, "->", res.next.next.next.val, "->", res.next.next.next.next.val)

# 合并两个有序链表
def mergeTwoLists(l1, l2):
    if l1 is None:
        return l2
    elif l2 is None:
        return l1
    elif l1.val < l2.val:
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    else:
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
# res=mergeTwoLists(f([1,2,4]),f([1,3,4]))
# print(res.val, "->", res.next.val, "->", res.next.next.val, "->", res.next.next.next.val, "->", res.next.next.next.val, "->", res.next.next.next.val)

# 链表的中间结点  
def middleNode(head):
    A = [head]
    while A[-1].next:
        A.append(A[-1].next)
    return A[len(A) // 2]
# res=middleNode(f([1,2,3,4,5]))
# print(res.val, "->", res.next.val, "->", res.next.next.val)

# 链表中倒数第k个节点
def getKthFromEnd(head, k):
    res = []
    while head:
        res.append(head)  #将节点存入列表中
        head = head.next
    return res[-k]
# res=getKthFromEnd(f([1,2,3,4,5]),2)
# print(res.val, "->", res.next.val)

# 回文链表
def isPalindrome(head):
    res = []
    while head:
        res.append(head.val)
        head = head.next
    return  res==res[::-1]  #反转
# print(isPalindrome(f([1,2])))

# 删除排序链表中的重复元素
def deleteDuplicates(head):
    if head:
        head.next = deleteDuplicates(head.next)
        if head.next and head.val == head.next.val: #head.next TRUE, head.val == head.next.val
            return head.next
        else: 
            return head
# res=deleteDuplicates(f([1, 2, 3, 3, 2, 1]))
# print(res.val, "->", res.next.val, "->", res.next.next.val)

# 移除链表元素
def removeElements(head, delete):
    res=ListNode()
    res.next=head
    pre=res
    cur=res.next
    while cur:
        if cur.val==delete:
            pre.next=cur.next
        else:
            pre=pre.next
        cur=cur.next
    return res.next
# res=removeElements(f([1,2,6,3,4,5,6]),6)
# print(res.val, "->", res.next.val, "->", res.next.next.val, "->", res.next.next.next.val, "->", res.next.next.next.next.val)

# 有效的字母异位词
def isAnagram(s, t):
    if len(s) != len(t):
        return False
    if sorted(s) != sorted(t):
        return False
    return True
# print(isAnagram("anagram", "nagaram"))

# 数组的相对排序
def relativeSortArray(arr1, arr2):
    res = []
    for i in arr2:
        while i in arr1:
            res.append(i)
            arr1.remove(i)
    return res + sorted(arr1)
# print(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))

# 按奇偶排序数组 II 偶奇偶奇 设两个列表，最后合并一个列表
def sortArrayByParityII(A):
    even = []
    odd = []
    res = []
    for x in A:
        if x % 2 == 0:
            even.append(x)
        else:
            odd.append(x)
    for i in range(len(even)):
        res.append(even[i])
        res.append(odd[i])
    return res
# print(sortArrayByParityII([4,2,5,7]))

# 非递增顺序的最小子序列   10+9>3+4+8
def minSubsequence(nums):
    nums.sort()
    res = []
    while len(nums) > 0:
        res.append(nums.pop())
        if sum(res) > sum(nums):
            return res
# print(minSubsequence([4,3,10,9,8]))

# 合并区间
# 输入: [[1,3],[2,6],[8,10],[15,18]]
# 输出: [[1,6],[8,10],[15,18]]
def merge(intervals):
    intervals.sort()
    res = []
    for i in intervals:
        if not res:
            res.append(i)
        elif res[-1][-1] < i[0]:  # 3<2   res最后最大值小于新最小值
            res.append(i)
        else:
            res[-1][-1] = max(res[-1][-1], i[-1])  # 3<2   3=3or6
    return res
# print(merge([[1,3],[2,6],[8,10],[15,18]]))

# 宝石与石头
# 输入: J = "aA", S = "aAAbbbb"
# 输出: 3
def numJewelsInStones(J, S):
    return sum(s in J for s in S)
# print(numJewelsInStones("aA", "aAAbbbb"))

# 快速排序 O(nlogn)# 从数据集中选取一个基准，然后让数据集的每个元素和基准值比较，小于基准值的元素放入左边分区大于基准值的元素放入右边分区，最后以左右两边分区为新的数据集进行递归分区，直到只剩一个元素。
def quick_sort(arr):
    if len(arr) < 2:
        return arr
    mid = arr[len(arr) // 2]    # 选取基准，随便选哪个都可以，选中间的便于理解
    left, right = [], []    # 定义基准值左右两个数列
    arr.remove(mid)    # 从原始数组中移除基准值
    for i in arr:
        if i >= mid:        # 大于基准值放右边
            right.append(i)
        else:
            left.append(i)            # 小于基准值放左边
    return quick_sort(left) + [mid] + quick_sort(right)    # 使用迭代进行比较
# 对大规模数据集进行快排，当分区的规模达到一定小时改用插入排序，插入排序在小数据规模时排序性能较好。
# print(quick_sort([64, 34, 25, 12, 22, 11, 90]))

# 冒泡排序 O(n^2)# 重复比较两个元素，顺序错误就交换
def bubbleSort(arr):
    for i in range(len(arr)):
        for j in range(0, len(arr)-1-i):
            if arr[j] > arr[j+1]:  # 前>后
                arr[j], arr[j+1] = arr[j+1], arr[j]  # 换位
    return arr
# print(bubbleSort([64, 34, 25, 12, 22, 11, 90]))

# 插入排序 # 构建有序序列，对于未排序数据，在已排序序列中key从后向前扫描，找到相应位置并插入。
def insertionSort(arr): 
    for i in range(1, len(arr)): 
        key = arr[i] 
        j = i-1
        while j >=0 and key < arr[j] : 
            arr[j+1] = arr[j] 
            j -= 1
        arr[j+1] = key 
    return arr
# print(insertionSort([64, 34, 25, 12, 22, 11, 90]))

#两数之和
def twoSum1(nums, target):
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i,j]
    return []
# print(twoSum1([2, 7, 11, 15], 9)) #[0,1]

#两数之和 II - 输入有序数组 --双指针
def twoSum2(numbers, target):
    if(not numbers): return []
    left=0
    right=numbers.index(numbers[-1])
    while(left<right):
        if(numbers[left]+numbers[right]==target):
            return [left+1,right+1]
        elif(numbers[left]+numbers[right]>target):
            right=right-1
        else:
            left=left+1
    return None
# print(twoSum2([2, 7, 11, 15], 9))

# 两个数组的交集,不重复
def intersection1(nums1, nums2):
    a = set(nums1)&set(nums2)
    return list(a)
# print(intersection1([4,9,9,5], [9,4,9,8,4]))

# 两个数组的交集,重复,双指针
def intersection2(nums1, nums2):
    nums1.sort()
    nums2.sort()
    i,j = 0,0
    res = []
    if len(nums1) == 0 or len(nums2) == 0:
        return []
    while i < len(nums1) and j < len(nums2):
        if nums1[i] == nums2[j]:
            res.append(nums1[i])
            i += 1
            j += 1
        elif nums1[i] < nums2[j]:
            i += 1
        else:
            j += 1
    return res
# print(intersection2([1,2,2,1], [2,2]))

#合并排序的数组
def mergee(A, m, B, n):
    A[m:] = B
    A.sort()
    return A
# print(mergee([1,2,3,0,0,0], 3, [2,5,6], 3))

# 删除排序数组中的重复项
def removeDuplicates(nums):
    stack=[]
    for i in nums:
        if i not in stack:
            stack.append(i)
    return stack
# print(removeDuplicates([1,1,2]))

# 数组中重复的数字
def findRepeatNumber(nums):
    count = set() #比list快
    for i in nums:
        if i in count:
            return i
        else:
            count.add(i)

# 移除元素
def removeElement(nums, val):
    try:
        while True:
            nums.remove(val)
    except:
        return nums
# print(removeElement([0,1,2,2,3,0,4,2], 2))

# 加一
def plusOne(digits):
    s=""
    for i in digits:
        s += str(i)
    return list(map(int,str(int(s)+1))) #str转list
# print(plusOne([9,9,9,9]))

# 搜索插入位置
def searchInsert(nums, target):
    nums.append(target)
    nums.sort()
    return nums.index(target)
# print(searchInsert([1,3,5,6], 5))

# 移动零
def moveZeroes(nums):
    for i in range(len(nums)):
        if nums[i]==0:
            nums.remove(nums[i])
            nums.append(0)
    return nums
# print(moveZeroes([0,1,0,3,12]))

# 拼写单词
import collections
def countCharacters(words, chars):
    ccc = collections.Counter(chars)     # Counter({'a': 2, 't': 1, 'c': 1, 'h': 1})
    ans = 0
    for word in words:
        wcc = collections.Counter(word)  # Counter({'c': 1, 'a': 1, 't': 1})
        for i in wcc:                    # Counter({'b': 1, 't': 1})
            if ccc[i] < wcc[i]:          # Counter({'h': 1, 'a': 1, 't': 1})
                break                    # Counter({'e': 2, 't': 1, 'r': 1})
        else:
            ans += len(word)
    return ans
# print(countCharacters(["cat","bt","hat","tree"], "atach"))

# 最长回文串
import collections
def longestPalindrome(s):
    length=0
    mid=0
    dic=collections.Counter(s)    #Counter({'c': 4, 'd': 2, 'a': 1, 'b': 1})
    for i in dic.values():        #dict_values([1, 1, 4, 2])
        if i%2==0:                #偶数个全加上
            length += i
        else:                     #奇数加i-1,中间加1
            length += i-1
            mid=1
    return length + mid
# print(longestPalindrome("abccccdd"))

# 快乐数
def isHappy(n):
    only=set()
    def loop(n):
        if n in only:   #循环
            return False
        value = sum(int(i)**2 for i in str(n))  #1*1 + 9*9
        if value == 1:
            return True
        only.add(n)     #{19}  {82, 19}  {82, 19, 68}
        return loop(value)
    return loop(n)
# print(isHappy(19))

# 在排序数组中查找数字 I
def search(nums, target):
    res=[]
    for i in nums:
        if i ==target:
            res.append(i)
    return len(res)
# print(search([5,7,7,8,8,10], 8))

# 统计有序矩阵中的负数
def countNegatives(grid):
    return str(grid).count('-')
# print(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))

#分割平衡字符串
def balancedStringSplit(s):
    balance = 0
    count = 0
    for i in s:
        if i == 'L':
            balance +=1
        elif i == 'R':
            balance -=1
        if balance == 0:
            count += 1
    return count
# print(balancedStringSplit("RLRRLLRLRL"))

#判断子序列 (双指针)
def isSubsequence(s, t): 
    si = ti = 0
    while si<len(s) and ti<len(t):  #p<3  q<6
        if s[si] == t[ti]:
            si += 1
        ti += 1  #先s[p]+   后t[q]+
    return si == len(s) # 判断p == len(s)
# print(isSubsequence("abc","ahbgdc"))

# 分发饼干 (双指针)
def findContentChildren(g, s):
    g.sort()
    s.sort()
    gi=si=0
    count=0
    if len(s)==0 or len(g)==0 or g[0]>s[-1]: #最小胃口>最大饼干
        return 0
    while gi<len(g) and si<len(s):
        if g[gi] <= s[si]:
            count += 1
            s[si] = 0 #饼干喂食完为0
            gi += 1
        si += 1
    return count
# print(findContentChildren([1,2], [1,2,3]))

#柠檬水找零 (双指针)
def lemonadeChange(bills):
    five=ten=0 #5[i]   10[j]
    for i in bills:
        if i==5:
            five += 1
        elif i==10:3
            ten += 1
            five -= 1
        else: #-5-5-5    -10-5
            if ten == 0:
                five -= 3
            else:
                five -= 1
                ten -= 1
        if five <0 or ten <0:
            return False
    return True
# print(lemonadeChange([5,5,5,10,20]))

#访问所有点的最小时间
def minTimeToVisitAllPoints(points):
    res=0
    for i in range(len(points)-1):
        res += max(abs(points[i+1][0]-points[i][0]),abs(points[i+1][1]-points[i][1]))
    return res
# print(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]))

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
