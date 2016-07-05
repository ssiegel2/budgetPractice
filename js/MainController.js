app.controller('MainController', ['$scope', '$http', function($scope, $http)
{
	$scope.title = "Budget";
	$scope.expenses = "";
	
	$scope.addExpense = function()
	{
		$http.post("config/insert.php", {'expense': $scope.expense, 
		'date': $scope.date, 'amount': $scope.amount})
			.success(function(data, status, headers, config)
			{
				console.log("Success!");
			});
			
		$http.get("config/display.php")
			.success(function(response)
			{
				$scope.expenses = response;
			});
	};
}]);