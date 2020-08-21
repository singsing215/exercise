# 样例输入
# 1 2
# 3 4
# 5 6
# 样例输出
# 3
# 7
# 11
while 1:
    a=[]  
    s = input()
    if s != "":
        for i in s.split():  
            a.append(int(i))  
        print(sum(a))
    else:
        break

# 样例输入 公交车乘客
# 4
# 0 3
# 2 5
# 4 2
# 4 0
# 样例输出
# 6
n = int(input())
for i in range(n):
    p, q = list(map(int, input().split()))

# 输入4
#样例输出yes
n=input()
print("yes")

# 样例输入 2 3 4
# 样例输出 3
n,m,k = map(int,input().split(" "))
print(min)

# 样例输入
# 1 2 第一行有两个数字 n,m，分别表示集合 A 和集合 B 的元素个数
# 1 集合 A 
# 2 3 集合 B
# 样例输出
# 1 2 3
A=[]
B=[]
n, m = input().split()
n=int(n)
m=int(m)
for r in input().split():
    A.append(int(r))
for s in input().split():
    A.append(int(s))
    B = sorted(set(A))
for k in B:
    print(k,end=' ')

# 样例输入
# aaabbaa
# 样例输出
# 5
line=input()
print(len(res))

# 样例输入
# 4
# revolution
# greatwall
# democracy
# science
# Cross the greatwall, we can reach every
# 样例输出
# Cross the *********, we can reach every corner of the world.
n = int(input())
words = []
for _ in range(n):
    words.append(input())
text = input()
text_list = []
for word in words:
    text_list.append(text.lower().replace(word, '*'*len(word)))
for t in text_list:
    for i in range(len(t)):
        if t[i] == '*':
            text = text[:i] + '*' + text[i+1:]
print(text)


# 样例输入
# 2 第一行是数据组数
# 2 
# 3 
# 样例输出
# Case #1: 第一组
#   o
#  ooo
#   o
# Case #2: 
#     o    
#    ooo   
#     o    
#  o  o  o 
# ooooooooo
#  o  o  o 
#     o    
#    ooo   
#     o  
def plot(n, x, y):
    if n == 1:
        figure[x-1][y-1] = 'o'
    else:
        plot(n-1, x-(3**(n-2)), y)
        plot(n-1, x+(3**(n-2)), y)
        plot(n-1, x, y-(3**(n-2)))
        plot(n-1, x, y+(3**(n-2)))
        plot(n-1, x, y)
num = int(input())
for i in range(1, num+1):
    print('Case #', i, ':')
    n = int(input())
    size = 3 ** (n - 1)
    figure = [[' ' for i in range(size)] for n in range(size)]
    center_x = size // 2 + 1
    center_y = size // 2 + 1
    plot(n, center_x, center_y)
    for row in figure:
        print(''.join(row))

