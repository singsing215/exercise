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
        elif i==10:
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
