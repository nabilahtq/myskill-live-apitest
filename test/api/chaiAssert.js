const { expect } = require('chai')
const request = require('supertest')
const DATA = require('../../data/userData.js')

describe('Post Request Example', () => {
    const response = request('https://petstore.swagger.io/v2')
    .post('/user')
    .send(DATA.CREATE_USER_DATA)

    it('reponse status equal to 200', async () => {
        //Check respone status harus sama dengan 200
        expect((await response).status).to.equal(200)
    })

    it('reponse body to haveOwnProperty', async () => {
        //Expect dalam body response terdapat value message
        expect((await response).body).to.haveOwnProperty('message')
    })

    //Reporting in mochawesome

})