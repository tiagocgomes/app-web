const express = require('express')//importando a blibioteca express
const app = express()//recebe express, retorna a aplicação express
const path = require('path')//permite usar caminhos 
const router = express.Router()//permite trabalhar com rotas

//Rotas
router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + '/pages/home.html'))
})//ecesso ao home

router.get('/contato', (req, res)=>{
    res.sendFile(path.join(__dirname + '/pages/contato.html'))
})

app.use(router)//define que a aplicação irá ultilizar as rotas

app.listen(3000, ()=>{
    console.log('servidor rodando')
})//ouvindo requisições
