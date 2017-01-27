function formationController(formationService, $timeout) {
    this.formation = {};
    this.formationService = formationService;

    this.load = () => {
        this.formationService.getAll().then((res) => {
            this.formations = res.data;
        });
    };

    this.create = () => {
        console.log(this.formation);
        this.formationService.create(this.formation).then(() => {
            // this.formation.formation.nomformation = '';
            // this.formation.formation.image ='';
            // this.formation.formation.date ='';
            // this.formation.formation.place ='';
            // this.formation.formation.lieu ='';
            // this.formation.formation.lien ='';
            // this.formation.formation.contenu.contenuUn.lien ='';
            // this.formation.formation.contenu.contenuUn.descriptioncontenu ='';
            // this.formation.formation.contenu.contenuDeux.lien ='';
            // this.formation.formation.contenu.contenuDeux.descriptioncontenu ='';
            // this.formation.formation.contenu.contenuTrois.lien ='';
            // this.formation.formation.contenu.contenuTrois.descriptioncontenu ='';
            // this.formation.formation.commentaire.commentaireUn.user ='';
            // this.formation.formation.commentaire.commentaireUn.like ='';
            // this.formation.formation.commentaire.commentaireUn.commentaire ='';
            // this.formation.formation.commentaire.commentaireDeux.user ='';
            // this.formation.formation.commentaire.commentaireDeux.like ='';
            // this.formation.formation.commentaire.commentaireDeux.commentaire ='';
            // this.formation.formation.commentaire.commentaireTrois.user ='';
            // this.formation.formation.commentaire.commentaireTrois.like ='';
            // this.formation.formation.commentaire.commentaireTrois.commentaire ='';
            // this.formation.formation.commentaire.commentaireQuatre.user ='';
            // this.formation.formation.commentaire.commentaireQuatre.like ='';
            // this.formation.formation.commentaire.commentaireQuatre.commentaire ='';
            // this.formation.formation.commentaire.commentaireCinq.user ='';
            // this.formation.formation.commentaire.commentaireCinq.like ='';
            // this.formation.formation.commentaire.commentaireCinq.commentaire ='';
            // this.formation.formation.commentaire.commentaireSix.user ='';
            // this.formation.formation.commentaire.commentaireSix.like ='';
            // this.formation.formation.commentaire.commentaireSix.commentaire ='';
            // this.formation.formation.quizz.userUn.nom ='';
            // this.formation.formation.quizz.userUn.result ='';
            // this.formation.formation.quizz.userDeux.nom ='';
            // this.formation.formation.quizz.userDeux.result ='';
            // this.formation.formation.quizz.userTrois.nom ='';
            // this.formation.formation.quizz.userTrois.result ='';

        });
    };

    this.update = (formation) => {
        this.formationService.update(formation._id, formation).then(() => {
            this.load();
        });
    };

    this.delete = (formation) => {
        this.formationService.delete(formation._id).then(() => {
            this.load();
        });
    };

    this.load();
}
