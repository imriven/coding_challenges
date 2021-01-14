# https://edabit.com/challenge/owmKG47zYRJw72aiD


def add_name(obj, name, value):
    obj.update({ name : value })
    return obj



print(add_name({}, "Brutus", 300))

print(add_name({ "piano": 500 }, "Brutus", 400))

print(add_name({ "piano": 500, "stereo": 300 }, "Caligula", 440))