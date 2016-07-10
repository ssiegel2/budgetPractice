app.factory('BudgetService', ['$http', function($http)
{
	return {
	
		getExpenses : function(budgetID)
		{
			return $http.get("config/api.php?request=getExpense&budgetID=" + budgetID)
				.then(function(result)
				{
					console.log("GET Success!");
					console.log(result);
					return result.data; 
				});
		},
		
		postExpenses : function(expense, date, amount)
		{	
			$http.post("config/api.php?request=postExpense&budgetID=1", {'expense': expense, 
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
		
		postIncome : function(income, date, amount)
		{	
			$http.post("config/api.php?request=postIncome&budgetID=1", {'income': income, 
			'date': date, 'amount': amount})
				.then(function(data, status, headers, config)
				{
					console.log(data);
					console.log("POST Success!");
				});
		}
	
	}
	
}]);