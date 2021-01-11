# https: // edabit.com/challenge/gt9LLufDCMHKMioh2


def stutter(word):
    return word[0:2] + "... " + word[0:2] + "... " + word + "?"


def stutter2(word):
    w = word[0:2] + "... "
    return w + w + word


def stutter3(word):
    w = word[0:2] + "... "
    return w*2 + word + "?"


print(stutter("incredible"))
# stutter("incredible") ➞ "in... in... incredible?"

print(stutter("enthusiastic"))
# stutter("enthusiastic") ➞ "en... en... enthusiastic?"

print(stutter("outstanding"))
# stutter("outstanding") ➞ "ou... ou... outstanding?"
