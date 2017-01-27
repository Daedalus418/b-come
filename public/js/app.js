angular.module('app', ['ngRoute'])
        .factory('sessionFactory', sessionFactory)
        .service('userService', userService)
        .service('formationService', formationService)
        .service('saisonService', saisonService)
        .controller('navbarController', navbarController)
        .controller('loginController', loginController)
        .controller('listController', listController)
        .controller('profilController', profilController)
        .controller('editUserController', editUserController)
        .controller('createUserController', createUserController)
        .controller('formationController', formationController)
        .controller('saisonController', saisonController)
        .config(routes)
        .run(loginStatus)
        ;

// 588a8d2627e56976a48ecdfd
