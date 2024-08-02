const express = require('express')
const server = express()

server.listen(3000)

server.get('/',(req,res)=>{
    res.send('<h1>Olá expressJS</h1>')
})

server.get('/sobre',(req,res)=>{
    res.send('<h2>Esse é o servidor do 3DS</h2>')
})

server.get('/servicos',(req,res)=>{
    res.send('<h2>Esse é o servidor de serviço do 3DS</h2>')
})

server.use((req,res)=>{
    res.status(404).send('Lamento, não encontramos esse recurso!')
})

