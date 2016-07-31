app.controller('MainController', ['$scope', 'RESTService', function($scope, RESTService)
{
	$scope.budgetID = 1;
	$scope.title = "";
	$scope.categories = "";
	$scope.expenses = "";
	$scope.income = "";
	$scope.budgetDays = "";
	$scope.currentDate = new Date();

	$scope.init = function(){
		$scope.getIncome();
		$scope.getExpense();
		$scope.getCategory();
	}

	$scope.getCategory = function(){
		$scope.categories = RESTService.getCategory();
	}

	$scope.postCategory = function(){
		RESTService.postCategory($scope.budgetID, $scope.categoryName);
	}

	$scope.postExpense = function(){
		RESTService.postExpense($scope.budgetID, $scope.expenseName, $scope.expenseDate, $scope.expenseAmount, $scope.expenseCategory.category_id);
	}

	$scope.getExpense = function(){
		$scope.expenses = RESTService.getExpense();
	}

	$scope.postIncome = function(){
		RESTService.postIncome($scope.budgetID, $scope.incomeName, $scope.incomeDate, $scope.incomeAmount, $scope.incomeCategory.category_id);
	}

	$scope.getIncome = function(){
		$scope.income = RESTService.getIncome();
	}

	$scope.addExpense = function(){
		$scope.postExpense();
		$scope.getExpense();
	};

	$scope.addIncome = function(){
		$scope.postIncome();
		$scope.getIncome();
	};

	$scope.addCategory = function(){
		$scope.postCategory();
		$scope.getCategory();
	}

}]);
