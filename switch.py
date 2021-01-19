# if entry is a string change it to a number if entry is a number change it to a string

def switch (entry):
    if entry == str(entry):
        entry = int(entry)
    elif entry == int(entry):
        entry = str(entry)
    return entry, type(entry)



print(switch(500))
print(switch("20010"))
print(switch(420))
print(switch("420"))