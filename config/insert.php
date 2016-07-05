<?php
	
	require_once('connect.php');
	
	$data = json_decode(file_get_contents("php://input"), true);
	
	$budgetID = 1;
	$expense = $data['expense'];
	$date = $data['date'];
	$amount = $data['amount'];

	
	$conDB = new DBConnection("localhost", "root", "", "budget");
	$con = $conDB->connect();
	
	$sql = "INSERT INTO expense (budget_id, expense_name, expense_date, expense_amount) VALUES ('".$budgetID."', '".$expense."', '".$date."', '".$amount."')";
	
	if(!mysqli_query($con, $sql))
	{
		echo "Error";
	}
	
	
	mysqli_close($con);
?>