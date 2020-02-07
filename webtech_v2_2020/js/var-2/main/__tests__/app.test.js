const app = require('./../app')

describe('Testing RubberDuck constructor', () => {
    test('Duck name must be string or String', (done)=> {
        expect(() => {
            let duckling = new app.Duck(4)
        }).toThrowError('name must be string or String')
        done()
    })
    test('Duck can swim', (done) => {
        let duckling = new app.Duck('duckie')
        expect(duckling.swim()).toBe('duckie is swimming')
        done()
    })
    test('RubberDuck inherits Duck', (done) => {
        let duckling = new app.RubberDuck('rubber duckie')
        expect((duckling instanceof app.Duck) && (duckling instanceof app.RubberDuck)).toBe(true)
        done()
    })
    test('RubberDuck can float', (done) => {
        let duckling = new app.RubberDuck('duckie')
        expect(duckling.float()).toBe('duckie floats')
        done()
    })
    test('RubberDuck cannot swim', (done) => {
        let duckling = new app.RubberDuck('duckie')
        expect(duckling.swim()).toBe("duckie can't swim, only float")
        done()
    })
})