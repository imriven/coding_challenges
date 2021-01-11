# https: // edabit.com/challenge/Zerwo2AENbvRZTe83


def next_edge(side1, side2):
    max_side = (side1 + side2) - 1
    return max_side


print(next_edge(8, 10))
print(next_edge(5, 7))
print(next_edge(9, 2))
