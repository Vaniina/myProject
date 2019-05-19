import * as functions from 'firebase-functions';
import * as cors from "cors";

import express = require('express');
import list from './hostels';

const app = express();
app.use(cors({ origin: true }))


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
            status: "error"
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

export const hostels = functions.https.onRequest(app);

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
//
//export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from garden!");
//});