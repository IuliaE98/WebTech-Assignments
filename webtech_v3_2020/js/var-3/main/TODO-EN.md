# Subject 2 (2.5 pts)
# Topic: Javascript

# Having the class `Queue` from file `index.js` implement the following tasks: 
- Class `Queue` should contain a property called `items`, of type `Array` that will be initialized with an empty array (0.5 pts);
- Implement method `insert` that accepts `element` as an argument, which will be added in the array, according to the queue's principle;
- The method `insert` will allow only `string` elements to be added into the queue and will throw an Error with the text `Invalid Type` for other types.
- Implement method `extract` that will return an `element` from the array, according to the queue's principle;
- If the array is empty and the `extract` method is called, it will throw an Error with the text `Invalid Operation`;