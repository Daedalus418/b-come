const routes = ($routeProvider, $httpProvider, $locationProvider) => {
    $locationProvider.html5Mode(false).hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'loadSaisonController',
            controllerAs: 'vm',
            resolve: {
                connected: checkIsConnected
            }
        })

        .when('/cours', {
            templateUrl: 'views/cours.html',
            resolve: {
                connected: checkIsConnected
            }
        })

        .when('/quizz', {
            templateUrl: 'views/quizz.html',
            resolve: {
                connected: checkIsConnected
            }
        })

        .when('/profil/:id', {
            templateUrl: 'views/profil.html',
            controller: 'profilController',
            controllerAs: 'vm',
            resolve: {
                connected: checkIsConnected
            }
        })

        .when('/admin', {
            templateUrl: 'views/admin.html',
            controller: 'formationController',
            controllerAs: 'vm',
            resolve: {
                connected: checkIsConnected
            }
        })
        .when('/adminCours', {
            templateUrl: 'views/adminCours.html',
            controller: 'adminCoursController',
            controllerAs: 'vm',
            resolve: {
                connected: checkIsConnected
            }
        })

        .when('/utilisateur/:id', {
            templateUrl: 'views/editUser.html',
            controller: 'editUserController',
            controllerAs: 'vm',
            resolve: {
                connected: checkIsConnected
            }
        })

        .when('/utilisateur', {
            templateUrl: 'views/createUser.html',
            controller: 'createUserController',
            controllerAs: 'vm',
            resolve: {
                connected: checkIsConnected
            }
        })
        .when('/liste', {
            templateUrl: 'views/liste.html',
            controller: 'listController',
            controllerAs: 'vm',
            resolve: {
                connected: checkIsConnected
            }
        })

        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginController',
            controllerAs: 'vm'
        })
        .when('/addformation', {
            templateUrl: 'views/addformation.html',
            controller: 'formationController',
            controllerAs: 'vm',
            resolve: {
                connected: checkIsConnected
            }
        })
        .when('/addsaison', {
            templateUrl: 'views/addsaison.html',
            controller: 'saisonController',
            controllerAs: 'vm',
            resolve: {
                connected: checkIsConnected
            }
        })

        .otherwise({
            redirectTo: '/'
        });

    $httpProvider.interceptors.push(($q, $location, $rootScope, $window, sessionFactory) => {
        return {
            request(config) {

                config.headers = config.headers || {};
                if ($window.localStorage.token) {
                    sessionFactory.token = $window.localStorage.token;
                    sessionFactory.user = JSON.parse($window.localStorage.getItem('currentUser'));
                    config.headers.authorization = $window.localStorage.token;
                }
                return config;
            },
            responseError(response) {
                if (response.status === 401 || response.status === 403) {
                    $rootScope.$emit('loginStatusChanged', false);
                    $location.path('/login');
                }
                return $q.reject(response);
            }
        };
    });

};

const loginStatus = ($rootScope, $window, sessionFactory) => {

    if ($window.localStorage.currentUser) {
        sessionFactory.user = JSON.parse($window.localStorage.getItem('currentUser'));
    }

    $rootScope.$on('loginStatusChanged', (event, isLogged) => {
        $window.localStorage.setItem('currentUser', JSON.stringify(sessionFactory.user));
        $window.localStorage.token = sessionFactory.token;
        sessionFactory.isLogged = isLogged;
    });

};

const checkIsConnected = ($q, $http, $location, $window, $rootScope) => {
    let deferred = $q.defer();

    $http.get('/api/loggedin').then(() => {
        $rootScope.$emit('loginStatusChanged', true);
        // Authenticated
        deferred.resolve();
    }).catch(() => {
        $window.localStorage.removeItem('token');
        $window.localStorage.removeItem('currentUser');
        $rootScope.$emit('loginStatusChanged', false);
        // Not Authenticated
        deferred.reject();
        $location.url('/login');
    });

    return deferred.promise;
};
