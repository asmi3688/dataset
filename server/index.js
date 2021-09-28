const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
app.use(cors()) // To remove cors issue
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/users', (req, res) => {
    // API call to get user list
    axios('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const { data, status } = response
            return res.send({ data })
        })

}
)
app.listen(3001, () => console.log('Server ready'))