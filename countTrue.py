#  https://edabit.com/challenge/GLbuMfTtDWwDv2F73

def count_true(lst):
    
  count = 0
    
  for b in lst:
    if b == True:
      count += 1
  return count

# def count_true(lst):
#     return lst.count(True)

print(count_true([True, False, False, True, False]))
print(count_true([False, False, False, False]))
print(count_true([]))