# -*- coding: utf-8 -*-
"""
Created on Tue Aug 11 21:21:31 2020

@author: admin
"""
# 输入包括多组测试数据。
# 每组输入第一行是两个正整数N和M（0 < N <= 30000,0 < M < 5000）,分别代表学生
# 的数目和操作的数目。
# 学生ID编号从1编到N。
# 第二行包含N个整数，代表这N个学生的初始成绩，其中第i个数代表ID为i的学生的成绩
# 接下来又M行，每一行有一个字符C（只取‘Q’或‘U’），和两个正整数A,B,当C为'Q'的
# 时候, 表示这是一条询问操作，他询问ID从A到B（包括A,B）的学生当中，成绩最高的
# 是多少
# 当C为‘U’的时候，表示这是一条更新操作，要求把ID为A的学生的成绩更改为B。
# 对于每一次询问操作，在一行里面输出最高成绩.

# 5 7 第一行是两个正整数，学生数目N和操作数目M，int
# 1 2 3 4 5 第二行包含N个整数，scores，list
# Q 1 5     C,A,B
# U 3 6
# Q 3 4
# Q 4 5
# U 4 5
# U 2 9
# Q 1 5

# 5
# 6
# 5
# 9
def highest():
    C,A,B = input().split() # Q 1 5
    A,B = int(A),int(B) # 1 5
    if C =='Q':
        if A > B:
            A,B = B,A
        res.append(max(scores[A-1:B])) #scores[A-1]=1
    if C =='U':
        scores[A-1]=B

while True:
    try:
        N,M = map(int,input().split()) #第一行
        scores = list(map(int,input().strip().split())) #第二行
        res = []
        for _ in range(M):
            highest()
        for i in res:
            print(i)
    except:
        break
    
    

     
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    