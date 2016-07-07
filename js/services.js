app.factory('ExpenseService', ['$http', function($http)
{
	return {
	
		getExpenses : function(budgetID)
		{
			return $http.get("config/getExpense.php?budgetID=" + budgetID)
				.then(function(result)
				{
					console.log("GET Success!");
					return result.data;
				});
		},
		
		postExpenses : function(expense, date, amount)
		{	
			$http.post("config/postExpense.php", {'expense': expense, 
			'date': date, 'amount': amount})
				.then(function(data, status, headers, config)
				{
					console.log("POST Success!");
				});
		}
	
	}
	
}]);