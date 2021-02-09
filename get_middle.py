# https://edabit.com/challenge/R3649PDvoFf6wGxyg


def get_middle(word):

  if len(word) % 2 > 0:
    return word[int((len(word)-1)/2)]
  else:
    return word[int(len(word)/2)-1:int(len(word)/2)+1]


print(get_middle("tests"))
print(get_middle("animals"))
print(get_middle("test"))
print(get_middle("animal"))

