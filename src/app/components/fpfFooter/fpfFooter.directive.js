// Definição da diretiva
angular.module("teste").directive("fpfFooter", fpfFooter);

// fpfFooter
function fpfFooter() {
    return {
        restrict: "E",
        templateUrl: "app/components/fpfFooter/fpfFooter.html"
    }
}
