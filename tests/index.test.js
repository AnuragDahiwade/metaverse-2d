const { default: axios } = require("axios");

function sum(num1, num2) {
    return num1 + num2;
}

const BACKEND_URL = "http://localhost:3000"

// describe('Authentication', () => {
//     test('User is able to sign up only once', async () => { 
//         let username = 'Anurag' + Math.random().toString();
//         let password = '12345678';
    
//         const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
//             username,
//             password,
//             type: "admin"
//         })

//         expect(response.statusCode).toBe(200);

//         const updatedResponse = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
//             username,
//             password,
//             type: "admin"
//         })
//         expect(updatedResponse.statusCode).toBe(400);
        
//     })
    
//     test('Sign up request fails if the username is empty',async () => {
//         let username = 'Anurag' + Math.random().toString();
//         let password = '12345678';
    
//         const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
//             password,
//             type: "admin"
//         })
//         expect(response).toBe(400)
//     })

//     test('Sign up request fails if the password is empty',async () => {
//         let username = 'Anurag' + Math.random().toString();
//         let password = '3344223';
    
//         const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
//             username,
//             type: "admin"
//         })
//     })

//     test('Sign In succeeds if the username and password are correct', async () => {
//         let username = `Anurag-${Math.random()}`
//         let password = `123456`

//         const response = axios.post(`${BACKEND_URL}/api/v1/signup`, {
//             username,
//             password,
//             type: "admin"
//         })

//         expect(response.statusCode).toBe(200)

//         const signInResponse = axios.post(`${BACKEND_URL}/api/v1/signin`, {
//             username,
//             password,
//         })
        
//         expect(signInResponse.statusCode).toBe(200)
//         expect(signInResponse.body.token).toBeDefined()
//     })

//     test('Sign In fails if the username and password are incorrect', async () => {
//         const username = `Anurag=${Math.random()}`
//         const password = '123456'

//         axios.post(`${BACKEND_URL}/api/v1/signup`, {
//             username,
//             password
//         })

//         const response = axios.post(`${BACKEND_URL}/api/v1/signin`, {
//             username: "ajhdihthisihsihi",
//             password
//         })

//         expect(response.statusCode).toBe(403)
//     })

// })


// describe("User Metada Endpoints", () => {
//     let token = ''
//     let avatarId = ''
//     beforeAll( async ()=> {
//         const username = `Anurag-${Math.random()}`
//         const password = `123456`

//         await axios.post(`${BACKEND_URL}/api/v1/signup`, {
//             username,
//             password,
//             type: "admin"
//         })

//         const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
//             username,
//             password 
//         })

//         token = response.data.token

//         const avatarResponse = await axios.post(`${BACKEND_URL}/api/v1/admin/avatar`, {
//             'imageUrl': 'data:image/jpeg;base64,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',
//             'name': 'anurag'
//         })

//         avatarId = avatarResponse.data.avatarId;

//     })

//     test('User cant update their metadata with a wrong avatarId', async () => {
//         const response = await axios.post(`${BACKEND_URL}/api/v1/user/metadata`, {
//             avatarId: "121212121221"
//         },{
//             headers: {
//                 "authorization": `Bearer ${token}`
//             }
//         })
//         expect(response.statusCode).toBe(400)


//     })

//     test('User can update their metadata with a avatarId', async () => {
//         const response = await axios.post(`${BACKEND_URL}/api/v1/user/metadata`, {
//             avatarId: `${avatarId}`
//         },{
//             headers: {
//                 "authorization": `Bearer ${token}`
//             }
//         })
//         expect(response.statusCode).toBe(200)
//     })

//     test('User is not able to update their metadata if the auth header is not present', async () => {
//         const response = await axios.post(`${BACKEND_URL}/api/v1/user/metadata`, {
//             avatarId: `${avatarId}`
//         })
//         expect(response.statusCode).toBe(403)
//     })


// })



