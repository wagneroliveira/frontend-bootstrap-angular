angular.module("teste").factory("ProdutoService", ProdutoService);

function ProdutoService($http) {
    return {
        buscarTodos: function () {
            return $http.get("http://localhost:8080/produto");
        },
        buscarPorId: function (id) {
            return $http.get("http://localhost:8080/produto/" + id);
        },
        salvar: function (produto) {
            return $http.post("http://localhost:8080/produto", produto);
        },
        atualizar: function (id, produto) {
            return $http.put("http://localhost:8080/produto/" + id, produto);
        },
        excluir: function (id) {
            return $http.delete("http://localhost:8080/produto/" + id);
        }
    }
}