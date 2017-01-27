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
        // this.nom = '';
        // this.prenom = '';
        // this.email = '';
        // this.telephone = '';
        // this.password = '';
        // this.fonction = '';
        // this.indice = '';
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
