function profilController(userService, $routeParams) {

    this.userService = userService;
    this.userId = $routeParams.id;

        this.load = () => {
            this.userService.getOne(this.userId).then((res) => {
                console.log(res.data);
                this.user = res.data;
            });
        };
    this.load();
}
