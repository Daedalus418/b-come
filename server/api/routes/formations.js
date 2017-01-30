import express from 'express';
import Formation from '../models/formation.js';

let router = express.Router();

module.exports = (app) => {

    var formation = new Formation();

    router.get('/formation', formation.findAll);

    router.get('/formation:id', formation.findById);

    router.post('/formation', formation.create);

    router.put('/formation:id', formation.update);

    router.delete('/formation:id', formation.delete);

    app.use('/formations', router);

};
