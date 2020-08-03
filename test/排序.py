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
