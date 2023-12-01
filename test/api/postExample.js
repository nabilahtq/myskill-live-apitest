const request = require('supertest')

describe('Post Request example', () => {
    it('Success create user', async () => {
        const response = request('https://petstore.swagger.io/v2')
        .post('/user')
        .send({
            "id": 0,
            "username": "cipung",
            "firstName": "Cipung",
            "lastName": "Gemoy",
            "email": "cipung123@gmail.com",
            "password": "Cipung123",
            "phone": "08976543218",
            "userStatus": 0
        })
        console.log((await response).status)
        console.log((await response).body)
    })

})