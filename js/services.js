var BudgetService = app.factory('BudgetService', [function($http)
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

}]);
