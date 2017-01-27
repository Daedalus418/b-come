function loadSaisonController(formationService, saisonService, $timeout) {
    this.formation = {};
    this.formationService = formationService;
    this.saison = {};
    this.saisonService = saisonService;
    this.actual = true;
    this.actualSaison = "";
    // this.load = () => {
    //     this.formationService.getAll().then((res) => {
    //         this.formations = res.data;
    //     });
    // };
    this.load = () => {
      this.saisonService.getAll().then((res) => {
          this.saisons = res.data;
          console.log(this.saisons);
          this.actualFormation = this.saisons[0].saison.idformation;
          console.log(this.actualFormation);

    });

    this.loadSaison = () => {
            this.formationService.getAll().then((res) => {
              this.formations = res.data;
              console.log(this.formations);
        });
    };
  };

    this.load();
    this.loadSaison();
}
