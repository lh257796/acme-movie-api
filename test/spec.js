const { assert } = require("chai")
const { syncAndSeed} = require("../db")
const app = require('supertest')(require('../app'));

beforeEach(() => {
    syncAndSeed()
})

describe('Testing Hello', () => {
    describe('First ever test here:', () => {
        it('should return a green checkmark if this test is present', () => {
            assert.equal(true,1)
        })
    })
})

describe('our home page', ()=> {
    it('has access to GET homepage', async()=> {
      const response = await app.get('/');
      expect(response.status).to.equal(200);
    })
})
