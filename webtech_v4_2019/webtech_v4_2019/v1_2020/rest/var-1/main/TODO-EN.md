#Subject 3 (2.5 pts)
#TOPIC: REST

# Having the following application developed using NodeJS, complete the `PUT` and `DELETE` methods on path `/ships/id` :

- If attempting to update a non existent ship the response should be `{"message": "not found"}`. Response status code should be: `404`; (0.5 pts)
- If correctly updating an existent ship the response should be: `{"message": "accepted"}`. Response status code should be: `202`; (0.5 pts)
- A subsequent request for the edited ship should show the modifications. Response status code should be: `200`; (0.5 pts)
- If correctly deleting an existent ship the response should be: `{"message": "accepted"}`. Response status code should be: `202`; (0.5 pts)
- A subsequent request for the deleted ship should return `{"message": "not found"}`. Response status code should be: `404`; (0.5 pts)
