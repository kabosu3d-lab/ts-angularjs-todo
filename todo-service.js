angular.module("todoApp")
    .service("todoService", function () {
        var vm = this;
        vm.todoList = [
            { text: "learn AngularJS", done: true },
            { text: "build an AngularJS app", done: false }];

    });