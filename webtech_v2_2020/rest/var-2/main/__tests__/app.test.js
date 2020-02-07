const request = require('supertest')
const app = require('./../app')

beforeAll((done) => {
    request(app).get('/create').send()
        .then(() => {
            done()
        })
})

describe('Test get /ships with pagination ', () => {
  
    test('Should return all the ships', (done) => {
        request(app).get('/ships').send().expect(200)
            .then(res => {
                let response = JSON.parse(res.text)
                expect(response).toHaveLength(10)
                done()
            })
    })

    test('First ship on the second page should be the sixth overall', (done) => {
        request(app).get('/ships?pageNo=1').send().expect(200)
            .then(res => {
                let response = JSON.parse(res.text)
                expect(response).toHaveLength(5)
                expect(response[0].id).toBe(6)
                done()
            })
    })

    test('Should be able to get page 2 with a page size of 3', (done) => {
        request(app).get('/ships?pageNo=2&pageSize=3').send().expect(200)
            .then(res => {
                let response = JSON.parse(res.text)
                expect(response).toHaveLength(3)
                expect(response[0].id).toBe(7)
                done()
            })
    })

    test('Should return all the ships for invalid pages and page sizes', (done) => {
        request(app).get('/ships?pageNo=a&pageSize=n').send().expect(200)
            .then(res => {
                let response = JSON.parse(res.text)
                expect(response).toHaveLength(10)
                done()
            })
    })

    test('Should return empty list for pages after the end of the data', (done) => {
        request(app).get('/ships?pageNo=1000').send().expect(200)
            .then(res => {
                let response = JSON.parse(res.text)
                expect(response).toHaveLength(0)
                done()
            })
    })


})



