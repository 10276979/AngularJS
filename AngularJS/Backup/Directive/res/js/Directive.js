var str = [1, 2, 3, 4, 5, 6];
var directiveApp = angular.module("DirectiveApp", []);
directiveApp.directive("hello", function () {
    return {
        restrict: "A",
        templateUrl: "res/page/data.txt",
        //templateUrl: "<div><div class='title {{red}}' ng-click='toggle()' ng-bind='title' ng-mouseenter='bgMove()' ng-mouseleave='removeBg()'></div><div ng-transclude ng-show='isShow'></div></div>",
        replace: true,
        transclude: true,
        link: function (scope, element, attrs) {
            scope.isShow = false;
            scope.toggle = function () {
                scope.isShow = !scope.isShow;
                console.log(scope.isShow);
                if (scope.isShow) {
                    scope.title = "点击隐藏内容";
                } else {
                    scope.title = "点击显示内容";
                }
            };
            scope.bgMove = function () {
                scope.red = "red";
            };
            scope.removeBg = function () {
                scope.red = "";
            }
        }
    };
});
directiveApp.controller("myController", ["$scope", function ($scope) {
    $scope.title = "点击显示内容";
    $scope.things = str;
    $scope.red = "";
    $scope.setData = function () {
        $scope.things = ["改后内容1", "改后内容2", "改后内容3", "改后内容4", "改后内容5", "改后内容6"];
    };
    $scope.redDate = function () {
        $scope.things = str;
    }
}]);