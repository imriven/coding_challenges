# https://edabit.com/challenge/GPKkNbytRpsAnHcrX


def letters_only2(txt):
  letter = ""
  for i in list(txt):
    if i.isalpha():
      letter += i
  return letter

def letters_only(str):
    return "".join([l for l in list(str) if l.isalpha()])

print(letters_only("R!=:~0o0./c&}9k`60=y"))

print(letters_only("^,]%4B|@56a![0{2m>b1&4i4"))

print(letters_only("^U)6$22>8p)."))