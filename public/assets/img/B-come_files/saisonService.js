function saisonService($http) {

    this.$http = $http;

    this.create = (data) => {
        return this.$http.post('/api/saisons/saison', data);
    };

    this.getAll = () => {
      console.log("pass");
        return this.$http.get('/api/saisons/saison');
    };

    this.getOne = (id) => {
        return this.$http.get('/api/saisons/saison' + id);
    };

    this.update = (id, data) => {
        return this.$http.put('/api/saisons/saison' + id, data);
    };

    this.delete = (id) => {
        return this.$http.delete('/api/saisons/saison' + id);
    };

}
