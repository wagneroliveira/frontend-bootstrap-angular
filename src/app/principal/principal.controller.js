angular.module("teste").controller("PrincipalCtrl", PrincipalCtrl);

function PrincipalCtrl($scope, toastr, ProdutoService, $state) {
    var vm = this;
    $scope.produtos = [];

    vm.buscarTodos = function () {
        ProdutoService.buscarTodos().then(function (retorno) {
            $scope.produtos = retorno.data;
        }).catch(function (erro) {
            toastr.error("Ocorreu um erro. Tente novamente.");
        });
    }

    vm.detalhar = function (idProduto) {
        $state.go("produtoDetalhar", { id: idProduto });
    }

    vm.init = function () {
        vm.buscarTodos();
    }

    vm.init();
}