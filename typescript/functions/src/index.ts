import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import list from './hostels';


admin.initializeApp();

const app = express();

app.set('views engine', 'pug');


app.get('/', function (req, res) {
    res.render('index.pug', {
        title: 'CV Anna',
        firstName: 'Anna',
        lastName: 'Vessereau',
        introduction: 'A propos',
        description: 'Je suis une grande aventurière dans l\'âme, j\'aime les challenges et les défis, ce qui me pousse à dépasser mes limites! A la recherche de renouveau et ayant une bonne capacité d\'adaptation, j\'aime découvrir et apprendre de nouvelles choses afin de maintenir mon cerveau en éveil et pouvoir ainsi partager mes connaissances si nécessaire!',
        contact: 'Contact',
        phone: 'Téléphone',
        number: '0673855635',
        email: 'Email',
        mail: 'anna.vessereau@gmail.com',
        address: 'Adresse',
        location: '17 rue Ferdinand Buisson',
        zipCode: '92110',
        city: 'Clichy',
        experiences: 'Expériences',
        date: '2015-2018',
        job: 'Conseillère de vente en maroquinerie',
        brand: 'Michael Kors',
        position: 'BHV Marais, Galeries Lafayette',
        formation: 'Formation',
        year: '2015',
        formationName: 'Formation Anglais professionnel du Tourisme et TOEIC',
        area: 'CFC, Arles',
        likes: 'Ce que j\'aime',

    });
});


app.get('/list', (req, res) => {
    res.send({
        status: "success",
        data: list
    });
});

app.get('/:id', (req, res) => {
    const hostelId = parseInt(req.params.id, 10);
    const hostel = list.find(hostel => hostel.id === hostelId);

    if (hostel) {
        res.send({
            status: "success",
            data: hostel
        });
    } else {
        res.status(404);
        res.send({
            status: "error",
            error: "Hostel not found"
        });
    }
});

app.delete('/:id', (req, res) => {
    const hostelId = parseInt(req.params.id, 10);
    const position = list.findIndex(hostel => hostel.id === hostelId);

    if (position !== -1) {
        list.splice(position, 1);
    }

    res.send({
        status: "success"
    });
});

app.post('/list', (req, res) => {
    const newHostel = req.body;

    newHostel.id = 'test';
    newHostel.roomNumbers = 0;
    newHostel.rooms = [];
    list.push(newHostel);

    res.send({
        status: "success",
        data: list
    });
});

app.put('/:id', (req, res) => {
    const hostelId = parseInt(req.params.id, 10);
    const hostel = list.find(hostel => hostel.id === hostelId);

    if (hostel) {
        hostel.name = req.body.name;
        res.send({
            status: "success",
            data: hostel
        });
    } else {
        res.send({
            status: "error",
            error:  "not found"
        });
    }
});




export const hostels = functions.https.onRequest(app);

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
//
//export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from garden!");
//});