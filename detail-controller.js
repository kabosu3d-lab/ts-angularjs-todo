var DetailController = /** @class */ (function () {
    function DetailController($routeParams, todoService) {
        this.todo = todoService.todoList[$routeParams.index];
    }
    return DetailController;
}());
angular.module("todoApp")
    .controller("DetailController", DetailController);
