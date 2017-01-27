function createUserController(userService, sessionFactory, $timeout, $location, $rootScope) {

    this.userService = userService;
    this.sessionFactory = sessionFactory;
    this.$timeout = $timeout;
    this.$location = $location;
    this.$rootScope = $rootScope;
    this.postes = ["Ingénieur", "Employé", "Ouvrier"];

    this.createAccount = () => {
        this.userService.create({
            last_name: this.last_name,
            first_name: this.first_name,
            email: this.email,
            password: this.password,
            poste: this.poste,
            credit: this.credit,
            isAdmin: this.isadmin
        }).then((res) => {
            this.loginMessage = {};
            this.loginMessage.type = "success";
            this.loginMessage.title = "Compte créé !";
            this.loginMessage.message = "Avec succès et gloire !";
        }).catch((res) => {
            this.loginMessage = {};
            this.loginMessage.type = "error";
            this.loginMessage.title = "Erreur de création de compte";
            this.loginMessage.message = res.data;
        });
    };
}
