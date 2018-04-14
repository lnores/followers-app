
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));


//.. 
// add api endpoint
app.all('*', (req, res) => {
    res.status(200).sendFIle(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 8080);