app.controller('MainController', ['$scope', 'BudgetService', function($scope, BudgetService)
{
	$scope.budgetID = 1;
	$scope.title = "";
	$scope.categories = "";
	$scope.expenses = "";
	$scope.income = "";
	$scope.currentDate = new Date();
	
	$scope.init = function()
	{
		//$scope.getBudget();
		$scope.getIncome();
		$scope.getExpense();
		$scope.getCategory();
	}
	
	$scope.getCategory = function()
	{
		BudgetService.getCategories().then(function(data)
		{
			$scope.categories = data;
		});
	}
	
	$scope.postCategory = function()
	{
		BudgetService.postCategories($scope.categoryName);
	}
	
	$scope.postExpense = function()
	{
		BudgetService.postExpenses($scope.expenseName, $scope.expenseDate, $scope.expenseAmount);
	}
	
	$scope.getExpense = function()
	{
		BudgetService.getExpenses($scope.budgetID).then(function(data)
		{
			$scope.expenses = data;
			console.log(data);
		});
	}
	
	$scope.postIncome = function()
	{
		BudgetService.postIncome($scope.incomeName, $scope.incomeDate, $scope.incomeAmount);
	}
	
	$scope.getIncome = function()
	{
		BudgetService.getIncome($scope.budgetID).then(function(data)
		{
			$scope.income = data;
			console.log(data);
		});
	}
	
	$scope.addExpense = function()
	{
		$scope.postExpense();
		$scope.getExpense();
	};
	
	$scope.addIncome = function()
	{
		$scope.postIncome();
		$scope.getIncome();
	};
	
	$scope.addCategory = function()
	{
		$scope.postCategory();
		$scope.getCategory();
	}
	
}]);