const request = require('supertest')
const app = require('./../app')

beforeAll((done) => {
    request(app).get('/create').send()
        .then(() => {
            done()
        })
})

describe('Test put /ships/id and delete /ships/id', () => {
    test('If the user tries to update a non existent ship server should respond with status code 404 and {"message": "not found"}', (done) => {
        request(app).put('/ships/20')
            .send({
                name: "test ship",
                portOfSail: "Thessaloniki",
                displacement: 1000
            })
            .expect(404)
            .then(res => {
                expect(JSON.parse(res.text).message).toBe('not found')
                done()
            })
    })

    test('If request is correctly specified, it should modify the ship and respond with code 202 and {"message": "accepted"}', (done) => {
        request(app).put('/ships/5')
        .send({
            name: "test ship",
            portOfSail: "Thessaloniki",
            displacement: 1000
        })
        .expect(202)
        .then(res => {
            expect(JSON.parse(res.text).message).toBe('accepted')
            done()
        })
    })

    test('Result for the modified ship should be the expected one', (done) => {
        request(app).get('/ships/5')
            .send()
            .expect(200)
            .then(res => {
                let sample = {
                    id : 5,
                    name: "test ship",
                    portOfSail: "Thessaloniki",
                    displacement: 1000
                }
                expect(JSON.parse(res.text)).toStrictEqual(sample)
                done()
            })
    })

    test('If the ship exists, it should delete the ship and respond with code 202 and {"message": "accepted"}', (done) => {
        request(app).delete('/ships/5')
        .send()
        .expect(202)
        .then(res => {
            expect(JSON.parse(res.text).message).toBe('accepted')
            done()
        })
    })

    test('Requesting a deleted ship should get a reply code of 404 and a {"message": "not found"}', (done) => {
        request(app).get('/ships/5')
            .send()
            .expect(404)
            .then(res => {
                expect(JSON.parse(res.text).message).toBe('not found')
                done()
            })
    })

})



