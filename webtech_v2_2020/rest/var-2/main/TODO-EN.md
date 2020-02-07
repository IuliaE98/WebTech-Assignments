#Subject 3 (2.5 pts)
#TOPIC: REST

# Having the following application developed using NodeJS, complete the `GET` method on path `/ships` :
- supported query params are `page` and `pageSize`

- If no page or page size is specified, all ships are returned; (0.5 pts)
- If a page is specified, but no page size, the page size is assumed to be 5 and the nth page of 5 is returned (0.5 pts)
- If both page and page size are specified, the page-th page of the specified size is returned (0.5 pts)
- If a malformed page or page size is specified, all ships are returned; (0.5 pts)
- If the specified page is beyond the last available record, an empty array of pages is returned. (0.5 pts)