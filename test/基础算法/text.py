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

3
1 2 3
2 1 3
3 2 1

18

# 本题为考试单行多行输入输出规范示例，无需提交，不计分。
import sys 
for i in sys.stdin:
    a = i.split()
    print(int(a[0]) + int(a[1]))

1 1

2