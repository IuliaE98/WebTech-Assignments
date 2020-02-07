let assert = require('assert')

describe('translate', function(){
	let translate = require('../app').translate
	it('returns translated text', function(){
		assert.equal(translate('this is a text', {this : 'acesta', is : 'este', a : 'un', text : 'text'}), 'acesta este un text')
	})
	it('returns translated text', function(){
		assert.equal(translate("this isn't a text", {this : 'acesta', is : 'este', a : 'un', text : 'text'}), "acesta isn't un text")
	})
	it('throws an exception', function(){
		assert.throws(() => translate('this is a text', null), {message : 'InvalidType'})
	})
	it('returns translated text', function(){
		assert.equal(translate('hic sunt dracones', []), 'hic sunt dracones')
	})
	it('returns translated text', function(){
		assert.equal(translate('hic sunt dracones', {hic : 'here', sunt : 'be', dracones : 'dragons'}), 'here be dragons')
	})
})