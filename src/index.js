const express = require('express');
const app = express();

// app.listen(3000, () => {
//     console.log() 
// })

//settings
app.set('port', process.env.PORT || 3000)


// Static files
app.use(express.static(__dirname + '/public'));

//server is lisening
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});