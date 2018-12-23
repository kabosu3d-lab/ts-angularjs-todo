/** 詳細画面 */
class DetailController {

    /** todo */
    public todo: {
        text: string,
        done: boolean
    };

    constructor($routeParams, todoService) {
        this.todo = todoService.todoList[$routeParams.index];
    }
}

angular.module("todoApp")
    .controller("DetailController", DetailController);