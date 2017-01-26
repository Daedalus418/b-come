function loginController(userService, sessionFactory, $location, $rootScope) {

    this.userService = userService;
    this.sessionFactory = sessionFactory;
    this.$location = $location;
    this.$rootScope = $rootScope;

    this.login = () => {
        this.userService.connect({
            last_name: this.last_name,
            password: this.password
        }).then((res) => {
            this.sessionFactory.token = res.data.token;
            this.sessionFactory.user = res.data.user;
            this.sessionFactory.isLogged = true;
            this.$rootScope.$emit('loginStatusChanged', true);
            this.loginMessage = null;
            this.$location.path('/');
        }).catch(() => {
            this.sessionFactory.isLogged = false;
            this.$rootScope.$emit('loginStatusChanged', false);
            this.loginMessage = {};
            this.loginMessage.type = "error";
            this.loginMessage.title = "Erreur de connexion";
            this.loginMessage.message = "Erreur de login ou de mot de passe";
        });
    };
}
