function navbarController(sessionFactory, $rootScope, $window, $location, $timeout, userService) {

    this.isLogged = sessionFactory.isLogged;
    this.sessionFactory = sessionFactory;
    this.$rootScope = $rootScope;
    this.$location = $location;
    this.userService = userService;

    $rootScope.$on('loginStatusChanged', (event, isLogged) => {
        this.isLogged = isLogged;
        this.user = sessionFactory.user;
    });

    this.load = () => {
        this.userService.getOne(this.userId).then((res) => {
            this.user = res.data;
        });
    };

    this.logout = () => {
        this.sessionFactory.isLogged = false;
        this.sessionFactory.user = {};
        this.sessionFactory.token = null;
        this.$rootScope.$emit('loginStatusChanged', false);
        this.isLogged = false;
        this.$location.path('/login');
    };

    this.load();
}
