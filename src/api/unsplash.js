import axios from "axios"

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0wffO7H8FG47kNP9JVYQzJa2dB9c-T71g4Wxf6nguBg'
    }
})