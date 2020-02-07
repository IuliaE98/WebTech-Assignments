const Queue = require("./../index");

test("Queue should have property named items of type Array", (done) => {
    const queue = new Queue();
    const property = Object.getOwnPropertyNames(queue).find(prop => prop === 'items');
    expect(property).toBeTruthy();
    expect(queue[property]).toBeInstanceOf(Array);
    expect(queue[property].length).toBe(0);
    done();
})

test("Insert method should insert element according to FIFO principle", (done) => {
    const queue = new Queue();
    queue.insert('first');
    queue.insert('second');
    expect(queue.items.length).toBe(2);
    expect(queue.items.indexOf('second')).toBe(1);
    done();
})

test("Insert method should allow only string elements", (done) => {
    const queue = new Queue();
    expect(() => {
        queue.insert(50)
    }).toThrowError('Invalid Type');
    done();
})

test("Extract method should return the first element from the array", (done) => {
    const queue = new Queue();
    queue.items.push("first");
    queue.items.push("second");
    queue.items.push("third");
    const first = queue.extract();
    expect(first).toBe('first');
    expect(queue.items.length).toBe(2);
    done();
})

test("Extract method should throw an error if it's called on an empty array", (done) => {
    const queue = new Queue();
    expect(() => {
        queue.extract()
    }).toThrowError('Invalid Operation');
    done();
})