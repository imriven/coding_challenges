# https://edabit.com/challenge/HYjQKDXFfeppcWmLX


def is_curzon(num):
    first = 2 ** num + 1
    second = 2 * num + 1

    if first % second == 0:
        return True
    return False


print(is_curzon(5))
print(is_curzon(10))
print(is_curzon(14))