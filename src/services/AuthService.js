import axios from 'axios'

const API_URL = 'https://6850666ee7c42cfd179891d7.mockapi.io/users';

export const loginRequest = async (username, password, email) => {
    try{
        const response = await axios.get(API_URL)
        const users = response.data

        const user = users.find((user) => user.username === username && user.password === password && user.email === email && user.position === position)

        return user ? {success: true, user} : {success: false}     
    }catch{
        console.error("Erro na autenticação", error)
        return {success: false}
    }
}