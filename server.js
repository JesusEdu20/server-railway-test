const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 8080

app.get('/', (req, res)=>{
    res.send('hello world')
})



app.listen(PORT, ()=>{console.log(`App listen on port ${PORT}`)})