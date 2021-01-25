# https: // edabit.com/challenge/vKPepKYAvx2Rao3zt


def car_timer(n):
    results = []
    answer = divmod(n, 60)
    for a in answer:
        for s in list(str(a)):
            results.append(int(s))
    return sum(results)


print(car_timer(808))
print(car_timer(240))
print(car_timer(14))
