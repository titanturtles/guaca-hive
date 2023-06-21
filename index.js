const express = require('express')
const body_parser = require('body-parser')
const app = express()

app.get('/', function (req, res) {
    console.log('req.params', req.params);
    res.send('received')
})

app.post('/', body_parser, (req, res) => {
    console.log('req.body', req.body)
    res.send('received')
})

app.listen(20002)
