const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.listen(3030, () => console.log('Levantando un servidor con Express'));

app.get ('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get ('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.post ('/login', (req, res) => {
    /*console.log(req.body);*/
    res.redirect('/');
});

app.get ('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.post ('/register', (req, res) => {
    res.redirect('/');
});

