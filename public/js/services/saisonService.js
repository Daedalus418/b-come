function saisonService($http) {

    this.$http = $http;

    this.create = (data) => {
        return this.$http.post('/api/saisons', data);
    };

    this.getAll = () => {
      console.log("pass");
        return this.$http.get('/api/saisons');
    };

    this.getOne = (id) => {
        return this.$http.get('/api/saisons/' + id);
    };

    this.update = (id, data) => {
        return this.$http.put('/api/saisons/' + id, data);
    };

    this.delete = (id) => {
        return this.$http.delete('/api/saisons/' + id);
    };

}
