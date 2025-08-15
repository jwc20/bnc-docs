---
title: Key Algorithm
---

Here are my solutions for getting the number of bulls and cows.


## Old vs. New

The key algorithm remains the same:
1. **count bulls by comparing positions directly,**
2. **then calculate cows by finding total matching digits and subtracting the bulls.**

The new solution has better readability and separation of logic


<br />
<br />
<br />
<br />
<br />



## Old solution

[My solution for 299. Bulls and Cows](https://leetcode.com/problems/bulls-and-cows/submissions/1674433040)


```python
from collections import Counter


class Solution:
    def getHint(self, secret: str, guess: str) -> str:
        """
        Ideas:
        - Two players:
            - You write the secret number (secret)
            - Your friend makes a guess (guess)

        - After you take the guess, you provide hints with:

            - bulls -> which digits in the guess are in the correct position

            - cows -> which digits in the guess are in you secret number.
                - BUT, in the wrong position.

        - The hint should be formatted as "xAyB",
            - where x is the number bulls
            - and y is the number of cows.

        - both input secret and guess may contain duplicate digits.


        ---------------


        Example 1:

        Input:
        - secret = "1807", guess = "7810"

        Output:
        - "1A3B"


        Ideas:
        - input are two string values: secret and guess
        - output is a string
            - "xAyB" where x is the number of bulls and y is the number of cows.

        - we are comparing two input values.
            - create a frequency hashmap of the secret string
                - Counter()
        - we will loop over the guess string

        ----------------------------

        what are bulls and cows?
            - bulls:
                - number in the correct position
                - for example, in secret = "1807", guess = "7810"
                    - the number in the correct position is number 8 at index 1.
                        - so the number of bulls is 1.

            - cows:
                - numbers that are in the secret string, but in the wrong position.
                - for example, in secret = "1807", guess = "7810"
                    - the guess numbers 7, 8, 1, 0 are in the secret string also,
                        - BUT 8 is in the correct position. (so we dont count this)
                        - so the number of cows are 3.

        Example 2:
        Input:
            - secret = "1123", guess = "0111"
        Output:
            - "1A1B"


        - number 1 on index 1 is same -> x = 1


        ------------------------


        we should have a variable for the number bulls.
            - we will return this as x,
                - AND, we will use this number to subtract from the number of cows.


        - to get the number of bulls, we can use a pointer (starting at index i=0), and
            - iterate compare both strings at that index
            - use for loop.
            - set a variable "bulls_count"

        - to get the number of cows:
            - get the frequency hashmap of numbers inside secret:
                - secret_number_freq = Counter()

            - initiate dictionary (python dictionary {})
                - loop over the guess string.
                - and see if the number from guess is inside secret_number_freq.
                    - if yes, then add that to the dictionary with the count as value.
                - after the loop, we will get the length of the dictionary
                - after the length we will get the difference of the dictionary length and the bulls_count.
                - and set that as y.
        """

        bulls_count = 0
        cows_count = 0
        result = ""

        freq = {}

        secret_number_freq = Counter(secret)

        # get the number of bulls
        for i in range(len(secret)):
            if secret[i] == guess[i]:
                # new_secret = secret.replace(secret[i], "")
                # new_guess = guess.replace(guess[i], "")
                bulls_count += 1

        for c in guess:
            if c in secret_number_freq:
                # freq[c] += 1
                freq[c] = freq.get(c, 0) + 1

                secret_number_freq[c] -= 1
                if secret_number_freq[c] == 0:
                    del secret_number_freq[c]

        for n in freq.values():
            cows_count += n

        cows_count = cows_count - bulls_count

        # now we have both bulls_count and cows_count.
        result = f"{bulls_count}A{cows_count}B"

        return result
```



## New solution

```python
def calculate_bulls_and_cows(
    secret_digits: list[int], guess_digits: list[int]
) -> tuple[int, int]:
    if not secret_digits:
        raise ValueError("Secret code must be set before calculating bulls and cows")

    bulls_count = 0
    for i in range(len(secret_digits)):
        if secret_digits[i] == guess_digits[i]:
            bulls_count += 1

    secret_counter = Counter(secret_digits)
    guess_counter = Counter(guess_digits)

    total_matches = 0
    for digit in guess_counter:
        if digit in secret_counter:
            total_matches += min(guess_counter[digit], secret_counter[digit])

    cows_count = total_matches - bulls_count
    return bulls_count, cows_count
```
