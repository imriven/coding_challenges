# https: // edabit.com/challenge/HpqLxNqqRvMQoz8ME


def double_char(txt):
    double = " "
    for letter in txt:
        double += letter + letter
    return double


print(double_char("String"))
print(double_char("Hello World!"))
print(double_char("1234!_ "))
