function loadSaisonController(formationService, saisonService, $timeout, sessionFactory) {
    this.userId = sessionFactory.user._id;
    console.log(this.userId);
    this.formation = {};
    this.formationService = formationService;
    this.saison = {};
    this.saisonService = saisonService;
    this.actual = true;
    this.actualSaison = "";
    this.index0 = false;
    this.index1 = false;
    this.index2 = false;
    this.index3 = false;
    this.index4 = false;
    this.index5 = false;
    this.index6 = false;
console.log(this.index0);


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
              $timeout(() => {
                $('.modal').modal();
              }, 0);
        });
    };
  };

    this.load();
    this.loadSaison();

    this.toggled = (index) => {
    this.test = this.index+index;
     this.test = !this.test;
    }
}
