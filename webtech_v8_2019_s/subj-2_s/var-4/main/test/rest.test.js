let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server')
let should = chai.should()

chai.use(chaiHttp)

describe('authors', () => {
	describe('/POST authors/id/books /GET authors/id/books', () => {
		before((done) => {
			chai.request(server)
				.get('/create')
				.send()
				.end((err, res) => {
					res.should.have.status(201)
					should.exist(res.body)
					res.body.should.have.property('message').eql('created')
					done()
				})			
		})
		it('it should return an error', (done) => {
			chai.request(server)
				.post('/authors/11/books')
				.send({title : 'some title', pages : 100})
				.end((err, res) => {
					res.should.have.status(404)
					should.exist(res.body)
					console.warn(res.body)
					res.body.should.have.property('message').eql('not found')
					done()
				})
		})
		it('it should return an error', (done) => {
			chai.request(server)
				.get('/authors/11/books')
				.end((err, res) => {
					res.should.have.status(404)
					should.exist(res.body)
					res.body.should.have.property('message').eql('not found')
					done()
				})
		})
		it('it should add a book', (done) => {
			chai.request(server)
				.post('/authors/3/books')
				.send({title : 'some title', pages : 100})
				.end((err, res) => {
					res.should.have.status(201)
					should.exist(res.body)
					res.body.should.have.property('message').eql('created')
					done()
				})
		})
		it('result should be in get listing', (done) => {
			chai.request(server)
				.get('/authors/3/books')
				.end((err, res) => {
					res.should.have.status(200)
					should.exist(res.body)
					res.body.should.be.a('array')
					res.body.length.should.be.eql(1)
					done()
				})
		})
		it('result should be what we sent', (done) => {
			chai.request(server)
				.get('/authors/3/books')
				.end((err, res) => {
					res.should.have.status(200)
					should.exist(res.body)
					res.body.should.be.a('array')
					res.body.should.deep.include({id: 1, title : 'some title', pages : 100, authorId : 3})
					done()
				})
		})		

	})
})

