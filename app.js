const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json({
    limit: '50mb'
  }));

app.use(cors());


let projects = [];

for (let i = 1; i <= 5; i++) {
    projects.push({id: i, name: `Progetto numero ${i+1}`, description: `Descrizione del progetto numero ${i+1}`})
};


app.get('/', (req, res) => {
    setTimeout(() => {
        res.json({"title": 'Server Online'});
    }, 2000)
});

//! Fa il login di un utente !\\
app.post('/login', (req, res) => {
    let user = {
        username: req.body.username,
        pwd: req.body.password,
    };

    if (user.username == "suca" && user.pwd == "suca") {
        res.status(201).send('JWT Token');
    } else {
        res.status(403).send('Coglione');
    }
});


app.get('/projects/:id', (req, res) => {
    let index = projects.map(project => project = project.id).filter(project => project == req.params.id);

    let response = {
        id: index,
        name: `Progetto numero ${index}`,
        date: '11/12/2022',
        nMeasurements: 24,
        nUsers: 6,
        description: `Descrizione del progetto numero ${index}`,
        detailedDescription: `Questa è la descrizione dettagliata del porgetto numero ${index}.Serve per testare gli endpoint e l'interfaccia realizzata finora`
    }

    res.send(response);
});

//! Restituisce i progetti a cui partecipa un utente !\\
app.get('/projects', (req, res) => {
    res.send(JSON.stringify(projects));
});




app.listen(9989, () => {
    console.log('Server listening on port 9989');
});