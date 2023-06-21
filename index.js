const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.get('/', function (req, res) {
    console.log('req.params', req.params);
    res.send('received')
})

app.post('/', (req, res) => {
    console.log('req.body', req.body)
    res.send('received')
})

app.post('/api/health', (req, res) => {
    console.log(new Date().toISOString(), '/api/health', req.body)
    res.send('/api/health received')
})

app.post('*', (req, res) => {
    console.log('*', req.body)
    res.send('* received')
})

app.listen(20002)
console.log('listening to port 20002')
