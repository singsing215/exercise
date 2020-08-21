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
print(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))

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

