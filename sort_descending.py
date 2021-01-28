# https: // edabit.com/challenge/yaXQvCzAXJLe37Qie

def sort_descending(num):
      num_array = []
  for i in str(num):
    num_array.append(i)
  num_array.sort(reverse=True)
  return int("".join(num_array))



print(sort_descending(123))
print(sort_descending(1254859723))
print(sort_descending(73065))
