# 2 3 列表 A = [int(i) for i in input().split()]
# 0 3 数据组 a,b = map(int, input().split())
# aaabbaa 字符串 line = input()

# 样例输入
# 1 2 第一行有两个数字 n,m，分别表示集合 A 和集合 B 的元素个数。
# 1 第二行集合 A
# 2 3 第三行集合 B
# 样例输出
# 1 2 3 合并后的集合，要求从小到大输出
while True:
    n, m = input().split()  # 第一行
    A = [int(i) for i in input().split()] # 第二行
    B = [int(i) for i in input().split()] # 第三行
    C = sorted(set(A + B))
    res = ''
    for i in C:
        res = res + ' ' + str(i) # 空格分隔
    print(res)

# 样例输入
# 5 3 第一行为价签的数量n, 小B的购买清单中所列的物品数m
# 4 2 1 10 5 第二行为空格分隔的n个正整数，表示货架上各类物品的价格
# apple 随后的m行为购买清单中物品的名称
# orange
# mango
# 样例输出
# 7 19 输出两个数a和b，购买清单上所有的物品可能需要的最小和最大费用。
while 1:
    nm = input() # 第一行 5 3
    if nm != '':
        n, m = map(int, nm.split())
        price = list(map(int, input().split())) # 第二行 4 2 1 10 5
        store = dict()
        for p in range(m):
            name = input() # 第三行 apple
            if name in store.keys():
                store[name] += 1
            else:
                store[name] = 1
        price = sorted(price)
        count = (sorted(store.values()))
        minv = 0
        maxv = 0
        l = len(count)
        for i in range(l):
            maxv += count[i]*price[-l+i]
            minv += count[-i-1]*price[i]
        print(minv, maxv) # 输出两个数a和b

# 样例输入
# aaabbaa
# 样例输出, 符合要求的子串种数
# 5 ”a”,”aa”,”aaa”,”b”,”bb”
line=input()
str0=''
str1=''
res=set()
for i in range(len(line)):
    if line[i] ==str1:
        str0+=line[i]
    else:
        str0=line[i]
        str1=line[i]
    res.add(str0)
print(len(res))

# 样例输入
# 4 第一行有n个站点
# 0 3 在第一站点下车人数off和上车人数on
# 2 5
# 4 2
# 4 0
# 样例输出
# 6 最多的乘客数目
while 1:
    n = int(input()) # 第一行 4
    tem,ans = 0,0
    for i in range(n):
        off,on = map(int, input().split()) # 第二行以下 0 3
        tem += on-off
        if tem > ans:
            ans = tem
    print(ans)