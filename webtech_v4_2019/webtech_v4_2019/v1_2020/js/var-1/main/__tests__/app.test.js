const app = require('./../app')

const input0 = 10
const input1 = 'unforseen problems'
const dictionary0 = ['a', 10]
const dictionary1 = ['a', 'the', 'on']
const input2 = 'a cat on the roof'
const input3 = 'The Cat on the Roof'


describe('Testing calculateFrequencies function', () => {
    test('input parameter should be a string or a String object', (done)=> {
        expect(() => {
            app.calculateFrequencies(input0, dictionary0)
        }).toThrowError('Input should be a string')
        done()
    })
    test('dictionary parameter should contain strings or String objects', (done) => {
        expect(() => {
            app.calculateFrequencies(input1, dictionary0)
        }).toThrowError('Invalid dictionary format')
        done()
    })
    test('function should return a frequency distribution object', (done) => {
        let processedInput = app.calculateFrequencies(input1, dictionary1)
        expect(processedInput).toStrictEqual({unforseen : 0.5, problems : 0.5})
        done()
    })
    test('function should take stop words into account', (done) => {
        let processedInput = app.calculateFrequencies(input2, dictionary1)
        expect(processedInput).toStrictEqual({cat : 0.5, roof : 0.5})
        done()
    })
    test('function should work for capital letter strings', (done) => {
        let processedInput = app.calculateFrequencies(input3, dictionary1)
        expect(processedInput).toStrictEqual({cat : 0.5, roof : 0.5})
        done()
    })
});