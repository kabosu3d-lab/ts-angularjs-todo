angular.module("todoApp")
    .controller("DetailController", function ($routeParams, todoService) {
        var vm = this;
        vm.todo = todoService.todoList[$routeParams.index];
    });