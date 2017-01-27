function saisonService($http) {

    this.$http = $http;

    this.create = (data) => {
        return this.$http.post('/api/saisons/formation', data);
    };

    this.getAll = () => {
      console.log("pass");
        return this.$http.get('/api/saisons/formation');
    };

    this.getOne = (id) => {
        return this.$http.get('/api/saisons/formation' + id);
    };

    this.update = (id, data) => {
        return this.$http.put('/api/saisons/formation' + id, data);
    };

    this.delete = (id) => {
        return this.$http.delete('/api/saisons/formation' + id);
    };

}
