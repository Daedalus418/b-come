function formationService($http) {

    this.$http = $http;

    this.create = (data) => {
        return this.$http.post('/api/formations/formation', data);
    };

    this.getAll = () => {
      console.log("pass");
        return this.$http.get('/api/formations/formation');
    };

    this.getOne = (id) => {
        return this.$http.get('/api/formations/formation' + id);
    };

    this.update = (id, data) => {
        return this.$http.put('/api/formations/formation' + id, data);
    };

    this.delete = (id) => {
        return this.$http.delete('/api/formations/formation' + id);
    };

}
