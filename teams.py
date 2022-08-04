import random

def select_random_Ns(lst, n):
    random.shuffle(lst)
    result = []
    for i in range(0, len(lst), n):
        result.append(lst[i:i + n])
    return result
        
        
lst = ["ajay","shamil","jassim","afreedi","adarsh","amal","nishad","ramsehed","navas","haseeb"]

print(select_random_Ns(lst, 5))