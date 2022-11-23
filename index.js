var express =require('express');
var app=express();

app.get('/',(req,res,next) => {
    res.send('hello world');
    next();
})


app.listen('8000', () => console.log('sever started on port 8000 ... '));