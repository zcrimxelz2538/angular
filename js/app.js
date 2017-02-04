var app = angular.module("CSMJU",['ngRoute']);
app.service("mainService",function($http){
	this.getUser = function(){
		return $http.get("http://localhost:1234/users");
	};
});
app.config(function($routeProvider){
	$routeProvider.when("/viewBook",{
		templateUrl: "view.html"
	}).when("/home",{
		templateUrl: "home.html"
	}).when("/addBook",{
		templateUrl: "add.html"
	})
});
app.controller("mainController",function($scope,$location, mainService){
	$scope.myName = "ZcrimXelz";
	$scope.isShow = true;
	$scope.toDay = new Date();
	$scope.sortReverse  = false;
	$scope.getUser = function(){
		mainService.getUser()
		.then(function(response){
			$scope.users = response.data;
		});
	};
	$scope.saveBook = function(data){
		$scope.books.push(data);
		$location.path("/viewBook");
	};
	// $scope.books = [{
	// 	name : "AngularJS",
	// 	price : 299,
	// 	description : "Angular JS Basic",
	// 	stock: true
	// },{
	// 	name : "Go Lang",
	// 	price : 100,
	// 	description : "Go Lang Basic",
	// 	stock: true
	// },{
	// 	name : "Boolean",
	// 	price : 499,
	// 	description : "Boolean Basic",
	// 	stock: false
	// }];
	
	$scope.order = function(users){
		$scope.orderme = users;
	};
});