# Subiect 2 (2.5 pts)
# Tematica: Javascript

# Avand urmatoarea functie function `calculateFrequencies(input, stopWords)` unde:
- `input` este un string sau un obiect String (ex. "This is a cat")
- `stopWords` este un vector ce contine o serie de string-uri sau obiecte String.

# Completati urmatoarele taskuri:
- `input` trebuie sa fie de tip `string` sau `String`. Daca este dat un input de alt tip se va arunca un `Error` cu mesajul `Input should be a string`; (0.5 pts)
- `dictionary` este un vector de elemente de tip `string`sa `String`. Daca cel putin un element nu este `string` se va arunca un `Error` cu mesajul `Invalid dictionary format`; (0.5 pts)
- functia calculeaza frecventele relative ale cuvintelor in input si returneaza un dictionar care are cuvintele drept chei si frecventele drept valori (ex. pentru string-ul 'orange cat' rezultatul va fi {orange : 0.5, cat : 0.5}); (0.5 pts)
- daca stopWords contine cuvinte, ele vor fi ignorate pentru calcularea frecventelor (ex. pentru 'the orange cat' cu 'the' in stopWords rezultatul va fi {orange : 0.5, cat : 0.5}); (0.5 pts)
- functia returneaza rezultatul corect si pentru cuvinte care incep cu o litera mare, care sunt considerate identice cu varianta fara litera mare. (0.5 pts)