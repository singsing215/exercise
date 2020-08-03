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
def merge(A, m, B, n):
    A[m:] = B
    A.sort()
    return A
# print(merge([1,2,3,0,0,0], 3, [2,5,6], 3))

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



print ("%e"%24436)