const { json } = require('express');
const express = require('express');

const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://usuariodb:uuM$bg-qHhPkvN8@cluster0.sveke.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(db => console.log('ddbb connect'))
    .then(err => console.error(err));

app.set('port', 5000);
app.use(morgan('dev'));
app.use(express.json());
app.use( '/routes',require("./routes/routes"));//El archivo routes lo que devuelve es un objeto
app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'))
});
