app.controller('MainController', ['$scope', 'ExpenseService', function($scope, ExpenseService)
{
	$scope.budgetID = 1;
	$scope.title = "";
	$scope.expenses = "";
	
	$scope.init = function()
	{
		//$scope.getBudget();
		$scope.getExpense();
	}
	
	
	$scope.postExpense = function()
	{
		ExpenseService.postExpenses($scope.expense, $scope.date, $scope.amount);
	}
	
	$scope.getExpense = function()
	{
		ExpenseService.getExpenses().then(function(data)
		{
			$scope.expenses = data;
			console.log(data);
		});
	}
	
	$scope.addExpense = function()
	{
		$scope.postExpense();
		$scope.getExpense();
	};
	
	
	
}]);