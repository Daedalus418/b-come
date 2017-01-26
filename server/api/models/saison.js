import mongoose from 'mongoose';

const saisonSchema = new mongoose.Schema({
    formation: {
        nomformation: String,
        image: String,
        description: String,
        date: Date,
        place: Number,
        placedispo: Number,
        lien: String,
        contenu: {
            ContenuUn: {
                lien: String,
                descriptioncontenu: String
            },
            ContenuDeux: {
                lien: String,
                descriptioncontenu: String
            },
            ContenuTrois: {
                lien: String,
                descriptioncontenu: String
            }
        },
        commentaire: {
            commentaireUn: {
                user: String,
                commentaire: String,
                like: Number
            },
            commentaireDeux: {
                user: String,
                commentaire: String,
                like: Number
            },
            commentaireTrois: {
                user: String,
                commentaire: String,
                like: Number
            },
            commentaireQuatre: {
                user: String,
                commentaire: String,
                like: Number
            },
            commentaireCinq: {
                user: String,
                commentaire: String,
                like: Number
            },
            commentaireSix: {
                user: String,
                commentaire: String,
                like: Number
            }
        },
        quizz: {
            userUn: {
                nom: String,
                result: Number
            },
            userDeux: {
                nom: String,
                result: Number
            },
            userTrois: {
                nom: String,
                result: Number
            }
        }
    }
});

let model = mongoose.model('Saison', saisonSchema);

export default class Saison {

    findAll(req, res) {
        console.log(req);
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
      console.log(req, res);
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
