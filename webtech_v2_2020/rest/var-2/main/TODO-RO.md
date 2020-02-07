#Subiect 3 (2.5 pts)
#TOPIC: REST

# Dată fiind aplicația `app` completați metoda `GET` la adresa `/ships`:
- se pot utiliza parametrii de query `page` si `pageSize`

- Daca nu s-a specificat nici pagina si marimea paginii, se vor returna toate navele (0.5 pts)
- Daca s-a specificat pagina, dar nu page size se va presupune ca marimea paginii este 5 si se va returna a n-a pagina de 5 nave (0.5 pts)
- Daca s-au specificat atat pagina cat si marimea unei pagini, se va returna pagina specificata de marimea specificata (0.5 pts)
- Daca s-a specificat o pagina malformata sau o marime de pagina malformata se vor returna toate navele; (0.5 pts)
- Daca pagina specificata este dincolo de ultima nava, se va returna un array vid. (0.5 pts)