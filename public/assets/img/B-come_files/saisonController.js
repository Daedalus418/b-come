function saisonController(saisonService, $timeout) {
  this.saison = {};
    this.saisonService = saisonService;

    this.load = () => {
        this.saisonService.getAll().then((res) => {
            this.saisons = res.data;
        });
    };

    this.create = () => {
      this.saisonService.create(this.saison).then(() => {
        // this.saison.nomsaison = '';
        // this.saison.description = '';
        // this.saison.idformation = '';
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
