import math

def answer(x):
    total = 0
    for i in range(0, x+1):
        total += int(math.pow(7, i))
    return total
print(answer(1))
print(answer(2))
    # your code here
