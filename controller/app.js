var myApp = angular.module("myCalcApp",['ui.router']);

myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

$stateProvider
.state("calc",{
    url:'/calc',
    controller:'myCalcCtrl'
})
.state("add",{
    url:'/add/:a/:b',
    templateUrl:'/public/result.html',
    //template:'<p> {{ operation }} of {{ a }} and {{ b }} = {{ result }} </p>',
    controller:'myAddCtrl'
})
.state("multiply",{
    url:'/multiply/:a/:b',
    templateUrl:'/public/result.html',
    controller:'myMultiplyCtrl'
})

}]);

myApp.controller("myCalcCtrl",function($scope,$state){


    
    $scope.doAdd = function(){

        $state.go('add',{
            a:$scope.num1,
            b:$scope.num2
        });

    }

    $scope.doMultiply = function(){

            $state.go('multiply',{
                 a:$scope.num1,
                 b:$scope.num2
            });

    }

});

myApp.controller("myMultiplyCtrl",function(dataService,$scope,$stateParams){

$scope.operation = "Multiplication"
$scope.a = $stateParams.a;
$scope.b = $stateParams.b;

dataService.getMultiplyResult()
.then(function(response){

    $scope.result = response.data;
})

})
myApp.controller("myAddCtrl",function(dataService,$scope,$stateParams){

$scope.operation = "Sum"
$scope.a = $stateParams.a;
$scope.b = $stateParams.b;


dataService.getAddResult()
.then(function(response){
    $scope.result = response.data;
})


});

myApp.factory('dataService',function($stateParams,$http){
    

    return {

        getAddResult:function(){
            var a = $stateParams.a;
            var b = $stateParams.b;
            return ($http({
                method:'GET',
                url:'/add/' + a + '/' + b
            }))
        },

        getMultiplyResult: function(){
            var a = $stateParams.a;
            var b = $stateParams.b;
             return ($http({
                method:'GET',
                url:'/multiply/' + a + '/' + b
            }))

        }
    }
});

