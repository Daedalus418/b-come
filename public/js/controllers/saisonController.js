function saisonController(saisonService, $timeout) {
  this.saison = {};
    this.saisonService = saisonService;

    this.load = () => {
        this.saisonService.getAll().then((res) => {
            this.saisons = res.data;
        });
    };

    this.create = () => {
      debugger;
      this.saisonService.create(this.saison).then(() => {
        // this.nom = '';
        // this.prenom = '';
        // this.email = '';
        // this.telephone = '';
        // this.password = '';
        // this.fonction = '';
        // this.indice = '';
      });
    };

    this.update = (saison) => {
        this.saisonService.update(saison._id, saison).then(() => {
            this.load();
        });
    };

    this.delete = (saison) => {
        this.saisonService.delete(saison._id).then(() => {
            this.load();
        });
    };

    this.load();
}
