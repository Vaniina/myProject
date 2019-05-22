import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import list from './hostels';


admin.initializeApp();

const app = express();
app.use(bodyParser.json());


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