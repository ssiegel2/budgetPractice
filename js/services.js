app.service('RESTService', function($resource){

	var budgetResource = $resource("api/:table/:id", {tableName: "@table", idNum: "@id"});

	var factory = {};

	factory.getCategory = function(){
		return budgetResource.query({table: 'category'});
	}

	factory.postCategory = function(budgetID, categoryName){
		budgetResource.save(
			{table: 'category', id: budgetID},
			{category_name: categoryName}
		);
	}

	factory.postExpense = function(budgetID, expenseName, expenseDate, expenseAmount, categoryID){
		budgetResource.save(
			{table: 'expense', id: budgetID},
			{expense_name: expenseName, expense_date: expenseDate, expense_amount: expenseAmount, category_id: parseInt(categoryID)}
		)
	}

	factory.getExpense = function(){
		return budgetResource.query({table: 'expense'});
	}

	factory.postIncome = function(budgetID, incomeName, incomeDate, incomeAmount, categoryID){
		budgetResource.save(
			{table: 'income', id: budgetID},
			{income_name: incomeName, income_date: incomeDate, income_amount: incomeAmount, category_id: parseInt(categoryID)}
		)
	}

	factory.getIncome = function(){
		return budgetResource.query({table: 'income'});
	}

	return factory;
});

/*var BudgetService = app.factory('BudgetService', [function($http)
{

	return {

		getCategory : function()
		{
			return $http.get("api/category")
				.then(function(result)
				{
					console.log("GET Success");
					console.log(result);
					return result.data;
				});
		},

		postCategories : function(name)
		{
			$http.post("api/category", {'name' : name})
				.then(function(data, status, headers, config)
				{
					console.log(data);
					console.log("POST Success!");
				});
		},

		getExpenses : function(budgetID)
		{
			return $http.get("api/expense")
				.then(function(result)
				{
					console.log("GET Success!");
					console.log(result);
					return result.data;
				});
		},

		postExpenses : function(categoryID, expense, date, amount)
		{
			$http.post("config/api.php?request=postExpense&budgetID=1", {'categoryID': categoryID ,'expense': expense,
			'date': date, 'amount': amount})
				.then(function(data, status, headers, config)
				{
					console.log(data);
					console.log("POST Success!");
				});
		},

		getIncome : function(budgetID)
		{
			return $http.get("config/api.php?request=getIncome&budgetID=" + budgetID)
				.then(function(result)
				{
					console.log("GET Success!");
					console.log(result);
					return result.data;
				});
		},

		postIncome : function(categoryID, income, date, amount)
		{
			$http.post("config/api.php?request=postIncome&budgetID=1", {'categoryID': categoryID , 'income': income,
			'date': date, 'amount': amount})
				.then(function(data, status, headers, config)
				{
					console.log(data);
					console.log("POST Success!");
				});
		}

	}

}]);*/
