app.factory('ExpenseService', ['$http', function($http)
{
	return {
	
		getExpenses : function()
		{
			return $http.get("config/getExpense.php?budgetID=1")
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