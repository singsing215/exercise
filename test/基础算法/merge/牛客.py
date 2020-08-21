# -*- coding: utf-8 -*-
"""
Created on Tue Aug 1text.1 20:21:17 2020

@author: admin
"""
# 本题为考试多行输入输出规范示例，无需提交，不计分。
import sys
if __name__ == "__main__":
    # 读取第一行的n
    n = int(sys.stdin.readline().strip())
    ans = 0
    for i in range(n):
        # 读取每一行
        line = sys.stdin.readline().strip()
        # 把每一行的数字分隔后转化成int列表
        values = list(map(int, line.split()))
        for v in values:
            ans += v
    print(ans)

# 3
# 1 2 3
# 2 1 3
# 3 2 1

# 18

# 本题为考试单行多行输入输出规范示例，无需提交，不计分。
import sys 
for i in sys.stdin:
    a = i.split()
    print(int(a[0]) + int(a[1]))

# 1 1

# 2


# 输入1 5
# 输出1+5
import sys
for i in sys.stdin:
    a, b =map(int,i.split())
    print(a+b)

# 输入第一行包括一个数据组数t，接下来每行包括两个正整数a,b。2，1 5。
# 输出a+b。6
for i in range(int(input())):
    a,b = map(int,input().split())
    print(a+b)
    
# 输入包括两个正整数a,b。1 5。
# 输入数据有多组, 如果输入为0 0则结束输入。6。
for i in range(100):
    a,b=map(int,input().split())
    print(a+b)

while True:
    a,b = map(int,input().split())
    if a == b== 0:
        break
    print(a+b)

# 每组数据一行,每行的第一个整数为整数的个数n, n为0的时候结束输入。4 1 2 3 4。
# 接下来n个正整数,即需要求和的每个正整数。10。
while True:
    a=list(map(int,input().split()))
    if a==[0]:break
    print(sum(a[1:]))
    
# 1 2 3
# 6 
import sys
for i in sys.stdin:
    a = map(int,i.split())
    print(sum(a))

# 输入第一行n,第二行是n个空格隔开的字符串。5，c d a bb e。
# 输出一行排序后的字符串，空格隔开，无结尾空格 a bb c d e
input()
a=input().split(" ")
print(' '.join(sorted(a)))

# 输入a c bb
# 输出a bb c
import sys
for i in sys.stdin:
    a = i.split()
    print(" ".join(sorted()))

# 输入a,c,bb
# 输出a,bb,c
import sys
for i in sys.stdin:
    a = i.strip().split(',')
    print(','.join(sorted(a)))























