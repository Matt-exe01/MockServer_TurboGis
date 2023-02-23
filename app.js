const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json({
    limit: '50mb'
  }));



app.get('/', (req, res) => {
    res.send('Server Online');
});

//! Fa il login di un'username !\\
app.post('/login', (req, res) => {
    let user = {
        username: req.body.username,
        pwd: req.body.password,
    };

    if (user.username == "Papa_Zanoni_IV" && user.pwd == "suca") {
        res.send('JWT Token');
    }
});

app.listen(9989, () => {
    console.log('Server listening on port 9989');
})