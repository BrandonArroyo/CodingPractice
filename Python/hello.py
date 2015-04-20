print "Hello."
x = 2
# this is a if statement
if x ==1:
	print "x == 1 "
else:
	print "x != 1"
#for loop 
words = ['cat', 'dog', 'bird']

for w in words:
	print w

def fib(n):
	result = []
	a, b = 0, 1
	while a < n:
		result.append(a)
		print a, 
		a, b = b, a + b 
	return result

fib(100)