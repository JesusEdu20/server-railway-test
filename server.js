const express = require('express')
const app = express()


app.get('/start', (req, res)=>{
    res.send('hello world')
})