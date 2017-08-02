// Definição da diretiva
angular.module("teste").directive("fpfNavbar", fpfNavbar);

// fpfNavbar
function fpfNavbar() {
    return {
        restrict: "E",
        templateUrl: "app/components/fpfNavbar/fpfNavbar.html"
    }
}
