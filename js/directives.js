app.directive('expense', function() { 
	
	return { 
		restrict: 'E', 
		scope: { 
			info: '=' 
		}, 
		templateUrl: 'js/expense.html' 
	};
	
});

app.directive('budgetDay', function() {

	return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'js/budgetDay.html'
	};
	
});