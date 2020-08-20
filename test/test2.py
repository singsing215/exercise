x = '12ere2' # 12er
def f(x):
    stack = ''
    for i in x:
        if i not in stack:
            stack += i
    return stack
print(f('12ere2'))


