const express = require('express')
const app = express()
const porta=process.env.PORT || 8080

app.use(express.static(__dirname + '/dist/'))
//responder a requisicoes por meio da rota get

app.get('/',function(req,res){
    res.sendfile(__dirname + '/dist/index.html')
})

app.listen(porta,function(){
    console.log('Servidor web funcionando com express')
})