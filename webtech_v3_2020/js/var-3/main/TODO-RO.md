# Subiect 2 (2.5 pts)
# Tematica: Javascript

# Avand clasa `Queue` din fisierul `index.js` sa se implementeze urmatoarele functionalitati: 
- clasa `Queue` trebuie sa contina o proprietate numita `items`, de tip `Array` care va fi initializata cu un vector gol (0.5 pts);
- se va implementa metoda `insert` ce va primi ca parametru un `element` care va fi adaugat in vector, conform principiului cozii;
- metoda `insert` va permite adaugarea in coada doar a elementelor de tip `string` si va arunca o eroare cu textul `Invalid Type` pentru elementele de alt tip.
- se va implementa metoda `extract` ce va returna un `element` din vector, conform principiului cozii;
- in cazul in care vectorul este gol si se apeleaza metoda `extract`, se va arunca o eroare cu textul `Invalid Operation`;