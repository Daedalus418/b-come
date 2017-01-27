import express from 'express';
import Saison from '../models/saison.js';

let router = express.Router();

module.exports = (app) => {

    var saison = new Saison();

    router.get('/saison', saison.findAll);

    router.get('/saison:id', saison.findById);

    router.post('/saison', saison.create);

    router.put('/saison:id', saison.update);

    router.delete('/saison:id', saison.delete);

    app.use('/saisons', router);

};
