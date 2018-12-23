angular.module("todoApp")
    .config(function ($routeProvider) {
        $routeProvider
            .when("/todo", {
                templateUrl: "todo.html",
                controller: "TodoListController",
                controllerAs: "vm"
            })
            .when("/detail/:index", {
                templateUrl: "detail.html",
                controller: "DetailController",
                controllerAs: "vm"
            })
            .otherwise({
                redirectTo: '/todo'
            })
    })