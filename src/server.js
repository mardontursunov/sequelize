const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000
const app = express()
const db = require('./config/database')

db.authenticate()
    .then(() => console.log("Database has connected successfuly!"))
    .catch((error) => console.log(error))


app.get('/', (req, res) => res.send("Index"))

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))