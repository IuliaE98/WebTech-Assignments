#Subiect 3 (2.5 pts)
#TOPIC: REST

# Dată fiind aplicația `app` completați metodele `PUT` si `DELETE` la adresa `/ships/id`:

- Daca se incerca modificarea unei nave inexistente raspunsul trebuie sa fie `{"message": "not found"}`. Codul de raspuns va fi: `404`; (0.5 pts)
- Daca se incearca modificarea unei nave existente raspunsul trebuie sa fie `{"message": "accepted"}`. Codul de raspuns va fi: `202`; (0.5 pts)
- O cerere get ulterioara la adresa navei editate trebuie sa reflecte modificarile. Codul de raspuns va fi: `200`; (0.5 pts)
- Daca se incearca stergerea unei nave existente raspunsul trebuie sa fie `{"message": "accepted"}`. Codul de raspuns va fi: `202`; (0.5 pts)
- O cerere get ulterioara la adresa navei sterse trebuie sa returneze `{"message": "not found"}`. Codul de raspuns va fi: `404`; (0.5 pts)