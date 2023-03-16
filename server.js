var express = require('express');
var app = express();

// set view engine to ejs 
app.set('view engine','ejs');

// index page 
app.get('/',(req,res)=>{
    res.render('pages/index');
})

app.get('/about',(req,res)=>{
    res.render('pages/about');
})

app.listen(8080,()=>{
    console.log('Server running on 8080');
})