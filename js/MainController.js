app.controller('MainController', ['$scope', '$http', function($scope, $http)
{
	$scope.title = "Budget";
	$scope.expenses = "";
	
	
	
	$scope.postExpense = function()
	{
		console.log($scope.expense);
		console.log($scope.date);
		console.log($scope.amount);
		
		$http.post("config/insert.php", {'expense': $scope.expense, 
		'date': $scope.date, 'amount': $scope.amount})
			.success(function(data, status, headers, config)
			{
				console.log("POST Success!");
			});
	}
	
	$scope.getExpense = function()
	{
		$http.get("config/display.php?budgetID=1")
			.success(function(response)
			{
				$scope.expenses = response;
				console.log("GET Success!");
			});
	}
	
	$scope.addExpense = function()
	{
		$scope.postExpense();
		$scope.getExpense();
	};
	
	
	
}]);