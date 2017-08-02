(function () {
  'use strict';

  angular
    .module('teste')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    // Principal
    $stateProvider
      .state('principal', {
        url: '/',
        templateUrl: 'app/principal/principal.html',
        controller: 'PrincipalCtrl',
        controllerAs: 'controller'
      });

    // Detalhar
    $stateProvider
      .state('produtoDetalhar', {
        url: '/produto-detalhar/:id',
        templateUrl: 'app/produto-detalhar/produto-detalhar.html',
        controller: 'DetalharCtrl',
        controllerAs: 'controller'
      });
    // Listagem
    $stateProvider
      .state('produtoListar', {
        url: '/produto-listar',
        templateUrl: 'app/produto-listar/produto-listar.html',
        controller: 'ProdutoListarCtrl',
        controllerAs: 'controller'
    });
    // Cadastrar
    $stateProvider
      .state('produtoCadastrar', {
        url: '/produto-cadastrar',
        templateUrl: 'app/produto-cadastrar/produto-cadastrar.html',
        controller: 'ProdutoCadastrarCtrl',
        controllerAs: 'controller'
    });
    // Editar
    $stateProvider
      .state('produtoEditar', {
        url: '/produto-editar/:id',
        templateUrl: 'app/produto-cadastrar/produto-cadastrar.html',
        controller: 'ProdutoEditarCtrl',
        controllerAs: 'controller'
    });

    $urlRouterProvider.otherwise('/');
  }

})();
