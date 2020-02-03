# Subject 2 (2.5 pts)
# TOPIC: Javascript

# Given the function `calculateFrequencies(input, stopWords)` where:
- `input` is a string (e.g. "This is an orange cat")
- `stopWords` is a vector containing strings.

# Complete the following tasks:
- `input` should be of type `string` or `String`. If another type is given an `Error` is thrown with the message `Input should be a string or a String`; (0.5 pts)
- `dictionary` is an array of `string` or `String`. If at least an element is not a `string` an `Error` is thrown with the message `Invalid dictionary format`; (0.5 pts)
- the function will calculate the relative frequencies of words in input and return a dictionary containing words as keys and frequencies as values (e.g. for the string 'orange cat' the result will be {orange : 0.5, cat : 0.5}); (0.5 pts)
- if stopWords contains any words, they will be ignored in the result (e.g. for the string 'the orange cat' with 'the' defined as a stopword the result will be {orange : 0.5, cat : 0.5}); (0.5 pts)
- the function also returns the correct result for words starting with a capital letter, which are considered identical to their lowercase variant. (0.5 pts)