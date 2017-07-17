const express = require('express')
const app = express()

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/items', function (req, res) {
  res.send({author : author, categories: ['Categoria 1','Categoria 2'],items:[x1,x2]})
})

app.get('/items/:id', function (req, res) {
  res.send({author : author, item : produtosMap[req.params.id]})
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})

var author = {
      "name":"Nome 1",
      "lastname":"Last Name 1"
    }

var x1 = {
      "id":"X1",
      "title":"Titulo 1",
      "price":{
        "currency": "R$",
        "amount":1100,
        "decimals":99
      },
      "picture":"http://lorempixel.com/150/150/abstract/",
      "condition":"10 vezes",
      "free_shipping":true,
      "sold_quantity":1,
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  }

var x2 ={
      "id":"X2",
      "title":"Titulo 2",
      "price":{
        "currency": "R$",
        "amount":2200,
        "decimals":88
      },
      "picture":"http://lorempixel.com/150/150/sports/",
      "condition":"a vista",
      "free_shipping":true,
      "sold_quantity":1,
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  }

var produtosMap = {'X1':x1,'X2':x2}
