import mongoose from 'mongoose';

const saisonSchema = new mongoose.Schema({
    saison: {
        idSaison: Number,
        nomsaison: String,
        description: String,
        idformation: String
    }
});

let model = mongoose.model('Saison', saisonSchema);

export default class Saison {

    findAll(req, res) {
        model.find({}, (err, saisons) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(saisons);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, saison) => {
            if (err || !saison) {
                res.sendStatus(403);
            } else {
                res.json(saison);
            }
        });
    }

    create(req, res) {
        console.log(req.body);
        model.create(req.body,
            (err, saison) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(saison);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, req.body, (err, saison) => {
            if (err || !saison) {
                res.status(500).send(err.message);
            } else {
                res.json(saison);
            }
        });
    }

    delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.sendStatus(200);
            }
        });
    }
}
