const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/about', (req,res, next)=>{
    res.render('about')
});

app.get('/blogs/create', (req,res, next)=>{
    res.render('create')
});

app.get('/about-us', (req,res, next)=>{
    res.redirect('/about');
});

app.get('/', (req, res, next)=>{
    res.render('index');
});

app.use((req, res, next)=>{
    res.status(404).render('404');
})

app.listen(3000);