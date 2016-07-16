app.controller('MainController', ['$scope', '$resource', function($scope, $resource)
{
	$scope.budgetID = 1;
	$scope.title = "";
	$scope.categories = "";
	$scope.expenses = "";
	$scope.income = "";
	$scope.budgetDays = "";
	$scope.currentDate = new Date();
	
	var budgetResource = $resource("api/:table/:id", {table: "@table", id: "@id"});
	
	$scope.init = function()
	{
		$scope.getIncome();
		$scope.getExpense();
		$scope.getCategory();
	}
	
	$scope.getCategory = function()
	{
		$scope.categories = budgetResource.query({table: 'category'});
	}
	
	$scope.postCategory = function()
	{
		budgetResource.save(
			{table: 'category', id: $scope.budgetID},
			{category_name: $scope.categoryName}
		);  
	}
	
	$scope.postExpense = function()
	{
		budgetResource.save(
			{table: 'expense', id: $scope.budgetID},
			{expense_name: $scope.expenseName, expense_date: $scope.expenseDate, expense_amount: $scope.expenseAmount, category_id: parseInt($scope.expenseCategory.category_id)}
		)  
	}
	
	$scope.getExpense = function()
	{
		$scope.expenses = budgetResource.query({table: 'expense'});
	}
	
	$scope.postIncome = function()
	{
		budgetResource.save(
			{table: 'income', id: $scope.budgetID},
			{income_name: $scope.incomeName, income_date: $scope.incomeDate, income_amount: $scope.incomeAmount, category_id: parseInt($scope.incomeCategory.category_id)}
		)  
	}
	
	$scope.getIncome = function()
	{
		$scope.income = budgetResource.query({table: 'income'});
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