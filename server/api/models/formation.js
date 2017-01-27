import mongoose from 'mongoose';

const formationSchema = new mongoose.Schema({
    formation: {
        saison: Number,
        nomformation: String,
        image: String,
        description: String,
        date: String,
        place: Number,
        placedispo: Number,
        lien: String,
        lieu: String,
        contenu: {
            contenuUn: {
                lien: String,
                descriptioncontenu: String
            },
            contenuDeux: {
                lien: String,
                descriptioncontenu: String
            },
            contenuTrois: {
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

let model = mongoose.model('Formation', formationSchema);

export default class Formation {

    findAll(req, res) {
        model.find({}, (err, formations) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(formations);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, formation) => {
            if (err || !formation) {
                res.sendStatus(403);
            } else {
                res.json(formation);
            }
        });
    }

    create(req, res) {
      console.log(req.body);
        model.create(req.body,
            (err, formation) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(formation);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, req.body, (err, formation) => {
            if (err || !formation) {
                res.status(500).send(err.message);
            } else {
                res.json(formation);
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
