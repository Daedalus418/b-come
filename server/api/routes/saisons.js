import express from 'express';
import Saison from '../models/saison.js';

let router = express.Router();

module.exports = (app) => {

    var saison = new Saison();

    router.get('/steph', saison.findAll);

    router.get('/formation:id', saison.findById);

    router.post('/formation', saison.create);

    router.put('/formation:id', saison.update);

    router.delete('/formation:id', saison.delete);

    app.use('/saisons', router);

};
