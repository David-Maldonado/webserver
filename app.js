const express = require('express');
require('dotenv').config();
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials')


app.use(express.static('public'));

app.get('/', (req,res)=> {
    res.render('home', {
        titulo: 'Curso de NodeJs',
        subtitulo: 'Es una simple práctica de un curso de Web Server con nodejs utilizando una template de'
    });
});

app.get('/generic', (req,res)=> {
   res.render('generic', {
    titulo: 'Curso de NodeJs',
   })
});
app.get('/elements', (req,res)=> {
    res.render('elements', {
        titulo: 'Curso de NodeJs',
    })
});
app.get('*', (req,res)=> {
    res.render('404', {
        titulo: 'Curso de NodeJs',
    })
});


app.listen(port, ()=> {
    console.log('Server running on port: ', port);
})