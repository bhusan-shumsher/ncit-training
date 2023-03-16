var express = require('express');
var app = express();

const port = process.env.port || 8080;
// set view engine to ejs 
app.set('view engine','ejs');

// index page 
app.get('/',(req,res)=>{
    res.render('pages/index');
})

app.get('/about',(req,res)=>{
    res.render('pages/about');
})

app.listen(port,()=>{
    console.log('Server running on 8080');
})