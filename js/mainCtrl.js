var app = angular.module('friendsList');
app.controller('mainCtrl', function($scope){
	$scope.friends = ["Michael", "Aaron", "Josh", "Bast"];
	$scope.addFriend = function(){
		if(!$scope.newFriend){
			return;
		};
		$scope.friends.push($scope.newFriend);
		$scope.newFriend = '';
	};
});